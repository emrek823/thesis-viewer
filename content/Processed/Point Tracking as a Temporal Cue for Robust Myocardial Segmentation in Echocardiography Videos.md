---
title: Point Tracking as a Temporal Cue for Robust Myocardial Segmentation in Echocardiography
  Videos
authors:
- Bahar Khodabakhshian
- Nima Hashemi
- Armin Saadat
- Zahra Gholami
- In-Chang Hwang
- Samira Sojoudi
- Christina Luong
- Purang Abolmaesumi
- Teresa Tsang
date: '2026-01-14'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.09207v1
arxiv_id: 2601.09207v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Point Tracking as a Temporal Cue for Robust Myocardial Segmentation in Echocardiography Videos

**Authors:** Bahar Khodabakhshian, Nima Hashemi, Armin Saadat, Zahra Gholami, In-Chang Hwang...

**Date:** 2026-01-14 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.09207v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09207v1)

## Abstract

Purpose: Myocardium segmentation in echocardiography videos is a challenging task due to low contrast, noise, and anatomical variability. Traditional deep learning models either process frames independently, ignoring temporal information, or rely on memory-based feature propagation, which accumulates error over time. Methods: We propose Point-Seg, a transformer-based segmentation framework that integrates point tracking as a temporal cue to ensure stable and consistent segmentation of myocardium across frames. Our method leverages a point-tracking module trained on a synthetic echocardiography dataset to track key anatomical landmarks across video sequences. These tracked trajectories provide an explicit motion-aware signal that guides segmentation, reducing drift and eliminating the need for memory-based feature accumulation. Additionally, we incorporate a temporal smoothing loss to further enhance temporal consistency across frames. Results: We evaluate our approach on both public and private echocardiography datasets. Experimental results demonstrate that Point-Seg has statistically similar accuracy in terms of Dice to state-of-the-art segmentation models in high quality echo data, while it achieves better segmentation accuracy in lower quality echo with improved temporal stability. Furthermore, Point-Seg has the key advantage of pixel-level myocardium motion information as opposed to other segmentation methods. Such information is essential in the computation of other downstream tasks such as myocardial strain measurement and regional wall motion abnormality detection. Conclusion: Point-Seg demonstrates that point tracking can serve as an effective temporal cue for consistent video segmentation, offering a reliable and generalizable approach for myocardium segmentation in echocardiography videos. The code is available at https://github.com/DeepRCL/PointSeg.

## Notes

