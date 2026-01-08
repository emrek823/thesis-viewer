---
title: 'MotionTeller: Multi-modal Integration of Wearable Time-Series with LLMs for
  Health and Behavioral Understanding'
authors:
- Aiwei Zhang
- Arvind Pillai
- Andrew Campbell
- Nicholas C. Jacobson
date: '2025-12-25'
categories:
- cs.LG
- cs.AI
- cs.CL
- cs.HC
pdf_url: https://arxiv.org/pdf/2512.21506v1
paper_id: 2512.21506v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
- topic/cs-CL
---

# MotionTeller: Multi-modal Integration of Wearable Time-Series with LLMs for Health and Behavioral Understanding

**Authors:** Aiwei Zhang, Arvind Pillai, Andrew Campbell, Nicholas C. Jacobson

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.LG, cs.AI, cs.CL, cs.HC

[PDF](https://arxiv.org/pdf/2512.21506v1)

## Abstract

As wearable sensing becomes increasingly pervasive, a key challenge remains: how can we generate natural language summaries from raw physiological signals such as actigraphy - minute-level movement data collected via accelerometers? In this work, we introduce MotionTeller, a generative framework that natively integrates minute-level wearable activity data with large language models (LLMs). MotionTeller combines a pretrained actigraphy encoder with a lightweight projection module that maps behavioral embeddings into the token space of a frozen decoder-only LLM, enabling free-text, autoregressive generation of daily behavioral summaries. We construct a novel dataset of 54383 (actigraphy, text) pairs derived from real-world NHANES recordings, and train the model using cross-entropy loss with supervision only on the language tokens. MotionTeller achieves high semantic fidelity (BERTScore-F1 = 0.924) and lexical accuracy (ROUGE-1 = 0.722), outperforming prompt-based baselines by 7 percent in ROUGE-1. The average training loss converges to 0.38 by epoch 15, indicating stable optimization. Qualitative analysis confirms that MotionTeller captures circadian structure and behavioral transitions, while PCA plots reveal enhanced cluster alignment in embedding space post-training. Together, these results position MotionTeller as a scalable, interpretable system for transforming wearable sensor data into fluent, human-centered descriptions, introducing new pathways for behavioral monitoring, clinical review, and personalized health interventions.

## Notes

