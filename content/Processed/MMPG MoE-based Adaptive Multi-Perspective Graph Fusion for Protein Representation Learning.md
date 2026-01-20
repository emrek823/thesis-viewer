---
title: 'MMPG: MoE-based Adaptive Multi-Perspective Graph Fusion for Protein Representation
  Learning'
authors:
- Yusong Wang
- Jialun Shen
- Zhihao Wu
- Yicheng Xu
- Shiyin Tan
- Mingkun Xu
- Changshuo Wang
- Zixing Song
- Prayag Tiwari
date: '2026-01-15'
categories:
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.10157v1
arxiv_id: 2601.10157v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
---

# MMPG: MoE-based Adaptive Multi-Perspective Graph Fusion for Protein Representation Learning

**Authors:** Yusong Wang, Jialun Shen, Zhihao Wu, Yicheng Xu, Shiyin Tan...

**Date:** 2026-01-15 | **Categories:** cs.AI

[PDF](https://arxiv.org/pdf/2601.10157v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.10157v1)

## Abstract

Graph Neural Networks (GNNs) have been widely adopted for Protein Representation Learning (PRL), as residue interaction networks can be naturally represented as graphs. Current GNN-based PRL methods typically rely on single-perspective graph construction strategies, which capture partial properties of residue interactions, resulting in incomplete protein representations. To address this limitation, we propose MMPG, a framework that constructs protein graphs from multiple perspectives and adaptively fuses them via Mixture of Experts (MoE) for PRL. MMPG constructs graphs from physical, chemical, and geometric perspectives to characterize different properties of residue interactions. To capture both perspective-specific features and their synergies, we develop an MoE module, which dynamically routes perspectives to specialized experts, where experts learn intrinsic features and cross-perspective interactions. We quantitatively verify that MoE automatically specializes experts in modeling distinct levels of interaction from individual representations, to pairwise inter-perspective synergies, and ultimately to a global consensus across all perspectives. Through integrating this multi-level information, MMPG produces superior protein representations and achieves advanced performance on four different downstream protein tasks.

## Notes

