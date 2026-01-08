---
title: Surgical Scene Segmentation using a Spike-Driven Video Transformer with Real-Time
  Potential
authors:
- Shihao Zou
- Jingjing Li
- Wei Ji
- Jincai Huang
- Kai Wang
- Guo Dan
- Weixin Si
- Yi Pan
date: '2025-12-24'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21284v1
arxiv_id: 2512.21284v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Surgical Scene Segmentation using a Spike-Driven Video Transformer with Real-Time Potential

**Authors:** Shihao Zou, Jingjing Li, Wei Ji, Jincai Huang, Kai Wang...

**Date:** 2025-12-24 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21284v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.21284v1)

## Abstract

Modern surgical systems increasingly rely on intelligent scene understanding to provide timely situational awareness for enhanced intra-operative safety. Within this pipeline, surgical scene segmentation plays a central role in accurately perceiving operative events. Although recent deep learning models, particularly large-scale foundation models, achieve remarkable segmentation accuracy, their substantial computational demands and power consumption hinder real-time deployment in resource-constrained surgical environments. To address this limitation, we explore the emerging SNN as a promising paradigm for highly efficient surgical intelligence. However, their performance is still constrained by the scarcity of labeled surgical data and the inherently sparse nature of surgical video representations. To this end, we propose \textit{SpikeSurgSeg}, the first spike-driven video Transformer framework tailored for surgical scene segmentation with real-time potential on non-GPU platforms. To address the limited availability of surgical annotations, we introduce a surgical-scene masked autoencoding pretraining strategy for SNNs that enables robust spatiotemporal representation learning via layer-wise tube masking. Building on this pretrained backbone, we further adopt a lightweight spike-driven segmentation head that produces temporally consistent predictions while preserving the low-latency characteristics of SNNs. Extensive experiments on EndoVis18 and our in-house SurgBleed dataset demonstrate that SpikeSurgSeg achieves mIoU comparable to SOTA ANN-based models while reducing inference latency by at least $8\times$. Notably, it delivers over $20\times$ acceleration relative to most foundation-model baselines, underscoring its potential for time-critical surgical scene segmentation.

## Notes

