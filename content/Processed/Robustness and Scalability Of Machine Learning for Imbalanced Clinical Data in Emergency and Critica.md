---
title: Robustness and Scalability Of Machine Learning for Imbalanced Clinical Data
  in Emergency and Critical Care
authors:
- Yusuf Brima
- Marcellin Atemkeng
date: '2025-12-25'
categories:
- cs.LG
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21602v1
paper_id: 2512.21602v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-CV
---

# Robustness and Scalability Of Machine Learning for Imbalanced Clinical Data in Emergency and Critical Care

**Authors:** Yusuf Brima, Marcellin Atemkeng

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.LG, cs.CV

[PDF](https://arxiv.org/pdf/2512.21602v1)

## Abstract

Emergency and intensive care environments require predictive models that are both accurate and computationally efficient, yet clinical data in these settings are often severely imbalanced. Such skewness undermines model reliability, particularly for rare but clinically crucial outcomes, making robustness and scalability essential for real-world usage. In this paper, we systematically evaluate the robustness and scalability of classical machine learning models on imbalanced tabular data from MIMIC-IV-ED and eICU. Class imbalance was quantified using complementary metrics, and we compared the performance of tree-based methods, the state-of-the-art TabNet deep learning model, and a custom lightweight residual network. TabResNet was designed as a computationally efficient alternative to TabNet, replacing its complex attention mechanisms with a streamlined residual architecture to maintain representational capacity for real-time clinical use. All models were optimized via a Bayesian hyperparameter search and assessed on predictive performance, robustness to increasing imbalance, and computational scalability. Our results, on seven clinically vital predictive tasks, show that tree-based methods, particularly XGBoost, consistently achieved the most stable performance across imbalance levels and scaled efficiently with sample size. Deep tabular models degraded more sharply under imbalance and incurred higher computational costs, while TabResNet provided a lighter alternative to TabNet but did not surpass ensemble benchmarks. These findings indicate that in emergency and critical care, robustness to imbalance and computational scalability could outweigh architectural complexity. Tree-based ensemble methods currently offer the most practical and clinically feasible choice, equipping practitioners with a framework for selecting models suited to high-stakes, time-sensitive environments.

## Notes

