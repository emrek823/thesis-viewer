---
title: 'Benchmark Success, Clinical Failure: When Reinforcement Learning Optimizes
  for Benchmarks, Not Patients'
authors:
- Armin Berger
- Manuela Bergau
- Helen Schneider
- Saad Ahmad
- Tom Anglim Lagones
- Gianluca Brugnara
- Martha Foltyn-Dumitru
- Kai Schlamp
- Philipp Vollmuth
- Rafet Sifa
date: '2025-12-28'
categories:
- cs.AI
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.23090v1
arxiv_id: 2512.23090v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
- topic/cs-LG
---

# Benchmark Success, Clinical Failure: When Reinforcement Learning Optimizes for Benchmarks, Not Patients

**Authors:** Armin Berger, Manuela Bergau, Helen Schneider, Saad Ahmad, Tom Anglim Lagones...

**Date:** 2025-12-28 | **Categories:** cs.AI, cs.LG

[PDF](https://arxiv.org/pdf/2512.23090v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23090v1)

## Abstract

Recent Reinforcement Learning (RL) advances for Large Language Models (LLMs) have improved reasoning tasks, yet their resource-constrained application to medical imaging remains underexplored. We introduce ChexReason, a vision-language model trained via R1-style methodology (SFT followed by GRPO) using only 2,000 SFT samples, 1,000 RL samples, and a single A100 GPU. Evaluations on CheXpert and NIH benchmarks reveal a fundamental tension: GRPO recovers in-distribution performance (23% improvement on CheXpert, macro-F1 = 0.346) but degrades cross-dataset transferability (19% drop on NIH). This mirrors high-resource models like NV-Reason-CXR-3B, suggesting the issue stems from the RL paradigm rather than scale. We identify a generalization paradox where the SFT checkpoint uniquely improves on NIH before optimization, indicating teacher-guided reasoning captures more institution-agnostic features. Furthermore, cross-model comparisons show structured reasoning scaffolds benefit general-purpose VLMs but offer minimal gain for medically pre-trained models. Consequently, curated supervised fine-tuning may outperform aggressive RL for clinical deployment requiring robustness across diverse populations.

## Notes

