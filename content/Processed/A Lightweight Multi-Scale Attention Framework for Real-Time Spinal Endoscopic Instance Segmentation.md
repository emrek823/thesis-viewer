---
title: A Lightweight Multi-Scale Attention Framework for Real-Time Spinal Endoscopic
  Instance Segmentation
authors:
- Qi Lai
- JunYan Li
- Qiang Cai
- Lei Wang
- Tao Yan
- XiaoKun Liang
date: '2025-12-26'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21984v1
paper_id: 2512.21984v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# A Lightweight Multi-Scale Attention Framework for Real-Time Spinal Endoscopic Instance Segmentation

**Authors:** Qi Lai, JunYan Li, Qiang Cai, Lei Wang, Tao Yan...

**Date:** 2025-12-26 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21984v1)

## Abstract

Real-time instance segmentation for spinal endoscopy is important for identifying and protecting critical anatomy during surgery, but it is difficult because of the narrow field of view, specular highlights, smoke/bleeding, unclear boundaries, and large scale changes. Deployment is also constrained by limited surgical hardware, so the model must balance accuracy and speed and remain stable under small-batch (even batch-1) training. We propose LMSF-A, a lightweight multi-scale attention framework co-designed across backbone, neck, and head. The backbone uses a C2f-Pro module that combines RepViT-style re-parameterized convolution (RVB) with efficient multi-scale attention (EMA), enabling multi-branch training while collapsing into a single fast path for inference. The neck improves cross-scale consistency and boundary detail using Scale-Sequence Feature Fusion (SSFF) and Triple Feature Encoding (TFE), which strengthens high-resolution features. The head adopts a Lightweight Multi-task Shared Head (LMSH) with shared convolutions and GroupNorm to reduce parameters and support batch-1 stability. We also release the clinically reviewed PELD dataset (61 patients, 610 images) with instance masks for adipose tissue, bone, ligamentum flavum, and nerve. Experiments show that LMSF-A is highly competitive (or even better than) in all evaluation metrics and much lighter than most instance segmentation methods requiring only 1.8M parameters and 8.8 GFLOPs, and it generalizes well to a public teeth benchmark. Code and dataset: https://github.com/hhwmortal/PELD-Instance-segmentation.

## Notes

