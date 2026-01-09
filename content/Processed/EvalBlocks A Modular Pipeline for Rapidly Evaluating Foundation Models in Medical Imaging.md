---
title: 'EvalBlocks: A Modular Pipeline for Rapidly Evaluating Foundation Models in
  Medical Imaging'
authors:
- Jan Tagscherer
- Sarah de Boer
- Lena Philipp
- Fennie van der Graaf
- Dré Peeters
- Joeran Bosma
- Lars Leijten
- Bogdan Obreja
- Ewoud Smit
- Alessa Hering
date: '2026-01-07'
categories:
- cs.CV
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.03811v1
paper_id: 2601.03811v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-CV
- topic/cs-LG
---

# EvalBlocks: A Modular Pipeline for Rapidly Evaluating Foundation Models in Medical Imaging

**Authors:** Jan Tagscherer, Sarah de Boer, Lena Philipp, Fennie van der Graaf, Dré Peeters...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.CV, cs.LG

[PDF](https://arxiv.org/pdf/2601.03811v1)

## Abstract

Developing foundation models in medical imaging requires continuous monitoring of downstream performance. Researchers are burdened with tracking numerous experiments, design choices, and their effects on performance, often relying on ad-hoc, manual workflows that are inherently slow and error-prone. We introduce EvalBlocks, a modular, plug-and-play framework for efficient evaluation of foundation models during development. Built on Snakemake, EvalBlocks supports seamless integration of new datasets, foundation models, aggregation methods, and evaluation strategies. All experiments and results are tracked centrally and are reproducible with a single command, while efficient caching and parallel execution enable scalable use on shared compute infrastructure. Demonstrated on five state-of-the-art foundation models and three medical imaging classification tasks, EvalBlocks streamlines model evaluation, enabling researchers to iterate faster and focus on model innovation rather than evaluation logistics. The framework is released as open source software at https://github.com/DIAGNijmegen/eval-blocks.

## Notes

