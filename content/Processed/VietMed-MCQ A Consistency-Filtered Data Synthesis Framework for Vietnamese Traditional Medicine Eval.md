---
title: 'VietMed-MCQ: A Consistency-Filtered Data Synthesis Framework for Vietnamese
  Traditional Medicine Evaluation'
authors:
- Huynh Trung Kiet
- Dao Sy Duy Minh
- Nguyen Dinh Ha Duong
- Le Hoang Minh Huy
- Long Nguyen
- Dien Dinh
date: '2026-01-07'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.03792v1
paper_id: 2601.03792v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CL
---

# VietMed-MCQ: A Consistency-Filtered Data Synthesis Framework for Vietnamese Traditional Medicine Evaluation

**Authors:** Huynh Trung Kiet, Dao Sy Duy Minh, Nguyen Dinh Ha Duong, Le Hoang Minh Huy, Long Nguyen...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.03792v1)

## Abstract

Large Language Models (LLMs) have demonstrated remarkable proficiency in general medical domains. However, their performance significantly degrades in specialized, culturally specific domains such as Vietnamese Traditional Medicine (VTM), primarily due to the scarcity of high-quality, structured benchmarks. In this paper, we introduce VietMed-MCQ, a novel multiple-choice question dataset generated via a Retrieval-Augmented Generation (RAG) pipeline with an automated consistency check mechanism. Unlike previous synthetic datasets, our framework incorporates a dual-model validation approach to ensure reasoning consistency through independent answer verification, though the substring-based evidence checking has known limitations. The complete dataset of 3,190 questions spans three difficulty levels and underwent validation by one medical expert and four students, achieving 94.2 percent approval with substantial inter-rater agreement (Fleiss' kappa = 0.82). We benchmark seven open-source models on VietMed-MCQ. Results reveal that general-purpose models with strong Chinese priors outperform Vietnamese-centric models, highlighting cross-lingual conceptual transfer, while all models still struggle with complex diagnostic reasoning. Our code and dataset are publicly available to foster research in low-resource medical domains.

## Notes

