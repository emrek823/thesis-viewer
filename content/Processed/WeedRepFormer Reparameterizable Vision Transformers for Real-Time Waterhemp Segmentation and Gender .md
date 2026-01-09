---
title: 'WeedRepFormer: Reparameterizable Vision Transformers for Real-Time Waterhemp
  Segmentation and Gender Classification'
authors:
- Toqi Tahamid Sarker
- Taminul Islam
- Khaled R. Ahmed
- Cristiana Bernardi Rankrape
- Kaitlin E. Creager
- Karla Gage
date: '2026-01-06'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.03431v1
paper_id: 2601.03431v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# WeedRepFormer: Reparameterizable Vision Transformers for Real-Time Waterhemp Segmentation and Gender Classification

**Authors:** Toqi Tahamid Sarker, Taminul Islam, Khaled R. Ahmed, Cristiana Bernardi Rankrape, Kaitlin E. Creager...

**Date:** 2026-01-06 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.03431v1)

## Abstract

We present WeedRepFormer, a lightweight multi-task Vision Transformer designed for simultaneous waterhemp segmentation and gender classification. Existing agricultural models often struggle to balance the fine-grained feature extraction required for biological attribute classification with the efficiency needed for real-time deployment. To address this, WeedRepFormer systematically integrates structural reparameterization across the entire architecture - comprising a Vision Transformer backbone, a Lite R-ASPP decoder, and a novel reparameterizable classification head - to decouple training-time capacity from inference-time latency. We also introduce a comprehensive waterhemp dataset containing 10,264 annotated frames from 23 plants. On this benchmark, WeedRepFormer achieves 92.18% mIoU for segmentation and 81.91% accuracy for gender classification using only 3.59M parameters and 3.80 GFLOPs. At 108.95 FPS, our model outperforms the state-of-the-art iFormer-T by 4.40% in classification accuracy while maintaining competitive segmentation performance and significantly reducing parameter count by 1.9x.

## Notes

