---
title: 'DiffKD-DCIS: Predicting Upgrade of Ductal Carcinoma In Situ with Diffusion
  Augmentation and Knowledge Distillation'
authors:
- Tao Li
- Qing Li
- Na Li
- Hui Xie
date: '2026-01-04'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.01507v1
arxiv_id: 2601.01507v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# DiffKD-DCIS: Predicting Upgrade of Ductal Carcinoma In Situ with Diffusion Augmentation and Knowledge Distillation

**Authors:** Tao Li, Qing Li, Na Li, Hui Xie

**Date:** 2026-01-04 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.01507v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01507v1)

## Abstract

Accurately predicting the upgrade of ductal carcinoma in situ (DCIS) to invasive ductal carcinoma (IDC) is crucial for surgical planning. However, traditional deep learning methods face challenges due to limited ultrasound data and poor generalization ability. This study proposes the DiffKD-DCIS framework, integrating conditional diffusion modeling with teacher-student knowledge distillation.   The framework operates in three stages: First, a conditional diffusion model generates high-fidelity ultrasound images using multimodal conditions for data augmentation. Then, a deep teacher network extracts robust features from both original and synthetic data. Finally, a compact student network learns from the teacher via knowledge distillation, balancing generalization and computational efficiency.   Evaluated on a multi-center dataset of 1,435 cases, the synthetic images were of good quality. The student network had fewer parameters and faster inference. On external test sets, it outperformed partial combinations, and its accuracy was comparable to senior radiologists and superior to junior ones, showing significant clinical potential.

## Notes

