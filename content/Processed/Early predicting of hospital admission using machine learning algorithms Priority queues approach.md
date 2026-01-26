---
title: 'Early predicting of hospital admission using machine learning algorithms:
  Priority queues approach'
authors:
- Jakub Antczak
- James Montgomery
- Małgorzata O'Reilly
- Zbigniew Palmowski
- Richard Turner
date: '2026-01-21'
categories:
- cs.LG
- math.OC
pdf_url: https://arxiv.org/pdf/2601.15481v1
arxiv_id: 2601.15481v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/math-OC
---

# Early predicting of hospital admission using machine learning algorithms: Priority queues approach

**Authors:** Jakub Antczak, James Montgomery, Małgorzata O'Reilly, Zbigniew Palmowski, Richard Turner

**Date:** 2026-01-21 | **Categories:** cs.LG, math.OC

[PDF](https://arxiv.org/pdf/2601.15481v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15481v1)

## Abstract

Emergency Department overcrowding is a critical issue that compromises patient safety and operational efficiency, necessitating accurate demand forecasting for effective resource allocation. This study evaluates and compares three distinct predictive models: Seasonal AutoRegressive Integrated Moving Average with eXogenous regressors (SARIMAX), EXtreme Gradient Boosting (XGBoost) and Long Short-Term Memory (LSTM) networks for forecasting daily ED arrivals over a seven-day horizon. Utilizing data from an Australian tertiary referral hospital spanning January 2017 to December 2021, this research distinguishes itself by decomposing demand into eight specific ward categories and stratifying patients by clinical complexity. To address data distortions caused by the COVID-19 pandemic, the study employs the Prophet model to generate synthetic counterfactual values for the anomalous period. Experimental results demonstrate that all three proposed models consistently outperform a seasonal naive baseline. XGBoost demonstrated the highest accuracy for predicting total daily admissions with a Mean Absolute Error of 6.63, while the statistical SARIMAX model proved marginally superior for forecasting major complexity cases with an MAE of 3.77. The study concludes that while these techniques successfully reproduce regular day-to-day patterns, they share a common limitation in underestimating sudden, infrequent surges in patient volume.

## Notes

