---
title: A Graph-Augmented knowledge Distillation based Dual-Stream Vision Transformer
  with Region-Aware Attention for Gastrointestinal Disease Classification with Explainable
  AI
authors:
- Md Assaduzzaman
- Nushrat Jahan Oyshi
- Eram Mahamud
date: '2025-12-24'
categories:
- eess.IV
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21372v1
arxiv_id: 2512.21372v1
tags:
- paper
- alphaxiv/hot
- topic/eess-IV
- topic/cs-CV
---

# A Graph-Augmented knowledge Distillation based Dual-Stream Vision Transformer with Region-Aware Attention for Gastrointestinal Disease Classification with Explainable AI

**Authors:** Md Assaduzzaman, Nushrat Jahan Oyshi, Eram Mahamud

**Date:** 2025-12-24 | **Categories:** eess.IV, cs.CV

[PDF](https://arxiv.org/pdf/2512.21372v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.21372v1)

## Abstract

The accurate classification of gastrointestinal diseases from endoscopic and histopathological imagery remains a significant challenge in medical diagnostics, mainly due to the vast data volume and subtle variation in inter-class visuals. This study presents a hybrid dual-stream deep learning framework built on teacher-student knowledge distillation, where a high-capacity teacher model integrates the global contextual reasoning of a Swin Transformer with the local fine-grained feature extraction of a Vision Transformer. The student network was implemented as a compact Tiny-ViT structure that inherits the teacher's semantic and morphological knowledge via soft-label distillation, achieving a balance between efficiency and diagnostic accuracy. Two carefully curated Wireless Capsule Endoscopy datasets, encompassing major GI disease classes, were employed to ensure balanced representation and prevent inter-sample bias. The proposed framework achieved remarkable performance with accuracies of 0.9978 and 0.9928 on Dataset 1 and Dataset 2 respectively, and an average AUC of 1.0000, signifying near-perfect discriminative capability. Interpretability analyses using Grad-CAM, LIME, and Score-CAM confirmed that the model's predictions were grounded in clinically significant tissue regions and pathologically relevant morphological cues, validating the framework's transparency and reliability. The Tiny-ViT demonstrated diagnostic performance with reduced computational complexity comparable to its transformer-based teacher while delivering faster inference, making it suitable for resource-constrained clinical environments. Overall, the proposed framework provides a robust, interpretable, and scalable solution for AI-assisted GI disease diagnosis, paving the way toward future intelligent endoscopic screening that is compatible with clinical practicality.

## Notes

