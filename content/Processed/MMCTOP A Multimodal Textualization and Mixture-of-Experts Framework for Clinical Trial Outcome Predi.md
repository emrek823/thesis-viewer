---
title: 'MMCTOP: A Multimodal Textualization and Mixture-of-Experts Framework for Clinical
  Trial Outcome Prediction'
authors:
- Carolina Aparício
- Qi Shi
- Bo Wen
- Tesfaye Yadete
- Qiwei Han
date: '2025-12-26'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.21897v1
paper_id: 2512.21897v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
---

# MMCTOP: A Multimodal Textualization and Mixture-of-Experts Framework for Clinical Trial Outcome Prediction

**Authors:** Carolina Aparício, Qi Shi, Bo Wen, Tesfaye Yadete, Qiwei Han

**Date:** 2025-12-26 | **Source:** arxiv | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2512.21897v1)

## Abstract

Addressing the challenge of multimodal data fusion in high-dimensional biomedical informatics, we propose MMCTOP, a MultiModal Clinical-Trial Outcome Prediction framework that integrates heterogeneous biomedical signals spanning (i) molecular structure representations, (ii) protocol metadata and long-form eligibility narratives, and (iii) disease ontologies. MMCTOP couples schema-guided textualization and input-fidelity validation with modality-aware representation learning, in which domain-specific encoders generate aligned embeddings that are fused by a transformer backbone augmented with a drug-disease-conditioned sparse Mixture-of-Experts (SMoE). This design explicitly supports specialization across therapeutic and design subspaces while maintaining scalable computation through top-k routing. MMCTOP achieves consistent improvements in precision, F1, and AUC over unimodal and multimodal baselines on benchmark datasets, and ablations show that schema-guided textualization and selective expert routing contribute materially to performance and stability. We additionally apply temperature scaling to obtain calibrated probabilities, ensuring reliable risk estimation for downstream decision support. Overall, MMCTOP advances multimodal trial modeling by combining controlled narrative normalization, context-conditioned expert fusion, and operational safeguards aimed at auditability and reproducibility in biomedical informatics.

## Notes

