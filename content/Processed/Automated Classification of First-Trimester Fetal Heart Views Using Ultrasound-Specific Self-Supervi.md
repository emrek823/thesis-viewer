---
title: Automated Classification of First-Trimester Fetal Heart Views Using Ultrasound-Specific
  Self-Supervised Learning
authors:
- Youssef Megahed
- Aylin Erman
- Robin Ducharme
- Mark C. Walker
- Steven Hawken
- Adrian D. C. Chan
date: '2025-12-30'
categories:
- eess.IV
- cs.AI
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.24492v1
paper_id: 2512.24492v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/eess-IV
- topic/cs-AI
- topic/cs-CV
---

# Automated Classification of First-Trimester Fetal Heart Views Using Ultrasound-Specific Self-Supervised Learning

**Authors:** Youssef Megahed, Aylin Erman, Robin Ducharme, Mark C. Walker, Steven Hawken...

**Date:** 2025-12-30 | **Source:** arxiv | **Categories:** eess.IV, cs.AI, cs.CV

[PDF](https://arxiv.org/pdf/2512.24492v1)

## Abstract

Congenital heart disease remains the most common congenital anomaly and a leading cause of neonatal morbidity and mortality. Although first-trimester fetal echocardiography offers an opportunity for earlier detection, automated analysis at this stage is challenging due to small cardiac structures, low signal-to-noise ratio, and substantial inter-operator variability. In this work, we evaluate a self-supervised ultrasound foundation model, USF-MAE, for first-trimester fetal heart view classification. USF-MAE is pretrained using masked autoencoding modelling on more than 370,000 unlabelled ultrasound images spanning over 40 anatomical regions and is subsequently fine-tuned for downstream classification. As a proof of concept, the pretrained Vision Transformer encoder was fine-tuned on an open-source dataset of 6,720 first-trimester fetal echocardiography images to classify five categories: aorta, atrioventricular flows, V sign, X sign, and Other. Model performance was benchmarked against supervised convolutional neural network baselines (ResNet-18 and ResNet-50) and a Vision Transformer (ViT-B/16) model pretrained on natural images (ImageNet-1k). All models were trained and evaluated using identical preprocessing, data splits, and optimization protocols. On an independent test set, USF-MAE achieved the highest performance across all evaluation metrics, with 90.57% accuracy, 91.15% precision, 90.57% recall, and 90.71% F1-score. This represents an improvement of +2.03% in accuracy and +1.98% in F1-score compared with the strongest baseline, ResNet-18. The proposed approach demonstrated robust performance without reliance on aggressive image preprocessing or region-of-interest cropping and showed improved discrimination of non-diagnostic frames.

## Notes

