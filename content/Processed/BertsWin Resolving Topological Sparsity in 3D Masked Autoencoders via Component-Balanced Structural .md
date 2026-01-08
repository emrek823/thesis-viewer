---
title: 'BertsWin: Resolving Topological Sparsity in 3D Masked Autoencoders via Component-Balanced
  Structural Optimization'
authors:
- Evgeny Alves Limarenko
- Anastasiia Studenikina
date: '2025-12-25'
categories:
- cs.CV
- cs.LG
- eess.IV
pdf_url: https://arxiv.org/pdf/2512.21769v1
paper_id: 2512.21769v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-LG
- topic/eess-IV
---

# BertsWin: Resolving Topological Sparsity in 3D Masked Autoencoders via Component-Balanced Structural Optimization

**Authors:** Evgeny Alves Limarenko, Anastasiia Studenikina

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.CV, cs.LG, eess.IV

[PDF](https://arxiv.org/pdf/2512.21769v1)

## Abstract

The application of self-supervised learning (SSL) and Vision Transformers (ViTs) approaches demonstrates promising results in the field of 2D medical imaging, but the use of these methods on 3D volumetric images is fraught with difficulties. Standard Masked Autoencoders (MAE), which are state-of-the-art solution for 2D, have a hard time capturing three-dimensional spatial relationships, especially when 75% of tokens are discarded during pre-training. We propose BertsWin, a hybrid architecture combining full BERT-style token masking using Swin Transformer windows, to enhance spatial context learning in 3D during SSL pre-training. Unlike the classic MAE, which processes only visible areas, BertsWin introduces a complete 3D grid of tokens (masked and visible), preserving the spatial topology. And to smooth out the quadratic complexity of ViT, single-level local Swin windows are used. We introduce a structural priority loss function and evaluate the results of cone beam computed tomography of the temporomandibular joints. The subsequent assessment includes TMJ segmentation on 3D CT scans. We demonstrate that the BertsWin architecture, by maintaining a complete three-dimensional spatial topology, inherently accelerates semantic convergence by a factor of 5.8x compared to standard ViT-MAE baselines. Furthermore, when coupled with our proposed GradientConductor optimizer, the full BertsWin framework achieves a 15-fold reduction in training epochs (44 vs 660) required to reach state-of-the-art reconstruction fidelity. Analysis reveals that BertsWin achieves this acceleration without the computational penalty typically associated with dense volumetric processing. At canonical input resolutions, the architecture maintains theoretical FLOP parity with sparse ViT baselines, resulting in a significant net reduction in total computational resources due to faster convergence.

## Notes

