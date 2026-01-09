---
title: Mechanistic Interpretability of Large-Scale Counting in LLMs through a System-2
  Strategy
authors:
- Hosein Hasani
- Mohammadali Banayeeanzade
- Ali Nafisi
- Sadegh Mohammadian
- Fatemeh Askari
- Mobin Bagherian
- Amirmohammad Izadi
- Mahdieh Soleymani Baghshah
date: '2026-01-06'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.02989v1
arxiv_id: 2601.02989v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Mechanistic Interpretability of Large-Scale Counting in LLMs through a System-2 Strategy

**Authors:** Hosein Hasani, Mohammadali Banayeeanzade, Ali Nafisi, Sadegh Mohammadian, Fatemeh Askari...

**Date:** 2026-01-06 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.02989v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.02989v1)

## Abstract

Large language models (LLMs), despite strong performance on complex mathematical problems, exhibit systematic limitations in counting tasks. This issue arises from architectural limits of transformers, where counting is performed across layers, leading to degraded precision for larger counting problems due to depth constraints. To address this limitation, we propose a simple test-time strategy inspired by System-2 cognitive processes that decomposes large counting tasks into smaller, independent sub-problems that the model can reliably solve. We evaluate this approach using observational and causal mediation analyses to understand the underlying mechanism of this System-2-like strategy. Our mechanistic analysis identifies key components: latent counts are computed and stored in the final item representations of each part, transferred to intermediate steps via dedicated attention heads, and aggregated in the final stage to produce the total count. Experimental results demonstrate that this strategy enables LLMs to surpass architectural limitations and achieve high accuracy on large-scale counting tasks. This work provides mechanistic insight into System-2 counting in LLMs and presents a generalizable approach for improving and understanding their reasoning behavior.

## Notes

