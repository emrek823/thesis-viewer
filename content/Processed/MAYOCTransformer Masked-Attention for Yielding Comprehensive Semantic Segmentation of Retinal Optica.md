---
title: 'MAYOCTransformer: Masked-Attention for Yielding Comprehensive Semantic Segmentation
  of Retinal Optical Coherence Tomography Images using Transformer-based Neural Networks'
authors:
- Ye, R. Z.
- Krivit, J.
- Reiter, G.
- Iezzi, R.
date: '2025-12-29'
categories:
- bioinformatics
pdf_url: https://www.biorxiv.org/content/10.1101/2025.07.08.663601v3.full.pdf
paper_id: biorxiv_10.1101_2025.07.08.663601
source: biorxiv
tags:
- paper
- source/biorxiv
- topic/bioinformatics
---

# MAYOCTransformer: Masked-Attention for Yielding Comprehensive Semantic Segmentation of Retinal Optical Coherence Tomography Images using Transformer-based Neural Networks

**Authors:** Ye, R. Z., Krivit, J., Reiter, G., Iezzi, R.

**Date:** 2025-12-29 | **Source:** biorxiv | **Categories:** bioinformatics

[PDF](https://www.biorxiv.org/content/10.1101/2025.07.08.663601v3.full.pdf)

## Abstract

PurposeOptical coherence tomography (OCT) is a widely used imaging modality in ophthalmology. Accurate semantic segmentation of these images is critical for both clinical and research applications, yet existing convolutional neural network (CNN)-based methods face challenges in generalizability and robustness. This study introduces MAYOCTransformer, the first transformer-based deep learning model for comprehensive semantic segmentation of OCT images, and evaluates its performance against CNN-based models.

MethodsA large dataset of 3,500 OCT images was manually segmented using an iterative deep learning-assisted workflow. The MAYOCTransformer model, based on the Mask2Former architecture, was trained and compared against CNN-based segmentation models, including U-Net, U-Net++, FPN, and DeepLabV3+. Comprehensive segmentation tasks included 10 retinal layer segmentation, choroid stroma and vessel segmentation, and the identification of 9 types of discrete pathological findings including intraretinal fluid (IRF), subretinal fluid (SRF), pigment epithelial detachment (PED), subretinal hyper-reflective material (SHRM), intraretinal hyper-reflective foci, and reticular pseudodrusen. Model performance was evaluated using the Dice similarity coefficient (DSC) on a hold-out test set with five-fold cross-validation. Additional validation was performed using external datasets, open-source segmentation models, and a randomized blinded expert evaluation.

ResultsMAYOCTransformer outperformed CNN-based models in most segmentation tasks. Choroid segmentation performance was comparable between MAYOCTransformer and CNN models. External validation demonstrated the models generalizability, achieving higher DSC scores than publicly available segmentation models. A blinded expert evaluation showed that MAYOCTransformers segmentation was non-inferior to manual annotations.

ConclusionMAYOCTransformer provides improved segmentation performance over CNN-based models. Its ability to generalize to external datasets suggests potential applicability in clinical and research settings.

## Notes

