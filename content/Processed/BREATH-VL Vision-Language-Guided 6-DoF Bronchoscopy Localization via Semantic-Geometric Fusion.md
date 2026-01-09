---
title: 'BREATH-VL: Vision-Language-Guided 6-DoF Bronchoscopy Localization via Semantic-Geometric
  Fusion'
authors:
- Qingyao Tian
- Bingyu Yang
- Huai Liao
- Xinyan Huang
- Junyong Li
- Dong Yi
- Hongbin Liu
date: '2026-01-07'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.03713v1
paper_id: 2601.03713v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# BREATH-VL: Vision-Language-Guided 6-DoF Bronchoscopy Localization via Semantic-Geometric Fusion

**Authors:** Qingyao Tian, Bingyu Yang, Huai Liao, Xinyan Huang, Junyong Li...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.03713v1)

## Abstract

Vision-language models (VLMs) have recently shown remarkable performance in navigation and localization tasks by leveraging large-scale pretraining for semantic understanding. However, applying VLMs to 6-DoF endoscopic camera localization presents several challenges: 1) the lack of large-scale, high-quality, densely annotated, and localization-oriented vision-language datasets in real-world medical settings; 2) limited capability for fine-grained pose regression; and 3) high computational latency when extracting temporal features from past frames. To address these issues, we first construct BREATH dataset, the largest in-vivo endoscopic localization dataset to date, collected in the complex human airway. Building on this dataset, we propose BREATH-VL, a hybrid framework that integrates semantic cues from VLMs with geometric information from vision-based registration methods for accurate 6-DoF pose estimation. Our motivation lies in the complementary strengths of both approaches: VLMs offer generalizable semantic understanding, while registration methods provide precise geometric alignment. To further enhance the VLM's ability to capture temporal context, we introduce a lightweight context-learning mechanism that encodes motion history as linguistic prompts, enabling efficient temporal reasoning without expensive video-level computation. Extensive experiments demonstrate that the vision-language module delivers robust semantic localization in challenging surgical scenes. Building on this, our BREATH-VL outperforms state-of-the-art vision-only localization methods in both accuracy and generalization, reducing translational error by 25.5% compared with the best-performing baseline, while achieving competitive computational latency.

## Notes

