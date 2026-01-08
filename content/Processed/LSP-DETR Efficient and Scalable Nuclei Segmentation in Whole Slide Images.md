---
title: 'LSP-DETR: Efficient and Scalable Nuclei Segmentation in Whole Slide Images'
authors:
- Matěj Pekár
- Vít Musil
- Rudolf Nenutil
- Petr Holub
- Tomáš Brázdil
date: '2026-01-06'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.03163v1
arxiv_id: 2601.03163v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# LSP-DETR: Efficient and Scalable Nuclei Segmentation in Whole Slide Images

**Authors:** Matěj Pekár, Vít Musil, Rudolf Nenutil, Petr Holub, Tomáš Brázdil

**Date:** 2026-01-06 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.03163v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.03163v1)

## Abstract

Precise and scalable instance segmentation of cell nuclei is essential for computational pathology, yet gigapixel Whole-Slide Images pose major computational challenges. Existing approaches rely on patch-based processing and costly post-processing for instance separation, sacrificing context and efficiency. We introduce LSP-DETR (Local Star Polygon DEtection TRansformer), a fully end-to-end framework that uses a lightweight transformer with linear complexity to process substantially larger images without additional computational cost. Nuclei are represented as star-convex polygons, and a novel radial distance loss function allows the segmentation of overlapping nuclei to emerge naturally, without requiring explicit overlap annotations or handcrafted post-processing. Evaluations on PanNuke and MoNuSeg show strong generalization across tissues and state-of-the-art efficiency, with LSP-DETR being over five times faster than the next-fastest leading method. Code and models are available at https://github.com/RationAI/lsp-detr.

## Notes

