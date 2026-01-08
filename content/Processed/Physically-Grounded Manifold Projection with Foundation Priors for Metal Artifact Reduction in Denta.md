---
title: Physically-Grounded Manifold Projection with Foundation Priors for Metal Artifact
  Reduction in Dental CBCT
authors:
- Zhi Li
- Yaqi Wang
- Bingtao Ma
- Yifan Zhang
- Huiyu Zhou
- Shuai Wang
date: '2025-12-30'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.24260v1
paper_id: 2512.24260v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# Physically-Grounded Manifold Projection with Foundation Priors for Metal Artifact Reduction in Dental CBCT

**Authors:** Zhi Li, Yaqi Wang, Bingtao Ma, Yifan Zhang, Huiyu Zhou...

**Date:** 2025-12-30 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.24260v1)

## Abstract

Metal artifacts in Dental CBCT severely obscure anatomical structures, hindering diagnosis. Current deep learning for Metal Artifact Reduction (MAR) faces limitations: supervised methods suffer from spectral blurring due to "regression-to-the-mean", while unsupervised ones risk structural hallucinations. Denoising Diffusion Models (DDPMs) offer realism but rely on slow, stochastic iterative sampling, unsuitable for clinical use. To resolve this, we propose the Physically-Grounded Manifold Projection (PGMP) framework. First, our Anatomically-Adaptive Physics Simulation (AAPS) pipeline synthesizes high-fidelity training pairs via Monte Carlo spectral modeling and patient-specific digital twins, bridging the synthetic-to-real gap. Second, our DMP-Former adapts the Direct x-Prediction paradigm, reformulating restoration as a deterministic manifold projection to recover clean anatomy in a single forward pass, eliminating stochastic sampling. Finally, a Semantic-Structural Alignment (SSA) module anchors the solution using priors from medical foundation models (MedDINOv3), ensuring clinical plausibility. Experiments on synthetic and multi-center clinical datasets show PGMP outperforms state-of-the-art methods on unseen anatomy, setting new benchmarks in efficiency and diagnostic reliability. Code and data: https://github.com/ricoleehduu/PGMP

## Notes

