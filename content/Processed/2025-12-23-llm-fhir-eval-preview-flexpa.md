---
url: https://www.flexpa.com/blog/llm-fhir-eval-preview
title: "LLM FHIR Eval Preview | Flexpa"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# LLM FHIR Eval Preview | Flexpa

> Source: [https://www.flexpa.com/blog/llm-fhir-eval-preview](https://www.flexpa.com/blog/llm-fhir-eval-preview)

[🚀📊 Just released: Flexpa's Nov 2025 State of the Payer Patient Access API Report →](/blog/nov-2025-state-of-the-payer-patient-access-api-report)

[Blog](/blog)/Platform Updates

# LLM FHIR Eval Preview

An open-source evaluation framework designed to benchmark the performance of Large Language Models (LLMs) on FHIR-specific tasks, making research on FHIR and LLM interactions reproducible.

November 25, 2024•Joshua Kelly

![LLM FHIR Eval Preview](/_next/image?url=%2Fimages%2Fblog%2Fllm-fhir-eval-preview.png&w=1080&q=75)

We're excited to announce the early preview release of [@flexpa/llm-fhir-eval](https://github.com/flexpa/llm-fhir-eval), an open-source evaluation framework designed to benchmark the performance of Large Language Models (LLMs) on FHIR-specific tasks. This framework aims to establish open benchmarks that make research on FHIR and LLM interactions reproducible.

Recent work, such as [FHIR-GPT](https://ai.nejm.org/doi/10.1056/AIcs2300301) (Yikuan Li, et al) and [HealthSageAI's Note-to-FHIR Llama 2 fine-tune](https://github.com/HealthSage-AI/healthsage-ai-llm), demonstrate the growing need for reproducible evaluation benchmarks in the FHIR and LLM space. @flexpa/llm-fhir-eval addresses this need by providing a standardized way to measure model performance and behaviors.

## Overview

We've started by trying to define an set of tasks to evaluate for the benchmark, included in this preview release:

1. FHIR Resource Generation & Validation: Evaluate the ability of LLMs to generate and validate complex FHIR resources.
2. Summarization: Assess the proficiency of LLMs in summarizing notes into FHIR resources.
3. FHIR Path Evaluation: Test model capabilities in evaluating complex FHIR Path expressions. This is an exciting area of research for us because it was unexpected.
4. Structured & Unstructured Data Extraction: Extract specific information from both structured FHIR resources and unstructured clinical notes. This is a very well trodden area of resaerch.

The framework includes implementations of existing research benchmarks, such as the FHIR-GPT paper prompt, providing a foundation for comparative analysis and reproducibility.

## Supported Models

The initial release supports evaluation of:

* Anthropic Claude 3.5 Sonnet
* OpenAI GPT-4o
* OpenAI GPT-4o Mini

## Community Involvement

Your input is crucial to the development of this framework. We welcome [discussion on FHIR Chat](https://chat.fhir.org/#narrow/channel/323443-Artificial-Intelligence.2FMachine-Learning-.28AI.2FML.29/topic/LLM.20FHIR.20Eval.20Preview/near/483998202) about this preview release and in particular:

* Feedback on the evaluation tasks and methodologies
* Suggestions for additional benchmarks
* Contributions to test cases and documentation
* Sharing of evaluation results and experiences

## What's Next?

We're focusing on:

* Refining the benchmark based on community feedback
* Implementing prior art and releasing four evaluation tasks for the benchmark
* Designing and obtaining appropriate test cases for the tasks

## In this blog

[Overview](#overview)

[Supported Models](#supported-models)

[Community Involvement](#community-involvement)

[What's Next?](#what's-next?)

## More platform updates

[View All](/blog)

[![Open Sourcing Payer Consumer Data](/_next/image?url=%2Fimages%2Fblog%2Fopen-sourcing-payer-consumer-data.png&w=1080&q=75)

### Open Sourcing Payer Consumer Data

HealthLX and Flexpa discuss their recent open source releases enabling vendor neutral standards-aligned translation of healthcare data into FHIR in the payer consumer data space.

September 29, 2025•Joshua Kelly](/blog/open-sourcing-payer-consumer-data)[![How We Used SQL on FHIR to Shrink LLM Context by 92%](/_next/image?url=%2Fimages%2Fblog%2Fsql-on-fhir-for-llm-context-reduction.png&w=1080&q=75)

### How We Used SQL on FHIR to Shrink LLM Context by 92%

How we leveraged SQL on FHIR to dramatically reduce token usage in Flexpal, our smart health agent, while maintaining rich clinical context and simplifying our tooling architecture.

November 3, 2025•Larry Ditton](/blog/sql-on-fhir-for-llm-context-reduction)[![Nov 2025 State of The Payer Patient Access API Report](/_next/image?url=%2Fimages%2Fblog%2Fnov-2025-state-of-the-payer-patient-access-api-report.png&w=1080&q=75)

### Nov 2025 State of The Payer Patient Access API Report

The State of the Payer Patient Access API Report is a scorecard for payers, vendors, and developers to understand the CMS-9115-F landscape.

November 24, 2025•Hannah Trub & Angela Liu](/blog/nov-2025-state-of-the-payer-patient-access-api-report)

## Get fresh insights on patient access

Email address

Subscribe

Unsubscribe anytime

![Newsletter illustration](/images/newsletter/illustration.svg)

## Get fresh insights on patient access

Unsubscribe anytime

![Newsletter illustration](/images/newsletter/illustration.svg)