---
title: 'DisastQA: A Comprehensive Benchmark for Evaluating Question Answering in Disaster
  Management'
authors:
- Zhitong Chen
- Kai Yin
- Xiangjue Dong
- Chengkai Liu
- Xiangpeng Li
- Yiming Xiao
- Bo Li
- Junwei Ma
- Ali Mostafavi
- James Caverlee
date: '2026-01-07'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.03670v1
paper_id: 2601.03670v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CL
---

# DisastQA: A Comprehensive Benchmark for Evaluating Question Answering in Disaster Management

**Authors:** Zhitong Chen, Kai Yin, Xiangjue Dong, Chengkai Liu, Xiangpeng Li...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.03670v1)

## Abstract

Accurate question answering (QA) in disaster management requires reasoning over uncertain and conflicting information, a setting poorly captured by existing benchmarks built on clean evidence. We introduce DisastQA, a large-scale benchmark of 3,000 rigorously verified questions (2,000 multiple-choice and 1,000 open-ended) spanning eight disaster types. The benchmark is constructed via a human-LLM collaboration pipeline with stratified sampling to ensure balanced coverage. Models are evaluated under varying evidence conditions, from closed-book to noisy evidence integration, enabling separation of internal knowledge from reasoning under imperfect information. For open-ended QA, we propose a human-verified keypoint-based evaluation protocol emphasizing factual completeness over verbosity. Experiments with 20 models reveal substantial divergences from general-purpose leaderboards such as MMLU-Pro. While recent open-weight models approach proprietary systems in clean settings, performance degrades sharply under realistic noise, exposing critical reliability gaps for disaster response. All code, data, and evaluation resources are available at https://github.com/TamuChen18/DisastQA_open.

## Notes

