---
title: 'Beyond Pixel Simulation: Pathology Image Generation via Diagnostic Semantic
  Tokens and Prototype Control'
authors:
- Minghao Han
- YiChen Liu
- Yizhou Liu
- Zizhi Chen
- Jingqun Tang
- Xuecheng Wu
- Dingkang Yang
- Lihua Zhang
date: '2025-12-24'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21058v1
arxiv_id: 2512.21058v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Beyond Pixel Simulation: Pathology Image Generation via Diagnostic Semantic Tokens and Prototype Control

**Authors:** Minghao Han, YiChen Liu, Yizhou Liu, Zizhi Chen, Jingqun Tang...

**Date:** 2025-12-24 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21058v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.21058v1)

## Abstract

In computational pathology, understanding and generation have evolved along disparate paths: advanced understanding models already exhibit diagnostic-level competence, whereas generative models largely simulate pixels. Progress remains hindered by three coupled factors: the scarcity of large, high-quality image-text corpora; the lack of precise, fine-grained semantic control, which forces reliance on non-semantic cues; and terminological heterogeneity, where diverse phrasings for the same diagnostic concept impede reliable text conditioning. We introduce UniPath, a semantics-driven pathology image generation framework that leverages mature diagnostic understanding to enable controllable generation. UniPath implements Multi-Stream Control: a Raw-Text stream; a High-Level Semantics stream that uses learnable queries to a frozen pathology MLLM to distill paraphrase-robust Diagnostic Semantic Tokens and to expand prompts into diagnosis-aware attribute bundles; and a Prototype stream that affords component-level morphological control via a prototype bank. On the data front, we curate a 2.65M image-text corpus and a finely annotated, high-quality 68K subset to alleviate data scarcity. For a comprehensive assessment, we establish a four-tier evaluation hierarchy tailored to pathology. Extensive experiments demonstrate UniPath's SOTA performance, including a Patho-FID of 80.9 (51% better than the second-best) and fine-grained semantic control achieving 98.7% of the real-image. The meticulously curated datasets, complete source code, and pre-trained model weights developed in this study will be made openly accessible to the public.

## Notes

