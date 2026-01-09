---
title: Scalable Machine Learning Force Fields for Macromolecular Systems Through Long-Range
  Aware Message Passing
authors:
- Chu Wang
- Lin Huang
- Xinran Wei
- Tao Qin
- Arthur Jiang
- Lixue Cheng
- Jia Zhang
date: '2026-01-07'
categories:
- physics.chem-ph
- cs.AI
- physics.bio-ph
pdf_url: https://arxiv.org/pdf/2601.03774v1
paper_id: 2601.03774v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/physics-chem-ph
- topic/cs-AI
- topic/physics-bio-ph
---

# Scalable Machine Learning Force Fields for Macromolecular Systems Through Long-Range Aware Message Passing

**Authors:** Chu Wang, Lin Huang, Xinran Wei, Tao Qin, Arthur Jiang...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** physics.chem-ph, cs.AI, physics.bio-ph

[PDF](https://arxiv.org/pdf/2601.03774v1)

## Abstract

Machine learning force fields (MLFFs) have revolutionized molecular simulations by providing quantum mechanical accuracy at the speed of molecular mechanical computations. However, a fundamental reliance of these models on fixed-cutoff architectures limits their applicability to macromolecular systems where long-range interactions dominate. We demonstrate that this locality constraint causes force prediction errors to scale monotonically with system size, revealing a critical architectural bottleneck. To overcome this, we establish the systematically designed MolLR25 ({Mol}ecules with {L}ong-{R}ange effect) benchmark up to 1200 atoms, generated using high-fidelity DFT, and introduce E2Former-LSR, an equivariant transformer that explicitly integrates long-range attention blocks. E2Former-LSR exhibits stable error scaling, achieves superior fidelity in capturing non-covalent decay, and maintains precision on complex protein conformations. Crucially, its efficient design provides up to 30% speedup compared to purely local models. This work validates the necessity of non-local architectures for generalizable MLFFs, enabling high-fidelity molecular dynamics for large-scale chemical and biological systems.

## Notes

