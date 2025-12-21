---
title: 'EXAONE Path 2.5: Pathology Foundation Model with Multi-Omics Alignment'
authors:
- Juseung Yun
- Sunwoo Yu
- Sumin Ha
- Jonghyun Kim
- Janghyeon Lee
- Jongseong Jang
- Soonyoung Lee
date: '2025-12-16'
source: arxiv
categories:
- cs.LG
- q-bio.QM
pdf_url: https://arxiv.org/pdf/2512.14019v1
arxiv_id: 2512.14019v1
tags:
- paper
- source/arxiv
- alphaxiv/hot
- topic/cs-LG
- topic/q-bio-QM
---

# EXAONE Path 2.5: Pathology Foundation Model with Multi-Omics Alignment

**Authors:** Juseung Yun, Sunwoo Yu, Sumin Ha, Jonghyun Kim, Janghyeon Lee (+2 more)

**Date:** 2025-12-16

**Source:** arxiv | **Categories:** cs.LG, q-bio.QM

[PDF](https://arxiv.org/pdf/2512.14019v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.14019v1)

## Abstract

Cancer progression arises from interactions across multiple biological layers, especially beyond morphological and across molecular layers that remain invisible to image-only models. To capture this broader biological landscape, we present EXAONE Path 2.5, a pathology foundation model that jointly models histologic, genomic, epigenetic and transcriptomic modalities, producing an integrated patient representation that reflects tumor biology more comprehensively. Our approach incorporates three key components: (1) multimodal SigLIP loss enabling all-pairwise contrastive learning across heterogeneous modalities, (2) a fragment-aware rotary positional encoding (F-RoPE) module that preserves spatial structure and tissue-fragment topology in WSI, and (3) domain-specialized internal foundation models for both WSI and RNA-seq to provide biologically grounded embeddings for robust multimodal alignment. We evaluate EXAONE Path 2.5 against six leading pathology foundation models across two complementary benchmarks: an internal real-world clinical dataset and the Patho-Bench benchmark covering 80 tasks. Our framework demonstrates high data and parameter efficiency, achieving on-par performance with state-of-the-art foundation models on Patho-Bench while exhibiting the highest adaptability in the internal clinical setting. These results highlight the value of biologically informed multimodal design and underscore the potential of integrated genotype-to-phenotype modeling for next-generation precision oncology.

## Notes

<!-- Add your notes here -->
