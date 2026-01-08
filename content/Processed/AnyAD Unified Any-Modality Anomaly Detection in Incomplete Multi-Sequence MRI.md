---
title: 'AnyAD: Unified Any-Modality Anomaly Detection in Incomplete Multi-Sequence
  MRI'
authors:
- Changwei Wu
- Yifei Chen
- Yuxin Du
- Mingxuan Liu
- Jinying Zong
- Beining Wu
- Jie Dong
- Feiwei Qin
- Yunkang Cao
- Qiyuan Tian
date: '2025-12-24'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21264v1
arxiv_id: 2512.21264v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# AnyAD: Unified Any-Modality Anomaly Detection in Incomplete Multi-Sequence MRI

**Authors:** Changwei Wu, Yifei Chen, Yuxin Du, Mingxuan Liu, Jinying Zong...

**Date:** 2025-12-24 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21264v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.21264v1)

## Abstract

Reliable anomaly detection in brain MRI remains challenging due to the scarcity of annotated abnormal cases and the frequent absence of key imaging modalities in real clinical workflows. Existing single-class or multi-class anomaly detection (AD) models typically rely on fixed modality configurations, require repetitive training, or fail to generalize to unseen modality combinations, limiting their clinical scalability. In this work, we present a unified Any-Modality AD framework that performs robust anomaly detection and localization under arbitrary MRI modality availability. The framework integrates a dual-pathway DINOv2 encoder with a feature distribution alignment mechanism that statistically aligns incomplete-modality features with full-modality representations, enabling stable inference even with severe modality dropout. To further enhance semantic consistency, we introduce an Intrinsic Normal Prototypes (INPs) extractor and an INP-guided decoder that reconstruct only normal anatomical patterns while naturally amplifying abnormal deviations. Through randomized modality masking and indirect feature completion during training, the model learns to adapt to all modality configurations without re-training. Extensive experiments on BraTS2018, MU-Glioma-Post, and Pretreat-MetsToBrain-Masks demonstrate that our approach consistently surpasses state-of-the-art industrial and medical AD baselines across 7 modality combinations, achieving superior generalization. This study establishes a scalable paradigm for multimodal medical AD under real-world, imperfect modality conditions. Our source code is available at https://github.com/wuchangw/AnyAD.

## Notes

