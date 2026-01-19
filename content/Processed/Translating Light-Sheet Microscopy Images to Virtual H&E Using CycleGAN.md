---
title: Translating Light-Sheet Microscopy Images to Virtual H&E Using CycleGAN
authors:
- Yanhua Zhao
date: '2026-01-13'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.08776v1
arxiv_id: 2601.08776v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# Translating Light-Sheet Microscopy Images to Virtual H&E Using CycleGAN

**Authors:** Yanhua Zhao

**Date:** 2026-01-13 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.08776v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.08776v1)

## Abstract

Histopathology analysis relies on Hematoxylin and Eosin (H&E) staining, but fluorescence microscopy offers complementary information. Converting fluorescence images to H&E-like appearance can aid interpretation and integration with standard workflows. We present a Cycle-Consistent Adversarial Network (CycleGAN) approach for unpaired image-to-image translation from multi-channel fluorescence microscopy to pseudo H&E stained histopathology images. The method combines C01 and C02 fluorescence channels into RGB and learns a bidirectional mapping between fluorescence and H&E domains without paired training data. The architecture uses ResNet-based generators with residual blocks and PatchGAN discriminators, trained with adversarial, cycle-consistency, and identity losses. Experiments on fluorescence microscopy datasets show the model generates realistic pseudo H&E images that preserve morphological structures while adopting H&E-like color characteristics. This enables visualization of fluorescence data in a format familiar to pathologists and supports integration with existing H&E-based analysis pipelines.

## Notes

