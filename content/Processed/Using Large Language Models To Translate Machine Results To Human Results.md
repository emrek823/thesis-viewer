---
title: Using Large Language Models To Translate Machine Results To Human Results
authors:
- Trishna Niraula
- Jonathan Stubblefield
date: '2025-12-30'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.24518v1
paper_id: 2512.24518v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# Using Large Language Models To Translate Machine Results To Human Results

**Authors:** Trishna Niraula, Jonathan Stubblefield

**Date:** 2025-12-30 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.24518v1)

## Abstract

Artificial intelligence (AI) has transformed medical imaging, with computer vision (CV) systems achieving state-of-the-art performance in classification and detection tasks. However, these systems typically output structured predictions, leaving radiologists responsible for translating results into full narrative reports. Recent advances in large language models (LLMs), such as GPT-4, offer new opportunities to bridge this gap by generating diagnostic narratives from structured findings. This study introduces a pipeline that integrates YOLOv5 and YOLOv8 for anomaly detection in chest X-ray images with a large language model (LLM) to generate natural-language radiology reports. The YOLO models produce bounding-box predictions and class labels, which are then passed to the LLM to generate descriptive findings and clinical summaries. YOLOv5 and YOLOv8 are compared in terms of detection accuracy, inference latency, and the quality of generated text, as measured by cosine similarity to ground-truth reports. Results show strong semantic similarity between AI and human reports, while human evaluation reveals GPT-4 excels in clarity (4.88/5) but exhibits lower scores for natural writing flow (2.81/5), indicating that current systems achieve clinical accuracy but remain stylistically distinguishable from radiologist-authored text.

## Notes

