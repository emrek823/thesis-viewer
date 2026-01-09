---
title: 'RadDiff: Describing Differences in Radiology Image Sets with Natural Language'
authors:
- Xiaoxian Shen
- Yuhui Zhang
- Sahithi Ankireddy
- Xiaohan Wang
- Maya Varma
- Henry Guo
- Curtis Langlotz
- Serena Yeung-Levy
date: '2026-01-07'
categories:
- cs.CV
- cs.AI
- cs.CL
- cs.CY
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.03733v1
paper_id: 2601.03733v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-AI
- topic/cs-CL
---

# RadDiff: Describing Differences in Radiology Image Sets with Natural Language

**Authors:** Xiaoxian Shen, Yuhui Zhang, Sahithi Ankireddy, Xiaohan Wang, Maya Varma...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.CV, cs.AI, cs.CL, cs.CY, cs.LG

[PDF](https://arxiv.org/pdf/2601.03733v1)

## Abstract

Understanding how two radiology image sets differ is critical for generating clinical insights and for interpreting medical AI systems. We introduce RadDiff, a multimodal agentic system that performs radiologist-style comparative reasoning to describe clinically meaningful differences between paired radiology studies. RadDiff builds on a proposer-ranker framework from VisDiff, and incorporates four innovations inspired by real diagnostic workflows: (1) medical knowledge injection through domain-adapted vision-language models; (2) multimodal reasoning that integrates images with their clinical reports; (3) iterative hypothesis refinement across multiple reasoning rounds; and (4) targeted visual search that localizes and zooms in on salient regions to capture subtle findings. To evaluate RadDiff, we construct RadDiffBench, a challenging benchmark comprising 57 expert-validated radiology study pairs with ground-truth difference descriptions. On RadDiffBench, RadDiff achieves 47% accuracy, and 50% accuracy when guided by ground-truth reports, significantly outperforming the general-domain VisDiff baseline. We further demonstrate RadDiff's versatility across diverse clinical tasks, including COVID-19 phenotype comparison, racial subgroup analysis, and discovery of survival-related imaging features. Together, RadDiff and RadDiffBench provide the first method-and-benchmark foundation for systematically uncovering meaningful differences in radiological data.

## Notes

