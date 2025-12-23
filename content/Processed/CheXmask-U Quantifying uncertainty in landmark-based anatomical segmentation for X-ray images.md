---
title: 'CheXmask-U: Quantifying uncertainty in landmark-based anatomical segmentation
  for X-ray images'
authors:
- Matias Cosarinsky
- Nicolas Gaggion
- Rodrigo Echeveste
- Enzo Ferrante
date: '2025-12-11'
source: arxiv
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.10715v1
arxiv_id: 2512.10715v1
tags:
- paper
- source/arxiv
- alphaxiv/hot
- topic/cs-CV
---

# CheXmask-U: Quantifying uncertainty in landmark-based anatomical segmentation for X-ray images

**Authors:** Matias Cosarinsky, Nicolas Gaggion, Rodrigo Echeveste, Enzo Ferrante

**Date:** 2025-12-11

**Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.10715v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.10715v1)

## Abstract

Uncertainty estimation is essential for the safe clinical deployment of medical image segmentation systems, enabling the identification of unreliable predictions and supporting human oversight. While prior work has largely focused on pixel-level uncertainty, landmark-based segmentation offers inherent topological guarantees yet remains underexplored from an uncertainty perspective. In this work, we study uncertainty estimation for anatomical landmark-based segmentation on chest X-rays. Inspired by hybrid neural network architectures that combine standard image convolutional encoders with graph-based generative decoders, and leveraging their variational latent space, we derive two complementary measures: (i) latent uncertainty, captured directly from the learned distribution parameters, and (ii) predictive uncertainty, obtained by generating multiple stochastic output predictions from latent samples. Through controlled corruption experiments we show that both uncertainty measures increase with perturbation severity, reflecting both global and local degradation. We demonstrate that these uncertainty signals can identify unreliable predictions by comparing with manual ground-truth, and support out-of-distribution detection on the CheXmask dataset. More importantly, we release CheXmask-U (huggingface.co/datasets/mcosarinsky/CheXmask-U), a large scale dataset of 657,566 chest X-ray landmark segmentations with per-node uncertainty estimates, enabling researchers to account for spatial variations in segmentation quality when using these anatomical masks. Our findings establish uncertainty estimation as a promising direction to enhance robustness and safe deployment of landmark-based anatomical segmentation methods in chest X-ray. A fully working interactive demo of the method is available at huggingface.co/spaces/matiasky/CheXmask-U and the source code at github.com/mcosarinsky/CheXmask-U.

## Notes

<!-- Add your notes here -->
