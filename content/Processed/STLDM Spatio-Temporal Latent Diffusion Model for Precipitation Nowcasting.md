---
title: 'STLDM: Spatio-Temporal Latent Diffusion Model for Precipitation Nowcasting'
authors:
- Shi Quan Foo
- Chi-Ho Wong
- Zhihan Gao
- Dit-Yan Yeung
- Ka-Hing Wong
- Wai-Kin Wong
date: '2025-12-24'
categories:
- cs.LG
- cs.AI
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21118v1
paper_id: 2512.21118v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
- topic/cs-CV
---

# STLDM: Spatio-Temporal Latent Diffusion Model for Precipitation Nowcasting

**Authors:** Shi Quan Foo, Chi-Ho Wong, Zhihan Gao, Dit-Yan Yeung, Ka-Hing Wong...

**Date:** 2025-12-24 | **Source:** arxiv | **Categories:** cs.LG, cs.AI, cs.CV

[PDF](https://arxiv.org/pdf/2512.21118v1)

## Abstract

Precipitation nowcasting is a critical spatio-temporal prediction task for society to prevent severe damage owing to extreme weather events. Despite the advances in this field, the complex and stochastic nature of this task still poses challenges to existing approaches. Specifically, deterministic models tend to produce blurry predictions while generative models often struggle with poor accuracy. In this paper, we present a simple yet effective model architecture termed STLDM, a diffusion-based model that learns the latent representation from end to end alongside both the Variational Autoencoder and the conditioning network. STLDM decomposes this task into two stages: a deterministic forecasting stage handled by the conditioning network, and an enhancement stage performed by the latent diffusion model. Experimental results on multiple radar datasets demonstrate that STLDM achieves superior performance compared to the state of the art, while also improving inference efficiency. The code is available in https://github.com/sqfoo/stldm_official.

## Notes

