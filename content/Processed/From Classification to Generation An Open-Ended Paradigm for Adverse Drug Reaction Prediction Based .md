---
title: 'From Classification to Generation: An Open-Ended Paradigm for Adverse Drug
  Reaction Prediction Based on Graph-Motif Feature Fusion'
authors:
- Yuyan Pi
- Min Jin
- Wentao Xie
- Xinhua Liu
date: '2026-01-04'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.01347v1
arxiv_id: 2601.01347v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
---

# From Classification to Generation: An Open-Ended Paradigm for Adverse Drug Reaction Prediction Based on Graph-Motif Feature Fusion

**Authors:** Yuyan Pi, Min Jin, Wentao Xie, Xinhua Liu

**Date:** 2026-01-04 | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.01347v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01347v1)

## Abstract

Computational biology offers immense potential for reducing the high costs and protracted cycles of new drug development through adverse drug reaction (ADR) prediction. However, current methods remain impeded by drug data scarcity-induced cold-start challenge, closed label sets, and inadequate modeling of label dependencies. Here we propose an open-ended ADR prediction paradigm based on Graph-Motif feature fusion and Multi-Label Generation (GM-MLG). Leveraging molecular structure as an intrinsic and inherent feature, GM-MLG constructs a dual-graph representation architecture spanning the atomic level, the local molecular level (utilizing fine-grained motifs dynamically extracted via the BRICS algorithm combined with additional fragmentation rules), and the global molecular level. Uniquely, GM-MLG pioneers transforming ADR prediction from multi-label classification into Transformer Decoder-based multi-label generation. By treating ADR labels as discrete token sequences, it employs positional embeddings to explicitly capture dependencies and co-occurrence relationships within large-scale label spaces, generating predictions via autoregressive decoding to dynamically expand the prediction space. Experiments demonstrate GM-MLG achieves up to 38% improvement and an average gain of 20%, expanding the prediction space from 200 to over 10,000 types. Furthermore, it elucidates non-linear structure-activity relationships between ADRs and motifs via retrosynthetic motif analysis, providing interpretable and innovative support for systematic risk reduction in drug safety.

## Notes

