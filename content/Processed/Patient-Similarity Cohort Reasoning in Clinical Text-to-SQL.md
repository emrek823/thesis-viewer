---
title: Patient-Similarity Cohort Reasoning in Clinical Text-to-SQL
authors:
- Yifei Shen
- Yilun Zhao
- Justice Ou
- Tinglin Huang
- Arman Cohan
date: '2026-01-14'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.09876v1
arxiv_id: 2601.09876v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Patient-Similarity Cohort Reasoning in Clinical Text-to-SQL

**Authors:** Yifei Shen, Yilun Zhao, Justice Ou, Tinglin Huang, Arman Cohan

**Date:** 2026-01-14 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.09876v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09876v1)

## Abstract

Real-world clinical text-to-SQL requires reasoning over heterogeneous EHR tables, temporal windows, and patient-similarity cohorts to produce executable queries. We introduce CLINSQL, a benchmark of 633 expert-annotated tasks on MIMIC-IV v3.1 that demands multi-table joins, clinically meaningful filters, and executable SQL. Solving CLINSQL entails navigating schema metadata and clinical coding systems, handling long contexts, and composing multi-step queries beyond traditional text-to-SQL. We evaluate 22 proprietary and open-source models under Chain-of-Thought self-refinement and use rubric-based SQL analysis with execution checks that prioritize critical clinical requirements. Despite recent advances, performance remains far from clinical reliability: on the test set, GPT-5-mini attains 74.7% execution score, DeepSeek-R1 leads open-source at 69.2% and Gemini-2.5-Pro drops from 85.5% on Easy to 67.2% on Hard. Progress on CLINSQL marks tangible advances toward clinically reliable text-to-SQL for real-world EHR analytics.

## Notes

