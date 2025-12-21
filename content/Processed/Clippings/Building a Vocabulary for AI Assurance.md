---
title: Building a Vocabulary for AI Assurance
source: https://projectvail.substack.com/p/building-a-vocabulary-for-ai-assurance
author:
published: 2025-12-15
created: 2025-12-17
description: "Part I: Making Sense of Explainability and Interpretability"
tags:
  - clippings
---
### Part I: Making Sense of Explainability and Interpretability

With the speed at which AI is developing, it is natural to want assurances that a model is able to do what the human user is expecting it to do. The higher the stakes of the task the model is performing, the more important these assurances are.

There are multiple related terms floating around to describe these assurances, but often a lack of clarity as to what they specifically mean. Establishing clarity is essential for developing a shared vocabulary to discuss the risks of using AI and the approaches to mitigating them. Our first post tackles the concepts behind Explainability and Interpretability and why they are important.

#### Defining Explainability

Explainability is the ability to give reasons for why a model exhibits certain behaviors. Many factors underlie patterns of model behavior, such as the data the model was trained on, the model’s architecture, and the techniques used to train and fine-tune it.

Explanations can have multiple layers. The surface layer explanation for why an LLM refused to provide instructions for how to bypass a home Wi-Fi password may be that this topic is associated with unauthorized access, which the model is designed to avoid. But we can then go a level deeper and ask:

1. Why does the model associate the user’s question with a prohibited activity?
2. What internal processes cause the model to refuse rather than respond normally?

Questions like these lead from explainability into *interpretability*. Explainability tends to focus on giving human-friendly reasons for a model’s behavior, such as highlighting a relevant surface-level attribute of the input (e.g. “bypassing passwords falls under a safety restriction”) or citing the source that information was retrieved from as part of a RAG workflow. Interpretability goes a level beneath that and asks what is happening *inside* the model—how the patterns it learned from data, its internal representations, and its training signals come together to produce that refusal.

![](https://substackcdn.com/image/fetch/$s_!l67O!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd19ebdaf-2cc9-4ef2-b896-020a16cf4d45_980x990.png)

#### Explainability Challenges and Reasoning Models

Reasoning models are increasingly important in LLM workflows, and some point to the chain-of-thought as evidence that these models are more interpretable or explainable, as it shows the reasoning steps that led to the model’s answer, helping users understand how it reached its answer. That said, while the chain of thought can be traced, one cannot explain why the model produced the particular reasoning in the first place. A black-box process still generates the entire chain of thought. [Miles Turpin’s research on unfaithful explanations](https://www.milesturp.in/Unfaithful-Explanations-in-Chain-of-Thought-Prompting/) in chain-of-thought prompting demonstrates that a model’s final prediction depends on two factors: the CoT explanation you can see, and the reason the model produced that specific explanation, which you can’t see.

It’s worth noting that the training objectives lack incentives for models to report the reasons behind CoT behavior accurately. Since models are optimized via RLHF, they [tend to explain](https://arxiv.org/html/2409.12822v1) in ways designed to convince evaluators or support their predictions, rather than transparently showing what truly influenced the decision. Even in the case of verifiable rewards, if the reward functions are not disclosed, there is a gap in user understanding of what the model optimizes for. This dynamic inherent to reinforcement learning is important for organizations working with reasoning models to be aware of. Teams assessing these systems should recognize that visible reasoning traces do not guarantee explainability, as the process that produces them remains opaque.

This lack of underlying visibility isn’t limited to reasoning models. Similar explainability challenges emerge with transformers in fraud detection, credit scoring, and other domains. Stripe, for example, previously ran fraud models on discrete features, enabling clearer tracing of which features triggered a flag. They’ve since developed a payments foundation model that learns embeddings from billions of transactions, improving their fraud detection rate from [59% to 97% virtually overnight](https://stripe.com/newsroom/news/tour-london-2025). But the patterns it uncovers span an embedding space in ways that aren’t human-explainable. You can’t point to a specific feature, like ‘ *the number of transactions was too high’*. The model learned something; it works dramatically better, but describing what it learned becomes significantly harder.

#### Model Explanation Examples

Below are a few examples illustrating the nature of explainability.

- Model behavior: Giving incorrect answers to a simple problem like “which is bigger, 9.12 or 9.2”.

> Explanation: Language models operate on text tokens rather than true numbers. If the decimal formats tokenize in an unexpected way, the model may do something other than compare the underlying numeric values.

- Model behavior: Model regurgitates portions of known texts verbatim.

> Explanation: When a model sees the same text many times during training—or sees text that is very distinctive and hard to paraphrase—it may memorize it. As a result, when prompted with the right cues, the model may reproduce that text verbatim.

- Model behavior: Sycophantic responses – the model agrees with obviously incorrect statements simply because the user suggested them.

> Explanation: During fine-tuning, models are often rewarded for being polite, cooperative, and friendly. If not carefully managed, this training can cause the model to over-optimize for agreement.

#### Why Explainability matters

Understanding the “why” behind model behavior allows a user to modify inputs (e.g., ask a question the right way) to achieve their desired outcome (or the user may choose not to use the model at all), and provides insight that model developers can use to refine their approaches to training and fine-tuning. Moreover, explainability is critical for establishing credibility of model outputs to the end user and, more broadly, instilling public trust in LLMs.