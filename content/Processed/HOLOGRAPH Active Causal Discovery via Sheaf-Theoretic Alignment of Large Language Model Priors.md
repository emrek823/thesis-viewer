---
title: 'HOLOGRAPH: Active Causal Discovery via Sheaf-Theoretic Alignment of Large
  Language Model Priors'
authors:
- Hyunjun Kim
date: '2025-12-30'
categories:
- cs.LG
- cs.AI
- stat.ME
pdf_url: https://arxiv.org/pdf/2512.24478v1
paper_id: 2512.24478v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
- topic/stat-ME
---

# HOLOGRAPH: Active Causal Discovery via Sheaf-Theoretic Alignment of Large Language Model Priors

**Authors:** Hyunjun Kim

**Date:** 2025-12-30 | **Source:** arxiv | **Categories:** cs.LG, cs.AI, stat.ME

[PDF](https://arxiv.org/pdf/2512.24478v1)

## Abstract

Causal discovery from observational data remains fundamentally limited by identifiability constraints. Recent work has explored leveraging Large Language Models (LLMs) as sources of prior causal knowledge, but existing approaches rely on heuristic integration that lacks theoretical grounding. We introduce HOLOGRAPH, a framework that formalizes LLM-guided causal discovery through sheaf theory--representing local causal beliefs as sections of a presheaf over variable subsets. Our key insight is that coherent global causal structure corresponds to the existence of a global section, while topological obstructions manifest as non-vanishing sheaf cohomology. We propose the Algebraic Latent Projection to handle hidden confounders and Natural Gradient Descent on the belief manifold for principled optimization. Experiments on synthetic and real-world benchmarks demonstrate that HOLOGRAPH provides rigorous mathematical foundations while achieving competitive performance on causal discovery tasks with 50-100 variables. Our sheaf-theoretic analysis reveals that while Identity, Transitivity, and Gluing axioms are satisfied to numerical precision (<10^{-6}), the Locality axiom fails for larger graphs, suggesting fundamental non-local coupling in latent variable projections. Code is available at [https://github.com/hyunjun1121/holograph](https://github.com/hyunjun1121/holograph).

## Notes

