---
title: 'Prior-AttUNet: Retinal OCT Fluid Segmentation Based on Normal Anatomical Priors
  and Attention Gating'
authors:
- Li Yang
- Yuting Liu
date: '2025-12-25'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21693v1
paper_id: 2512.21693v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# Prior-AttUNet: Retinal OCT Fluid Segmentation Based on Normal Anatomical Priors and Attention Gating

**Authors:** Li Yang, Yuting Liu

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21693v1)

## Abstract

Accurate segmentation of macular edema, a hallmark pathological feature in vision-threatening conditions such as age-related macular degeneration and diabetic macular edema, is essential for clinical diagnosis and management. To overcome the challenges of segmenting fluid regions in optical coherence tomography (OCT) images-notably ambiguous boundaries and cross-device heterogeneity-this study introduces Prior-AttUNet, a segmentation model augmented with generative anatomical priors. The framework adopts a hybrid dual-path architecture that integrates a generative prior pathway with a segmentation network. A variational autoencoder supplies multi-scale normative anatomical priors, while the segmentation backbone incorporates densely connected blocks and spatial pyramid pooling modules to capture richer contextual information. Additionally, a novel triple-attention mechanism, guided by anatomical priors, dynamically modulates feature importance across decoding stages, substantially enhancing boundary delineation. Evaluated on the public RETOUCH benchmark, Prior-AttUNet achieves excellent performance across three OCT imaging devices (Cirrus, Spectralis, and Topcon), with mean Dice similarity coefficients of 93.93%, 95.18%, and 93.47%, respectively. The model maintains a low computational cost of 0.37 TFLOPs, striking an effective balance between segmentation precision and inference efficiency. These results demonstrate its potential as a reliable tool for automated clinical analysis.

## Notes

