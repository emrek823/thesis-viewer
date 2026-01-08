---
title: Investigating Deep Learning Models for Ejection Fraction Estimation from Echocardiography
  Videos
authors:
- Shravan Saranyan
- Pramit Saha
date: '2025-12-27'
categories:
- cs.CV
- cs.AI
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.22657v1
arxiv_id: 2512.22657v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
- topic/cs-LG
---

# Investigating Deep Learning Models for Ejection Fraction Estimation from Echocardiography Videos

**Authors:** Shravan Saranyan, Pramit Saha

**Date:** 2025-12-27 | **Categories:** cs.CV, cs.AI, cs.LG

[PDF](https://arxiv.org/pdf/2512.22657v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.22657v1)

## Abstract

Left ventricular ejection fraction (LVEF) is a key indicator of cardiac function and plays a central role in the diagnosis and management of cardiovascular disease. Echocardiography, as a readily accessible and non-invasive imaging modality, is widely used in clinical practice to estimate LVEF. However, manual assessment of cardiac function from echocardiograms is time-consuming and subject to considerable inter-observer variability. Deep learning approaches offer a promising alternative, with the potential to achieve performance comparable to that of experienced human experts. In this study, we investigate the effectiveness of several deep learning architectures for LVEF estimation from echocardiography videos, including 3D Inception, two-stream, and CNN-RNN models. We systematically evaluate architectural modifications and fusion strategies to identify configurations that maximize prediction accuracy. Models were trained and evaluated on the EchoNet-Dynamic dataset, comprising 10,030 echocardiogram videos. Our results demonstrate that modified 3D Inception architectures achieve the best overall performance, with a root mean squared error (RMSE) of 6.79%. Across architectures, we observe a tendency toward overfitting, with smaller and simpler models generally exhibiting improved generalization. Model performance was also found to be highly sensitive to hyperparameter choices, particularly convolutional kernel sizes and normalization strategies. While this study focuses on echocardiography-based LVEF estimation, the insights gained regarding architectural design and training strategies may be applicable to a broader range of medical and non-medical video analysis tasks.

## Notes

