---
title: 'CellMamba: Adaptive Mamba for Accurate and Efficient Cell Detection'
authors:
- Ruochen Liu
- Yi Tian
- Jiahao Wang
- Hongbin Liu
- Xianxu Hou
- Jingxin Liu
date: '2025-12-25'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.21803v1
paper_id: 2512.21803v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-AI
---

# CellMamba: Adaptive Mamba for Accurate and Efficient Cell Detection

**Authors:** Ruochen Liu, Yi Tian, Jiahao Wang, Hongbin Liu, Xianxu Hou...

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2512.21803v1)

## Abstract

Cell detection in pathological images presents unique challenges due to densely packed objects, subtle inter-class differences, and severe background clutter. In this paper, we propose CellMamba, a lightweight and accurate one-stage detector tailored for fine-grained biomedical instance detection. Built upon a VSSD backbone, CellMamba integrates CellMamba Blocks, which couple either NC-Mamba or Multi-Head Self-Attention (MSA) with a novel Triple-Mapping Adaptive Coupling (TMAC) module. TMAC enhances spatial discriminability by splitting channels into two parallel branches, equipped with dual idiosyncratic and one consensus attention map, adaptively fused to preserve local sensitivity and global consistency. Furthermore, we design an Adaptive Mamba Head that fuses multi-scale features via learnable weights for robust detection under varying object sizes. Extensive experiments on two public datasets-CoNSeP and CytoDArk0-demonstrate that CellMamba outperforms both CNN-based, Transformer-based, and Mamba-based baselines in accuracy, while significantly reducing model size and inference latency. Our results validate CellMamba as an efficient and effective solution for high-resolution cell detection.

## Notes

