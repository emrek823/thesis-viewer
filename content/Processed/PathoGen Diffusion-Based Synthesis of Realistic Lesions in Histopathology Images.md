---
title: 'PathoGen: Diffusion-Based Synthesis of Realistic Lesions in Histopathology
  Images'
authors:
- Mohamad Koohi-Moghadam
- Mohammad-Ali Nikouei Mahani
- Kyongtae Tyler Bae
date: '2026-01-13'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.08127v1
arxiv_id: 2601.08127v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# PathoGen: Diffusion-Based Synthesis of Realistic Lesions in Histopathology Images

**Authors:** Mohamad Koohi-Moghadam, Mohammad-Ali Nikouei Mahani, Kyongtae Tyler Bae

**Date:** 2026-01-13 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.08127v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.08127v1)

## Abstract

The development of robust artificial intelligence models for histopathology diagnosis is severely constrained by the scarcity of expert-annotated lesion data, particularly for rare pathologies and underrepresented disease subtypes. While data augmentation offers a potential solution, existing methods fail to generate sufficiently realistic lesion morphologies that preserve the complex spatial relationships and cellular architectures characteristic of histopathological tissues. Here we present PathoGen, a diffusion-based generative model that enables controllable, high-fidelity inpainting of lesions into benign histopathology images. Unlike conventional augmentation techniques, PathoGen leverages the iterative refinement process of diffusion models to synthesize lesions with natural tissue boundaries, preserved cellular structures, and authentic staining characteristics. We validate PathoGen across four diverse datasets representing distinct diagnostic challenges: kidney, skin, breast, and prostate pathology. Quantitative assessment confirms that PathoGen outperforms state-of-the-art generative baselines, including conditional GAN and Stable Diffusion, in image fidelity and distributional similarity. Crucially, we show that augmenting training sets with PathoGen-synthesized lesions enhances downstream segmentation performance compared to traditional geometric augmentations, particularly in data-scarce regimes. Besides, by simultaneously generating realistic morphology and pixel-level ground truth, PathoGen effectively overcomes the manual annotation bottleneck. This approach offers a scalable pathway for developing generalizable medical AI systems despite limited expert-labeled data.

## Notes

