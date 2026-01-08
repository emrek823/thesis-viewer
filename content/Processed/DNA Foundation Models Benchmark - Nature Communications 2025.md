---
title: "Benchmarking DNA foundation models for genomic and genetic tasks"
source: "https://www.nature.com/articles/s41467-025-65823-8"
author:
  - "Nature Communications"
published: 2025-06-01
created: 2025-12-29
description: "Comprehensive benchmark of 5 DNA foundation models (DNABERT-2, Nucleotide Transformer V2, HyenaDNA, Caduceus-Ph, GROVER) across genomic tasks. Specialized models often outperform general-purpose."
tags:
  - "clippings"
---

## The Benchmark

**Models Tested:**
- DNABERT-2
- Nucleotide Transformer V2
- HyenaDNA
- Caduceus-Ph
- GROVER

**Tasks Evaluated:**
- Sequence classification
- Gene expression prediction
- Variant effect quantification
- Topologically associating domain (TAD) region recognition
- Using zero-shot embeddings

## Key Findings

**Pooling Strategy Matters:**
Mean token embedding consistently and significantly improves sequence classification performance over other pooling strategies.

**Model Performance Varies by Task:**
- General-purpose DNA foundation models showed competitive performance in pathogenic variant identification
- BUT less effective in predicting gene expression
- AND less effective in identifying putative causal QTLs compared to specialized models

**The Specialization Gap:**
While DNA foundation models promise generalization, they underperform task-specific models on complex tasks like gene expression prediction.

## Implications

**What This Means:**
1. DNA foundation models are not universally superior
2. Specialized models still win on specialized tasks
3. Zero-shot performance is limited
4. Task-specific fine-tuning or specialized architectures often required

## Relevance to JEPA Thesis

**Supports the differentiation argument:**

The "general-purpose foundation model beats everything" narrative is false for DNA models. This parallels the single-cell foundation model failures (scGPT, Geneformer).

**Key insight for thesis:**
- **Static tasks (classification, variant effect):** General models competitive
- **Dynamic tasks (gene expression, trajectory):** Specialized approaches win

World models may work precisely because they're designed for the DYNAMIC tasks that general LM-style approaches fail at.

**Counter-argument to track:** If even specialized tasks require specialized models, maybe there's no path to general bio AI? Or does world model architecture enable generalization that LM architecture can't?
