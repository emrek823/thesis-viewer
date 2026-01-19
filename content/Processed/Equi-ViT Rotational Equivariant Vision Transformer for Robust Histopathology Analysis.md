---
title: 'Equi-ViT: Rotational Equivariant Vision Transformer for Robust Histopathology
  Analysis'
authors:
- Fuyao Chen
- Yuexi Du
- Elèonore V. Lieffrig
- Nicha C. Dvornek
- John A. Onofrey
date: '2026-01-14'
categories:
- eess.IV
- cs.AI
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.09130v1
arxiv_id: 2601.09130v1
tags:
- paper
- alphaxiv/hot
- topic/eess-IV
- topic/cs-AI
- topic/cs-CV
---

# Equi-ViT: Rotational Equivariant Vision Transformer for Robust Histopathology Analysis

**Authors:** Fuyao Chen, Yuexi Du, Elèonore V. Lieffrig, Nicha C. Dvornek, John A. Onofrey

**Date:** 2026-01-14 | **Categories:** eess.IV, cs.AI, cs.CV

[PDF](https://arxiv.org/pdf/2601.09130v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09130v1)

## Abstract

Vision Transformers (ViTs) have gained rapid adoption in computational pathology for their ability to model long-range dependencies through self-attention, addressing the limitations of convolutional neural networks that excel at local pattern capture but struggle with global contextual reasoning. Recent pathology-specific foundation models have further advanced performance by leveraging large-scale pretraining. However, standard ViTs remain inherently non-equivariant to transformations such as rotations and reflections, which are ubiquitous variations in histopathology imaging. To address this limitation, we propose Equi-ViT, which integrates an equivariant convolution kernel into the patch embedding stage of a ViT architecture, imparting built-in rotational equivariance to learned representations. Equi-ViT achieves superior rotation-consistent patch embeddings and stable classification performance across image orientations. Our results on a public colorectal cancer dataset demonstrate that incorporating equivariant patch embedding enhances data efficiency and robustness, suggesting that equivariant transformers could potentially serve as more generalizable backbones for the application of ViT in histopathology, such as digital pathology foundation models.

## Notes

