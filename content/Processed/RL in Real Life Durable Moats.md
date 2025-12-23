---
title: "RL in Real Life: Durable Moats"
source: "https://greylock.com/greymatter/rl-in-real-life-durable-moats/"
published: 2025-12-11
created: 2025-12-16
description:
tags:
  - "clippings"
processed: 2025-12-16
themes:
  - rl
  - enterprise-ai
  - moats
  - workflows
---
[Greymatter](https://greylock.com/greymatter/)

![RL in Real Life: Durable Moats](https://greylock.com/wp-content/uploads/2025/12/RL-in-Real-Life-Durable-Moats.jpg)

## In the past year, Reinforcement Learning (RL) has gone from being a promising path towards general intelligence to a taboo phrase at the San Francisco dinner table.

Though sometimes criticized as [overhyped](https://x.com/nlarusstone/status/1991923644197671405?s=20), RL has proved highly effective inside AI labs, where it helps models “hill-climb” towards better performance on specific tasks. This ability to reliably optimize against clear goals has led to the proliferation of RL-driven startups. Yet outside of the labs, RL use cases remain surprisingly underdeveloped.

We set out to investigate real-world application versus hype, and subsequently spoke to many of the top agentic and enterprise companies. So far, most of their RL efforts are largely experimental, and are yet to scratch the surface of the sophisticated techniques used within the frontier labs. At the same time, we were met with enthusiasm and curiosity from these companies in terms of how they could leverage RL approaches to:

1. Build self-improving product experiences, and
2. Unlock true enterprise automation

Speaking to the frontier labs paints a completely different picture: One where as the flagship models improve, almost any task is solvable, and the need for many unique applications fades away. This raises the core question: Why invest in specialized RL use cases if the underlying models will keep improving?

The reality is that better foundation models alone cannot solve a company’s bespoke personalization and automation challenges. These problems depend on a deep understanding of unique business context, proprietary data, and how to operationalize this knowledge for a given workflow. As the models improve, we believe that real moats will emerge from a symbiotic combination of these elements, combined with an effective RL approach.

In this post, we’ll dive into the intricacies of building effective RL approaches, assess current use cases, and discuss what founders should consider when commercializing RL-based systems.

But first, let’s briefly level-set on what RL actually looks like in practice.

## Crash Course on RL

RL is no new technology. It has long been part of the post-training pipeline that makes models safer and more aligned with user expectations. This typically includes [two steps](https://pytorch.org/blog/a-primer-on-llm-post-training/):

- **Supervised Fine Tuning (SFT)** – teaches a model to follow instructions on a given task
- **RL** – teaches a model to get better at tasks by learning which outputs are better

RL emerged as an effective learning technique because it has proven, in the right circumstances, to be [better at generalization](https://tianzhechu.com/SFTvsRL/), [more data-efficient](https://predibase.com/blog/how-reinforcement-learning-beats-supervised-fine-tuning-when-data-is-scarce), and optimally preserves prior knowledge.

The main components in an RL training loop are:  
**Agent** – The agent includes the policy model, and RL learning algorithm.

**Environment** – A high fidelity replica of a scenario’s context, with sample tasks for the agent to execute. This environment includes:

- **State** – Context on which the agent performs actions
- **Actions** – Tools or choices trigger an action, and therefore a state change.
- **Reward Function** – Rubric used to define successful actions and reinforce positive behavior.

A good example of this is a coding agent which solves tasks within a codebase, and runs tests, and receives rewards depending on the outcome. Here the environment is the codebase, and the reward calibrates the agent’s knowledge on how to best solve each task.  

## Creating High Caliber Environments

In many ways, the key to effective RL is in environment creation. As we’ll see below, this is inherently a difficult problem, and comes down to two key principles: Quality and Scalability.

1. **Quality** means that an environment is realistic and impactful. This includes:
	- **Fidelity:** Environments must be realistic for agents to accurately perform tasks in the real world. This could mean finding sophisticated codebases for engineering tasks, or creating exact replicas of applications for computer use.
	- **Precision:** Task definitions and scoring rubrics must be precise to prevent agents from reward hacking, or exploiting loopholes in their directions.
	- **Environment Type:** The most effective environments will be both idiosyncratic and verifiable. They deepen knowledge outside of a model’s current capabilities, while still allowing correctness to be clearly checked. Coding and mathematical tasks are good examples of such domains.
2. **Scalability** proves a model’s knowledge can grow beyond hand-crafted tasks. Two factors matter here:
	- **Generalizability:** Ideally, an agent can learn from multiple scenarios and generalize learnings to similar problems it hasn’t seen. Techniques like curriculum learning, or gradual up-leveling of difficulty of environments/tasks, can improve this ability.
	- **Environment Generation:** In order to scale learning more efficiently, it’s important to find ways to automate environment and task creation instead of designing them by hand.

Now that we’re primed on the technology, let’s take a look at the two use cases which consistently stood out to us across conversations with builders and buyers.

## Use Case #1: Product Self-Improvement

As models continue to improve, the application companies who have built products around them face an ongoing tension: balancing their own product depth with rapidly increasing model capabilities. At the same time, building software is now easier than ever, and competition is fierce across most sectors. In order to increase retention, building product depth outside of software becomes imperative. In practice, this means better personalization — fine-tuning the product to specific customer preferences as a means to increase product stickiness.

RL is a powerful tool for this kind of personalization because of its ability to reinforce specific behaviors based on user feedback and signals. A product that can continuously learn from user interactions, take input, and adapt to customer needs becomes the biggest self-reinforcing product moat.

Though exploration of this concept is early, many AI companies have come to understand the importance of [tailoring their products](https://openai.com/index/evals-drive-next-chapter-of-ai/) to their customers. For example, [Cursor](https://cursor.com/blog/tab-rl) and [Cognition](https://cognition.ai/blog/swe-1-5) were early adopters of online RL, enabling real-time tuning of code suggestions in their products based on tab acceptance across users. Today, companies are approaching this fine-tuning problem in three main ways:

1. **Build In house:** Build [online/offline](https://huggingface.co/learn/deep-rl-course/en/unitbonus3/offline-online) RL infrastructure in house to support a use case, and create internal environments using real customer data to enable a realistic learning flywheel.
2. **Multi-purpose platform:** Use a post-training solution like Tinker or OpenAI RFT for RL, and bring your own environments, rubrics, and data (real or synthetic).
3. **Tailored services approach:** Work with an RL services company in a high-touch fashion to co-design environments, rewards, and train your model. Depending on privacy constraints, these environments can use real or synthetic data.

<video src="https://greylock.com/wp-content/uploads/2025/12/GREY-202512-Fig02-RL-Product-Self-Improvement-PC.mp4" width="100%" height="auto"></video>

Depending on their product complexity, domain, and maturity, companies encounter different challenges as they approach product self-improvement.

1. **Defining the terms for RL**  
	Most agentic products are complex systems with many points of failure, including UI, tools, prompts, context, and finally, the model itself. Because of this, jumping straight to RL may not be optimal. Companies should first try techniques like better base models, evals, or [supervised fine-tuning](https://thinkingmachines.ai/blog/lora/). Once these are in place, RL can fill in the remaining gaps if two conditions are met:
	1. The product has many clear and verifiable rewards, and
	2. A realistic simulation environment can be created.
	This is why codegen products are a good fit for RL: they have fast user feedback loops and well defined success criteria (tab acceptance).
2. **Combatting sparse reward signals**  
	Agentic products rely on model traces and user telemetry for fine-tuning, but this data can be ambiguous, or even too sparse to interpret. For example, a ticket re-open in a customer service product might be seen as a proxy for negative rewards, but what if the user themselves closed the ticket in error? In these situations, we’ve seen companies use multiple approaches to derive more accurate user signals:
	- Manual or LLM-based review of telemetry data to distinguish user intention
	- Using evals to improve UX and create more product touchpoints for collecting user signals
	- Adding partial rewards or using reward shaping to increase signals at intermediate steps
3. **Build vs Buy decision**  
	From our conversations with buyers, there is concrete interest in trying RL, but also healthy skepticism on its effectiveness. Early on, most prefer to experiment with an external provider or service to prove out the approach. Once proven, some hope to bring RL in house for better accuracy, security, and cost-effectiveness. In either case, we’ve noticed two major friction points:
	1. **Security & Data Governance:**  
		Most companies are unable to share true customer data with vendors. This leads to a painful process of creating synthetic data and environments which may not accurately represent a customer’s account, and therefore produces suboptimal results.
	2. **Talent Scarcity:** Hiring experts in RL infrastructure is a tall order for most startups. This is because very few pockets of talent have applied RL methods on real-world products, and the talent itself is very expensive.

**Takeaway:**  
Though product self-improvement is an attractive concept, the jury is still out. Two open questions remain:

1. How can companies build the most scalable & effective approach across product types?
2. How should companies balance in-house RL development with external services?

## Use Case #2: Enterprise Automation

Despite growing AI capabilities, enterprises are far from achieving meaningful automation outside of codegen and search. Models have improved in reasoning capabilities, but they still struggle to generalize in custom enterprise settings that require context and nuance. This creates a persistent last-mile gap that prevents enterprises from seeing value. Workflows like insurance claims processing or credit underwriting illustrate this problem well: the processes vary widely across organizations, and a one-size-fits-all approach cannot address the full distribution.

Enterprise workflows tend to be:

- Proprietary
- Dependent on deep domain expertise
- Shaped by messy and often incomplete data
- Highly variable across organizations

Better models can improve performance, but cannot solve for this level of nuance in workflows. RL can help bridge this gap by mirroring an organization’s unique circumstances, and tailoring rewards to their version of success.

**RL-based enterprise automation requires:**

1. Environments which replicate the context and conditions of the customer environment.
2. Precisely authored tasks garnered from key customer stakeholders, or experts in the space.
3. Reward functions which incentivize accurate trajectories at a granular enough level to prevent deviations.

Though we are in the early innings of RL use cases for enterprise automation, these are some key questions which will dictate the viability of a business in this space.

1. **What are the right workflows for RL?**  
	The best candidates are workflows that foundation models commonly struggle with—ones that are difficult to generalize, high stakes, unique to the organization, and require deep domain expertise. These often appear in verticals such as finance, legal, and healthcare, where proprietary workflows can exist on a per-company basis. Here, the last-mile gap is amplified because of generic models which cannot grasp nuance between workflows.
2. **How should the end product be delivered?**  
	It’s clear that AI automation is a high priority for enterprise buyers, but their adoption has severely lagged in comparison. Previous fine-tuning products were too open ended, and assumed that the enterprise would know 1) How to use them and 2) What to use them for. This lack of education and correspondence with the end user caused significant adoption friction.The best solutions will be tailored to a specific use case, and guide the user in the right direction. Because these important workflows are high-stakes, enterprises value visibility into and involvement in these processes. This makes it imperative to have a detailed software layer on top of any RL infrastructure – one that integrates explainability into the UX, and enforces auditability across its actions.

**Takeaway:** The real automation opportunity lies in proprietary and high-stakes workflows where generic models fall short. Winning companies will combine scalable RL infrastructure with deep customer collaboration and workflow expertise to close the last-mile gap.

## Conclusion

RL is an important technology in the next frontier of AI capabilities, and one that we at Greylock are excited to see diffuse outside of the frontier labs. There are many personalization and automation challenges in the enterprise that remain unsolved. As companies experiment internally and begin to recognize the value in these opportunities, the best vendors will meet enterprises where they are, and set a precedent for scalable co-development.

Beyond the use cases discussed in this piece, one of the key components in building a successful product is assembling the right team. The team best positioned to make this vision a reality will have a deep background in cutting edge post-training methods, high quality engineering experience, and a practical understanding of commercial and enterprise requirements.

If you are ideating or building in this space, we would love to chat. You can reach me at [shreya@greylock.com](https://greylock.com/greymatter/rl-in-real-life-durable-moats/).

*Thanks to [Tyler Griggs](https://tyler-griggs.github.io/), [Gautam Mittal](https://www.linkedin.com/in/mittalgautam/), [Rohan Pandey](https://rpandey.tech/), [Amy Deng](https://www.linkedin.com/in/amykexindeng/), [Simon Guo](https://simonguo.tech/), [Kshitij Alwadhi](https://www.linkedin.com/in/kshitijalwadhi/), [Jason Risch](https://greylock.com/team/jason-risch/), [Jerry Chen](https://greylock.com/team/jerry-chen/), and [Sophia Luo](https://greylock.com/team/sophia-luo/) for their inputs and conversations which inspired this piece.*

##### WRITTEN BY

### Shreya Shekhar

Partner

Shreya partners with early-stage founders building in AI, cybersecurity, infrastructure and developer tooling.