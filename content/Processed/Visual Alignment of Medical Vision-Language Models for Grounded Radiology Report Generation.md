---
title: Visual Alignment of Medical Vision-Language Models for Grounded Radiology Report
  Generation
authors:
- Sarosij Bose
- Ravi K. Rajendran
- Biplob Debnath
- Konstantinos Karydis
- Amit K. Roy-Chowdhury
- Srimat Chakradhar
date: '2025-12-18'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.16201v1
arxiv_id: 2512.16201v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Visual Alignment of Medical Vision-Language Models for Grounded Radiology Report Generation

**Authors:** Sarosij Bose, Ravi K. Rajendran, Biplob Debnath, Konstantinos Karydis, Amit K. Roy-Chowdhury...

**Date:** 2025-12-18 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.16201v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.16201v1)

## Abstract

Radiology Report Generation (RRG) is a critical step toward automating healthcare workflows, facilitating accurate patient assessments, and reducing the workload of medical professionals. Despite recent progress in Large Medical Vision-Language Models (Med-VLMs), generating radiology reports that are both visually grounded and clinically accurate remains a significant challenge. Existing approaches often rely on large labeled corpora for pre-training, costly task-specific preference data, or retrieval-based methods. However, these strategies do not adequately mitigate hallucinations arising from poor cross-modal alignment between visual and linguistic representations. To address these limitations, we propose VALOR:Visual Alignment of Medical Vision-Language Models for GrOunded Radiology Report Generation. Our method introduces a reinforcement learning-based post-alignment framework utilizing Group-Relative Proximal Optimization (GRPO). The training proceeds in two stages: (1) improving the Med-VLM with textual rewards to encourage clinically precise terminology, and (2) aligning the vision projection module of the textually grounded model with disease findings, thereby guiding attention toward image re gions most relevant to the diagnostic task. Extensive experiments on multiple benchmarks demonstrate that VALOR substantially improves factual accuracy and visual grounding, achieving significant performance gains over state-of-the-art report generation methods.

## Notes

