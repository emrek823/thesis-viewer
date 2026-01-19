---
title: Adaptive Conditional Contrast-Agnostic Deformable Image Registration with Uncertainty
  Estimation
authors:
- Yinsong Wang
- Xinzhe Luo
- Siyi Du
- Chen Qin
date: '2026-01-09'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.05981v1
arxiv_id: 2601.05981v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Adaptive Conditional Contrast-Agnostic Deformable Image Registration with Uncertainty Estimation

**Authors:** Yinsong Wang, Xinzhe Luo, Siyi Du, Chen Qin

**Date:** 2026-01-09 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.05981v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.05981v1)

## Abstract

Deformable multi-contrast image registration is a challenging yet crucial task due to the complex, non-linear intensity relationships across different imaging contrasts. Conventional registration methods typically rely on iterative optimization of the deformation field, which is time-consuming. Although recent learning-based approaches enable fast and accurate registration during inference, their generalizability remains limited to the specific contrasts observed during training. In this work, we propose an adaptive conditional contrast-agnostic deformable image registration framework (AC-CAR) based on a random convolution-based contrast augmentation scheme. AC-CAR can generalize to arbitrary imaging contrasts without observing them during training. To encourage contrast-invariant feature learning, we propose an adaptive conditional feature modulator (ACFM) that adaptively modulates the features and the contrast-invariant latent regularization to enforce the consistency of the learned feature across different imaging contrasts. Additionally, we enable our framework to provide contrast-agnostic registration uncertainty by integrating a variance network that leverages the contrast-agnostic registration encoder to improve the trustworthiness and reliability of AC-CAR. Experimental results demonstrate that AC-CAR outperforms baseline methods in registration accuracy and exhibits superior generalization to unseen imaging contrasts. Code is available at https://github.com/Yinsong0510/AC-CAR.

## Notes

