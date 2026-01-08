---
title: 'TICON: A Slide-Level Tile Contextualizer for Histopathology Representation
  Learning'
authors:
- Varun Belagali
- Saarthak Kapse
- Pierre Marza
- Srijan Das
- Zilinghan Li
- Sofiène Boutaj
- Pushpak Pati
- Srikar Yellapragada
- Tarak Nath Nandi
- Ravi K Madduri
date: '2025-12-24'
categories:
- cs.CV
pdf_url: https://arxiv.org/pdf/2512.21331v1
arxiv_id: 2512.21331v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CV
---

# TICON: A Slide-Level Tile Contextualizer for Histopathology Representation Learning

**Authors:** Varun Belagali, Saarthak Kapse, Pierre Marza, Srijan Das, Zilinghan Li...

**Date:** 2025-12-24 | **Categories:** cs.CV

[PDF](https://arxiv.org/pdf/2512.21331v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.21331v1)

## Abstract

The interpretation of small tiles in large whole slide images (WSI) often needs a larger image context. We introduce TICON, a transformer-based tile representation contextualizer that produces rich, contextualized embeddings for ''any'' application in computational pathology. Standard tile encoder-based pipelines, which extract embeddings of tiles stripped from their context, fail to model the rich slide-level information essential for both local and global tasks. Furthermore, different tile-encoders excel at different downstream tasks. Therefore, a unified model is needed to contextualize embeddings derived from ''any'' tile-level foundation model. TICON addresses this need with a single, shared encoder, pretrained using a masked modeling objective to simultaneously unify and contextualize representations from diverse tile-level pathology foundation models. Our experiments demonstrate that TICON-contextualized embeddings significantly improve performance across many different tasks, establishing new state-of-the-art results on tile-level benchmarks (i.e., HEST-Bench, THUNDER, CATCH) and slide-level benchmarks (i.e., Patho-Bench). Finally, we pretrain an aggregator on TICON to form a slide-level foundation model, using only 11K WSIs, outperforming SoTA slide-level foundation models pretrained with up to 350K WSIs.

## Notes

