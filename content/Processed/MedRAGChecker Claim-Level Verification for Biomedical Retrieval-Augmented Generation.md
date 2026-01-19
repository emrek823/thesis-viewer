---
title: 'MedRAGChecker: Claim-Level Verification for Biomedical Retrieval-Augmented
  Generation'
authors:
- Yuelyu Ji
- Min Gu Kwak
- Hang Zhang
- Xizhi Wu
- Chenyu Li
- Yanshan Wang
date: '2026-01-10'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.06519v1
arxiv_id: 2601.06519v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# MedRAGChecker: Claim-Level Verification for Biomedical Retrieval-Augmented Generation

**Authors:** Yuelyu Ji, Min Gu Kwak, Hang Zhang, Xizhi Wu, Chenyu Li...

**Date:** 2026-01-10 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.06519v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.06519v1)

## Abstract

Biomedical retrieval-augmented generation (RAG) can ground LLM answers in medical literature, yet long-form outputs often contain isolated unsupported or contradictory claims with safety implications.   We introduce MedRAGChecker, a claim-level verification and diagnostic framework for biomedical RAG.   Given a question, retrieved evidence, and a generated answer, MedRAGChecker decomposes the answer into atomic claims and estimates claim support by combining evidence-grounded natural language inference (NLI) with biomedical knowledge-graph (KG) consistency signals.   Aggregating claim decisions yields answer-level diagnostics that help disentangle retrieval and generation failures, including faithfulness, under-evidence, contradiction, and safety-critical error rates.   To enable scalable evaluation, we distill the pipeline into compact biomedical models and use an ensemble verifier with class-specific reliability weighting.   Experiments on four biomedical QA benchmarks show that MedRAGChecker reliably flags unsupported and contradicted claims and reveals distinct risk profiles across generators, particularly on safety-critical biomedical relations.

## Notes

