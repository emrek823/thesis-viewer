---
title: 'The Pictorial Cortex: Zero-Shot Cross-Subject fMRI-to-Image Reconstruction
  via Compositional Latent Modeling'
authors:
- Jingyang Huo
- Yikai Wang
- Yanwei Fu
- Jianfeng Feng
date: '2026-01-21'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.15071v1
arxiv_id: 2601.15071v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# The Pictorial Cortex: Zero-Shot Cross-Subject fMRI-to-Image Reconstruction via Compositional Latent Modeling

**Authors:** Jingyang Huo, Yikai Wang, Yanwei Fu, Jianfeng Feng

**Date:** 2026-01-21 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.15071v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15071v1)

## Abstract

Decoding visual experiences from human brain activity remains a central challenge at the intersection of neuroscience, neuroimaging, and artificial intelligence. A critical obstacle is the inherent variability of cortical responses: neural activity elicited by the same visual stimulus differs across individuals and trials due to anatomical, functional, cognitive, and experimental factors, making fMRI-to-image reconstruction non-injective. In this paper, we tackle a challenging yet practically meaningful problem: zero-shot cross-subject fMRI-to-image reconstruction, where the visual experience of a previously unseen individual must be reconstructed without subject-specific training. To enable principled evaluation, we present a unified cortical-surface dataset -- UniCortex-fMRI, assembled from multiple visual-stimulus fMRI datasets to provide broad coverage of subjects and stimuli. Our UniCortex-fMRI is particularly processed by standardized data formats to make it possible to explore this possibility in the zero-shot scenario of cross-subject fMRI-to-image reconstruction. To tackle the modeling challenge, we propose PictorialCortex, which models fMRI activity using a compositional latent formulation that structures stimulus-driven representations under subject-, dataset-, and trial-related variability. PictorialCortex operates in a universal cortical latent space and implements this formulation through a latent factorization-composition module, reinforced by paired factorization and re-factorizing consistency regularization. During inference, surrogate latents synthesized under multiple seen-subject conditions are aggregated to guide diffusion-based image synthesis for unseen subjects. Extensive experiments show that PictorialCortex improves zero-shot cross-subject visual reconstruction, highlighting the benefits of compositional latent modeling and multi-dataset training.

## Notes

