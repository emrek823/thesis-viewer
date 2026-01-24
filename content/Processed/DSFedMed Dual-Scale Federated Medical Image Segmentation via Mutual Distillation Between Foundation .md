---
title: 'DSFedMed: Dual-Scale Federated Medical Image Segmentation via Mutual Distillation
  Between Foundation and Lightweight Models'
authors:
- Hanwen Zhang
- Qiaojin Shen
- Yuxi Liu
- Yuesheng Zhu
- Guibo Luo
date: '2026-01-22'
categories:
- cs.CV
- cs.DC
pdf_url: https://arxiv.org/pdf/2601.16073v1
arxiv_id: 2601.16073v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-DC
---

# DSFedMed: Dual-Scale Federated Medical Image Segmentation via Mutual Distillation Between Foundation and Lightweight Models

**Authors:** Hanwen Zhang, Qiaojin Shen, Yuxi Liu, Yuesheng Zhu, Guibo Luo

**Date:** 2026-01-22 | **Categories:** cs.CV, cs.DC

[PDF](https://arxiv.org/pdf/2601.16073v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.16073v1)

## Abstract

Foundation Models (FMs) have demonstrated strong generalization across diverse vision tasks. However, their deployment in federated settings is hindered by high computational demands, substantial communication overhead, and significant inference costs. We propose DSFedMed, a dual-scale federated framework that enables mutual knowledge distillation between a centralized foundation model and lightweight client models for medical image segmentation. To support knowledge distillation, a set of high-quality medical images is generated to replace real public datasets, and a learnability-guided sample selection strategy is proposed to enhance efficiency and effectiveness in dual-scale distillation. This mutual distillation enables the foundation model to transfer general knowledge to lightweight clients, while also incorporating client-specific insights to refine the foundation model. Evaluations on five medical imaging segmentation datasets show that DSFedMed achieves an average 2 percent improvement in Dice score while reducing communication costs and inference time by nearly 90 percent compared to existing federated foundation model baselines. These results demonstrate significant efficiency gains and scalability for resource-limited federated deployments.

## Notes

