---
url: https://t.co/NwgFbn6kwa
title: "Recursive Language Models: the paradigm of 2026"
clipped: 2026-01-02 20:49
source: browser-history
---

# Recursive Language Models: the paradigm of 2026

> Source: [https://t.co/NwgFbn6kwa](https://t.co/NwgFbn6kwa)

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c75/66239f0441b09824acb92d1f_icon_cross_white.svg)

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c75/66239f0441b09824acb92d1f_icon_cross_white.svg)

[H2 Essay Title](#)

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c7e/695479bb20da4aeb9aaa1ac7_cover_work%20(1).png)

Authors

[Sebastian

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c75/664daabbaf67e75efa9c5e6b_Frame.svg)](https://x.com/omouamoua)

January 1, 2026

# Recursive Language Models: *the* paradigm of 2026

### How we plan to manage extremely long contexts

LLM agents have become significantly more useful over the course of this year. They are now capable of implementing complex changes in large codebases autonomously, often reading and editing dozens of files, searching the web, and maintaining context even over the course of multiple such complex requests.

These capabilities require the use of vast numbers of tokens.

But that, in turn, is difficult for current LLMs: per-token costs rise linearly with the context length, while [the performance of even the best models drops with it](https://nrehiew.github.io/blog/long_context/). A well-known phenomenon at this point is [context rot](https://research.trychroma.com/context-rot), the reduction of LLM capabilities as contexts grow in size. And even though changes to architecture and training data have caused, and will continue to cause, much progress to address these challenges, there is one thing that is complementary to both, and has consistently been a huge multiplier to LLMs’ effective context length: scaffolding.

Claude Code, OpenAI's Codex, and similar TUI systems tend to use file-systems and context compression by LLM summarization at regular intervals as the basis of their scaffolding. This effectively leads to a succession of agents, all connected to each other by a prompt and the state of some set of files.

A different approach to the context problem is "context folding". Its goal is to have a continual, growing rollout, while managing the context window itself (instead of external files) in order to keep it short. This is compatible with the file-based scaffolding, as an LLM using context folding looks just like a normal LLM from the outside, and thus, it is a way to further prevent context rot and manage costs. Some examples are:

* [Scaling Long-Horizon LLM Agent via Context-Folding](http://arxiv.org/abs/2510.11967): the agent can actively `branch` its rollout, and `return` from the branch; within the branch, it retains the full previous context, but after returning, only a self-chosen summary of the branch remains in the context window
* [AgentFold: Long-Horizon Web Agents with Proactive Context Management](http://arxiv.org/abs/2510.24699): every one of the agent's actions produces both a result, and a summary of the action and the reasoning that led to it. These summaries can be hierarchical, consolidating the lessons from multiple actions into a single point, or retaining per-action summaries
* [Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](http://arxiv.org/abs/2510.04618): a three-agent system with a Generator that uses the current knowledge base for creating the rollout, a Reflector which takes lessons and information about the generation and about the current state of the knowledge base, and a Curator for taking the Reflector's lessons and adapting the knowledge base with them in a structured manner

However, we at [Prime Intellect](https://www.primeintellect.ai/) believe that the simplest, most flexible method for context folding is the Recursive Language Model (RLM), introduced by Alex Zhang in October 2025 as a [blog post](https://alexzhang13.github.io/blog/2025/rlm/), and now available as a full paper: <https://arxiv.org/abs/2512.24601>. It is now a major focus of our research.

The RLM allows the model to actively manage its own context. This approach is more in line with [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) than the ones presented before; it enables training directly with the RLM scaffolding and getting better and better, learned context folding; and it never actually summarizes context, which leads to information loss. Instead, it pro-actively delegates context to Python scripts and sub-LLMs.

We believe that teaching models to manage their own context end-to-end through reinforcement learning will be the next major breakthrough, enabling agents to solve long-horizon tasks spanning weeks to months.

In this article, we share our initial ablations with the RLM scaffolding on existing models called through APIs. In future work, we will be scaling the training of the RLM on environments that reward effective very long-horizon reasoning.

## The RLM

Rather than directly ingesting its (potentially large) input data, the RLM allows an LLM to use a persistent Python REPL to inspect and transform its input data, and to call sub-LLMs from within that Python REPL.

![](https://cdn.prod.website-files.com/66239f0441b09824acb92c7e/69547363bbe8773f072cdd0b_rlm.png)

This enables several nice capabilities:

* Potentially huge input data, like PDFs or Datasets or videos, doesn't have to be loaded directly into a model's context, which makes the LLM leaner and avoids context rot
* The LLM can search, filter, and transform the context using Python functionality, avoiding the need to process redundant input
* It can use sub-LLMs--fresh instances of itself--to perform work for it, and programmatically pipe parts of the input data into them

These skills combined make it a great candidate for situations that typically require large context sizes.

We at Prime Intellect have implemented our version of the RLM in [verifiers](https://github.com/PrimeIntellect-ai/verifiers/) so that it is ready to be used in any environment—we do provide [several RLM-based environments on the Environments Hub](https://app.primeintellect.ai/dashboard/environments?ex_sort=by_sections&ex_q=rlm)—and for training with [prime-rl](https://github.com/PrimeIntellect-ai/prime-rl/). It is still an experimental work-in-progress, but we have already added our own flavor to it.

The two most important changes required to understand the rest of the article are (1) that tools beyond the Python REPL can be used, but only by sub-LLMs; and (2) that the model can only provide its answer via an environment variable. The details are as follows:

* The sub-LLM calls can be parallelized
  + The model has an `llm_batch` function available in the REPL, through which it can process a batch of prompts in parallel
* The sub-LLMs can be given tools
  + In fact, any tools you give the environment will only be usable by the sub-LLMs
  + This decision was made because many tools produce a lot of tokens. Now, the main RLM doesn't have to see those tokens, and can instead delegate the work that requires tools
  + As shown below, this strategy is very successful in our tests
* Any pip package can be installed
  + The RLM is made aware of which packages are installed
  + In math-python, for example, `numpy`, `scipy`, and `sympy` were installed
  + The standard library is always available
  + Code execution happens in isolated [Sandboxes](https://docs.primeintellect.ai/sandboxes/overview)
* The RLM only ever provides an answer in a Python variable
  + An `answer` variable is initialized at the start of each Sandbox running the Python code; it's a dictionary with two keys:
    - `"content"`: The LLM can write into this as often as it wants, and it can delete or edit the content over multiple turns
    - `"ready"`: Only when this is set to `True` will the rollout end, and the answer be extracted from `"content"`
  + At the start of each rollout, `answer = {"content": "", ready: False}`
  + This setup allows the model to generate its final answer via a form of diffusion, which occurs over the course of its reasoning chain

In our current implementation, both a prompt and extra input data can be given. The prompt is put directly into the RLM's context window, while the extra input data is available only programmatically. The only way for the RLM to view that data is to print it in the REPL. But since we limit the number of output characters from the REPL output that will be shown to the RLM in each turn (to 8192 by default, user-adjustable), the RLM is forced to make use of Python and sub-LLMs to work with input data.

Taking it all together, the RLM is powerful long-context agent, strong at tool-use, and extremely flexible. It is perfect for a world in which context is a sparse resource.

## Experimental setup

The basic setup of all our experiments is to compare three scaffolds for the same environment:

* A standard LLM with whatever tools the environment normally provides
* The RLM
* The RLM with environment-specific tips (which will be explained later)

This tells us how a normal LLM compares to an RLM, and to an RLM that knows how its scaffold is best used in the given environment. We directly compare to an LLM because at its core, an RLM is an abstraction around a single LLM call.

The RLM is limited in its per-REPL-call timeout, which we set to 120 seconds unless stated otherwise. This helps when the RLM writes inefficient code, but also limits its use of sub-LLM calls.

### Environments

The environments we chose are:

* DeepDive
* math-python
* Oolong
* verbatim-copy

We perform ablations on them using default settings (which were chosen before doing any experiments), and also ablate environment settings for Oolong and verbatim-copy.

Let's go through what they do and why we looked at them one by one.

### DeepDive

[DeepDive](http://arxiv.org/abs/2509.10446) is a method for gathering data for Deep Research tasks by walking open knowledge graphs to create complex questions and verifiable answers, then obfuscating the questions via LLM re-formulation. A [GitHub repo](https://github.com/THUDM/DeepDive) and a [HuggingFace dataset](https://huggingface.co/datasets/zai-org/DeepDive) exist.

* [The version of DeepDive used for these experiments](https://github.com/PrimeIntellect-ai/verifiers/tree/sebastian/experiment/rlm/environments/deepdive)
* [deepdive-rlm on the Environments Hub](https://app.primeintellect.ai/dashboard/environments/primeintellect/deepdive-rlm)

Some examples:

| Question | Answer |
| --- | --- |
| In 2011, a study emerged from a Sicilian university department focused on pharmaceutical sciences, delving into the physical form of crystals. This work specifically examined how atomic-level forces dictate the overall shape, or habit, of a well-known butyrophenone antipsychotic. It employed molecular mechanics and modelling, validated against X-ray powder diffraction data, to understand this structure-morphology link crucial for drug formulation, like tableting. The investigation involved researchers whose other contributions span sigma receptor agonists for neuroprotection, inhibitors targeting fatty acid binding proteins relevant to metabolic conditions, and modulators of aldose reductase implicated in inflammation. What is the precise title of this 2011 publication that connects molecular interactions to the crystal appearance of haloperidol? | How Molecular Interactions Affect Crystal Morphology: the Case of Haloperidol. |
| Begin with an educational institution in a major coastal city of a West African nation, founded after a specific official body suggested its creation for advanced studies in commerce. A notable academic from its faculty, recognized by a moniker tied to the institution's main campus area and distinguished for being the first from his continent to receive a particular advanced scientific degree in engineering from a London college at an early age, later became a vocal critic during a subsequent period of his country's democratic governance. This democratic period, which succeeded military leadership and adopted a system of rule similar to that of a large North American nation, saw the election of a head of state. This head of state initiated a nationwide agricultural enhancement program sometimes referred to by a colorful name, before being overthrown in a military takeover on the final day of a calendar year. A medical professional specializing in cardiac care, who also meticulously documented his nation's military interventions, provided a detailed account of this particular overthrow. What is the full date of birth (Month Day, Year) of this medical professional and historian? | March 28, 1959 |

To solve such problems, the models have three tools available to them:

* `search(query: str)`; use Google via [Serper](https://serper.dev/). Returns an enumerated list of Google results and the corresponding URL
* `click(index: int)`; "click" on one of the results from the previous search by providing the list-index
* `open(url: str)`; open the given URL

These three tools are what's used in the original paper. However, `open` and `click` are redundant, and `open` is the more general tool. Since `click` requires not only the agent but the function itself to have knowledge of the previous `search` outputs, which is currently difficult to achieve in the RLM, we provided neither the RLM nor the standard agent with the `click` tool.

*Why DeepDive?*

DeepDive requires strong tool-use. It's tools also produce many tokens, `open` can produce tens of thousands of tokens (and that is with truncation, without that we've seen 1.5 million tokens and more). The tasks also often involve many subsequent tool-calls. Therefore, DeepDive tests how well the model using the RLM harness can make use of sub-LLMs with tools, how strongly that impacts the main RLM's context length, and at what cost in parallel sub-LLM calls.

Additionally, there is no extra input data for the RLM to use, so this environment tests the RLM's ability to work like a normal LLM, which is exactly what it looks like from the outside.

*Environment tips for DeepDive*

`` _ENV_TIPS = """  
  
<env_tips>  
Strategy for deep research tasks:  
  
1. **Decompose the question**: Break the main question into multiple smaller, focused research sub-tasks that can be investigated independently.  
  
2. **Parallel sub-LLM research**: Use `llm_batch()` to dispatch these sub-tasks in parallel. Each sub-LLM has access to web search tools (search, open) and can:  
- Search for relevant information  
- Open promising results to read full content  
- Extract and summarize key facts  
  
2. **Synthesize findings**: After collecting sub-LLM responses, combine and cross-reference their findings. Look for:  
- Consistent facts across sources (high confidence)  
- Contradictions that need resolution  
- Gaps that require follow-up research  
  
3. **Iterate if needed**: If the initial research reveals new questions or missing information, dispatch another batch of targeted sub-tasks. Repeat until you have suffic

[... truncated ...]