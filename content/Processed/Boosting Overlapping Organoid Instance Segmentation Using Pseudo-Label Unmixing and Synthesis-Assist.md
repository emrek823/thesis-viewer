---
title: Boosting Overlapping Organoid Instance Segmentation Using Pseudo-Label Unmixing
  and Synthesis-Assisted Learning
authors:
- Gui Huang
- Kangyuan Zheng
- Xuan Cai
- Jiaqi Wang
- Jianjia Zhang
- Kaida Ning
- Wenbo Wei
- Yujuan Zhu
- Jiong Zhang
- Mengting Liu
date: '2026-01-10'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.06642v1
arxiv_id: 2601.06642v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# Boosting Overlapping Organoid Instance Segmentation Using Pseudo-Label Unmixing and Synthesis-Assisted Learning

**Authors:** Gui Huang, Kangyuan Zheng, Xuan Cai, Jiaqi Wang, Jianjia Zhang...

**Date:** 2026-01-10 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.06642v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.06642v1)

## Abstract

Organoids, sophisticated in vitro models of human tissues, are crucial for medical research due to their ability to simulate organ functions and assess drug responses accurately. Accurate organoid instance segmentation is critical for quantifying their dynamic behaviors, yet remains profoundly limited by high-quality annotated datasets and pervasive overlap in microscopy imaging. While semi-supervised learning (SSL) offers a solution to alleviate reliance on scarce labeled data, conventional SSL frameworks suffer from biases induced by noisy pseudo-labels, particularly in overlapping regions. Synthesis-assisted SSL (SA-SSL) has been proposed for mitigating training biases in semi-supervised semantic segmentation. We present the first adaptation of SA-SSL to organoid instance segmentation and reveal that SA-SSL struggles to disentangle intertwined organoids, often misrepresenting overlapping instances as a single entity. To overcome this, we propose Pseudo-Label Unmixing (PLU), which identifies erroneous pseudo-labels for overlapping instances and then regenerates organoid labels through instance decomposition. For image synthesis, we apply a contour-based approach to synthesize organoid instances efficiently, particularly for overlapping cases. Instance-level augmentations (IA) on pseudo-labels before image synthesis further enhances the effect of synthetic data (SD). Rigorous experiments on two organoid datasets demonstrate our method's effectiveness, achieving performance comparable to fully supervised models using only 10% labeled data, and state-of-the-art results. Ablation studies validate the contributions of PLU, contour-based synthesis, and augmentation-aware training. By addressing overlap at both pseudo-label and synthesis levels, our work advances scalable, label-efficient organoid analysis, unlocking new potential for high-throughput applications in precision medicine.

## Notes

