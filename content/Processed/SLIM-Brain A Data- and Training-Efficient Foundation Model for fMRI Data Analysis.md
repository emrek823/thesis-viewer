---
title: 'SLIM-Brain: A Data- and Training-Efficient Foundation Model for fMRI Data
  Analysis'
authors:
- Mo Wang
- Junfeng Xia
- Wenhao Ye
- Enyu Liu
- Kaining Peng
- Jianfeng Feng
- Quanying Liu
- Hongkai Wen
date: '2025-12-26'
categories:
- cs.CV
- q-bio.NC
pdf_url: https://arxiv.org/pdf/2512.21881v1
paper_id: 2512.21881v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/q-bio-NC
---

# SLIM-Brain: A Data- and Training-Efficient Foundation Model for fMRI Data Analysis

**Authors:** Mo Wang, Junfeng Xia, Wenhao Ye, Enyu Liu, Kaining Peng...

**Date:** 2025-12-26 | **Source:** arxiv | **Categories:** cs.CV, q-bio.NC

[PDF](https://arxiv.org/pdf/2512.21881v1)

## Abstract

Foundation models are emerging as a powerful paradigm for fMRI analysis, but current approaches face a dual bottleneck of data- and training-efficiency. Atlas-based methods aggregate voxel signals into fixed regions of interest, reducing data dimensionality but discarding fine-grained spatial details, and requiring extremely large cohorts to train effectively as general-purpose foundation models. Atlas-free methods, on the other hand, operate directly on voxel-level information - preserving spatial fidelity but are prohibitively memory- and compute-intensive, making large-scale pre-training infeasible. We introduce SLIM-Brain (Sample-efficient, Low-memory fMRI Foundation Model for Human Brain), a new atlas-free foundation model that simultaneously improves both data- and training-efficiency. SLIM-Brain adopts a two-stage adaptive design: (i) a lightweight temporal extractor captures global context across full sequences and ranks data windows by saliency, and (ii) a 4D hierarchical encoder (Hiera-JEPA) learns fine-grained voxel-level representations only from the top-$k$ selected windows, while deleting about 70% masked patches. Extensive experiments across seven public benchmarks show that SLIM-Brain establishes new state-of-the-art performance on diverse tasks, while requiring only 4 thousand pre-training sessions and approximately 30% of GPU memory comparing to traditional voxel-level methods.

## Notes

