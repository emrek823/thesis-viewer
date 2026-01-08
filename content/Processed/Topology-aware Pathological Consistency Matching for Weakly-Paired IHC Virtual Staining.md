---
title: Topology-aware Pathological Consistency Matching for Weakly-Paired IHC Virtual
  Staining
authors:
- Mingzhou Jiang
- Jiaying Zhou
- Nan Zeng
- Mickael Li
- Qijie Tang
- Chao He
- Huazhu Fu
- Honghui He
date: '2026-01-06'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.02806v1
arxiv_id: 2601.02806v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Topology-aware Pathological Consistency Matching for Weakly-Paired IHC Virtual Staining

**Authors:** Mingzhou Jiang, Jiaying Zhou, Nan Zeng, Mickael Li, Qijie Tang...

**Date:** 2026-01-06 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.02806v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.02806v1)

## Abstract

Immunohistochemical (IHC) staining provides crucial molecular characterization of tissue samples and plays an indispensable role in the clinical examination and diagnosis of cancers. However, compared with the commonly used Hematoxylin and Eosin (H&E) staining, IHC staining involves complex procedures and is both time-consuming and expensive, which limits its widespread clinical use. Virtual staining converts H&E images to IHC images, offering a cost-effective alternative to clinical IHC staining. Nevertheless, using adjacent slides as ground truth often results in weakly-paired data with spatial misalignment and local deformations, hindering effective supervised learning. To address these challenges, we propose a novel topology-aware framework for H&E-to-IHC virtual staining. Specifically, we introduce a Topology-aware Consistency Matching (TACM) mechanism that employs graph contrastive learning and topological perturbations to learn robust matching patterns despite spatial misalignments, ensuring structural consistency. Furthermore, we propose a Topology-constrained Pathological Matching (TCPM) mechanism that aligns pathological positive regions based on node importance to enhance pathological consistency. Extensive experiments on two benchmarks across four staining tasks demonstrate that our method outperforms state-of-the-art approaches, achieving superior generation quality with higher clinical relevance.

## Notes

