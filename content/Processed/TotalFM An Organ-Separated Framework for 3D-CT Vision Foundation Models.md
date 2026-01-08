---
title: 'TotalFM: An Organ-Separated Framework for 3D-CT Vision Foundation Models'
authors:
- Kohei Yamamoto
- Tomohiro Kikuchi
date: '2026-01-01'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.00260v1
arxiv_id: 2601.00260v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# TotalFM: An Organ-Separated Framework for 3D-CT Vision Foundation Models

**Authors:** Kohei Yamamoto, Tomohiro Kikuchi

**Date:** 2026-01-01 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.00260v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.00260v1)

## Abstract

While foundation models in radiology are expected to be applied to various clinical tasks, computational cost constraints remain a major challenge when training on 3D-CT volumetric data. In this study, we propose TotalFM, a radiological foundation model that efficiently learns the correspondence between 3D-CT images and linguistic expressions based on the concept of organ separation, utilizing a large-scale dataset of 140,000 series. By automating the creation of organ volume and finding-sentence pairs through segmentation techniques and Large Language Model (LLM)-based radiology report processing, and by combining self-supervised pre-training via VideoMAE with contrastive learning using volume-text pairs, we aimed to balance computational efficiency and representation capability. In zero-shot organ-wise lesion classification tasks, the proposed model achieved higher F1 scores in 83% (5/6) of organs compared to CT-CLIP and 64% (9/14) of organs compared to Merlin. These results suggest that the proposed model exhibits high generalization performance in a clinical evaluation setting using actual radiology report sentences. Furthermore, in zero-shot finding-wise lesion classification tasks, our model achieved a higher AUROC in 83% (25/30) of finding categories compared to Merlin. We also confirmed performance comparable to existing Vision-Language Models (VLMs) in radiology report generation tasks. Our results demonstrate that the organ-separated learning framework can serve as a realistic and effective design guideline for the practical implementation of 3D-CT foundation models.

## Notes

