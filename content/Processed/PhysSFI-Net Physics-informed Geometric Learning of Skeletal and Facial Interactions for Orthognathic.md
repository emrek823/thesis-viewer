---
title: 'PhysSFI-Net: Physics-informed Geometric Learning of Skeletal and Facial Interactions
  for Orthognathic Surgical Outcome Prediction'
authors:
- Jiahao Bao
- Huazhen Liu
- Yu Zhuang
- Leran Tao
- Xinyu Xu
- Yongtao Shi
- Mengjia Cheng
- Yiming Wang
- Congshuang Ku
- Ting Zeng
date: '2026-01-05'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.02088v1
arxiv_id: 2601.02088v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# PhysSFI-Net: Physics-informed Geometric Learning of Skeletal and Facial Interactions for Orthognathic Surgical Outcome Prediction

**Authors:** Jiahao Bao, Huazhen Liu, Yu Zhuang, Leran Tao, Xinyu Xu...

**Date:** 2026-01-05 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.02088v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.02088v1)

## Abstract

Orthognathic surgery repositions jaw bones to restore occlusion and enhance facial aesthetics. Accurate simulation of postoperative facial morphology is essential for preoperative planning. However, traditional biomechanical models are computationally expensive, while geometric deep learning approaches often lack interpretability. In this study, we develop and validate a physics-informed geometric deep learning framework named PhysSFI-Net for precise prediction of soft tissue deformation following orthognathic surgery. PhysSFI-Net consists of three components: a hierarchical graph module with craniofacial and surgical plan encoders combined with attention mechanisms to extract skeletal-facial interaction features; a Long Short-Term Memory (LSTM)-based sequential predictor for incremental soft tissue deformation; and a biomechanics-inspired module for high-resolution facial surface reconstruction. Model performance was assessed using point cloud shape error (Hausdorff distance), surface deviation error, and landmark localization error (Euclidean distances of craniomaxillofacial landmarks) between predicted facial shapes and corresponding ground truths. A total of 135 patients who underwent combined orthodontic and orthognathic treatment were included for model training and validation. Quantitative analysis demonstrated that PhysSFI-Net achieved a point cloud shape error of 1.070 +/- 0.088 mm, a surface deviation error of 1.296 +/- 0.349 mm, and a landmark localization error of 2.445 +/- 1.326 mm. Comparative experiments indicated that PhysSFI-Net outperformed the state-of-the-art method ACMT-Net in prediction accuracy. In conclusion, PhysSFI-Net enables interpretable, high-resolution prediction of postoperative facial morphology with superior accuracy, showing strong potential for clinical application in orthognathic surgical planning and simulation.

## Notes

