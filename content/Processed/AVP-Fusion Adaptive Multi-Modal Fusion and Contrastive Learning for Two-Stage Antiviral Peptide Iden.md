---
title: 'AVP-Fusion: Adaptive Multi-Modal Fusion and Contrastive Learning for Two-Stage
  Antiviral Peptide Identification'
authors:
- Xinru Wen
- Weizhong Lin
- Xuan Xiao
date: '2025-12-25'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2512.21544v1
paper_id: 2512.21544v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
---

# AVP-Fusion: Adaptive Multi-Modal Fusion and Contrastive Learning for Two-Stage Antiviral Peptide Identification

**Authors:** Xinru Wen, Weizhong Lin, Xuan Xiao

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2512.21544v1)

## Abstract

Accurate identification of antiviral peptides (AVPs) is critical for accelerating novel drug development. However, current computational methods struggle to capture intricate sequence dependencies and effectively handle ambiguous, hard-to-classify samples. To address these challenges, we propose AVP-Fusion, a novel two-stage deep learning framework integrating adaptive feature fusion and contrastive learning. Unlike traditional static feature concatenation, we construct a panoramic feature space using 10 distinct descriptors and introduce an Adaptive Gating Mechanism.This mechanism dynamically regulates the weights of local motifs extracted by CNNs and global dependencies captured by BiLSTMs based on sequence context. Furthermore, to address data distribution challenges, we employ a contrastive learning strategy driven by Online Hard Example Mining (OHEM) and BLOSUM62-based data augmentation, which significantly sharpens the model's decision boundaries. Experimental results on the benchmark Set 1 dataset demonstrate that AVP-Fusion achieves an accuracy of 0.9531 and an MCC of 0.9064, significantly outperforming state-of-the-art methods. In the second stage, leveraging transfer learning, the model enables precise subclass prediction for six viral families and eight specific viruses, even under limited sample sizes. In summary, AVP-Fusion serves as a robust and interpretable tool for high-throughput antiviral drug screening.

## Notes

