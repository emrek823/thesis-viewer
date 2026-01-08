---
title: Prior-Guided DETR for Ultrasound Nodule Detection
authors:
- Jingjing Wang
- Zhuo Xiao
- Xinning Yao
- Bo Liu
- Lijuan Niu
- Xiangzhi Bai
- Fugen Zhou
date: '2026-01-05'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.02212v1
arxiv_id: 2601.02212v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# Prior-Guided DETR for Ultrasound Nodule Detection

**Authors:** Jingjing Wang, Zhuo Xiao, Xinning Yao, Bo Liu, Lijuan Niu...

**Date:** 2026-01-05 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.02212v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.02212v1)

## Abstract

Accurate detection of ultrasound nodules is essential for the early diagnosis and treatment of thyroid and breast cancers. However, this task remains challenging due to irregular nodule shapes, indistinct boundaries, substantial scale variations, and the presence of speckle noise that degrades structural visibility. To address these challenges, we propose a prior-guided DETR framework specifically designed for ultrasound nodule detection. Instead of relying on purely data-driven feature learning, the proposed framework progressively incorporates different prior knowledge at multiple stages of the network. First, a Spatially-adaptive Deformable FFN with Prior Regularization (SDFPR) is embedded into the CNN backbone to inject geometric priors into deformable sampling, stabilizing feature extraction for irregular and blurred nodules. Second, a Multi-scale Spatial-Frequency Feature Mixer (MSFFM) is designed to extract multi-scale structural priors, where spatial-domain processing emphasizes contour continuity and boundary cues, while frequency-domain modeling captures global morphology and suppresses speckle noise. Furthermore, a Dense Feature Interaction (DFI) mechanism propagates and exploits these prior-modulated features across all encoder layers, enabling the decoder to enhance query refinement under consistent geometric and structural guidance. Experiments conducted on two clinically collected thyroid ultrasound datasets (Thyroid I and Thyroid II) and two public benchmarks (TN3K and BUSI) for thyroid and breast nodules demonstrate that the proposed method achieves superior accuracy compared with 18 detection methods, particularly in detecting morphologically complex nodules.The source code is publicly available at https://github.com/wjj1wjj/Ultrasound-DETR.

## Notes

