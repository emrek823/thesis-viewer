---
title: Patlak Parametric Image Estimation from Dynamic PET Using Diffusion Model Prior
authors:
- Ziqian Huang
- Boxiao Yu
- Siqi Li
- Savas Ozdemir
- Sangjin Bae
- Jae Sung Lee
- Guobao Wang
- Kuang Gong
date: '2025-12-22'
categories:
- eess.IV
- cs.CV
- physics.med-ph
pdf_url: https://arxiv.org/pdf/2512.19584v1
arxiv_id: 2512.19584v1
tags:
- paper
- alphaxiv/hot
- topic/eess-IV
- topic/cs-CV
- topic/physics-med-ph
---

# Patlak Parametric Image Estimation from Dynamic PET Using Diffusion Model Prior

**Authors:** Ziqian Huang, Boxiao Yu, Siqi Li, Savas Ozdemir, Sangjin Bae...

**Date:** 2025-12-22 | **Categories:** eess.IV, cs.CV, physics.med-ph

[PDF](https://arxiv.org/pdf/2512.19584v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.19584v1)

## Abstract

Dynamic PET enables the quantitative estimation of physiology-related parameters and is widely utilized in research and increasingly adopted in clinical settings. Parametric imaging in dynamic PET requires kinetic modeling to estimate voxel-wise physiological parameters based on specific kinetic models. However, parametric images estimated through kinetic model fitting often suffer from low image quality due to the inherently ill-posed nature of the fitting process and the limited counts resulting from non-continuous data acquisition across multiple bed positions in whole-body PET. In this work, we proposed a diffusion model-based kinetic modeling framework for parametric image estimation, using the Patlak model as an example. The score function of the diffusion model was pre-trained on static total-body PET images and served as a prior for both Patlak slope and intercept images by leveraging their patch-wise similarity. During inference, the kinetic model was incorporated as a data-consistency constraint to guide the parametric image estimation. The proposed framework was evaluated on total-body dynamic PET datasets with different dose levels, demonstrating the feasibility and promising performance of the proposed framework in improving parametric image quality.

## Notes

