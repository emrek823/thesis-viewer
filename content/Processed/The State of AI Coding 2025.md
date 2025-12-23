---
title: "The State of AI Coding 2025"
source: "https://www.greptile.com/state-of-ai-coding-2025"
author:
  - "[[Greptile]]"
published:
created: 2025-12-17
description: "A cross-industry study on recent trends in AI software development. Explore engineering team velocity, AI tool adoption, model growth trends, and performance benchmarks."
tags:
  - "clippings"
---
## The State of AI Coding

A cross-industry study on recent trends in AI software development.[01](https://www.greptile.com/#section-01)

Engineering Team Velocity

Measuring productivity gains across development workflows

[View original](https://www.greptile.com/#section-01)AI Tool Adoption

02

Tracking the rise of AI-powered development tools

[View original](https://www.greptile.com/#section-02)Model Growth Trends

03

How AI models have scaled and evolved

[View original](https://www.greptile.com/#section-03)Model Snapshot

04

Performance benchmarks across latency, cost, and tokenization

[View original](https://www.greptile.com/#section-04)Research & Content

05

Recent papers on foundational models and applications

[View original](https://www.greptile.com/#section-05)

Section 01

## Engineering Team Velocity

Measuring productivity gains across development workflows.

Chart 1.1

PRs Are Getting Bigger

Median PR size increased 33% from March to November 2025, rising from 57 to 76 lines changed per PR.

Captured from Greptile internal data engineering team velocity

Chart 1.2

Developer Output Up 76%

Lines of code per developer grew from 4,450 to 7,839 as AI coding tools act as a force multiplier.

Captured from Greptile internal data engineering team velocity

Chart 1.3

Medium Teams Output +89%

Medium teams (6-15 devs) increased output from 7,005 to 13,227 lines per developer.

Captured from Greptile internal data engineering team velocity

Chart 1.4

Lines Changed Per File Up 20%

Median lines changed per file grew from 18 to 22 as PRs become denser.

Captured from Greptile internal data engineering team velocity

---

Section 02

## AI Tool Adoption

Tracking the rise of AI-powered development tools.

Chart 2.3

AI Rules Files

CLAUDE.md leads adoption at 67%. Most teams use multiple formats.

17% of repos use all three formats

Chart 2.4

AI SDK Growth

Anthropic SDK leads at 43M (8x growth). Pydantic AI explodes 3.7x to 6M.

PyPI + npm monthly downloads, Apr–Nov 2025

Chart 2.5

LLMOps Top 5

LangSmith dominates at 110M monthly downloads.

PyPI + npm monthly downloads, Jun–Nov 2025

LangSmith is bundled with LangChain installs

---

Section 03

## Model Growth Trends

How AI models have scaled and evolved.

Chart 3.1

LLM Provider SDK Downloads

OpenAI leads at 130M. Anthropic grew 1,547x since Apr 2023. Google trails at 13.6M.

PyPI monthly downloads, Jan 2022–Nov 2025

Chart 3.2

The Gap is Closing

OpenAI-to-Anthropic ratio dropped from 47:1 (Jan 2024) to 4.2:1 (Nov 2025).

Peak: 47:1 (Jan 2024)

Now: 4.2:1

PyPI monthly downloads ratio, Jul 2023–Nov 2025

---

Section 04

## Model Snapshot

Model benchmarks for GPT-5.1, Claude Sonnet 4.5, GPT-5-Codex, Claude Opus 4.5, and Gemini 3 Pro to understand how they behave as backends for coding agents across latency, throughput, rate limits, cold starts, cost, and tokenization efficiency.

### Test Setup

Each model ran through the same six test suites with identical parameters:

01

##### TTFT suite

Measured time-to-first-token (TTFT) distribution across requests, reporting p25/p50/p75 percentiles. Three warmup requests preceded measurement.

02

##### Throughput suite

Measured aggregate tokens per second, reporting p25/p50/p75 percentiles across test runs.

### Results Overview

A comprehensive comparison of all models across key performance metrics.

| Model | Provider | TTFT p25 | TTFT p50 | TTFT p75 | Throughput p25 | Throughput p50 | Throughput p75 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5-Codex | OpenAI | 3.7 s | 5.0 s | 6.6 s | 53 tok/s | 62 tok/s | 73 tok/s |
| GPT-5.1 | OpenAI | 3.9 s | 5.5 s | 7.6 s | 55 tok/s | 62 tok/s | 68 tok/s |
| Sonnet 4.5 | Anthropic | 1.8 s | 2.0 s | 2.2 s | 17 tok/s | 19 tok/s | 21 tok/s |
| Opus 4.5 | Anthropic | 1.9 s | 2.2 s | 3.0 s | 14 tok/s | 18 tok/s | 20 tok/s |
| Gemini 3 Pro | Google | 11.8 s | 13.1 s | 14.5 s | 4 tok/s | 4 tok/s | 5 tok/s |

### Time to First Token (TTFT)

### Generation Throughput

### Cost Multipliers

The key patterns are the multipliers, not the absolute prices. Calculated using public list pricing as of December 15, 2025 for an 8k input / 1k output workload, normalized to GPT-5 Codex = 1× (no caching/batch discounts).

#### Cost Multiplier

GPT-5 Codex

1.00×

GPT-5.1

1.00×

Gemini 3 Pro

1.40×

Claude Sonnet 4.5

2.00×

Claude Opus 4.5

3.30×

---

Section 05

## Research & Content

Surfacing recent research that shaped how 2025 tools handle scale, context, and agents, so teams can interpret and apply to their own systems.

### Foundational Model Advances

#### DeepSeek-V3 Technical Report

DeepSeek-V3 is a 671B-parameter Mixture-of-Experts model that activates only 37B parameters per token, focusing on efficiency rather than raw size. The report shows how architectural choices can narrow the gap with much larger dense models.

Multi-Head Latent Attention compresses key/value representations into small latent vectors, shrinking KV caches and easing memory pressure.

Sparse MoE routing activates only a few experts per token and limits cross-node communication to keep GPUs fully utilized.

Multi-Token Prediction adds auxiliary targets per token, increasing learning signal density during training.

Overall, the model treats scale as a data-flow and memory-management problem, not just a parameter-count problem.

#### Qwen2.5-Omni Technical Report

Qwen2.5-Omni is a multimodal model that separates perception (audio/vision encoders) from sequence modeling (a shared language model), with an emphasis on stable, real-time text–audio–video reasoning.

Time-aligned Multimodal RoPE (TMRoPE) synchronizes audio and video via consistent temporal position embeddings.

Encoders process inputs in blocks, while a central language model handles long-range reasoning and context.

A Thinker–Talker architecture splits responsibilities: Thinker does text reasoning, Talker turns internal representations into streaming speech.

The design highlights that decoupling perception, reasoning, and generation can make multimodal systems easier to scale and debug.

#### Long Context vs. RAG for LLMs: An Evaluation and Revisits

This paper systematically compares long-context (LC) models and RAG across 12 QA datasets and ~19k questions, focusing on how each approach handles external information.

LC tends to outperform RAG on continuous, well-structured sources (books, wiki articles) and precise fact-based questions.

RAG tends to win on fragmented, multi-source, and dialogue-heavy data, especially under loose F1-style scoring.

Summarization-based retrieval performs similarly to LC, while simple chunk-based retrieval falls behind.

The core claim: LC and RAG succeed under different structural assumptions about where relevant information lives.

#### Does RAG Really Perform Bad for Long Context?

RetroLM introduces KV-level retrieval for long-context tasks, treating the KV cache as the retrieval surface instead of raw text.

Inputs are split into fixed-size KV "pages" with bookmark tokens summarizing each page.

A trained page retriever selects important KV pages per layer; offloaded pages live off-device and are pulled back on demand.

Across LongBench, InfiniteBench, and RULER, RetroLM beats standard RAG pipelines and other efficient long-context methods.

The framework reframes retrieval as selecting which cached representations to keep, rather than which raw tokens to stuff into the prompt.

#### Rethinking Mixture-of-Agents

Self-MoA examines whether diverse model ensembles are actually necessary for strong Mixture-of-Agents performance.

### Application-Layer Innovations

#### GEPA: Reflective Prompt Evolution Can Outperform RL

GEPA (Genetic-Pareto) is a reflective prompt-evolution method that optimizes instructions using execution traces instead of updating model weights.

The system samples rollouts, has the model analyze its own traces in natural language, and proposes new prompts.

A Pareto front keeps multiple candidate prompts that perform well on different subsets of data.

Across four tasks, GEPA matches or beats GRPO-style RL with up to 35× fewer rollouts.

The work treats prompts as an external optimization layer, using natural-language reflection rather than heavyweight RL.

#### SFR-DeepResearch: Single-Agent RL for Deep Web Research

SFR-DeepResearch (SFR-DR) is a reinforcement-learning framework for training a single web-research agent that decides when to search, browse, or execute code.

#### Beyond RAG vs Long-Context

LDAR (Learning Distraction-Aware Retrieval) targets the performance drop that occurs when relevant passages are mixed with noisy context.

A small Transformer operates purely on similarity-score distributions of candidate passages, predicting a lower and upper similarity bound.

Retrieval becomes selecting a continuous "band" of passages, instead of top-k or independent Bernoulli decisions.

LDAR uses 25–63% of the tokens of long-context baselines while maintaining or improving performance.

The central claim is that context quality and distraction-awareness matter more than raw context size, especially on noisy corpora.

#### MEM1: Constant-Memory Long-Horizon Agents

MEM1 is an RL framework that trains LLM agents to operate over long multi-turn tasks while keeping memory usage nearly constant.

At each step, previous memory and new observations are merged into a compact internal state token (`&lt;IS&gt;`), and older context is discarded.

A masked-trajectory RL scheme reconstructs valid trajectories for PPO without feeding the entire history.

MEM1-7B matches or beats much larger baselines on tasks with up to 16 sequential objectives while reducing memory use by ~3.7×.

The work shows that long-horizon behavior can come from learned internal state handling rather than expanding context windows or bolting on external memory.

#### Search-R1: Training LLMs to Reason and Search with RL

Search-R1 trains models to interleave step-by-step reasoning with live search-engine queries.

The framework uses a structured template: `&lt;think&gt;` for internal reasoning, `&lt;search&gt;` for queries, `&lt;information&gt;` for retrieved context, and `&lt;answer&gt;` for final output.

PPO or GRPO updates apply only to model-generated segments, treating the search engine as part of the environment.

Evaluated across seven QA datasets, Search-R1 delivers large gains over strong RAG baselines, including on multi-hop tasks like HotpotQA and 2WikiMultiHopQA.

The paper positions targeted, RL-trained search behavior as an alternative to static top-k retrieval and hand-crafted tool chains.

---

![](https://www.greptile.com/_next/image?url=%2Ftextures%2Fpaper-texture.webp&w=3840&q=75)