---
title: 'Towards Reliable Medical LLMs: Benchmarking and Enhancing Confidence Estimation
  of Large Language Models in Medical Consultation'
authors:
- Zhiyao Ren
- Yibing Zhan
- Siyuan Liang
- Guozheng Ma
- Baosheng Yu
- Dacheng Tao
date: '2026-01-22'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.15645v1
arxiv_id: 2601.15645v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Towards Reliable Medical LLMs: Benchmarking and Enhancing Confidence Estimation of Large Language Models in Medical Consultation

**Authors:** Zhiyao Ren, Yibing Zhan, Siyuan Liang, Guozheng Ma, Baosheng Yu...

**Date:** 2026-01-22 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.15645v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15645v1)

## Abstract

Large-scale language models (LLMs) often offer clinical judgments based on incomplete information, increasing the risk of misdiagnosis. Existing studies have primarily evaluated confidence in single-turn, static settings, overlooking the coupling between confidence and correctness as clinical evidence accumulates during real consultations, which limits their support for reliable decision-making. We propose the first benchmark for assessing confidence in multi-turn interaction during realistic medical consultations. Our benchmark unifies three types of medical data for open-ended diagnostic generation and introduces an information sufficiency gradient to characterize the confidence-correctness dynamics as evidence increases. We implement and compare 27 representative methods on this benchmark; two key insights emerge: (1) medical data amplifies the inherent limitations of token-level and consistency-level confidence methods, and (2) medical reasoning must be evaluated for both diagnostic accuracy and information completeness. Based on these insights, we present MedConf, an evidence-grounded linguistic self-assessment framework that constructs symptom profiles via retrieval-augmented generation, aligns patient information with supporting, missing, and contradictory relations, and aggregates them into an interpretable confidence estimate through weighted integration. Across two LLMs and three medical datasets, MedConf consistently outperforms state-of-the-art methods on both AUROC and Pearson correlation coefficient metrics, maintaining stable performance under conditions of information insufficiency and multimorbidity. These results demonstrate that information adequacy is a key determinant of credible medical confidence modeling, providing a new pathway toward building more reliable and interpretable large medical models.

## Notes

