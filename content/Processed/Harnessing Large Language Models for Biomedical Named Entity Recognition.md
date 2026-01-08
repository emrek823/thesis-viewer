---
title: Harnessing Large Language Models for Biomedical Named Entity Recognition
authors:
- Jian Chen
- Leilei Su
- Cong Sun
date: '2025-12-28'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.22738v1
arxiv_id: 2512.22738v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# Harnessing Large Language Models for Biomedical Named Entity Recognition

**Authors:** Jian Chen, Leilei Su, Cong Sun

**Date:** 2025-12-28 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2512.22738v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.22738v1)

## Abstract

Background and Objective: Biomedical Named Entity Recognition (BioNER) is a foundational task in medical informatics, crucial for downstream applications like drug discovery and clinical trial matching. However, adapting general-domain Large Language Models (LLMs) to this task is often hampered by their lack of domain-specific knowledge and the performance degradation caused by low-quality training data. To address these challenges, we introduce BioSelectTune, a highly efficient, data-centric framework for fine-tuning LLMs that prioritizes data quality over quantity. Methods and Results: BioSelectTune reformulates BioNER as a structured JSON generation task and leverages our novel Hybrid Superfiltering strategy, a weak-to-strong data curation method that uses a homologous weak model to distill a compact, high-impact training dataset. Conclusions: Through extensive experiments, we demonstrate that BioSelectTune achieves state-of-the-art (SOTA) performance across multiple BioNER benchmarks. Notably, our model, trained on only 50% of the curated positive data, not only surpasses the fully-trained baseline but also outperforms powerful domain-specialized models like BioMedBERT.

## Notes

