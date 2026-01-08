---
title: 'SingBAG Pro: Accelerating point cloud-based iterative reconstruction for 3D
  photoacoustic imaging under arbitrary array'
authors:
- Shuang Li
- Yibing Wang
- Jian Gao
- Chulhong Kim
- Seongwook Choi
- Yu Zhang
- Qian Chen
- Yao Yao
- Changhui Li
date: '2026-01-02'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.00551v1
arxiv_id: 2601.00551v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# SingBAG Pro: Accelerating point cloud-based iterative reconstruction for 3D photoacoustic imaging under arbitrary array

**Authors:** Shuang Li, Yibing Wang, Jian Gao, Chulhong Kim, Seongwook Choi...

**Date:** 2026-01-02 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.00551v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.00551v1)

## Abstract

High-quality three-dimensional (3D) photoacoustic imaging (PAI) is gaining increasing attention in clinical applications. To address the challenges of limited space and high costs, irregular geometric transducer arrays that conform to specific imaging regions are promising for achieving high-quality 3D PAI with fewer transducers. However, traditional iterative reconstruction algorithms struggle with irregular array configurations, suffering from high computational complexity, substantial memory requirements, and lengthy reconstruction times. In this work, we introduce SlingBAG Pro, an advanced reconstruction algorithm based on the point cloud iteration concept of the Sliding ball adaptive growth (SlingBAG) method, while extending its compatibility to arbitrary array geometries. SlingBAG Pro maintains high reconstruction quality, reduces the number of required transducers, and employs a hierarchical optimization strategy that combines zero-gradient filtering with progressively increased temporal sampling rates during iteration. This strategy rapidly removes redundant spatial point clouds, accelerates convergence, and significantly shortens overall reconstruction time. Compared to the original SlingBAG algorithm, SlingBAG Pro achieves up to a 2.2-fold speed improvement in point cloud-based 3D PA reconstruction under irregular array geometries. The proposed method is validated through both simulation and in vivo mouse experiments, and the source code is publicly available at https://github.com/JaegerCQ/SlingBAG_Pro.

## Notes

