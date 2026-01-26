---
title: Likelihood-Separable Diffusion Inference for Multi-Image MRI Super-Resolution
authors:
- Samuel W. Remedios
- Zhangxing Bian
- Shuwen Wei
- Aaron Carass
- Jerry L. Prince
- Blake E. Dewey
date: '2026-01-20'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.14030v1
arxiv_id: 2601.14030v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Likelihood-Separable Diffusion Inference for Multi-Image MRI Super-Resolution

**Authors:** Samuel W. Remedios, Zhangxing Bian, Shuwen Wei, Aaron Carass, Jerry L. Prince...

**Date:** 2026-01-20 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.14030v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.14030v1)

## Abstract

Diffusion models are the current state-of-the-art for solving inverse problems in imaging. Their impressive generative capability allows them to approximate sampling from a prior distribution, which alongside a known likelihood function permits posterior sampling without retraining the model. While recent methods have made strides in advancing the accuracy of posterior sampling, the majority focuses on single-image inverse problems. However, for modalities such as magnetic resonance imaging (MRI), it is common to acquire multiple complementary measurements, each low-resolution along a different axis. In this work, we generalize common diffusion-based inverse single-image problem solvers for multi-image super-resolution (MISR) MRI. We show that the DPS likelihood correction allows an exactly-separable gradient decomposition across independently acquired measurements, enabling MISR without constructing a joint operator, modifying the diffusion model, or increasing network function evaluations. We derive MISR versions of DPS, DMAP, DPPS, and diffusion-based PnP/ADMM, and demonstrate substantial gains over SISR across $4\times/8\times/16\times$ anisotropic degradations. Our results achieve state-of-the-art super-resolution of anisotropic MRI volumes and, critically, enable reconstruction of near-isotropic anatomy from routine 2D multi-slice acquisitions, which are otherwise highly degraded in orthogonal views.

## Notes

