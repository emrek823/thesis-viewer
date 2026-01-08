---
title: 'Tracing the Heart''s Pathways: ECG Representation Learning from a Cardiac
  Conduction Perspective'
authors:
- Tan Pan
- Yixuan Sun
- Chen Jiang
- Qiong Gao
- Rui Sun
- Xingmeng Zhang
- Zhenqi Yang
- Limei Han
- Yixiu Liang
- Yuan Cheng
date: '2025-12-30'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.24002v1
arxiv_id: 2512.24002v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/cs-AI
---

# Tracing the Heart's Pathways: ECG Representation Learning from a Cardiac Conduction Perspective

**Authors:** Tan Pan, Yixuan Sun, Chen Jiang, Qiong Gao, Rui Sun...

**Date:** 2025-12-30 | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2512.24002v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.24002v1)

## Abstract

The multi-lead electrocardiogram (ECG) stands as a cornerstone of cardiac diagnosis. Recent strides in electrocardiogram self-supervised learning (eSSL) have brightened prospects for enhancing representation learning without relying on high-quality annotations. Yet earlier eSSL methods suffer a key limitation: they focus on consistent patterns across leads and beats, overlooking the inherent differences in heartbeats rooted in cardiac conduction processes, while subtle but significant variations carry unique physiological signatures. Moreover, representation learning for ECG analysis should align with ECG diagnostic guidelines, which progress from individual heartbeats to single leads and ultimately to lead combinations. This sequential logic, however, is often neglected when applying pre-trained models to downstream tasks. To address these gaps, we propose CLEAR-HUG, a two-stage framework designed to capture subtle variations in cardiac conduction across leads while adhering to ECG diagnostic guidelines. In the first stage, we introduce an eSSL model termed Conduction-LEAd Reconstructor (CLEAR), which captures both specific variations and general commonalities across heartbeats. Treating each heartbeat as a distinct entity, CLEAR employs a simple yet effective sparse attention mechanism to reconstruct signals without interference from other heartbeats. In the second stage, we implement a Hierarchical lead-Unified Group head (HUG) for disease diagnosis, mirroring clinical workflow. Experimental results across six tasks show a 6.84% improvement, validating the effectiveness of CLEAR-HUG. This highlights its ability to enhance representations of cardiac conduction and align patterns with expert diagnostic guidelines.

## Notes

