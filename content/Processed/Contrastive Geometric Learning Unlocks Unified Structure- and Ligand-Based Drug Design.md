---
title: Contrastive Geometric Learning Unlocks Unified Structure- and Ligand-Based
  Drug Design
authors:
- Lisa Schneckenreiter
- Sohvi Luukkonen
- Lukas Friedrich
- Daniel Kuhn
- Günter Klambauer
date: '2026-01-14'
categories:
- cs.LG
- stat.ML
pdf_url: https://arxiv.org/pdf/2601.09693v1
arxiv_id: 2601.09693v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/stat-ML
---

# Contrastive Geometric Learning Unlocks Unified Structure- and Ligand-Based Drug Design

**Authors:** Lisa Schneckenreiter, Sohvi Luukkonen, Lukas Friedrich, Daniel Kuhn, Günter Klambauer

**Date:** 2026-01-14 | **Categories:** cs.LG, stat.ML

[PDF](https://arxiv.org/pdf/2601.09693v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09693v1)

## Abstract

Structure-based and ligand-based computational drug design have traditionally relied on disjoint data sources and modeling assumptions, limiting their joint use at scale. In this work, we introduce Contrastive Geometric Learning for Unified Computational Drug Design (ConGLUDe), a single contrastive geometric model that unifies structure- and ligand-based training. ConGLUDe couples a geometric protein encoder that produces whole-protein representations and implicit embeddings of predicted binding sites with a fast ligand encoder, removing the need for pre-defined pockets. By aligning ligands with both global protein representations and multiple candidate binding sites through contrastive learning, ConGLUDe supports ligand-conditioned pocket prediction in addition to virtual screening and target fishing, while being trained jointly on protein-ligand complexes and large-scale bioactivity data. Across diverse benchmarks, ConGLUDe achieves state-of-the-art zero-shot virtual screening performance in settings where no binding pocket information is provided as input, substantially outperforms existing methods on a challenging target fishing task, and demonstrates competitive ligand-conditioned pocket selection. These results highlight the advantages of unified structure-ligand training and position ConGLUDe as a step toward general-purpose foundation models for drug discovery.

## Notes

