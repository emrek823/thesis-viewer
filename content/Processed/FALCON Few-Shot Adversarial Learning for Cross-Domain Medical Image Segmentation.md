---
title: 'FALCON: Few-Shot Adversarial Learning for Cross-Domain Medical Image Segmentation'
authors:
- Abdur R. Fayjie
- Pankhi Kashyap
- Jutika Borah
- Patrick Vandewalle
date: '2026-01-04'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.01687v1
arxiv_id: 2601.01687v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# FALCON: Few-Shot Adversarial Learning for Cross-Domain Medical Image Segmentation

**Authors:** Abdur R. Fayjie, Pankhi Kashyap, Jutika Borah, Patrick Vandewalle

**Date:** 2026-01-04 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.01687v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01687v1)

## Abstract

Precise delineation of anatomical and pathological structures within 3D medical volumes is crucial for accurate diagnosis, effective surgical planning, and longitudinal disease monitoring. Despite advancements in AI, clinically viable segmentation is often hindered by the scarcity of 3D annotations, patient-specific variability, data privacy concerns, and substantial computational overhead. In this work, we propose FALCON, a cross-domain few-shot segmentation framework that achieves high-precision 3D volume segmentation by processing data as 2D slices. The framework is first meta-trained on natural images to learn-to-learn generalizable segmentation priors, then transferred to the medical domain via adversarial fine-tuning and boundary-aware learning. Task-aware inference, conditioned on support cues, allows FALCON to adapt dynamically to patient-specific anatomical variations across slices. Experiments on four benchmarks demonstrate that FALCON consistently achieves the lowest Hausdorff Distance scores, indicating superior boundary accuracy while maintaining a Dice Similarity Coefficient comparable to the state-of-the-art models. Notably, these results are achieved with significantly less labeled data, no data augmentation, and substantially lower computational overhead.

## Notes

