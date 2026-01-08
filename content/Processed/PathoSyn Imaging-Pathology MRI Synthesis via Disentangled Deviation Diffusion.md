---
title: 'PathoSyn: Imaging-Pathology MRI Synthesis via Disentangled Deviation Diffusion'
authors:
- Jian Wang
- Sixing Rong
- Jiarui Xing
- Yuling Xu
- Weide Liu
date: '2025-12-29'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.23130v1
arxiv_id: 2512.23130v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# PathoSyn: Imaging-Pathology MRI Synthesis via Disentangled Deviation Diffusion

**Authors:** Jian Wang, Sixing Rong, Jiarui Xing, Yuling Xu, Weide Liu

**Date:** 2025-12-29 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2512.23130v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23130v1)

## Abstract

We present PathoSyn, a unified generative framework for Magnetic Resonance Imaging (MRI) image synthesis that reformulates imaging-pathology as a disentangled additive deviation on a stable anatomical manifold. Current generative models typically operate in the global pixel domain or rely on binary masks, these paradigms often suffer from feature entanglement, leading to corrupted anatomical substrates or structural discontinuities. PathoSyn addresses these limitations by decomposing the synthesis task into deterministic anatomical reconstruction and stochastic deviation modeling. Central to our framework is a Deviation-Space Diffusion Model designed to learn the conditional distribution of pathological residuals, thereby capturing localized intensity variations while preserving global structural integrity by construction. To ensure spatial coherence, the diffusion process is coupled with a seam-aware fusion strategy and an inference-time stabilization module, which collectively suppress boundary artifacts and produce high-fidelity internal lesion heterogeneity. PathoSyn provides a mathematically principled pipeline for generating high-fidelity patient-specific synthetic datasets, facilitating the development of robust diagnostic algorithms in low-data regimes. By allowing interpretable counterfactual disease progression modeling, the framework supports precision intervention planning and provides a controlled environment for benchmarking clinical decision-support systems. Quantitative and qualitative evaluations on tumor imaging benchmarks demonstrate that PathoSyn significantly outperforms holistic diffusion and mask-conditioned baselines in both perceptual realism and anatomical fidelity. The source code of this work will be made publicly available.

## Notes

