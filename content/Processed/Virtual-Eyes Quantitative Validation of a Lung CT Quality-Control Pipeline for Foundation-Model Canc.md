---
title: 'Virtual-Eyes: Quantitative Validation of a Lung CT Quality-Control Pipeline
  for Foundation-Model Cancer Risk Prediction'
authors:
- Md. Enamul Hoq
- Linda Larson-Prior
- Fred Prior
date: '2025-12-30'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.24294v1
paper_id: 2512.24294v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-AI
---

# Virtual-Eyes: Quantitative Validation of a Lung CT Quality-Control Pipeline for Foundation-Model Cancer Risk Prediction

**Authors:** Md. Enamul Hoq, Linda Larson-Prior, Fred Prior

**Date:** 2025-12-30 | **Source:** arxiv | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2512.24294v1)

## Abstract

Robust preprocessing is rarely quantified in deep-learning pipelines for low-dose CT (LDCT) lung cancer screening. We develop and validate Virtual-Eyes, a clinically motivated 16-bit CT quality-control pipeline, and measure its differential impact on generalist foundation models versus specialist models. Virtual-Eyes enforces strict 512x512 in-plane resolution, rejects short or non-diagnostic series, and extracts a contiguous lung block using Hounsfield-unit filtering and bilateral lung-coverage scoring while preserving the native 16-bit grid. Using 765 NLST patients (182 cancer, 583 non-cancer), we compute slice-level embeddings from RAD-DINO and Merlin with frozen encoders and train leakage-free patient-level MLP heads; we also evaluate Sybil and a 2D ResNet-18 baseline under Raw versus Virtual-Eyes inputs without backbone retraining. Virtual-Eyes improves RAD-DINO slice-level AUC from 0.576 to 0.610 and patient-level AUC from 0.646 to 0.683 (mean pooling) and from 0.619 to 0.735 (max pooling), with improved calibration (Brier score 0.188 to 0.112). In contrast, Sybil and ResNet-18 degrade under Virtual-Eyes (Sybil AUC 0.886 to 0.837; ResNet-18 AUC 0.571 to 0.596) with evidence of context dependence and shortcut learning, and Merlin shows limited transferability (AUC approximately 0.507 to 0.567) regardless of preprocessing. These results demonstrate that anatomically targeted QC can stabilize and improve generalist foundation-model workflows but may disrupt specialist models adapted to raw clinical context.

## Notes

