---
title: 'engGNN: A Dual-Graph Neural Network for Omics-Based Disease Classification
  and Feature Selection'
authors:
- Tiantian Yang
- Yuxuan Wang
- Zhenwei Zhou
- Ching-Ti Liu
date: '2026-01-20'
categories:
- cs.LG
- q-bio.GN
- stat.ML
pdf_url: https://arxiv.org/pdf/2601.14536v1
arxiv_id: 2601.14536v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/q-bio-GN
- topic/stat-ML
---

# engGNN: A Dual-Graph Neural Network for Omics-Based Disease Classification and Feature Selection

**Authors:** Tiantian Yang, Yuxuan Wang, Zhenwei Zhou, Ching-Ti Liu

**Date:** 2026-01-20 | **Categories:** cs.LG, q-bio.GN, stat.ML

[PDF](https://arxiv.org/pdf/2601.14536v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.14536v1)

## Abstract

Omics data, such as transcriptomics, proteomics, and metabolomics, provide critical insights into disease mechanisms and clinical outcomes. However, their high dimensionality, small sample sizes, and intricate biological networks pose major challenges for reliable prediction and meaningful interpretation. Graph Neural Networks (GNNs) offer a promising way to integrate prior knowledge by encoding feature relationships as graphs. Yet, existing methods typically rely solely on either an externally curated feature graph or a data-driven generated one, which limits their ability to capture complementary information. To address this, we propose the external and generated Graph Neural Network (engGNN), a dual-graph framework that jointly leverages both external known biological networks and data-driven generated graphs. Specifically, engGNN constructs a biologically informed undirected feature graph from established network databases and complements it with a directed feature graph derived from tree-ensemble models. This dual-graph design produces more comprehensive embeddings, thereby improving predictive performance and interpretability. Through extensive simulations and real-world applications to gene expression data, engGNN consistently outperforms state-of-the-art baselines. Beyond classification, engGNN provides interpretable feature importance scores that facilitate biologically meaningful discoveries, such as pathway enrichment analysis. Taken together, these results highlight engGNN as a robust, flexible, and interpretable framework for disease classification and biomarker discovery in high-dimensional omics contexts.

## Notes

