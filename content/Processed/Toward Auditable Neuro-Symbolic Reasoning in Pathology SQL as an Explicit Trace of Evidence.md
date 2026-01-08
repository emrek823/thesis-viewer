---
title: 'Toward Auditable Neuro-Symbolic Reasoning in Pathology: SQL as an Explicit
  Trace of Evidence'
authors:
- Kewen Cao
- Jianxu Chen
- Yongbing Zhang
- Ye Zhang
- Hongxiao Wang
date: '2026-01-05'
categories:
- cs.AI
- q-bio.QM
pdf_url: https://arxiv.org/pdf/2601.01875v1
arxiv_id: 2601.01875v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
- topic/q-bio-QM
---

# Toward Auditable Neuro-Symbolic Reasoning in Pathology: SQL as an Explicit Trace of Evidence

**Authors:** Kewen Cao, Jianxu Chen, Yongbing Zhang, Ye Zhang, Hongxiao Wang

**Date:** 2026-01-05 | **Categories:** cs.AI, q-bio.QM

[PDF](https://arxiv.org/pdf/2601.01875v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.01875v1)

## Abstract

Automated pathology image analysis is central to clinical diagnosis, but clinicians still ask which slide features drive a model's decision and why. Vision-language models can produce natural language explanations, but these are often correlational and lack verifiable evidence. In this paper, we introduce an SQL-centered agentic framework that enables both feature measurement and reasoning to be auditable. Specifically, after extracting human-interpretable cellular features, Feature Reasoning Agents compose and execute SQL queries over feature tables to aggregate visual evidence into quantitative findings. A Knowledge Comparison Agent then evaluates these findings against established pathological knowledge, mirroring how pathologists justify diagnoses from measurable observations. Extensive experiments evaluated on two pathology visual question answering datasets demonstrate our method improves interpretability and decision traceability while producing executable SQL traces that link cellular measurements to diagnostic conclusions.

## Notes

