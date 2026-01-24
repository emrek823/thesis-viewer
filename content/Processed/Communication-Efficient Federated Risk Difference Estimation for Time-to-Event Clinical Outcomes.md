---
title: Communication-Efficient Federated Risk Difference Estimation for Time-to-Event
  Clinical Outcomes
authors:
- Ziwen Wang
- Siqi Li
- Marcus Eng Hock Ong
- Nan Liu
date: '2026-01-21'
categories:
- stat.ML
- cs.AI
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.14609v1
arxiv_id: 2601.14609v1
tags:
- paper
- alphaxiv/hot
- topic/stat-ML
- topic/cs-AI
- topic/cs-LG
---

# Communication-Efficient Federated Risk Difference Estimation for Time-to-Event Clinical Outcomes

**Authors:** Ziwen Wang, Siqi Li, Marcus Eng Hock Ong, Nan Liu

**Date:** 2026-01-21 | **Categories:** stat.ML, cs.AI, cs.LG

[PDF](https://arxiv.org/pdf/2601.14609v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.14609v1)

## Abstract

Privacy-preserving model co-training in medical research is often hindered by server-dependent architectures incompatible with protected hospital data systems and by the predominant focus on relative effect measures (hazard ratios) which lack clinical interpretability for absolute survival risk assessment. We propose FedRD, a communication-efficient framework for federated risk difference estimation in distributed survival data. Unlike typical federated learning frameworks (e.g., FedAvg) that require persistent server connections and extensive iterative communication, FedRD is server-independent with minimal communication: one round of summary statistics exchange for the stratified model and three rounds for the unstratified model. Crucially, FedRD provides valid confidence intervals and hypothesis testing--capabilities absent in FedAvg-based frameworks. We provide theoretical guarantees by establishing the asymptotic properties of FedRD and prove that FedRD (unstratified) is asymptotically equivalent to pooled individual-level analysis. Simulation studies and real-world clinical applications across different countries demonstrate that FedRD outperforms local and federated baselines in both estimation accuracy and prediction performance, providing an architecturally feasible solution for absolute risk assessment in privacy-restricted, multi-site clinical studies.

## Notes

