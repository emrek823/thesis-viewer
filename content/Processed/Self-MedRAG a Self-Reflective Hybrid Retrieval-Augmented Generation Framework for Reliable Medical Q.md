---
title: 'Self-MedRAG: a Self-Reflective Hybrid Retrieval-Augmented Generation Framework
  for Reliable Medical Question Answering'
authors:
- Jessica Ryan
- Alexander I. Gumilang
- Robert Wiliam
- Derwin Suhartono
date: '2026-01-08'
categories:
- cs.IR
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.04531v1
arxiv_id: 2601.04531v1
tags:
- paper
- alphaxiv/hot
- topic/cs-IR
- topic/cs-AI
---

# Self-MedRAG: a Self-Reflective Hybrid Retrieval-Augmented Generation Framework for Reliable Medical Question Answering

**Authors:** Jessica Ryan, Alexander I. Gumilang, Robert Wiliam, Derwin Suhartono

**Date:** 2026-01-08 | **Categories:** cs.IR, cs.AI

[PDF](https://arxiv.org/pdf/2601.04531v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.04531v1)

## Abstract

Large Language Models (LLMs) have demonstrated significant potential in medical Question Answering (QA), yet they remain prone to hallucinations and ungrounded reasoning, limiting their reliability in high-stakes clinical scenarios. While Retrieval-Augmented Generation (RAG) mitigates these issues by incorporating external knowledge, conventional single-shot retrieval often fails to resolve complex biomedical queries requiring multi-step inference. To address this, we propose Self-MedRAG, a self-reflective hybrid framework designed to mimic the iterative hypothesis-verification process of clinical reasoning. Self-MedRAG integrates a hybrid retrieval strategy, combining sparse (BM25) and dense (Contriever) retrievers via Reciprocal Rank Fusion (RRF) to maximize evidence coverage. It employs a generator to produce answers with supporting rationales, which are then assessed by a lightweight self-reflection module using Natural Language Inference (NLI) or LLM-based verification. If the rationale lacks sufficient evidentiary support, the system autonomously reformulates the query and iterates to refine the context. We evaluated Self-MedRAG on the MedQA and PubMedQA benchmarks. The results demonstrate that our hybrid retrieval approach significantly outperforms single-retriever baselines. Furthermore, the inclusion of the self-reflective loop yielded substantial gains, increasing accuracy on MedQA from 80.00% to 83.33% and on PubMedQA from 69.10% to 79.82%. These findings confirm that integrating hybrid retrieval with iterative, evidence-based self-reflection effectively reduces unsupported claims and enhances the clinical reliability of LLM-based systems.

## Notes

