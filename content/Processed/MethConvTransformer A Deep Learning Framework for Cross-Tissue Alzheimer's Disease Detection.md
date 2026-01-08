---
title: 'MethConvTransformer: A Deep Learning Framework for Cross-Tissue Alzheimer''s
  Disease Detection'
authors:
- Gang Qu
- Guanghao Li
- Zhongming Zhao
date: '2026-01-01'
categories:
- q-bio.GN
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.00143v1
arxiv_id: 2601.00143v1
tags:
- paper
- alphaxiv/hot
- topic/q-bio-GN
- topic/cs-AI
---

# MethConvTransformer: A Deep Learning Framework for Cross-Tissue Alzheimer's Disease Detection

**Authors:** Gang Qu, Guanghao Li, Zhongming Zhao

**Date:** 2026-01-01 | **Categories:** q-bio.GN, cs.AI

[PDF](https://arxiv.org/pdf/2601.00143v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.00143v1)

## Abstract

Alzheimer's disease (AD) is a multifactorial neurodegenerative disorder characterized by progressive cognitive decline and widespread epigenetic dysregulation in the brain. DNA methylation, as a stable yet dynamic epigenetic modification, holds promise as a noninvasive biomarker for early AD detection. However, methylation signatures vary substantially across tissues and studies, limiting reproducibility and translational utility. To address these challenges, we develop MethConvTransformer, a transformer-based deep learning framework that integrates DNA methylation profiles from both brain and peripheral tissues to enable biomarker discovery. The model couples a CpG-wise linear projection with convolutional and self-attention layers to capture local and long-range dependencies among CpG sites, while incorporating subject-level covariates and tissue embeddings to disentangle shared and region-specific methylation effects. In experiments across six GEO datasets and an independent ADNI validation cohort, our model consistently outperforms conventional machine-learning baselines, achieving superior discrimination and generalization. Moreover, interpretability analyses using linear projection, SHAP, and Grad-CAM++ reveal biologically meaningful methylation patterns aligned with AD-associated pathways, including immune receptor signaling, glycosylation, lipid metabolism, and endomembrane (ER/Golgi) organization. Together, these results indicate that MethConvTransformer delivers robust, cross-tissue epigenetic biomarkers for AD while providing multi-resolution interpretability, thereby advancing reproducible methylation-based diagnostics and offering testable hypotheses on disease mechanisms.

## Notes

