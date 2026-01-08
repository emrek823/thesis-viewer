---
title: 'PortionNet: Distilling 3D Geometric Knowledge for Food Nutrition Estimation'
authors:
- Darrin Bright
- Rakshith Raj
- Kanchan Keisham
date: '2025-12-26'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.22304v1
arxiv_id: 2512.22304v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# PortionNet: Distilling 3D Geometric Knowledge for Food Nutrition Estimation

**Authors:** Darrin Bright, Rakshith Raj, Kanchan Keisham

**Date:** 2025-12-26 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.22304v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.22304v1)

## Abstract

Accurate food nutrition estimation from single images is challenging due to the loss of 3D information. While depth-based methods provide reliable geometry, they remain inaccessible on most smartphones because of depth-sensor requirements. To overcome this challenge, we propose PortionNet, a novel cross-modal knowledge distillation framework that learns geometric features from point clouds during training while requiring only RGB images at inference. Our approach employs a dual-mode training strategy where a lightweight adapter network mimics point cloud representations, enabling pseudo-3D reasoning without any specialized hardware requirements. PortionNet achieves state-of-the-art performance on MetaFood3D, outperforming all previous methods in both volume and energy estimation. Cross-dataset evaluation on SimpleFood45 further demonstrates strong generalization in energy estimation.

## Notes

