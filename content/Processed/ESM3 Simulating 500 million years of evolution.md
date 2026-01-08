---
title: "ESM3: Simulating 500 million years of evolution with a language model"
source: "https://www.science.org/doi/10.1126/science.ads0018"
author:
  - "EvolutionaryScale"
published: 2025-02-21
created: 2025-12-29
description: "Frontier generative model for biology. 98B parameters, trained on 2.78B proteins. Generated novel fluorescent protein at 58% identity from known sequences."
tags:
  - "clippings"
---

## Technical Architecture

**Model Design:**
- Frontier multimodal generative model jointly reasoning across sequence, structure, and function
- Bidirectional transformers enabling comprehensive information exchange
- Geometric Attention layer stacked with sequence attention for contextual embeddings
- Three data modalities represented as tracks of discrete tokens

**Scale:**
- 98 billion parameters (largest model)
- Trained with 1.07 × 10^24 FLOPs
- 2.78 billion proteins, 771 billion unique tokens
- ESM3-open: 1.4B parameters (smallest/fastest, openly available)

**Key Innovation:**
Structural reasoning via discrete tokens rather than diffusion in 3D space - simpler than recent models while achieving comparable results.

## Benchmark Performance

- Generated bright fluorescent protein at 58% sequence identity from known fluorescent proteins
- Authors estimate this represents "500 million years of evolution"
- Improvements in representation across sequence, structure, and function
- Highly responsive to alignment for improved fidelity

**Publication:** Science, Volume 387, Issue 6736, pp. 850-858 (February 2025)

## Licensing Concerns

**Critical limitation:**
- ESM3 governed by "Community License" more restrictive than AlphaFold 3
- Explicitly prohibits ALL commercial use
- Prohibits "use in drug development or discovery"
- Despite being from Meta/EvolutionaryScale, effectively unusable for drug companies

## Relevance to JEPA Thesis

**Mixed signals:**
1. ESM3 represents SOTA for protein language models
2. BUT it's still token prediction architecture (masked language model)
3. Restrictive licensing limits real-world application
4. Open-source alternatives (Boltz, Chai) may be more practically useful

**Key question:** Does ESM3's success mean protein language models work, or does it mean scale matters more than architecture? The fluorescent protein result is impressive but cherry-picked - broader benchmarks needed.

The thesis should acknowledge ESM3's capabilities while noting it's complementary to (not competitive with) world models for clinical trajectory prediction.
