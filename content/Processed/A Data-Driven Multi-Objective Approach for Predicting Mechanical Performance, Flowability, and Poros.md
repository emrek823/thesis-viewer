---
title: A Data-Driven Multi-Objective Approach for Predicting Mechanical Performance,
  Flowability, and Porosity in Ultra-High-Performance Concrete (UHPC)
authors:
- Jagaran Chakma
- Zhiguang Zhou
- Jyoti Chakma
- Cao YuSen
date: '2025-12-25'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.21610v1
paper_id: 2512.21610v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
---

# A Data-Driven Multi-Objective Approach for Predicting Mechanical Performance, Flowability, and Porosity in Ultra-High-Performance Concrete (UHPC)

**Authors:** Jagaran Chakma, Zhiguang Zhou, Jyoti Chakma, Cao YuSen

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2512.21610v1)

## Abstract

This study presents a data-driven, multi-objective approach to predict the mechanical performance, flow ability, and porosity of Ultra-High-Performance Concrete (UHPC). Out of 21 machine learning algorithms tested, five high-performing models are selected, with XGBoost showing the best accuracy after hyperparameter tuning using Random Search and K-Fold Cross-Validation. The framework follows a two-stage process: the initial XGBoost model is built using raw data, and once selected as the final model, the dataset is cleaned by (1) removing multicollinear features, (2) identifying outliers with Isolation Forest, and (3) selecting important features using SHAP analysis. The refined dataset as model 2 is then used to retrain XGBoost, which achieves high prediction accuracy across all outputs. A graphical user interface (GUI) is also developed to support material designers. Overall, the proposed framework significantly improves the prediction accuracy and minimizes the need for extensive experimental testing in UHPC mix design.

## Notes

