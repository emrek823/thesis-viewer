---
title: Domain-Specific Knowledge Graphs in RAG-Enhanced Healthcare LLMs
authors:
- Sydney Anuyah
- Mehedi Mahmud Kaushik
- Hao Dai
- Rakesh Shiradkar
- Arjan Durresi
- Sunandan Chakraborty
date: '2026-01-21'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.15429v1
arxiv_id: 2601.15429v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Domain-Specific Knowledge Graphs in RAG-Enhanced Healthcare LLMs

**Authors:** Sydney Anuyah, Mehedi Mahmud Kaushik, Hao Dai, Rakesh Shiradkar, Arjan Durresi...

**Date:** 2026-01-21 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2601.15429v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15429v1)

## Abstract

Large Language Models (LLMs) generate fluent answers but can struggle with trustworthy, domain-specific reasoning. We evaluate whether domain knowledge graphs (KGs) improve Retrieval-Augmented Generation (RAG) for healthcare by constructing three PubMed-derived graphs: $\mathbb{G}_1$ (T2DM), $\mathbb{G}_2$ (Alzheimer's disease), and $\mathbb{G}_3$ (AD+T2DM). We design two probes: Probe 1 targets merged AD T2DM knowledge, while Probe 2 targets the intersection of $\mathbb{G}_1$ and $\mathbb{G}_2$. Seven instruction-tuned LLMs are tested across retrieval sources {No-RAG, $\mathbb{G}_1$, $\mathbb{G}_2$, $\mathbb{G}_1$ + $\mathbb{G}_2$, $\mathbb{G}_3$, $\mathbb{G}_1$+$\mathbb{G}_2$ + $\mathbb{G}_3$} and three decoding temperatures. Results show that scope alignment between probe and KG is decisive: precise, scope-matched retrieval (notably $\mathbb{G}_2$) yields the most consistent gains, whereas indiscriminate graph unions often introduce distractors that reduce accuracy. Larger models frequently match or exceed KG-RAG with a No-RAG baseline on Probe 1, indicating strong parametric priors, whereas smaller/mid-sized models benefit more from well-scoped retrieval. Temperature plays a secondary role; higher values rarely help. We conclude that precision-first, scope-matched KG-RAG is preferable to breadth-first unions, and we outline practical guidelines for graph selection, model sizing, and retrieval/reranking. Code and Data available here - https://github.com/sydneyanuyah/RAGComparison

## Notes

