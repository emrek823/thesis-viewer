---
title: Bridging the Perception-Cognition Gap:Re-engineering SAM2 with Hilbert-Mamba
  for Robust VLM-based Medical Diagnosis
authors:
- Hao Wu
- Hui Li
- Yiyun Su
date: '2025-12-30'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.24013v1
paper_id: 2512.24013v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
---

# Bridging the Perception-Cognition Gap:Re-engineering SAM2 with Hilbert-Mamba for Robust VLM-based Medical Diagnosis

**Authors:** Hao Wu, Hui Li, Yiyun Su

**Date:** 2025-12-30 | **Source:** arxiv | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.24013v1)

## Abstract

Recent studies suggest that Visual Language Models (VLMs) hold great potential for tasks such as automated medical diagnosis. However, processing complex three-dimensional (3D) multimodal medical images poses significant challenges - specifically, the effective integration of complementary information and the occasional oversight of subtle yet critical pathological features. To address these issues, we present a novel two-stage fusion framework termed Hilbert-VLM. This framework leverages the HilbertMed-SAM module for precise lesion segmentation, with the generated multimodal enhanced prompts then guiding the VLM toward accurate disease classification. Our key innovation lies in the systematic redesign of the Segment Anything Model 2 (SAM2) architecture: we incorporate Hilbert space-filling curves into the scanning mechanism of the Mamba State Space Model (SSM) to maximize the preservation of spatial locality in 3D data, a property critical for medical image analysis. We also introduce a novel Hilbert-Mamba Cross-Attention (HMCA) mechanism and a scale-aware decoder to capture fine-grained details. Meanwhile, the prompt enhancement module unifies segmentation masks and their corresponding textual attributes into an information-dense prompt to support VLM inference. Extensive experiments were conducted to validate the effectiveness of the Hilbert-VLM model. On the BraTS2021 segmentation benchmark, it achieves a Dice score of 82.35 percent, with a diagnostic classification accuracy (ACC) of 78.85 percent. These results demonstrate that the proposed model offers substantial potential to improve the accuracy and reliability of medical VLM-based analysis.

## Notes

