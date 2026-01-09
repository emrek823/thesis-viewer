---
title: Lightweight Test-Time Adaptation for EMG-Based Gesture Recognition
authors:
- Nia Touko
- Matthew O A Ellis
- Cristiano Capone
- Alessio Burrello
- Elisa Donati
- Luca Manneschi
date: '2026-01-07'
categories:
- cs.LG
- cs.HC
pdf_url: https://arxiv.org/pdf/2601.04181v1
paper_id: 2601.04181v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-HC
---

# Lightweight Test-Time Adaptation for EMG-Based Gesture Recognition

**Authors:** Nia Touko, Matthew O A Ellis, Cristiano Capone, Alessio Burrello, Elisa Donati...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.LG, cs.HC

[PDF](https://arxiv.org/pdf/2601.04181v1)

## Abstract

Reliable long-term decoding of surface electromyography (EMG) is hindered by signal drift caused by electrode shifts, muscle fatigue, and posture changes. While state-of-the-art models achieve high intra-session accuracy, their performance often degrades sharply. Existing solutions typically demand large datasets or high-compute pipelines that are impractical for energy-efficient wearables. We propose a lightweight framework for Test-Time Adaptation (TTA) using a Temporal Convolutional Network (TCN) backbone. We introduce three deployment-ready strategies: (i) causal adaptive batch normalization for real-time statistical alignment; (ii) a Gaussian Mixture Model (GMM) alignment with experience replay to prevent forgetting; and (iii) meta-learning for rapid, few-shot calibration. Evaluated on the NinaPro DB6 multi-session dataset, our framework significantly bridges the inter-session accuracy gap with minimal overhead. Our results show that experience-replay updates yield superior stability under limited data, while meta-learning achieves competitive performance in one- and two-shot regimes using only a fraction of the data required by current benchmarks. This work establishes a path toward robust, "plug-and-play" myoelectric control for long-term prosthetic use.

## Notes

