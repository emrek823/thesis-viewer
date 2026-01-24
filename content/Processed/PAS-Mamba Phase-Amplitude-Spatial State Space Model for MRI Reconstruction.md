---
title: 'PAS-Mamba: Phase-Amplitude-Spatial State Space Model for MRI Reconstruction'
authors:
- Xiaoyan Kui
- Zijie Fan
- Zexin Ji
- Qinsong Li
- Hao Xu
- Weixin Si
- Haodong Xu
- Beiji Zou
date: '2026-01-20'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.14530v1
arxiv_id: 2601.14530v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# PAS-Mamba: Phase-Amplitude-Spatial State Space Model for MRI Reconstruction

**Authors:** Xiaoyan Kui, Zijie Fan, Zexin Ji, Qinsong Li, Hao Xu...

**Date:** 2026-01-20 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.14530v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.14530v1)

## Abstract

Joint feature modeling in both the spatial and frequency domains has become a mainstream approach in MRI reconstruction. However, existing methods generally treat the frequency domain as a whole, neglecting the differences in the information carried by its internal components. According to Fourier transform theory, phase and amplitude represent different types of information in the image. Our spectrum swapping experiments show that magnitude mainly reflects pixel-level intensity, while phase predominantly governs image structure. To prevent interference between phase and magnitude feature learning caused by unified frequency-domain modeling, we propose the Phase-Amplitude-Spatial State Space Model (PAS-Mamba) for MRI Reconstruction, a framework that decouples phase and magnitude modeling in the frequency domain and combines it with image-domain features for better reconstruction. In the image domain, LocalMamba preserves spatial locality to sharpen fine anatomical details. In frequency domain, we disentangle amplitude and phase into two specialized branches to avoid representational coupling. To respect the concentric geometry of frequency information, we propose Circular Frequency Domain Scanning (CFDS) to serialize features from low to high frequencies. Finally, a Dual-Domain Complementary Fusion Module (DDCFM) adaptively fuses amplitude phase representations and enables bidirectional exchange between frequency and image domains, delivering superior reconstruction. Extensive experiments on the IXI and fastMRI knee datasets show that PAS-Mamba consistently outperforms state of the art reconstruction methods.

## Notes

