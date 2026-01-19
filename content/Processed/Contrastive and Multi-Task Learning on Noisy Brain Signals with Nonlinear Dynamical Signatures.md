---
title: Contrastive and Multi-Task Learning on Noisy Brain Signals with Nonlinear Dynamical
  Signatures
authors:
- Sucheta Ghosh
- Zahra Monfared
- Felix Dietrich
date: '2026-01-13'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.08549v1
arxiv_id: 2601.08549v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
---

# Contrastive and Multi-Task Learning on Noisy Brain Signals with Nonlinear Dynamical Signatures

**Authors:** Sucheta Ghosh, Zahra Monfared, Felix Dietrich

**Date:** 2026-01-13 | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.08549v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.08549v1)

## Abstract

We introduce a two-stage multitask learning framework for analyzing Electroencephalography (EEG) signals that integrates denoising, dynamical modeling, and representation learning. In the first stage, a denoising autoencoder is trained to suppress artifacts and stabilize temporal dynamics, providing robust signal representations. In the second stage, a multitask architecture processes these denoised signals to achieve three objectives: motor imagery classification, chaotic versus non-chaotic regime discrimination using Lyapunov exponent-based labels, and self-supervised contrastive representation learning with NT-Xent loss. A convolutional backbone combined with a Transformer encoder captures spatial-temporal structure, while the dynamical task encourages sensitivity to nonlinear brain dynamics. This staged design mitigates interference between reconstruction and discriminative goals, improves stability across datasets, and supports reproducible training by clearly separating noise reduction from higher-level feature learning. Empirical studies show that our framework not only enhances robustness and generalization but also surpasses strong baselines and recent state-of-the-art methods in EEG decoding, highlighting the effectiveness of combining denoising, dynamical features, and self-supervised learning.

## Notes

