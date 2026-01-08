---
title: "PerturBench: Foundation Models Fail at Perturbation Prediction"
source: "https://arxiv.org/abs/2408.10609"
author:
  - "Altos Labs"
  - "Nature Methods"
  - "BMC Genomics"
published: 2025-08-01
created: 2025-12-29
description: "Multiple 2025 benchmarks show foundation models (scGPT, scFoundation) fail to beat simple baselines on perturbation prediction. Mean prediction outperforms deep learning."
tags:
  - "clippings"
---

## PerturBench Framework

**Purpose:**
Comprehensive framework for modeling single-cell transcriptomic responses to perturbations. Standardizes benchmarking in rapidly evolving field.

**Components:**
1. Datasets and dataloaders
2. Model development framework
3. Evaluation API with metrics

**Key Finding:**
Simple models can outperform more complex approaches. Mode/posterior collapse is common failure mode.

## Nature Methods Benchmark (August 2025)

**Shocking Result:**
"None of the deep learning models was able to consistently outperform the mean prediction or the linear model."

**Evaluation:**
27 methods tested across 29 datasets using 6 complementary performance metrics. Foundation models systematically assessed for generalizability.

**Verdict:**
Foundation models don't beat baselines on perturbation prediction.

## BMC Genomics Benchmark (2025)

**scGPT vs scFoundation vs Baselines:**
- "Even the simplest baseline model—taking the mean of training examples—outperformed scGPT and scFoundation"
- Basic ML models with biologically meaningful features outperformed scGPT by large margin

**Why Benchmarks Mislead:**
Current Perturb-Seq benchmark datasets exhibit low perturbation-specific variance, making them suboptimal for evaluation. Results highlight limitations in benchmarking approaches themselves.

## Key Methodological Issues

1. **Rank metrics needed:** Ordering of perturbations matters alongside RMSE
2. **Mode collapse:** Models learn to predict average, not perturbation-specific responses
3. **Low variance datasets:** Current benchmarks don't test what matters

## Relevance to JEPA Thesis

**This is devastating for LLM-style bio foundation models:**

1. **Token prediction fails for perturbation** - predicting "what happens if we change X" requires causal reasoning, not pattern matching
2. **Mean prediction wins** - models learn dataset statistics, not biology
3. **Validates world model approach** - perturbation prediction is fundamentally action-conditioned state prediction

**Direct support for thesis:**
Perturbation = intervention. "What happens if we give drug X?" is exactly the question LLMs fail at and world models (theoretically) should excel at.

**Key quote for thesis:** "Foundation models don't beat baselines" on the exact task that matters for drug discovery.
