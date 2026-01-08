---
title: "LucaOne: Generalized biological foundation model with unified nucleic acid and protein language"
source: "https://www.nature.com/articles/s42256-025-01044-4"
author:
  - "Nature Machine Intelligence"
published: 2025-06-18
created: 2025-12-29
description: "First unified foundation model trained on DNA, RNA, and protein from 169,861 species. Demonstrates understanding of central dogma through few-shot learning."
tags:
  - "clippings"
---

## Key Innovation

**The Problem:**
Previous models focused on single modalities (DNA OR protein). Biology requires understanding relationships between modalities.

**LucaOne Approach:**
- Pre-trained foundation model on nucleic acid AND protein sequences
- Data from 169,861 species
- 1.8 terabyte pre-training dataset (deposited in CNGB Sequence Archive)
- Semi-supervised learning integrating large-scale data

## Key Results

**Central Dogma Understanding:**
Through few-shot learning, LucaOne demonstrates comprehension of DNA-protein translation - the fundamental relationship between genetic code and proteins.

**Competitive Performance:**
Performs competitively on tasks involving DNA, RNA, OR protein inputs despite being a single unified model (vs. modality-specific specialists).

**Follow-on Models:**
- LucaVirus: Predicting evolutionary and functional landscapes of viruses
- LucaPCycle: Microbial phosphorus cycling in deep-sea sediments (Nature Communications 2025)

## Availability

- Code and models on GitHub: https://github.com/LucaOne/LucaOne
- Hugging Face: https://huggingface.co/LucaGroup
- Pre-training data: CNGB Sequence Archive (CNP0007266)

## Relevance to JEPA Thesis

**Why this matters for world models:**
1. **Cross-modality understanding is key** - LucaOne shows unified models can capture biological relationships that single-modality models miss
2. **Central dogma = causality** - Understanding DNA→protein is a form of state transition prediction
3. **Validates multimodal approach** - Supports M-Optimus/ODesign direction

**Limitation:** Still fundamentally a language model architecture. Doesn't do trajectory prediction per se, but shows multimodal integration works for biology.

**Implication for thesis:** The differentiation isn't just multimodal vs single-modality. It's trajectory prediction (world model) vs static representation (language model). LucaOne is multimodal but still LM architecture.
