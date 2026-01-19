---
title: 'DT-ICU: Towards Explainable Digital Twins for ICU Patient Monitoring via Multi-Modal
  and Multi-Task Iterative Inference'
authors:
- Wen Guo
date: '2026-01-12'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.07778v1
arxiv_id: 2601.07778v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
---

# DT-ICU: Towards Explainable Digital Twins for ICU Patient Monitoring via Multi-Modal and Multi-Task Iterative Inference

**Authors:** Wen Guo

**Date:** 2026-01-12 | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.07778v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.07778v1)

## Abstract

We introduce DT-ICU, a multimodal digital twin framework for continuous risk estimation in intensive care. DT-ICU integrates variable-length clinical time series with static patient information in a unified multitask architecture, enabling predictions to be updated as new observations accumulate over the ICU stay. We evaluate DT-ICU on the large, publicly available MIMIC-IV dataset, where it consistently outperforms established baseline models under different evaluation settings. Our test-length analysis shows that meaningful discrimination is achieved shortly after admission, while longer observation windows further improve the ranking of high-risk patients in highly imbalanced cohorts. To examine how the model leverages heterogeneous data sources, we perform systematic modality ablations, revealing that the model learnt a reasonable structured reliance on interventions, physiological response observations, and contextual information. These analyses provide interpretable insights into how multimodal signals are combined and how trade-offs between sensitivity and precision emerge. Together, these results demonstrate that DT-ICU delivers accurate, temporally robust, and interpretable predictions, supporting its potential as a practical digital twin framework for continuous patient monitoring in critical care. The source code and trained model weights for DT-ICU are publicly available at https://github.com/GUO-W/DT-ICU-release.

## Notes

