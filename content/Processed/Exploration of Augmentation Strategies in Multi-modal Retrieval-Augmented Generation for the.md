---
title: 'Exploration of Augmentation Strategies in Multi-modal Retrieval-Augmented
  Generation for the Biomedical Domain: A Case Study Evaluating Question Answering
  in Glycobiology'
authors:
- Primož Kocbek
- Azra Frkatović-Hodžić
- Dora Lalić
- Vivian Hui
- Gordan Lauc
- Gregor Štiglic
date: '2025-12-18'
source: arxiv
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.16802v1
arxiv_id: 2512.16802v1
tags:
- paper
- source/arxiv
- alphaxiv/hot
- topic/cs-CL
---

# Exploration of Augmentation Strategies in Multi-modal Retrieval-Augmented Generation for the Biomedical Domain: A Case Study Evaluating Question Answering in Glycobiology

**Authors:** Primož Kocbek, Azra Frkatović-Hodžić, Dora Lalić, Vivian Hui, Gordan Lauc (+1 more)

**Date:** 2025-12-18

**Source:** arxiv | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2512.16802v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.16802v1)

## Abstract

Multi-modal retrieval-augmented generation (MM-RAG) promises grounded biomedical QA, but it is unclear when to (i) convert figures/tables into text versus (ii) use optical character recognition (OCR)-free visual retrieval that returns page images and leaves interpretation to the generator. We study this trade-off in glycobiology, a visually dense domain. We built a benchmark of 120 multiple-choice questions (MCQs) from 25 papers, stratified by retrieval difficulty (easy text, medium figures/tables, hard cross-evidence). We implemented four augmentations-None, Text RAG, Multi-modal conversion, and late-interaction visual retrieval (ColPali)-using Docling parsing and Qdrant indexing. We evaluated mid-size open-source and frontier proprietary models (e.g., Gemma-3-27B-IT, GPT-4o family). Additional testing used the GPT-5 family and multiple visual retrievers (ColPali/ColQwen/ColFlor). Accuracy with Agresti-Coull 95% confidence intervals (CIs) was computed over 5 runs per configuration. With Gemma-3-27B-IT, Text and Multi-modal augmentation outperformed OCR-free retrieval (0.722-0.740 vs. 0.510 average accuracy). With GPT-4o, Multi-modal achieved 0.808, with Text 0.782 and ColPali 0.745 close behind; within-model differences were small. In follow-on experiments with the GPT-5 family, the best results with ColPali and ColFlor improved by ~2% to 0.828 in both cases. In general, across the GPT-5 family, ColPali, ColQwen, and ColFlor were statistically indistinguishable. GPT-5-nano trailed larger GPT-5 variants by roughly 8-10%. Pipeline choice is capacity-dependent: converting visuals to text lowers the reader burden and is more reliable for mid-size models, whereas OCR-free visual retrieval becomes competitive under frontier models. Among retrievers, ColFlor offers parity with heavier options at a smaller footprint, making it an efficient default when strong generators are available.

## Notes

<!-- Add your notes here -->
