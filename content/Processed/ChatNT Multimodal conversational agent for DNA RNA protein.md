---
title: "ChatNT: A multimodal conversational agent for DNA, RNA and protein tasks"
source: "https://www.nature.com/articles/s42256-025-01047-1"
author:
  - "InstaDeep"
  - "BioNTech"
  - "Nature Machine Intelligence"
published: 2025-06-01
created: 2025-12-29
description: "First conversational agent bridging bio foundation models and natural language. SOTA on Nucleotide Transformer benchmark while generalizing zero-shot to unseen questions."
tags:
  - "clippings"
---

## Key Innovation

**The Gap:**
- High-performance foundation models for bio sequences exist but need fine-tuning for each application
- Conversational agents (ChatGPT-style) can't understand biological sequences

**ChatNT Solution:**
Transfer learning to create multimodal conversational agent for DNA, RNA, and protein that can be instructed in natural language.

## Technical Details

**Training:**
- Instruction-tuned on unified corpus of 27 diverse tasks across DNA, RNA, and proteins
- 605 million DNA tokens (~3.6 billion bases)
- 273 million English tokens
- 2 billion total instruction tokens sampled uniformly over tasks

**Architecture:**
- Takes DNA sequences + English prompt as input
- Returns English answer autoregressively
- DNA placeholder token `<DNA>` for sequence reference
- Attribution methods show answers based on biologically coherent features (TATA motif, splice site dinucleotides)

## Benchmark Performance

**SOTA Results:**
- Achieves new state-of-the-art on Nucleotide Transformer benchmark
- Can solve ALL tasks at once, in English
- Generalizes to unseen questions (zero-shot)

**Key Capability:**
Users with no coding background can interact with biological data through natural language.

## Availability

- Hugging Face: InstaDeepAI/ChatNT
- License: Non-Commercial Purposes only

## Relevance to JEPA Thesis

**This is a DIFFERENT approach than world models:**
- ChatNT is still fundamentally LLM-style (next token prediction)
- Just bridges bio encoders with conversational interface
- Impressive for accessibility, not for trajectory prediction

**Key distinction:**
- ChatNT: "What is this sequence?" (classification, annotation)
- World model: "What will happen to this patient in 6 months?" (prediction)

ChatNT validates that bio+language integration works but doesn't address the core thesis about trajectory prediction superiority.
