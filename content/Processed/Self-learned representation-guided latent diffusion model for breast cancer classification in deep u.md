---
title: Self-learned representation-guided latent diffusion model for breast cancer
  classification in deep ultraviolet whole surface images
authors:
- Pouya Afshin
- David Helminiak
- Tianling Niu
- Julie M. Jorns
- Tina Yen
- Bing Yu
- Dong Hye Ye
date: '2026-01-16'
categories:
- cs.CV
- cs.AI
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.10917v1
arxiv_id: 2601.10917v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
- topic/cs-LG
---

# Self-learned representation-guided latent diffusion model for breast cancer classification in deep ultraviolet whole surface images

**Authors:** Pouya Afshin, David Helminiak, Tianling Niu, Julie M. Jorns, Tina Yen...

**Date:** 2026-01-16 | **Categories:** cs.CV, cs.AI, cs.LG

[PDF](https://arxiv.org/pdf/2601.10917v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10917v1)

## Abstract

Breast-Conserving Surgery (BCS) requires precise intraoperative margin assessment to preserve healthy tissue. Deep Ultraviolet Fluorescence Scanning Microscopy (DUV-FSM) offers rapid, high-resolution surface imaging for this purpose; however, the scarcity of annotated DUV data hinders the training of robust deep learning models. To address this, we propose an Self-Supervised Learning (SSL)-guided Latent Diffusion Model (LDM) to generate high-quality synthetic training patches. By guiding the LDM with embeddings from a fine-tuned DINO teacher, we inject rich semantic details of cellular structures into the synthetic data. We combine real and synthetic patches to fine-tune a Vision Transformer (ViT), utilizing patch prediction aggregation for WSI-level classification. Experiments using 5-fold cross-validation demonstrate that our method achieves 96.47 % accuracy and reduces the FID score to 45.72, significantly outperforming class-conditioned baselines.

## Notes

