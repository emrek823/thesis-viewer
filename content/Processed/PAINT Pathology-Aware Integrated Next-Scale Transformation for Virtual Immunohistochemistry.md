---
title: 'PAINT: Pathology-Aware Integrated Next-Scale Transformation for Virtual Immunohistochemistry'
authors:
- Rongze Ma
- Mengkang Lu
- Zhenyu Xiang
- Yongsheng Pan
- Yicheng Wu
- Qingjie Zeng
- Yong Xia
date: '2026-01-22'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.16024v1
arxiv_id: 2601.16024v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# PAINT: Pathology-Aware Integrated Next-Scale Transformation for Virtual Immunohistochemistry

**Authors:** Rongze Ma, Mengkang Lu, Zhenyu Xiang, Yongsheng Pan, Yicheng Wu...

**Date:** 2026-01-22 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.16024v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.16024v1)

## Abstract

Virtual immunohistochemistry (IHC) aims to computationally synthesize molecular staining patterns from routine Hematoxylin and Eosin (H\&E) images, offering a cost-effective and tissue-efficient alternative to traditional physical staining. However, this task is particularly challenging: H\&E morphology provides ambiguous cues about protein expression, and similar tissue structures may correspond to distinct molecular states. Most existing methods focus on direct appearance synthesis to implicitly achieve cross-modal generation, often resulting in semantic inconsistencies due to insufficient structural priors. In this paper, we propose Pathology-Aware Integrated Next-Scale Transformation (PAINT), a visual autoregressive framework that reformulates the synthesis process as a structure-first conditional generation task. Unlike direct image translation, PAINT enforces a causal order by resolving molecular details conditioned on a global structural layout. Central to this approach is the introduction of a Spatial Structural Start Map (3S-Map), which grounds the autoregressive initialization in observed morphology, ensuring deterministic, spatially aligned synthesis. Experiments on the IHC4BC and MIST datasets demonstrate that PAINT outperforms state-of-the-art methods in structural fidelity and clinical downstream tasks, validating the potential of structure-guided autoregressive modeling.

## Notes

