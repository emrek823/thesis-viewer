---
title: 'A Multimodal Deep Learning Framework for Predicting ICU Deterioration: Integrating
  ECG Waveforms with Clinical Data and Clinician Benchmarking'
authors:
- Juan Miguel López Alcaraz
- Xicoténcatl López Moran
- Erick Dávila Zaragoza
- Claas Händel
- Richard Koebe
- Wilhelm Haverkamp
- Nils Strodthoff
date: '2026-01-10'
categories:
- eess.SP
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.06645v1
arxiv_id: 2601.06645v1
tags:
- paper
- alphaxiv/hot
- topic/eess-SP
- topic/cs-LG
---

# A Multimodal Deep Learning Framework for Predicting ICU Deterioration: Integrating ECG Waveforms with Clinical Data and Clinician Benchmarking

**Authors:** Juan Miguel López Alcaraz, Xicoténcatl López Moran, Erick Dávila Zaragoza, Claas Händel, Richard Koebe...

**Date:** 2026-01-10 | **Categories:** eess.SP, cs.LG

[PDF](https://arxiv.org/pdf/2601.06645v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.06645v1)

## Abstract

Artificial intelligence holds strong potential to support clinical decision making in intensive care units where timely and accurate risk assessment is critical. However, many existing models focus on isolated outcomes or limited data types, while clinicians integrate longitudinal history, real time physiology, and heterogeneous clinical information. To address this gap, we developed MDS ICU, a unified multimodal machine learning framework that fuses routinely collected data including demographics, biometrics, vital signs, laboratory values, ECG waveforms, surgical procedures, and medical device usage to provide continuous predictive support during ICU stays. Using 63001 samples from 27062 patients in MIMIC IV, we trained a deep learning architecture that combines structured state space S4 encoders for ECG waveforms with multilayer perceptron RealMLP encoders for tabular data to jointly predict 33 clinically relevant outcomes spanning mortality, organ dysfunction, medication needs, and acute deterioration. The model achieved strong discrimination with AUROCs of 0.90 for 24 hour mortality, 0.92 for sedative administration, 0.97 for invasive mechanical ventilation, and 0.93 for coagulation dysfunction. Calibration analysis showed close agreement between predicted and observed risks, with consistent gains from ECG waveform integration. Comparisons with clinicians and large language models showed that model predictions alone outperformed both, and that providing model outputs as decision support further improved their performance. These results demonstrate that multimodal AI can deliver clinically meaningful risk stratification across diverse ICU outcomes while augmenting rather than replacing clinical expertise, establishing a scalable foundation for precision critical care decision support.

## Notes

