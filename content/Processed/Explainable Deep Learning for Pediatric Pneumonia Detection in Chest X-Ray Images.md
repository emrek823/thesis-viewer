---
title: Explainable Deep Learning for Pediatric Pneumonia Detection in Chest X-Ray
  Images
authors:
- Adil O. Khadidos
- Aziida Nanyonga
- Alaa O. Khadidos
- Olfat M. Mirza
- Mustafa Tahsin Yilmaz
date: '2026-01-14'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.09814v1
arxiv_id: 2601.09814v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# Explainable Deep Learning for Pediatric Pneumonia Detection in Chest X-Ray Images

**Authors:** Adil O. Khadidos, Aziida Nanyonga, Alaa O. Khadidos, Olfat M. Mirza, Mustafa Tahsin Yilmaz

**Date:** 2026-01-14 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.09814v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09814v1)

## Abstract

Background: Pneumonia remains a leading cause of morbidity and mortality among children worldwide, emphasizing the need for accurate and efficient diagnostic support tools. Deep learning has shown strong potential in medical image analysis, particularly for chest X-ray interpretation. This study compares two state-of-the-art convolutional neural network (CNN) architectures for automated pediatric pneumonia detection. Methods: A publicly available dataset of 5,863 pediatric chest X-ray images was used. Images were preprocessed through normalization, resizing, and data augmentation to enhance generalization. DenseNet121 and EfficientNet-B0 were fine-tuned using pretrained ImageNet weights under identical training settings. Performance was evaluated using accuracy, F1-score, Matthews Correlation Coefficient (MCC), and recall. Model explainability was incorporated using Gradient-weighted Class Activation Mapping (Grad-CAM) and Local Interpretable Model-agnostic Explanations (LIME) to visualize image regions influencing predictions. Results: EfficientNet-B0 outperformed DenseNet121, achieving an accuracy of 84.6%, F1-score of 0.8899, and MCC of 0.6849. DenseNet121 achieved 79.7% accuracy, an F1-score of 0.8597, and MCC of 0.5852. Both models demonstrated high recall values above 0.99, indicating strong sensitivity to pneumonia detection. Grad-CAM and LIME visualizations showed consistent focus on clinically relevant lung regions, supporting the reliability of model decisions. Conclusions: EfficientNet-B0 provided a more balanced and computationally efficient performance compared to DenseNet121, making it a strong candidate for clinical deployment. The integration of explainability techniques enhances transparency and trustworthiness in AI-assisted pediatric pneumonia diagnosis.

## Notes

