---
title: 'MedKGI: Iterative Differential Diagnosis with Medical Knowledge Graphs and
  Information-Guided Inquiring'
authors:
- Qipeng Wang
- Rui Sheng
- Yafei Li
- Huamin Qu
- Yushi Sun
- Min Zhu
date: '2025-12-30'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.24181v1
arxiv_id: 2512.24181v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# MedKGI: Iterative Differential Diagnosis with Medical Knowledge Graphs and Information-Guided Inquiring

**Authors:** Qipeng Wang, Rui Sheng, Yafei Li, Huamin Qu, Yushi Sun...

**Date:** 2025-12-30 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2512.24181v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.24181v1)

## Abstract

Recent advancements in Large Language Models (LLMs) have demonstrated significant promise in clinical diagnosis. However, current models struggle to emulate the iterative, diagnostic hypothesis-driven reasoning of real clinical scenarios. Specifically, current LLMs suffer from three critical limitations: (1) generating hallucinated medical content due to weak grounding in verified knowledge, (2) asking redundant or inefficient questions rather than discriminative ones that hinder diagnostic progress, and (3) losing coherence over multi-turn dialogues, leading to contradictory or inconsistent conclusions. To address these challenges, we propose MedKGI, a diagnostic framework grounded in clinical practices. MedKGI integrates a medical knowledge graph (KG) to constrain reasoning to validated medical ontologies, selects questions based on information gain to maximize diagnostic efficiency, and adopts an OSCE-format structured state to maintain consistent evidence tracking across turns. Experiments on clinical benchmarks show that MedKGI outperforms strong LLM baselines in both diagnostic accuracy and inquiry efficiency, improving dialogue efficiency by 30% on average while maintaining state-of-the-art accuracy.

## Notes

