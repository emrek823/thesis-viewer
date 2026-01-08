---
title: "Zero-shot evaluation reveals limitations of single-cell foundation models"
source: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03574-x"
author:
  - "Microsoft Research"
  - "Genome Biology"
published: 2025-04-19
created: 2025-12-29
description: "First systematic zero-shot evaluation of scGPT and Geneformer. Both perform worse than simple baselines like HVG + Harmony/scVI. Major implications for single-cell AI hype."
tags:
  - "clippings"
---

## Key Findings

**The Benchmark:**
First rigorous zero-shot evaluation of two leading single-cell foundation models (Geneformer and scGPT) - testing them without fine-tuning.

**Shocking Results:**
- Both models perform **worse** than selecting highly variable genes (HVG) and using established methods like Harmony and scVI
- HVG outperforms Geneformer and scGPT across **all** metrics
- For batch integration, both models lag behind scVI and Harmony
- Geneformer consistently ranks lowest on integration metrics
- In some cases, they perform **worse than untrained models initialized to random weights**

**Specific Failures:**
- **Pretraining objective:** scGPT often regresses to mean expression values
- **Geneformer gene ranking:** Median Pearson R of only 0.56
- **Rare cell types:** Geneformer struggles badly; scGPT performs better but still limited

**Why This Happens:**
Two hypotheses proposed:
1. Masked language model pretraining framework may not produce useful cell embeddings
2. Models may have failed to learn the pretraining task itself

**Recommendations:**
- Caution against unprincipled adoption of current single-cell foundation models
- Practitioners should continue using standard bioinformatic methods
- Current MLM-based objectives may be ill-suited for learning biologically meaningful cell embeddings

## Relevance to JEPA Thesis

**This is critical evidence for the thesis:**
1. **Foundation models in bio are overhyped** - simple baselines beat them
2. **Token prediction architecture fails for bio** - MLM objectives don't capture biology
3. **This validates JEPA/world model alternative** - need architectures that learn state representations, not token distributions

The failure here isn't scale - it's architecture. This paper supports the claim that "language is a sufficient proxy for disease biology" is fundamentally flawed.

**Counter-thesis consideration:** If single-cell foundation models fail, does that mean ALL bio foundation models will fail? Or is the modality-specific failure (transcriptomics) while other modalities (imaging, clinical) may work?
