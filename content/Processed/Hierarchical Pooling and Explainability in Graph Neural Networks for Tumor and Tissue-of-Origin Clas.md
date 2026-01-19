---
title: Hierarchical Pooling and Explainability in Graph Neural Networks for Tumor
  and Tissue-of-Origin Classification Using RNA-seq Data
authors:
- Thomas Vaitses Fontanari
- Mariana Recamonde-Mendoza
date: '2026-01-10'
categories:
- cs.LG
- q-bio.GN
pdf_url: https://arxiv.org/pdf/2601.06381v1
arxiv_id: 2601.06381v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/q-bio-GN
---

# Hierarchical Pooling and Explainability in Graph Neural Networks for Tumor and Tissue-of-Origin Classification Using RNA-seq Data

**Authors:** Thomas Vaitses Fontanari, Mariana Recamonde-Mendoza

**Date:** 2026-01-10 | **Categories:** cs.LG, q-bio.GN

[PDF](https://arxiv.org/pdf/2601.06381v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.06381v1)

## Abstract

This study explores the use of graph neural networks (GNNs) with hierarchical pooling and multiple convolution layers for cancer classification based on RNA-seq data. We combine gene expression data from The Cancer Genome Atlas (TCGA) with a precomputed STRING protein-protein interaction network to classify tissue origin and distinguish between normal and tumor samples. The model employs Chebyshev graph convolutions (K=2) and weighted pooling layers, aggregating gene clusters into 'supernodes' across multiple coarsening levels. This approach enables dimensionality reduction while preserving meaningful interactions. Saliency methods were applied to interpret the model by identifying key genes and biological processes relevant to cancer. Our findings reveal that increasing the number of convolution and pooling layers did not enhance classification performance. The highest F1-macro score (0.978) was achieved with a single pooling layer. However, adding more layers resulted in over-smoothing and performance degradation. However, the model proved highly interpretable through gradient methods, identifying known cancer-related genes and highlighting enriched biological processes, and its hierarchical structure can be used to develop new explainable architectures. Overall, while deeper GNN architectures did not improve performance, the hierarchical pooling structure provided valuable insights into tumor biology, making GNNs a promising tool for cancer biomarker discovery and interpretation

## Notes

