---
title: 'UltraLBM-UNet: Ultralight Bidirectional Mamba-based Model for Skin Lesion
  Segmentation'
authors:
- Linxuan Fan
- Juntao Jiang
- Weixuan Liu
- Zhucun Xue
- Jiajun Lv
- Jiangning Zhang
- Yong Liu
date: '2025-12-25'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21584v1
paper_id: 2512.21584v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# UltraLBM-UNet: Ultralight Bidirectional Mamba-based Model for Skin Lesion Segmentation

**Authors:** Linxuan Fan, Juntao Jiang, Weixuan Liu, Zhucun Xue, Jiajun Lv...

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21584v1)

## Abstract

Skin lesion segmentation is a crucial step in dermatology for guiding clinical decision-making. However, existing methods for accurate, robust, and resource-efficient lesion analysis have limitations, including low performance and high computational complexity. To address these limitations, we propose UltraLBM-UNet, a lightweight U-Net variant that integrates a bidirectional Mamba-based global modeling mechanism with multi-branch local feature perception. The proposed architecture integrates efficient local feature injection with bidirectional state-space modeling, enabling richer contextual interaction across spatial dimensions while maintaining computational compactness suitable for point-of-care deployment. Extensive experiments on the ISIC 2017, ISIC 2018, and PH2 datasets demonstrate that our model consistently achieves state-of-the-art segmentation accuracy, outperforming existing lightweight and Mamba counterparts with only 0.034M parameters and 0.060 GFLOPs. In addition, we introduce a hybrid knowledge distillation strategy to train an ultra-compact student model, where the distilled variant UltraLBM-UNet-T, with only 0.011M parameters and 0.019 GFLOPs, achieves competitive segmentation performance. These results highlight the suitability of UltraLBM-UNet for point-of-care deployment, where accurate and robust lesion analyses are essential. The source code is publicly available at https://github.com/LinLinLin-X/UltraLBM-UNet.

## Notes

