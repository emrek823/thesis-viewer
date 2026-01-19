---
title: 'Neural Architecture for Fast and Reliable Coagulation Assessment in Clinical
  Settings: Leveraging Thromboelastography'
authors:
- Yulu Wang
- Ziqian Zeng
- Jianjun Wu
- Zhifeng Tang
date: '2026-01-12'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.07618v1
arxiv_id: 2601.07618v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
---

# Neural Architecture for Fast and Reliable Coagulation Assessment in Clinical Settings: Leveraging Thromboelastography

**Authors:** Yulu Wang, Ziqian Zeng, Jianjun Wu, Zhifeng Tang

**Date:** 2026-01-12 | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.07618v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.07618v1)

## Abstract

In an ideal medical environment, real-time coagulation monitoring can enable early detection and prompt remediation of risks. However, traditional Thromboelastography (TEG), a widely employed diagnostic modality, can only provide such outputs after nearly 1 hour of measurement. The delay might lead to elevated mortality rates. These issues clearly point out one of the key challenges for medical AI development: Mak-ing reasonable predictions based on very small data sets and accounting for variation between different patient populations, a task where conventional deep learning methods typically perform poorly. We present Physiological State Reconstruc-tion (PSR), a new algorithm specifically designed to take ad-vantage of dynamic changes between individuals and to max-imize useful information produced by small amounts of clini-cal data through mapping to reliable predictions and diagnosis. We develop MDFE to facilitate integration of varied temporal signals using multi-domain learning, and jointly learn high-level temporal interactions together with attentions via HLA; furthermore, the parameterized DAM we designed maintains the stability of the computed vital signs. PSR evaluates with 4 TEG-specialized data sets and establishes remarkable perfor-mance -- predictions of R2 > 0.98 for coagulation traits and error reduction around half compared to the state-of-the-art methods, and halving the inferencing time too. Drift-aware learning suggests a new future, with potential uses well be-yond thrombophilia discovery towards medical AI applica-tions with data scarcity.

## Notes

