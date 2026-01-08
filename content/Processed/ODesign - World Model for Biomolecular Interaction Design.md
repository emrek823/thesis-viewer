---
title: "ODesign: A World Model for Biomolecular Interaction Design"
source: "https://arxiv.org/abs/2510.22304"
author:
  - "Odin Zhang et al."
  - "Lingang Laboratory"
  - "Zhejiang University"
  - "Shanghai AI Lab"
published: 2025-10-25
created: 2025-12-29
description: "First-of-its-kind generative world model for cross-modality molecular design. Unifies proteins, nucleic acids, and small molecules in single architecture with fine-grained control."
tags:
  - "clippings"
---

## Key Technical Contributions

**Problem Solved:**
Biomolecular interactions underpin almost all biological processes, yet most AI models remain specialized for individual molecular types and lack fine-grained control over interaction details.

**What ODesign Does:**
- First generative world model for all-to-all biomolecular interaction design
- Allows scientists to specify epitopes on arbitrary targets and generate diverse binding partners
- Unified framework enabling cross-modality molecular generation (proteins, nucleic acids, small molecules) within single architecture
- Built upon AlphaFold3-like structure prediction backbone

**Technical Architecture:**
- Abstracts minimal chemical units of diverse molecular species into unified token space
- Task-oriented masking mechanism provides fine-grained conditional control at entity-, token-, and atom-levels
- Supports binder design, motif scaffolding, and atomic motif engineering

## Benchmark Performance

**Across 11 benchmark tasks spanning proteins, small molecules, RNA, and DNA:**
- Consistently outperforms modality-specific models
- Achieves 2-4 orders of magnitude higher design throughput
- Superior controllability and performance vs modality-specific baselines across entity-, token-, and atom-level tasks

**New Capabilities Enabled:**
- Protein-binding RNA/DNA design
- RNA/DNA-binding ligand design
- Previously inaccessible cross-modality interaction types

## Relevance to JEPA Thesis

ODesign represents a concrete implementation of "world model" architecture for biology that goes beyond token prediction. The key insight: **world models work because they learn state representations, not next-token distributions.**

This validates the architectural hypothesis but also shows competition: ODesign is open-source (Apache 2.0), has code on GitHub, and is available at https://odesign.lglab.ac.cn for no-code usage.

**Implication:** World model architecture for bio may commoditize quickly given academic open-sourcing.
