---
title: 'Model-First Reasoning LLM Agents: Reducing Hallucinations through Explicit
  Problem Modeling'
authors:
- Annu Rana
- Gaurav Kumar
date: '2025-12-16'
categories:
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.14474v1
arxiv_id: 2512.14474v1
tags:
- paper
- alphaxiv/hot
- topic/cs-AI
---

# Model-First Reasoning LLM Agents: Reducing Hallucinations through Explicit Problem Modeling

**Authors:** Annu Rana, Gaurav Kumar

**Date:** 2025-12-16 | **Categories:** cs.AI

[PDF](https://arxiv.org/pdf/2512.14474v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.14474v1)

## Abstract

Large Language Models (LLMs) often struggle with complex multi-step planning tasks, showing high rates of constraint violations and inconsistent solutions. Existing strategies such as Chain-of-Thought and ReAct rely on implicit state tracking and lack an explicit problem representation. Inspired by classical AI planning, we propose Model-First Reasoning (MFR), a two-phase paradigm in which the LLM first constructs an explicit model of the problem, defining entities, state variables, actions, and constraints, before generating a solution plan. Across multiple planning domains, including medical scheduling, route planning, resource allocation, logic puzzles, and procedural synthesis, MFR reduces constraint violations and improves solution quality compared to Chain-of-Thought and ReAct. Ablation studies show that the explicit modeling phase is critical for these gains. Our results suggest that many LLM planning failures stem from representational deficiencies rather than reasoning limitations, highlighting explicit modeling as a key component for robust and interpretable AI agents. All prompts, evaluation procedures, and task datasets are documented to facilitate reproducibility.

## Notes

