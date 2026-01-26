---
title: Hallucination Mitigating for Medical Report Generation
authors:
- Ruoqing Zhao
- Runze Xia
- Piji Li
date: '2026-01-22'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.15745v1
arxiv_id: 2601.15745v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Hallucination Mitigating for Medical Report Generation

**Authors:** Ruoqing Zhao, Runze Xia, Piji Li

**Date:** 2026-01-22 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.15745v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15745v1)

## Abstract

In the realm of medical report generation (MRG), the integration of natural language processing has emerged as a vital tool to alleviate the workload of radiologists. Despite the impressive capabilities demonstrated by large vision language models (LVLMs) in understanding natural language, their susceptibility to generating plausible yet inaccurate claims, known as ``hallucinations'', raises concerns-especially in the nuanced and critical field of medical. In this work, we introduce a framework, \textbf{K}nowledge-\textbf{E}nhanced with Fine-Grained \textbf{R}einforced Rewards \textbf{M}edical Report Generation (KERM), to tackle the issue. Our approach refines the input to the LVLM by first utilizing MedCLIP for knowledge retrieval, incorporating relevant lesion fact sentences from a curated knowledge corpus. We then introduce a novel purification module to ensure the retrieved knowledge is contextually relevant to the patient's clinical context. Subsequently, we employ fine-grained rewards to guide these models in generating highly supportive and clinically relevant descriptions, ensuring the alignment of model's outputs with desired behaviors. Experimental results on IU-Xray and MIMIC-CXR datasets validate the effectiveness of our approach in mitigating hallucinations and enhancing report quality.

## Notes

