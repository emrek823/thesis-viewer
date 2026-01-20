---
title: 'VQ-Seg: Vector-Quantized Token Perturbation for Semi-Supervised Medical Image
  Segmentation'
authors:
- Sicheng Yang
- Zhaohu Xing
- Lei Zhu
date: '2026-01-15'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.10124v1
arxiv_id: 2601.10124v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# VQ-Seg: Vector-Quantized Token Perturbation for Semi-Supervised Medical Image Segmentation

**Authors:** Sicheng Yang, Zhaohu Xing, Lei Zhu

**Date:** 2026-01-15 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.10124v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10124v1)

## Abstract

Consistency learning with feature perturbation is a widely used strategy in semi-supervised medical image segmentation. However, many existing perturbation methods rely on dropout, and thus require a careful manual tuning of the dropout rate, which is a sensitive hyperparameter and often difficult to optimize and may lead to suboptimal regularization. To overcome this limitation, we propose VQ-Seg, the first approach to employ vector quantization (VQ) to discretize the feature space and introduce a novel and controllable Quantized Perturbation Module (QPM) that replaces dropout. Our QPM perturbs discrete representations by shuffling the spatial locations of codebook indices, enabling effective and controllable regularization. To mitigate potential information loss caused by quantization, we design a dual-branch architecture where the post-quantization feature space is shared by both image reconstruction and segmentation tasks. Moreover, we introduce a Post-VQ Feature Adapter (PFA) to incorporate guidance from a foundation model (FM), supplementing the high-level semantic information lost during quantization. Furthermore, we collect a large-scale Lung Cancer (LC) dataset comprising 828 CT scans annotated for central-type lung carcinoma. Extensive experiments on the LC dataset and other public benchmarks demonstrate the effectiveness of our method, which outperforms state-of-the-art approaches. Code available at: https://github.com/script-Yang/VQ-Seg.

## Notes

