---
title: Two Deep Learning Approaches for Automated Segmentation of Left Ventricle in
  Cine Cardiac MRI
authors:
- Wenhui Chu
- Nikolaos V. Tsekos
date: '2026-01-02'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.00794v1
arxiv_id: 2601.00794v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
---

# Two Deep Learning Approaches for Automated Segmentation of Left Ventricle in Cine Cardiac MRI

**Authors:** Wenhui Chu, Nikolaos V. Tsekos

**Date:** 2026-01-02 | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.00794v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.00794v1)

## Abstract

Left ventricle (LV) segmentation is critical for clinical quantification and diagnosis of cardiac images. In this work, we propose two novel deep learning architectures called LNU-Net and IBU-Net for left ventricle segmentation from short-axis cine MRI images. LNU-Net is derived from layer normalization (LN) U-Net architecture, while IBU-Net is derived from the instance-batch normalized (IB) U-Net for medical image segmentation. The architectures of LNU-Net and IBU-Net have a down-sampling path for feature extraction and an up-sampling path for precise localization. We use the original U-Net as the basic segmentation approach and compared it with our proposed architectures. Both LNU-Net and IBU-Net have left ventricle segmentation methods: LNU-Net applies layer normalization in each convolutional block, while IBU-Net incorporates instance and batch normalization together in the first convolutional block and passes its result to the next layer. Our method incorporates affine transformations and elastic deformations for image data processing. Our dataset that contains 805 MRI images regarding the left ventricle from 45 patients is used for evaluation. We experimentally evaluate the results of the proposed approaches outperforming the dice coefficient and the average perpendicular distance than other state-of-the-art approaches.

## Notes

