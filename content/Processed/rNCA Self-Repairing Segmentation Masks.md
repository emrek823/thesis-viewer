---
title: 'rNCA: Self-Repairing Segmentation Masks'
authors:
- Malte Silbernagel
- Albert Alonso
- Jens Petersen
- Bulat Ibragimov
- Marleen de Bruijne
- Madeleine K. Wyburd
date: '2025-12-15'
categories:
- cs.CV
- cs.LG
- eess.IV
pdf_url: https://arxiv.org/pdf/2512.13397v1
arxiv_id: 2512.13397v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
- topic/cs-LG
- topic/eess-IV
---

# rNCA: Self-Repairing Segmentation Masks

**Authors:** Malte Silbernagel, Albert Alonso, Jens Petersen, Bulat Ibragimov, Marleen de Bruijne...

**Date:** 2025-12-15 | **Categories:** cs.CV, cs.LG, eess.IV

[PDF](https://arxiv.org/pdf/2512.13397v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.13397v1)

## Abstract

Accurately predicting topologically correct masks remains a difficult task for general segmentation models, which often produce fragmented or disconnected outputs. Fixing these artifacts typically requires hand-crafted refinement rules or architectures specialized to a particular task. Here, we show that Neural Cellular Automata (NCA) can be directly re-purposed as an effective refinement mechanism, using local, iterative updates guided by image context to repair segmentation masks. By training on imperfect masks and ground truths, the automaton learns the structural properties of the target shape while relying solely on local information. When applied to coarse, globally predicted masks, the learned dynamics progressively reconnect broken regions, prune loose fragments and converge towards stable, topologically consistent results. We show how refinement NCA (rNCA) can be easily applied to repair common topological errors produced by different base segmentation models and tasks: for fragmented retinal vessels, it yields 2-3% gains in Dice/clDice and improves Betti errors, reducing $β_0$ errors by 60% and $β_1$ by 20%; for myocardium, it repairs 61.5% of broken cases in a zero-shot setting while lowering ASSD and HD by 19% and 16%, respectively. This showcases NCA as effective and broadly applicable refiners.

## Notes

