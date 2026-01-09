---
title: Investigation into respiratory sound classification for an imbalanced data
  set using hybrid LSTM-KAN architectures
authors:
- Nithinkumar K.
- Anand R
date: '2026-01-07'
categories:
- cs.SD
- cs.AI
- eess.AS
pdf_url: https://arxiv.org/pdf/2601.03610v1
arxiv_id: 2601.03610v1
tags:
- paper
- alphaxiv/hot
- topic/cs-SD
- topic/cs-AI
- topic/eess-AS
---

# Investigation into respiratory sound classification for an imbalanced data set using hybrid LSTM-KAN architectures

**Authors:** Nithinkumar K., Anand R

**Date:** 2026-01-07 | **Categories:** cs.SD, cs.AI, eess.AS

[PDF](https://arxiv.org/pdf/2601.03610v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.03610v1)

## Abstract

Respiratory sounds captured via auscultation contain critical clues for diagnosing pulmonary conditions. Automated classification of these sounds faces challenges due to subtle acoustic differences and severe class imbalance in clinical datasets. This study investigates respiratory sound classification with a focus on mitigating pronounced class imbalance. We propose a hybrid deep learning model that combines a Long Short-Term Memory (LSTM) network for sequential feature encoding with a Kolmogorov-Arnold Network (KAN) for classification. The model is integrated with a comprehensive feature extraction pipeline and targeted imbalance mitigation strategies. Experiments were conducted on a public respiratory sound database comprising six classes with a highly skewed distribution. Techniques such as focal loss, class-specific data augmentation, and Synthetic Minority Over-sampling Technique (SMOTE) were employed to enhance minority class recognition. The proposed Hybrid LSTM-KAN model achieves an overall accuracy of 94.6 percent and a macro-averaged F1 score of 0.703, despite the dominant COPD class accounting for over 86 percent of the data. Improved detection performance is observed for minority classes compared to baseline approaches, demonstrating the effectiveness of the proposed architecture for imbalanced respiratory sound classification.

## Notes

