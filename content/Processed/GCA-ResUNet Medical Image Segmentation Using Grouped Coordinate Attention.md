---
title: 'GCA-ResUNet: Medical Image Segmentation Using Grouped Coordinate Attention'
authors:
- Jun Ding
- Shang Gao
date: '2025-12-30'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.23990v1
arxiv_id: 2512.23990v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# GCA-ResUNet: Medical Image Segmentation Using Grouped Coordinate Attention

**Authors:** Jun Ding, Shang Gao

**Date:** 2025-12-30 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.23990v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23990v1)

## Abstract

Accurate segmentation of heterogeneous anatomical structures is pivotal for computer-aided diagnosis and subsequent clinical decision-making. Although U-Net based convolutional neural networks have achieved remarkable progress, their intrinsic locality and largely homogeneous attention formulations often limit the modeling of long-range contextual dependencies, especially in multi-organ scenarios and low-contrast regions. Transformer-based architectures mitigate this issue by leveraging global self-attention, but they usually require higher computational resources and larger training data, which may impede deployment in resource-constrained clinical environments.In this paper, we propose GCA-ResUNet, an efficient medical image segmentation framework equipped with a lightweight and plug-and-play Grouped Coordinate Attention (GCA) module. The proposed GCA decouples channel-wise context modeling into multiple groups to explicitly account for semantic heterogeneity across channels, and integrates direction-aware coordinate encoding to capture structured spatial dependencies along horizontal and vertical axes. This design enhances global representation capability while preserving the efficiency advantages of CNN backbones. Extensive experiments on two widely used benchmarks, Synapse and ACDC, demonstrate that GCA-ResUNet achieves Dice scores of 86.11% and 92.64%, respectively, outperforming a range of representative CNN and Transformer-based methods, including Swin-UNet and TransUNet. In particular, GCA-ResUNet yields consistent improvements in delineating small anatomical structures with complex boundaries. These results indicate that the proposed approach provides a favorable trade-off between segmentation accuracy and computational efficiency, offering a practical and scalable solution for clinical deployment.

## Notes

