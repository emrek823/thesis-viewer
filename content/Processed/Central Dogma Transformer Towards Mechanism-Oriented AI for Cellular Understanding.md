---
title: 'Central Dogma Transformer: Towards Mechanism-Oriented AI for Cellular Understanding'
authors:
- Nobuyuki Ota
date: '2026-01-03'
categories:
- cs.LG
- q-bio.GN
pdf_url: https://arxiv.org/pdf/2601.01089v1
arxiv_id: 2601.01089v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/q-bio-GN
---

# Central Dogma Transformer: Towards Mechanism-Oriented AI for Cellular Understanding

**Authors:** Nobuyuki Ota

**Date:** 2026-01-03 | **Categories:** cs.LG, q-bio.GN

[PDF](https://arxiv.org/pdf/2601.01089v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01089v1)

## Abstract

Understanding cellular mechanisms requires integrating information across DNA, RNA, and protein - the three molecular systems linked by the Central Dogma of molecular biology. While domain-specific foundation models have achieved success for each modality individually, they remain isolated, limiting our ability to model integrated cellular processes. Here we present the Central Dogma Transformer (CDT), an architecture that integrates pre-trained language models for DNA, RNA, and protein following the directional logic of the Central Dogma. CDT employs directional cross-attention mechanisms - DNA-to-RNA attention models transcriptional regulation, while RNA-to-Protein attention models translational relationships - producing a unified Virtual Cell Embedding that integrates all three modalities. We validate CDT v1 - a proof-of-concept implementation using fixed (non-cell-specific) RNA and protein embeddings - on CRISPRi enhancer perturbation data from K562 cells, achieving a Pearson correlation of 0.503, representing 63% of the theoretical ceiling set by cross-experiment variability (r = 0.797). Attention and gradient analyses provide complementary interpretive windows: in detailed case studies, these approaches highlight largely distinct genomic regions, with gradient analysis identifying a CTCF binding site that Hi-C data showed as physically contacting both enhancer and target gene. These results suggest that AI architectures aligned with biological information flow can achieve both predictive accuracy and mechanistic interpretability.

## Notes

