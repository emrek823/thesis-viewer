---
title: 'KAN-AFT: An Interpretable Nonlinear Survival Model Integrating Kolmogorov-Arnold
  Networks with Accelerated Failure Time Analysis'
authors:
- Mebin Jose
- Jisha Francis
- Sudheesh Kumar Kattumannil
date: '2025-12-23'
categories:
- stat.ML
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.20305v1
arxiv_id: 2512.20305v1
tags:
- paper
- alphaxiv/hot
- topic/stat-ML
- topic/cs-LG
---

# KAN-AFT: An Interpretable Nonlinear Survival Model Integrating Kolmogorov-Arnold Networks with Accelerated Failure Time Analysis

**Authors:** Mebin Jose, Jisha Francis, Sudheesh Kumar Kattumannil

**Date:** 2025-12-23 | **Categories:** stat.ML, cs.LG

[PDF](https://arxiv.org/pdf/2512.20305v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.20305v1)

## Abstract

Survival analysis relies fundamentally on the semi-parametric Cox Proportional Hazards (CoxPH) model and the parametric Accelerated Failure Time (AFT) model. CoxPH assumes constant hazard ratios, often failing to capture real-world dynamics, while traditional AFT models are limited by rigid distributional assumptions. Although deep learning models like DeepAFT address these constraints by improving predictive accuracy and handling censoring, they inherit the significant challenge of black-box interpretability. The recent introduction of CoxKAN demonstrated the successful integration of Kolmogorov-Arnold Networks (KANs), a novel architecture that yields highly accurate and interpretable symbolic representations, within the CoxPH framework. Motivated by the interpretability gains of CoxKAN, we introduce KAN-AFT (Kolmogorov Arnold Network-based AFT), the first framework to apply KANs to the AFT model. KAN-AFT effectively models complex nonlinear relationships within the AFT framework. Our primary contributions include: (i) a principled AFT-KAN formulation, (ii) robust optimization strategies for right-censored observations (e.g., Buckley-James and IPCW), and (iii) an interpretability pipeline that converts the learned spline functions into closed-form symbolic equations for survival time. Empirical results on multiple datasets confirm that KAN-AFT achieves performance comparable to or better than DeepAFT, while uniquely providing transparent, symbolic models of the survival process.

## Notes

