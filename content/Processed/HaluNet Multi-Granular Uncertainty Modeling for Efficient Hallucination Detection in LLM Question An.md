---
title: 'HaluNet: Multi-Granular Uncertainty Modeling for Efficient Hallucination Detection
  in LLM Question Answering'
authors:
- Chaodong Tong
- Qi Zhang
- Jiayang Gao
- Lei Jiang
- Yanbing Liu
- Nannan Sun
date: '2025-12-31'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.24562v1
paper_id: 2512.24562v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CL
---

# HaluNet: Multi-Granular Uncertainty Modeling for Efficient Hallucination Detection in LLM Question Answering

**Authors:** Chaodong Tong, Qi Zhang, Jiayang Gao, Lei Jiang, Yanbing Liu...

**Date:** 2025-12-31 | **Source:** arxiv | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2512.24562v1)

## Abstract

Large Language Models (LLMs) excel at question answering (QA) but often generate hallucinations, including factual errors or fabricated content. Detecting hallucinations from internal uncertainty signals is attractive due to its scalability and independence from external resources. Existing methods often aim to accurately capture a single type of uncertainty while overlooking the complementarity among different sources, particularly between token-level probability uncertainty and the uncertainty conveyed by internal semantic representations, which provide complementary views on model reliability. We present \textbf{HaluNet}, a lightweight and trainable neural framework that integrates multi granular token level uncertainties by combining semantic embeddings with probabilistic confidence and distributional uncertainty. Its multi branch architecture adaptively fuses what the model knows with the uncertainty expressed in its outputs, enabling efficient one pass hallucination detection. Experiments on SQuAD, TriviaQA, and Natural Questions show that HaluNet delivers strong detection performance and favorable computational efficiency, with or without access to context, highlighting its potential for real time hallucination detection in LLM based QA systems.

## Notes

