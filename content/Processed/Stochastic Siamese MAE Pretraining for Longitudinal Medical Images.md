---
title: Stochastic Siamese MAE Pretraining for Longitudinal Medical Images
authors:
- Taha Emre
- Arunava Chakravarty
- Thomas Pinetz
- Dmitrii Lachinov
- Martin J. Menten
- Hendrik Scholl
- Sobha Sivaprasad
- Daniel Rueckert
- Andrew Lotery
- Stefan Sacu
date: '2025-12-29'
categories:
- cs.LG
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.23441v1
arxiv_id: 2512.23441v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-CV
---

# Stochastic Siamese MAE Pretraining for Longitudinal Medical Images

**Authors:** Taha Emre, Arunava Chakravarty, Thomas Pinetz, Dmitrii Lachinov, Martin J. Menten...

**Date:** 2025-12-29 | **Categories:** cs.LG, cs.CV

[PDF](https://arxiv.org/pdf/2512.23441v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23441v1)

## Abstract

Temporally aware image representations are crucial for capturing disease progression in 3D volumes of longitudinal medical datasets. However, recent state-of-the-art self-supervised learning approaches like Masked Autoencoding (MAE), despite their strong representation learning capabilities, lack temporal awareness. In this paper, we propose STAMP (Stochastic Temporal Autoencoder with Masked Pretraining), a Siamese MAE framework that encodes temporal information through a stochastic process by conditioning on the time difference between the 2 input volumes. Unlike deterministic Siamese approaches, which compare scans from different time points but fail to account for the inherent uncertainty in disease evolution, STAMP learns temporal dynamics stochastically by reframing the MAE reconstruction loss as a conditional variational inference objective. We evaluated STAMP on two OCT and one MRI datasets with multiple visits per patient. STAMP pretrained ViT models outperformed both existing temporal MAE methods and foundation models on different late stage Age-Related Macular Degeneration and Alzheimer's Disease progression prediction which require models to learn the underlying non-deterministic temporal dynamics of the diseases.

## Notes

