---
title: 'CTIS-QA: Clinical Template-Informed Slide-level Question Answering for Pathology'
authors:
- Hao Lu
- Ziniu Qian
- Yifu Li
- Yang Zhou
- Bingzheng Wei
- Yan Xu
date: '2026-01-05'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.01769v1
arxiv_id: 2601.01769v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# CTIS-QA: Clinical Template-Informed Slide-level Question Answering for Pathology

**Authors:** Hao Lu, Ziniu Qian, Yifu Li, Yang Zhou, Bingzheng Wei...

**Date:** 2026-01-05 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2601.01769v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01769v1)

## Abstract

In this paper, we introduce a clinical diagnosis template-based pipeline to systematically collect and structure pathological information. In collaboration with pathologists and guided by the the College of American Pathologists (CAP) Cancer Protocols, we design a Clinical Pathology Report Template (CPRT) that ensures comprehensive and standardized extraction of diagnostic elements from pathology reports. We validate the effectiveness of our pipeline on TCGA-BRCA. First, we extract pathological features from reports using CPRT. These features are then used to build CTIS-Align, a dataset of 80k slide-description pairs from 804 WSIs for vision-language alignment training, and CTIS-Bench, a rigorously curated VQA benchmark comprising 977 WSIs and 14,879 question-answer pairs. CTIS-Bench emphasizes clinically grounded, closed-ended questions (e.g., tumor grade, receptor status) that reflect real diagnostic workflows, minimize non-visual reasoning, and require genuine slide understanding. We further propose CTIS-QA, a Slide-level Question Answering model, featuring a dual-stream architecture that mimics pathologists' diagnostic approach. One stream captures global slide-level context via clustering-based feature aggregation, while the other focuses on salient local regions through attention-guided patch perception module. Extensive experiments on WSI-VQA, CTIS-Bench, and slide-level diagnostic tasks show that CTIS-QA consistently outperforms existing state-of-the-art models across multiple metrics. Code and data are available at https://github.com/HLSvois/CTIS-QA.

## Notes

