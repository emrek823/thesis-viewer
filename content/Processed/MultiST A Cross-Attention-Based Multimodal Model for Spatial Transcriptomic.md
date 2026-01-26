---
title: 'MultiST: A Cross-Attention-Based Multimodal Model for Spatial Transcriptomic'
authors:
- Wei Wang
- Quoc-Toan Ly
- Chong Yu
- Jun Bai
date: '2026-01-19'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.13331v1
arxiv_id: 2601.13331v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
---

# MultiST: A Cross-Attention-Based Multimodal Model for Spatial Transcriptomic

**Authors:** Wei Wang, Quoc-Toan Ly, Chong Yu, Jun Bai

**Date:** 2026-01-19 | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.13331v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.13331v1)

## Abstract

Spatial transcriptomics (ST) enables transcriptome-wide profiling while preserving the spatial context of tissues, offering unprecedented opportunities to study tissue organization and cell-cell interactions in situ. Despite recent advances, existing methods often lack effective integration of histological morphology with molecular profiles, relying on shallow fusion strategies or omitting tissue images altogether, which limits their ability to resolve ambiguous spatial domain boundaries. To address this challenge, we propose MultiST, a unified multimodal framework that jointly models spatial topology, gene expression, and tissue morphology through cross-attention-based fusion. MultiST employs graph-based gene encoders with adversarial alignment to learn robust spatial representations, while integrating color-normalized histological features to capture molecular-morphological dependencies and refine domain boundaries. We evaluated the proposed method on 13 diverse ST datasets spanning two organs, including human brain cortex and breast cancer tissue. MultiST yields spatial domains with clearer and more coherent boundaries than existing methods, leading to more stable pseudotime trajectories and more biologically interpretable cell-cell interaction patterns. The MultiST framework and source code are available at https://github.com/LabJunBMI/MultiST.git.

## Notes

