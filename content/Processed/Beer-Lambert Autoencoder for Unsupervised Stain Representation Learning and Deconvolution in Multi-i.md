---
title: Beer-Lambert Autoencoder for Unsupervised Stain Representation Learning and
  Deconvolution in Multi-immunohistochemical Brightfield Histology Images
authors:
- Mark Eastwood
- Thomas McKee
- Zedong Hu
- Sabine Tejpar
- Fayyaz Minhas
date: '2026-01-16'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.11336v1
arxiv_id: 2601.11336v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
---

# Beer-Lambert Autoencoder for Unsupervised Stain Representation Learning and Deconvolution in Multi-immunohistochemical Brightfield Histology Images

**Authors:** Mark Eastwood, Thomas McKee, Zedong Hu, Sabine Tejpar, Fayyaz Minhas

**Date:** 2026-01-16 | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.11336v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.11336v1)

## Abstract

Separating the contributions of individual chromogenic stains in RGB histology whole slide images (WSIs) is essential for stain normalization, quantitative assessment of marker expression, and cell-level readouts in immunohistochemistry (IHC). Classical Beer-Lambert (BL) color deconvolution is well-established for two- or three-stain settings, but becomes under-determined and unstable for multiplex IHC (mIHC) with K>3 chromogens. We present a simple, data-driven encoder-decoder architecture that learns cohort-specific stain characteristics for mIHC RGB WSIs and yields crisp, well-separated per-stain concentration maps. The encoder is a compact U-Net that predicts K nonnegative concentration channels; the decoder is a differentiable BL forward model with a learnable stain matrix initialized from typical chromogen hues. Training is unsupervised with a perceptual reconstruction objective augmented by loss terms that discourage unnecessary stain mixing. On a colorectal mIHC panel comprising 5 stains (H, CDX2, MUC2, MUC5, CD8) we show excellent RGB reconstruction, and significantly reduced inter-channel bleed-through compared with matrix-based deconvolution. Code and model are available at https://github.com/measty/StainQuant.git.

## Notes

