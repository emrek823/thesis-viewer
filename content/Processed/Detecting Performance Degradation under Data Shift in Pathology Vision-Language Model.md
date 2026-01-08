---
title: Detecting Performance Degradation under Data Shift in Pathology Vision-Language
  Model
authors:
- Hao Guan
- Li Zhou
date: '2026-01-02'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.00716v1
arxiv_id: 2601.00716v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# Detecting Performance Degradation under Data Shift in Pathology Vision-Language Model

**Authors:** Hao Guan, Li Zhou

**Date:** 2026-01-02 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.00716v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.00716v1)

## Abstract

Vision-Language Models have demonstrated strong potential in medical image analysis and disease diagnosis. However, after deployment, their performance may deteriorate when the input data distribution shifts from that observed during development. Detecting such performance degradation is essential for clinical reliability, yet remains challenging for large pre-trained VLMs operating without labeled data. In this study, we investigate performance degradation detection under data shift in a state-of-the-art pathology VLM. We examine both input-level data shift and output-level prediction behavior to understand their respective roles in monitoring model reliability. To facilitate systematic analysis of input data shift, we develop DomainSAT, a lightweight toolbox with a graphical interface that integrates representative shift detection algorithms and enables intuitive exploration of data shift. Our analysis shows that while input data shift detection is effective at identifying distributional changes and providing early diagnostic signals, it does not always correspond to actual performance degradation. Motivated by this observation, we further study output-based monitoring and introduce a label-free, confidence-based degradation indicator that directly captures changes in model prediction confidence. We find that this indicator exhibits a close relationship with performance degradation and serves as an effective complement to input shift detection. Experiments on a large-scale pathology dataset for tumor classification demonstrate that combining input data shift detection and output confidence-based indicators enables more reliable detection and interpretation of performance degradation in VLMs under data shift. These findings provide a practical and complementary framework for monitoring the reliability of foundation models in digital pathology.

## Notes

