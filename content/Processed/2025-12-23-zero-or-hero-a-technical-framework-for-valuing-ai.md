---
url: https://open.substack.com/pub/leonisnewsletter/p/zero-or-hero-a-technical-framework-6e8?r=kmfsl&amp;utm_medium=ios
title: "Zero or Hero: A Technical Framework for Valuing AI Companies (Part II: AI Applications)"
clipped: 2025-12-23 13:00
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Zero or Hero: A Technical Framework for Valuing AI Companies (Part II: AI Applications)

> Source: [https://open.substack.com/pub/leonisnewsletter/p/zero-or-hero-a-technical-framework-6e8?r=kmfsl&amp;utm_medium=ios](https://open.substack.com/pub/leonisnewsletter/p/zero-or-hero-a-technical-framework-6e8?r=kmfsl&amp;utm_medium=ios)

# Zero or Hero: A Technical Framework for Valuing AI Companies (Part II: AI Applications)

### Why Vertical AI Apps Will Survive (But Horizontal Ones Might Collapse to Zero)

[![Jenny Xiao's avatar](https://substackcdn.com/image/fetch/$s_!XQfC!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc9676ba-b587-4923-b92b-d757cbb483ee_144x144.png)](https://substack.com/@jennyxiao)[![LJW's avatar](https://substackcdn.com/image/fetch/$s_!aea_!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F627f4764-3255-4a25-8852-11c957edc695_1080x1080.png)](https://substack.com/@whattheljw)[![Jay Zhao's avatar](https://substackcdn.com/image/fetch/$s_!8yxE!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7a6a670e-a654-4fd0-ac31-a4d85e636e4b_660x495.jpeg)](https://substack.com/@nexttrillion)

[Jenny Xiao](https://substack.com/@jennyxiao), [LJW](https://substack.com/@whattheljw), and [Jay Zhao](https://substack.com/@nexttrillion)

Apr 22, 2025

39

4

5

Share

In March 2025, OpenAI's upgraded 4o model took the internet by storm with its enhanced image generation capabilities. Users worldwide flocked to create remixes in various artistic styles, including those inspired by Studio Ghibli, the renowned Japanese animation studio. In total, users generated over [700 million images](https://techcrunch.com/2025/04/03/chatgpt-users-have-generated-over-700m-images-since-last-week-openai-says/) in just the first week. This viral phenomenon instantly placed leading image generation companies like Midjourney in a fight for relevance. And as history has shown, competitors are likely not far behind OpenAI in releasing similar capabilities. Because foundation model companies are locked in a hyper-competitive race, they likely won't stop at image generation either. OpenAI has already released [audio generation features](https://openai.com/index/introducing-our-next-generation-audio-models/) through its API, and it's only a matter of time before it makes these capabilities available to users through ChatGPT. All of this begs the question: **Is there a need for specialized AI applications when foundation models offer similar features and much more?**

In [Part I](https://leonisnewsletter.substack.com/p/zero-or-hero-a-technical-framework), we introduced the "zero-value threshold" principle, where if crossed, the value of a foundation model or application collapses to zero. This principle is especially critical for AI applications, which face the unique risk of being cannibalized by the very platforms they're built upon. We've repeatedly witnessed foundation models wipe out entire categories of AI applications simply by releasing features that users can access natively in a foundational model's interface.

**Application-level AI startups face dual threats.** They face risks from foundation models expanding vertically, integrating new features like image generation or domain-specific reasoning that were once the selling point of standalone applications. They also face horizontal threats from other application startups that expand into their industry. As the cost of code goes to zero, it is much easier for companies to reach feature parity and much harder to build a moat around single features.

In Part II of this valuation series, we analyze what types of features are most vulnerable to absorption and why certain positioning strategies prove more resilient than others. We highlight how, for an AI application to build a sustainable moat, there is an inverse relationship between the total addressable market (TAM) and the sustainability of the value they generate, and explain why targeting seemingly niche vertical markets (at least to start) often fares better against displacement risk. We also explore how moats evolve across different stages of a startup's lifecycle and how this impacts displacement risk in the broader context of our valuation framework.

## The Obsolescence Cycle: When Your Product Becomes a Feature

A pattern of obsolescence emerges where AI startups lose ground to foundation model improvements. This "obsolescence cycle" looks something like this: an AI product initially captures attention with a novel use case like advanced summarization or a specialized image style. Then, a major LLM release arrives with upgrades that match or surpass the specialized offering. Almost overnight, that once-exciting product becomes just another "feature" of the new base model. Users begin to question the value of a standalone solution, churn accelerates, and the application's valuation ultimately plummets. This isn't a new phenomenon; we've seen it happen to companies like [Jasper](https://voicebot.ai/2023/07/17/jasper-ai-laying-off-staff-9-months-after-125m-raise/), and this phenomenon is accelerating at breakneck speed.

[![](https://substackcdn.com/image/fetch/$s_!9hIG!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb837a4c6-1fd9-4253-a98d-fc2aadb89007_7702x4236.png)](https://substackcdn.com/image/fetch/$s_!9hIG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb837a4c6-1fd9-4253-a98d-fc2aadb89007_7702x4236.png)

Figure 1: AI applications face the threat of absorption by foundation models, but foundation models also face a domain-specific performance ceiling.

Today, this pattern is playing out in multiple industries. In March 2025, Anthropic released [Claude Code,](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) its coding agent that developers can delegate tasks to in natural language within the terminal. Claude Code has quickly become one of the go-to tools for non-technical "vibe coders." Although Claude Code today doesn't challenge Cursor's grip in the developer market, its agentic capabilities put traditional AI coding assistants at risk.

Similarly, in AI-powered search, multiple foundation model companies like OpenAI, Grok, and Google have rolled out search functionality. All of this increases pressure on AI-powered search applications like Perplexity and renders AI search a commodity feature. Each new foundation model feature set pushes another class of single‑purpose apps toward the zero‑value threshold, underscoring how little time application‑layer startups have to convert a clever feature into a durable moat.

Enjoy our analysis? Share it with your friends and colleagues!

[Share](https://leonisnewsletter.substack.com/p/zero-or-hero-a-technical-framework-6e8?utm_source=substack&utm_medium=email&utm_content=share&action=share)

## Absorption Risk: Which Features Get Consumed First?

Not all AI application features face the same absorption risk by foundation models. The speed at which foundation models integrate specialized features varies based primarily on two factors: **how verticalized a feature is and how technically complex it is to build it**.

[![](https://substackcdn.com/image/fetch/$s_!jq6t!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F89bfdb61-5d08-4486-ae5f-02ea324217e2_6359x3746.png)](https://substackcdn.com/image/fetch/$s_!jq6t!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F89bfdb61-5d08-4486-ae5f-02ea324217e2_6359x3746.png)

Figure 2: A 2x2 map of the absorption risk of different AI applications.

When we map these dimensions, four distinct categories of absorption risk emerge:

* **Zone 1: High-Risk [Horizontal, Technically Simple]** This quadrant faces the highest and fastest absorption risk. Foundation models prioritize these features because they're in high demand and relatively straightforward to implement. The absorption cycle is rapid: foundation models first match the feature's core functionality, then match its quality, and finally exceed it while offering additional capabilities at a fraction of the cost. *Examples:* Basic text generation, simple image editing, content summarization, simple language translation, and generic chatbots. For example, Jasper's core marketing copy generation fell squarely in this zone, explaining why it quickly found itself outcompeted by foundation models.
* **Zone 2: Medium-High Risk [Vertical, Technically Simple]** These applications serve specialized audiences with straightforward implementations. Their survival depends on how quickly the vertical grows in importance, as foundation models tend to prioritize features with broader appeal first. However, their technical simplicity means they can be quickly absorbed once targeted. *Examples:* Domain-specific chatbots, industry-focused content retrieval tools, specialized data extraction tools, and vertical-specific simple workflow builders. These applications often fly under the radar until their market grows large enough to attract attention. Unfortunately, most of the vertical AI applications today fall into this category. They might generate ARR quickly but face a serious threat of commoditization.
* **Zone 3: Medium-Risk [Horizontal, Technically Complex]** These features are in high demand but require specialized expertise or significant computing resources to execute well. While foundation models actively target these capabilities due to market demand, the technical barriers provide AI applications a longer runway to establish differentiation. *Examples:* Two clear cases are Cursor, which tackles advanced code generation inside the IDE, and Perplexity, which combines retrieval with live LLM summarization for AI‑powered search. Both generated traction initially because foundation models could not immediately match their depth of features, but their lead is quickly shrinking. When comparing Zone 2 to Zone 3, technical complexity is more defensible than a vertical application that is technically simple.
* **Zone 4: Lower-Risk [Vertical, Technically Complex]** Applications combining specialized domain knowledge with technical sophistication have the strongest defenses against foundation model absorption risk. These typically involve unique data assets, specialized workflows, or human-in-the-loop processes that can't be easily replicated. *Examples:* Two standout examples are Harvey,[1](https://leonisnewsletter.substack.com/p/zero-or-hero-a-technical-framework-6e8?r=kmfsl&amp%3Butm_medium=ios&triedRedirect=true#footnote-1-161854388) which embeds legal reasoning and firm‑specific knowledge into case preparation workflows, and Hippocratic AI, whose clinically validated, voice‑based agents must satisfy rigorous healthcare‑safety and compliance standards. Both products operate in domains where accuracy, liability, and regulation create barriers that a general‑purpose LLM cannot quickly clear. When comparing Zone 3 and Zone 4, Zone 3's end outcome is likely being acquired by a foundation model company (e.g., OpenAI's buying Windsurf), whereas for Zone 4, they lose if there is another more specialized application that can do the same as the existing app but adds something incremental.

This absorption pattern is not static, and features can constantly shift positions on this 2x2 as foundation models evolve and markets change. What was technically complex yesterday can become simple today, and niche markets can suddenly become popular targets.

Today, Anthropic's Model Context Protocol (MCP) represents one of the most significant developments accelerating the obsolescence cycle for many AI applications. MCP changes how foundation models interact with external data, tools, and specialized capabilities. Before MCP, AI applications could build moats around their ability to bridge between LLMs and external capabilities, whether database access, specialized API calls, or tool integration. MCP effectively standardizes this connection layer, providing foundation models with a universal interface to access various tools and data sources.

With MCP making tool integration a commodity, AI startups must shift their focus from merely *connecting* models to *building* domain‑specific tools and workflows that keep their edge even when accessed through a shared protocol. Real defensibility now lies in mastering the “last mile,” the messy edge‑cases, compliance rules, proprietary data, and deep workflow integration that a generic model, no matter how well wired‑up, still can’t handle. And **that’s precisely why, in a world where horizontal features can be copied overnight, the strongest moat comes from going deep in a narrow vertical,** a dynamic we’ll explore next.

## The Inverse Scale Law: Why Vertical Often Beats Horizontal

Traditional SaaS wisdom celebrates scale; the larger your total addressable market (TAM), the greater your growth potential and valuation. The underlying logic is that a bigger TAM typically translates into a wider pool of potential customers, accelerates revenue growth, and attracts more capital. But in the AI application landscape, this formula inverts. Broad horizontal solutions targeting general business functions across industries (like marketing, sales, or customer service) are usually the first to be subsumed by next-generation foundation models. If your application attempts to serve everyone, it becomes increasingly vulnerable to improved LLM releases that can replicate its core functionality overnight. As a result, narrowing your focus often provides a more defensible foundation for building a sustainable moat.

[![](https://substackcdn.com/image/fetch/$s_!sj_U!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2cd4de4a-b362-46ed-bf4a-d87461536ec9_6924x4165.png)](https://substackcdn.com/image/fetch/$s_!sj_U!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2cd4de4a-b362-46ed-bf4a-d87461536ec9_6924x4165.png)

Figure 3: For AI companies, there is probably an optimal specialization zone where the product isn’t too niche, cannot achieve venture-scale, and isn’t too broad, and risks being absorbed by foundation models.

Horizontal AI applications often generate “[vibe revenue](https://agenttalk.substack.com/p/agent-talk-7-pat-grady-sequoia-what)” or hype-driven revenue when they first launch. They are shiny new toys that attract users excited by the technical innovation. But as foundation models improve, offering comparable capabilities, users begin to question why they should pay for a specialized service when the base models can perform similar functions for free or at a lower cost. A notable example is [11x.ai](https://techcrunch.com/2025/03/24/a16z-and-benchmark-backed-11x-has-been-claiming-customers-it-doesnt-have/), which quic

[... truncated ...]