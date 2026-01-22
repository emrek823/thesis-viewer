---
title: 'CTest-Metric: A Unified Framework to Assess Clinical Validity of Metrics for
  CT Report Generation'
authors:
- Vanshali Sharma
- Andrea Mia Bejar
- Gorkem Durak
- Ulas Bagci
date: '2026-01-16'
categories:
- cs.CL
- cs.CV
pdf_url: https://arxiv.org/pdf/2601.11488v1
arxiv_id: 2601.11488v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-CV
---

# CTest-Metric: A Unified Framework to Assess Clinical Validity of Metrics for CT Report Generation

**Authors:** Vanshali Sharma, Andrea Mia Bejar, Gorkem Durak, Ulas Bagci

**Date:** 2026-01-16 | **Categories:** cs.CL, cs.CV

[PDF](https://arxiv.org/pdf/2601.11488v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.11488v1)

## Abstract

In the generative AI era, where even critical medical tasks are increasingly automated, radiology report generation (RRG) continues to rely on suboptimal metrics for quality assessment. Developing domain-specific metrics has therefore been an active area of research, yet it remains challenging due to the lack of a unified, well-defined framework to assess their robustness and applicability in clinical contexts. To address this, we present CTest-Metric, a first unified metric assessment framework with three modules determining the clinical feasibility of metrics for CT RRG. The modules test: (i) Writing Style Generalizability (WSG) via LLM-based rephrasing; (ii) Synthetic Error Injection (SEI) at graded severities; and (iii) Metrics-vs-Expert correlation (MvE) using clinician ratings on 175 "disagreement" cases. Eight widely used metrics (BLEU, ROUGE, METEOR, BERTScore-F1, F1-RadGraph, RaTEScore, GREEN Score, CRG) are studied across seven LLMs built on a CT-CLIP encoder. Using our novel framework, we found that lexical NLG metrics are highly sensitive to stylistic variations; GREEN Score aligns best with expert judgments (Spearman~0.70), while CRG shows negative correlation; and BERTScore-F1 is least sensitive to factual error injection. We will release the framework, code, and allowable portion of the anonymized evaluation data (rephrased/error-injected CT reports), to facilitate reproducible benchmarking and future metric development.

## Notes

