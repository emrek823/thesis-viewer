---
url: https://t.co/6F1zGXX3m6
title: "Building the Proactive, Multi-Agent Architecture Powering Scouts | Yutori — AI agents for everyday digital tasks"
clipped: 2026-01-06 15:21
source: browser-history
---

# Building the Proactive, Multi-Agent Architecture Powering Scouts | Yutori — AI agents for everyday digital tasks

> Source: [https://t.co/6F1zGXX3m6](https://t.co/6F1zGXX3m6)

# Building the proactive, multi-agent architecture powering Scouts

By the Yutori team on December 22, 2025

![Lighthouse surrounded by server buildings in a digital ocean](/_next/image?url=%2Fblog%2Fbuilding-the-proactive-multi-agent-architecture-powering-scouts%2Flighthouse.png&w=3840&q=75)

[Scouts](https://yutori.com/) are proactive, always-on AI agents that monitor the web — for news, price drops, reservations, tickets, leads — anything you care about.

To get timely, comprehensive coverage of information across the long tail of the web, an average Scout run invokes 76 agents across a wide variety of tools, and processes ~1M tokens. It is available via our [API](https://yutori.com/api) at 35 cents per run. The Claude Code query to extract this stat from our database cost us 64 cents (!).

Besides the per-run costs, the proactive, always-on nature of Scouts creates design challenges that don't exist in reactive, one-off agents. Scouts must be effective at managing large contexts. They scan the entire web for information — for days, weeks, sometimes [months](https://scouts.yutori.com/8b34bf71-cb98-4f06-95a3-524c86212270) on end — and then all previous reports to not report stale or duplicate content. They must also be adaptable to a dynamic web and changing user preferences.

In this post, we share the principles we arrived at as we took Scouts from research to production — the architectural decisions that make continuous monitoring practical, the pitfalls we encountered, and how we balanced quality with cost.

Powering Scouts is a multi-agent architecture that required careful engineering of context, tools, and infrastructure — combined with a [state-of-the-art web navigation agent](https://yutori.com/blog/introducing-navigator) to access the heavy tail of the web that doesn't have APIs.

## Table of Contents

* [Distribute the work across multiple specialized subagents](#distribute-the-work-across-multiple-specialized-subagents)
* [Design for coverage and persistence](#design-for-coverage-and-persistence)
  + [Fan-out search with subagents](#fan-out-search-with-subagents)
  + [Enrich the intent](#enrich-the-intent)
  + [Ask agents to be persistent](#ask-agents-to-be-persistent)
* [Tell your agents what tools they can access and when to use them](#tell-your-agents-what-tools-they-can-access-and-when-to-use-them)
* [Don't assume credibility; teach your model to fact check](#dont-assume-credibility-teach-your-model-to-fact-check)
* [Let the agent extract feedback from every user interaction](#let-the-agent-extract-feedback-from-every-user-interaction)
* [Prepending past reports in context leads to drift towards them](#prepending-past-reports-in-context-leads-to-drift-towards-them)
  + [The trap: "Just paste the old report at the top"](#the-trap-just-paste-the-old-report-at-the-top)
  + [Use iterative keyword search on the report archive](#use-iterative-keyword-search-on-the-report-archive)
* [Putting it all together](#putting-it-all-together)

## Distribute the work across multiple specialized subagents

The first and simplest version we built used a single agent to handle the entire pipeline — from understanding user intent to calling tools, verifying results, checking for duplicates against past reports, and drafting new reports — following the "get out of the model's way" principle.

[![](/blog/building-the-proactive-multi-agent-architecture-powering-scouts/videos/replay-demo-poster.jpg)](/blog/building-the-proactive-multi-agent-architecture-powering-scouts/videos/replay-demo.webm)

*Scouting for rental properties in Seattle.*

However, cramming all tokens into the context of a single model quickly runs into issues:

* All tool results don't fit into the model's context
* Performance degrades as more tool responses are added to the context
* Even if everything fit in context, the costs for simple tasks make real-world usage prohibitive

We found that a modular architecture with specialized *subagents,* each with its own tools tailored to a specific subtask, and an *orchestrator* with access to the full task context directing them, simply scales better.

This architecture enables:

1. **Spending more tokens without blowing up context.** Each subagent tackles a focused subtask with only the relevant context, spending more tokens across them all than any single agent could carry.
2. **Separation of concerns.** Having distinct subagents for each role enables us to optimize each independently (similar to [microservices in software 1.0](http://2012.33degree.org/talk/show/67)). Subagents prioritize recall, calling multiple tools and checking numerous sources for coverage, while the orchestrator focuses on precision, filtering for relevance. The result is a system where you get both breadth and accuracy.
3. **Managing intelligence intelligently.** A multi-agent system enables splitting context not just by task, but also by the level of intelligence needed for each task. E.g. fetching the top posts from a subreddit or extracting pricing from a product listing page doesn't require sophisticated reasoning, so these simpler operations can be routed to faster, more cost-effective models.

We note that coordinating across subagents does introduce *some* overhead. Agents need to communicate, passing relevant context to each other for their respective subtasks. At the same time, with every round of message passing, [information degrades](https://en.wikipedia.org/wiki/Data_processing_inequality) (akin to the [telephone game](https://en.wikipedia.org/wiki/Telephone_game)) — context gets lost, facts become misrepresented, unsubstantiated claims leak into the final report. Balancing communication overhead with context management will vary depending on your use case.

A popular approach to context-engineering is context compression. It also introduces trade-offs (e.g., cache misses) and getting it right is non-trivial. Once we adopted the multi-agent architecture and carefully optimized the context, compression was no longer necessary.

---

## Design for coverage and persistence

Consider the following Scouts query:

"Monitor new technical blog posts, research papers and technical discussions on social media relevant to computer and browser use models."

### Fan-out search with subagents

The orchestrator breaks this down and assigns it to separate subagents — one for searching social media, another for searching academic journals, etc. Each subagent explores in parallel with its own tooling. Fan-out search improves coverage substantially by expanding the number of tools and sources explored in a Scout run.

### Enrich the intent

The orchestrator also translates the user's query into [imperative](https://en.wikipedia.org/wiki/Imperative_programming) step-by-step instructions for the subagents, enriched with time bounds, content categories, quality constraints, and concrete deliverables.

In instances where the user's query may be ambiguous, the orchestrator may invoke multiple subagents (to span multiple modes), each with its own enriched context.

For the example above, the orchestrator provides the following context to the web-search subagent:

Query sent to web search agent

```
Search for recent technical blog posts and research papers about computer use models and browser use models published in the past 7 days (on or after December 12, 2025).

**CRITICAL:** Only include information published on or after December 12, 2025. Discard anything older.

**Sources to check:**

- Google search with date filter for past 7 days
- ArXiv for recent research papers
- Medium, Dev.to, and technical blogs
- Company technical blogs (Google, Mozilla, Microsoft, etc.)

**Todo list:**

1. Search for "computer use models" OR "browser use models" with date filter (past 7 days)
2. Search for "AI browser automation" OR "browser agents" with date filter
3. Search ArXiv for papers on browser use, computer use, or agent models
4. Search for "LLM browser interaction" OR "multimodal agents" with date filter

**Deliverables:**

- For each blog post/article: Title, publication date (YYYY-MM-DD), source/publication, URL, brief summary of what it discusses
- For each research paper: Title, authors, publication date, ArXiv link, brief summary
- Only include items published on or after December 12, 2025
- Format as a structured list with clear dates and sources
```

The resulting context for the subagent is longer, more structured, and operationally explicit — resulting in higher quality responses. In practice, the difference is stark:

* **Without intent enrichment:** The response is unstructured with missing citations, publication dates and low recall (6 results found, most of which are outdated or only tangentially relevant).
* **With intent enrichment:** The response is structured with complete citations, publication dates and summaries, uncovering 14 results — most of which are highly relevant and recent, and the rest are filtered out by the orchestrator.

Query and response of web search agent without intent enrichment

```
>>> Subagent query

Monitor new technical blog posts, research papers and technical discussions on social media relevant to computer and browser use models. Only include information published on or after December 12, 2025.

>>> Subagent response

### Comprehensive Report on Technical Developments in Computer and Browser Use Models (Published on or after December 12, 2025)

This report details verified technical developments in computer use models and browser use models published on or after December 12, 2025, based on exhaustive web research. All information is sourced from primary publications and official documentation.

#### 1. Google's Gemini 2.5 Computer Use Model (Official Documentation)

The most significant and verified development is the official documentation for the Gemini 2.5 Computer Use model, which was last updated on December 18, 2025.

*   **Model ID:** `gemini-2.5-computer-use-preview-10-2025`
*   **Core Functionality:** This model enables AI agents to interact with computer interfaces by analyzing screenshots and generating precise UI actions. It can "see" a screen and "act" by performing actions like clicking, typing, scrolling, and navigating web browsers.
*   **Supported Actions:** The model can request 13 specific UI actions via its API, including `click_at`, `type_text_at`, `navigate`, `scroll_document`, `drag_and_drop`, and `open_web_browser`. Developers must implement client-side logic to execute these actions.
*   **Technical Specifications:** The model supports an input token limit of 128,000 and an output token limit of 64,000. It accepts image and text inputs and generates text outputs.
*   **Availability:** The model is available to developers through the Gemini API via Google AI Studio and Vertex AI.
*   **Critical Requirements and Limitations:** As a preview model, it is explicitly labeled as potentially prone to errors and security vulnerabilities. Google mandates that agents be run in secure, sandboxed environments. Developers must implement robust safety measures, including user confirmation for high-risk actions (e.g., purchases), input sanitization, and content guardrails. The model is primarily optimized for web browsers and is not yet designed for full desktop OS-level control. A recommended screen resolution of (1440, 900) is advised for optimal performance.

#### 2. Microsoft's Fara-7B: An Efficient Agentic Model for Computer Use

Microsoft Research published a detailed blog post on November 24, 2025, introducing Fara-7B, an open-weight, 7-billion parameter model designed for computer use.

*   **Architecture:** Fara-7B is built on the Qwen2.5-VL-7B base model. It operates as a single, native agent that perceives the computer environment solely through screenshots of the browser window, without relying on accessibility trees or other metadata.
*   **Training Methodology:** The model was trained on synthetic data generated by a novel system called FaraGen, which creates diverse, verified multi-step web task trajectories at a low cost.
*   **Capabilities:** Fara-7B can automate everyday web tasks by visually perceiving a webpage and executing actions like scrolling, typing, and clicking on predicted coordinates. It uses standard browser automation tools (e.g., Playwright) for these actions.
*   **Performance:** Fara-7B achieves state-of-the-art performance within its size class (7B parameters) and is competitive with larger models. On the WebVoyager benchmark, it achieved a 73.5% task success rate, outperforming UI-TARS-1.5-7B (66.4%) and GPT-4o (65.1%). On a new benchmark, WebTailBench, it achieved a 38.4% success rate, surpassing GPT-4o (30.0%).
*   **Availability:** The model is open-weight and available under an MIT license on Microsoft Foundry and Hugging Face.

#### 3. Browser-Use: Open-Source AI Agent for Web Automation

The Browser-Use project, an open-source framework for AI-driven web automation, has been actively developed, with its latest release occurring on December 17, 2025.

*   **Core Functionality:** Browser-Use is a Python library that enables AI agents to control web browsers using Large Language Models (LLMs). It combines visual recognition (via screenshots) with browser automation tools like Playwright to perform tasks like form filling, data extraction, and multi-step workflows.
*   **Supported LLMs:** The project supports a variety of LLM providers, including OpenAI, Anthropic, Google, and its own optimized model, `ChatBrowserUse`. It also supports local models via Ollama.
*   **Key Features:** It offers a cloud service for scalable, stealth-enabled browser automation, handles authentication via real browser profiles, and provides ready-to-run templates for quick deployment. The project emphasizes making websites accessible for AI agents.
*   **Status:** The project is actively maintained, with its latest code commit and release occurring on December 17, 2025, confirming its relevance to the specified date range.

#### 4. Other Relevant Technical Developments

*   **BRAID: Bounded Reasoning for Autonomous Inference and Decisions:** A paper published on arXiv on December 17, 2025, introduces BRAID, a framework for structured prompting of LLMs using instruction graphs (Mermaid-based). While not a browser use model, it is a significant advancement in LLM reasoning efficiency that can be applied to improve the performance and reliability of computer use agents by enabling more structured, cost-efficient, and accurate decision-making.
*   **CSS Grid Lanes:** A blog post from WebKit on December 19, 2025, introduced CSS Grid Lanes, a new CSS feature for creating masonry-style layouts. While not an AI model, this is a critical advancement in web development technology that directly impacts the structure and layout of web pages that browser use models must interact with, potentially simplifying the task of element detection and interaction for these agents.
*   **GotaTun:** 

[... truncated ...]