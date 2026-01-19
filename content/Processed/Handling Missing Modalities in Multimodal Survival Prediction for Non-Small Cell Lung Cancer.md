---
title: Handling Missing Modalities in Multimodal Survival Prediction for Non-Small
  Cell Lung Cancer
authors:
- Filippo Ruffini
- Camillo Maria Caruso
- Claudia Tacconi
- Lorenzo Nibid
- Francesca Miccolis
- Marta Lovino
- Carlo Greco
- Edy Ippolito
- Michele Fiore
- Alessio Cortellini
date: '2026-01-15'
categories:
- cs.CV
- cs.AI
- cs.MM
pdf_url: https://arxiv.org/pdf/2601.10386v1
arxiv_id: 2601.10386v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
- topic/cs-MM
---

# Handling Missing Modalities in Multimodal Survival Prediction for Non-Small Cell Lung Cancer

**Authors:** Filippo Ruffini, Camillo Maria Caruso, Claudia Tacconi, Lorenzo Nibid, Francesca Miccolis...

**Date:** 2026-01-15 | **Categories:** cs.CV, cs.AI, cs.MM

[PDF](https://arxiv.org/pdf/2601.10386v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10386v1)

## Abstract

Accurate survival prediction in Non-Small Cell Lung Cancer (NSCLC) requires the integration of heterogeneous clinical, radiological, and histopathological information. While Multimodal Deep Learning (MDL) offers a promises for precision prognosis and survival prediction, its clinical applicability is severely limited by small cohort sizes and the presence of missing modalities, often forcing complete-case filtering or aggressive imputation. In this work, we present a missing-aware multimodal survival framework that integrates Computed Tomography (CT), Whole-Slide Histopathology (WSI) Images, and structured clinical variables for overall survival modeling in unresectable stage II-III NSCLC. By leveraging Foundation Models (FM) for modality-specific feature extraction and a missing-aware encoding strategy, the proposed approach enables intermediate multimodal fusion under naturally incomplete modality profiles. The proposed architecture is resilient to missing modalities by design, allowing the model to utilize all available data without being forced to drop patients during training or inference. Experimental results demonstrate that intermediate fusion consistently outperforms unimodal baselines as well as early and late fusion strategies, with the strongest performance achieved by the fusion of WSI and clinical modalities (73.30 C-index). Further analyses of modality importance reveal an adaptive behavior in which less informative modalities, i.e., CT modality, are automatically down-weighted and contribute less to the final survival prediction.

## Notes

