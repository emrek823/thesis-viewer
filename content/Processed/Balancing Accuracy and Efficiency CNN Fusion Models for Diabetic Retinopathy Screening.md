---
title: 'Balancing Accuracy and Efficiency: CNN Fusion Models for Diabetic Retinopathy
  Screening'
authors:
- Md Rafid Islam
- Rafsan Jany
- Akib Ahmed
- Mohammad Ashrafuzzaman Khan
date: '2025-12-26'
categories:
- cs.CV
- cs.AI
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.21861v1
paper_id: 2512.21861v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-AI
- topic/cs-LG
---

# Balancing Accuracy and Efficiency: CNN Fusion Models for Diabetic Retinopathy Screening

**Authors:** Md Rafid Islam, Rafsan Jany, Akib Ahmed, Mohammad Ashrafuzzaman Khan

**Date:** 2025-12-26 | **Source:** arxiv | **Categories:** cs.CV, cs.AI, cs.LG

[PDF](https://arxiv.org/pdf/2512.21861v1)

## Abstract

Diabetic retinopathy (DR) remains a leading cause of preventable blindness, yet large-scale screening is constrained by limited specialist availability and variable image quality across devices and populations. This work investigates whether feature-level fusion of complementary convolutional neural network (CNN) backbones can deliver accurate and efficient binary DR screening on globally sourced fundus images. Using 11,156 images pooled from five public datasets (APTOS, EyePACS, IDRiD, Messidor, and ODIR), we frame DR detection as a binary classification task and compare three pretrained models (ResNet50, EfficientNet-B0, and DenseNet121) against pairwise and tri-fusion variants. Across five independent runs, fusion consistently outperforms single backbones. The EfficientNet-B0 + DenseNet121 (Eff+Den) fusion model achieves the best overall mean performance (accuracy: 82.89\%) with balanced class-wise F1-scores for normal (83.60\%) and diabetic (82.60\%) cases. While the tri-fusion is competitive, it incurs a substantially higher computational cost. Inference profiling highlights a practical trade-off: EfficientNet-B0 is the fastest (approximately 1.16 ms/image at batch size 1000), whereas the Eff+Den fusion offers a favorable accuracy--latency balance. These findings indicate that lightweight feature fusion can enhance generalization across heterogeneous datasets, supporting scalable binary DR screening workflows where both accuracy and throughput are critical.

## Notes

