---
title: 'DeltaMIL: Gated Memory Integration for Efficient and Discriminative Whole
  Slide Image Analysis'
authors:
- Yueting Zhu
- Yuehao Song
- Shuai Zhang
- Wenyu Liu
- Xinggang Wang
date: '2025-12-22'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.19331v1
arxiv_id: 2512.19331v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# DeltaMIL: Gated Memory Integration for Efficient and Discriminative Whole Slide Image Analysis

**Authors:** Yueting Zhu, Yuehao Song, Shuai Zhang, Wenyu Liu, Xinggang Wang

**Date:** 2025-12-22 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.19331v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.19331v1)

## Abstract

Whole Slide Images (WSIs) are typically analyzed using multiple instance learning (MIL) methods. However, the scale and heterogeneity of WSIs generate highly redundant and dispersed information, making it difficult to identify and integrate discriminative signals. Existing MIL methods either fail to discard uninformative cues effectively or have limited ability to consolidate relevant features from multiple patches, which restricts their performance on large and heterogeneous WSIs. To address this issue, we propose DeltaMIL, a novel MIL framework that explicitly selects semantically relevant regions and integrates the discriminative information from WSIs. Our method leverages the gated delta rule to efficiently filter and integrate information through a block combining forgetting and memory mechanisms. The delta mechanism dynamically updates the memory by removing old values and inserting new ones according to their correlation with the current patch. The gating mechanism further enables rapid forgetting of irrelevant signals. Additionally, DeltaMIL integrates a complementary local pattern mixing mechanism to retain fine-grained pathological locality. Our design enhances the extraction of meaningful cues and suppresses redundant or noisy information, which improves the model's robustness and discriminative power. Experiments demonstrate that DeltaMIL achieves state-of-the-art performance. Specifically, for survival prediction, DeltaMIL improves performance by 3.69\% using ResNet-50 features and 2.36\% using UNI features. For slide-level classification, it increases accuracy by 3.09\% with ResNet-50 features and 3.75\% with UNI features. These results demonstrate the strong and consistent performance of DeltaMIL across diverse WSI tasks.

## Notes

