---
title: 'DiSPA: Differential Substructure-Pathway Attention for Drug Response Prediction'
authors:
- Yewon Han
- Sunghyun Kim
- Eunyi Jeong
- Sungkyung Lee
- Seokwoo Yun
- Sangsoo Lim
date: '2026-01-20'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.14346v1
arxiv_id: 2601.14346v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
---

# DiSPA: Differential Substructure-Pathway Attention for Drug Response Prediction

**Authors:** Yewon Han, Sunghyun Kim, Eunyi Jeong, Sungkyung Lee, Seokwoo Yun...

**Date:** 2026-01-20 | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.14346v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.14346v1)

## Abstract

Accurate prediction of drug response in precision medicine requires models that capture how specific chemical substructures interact with cellular pathway states. However, most existing deep learning approaches treat chemical and transcriptomic modalities independently or combine them only at late stages, limiting their ability to model fine-grained, context-dependent mechanisms of drug action. In addition, standard attention mechanisms are often sensitive to noise and sparsity in high-dimensional biological networks, hindering both generalization and interpretability. We present DiSPA, a representation learning framework that explicitly disentangles structure-driven and context-driven mechanisms of drug response through bidirectional conditioning between chemical substructures and pathway-level gene expression. DiSPA introduces a differential cross-attention module that suppresses spurious pathway-substructure associations while amplifying contextually relevant interactions. Across multiple evaluation settings on the GDSC benchmark, DiSPA achieves state-of-the-art performance, with particularly strong improvements in the disjoint-set setting, which assesses generalization to unseen drug-cell combinations. Beyond predictive accuracy, DiSPA yields mechanistically informative representations: learned attention patterns recover known pharmacophores, distinguish structure-driven from context-dependent compounds, and exhibit coherent organization across biological pathways. Furthermore, we demonstrate that DiSPA trained solely on bulk RNA-seq data enables zero-shot transfer to spatial transcriptomics, revealing region-specific drug sensitivity patterns without retraining. Together, these results establish DiSPA as a robust and interpretable framework for integrative pharmacogenomic modeling, enabling principled analysis of drug response mechanisms beyond post hoc interpretation.

## Notes

