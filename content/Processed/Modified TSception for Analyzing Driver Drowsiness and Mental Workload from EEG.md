---
title: Modified TSception for Analyzing Driver Drowsiness and Mental Workload from
  EEG
authors:
- Gourav Siddhad
- Anurag Singh
- Rajkumar Saini
- Partha Pratim Roy
date: '2025-12-25'
categories:
- cs.HC
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21747v1
paper_id: 2512.21747v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-HC
- topic/cs-CV
---

# Modified TSception for Analyzing Driver Drowsiness and Mental Workload from EEG

**Authors:** Gourav Siddhad, Anurag Singh, Rajkumar Saini, Partha Pratim Roy

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.HC, cs.CV

[PDF](https://arxiv.org/pdf/2512.21747v1)

## Abstract

Driver drowsiness remains a primary cause of traffic accidents, necessitating the development of real-time, reliable detection systems to ensure road safety. This study presents a Modified TSception architecture designed for the robust assessment of driver fatigue using Electroencephalography (EEG). The model introduces a novel hierarchical architecture that surpasses the original TSception by implementing a five-layer temporal refinement strategy to capture multi-scale brain dynamics. A key innovation is the use of Adaptive Average Pooling, which provides the structural flexibility to handle varying EEG input dimensions, and a two - stage fusion mechanism that optimizes the integration of spatiotemporal features for improved stability. When evaluated on the SEED-VIG dataset and compared against established methods - including SVM, Transformer, EEGNet, ConvNeXt, LMDA-Net, and the original TSception - the Modified TSception achieves a comparable accuracy of 83.46% (vs. 83.15% for the original). Critically, the proposed model exhibits a substantially reduced confidence interval (0.24 vs. 0.36), signifying a marked improvement in performance stability. Furthermore, the architecture's generalizability is validated on the STEW mental workload dataset, where it achieves state-of-the-art results with 95.93% and 95.35% accuracy for 2-class and 3-class classification, respectively. These improvements in consistency and cross-task generalizability underscore the effectiveness of the proposed modifications for reliable EEG-based monitoring of drowsiness and mental workload.

## Notes

