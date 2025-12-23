---
title: 'FOD-Diff: 3D Multi-Channel Patch Diffusion Model for Fiber Orientation Distribution'
authors:
- Hao Tang
- Hanyu Liu
- Alessandro Perelli
- Xi Chen
- Chao Li
date: '2025-12-18'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.16075v1
arxiv_id: 2512.16075v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
---

# FOD-Diff: 3D Multi-Channel Patch Diffusion Model for Fiber Orientation Distribution

**Authors:** Hao Tang, Hanyu Liu, Alessandro Perelli, Xi Chen, Chao Li

**Date:** 2025-12-18 | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2512.16075v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.16075v1)

## Abstract

Diffusion MRI (dMRI) is a critical non-invasive technique to estimate fiber orientation distribution (FOD) for characterizing white matter integrity. Estimating FOD from single-shell low angular resolution dMRI (LAR-FOD) is limited by accuracy, whereas estimating FOD from multi-shell high angular resolution dMRI (HAR-FOD) requires a long scanning time, which limits its applicability. Diffusion models have shown promise in estimating HAR-FOD based on LAR-FOD. However, using diffusion models to efficiently generate HAR-FOD is challenging due to the large number of spherical harmonic (SH) coefficients in FOD. Here, we propose a 3D multi-channel patch diffusion model to predict HAR-FOD from LAR-FOD. We design the FOD-patch adapter by introducing the prior brain anatomy for more efficient patch-based learning. Furthermore, we introduce a voxel-level conditional coordinating module to enhance the global understanding of the model. We design the SH attention module to effectively learn the complex correlations of the SH coefficients. Our experimental results show that our method achieves the best performance in HAR-FOD prediction and outperforms other state-of-the-art methods.

## Notes

