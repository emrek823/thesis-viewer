---
title: 'PFed-Signal: An ADR Prediction Model based on Federated Learning'
authors:
- Tao Li
- Peilin Li
- Kui Lu
- Yilei Wang
- Junliang Shang
- Guangshun Li
- Huiyu Zhou
date: '2025-12-29'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.23262v1
arxiv_id: 2512.23262v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
---

# PFed-Signal: An ADR Prediction Model based on Federated Learning

**Authors:** Tao Li, Peilin Li, Kui Lu, Yilei Wang, Junliang Shang...

**Date:** 2025-12-29 | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2512.23262v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23262v1)

## Abstract

The adverse drug reactions (ADRs) predicted based on the biased records in FAERS (U.S. Food and Drug Administration Adverse Event Reporting System) may mislead diagnosis online. Generally, such problems are solved by optimizing reporting odds ratio (ROR) or proportional reporting ratio (PRR). However, these methods that rely on statistical methods cannot eliminate the biased data, leading to inaccurate signal prediction. In this paper, we propose PFed-signal, a federated learning-based signal prediction model of ADR, which utilizes the Euclidean distance to eliminate the biased data from FAERS, thereby improving the accuracy of ADR prediction. Specifically, we first propose Pfed-Split, a method to split the original dataset into a split dataset based on ADR. Then we propose ADR-signal, an ADR prediction model, including a biased data identification method based on federated learning and an ADR prediction model based on Transformer. The former identifies the biased data according to the Euclidean distance and generates a clean dataset by deleting the biased data. The latter is an ADR prediction model based on Transformer trained on the clean data set. The results show that the ROR and PRR on the clean dataset are better than those of the traditional methods. Furthermore, the accuracy rate, F1 score, recall rate and AUC of PFed-Signal are 0.887, 0.890, 0.913 and 0.957 respectively, which are higher than the baselines.

## Notes

