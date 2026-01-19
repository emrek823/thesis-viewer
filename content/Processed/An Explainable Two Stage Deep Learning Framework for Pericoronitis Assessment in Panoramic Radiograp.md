---
title: An Explainable Two Stage Deep Learning Framework for Pericoronitis Assessment
  in Panoramic Radiographs Using YOLOv8 and ResNet-50
authors:
- Ajo Babu George
- Pranav S
- Kunal Agarwal
date: '2026-01-13'
categories:
- cs.CV
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.08401v1
arxiv_id: 2601.08401v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-AI
---

# An Explainable Two Stage Deep Learning Framework for Pericoronitis Assessment in Panoramic Radiographs Using YOLOv8 and ResNet-50

**Authors:** Ajo Babu George, Pranav S, Kunal Agarwal

**Date:** 2026-01-13 | **Categories:** cs.CV, cs.AI

[PDF](https://arxiv.org/pdf/2601.08401v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.08401v1)

## Abstract

Objectives: To overcome challenges in diagnosing pericoronitis on panoramic radiographs, an AI-assisted assessment system integrating anatomical localization, pathological classification, and interpretability. Methods: A two-stage deep learning pipeline was implemented. The first stage used YOLOv8 to detect third molars and classify their anatomical positions and angulations based on Winter's classification. Detected regions were then fed into a second-stage classifier, a modified ResNet-50 architecture, for detecting radiographic features suggestive of pericoronitis. To enhance clinical trust, Grad-CAM was used to highlight key diagnostic regions on the radiographs. Results: The YOLOv8 component achieved 92% precision and 92.5% mean average precision. The ResNet-50 classifier yielded F1-scores of 88% for normal cases and 86% for pericoronitis. Radiologists reported 84% alignment between Grad-CAM and their diagnostic impressions, supporting the radiographic relevance of the interpretability output. Conclusion: The system shows strong potential for AI-assisted panoramic assessment, with explainable AI features that support clinical confidence.

## Notes

