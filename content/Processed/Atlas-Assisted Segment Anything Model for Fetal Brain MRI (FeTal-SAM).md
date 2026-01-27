---
title: Atlas-Assisted Segment Anything Model for Fetal Brain MRI (FeTal-SAM)
authors:
- Qi Zeng
- Weide Liu
- Bo Li
- Ryne Didier
- P. Ellen Grant
- Davood Karimi
date: '2026-01-22'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.15759v1
arxiv_id: 2601.15759v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
---

# Atlas-Assisted Segment Anything Model for Fetal Brain MRI (FeTal-SAM)

**Authors:** Qi Zeng, Weide Liu, Bo Li, Ryne Didier, P. Ellen Grant...

**Date:** 2026-01-22 | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.15759v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15759v1)

## Abstract

This paper presents FeTal-SAM, a novel adaptation of the Segment Anything Model (SAM) tailored for fetal brain MRI segmentation. Traditional deep learning methods often require large annotated datasets for a fixed set of labels, making them inflexible when clinical or research needs change. By integrating atlas-based prompts and foundation-model principles, FeTal-SAM addresses two key limitations in fetal brain MRI segmentation: (1) the need to retrain models for varying label definitions, and (2) the lack of insight into whether segmentations are driven by genuine image contrast or by learned spatial priors. We leverage multi-atlas registration to generate spatially aligned label templates that serve as dense prompts, alongside a bounding-box prompt, for SAM's segmentation decoder. This strategy enables binary segmentation on a per-structure basis, which is subsequently fused to reconstruct the full 3D segmentation volumes. Evaluations on two datasets, the dHCP dataset and an in-house dataset demonstrate FeTal-SAM's robust performance across gestational ages. Notably, it achieves Dice scores comparable to state-of-the-art baselines which were trained for each dataset and label definition for well-contrasted structures like cortical plate and cerebellum, while maintaining the flexibility to segment any user-specified anatomy. Although slightly lower accuracy is observed for subtle, low-contrast structures (e.g., hippocampus, amygdala), our results highlight FeTal-SAM's potential to serve as a general-purpose segmentation model without exhaustive retraining. This method thus constitutes a promising step toward clinically adaptable fetal brain MRI analysis tools.

## Notes

