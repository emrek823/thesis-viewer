---
title: 'DermoGPT: Open Weights and Open Data for Morphology-Grounded Dermatological
  Reasoning MLLMs'
authors:
- Jinghan Ru
- Siyuan Yan
- Yuguo Yin
- Yuexian Zou
- Zongyuan Ge
date: '2026-01-05'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.01868v1
arxiv_id: 2601.01868v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# DermoGPT: Open Weights and Open Data for Morphology-Grounded Dermatological Reasoning MLLMs

**Authors:** Jinghan Ru, Siyuan Yan, Yuguo Yin, Yuexian Zou, Zongyuan Ge

**Date:** 2026-01-05 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.01868v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01868v1)

## Abstract

Multimodal Large Language Models (MLLMs) show promise for medical applications, yet progress in dermatology lags due to limited training data, narrow task coverage, and lack of clinically-grounded supervision that mirrors expert diagnostic workflows. We present a comprehensive framework to address these gaps. First, we introduce DermoInstruct, a large-scale morphology-anchored instruction corpus comprising 211,243 images and 772,675 trajectories across five task formats, capturing the complete diagnostic pipeline from morphological observation and clinical reasoning to final diagnosis. Second, we establish DermoBench, a rigorous benchmark evaluating 11 tasks across four clinical axes: Morphology, Diagnosis, Reasoning, and Fairness, including a challenging subset of 3,600 expert-verified open-ended instances and human performance baselines. Third, we develop DermoGPT, a dermatology reasoning MLLM trained via supervised fine-tuning followed by our Morphologically-Anchored Visual-Inference-Consistent (MAVIC) reinforcement learning objective, which enforces consistency between visual observations and diagnostic conclusions. At inference, we deploy Confidence-Consistency Test-time adaptation (CCT) for robust predictions. Experiments show DermoGPT significantly outperforms 16 representative baselines across all axes, achieving state-of-the-art performance while substantially narrowing the human-AI gap. DermoInstruct, DermoBench and DermoGPT will be made publicly available at https://github.com/mendicant04/DermoGPT upon acceptance.

## Notes

