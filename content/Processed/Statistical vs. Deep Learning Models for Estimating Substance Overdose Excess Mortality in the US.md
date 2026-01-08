---
title: Statistical vs. Deep Learning Models for Estimating Substance Overdose Excess
  Mortality in the US
authors:
- Sukanya Krishna
- Marie-Laure Charpignon
- Maimuna Majumder
date: '2025-12-25'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.21456v1
paper_id: 2512.21456v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
---

# Statistical vs. Deep Learning Models for Estimating Substance Overdose Excess Mortality in the US

**Authors:** Sukanya Krishna, Marie-Laure Charpignon, Maimuna Majumder

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2512.21456v1)

## Abstract

Substance overdose mortality in the United States claimed over 80,000 lives in 2023, with the COVID-19 pandemic exacerbating existing trends through healthcare disruptions and behavioral changes. Estimating excess mortality, defined as deaths beyond expected levels based on pre-pandemic patterns, is essential for understanding pandemic impacts and informing intervention strategies. However, traditional statistical methods like SARIMA assume linearity, stationarity, and fixed seasonality, which may not hold under structural disruptions. We present a systematic comparison of SARIMA against three deep learning (DL) architectures (LSTM, Seq2Seq, and Transformer) for counterfactual mortality estimation using national CDC data (2015-2019 for training/validation, 2020-2023 for projection). We contribute empirical evidence that LSTM achieves superior point estimation (17.08% MAPE vs. 23.88% for SARIMA) and better-calibrated uncertainty (68.8% vs. 47.9% prediction interval coverage) when projecting under regime change. We also demonstrate that attention-based models (Seq2Seq, Transformer) underperform due to overfitting to historical means rather than capturing emergent trends. Ourreproducible pipeline incorporates conformal prediction intervals and convergence analysis across 60+ trials per configuration, and we provide an open-source framework deployable with 15 state health departments. Our findings establish that carefully validated DL models can provide more reliable counterfactual estimates than traditional methods for public health planning, while highlighting the need for calibration techniques when deploying neural forecasting in high-stakes domains.

## Notes

