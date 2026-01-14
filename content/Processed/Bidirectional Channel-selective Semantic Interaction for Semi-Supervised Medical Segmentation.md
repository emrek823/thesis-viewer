---
title: Bidirectional Channel-selective Semantic Interaction for Semi-Supervised Medical
  Segmentation
authors:
- Kaiwen Huang
- Yizhe Zhang
- Yi Zhou
- Tianyang Xu
- Tao Zhou
date: '2026-01-09'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.05855v1
arxiv_id: 2601.05855v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Bidirectional Channel-selective Semantic Interaction for Semi-Supervised Medical Segmentation

**Authors:** Kaiwen Huang, Yizhe Zhang, Yi Zhou, Tianyang Xu, Tao Zhou

**Date:** 2026-01-09 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.05855v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.05855v1)

## Abstract

Semi-supervised medical image segmentation is an effective method for addressing scenarios with limited labeled data. Existing methods mainly rely on frameworks such as mean teacher and dual-stream consistency learning. These approaches often face issues like error accumulation and model structural complexity, while also neglecting the interaction between labeled and unlabeled data streams. To overcome these challenges, we propose a Bidirectional Channel-selective Semantic Interaction~(BCSI) framework for semi-supervised medical image segmentation. First, we propose a Semantic-Spatial Perturbation~(SSP) mechanism, which disturbs the data using two strong augmentation operations and leverages unsupervised learning with pseudo-labels from weak augmentations. Additionally, we employ consistency on the predictions from the two strong augmentations to further improve model stability and robustness. Second, to reduce noise during the interaction between labeled and unlabeled data, we propose a Channel-selective Router~(CR) component, which dynamically selects the most relevant channels for information exchange. This mechanism ensures that only highly relevant features are activated, minimizing unnecessary interference. Finally, the Bidirectional Channel-wise Interaction~(BCI) strategy is employed to supplement additional semantic information and enhance the representation of important channels. Experimental results on multiple benchmarking 3D medical datasets demonstrate that the proposed method outperforms existing semi-supervised approaches.

## Notes

