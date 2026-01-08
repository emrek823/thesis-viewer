---
title: The Economics of Accuracy for Medical Reasoning with Large Language Models
authors:
- Bhattacharyya, K.
date: '2025-12-27'
categories:
- health-informatics
pdf_url: https://www.medrxiv.org/content/10.64898/2025.12.22.25342804v1.full.pdf
paper_id: medrxiv_10.64898_2025.12.22.25342804
source: medrxiv
tags:
- paper
- source/medrxiv
- topic/health-informatics
---

# The Economics of Accuracy for Medical Reasoning with Large Language Models

**Authors:** Bhattacharyya, K.

**Date:** 2025-12-27 | **Source:** medrxiv | **Categories:** health-informatics

[PDF](https://www.medrxiv.org/content/10.64898/2025.12.22.25342804v1.full.pdf)

## Abstract

Deploying large language models (LLMs) in clinical settings is limited by security, reliability, latency, and accessibility concerns that favor smaller, on-device or on-premise models. However, these smaller models may struggle to meet accuracy requirements. While fine-tuning and retrieval-augmented generation (RAG) can improve domain-specific accuracy, these methods require additional labeled data, technical skill, and infrastructure. In contrast, test-time scaling--allocating extra token-budget during inference--offers a training-free alternative to increasing accuracy. However, the trade-offs between these strategies and their interaction with model size remain poorly understood for medical reasoning. To address this gap, we compare three approaches--test-time scaling, fine-tuning, and context grounding--using the Gemma and MedGemma family of LLMs (Gemma-3 1B, Gemma-3 4B, Gemma-3 27B, MedGemma-4B, and MedGemma 27B) and evaluate these systems across common biomedical question-answering (QA) datasets and a set of recently released medical exam questions with the performance of practicing clinicians available for comparison. We test baseline prompts (direct answer, Chain-of-Thought, and self-consistency) while introducing a new prompting method we call "prompt-chaining for continuous reflection" (PCCR) that forces inference time minimum token-generation budgets. We assess accuracy and tokens-generated, allowing us to investigate the accuracy-efficiency trade-offs across prompting, context-grounding, fine-tuning, and model scales. We discover equivalency points where smaller models perform comparably to larger ones with increased reasoning budgets, context-grounding, or fine-tuning. We also find inflection points where context-grounding and test-time scaling used together lead to degrading performance. Using these empirical results, we formulate a general framework with equations to balance cost-benefit trade-offs when engineering LLM-based systems for medical reasoning and QA. We recommend generalizable configurations, designs, and patterns to achieve accuracy and efficiency objectives for example use-cases relevant to healthcare organizations.

## Notes

