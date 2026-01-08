---
title: 'Mind the Gap: Continuous Magnification Sampling for Pathology Foundation Models'
authors:
- Alexander Möllers
- Julius Hense
- Florian Schulz
- Timo Milbich
- Maximilian Alber
- Lukas Ruff
date: '2026-01-05'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.02198v1
arxiv_id: 2601.02198v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
---

# Mind the Gap: Continuous Magnification Sampling for Pathology Foundation Models

**Authors:** Alexander Möllers, Julius Hense, Florian Schulz, Timo Milbich, Maximilian Alber...

**Date:** 2026-01-05 | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.02198v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.02198v1)

## Abstract

In histopathology, pathologists examine both tissue architecture at low magnification and fine-grained morphology at high magnification. Yet, the performance of pathology foundation models across magnifications and the effect of magnification sampling during training remain poorly understood. We model magnification sampling as a multi-source domain adaptation problem and develop a simple theoretical framework that reveals systematic trade-offs between sampling strategies. We show that the widely used discrete uniform sampling of magnifications (0.25, 0.5, 1.0, 2.0 mpp) leads to degradation at intermediate magnifications. We introduce continuous magnification sampling, which removes gaps in magnification coverage while preserving performance at standard scales. Further, we derive sampling distributions that optimize representation quality across magnification scales. To evaluate these strategies, we introduce two new benchmarks (TCGA-MS, BRACS-MS) with appropriate metrics. Our experiments show that continuous sampling substantially improves over discrete sampling at intermediate magnifications, with gains of up to 4 percentage points in balanced classification accuracy, and that optimized distributions can further improve performance. Finally, we evaluate current histopathology foundation models, finding that magnification is a primary driver of performance variation across models. Our work paves the way towards future pathology foundation models that perform reliably across magnifications.

## Notes

