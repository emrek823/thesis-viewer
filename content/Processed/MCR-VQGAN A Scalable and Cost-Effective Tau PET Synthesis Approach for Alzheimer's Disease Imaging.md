---
title: 'MCR-VQGAN: A Scalable and Cost-Effective Tau PET Synthesis Approach for Alzheimer''s
  Disease Imaging'
authors:
- Jin Young Kim
- Jeremy Hudson
- Jeongchul Kim
- Qing Lyu
- Christopher T. Whitlow
date: '2025-12-17'
categories:
- eess.IV
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.15947v1
arxiv_id: 2512.15947v1
tags:
- paper
- alphaxiv/hot
- topic/eess-IV
- topic/cs-CV
---

# MCR-VQGAN: A Scalable and Cost-Effective Tau PET Synthesis Approach for Alzheimer's Disease Imaging

**Authors:** Jin Young Kim, Jeremy Hudson, Jeongchul Kim, Qing Lyu, Christopher T. Whitlow

**Date:** 2025-12-17 | **Categories:** eess.IV, cs.CV

[PDF](https://arxiv.org/pdf/2512.15947v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.15947v1)

## Abstract

Tau positron emission tomography (PET) is a critical diagnostic modality for Alzheimer's disease (AD) because it visualizes and quantifies neurofibrillary tangles, a hallmark of AD pathology. However, its widespread clinical adoption is hindered by significant challenges, such as radiation exposure, limited availability, high clinical workload, and substantial financial costs. To overcome these limitations, we propose Multi-scale CBAM Residual Vector Quantized Generative Adversarial Network (MCR-VQGAN) to synthesize high-fidelity tau PET images from structural T1-weighted MRI scans. MCR-VQGAN improves standard VQGAN by integrating three key architectural enhancements: multi-scale convolutions, ResNet blocks, and Convolutional Block Attention Modules (CBAM). Using 222 paired structural T1-weighted MRI and tau PET scans from Alzheimer's Disease Neuroimaging Initiative (ADNI), we trained and compared MCR-VQGAN with cGAN, WGAN-GP, CycleGAN, and VQGAN. Our proposed model achieved superior image synthesis performance across all metrics: MSE of 0.0056 +/- 0.0061, PSNR of 24.39 +/- 4.49 dB, and SSIM of 0.9000 +/- 0.0453. To assess the clinical utility of the synthetic images, we trained and evaluated a CNN-based AD classifier. The classifier achieved comparable accuracy when tested on real (63.64%) and synthetic (65.91%) images. This result indicates that our synthesis process successfully preserves diagnostically relevant features without significant information loss. Our results demonstrate that MCR-VQGAN can offer a reliable and scalable surrogate for conventional tau PET imaging, potentially improving the accessibility and scalability of tau imaging biomarkers for AD research and clinical workflows.

## Notes

