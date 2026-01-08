---
title: 'A-QCF-Net: An Adaptive Quaternion Cross-Fusion Network for Multimodal Liver
  Tumor Segmentation from Unpaired Datasets'
authors:
- Arunkumar V
- Firos V M
- Senthilkumar S
- Gangadharan G R
date: '2025-12-25'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.21760v1
paper_id: 2512.21760v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-AI
---

# A-QCF-Net: An Adaptive Quaternion Cross-Fusion Network for Multimodal Liver Tumor Segmentation from Unpaired Datasets

**Authors:** Arunkumar V, Firos V M, Senthilkumar S, Gangadharan G R

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2512.21760v1)

## Abstract

Multimodal medical imaging provides complementary information that is crucial for accurate delineation of pathology, but the development of deep learning models is limited by the scarcity of large datasets in which different modalities are paired and spatially aligned. This paper addresses this fundamental limitation by proposing an Adaptive Quaternion Cross-Fusion Network (A-QCF-Net) that learns a single unified segmentation model from completely separate and unpaired CT and MRI cohorts. The architecture exploits the parameter efficiency and expressive power of Quaternion Neural Networks to construct a shared feature space. At its core is the Adaptive Quaternion Cross-Fusion (A-QCF) block, a data driven attention module that enables bidirectional knowledge transfer between the two streams. By learning to modulate the flow of information dynamically, the A-QCF block allows the network to exchange abstract modality specific expertise, such as the sharp anatomical boundary information available in CT and the subtle soft tissue contrast provided by MRI. This mutual exchange regularizes and enriches the feature representations of both streams. We validate the framework by jointly training a single model on the unpaired LiTS (CT) and ATLAS (MRI) datasets. The jointly trained model achieves Tumor Dice scores of 76.7% on CT and 78.3% on MRI, significantly exceeding the strong unimodal nnU-Net baseline by margins of 5.4% and 4.7% respectively. Furthermore, comprehensive explainability analysis using Grad-CAM and Grad-CAM++ confirms that the model correctly focuses on relevant pathological structures, ensuring the learned representations are clinically meaningful. This provides a robust and clinically viable paradigm for unlocking the large unpaired imaging archives that are common in healthcare.

## Notes

