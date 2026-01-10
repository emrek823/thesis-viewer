---
title: 'TokenSeg: Efficient 3D Medical Image Segmentation via Hierarchical Visual
  Token Compression'
authors:
- Sen Zeng
- Hong Zhou
- Zheng Zhu
- Yang Liu
date: '2026-01-08'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.04519v1
arxiv_id: 2601.04519v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# TokenSeg: Efficient 3D Medical Image Segmentation via Hierarchical Visual Token Compression

**Authors:** Sen Zeng, Hong Zhou, Zheng Zhu, Yang Liu

**Date:** 2026-01-08 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.04519v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.04519v1)

## Abstract

Three-dimensional medical image segmentation is a fundamental yet computationally demanding task due to the cubic growth of voxel processing and the redundant computation on homogeneous regions. To address these limitations, we propose \textbf{TokenSeg}, a boundary-aware sparse token representation framework for efficient 3D medical volume segmentation. Specifically, (1) we design a \emph{multi-scale hierarchical encoder} that extracts 400 candidate tokens across four resolution levels to capture both global anatomical context and fine boundary details; (2) we introduce a \emph{boundary-aware tokenizer} that combines VQ-VAE quantization with importance scoring to select 100 salient tokens, over 60\% of which lie near tumor boundaries; and (3) we develop a \emph{sparse-to-dense decoder} that reconstructs full-resolution masks through token reprojection, progressive upsampling, and skip connections. Extensive experiments on a 3D breast DCE-MRI dataset comprising 960 cases demonstrate that TokenSeg achieves state-of-the-art performance with 94.49\% Dice and 89.61\% IoU, while reducing GPU memory and inference latency by 64\% and 68\%, respectively. To verify the generalization capability, our evaluations on MSD cardiac and brain MRI benchmark datasets demonstrate that TokenSeg consistently delivers optimal performance across heterogeneous anatomical structures. These results highlight the effectiveness of anatomically informed sparse representation for accurate and efficient 3D medical image segmentation.

## Notes

