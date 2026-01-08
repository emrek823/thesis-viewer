---
title: 'EIR: Enhanced Image Representations for Medical Report Generation'
authors:
- Qiang Sun
- Zongcheng Ji
- Yinlong Xiao
- Peng Chang
- Jun Yu
date: '2025-12-29'
categories:
- eess.IV
- cs.AI
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.23185v1
arxiv_id: 2512.23185v1
tags:
- paper
- alphaxiv/hot
- topic/eess-IV
- topic/cs-AI
- topic/cs-CV
---

# EIR: Enhanced Image Representations for Medical Report Generation

**Authors:** Qiang Sun, Zongcheng Ji, Yinlong Xiao, Peng Chang, Jun Yu

**Date:** 2025-12-29 | **Categories:** eess.IV, cs.AI, cs.CV

[PDF](https://arxiv.org/pdf/2512.23185v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23185v1)

## Abstract

Generating medical reports from chest X-ray images is a critical and time-consuming task for radiologists, especially in emergencies. To alleviate the stress on radiologists and reduce the risk of misdiagnosis, numerous research efforts have been dedicated to automatic medical report generation in recent years. Most recent studies have developed methods that represent images by utilizing various medical metadata, such as the clinical document history of the current patient and the medical graphs constructed from retrieved reports of other similar patients. However, all existing methods integrate additional metadata representations with visual representations through a simple "Add and LayerNorm" operation, which suffers from the information asymmetry problem due to the distinct distributions between them. In addition, chest X-ray images are usually represented using pre-trained models based on natural domain images, which exhibit an obvious domain gap between general and medical domain images. To this end, we propose a novel approach called Enhanced Image Representations (EIR) for generating accurate chest X-ray reports. We utilize cross-modal transformers to fuse metadata representations with image representations, thereby effectively addressing the information asymmetry problem between them, and we leverage medical domain pre-trained models to encode medical images, effectively bridging the domain gap for image representation. Experimental results on the widely used MIMIC and Open-I datasets demonstrate the effectiveness of our proposed method.

## Notes

