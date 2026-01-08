---
title: 'VAMP-Net: An Interpretable Multi-Path Framework of Genomic Permutation-Invariant
  Set Attention and Quality-Aware 1D-CNN for MTB Drug Resistance'
authors:
- Aicha Boutorh
- Kamar Hibatallah Baghdadi
- Anais Daoud
date: '2025-12-25'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.21786v1
paper_id: 2512.21786v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
---

# VAMP-Net: An Interpretable Multi-Path Framework of Genomic Permutation-Invariant Set Attention and Quality-Aware 1D-CNN for MTB Drug Resistance

**Authors:** Aicha Boutorh, Kamar Hibatallah Baghdadi, Anais Daoud

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2512.21786v1)

## Abstract

Genomic prediction of drug resistance in Mycobacterium tuberculosis remains challenging due to complex epistatic interactions and highly variable sequencing data quality. We present a novel Interpretable Variant-Aware Multi-Path Network (VAMP-Net) that addresses both challenges through complementary machine learning pathways. Path-1 employs a Set Attention Transformer processing permutation-invariant variant sets to capture epistatic interactions between genomic loci. Path-2 utilizes a 1D Convolutional Neural Network that analyzes Variant Call Format quality metrics to learn adaptive confidence scores. A fusion module combines both pathways for final resistance classification. We conduct comparative evaluations of unmasked versus padding-masked Set Attention Blocks, and demonstrate that our multi-path architecture achieves superior performance over baseline CNN and MLP models, with accuracy exceeding 95% and AUC around 97% for Rifampicin (RIF) and Rifabutin (RFB) resistance prediction. The framework provides dual-layer interpretability: Attention Weight Analysis reveals Epistatic networks, and Integrated Gradients (IG) was applied for critical resistance loci (notably rpoB), while gradient-based feature importance from the CNN pathway uncovers drug-specific dependencies on data quality metrics. This architecture advances clinical genomics by delivering state-of-the-art predictive performance alongside auditable interpretability at two distinct levels, genetic causality of mutation sets and technical confidence of sequencing evidence, establishing a new paradigm for robust, clinically-actionable resistance prediction.

## Notes

