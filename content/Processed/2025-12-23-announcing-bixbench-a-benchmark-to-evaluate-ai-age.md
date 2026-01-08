---
url: https://www.futurehouse.org/research-announcements/bixbench
title: "Announcing BixBench: A Benchmark to Evaluate AI Agents on Bioinformatics Tasks  | FutureHouse"
clipped: 2025-12-23 11:14
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Announcing BixBench: A Benchmark to Evaluate AI Agents on Bioinformatics Tasks  | FutureHouse

> Source: [https://www.futurehouse.org/research-announcements/bixbench](https://www.futurehouse.org/research-announcements/bixbench)

![](https://cdn.prod.website-files.com/669f0d63ca36f46df2e0682f/66bb703c19a6473deb260e81_Hero%20Image%20-%20Research%20Subpage.jpg)

[![](https://cdn.prod.website-files.com/669f0d63ca36f46df2e0682f/66cc90c75a288a6eaef7c8a8_icon-arrow-northeast.svg)

Back to Research](/research)

# Announcing BixBench: A Benchmark to Evaluate AI Agents on Bioinformatics Tasks

Research

By

Sam Rodriques

,

Published

March 4, 2025

Share to:

X

![](https://cdn.prod.website-files.com/669f0d63ca36f46df2e0682f/66cc90c75a288a6eaef7c8a8_icon-arrow-northeast.svg)

LinkedIn

![](https://cdn.prod.website-files.com/669f0d63ca36f46df2e0682f/66cc90c75a288a6eaef7c8a8_icon-arrow-northeast.svg)

*Authors: Ludovico Mitchener, Jon Laurent, Geemi Wellawatte*

Artificial Intelligence (AI) is changing scientific research at a rapid pace and is beginning to enable the automation of complex analytical tasks. However, despite these advances in AI systems for scientific discovery, achieving full autonomy in research remains a challenge. One of the most promising fields for AI-driven automation is bioinformatics, where data-focused research lends itself to purely computational analysis.

Today, in partnership with [ScienceMachine](https://www.sciencemachine.ai/), we introduce **BixBench**, a benchmark designed to evaluate AI agents on real-world bioinformatics tasks. BixBench challenges AI models with open-ended analytical research scenarios, requiring them to analyze data, generate insights, and interpret results autonomously.

We believe that saturation of BixBench would signify a major breakthrough in AI development for scientific research, and the lackluster results of current model performance on BixBench demonstrate the need for continued development. This benchmark represents our first step in assessing progress in this domain and we intend to continue rapid development over the coming months in both evaluation methods and increasing agent performance.

Read more about the benchmark on [ArXiv](https://arxiv.org/abs/2503.00096).

Explore the dataset itself on [Huggingface](https://huggingface.co/datasets/futurehouse/BixBench).

Use the evaluation harness on [GitHub](https://github.com/Future-House/BixBench).

See the agent framework on [GitHub](https://github.com/Future-House/data-analysis-crow).

## Why? The Need for a Bioinformatics Benchmark

Modern AI models and agents are commonly evaluated using standardized benchmarks, testing abilities in areas like image recognition and natural language understanding. However, common benchmarks fall short when trying to evaluate progress on complex applied capabilities like scientific reasoning and multi-step analytical workflows. Existing scientific benchmarks, such as [LAB-Bench](https://arxiv.org/abs/2407.10362), [ChemBench](https://www.chembench.org/) and [BioCoder](https://biocoder-benchmark.github.io/) assess AI performance on specific constrained tasks but do not address the truly open-ended nature of real-world scientific inquiry.

This open-ended nature of research makes the creation of meaningful benchmarks for AI progress in these areas particularly difficult. Bioinformatics and computational biology, importantly, are fields of research that can be divorced from physical lab experiments. This presents an opportunity for more rapid development of both autonomous AI systems for real research as well as benchmarks for measuring and guiding the progress of that development. Many bioinformatics tasks are open-ended and ambiguous, lacking simple optimization metrics. Related benchmarks have been released in adjacent analytical areas, such as [DABstep](https://huggingface.co/blog/dabstep) for evaluating AI agents on complex data analysis workflows, focusing on structured and unstructured data reasoning in business and finance applications rather than scientific research.

BixBench addresses this opportunity for a real-world analytical research benchmark by providing a diverse setof **53 analytical scenarios** with **296 guiding research questions**, paired with heterogeneous input data. This structure simulates the real-life challenges faced by bioinformaticians and computational biologists, making it a unique and valuable benchmark.

Specifically, BixBench is designed to test multiple dimensions of an AI agent’s capability, including the ability to understand the nuances of a research question, explore and analyze diverse datasets, perform multi-step computational analyses, and finally to interpret results of those analyses in the context of the prompting research question.

![](https://cdn.prod.website-files.com/66a40c47259cac29adc80121/67c50724d61305b4e122491f_AD_4nXcSIWwzCx3FTbpECcGSoRWc_1GvYv5_b_z10rQhDG-uckcr-ioQy-0Kzykoj4LYXMhqF5owBw8ulwvv3DjtZRJwTSFephf5MqR1OcnJKcoSwx8laQMEmzSwpiuL2lOLq1t-Ee7shg.png)

## Creating BixBench

To build BixBench, we began by gathering a number of diverse, real-world analytical workflows from bioinformatics experts recruited through professional networks, research institutions, and direct outreach to authors of relevant bioinformatics papers. These workflows and their associated data, which we term *capsules*, include the following primary components:

1. A research hypothesis or question driving the analysis
2. Input data to be analyzed in addressing the hypothesis
3. Code capturing the analysis trajectory

Additionally, each capsule provides a brief *result* summarizing findings and a true/false *answer* assessing support for the hypothesis.

![](https://cdn.prod.website-files.com/66a40c47259cac29adc80121/67bf61377518b580d2bbc287_AD_4nXdNKq6p8ZPlHhEZNUTa6NZmr2NLVUumYZndUMb8ivjd8PTGkZ7HI_Lf1tPsO5U0fXb11D2OjSyXKGkzF2ATW-ch2C-LdQ4rEDokvItukbYVR5zx5hJjWYIRNSqEgt1CYQPhOHx3TQ.png)

### Generating Benchmark Tasks

To create the associated research questions that make up the benchmark tasks, we employed the help of LLMs in a multi-stage pipeline. We first prompted a chat model (we used Claude 3.5 Sonnet for this) to generate several questions based on a provided analysis trajectory. We then asked analysts to review the generated questions for appropriateness, where they were given the ability to approve, reject, or edit any question. We then filtered for duplicate questions, again using an LLM, to arrive at the final diverse and non-redundant task set. Questions were drafted with multiple-choice options, but are intended primarily to be open-answer tasks. Each capsule contains between three to eight questions, arriving at the **296 total questions** in the benchmark.

## Evaluating AI Models on BixBench

BixBench is designed to evaluate AI agents rather than zero-shot models, and part of FutureHouse’s mission is to build exactly these types of agents. To measure the current state of model capabilities for BixBench tasks as well as build a foundation on which to develop a bioinformatics-capable agent, we built a [custom agent system](https://github.com/Future-House/data-analysis-crow) using our previously published [Aviary](https://arxiv.org/pdf/2412.21154) agent framework. Our goal was to push performance as far as possible using existing SOTA models. We conducted experiments with varying environment configurations, prompt engineering, and model configuration. We created a docker image including all bioinformatics packages necessary to successfully complete the challenges to ensure that dependency management, often challenging in bioinformatics, would not limit performance. We evaluated two current frontier multi-modal LLMs as the models underlying this agent: GPT-4o (OpenAI) and Claude 3.5 Sonnet (Anthropic).

We tested each model in both the preferred open-answer modality and also a modified regime in which we provided multiple-choice options for each question. Overall, performance on BixBench for both models was poor. In open-answer format, Claude 3.5 Sonnet reached only 17% accuracy over the whole benchmark, besting GPT-4o at 9%. In the multiple-choice format, we measured performance in two variants - one where we provided the option to “opt-out” of answering by selecting *insufficient information* and one where only real answer options were provided without any such opt-out. When provided the opt-out, both models performed worse than random, indicating their propensity for refusing to answer complex questions, potentially due to an inability to produce or interpret appropriate analytical trajectories. When not allowed to opt-out, both models performed marginally above random, near a baseline measurement of performance without any analysis (used as a calibration measure of pure recall performance.)

![](https://cdn.prod.website-files.com/66a40c47259cac29adc80121/67c50724198f43a1c82e953a_AD_4nXfioEd1MO2hdJRhk0_EstGKfE4_0DeoXBAuM5h89rycS6vMSv4OR-YYLbJWoYDRFTcSZoZNPVBUOB9HSdUNr72o7boGliNXCXCreuQ8bbKjO26tTXi-kUb46m3E8od5NCM6jQuq2w.png)

We also tested a few other evaluation schemes to look at specific capabilities and potentially boost performance. In the multiple-choice format, we undertook a majority vote evaluation across ten parallel analysis runs for each capsule. This did not result in improved performance, and particularly in the op-out scenario actually had a moderately negative impact as the vote count increased - likely due to accumulating selections of the insufficient option. During our early experiments, we also noticed that models seemed to get confused when dealing with the plots that were typical outputs from analysis trajectories. We reasoned that models could potentially operate better on text or data underlying the plots, and so we did an experiment where we prompted the agent to not produce any images as part of its analysis. Consistent with the original observation, disallowing images had a moderately positive impact on overall performance.

![](https://cdn.prod.website-files.com/66a40c47259cac29adc80121/67c50724e99fbe78600ca3d9_AD_4nXeZb9FKwAfse2Shezhyvvz3L6044y9U2UiAXur279pwLvSPKpKgKGAyIwcIo_96fCMvZV4RegG9gYESRziMf9MLLB5ORRt18PW_60pLgt_tgXqB1056gO8sUXruohpJ8AajOLCT.png)

![](https://cdn.prod.website-files.com/66a40c47259cac29adc80121/67c507244755de01f0c0fe99_AD_4nXeotoackkAMwd06purv4D4yR5QAwyRXgl5tKjbcQnScH9luJtLO92m2JMjvaYEPjyFbTiFD45xzO2hSU3PpZeMqvaNgkCBvsXnU6I8b1JxeyeFz7enKm0qXcXvP1dtgb056LVkXxw.png)

Overall the results of current models on BixBench highlight significant limitations and reveal a huge amount of room for development. Indeed, despite the sophistication of modern AI, these results suggest that fully autonomous bioinformatics research remains out of reach (for now!)

## What’s next for BixBench (and FutureHouse?)

The introduction of BixBench is just the beginning of our work in this space. Development of competent bioinformatics agents is imperative for the development of autonomous AI scientists that are the ultimate mission at FutureHouse. Immediate work will thus focus on:

* **Expanding the benchmark** to cover more bioinformatics subfields and analytical techniques.
* **Incorporating human baselines** by comparing AI performance with expert bioinformaticians.
* **Testing additional AI models,** particularly those optimized for scientific reasoning.

BixBench represents a significant step forward in evaluating AI’s role in bioinformatics. By presenting AI models with real-world analytical tasks, we’ve provided a rigorous testbed for measuring progress in autonomous scientific discovery. While current AI models show promise, they still have a long way to go before matching human expertise in bioinformatics.

As AI technology continues to evolve, benchmarks like BixBench will play a crucial role in guiding its development, ensuring that AI systems become valuable collaborators in the scientific process.

## Links:

[Paper on ArXiv](https://arxiv.org/abs/2503.00096)

[Dataset on Huggingface](https://huggingface.co/datasets/futurehouse/BixBench)

[Eval harness on GitHub](https://github.com/Future-House/BixBench)

[Agent framework on GItHub](https://github.com/Future-House/data-analysis-crow)