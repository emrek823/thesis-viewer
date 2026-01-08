---
url: https://www.testingcatalog.com/google-to-enable-research-automation-on-gemini-enterprise/
title: "Google to enable research automation on Gemini Enterprise"
clipped: 2025-12-23 13:00
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Google to enable research automation on Gemini Enterprise

> Source: [https://www.testingcatalog.com/google-to-enable-research-automation-on-gemini-enterprise/](https://www.testingcatalog.com/google-to-enable-research-automation-on-gemini-enterprise/)

Google is working on a multi-agent system inside [Gemini for Enterprise](https://www.testingcatalog.com/google-launches-gemini-enterprise-with-agents/) that can take a topic and a set of evaluation criteria, generate a large pool of ideas, and then spin up a team of agents that evaluate those ideas in a tournament style. The system effectively lets Gemini work on a single problem for around 40 minutes, which is a very long continuous run for a user-facing product.

At the end of such a run, users receive a large list of ideas, ranked from best to worst according to the chosen criteria. The scale is significant: the system can produce roughly 100 ideas in one go. For each idea, users get an overview, a more detailed description, a review summary, a full review, and a dedicated tournament performance report. This tournament performance is exposed as a standalone output that can be browsed separately. All generated ideas are selectable so that users can focus on specific options and explore them in more detail.

![Gemini](https://www.testingcatalog.com/content/images/2025/11/Idea-Generation-Gemini-Enterprise-11-16-2025_12_12_AM--1-.jpg)![Gemini](https://www.testingcatalog.com/content/images/2025/11/Idea-Generation-Gemini-Enterprise-11-16-2025_12_12_AM.jpg)

In the current preview, Google appears to be preparing three pre-made agents, with two of them built on top of this multi-agent tournament system. One of these is called “Idea Generation.” In this case, you provide a topic, the agent launches the multi-agent workflow, and it runs the tournament-style evaluation to generate and rank ideas related to that topic. The second agent, called “Co-scientist,” is positioned more for scientists and researchers. It lets you specify a research topic, provide additional data, and then a team of agents both generates ideas and evaluates them through the same tournament mechanism, but with a stronger focus on research and scientific use cases.

![Gemini](https://www.testingcatalog.com/content/images/2025/11/Co-Scientist-Gemini-Enterprise-11-16-2025_09_41_PM.jpg)

One of the most interesting aspects of this setup is the amount of compute that is clearly being allocated. Letting agents work for about 40 minutes on a single task is quite substantial compared with typical agentic tools. Throughout that entire time, the system continues to iterate on the problem. All of this currently appears inside Gemini for Enterprise, still in development, hidden from regular users and not yet available as a public feature.

![Gemini](https://www.testingcatalog.com/content/images/2025/11/Idea-Generation-Gemini-Enterprise-11-15-2025_11_08_PM.jpg)![Gemini](https://www.testingcatalog.com/content/images/2025/11/Idea-Generation-Gemini-Enterprise-11-15-2025_11_11_PM.jpg)

Compared to existing agent implementations, this looks like a significant step forward. Even advanced agents that have access to a browser mode in products like ChatGPT tend to have limited context windows and time budgets. In contrast, this approach is designed as a user-facing product that exposes a very high amount of compute directly to enterprise customers. It also aligns with the idea of “Level 3 AI,” often described as agents that can work on a problem for a sustained period of time. In that context, a single 40-minute run on one task is quite a strong example.

In practice, the main output is a refined set of ideas. However, these are not just raw suggestions. They can represent structured research directions that, given the input data and the original problem, may lead to highly valuable insights. It is therefore very interesting to see how Google is moving toward enabling extremely powerful agents for organizations, businesses, and research teams.

![Gemini](https://www.testingcatalog.com/content/images/2025/11/Idea-Generation-Gemini-Enterprise-11-15-2025_11_13_PM--1-.jpg)

When this feature is eventually released, it could be a major leap, especially if these agents end up being powered by [Gemini 3 Pro](https://www.testingcatalog.com/gemini-3-spotted-again-as-google-readies-its-release/). At the moment, Gemini 3 Pro is not available inside Gemini Enterprise, so it is unclear which model is actually powering these experimental agents. There is still a lot that needs to be tested and validated. When you submit a prompt to this system, it first presents a summary of the planned evaluations and idea dimensions it intends to work on. Only after reviewing and approving that summary does the user start the actual job, which helps ensure that the initial prompt is interpreted correctly before committing substantial compute.

![Gemini](https://www.testingcatalog.com/content/images/2025/11/Talk-To-Doc-Gemini-Enterprise-11-15-2025_10_51_PM.jpg)

In addition to the multi-agent tournament flows, there is another agent called “chat with your docs,” which comes with a separate UI. This agent allows users to upload PDFs up to 30 megabytes and then chat explicitly with those documents. It is also part of Gemini Enterprise, not yet released, and currently not functional in production. The idea is that up to 30 megabytes of PDF content can be analyzed and incorporated into the model’s context so that users can extract more meaningful information from their existing documents.

![Gemini](https://www.testingcatalog.com/content/images/2025/11/Talk-To-Doc-Gemini-Enterprise-11-15-2025_10_56_PM.jpg)

There are several other developments underway inside Gemini Enterprise, but these multi-agent tournament workflows and the document-focused agent stand out as the most significant. The tournament-based multi-agent setup in particular looks like a breakthrough product direction that other LLM providers do not really offer at this level. Multi-agent tournaments are still rare in user-facing tools. Grok Heavy might be another point of comparison, but it is probably not directly comparable to what Google is building here.

🗞️

Add [TestingCatalog News](https://www.google.com/preferences/source?q=www.testingcatalog.com&ref=testingcatalog.com) as a preferred source! (US Only)

It would be very valuable to see proper evaluations and benchmarks for these agents once they are more mature. Just from the description, the Co-scientist agent already looks like a very compelling tool for larger organizations and research groups that are actively exploring new scientific directions. Overall, this whole approach is extremely exciting. It remains unclear when exactly these agents will ship or whether they will ever be made available beyond enterprise customers, but it is definitely something worth watching.

### Related Articles

[![NotebookLM](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

## Exclusive: Google tests 30-minute audio Lectures on NotebookLM

23 Dec 2025
·
2 min read](/exclusive-google-tests-30-minute-audio-lectures-on-notebooklm/)

[![Z ai](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

## Z.AI launches GLM-4.7, new SOTA open-source model for coding

22 Dec 2025
·
2 min read](/z-ai-launches-glm-4-7-new-sota-open-source-model-for-coding/)

[![Manus](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

## Manus launches AI design tool with image editing

22 Dec 2025
·
1 min read](/manus-launches-ai-design-tool-with-image-editing/)

[![Meta](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

## Meta AI to get Memories and Custom Prompts soon

20 Dec 2025
·
1 min read](/meta-ai-to-get-on-memories-and-custom-prompts-soon/)

[![Luma](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

## Luma AI working on Realms, Ray 3 Flash and Image V2

19 Dec 2025
·
2 min read](/luma-ai-working-on-realms-ray-3-reasoning-and-image-v2/)

[![Claude](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)

## Anthropic working on Planning Mode for Claude on Chrome

19 Dec 2025
·
2 min read](/anthropic-working-on-planing-mode-for-claude/)