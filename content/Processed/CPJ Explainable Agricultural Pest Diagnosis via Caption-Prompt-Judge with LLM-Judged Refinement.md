---
title: 'CPJ: Explainable Agricultural Pest Diagnosis via Caption-Prompt-Judge with
  LLM-Judged Refinement'
authors:
- Wentao Zhang
- Tao Fang
- Lina Lu
- Lifei Wang
- Weihe Zhong
date: '2025-12-31'
categories:
- cs.CV
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.24947v1
paper_id: 2512.24947v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-CL
---

# CPJ: Explainable Agricultural Pest Diagnosis via Caption-Prompt-Judge with LLM-Judged Refinement

**Authors:** Wentao Zhang, Tao Fang, Lina Lu, Lifei Wang, Weihe Zhong

**Date:** 2025-12-31 | **Source:** arxiv | **Categories:** cs.CV, cs.CL

[PDF](https://arxiv.org/pdf/2512.24947v1)

## Abstract

Accurate and interpretable crop disease diagnosis is essential for agricultural decision-making, yet existing methods often rely on costly supervised fine-tuning and perform poorly under domain shifts. We propose Caption--Prompt--Judge (CPJ), a training-free few-shot framework that enhances Agri-Pest VQA through structured, interpretable image captions. CPJ employs large vision-language models to generate multi-angle captions, refined iteratively via an LLM-as-Judge module, which then inform a dual-answer VQA process for both recognition and management responses. Evaluated on CDDMBench, CPJ significantly improves performance: using GPT-5-mini captions, GPT-5-Nano achieves \textbf{+22.7} pp in disease classification and \textbf{+19.5} points in QA score over no-caption baselines. The framework provides transparent, evidence-based reasoning, advancing robust and explainable agricultural diagnosis without fine-tuning. Our code and data are publicly available at: https://github.com/CPJ-Agricultural/CPJ-Agricultural-Diagnosis.

## Notes

