---
title: 'CPR: Causal Physiological Representation Learning for Robust ECG Analysis
  under Distribution Shifts'
authors:
- Shunbo Jia
- Caizhi Liao
date: '2025-12-31'
categories:
- cs.LG
- eess.SP
pdf_url: https://arxiv.org/pdf/2512.24564v1
arxiv_id: 2512.24564v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/eess-SP
---

# CPR: Causal Physiological Representation Learning for Robust ECG Analysis under Distribution Shifts

**Authors:** Shunbo Jia, Caizhi Liao

**Date:** 2025-12-31 | **Categories:** cs.LG, eess.SP

[PDF](https://arxiv.org/pdf/2512.24564v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.24564v1)

## Abstract

Deep learning models for Electrocardiogram (ECG) diagnosis have achieved remarkable accuracy but exhibit fragility against adversarial perturbations, particularly Smooth Adversarial Perturbations (SAP) that mimic biological morphology. Existing defenses face a critical dilemma: Adversarial Training (AT) provides robustness but incurs a prohibitive computational burden, while certified methods like Randomized Smoothing (RS) introduce significant inference latency, rendering them impractical for real-time clinical monitoring. We posit that this vulnerability stems from the models' reliance on non-robust spurious correlations rather than invariant pathological features. To address this, we propose Causal Physiological Representation Learning (CPR). Unlike standard denoising approaches that operate without semantic constraints, CPR incorporates a Physiological Structural Prior within a causal disentanglement framework. By modeling ECG generation via a Structural Causal Model (SCM), CPR enforces a structural intervention that strictly separates invariant pathological morphology (P-QRS-T complex) from non-causal artifacts. Empirical results on PTB-XL demonstrate that CPR significantly outperforms standard clinical preprocessing methods. Specifically, under SAP attacks, CPR achieves an F1 score of 0.632, surpassing Median Smoothing (0.541 F1) by 9.1%. Crucially, CPR matches the certified robustness of Randomized Smoothing while maintaining single-pass inference efficiency, offering a superior trade-off between robustness, efficiency, and clinical interpretability.

## Notes

