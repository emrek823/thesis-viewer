---
title: 'T5Gemma 2: Seeing, Reading, and Understanding Longer'
authors:
- Biao Zhang
- Paul Suganthan
- Gaël Liu
- Ilya Philippov
- Sahil Dua
- Ben Hora
- Kat Black
- Gus Martins
- Omar Sanseviero
- Shreya Pathak
- Cassidy Hardin
- Francesco Visin
- Jiageng Zhang
- Kathleen Kenealy
- Qin Yin
- Olivier Lacombe
- Armand Joulin
- Tris Warkentin
- Adam Roberts
date: '2025-12-16'
source: arxiv
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.14856v1
tags:
- paper
- source/arxiv
- alphaxiv/trending
- topic/cs-CL
arxiv_id: 2512.14856v1
---

# T5Gemma 2: Seeing, Reading, and Understanding Longer

**Authors:** Biao Zhang, Paul Suganthan, Gaël Liu, Ilya Philippov, Sahil Dua (+14 more)

**Date:** 2025-12-16

**Source:** arxiv | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2512.14856v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.14856v1)

## Abstract

We introduce T5Gemma 2, the next generation of the T5Gemma family of lightweight open encoder-decoder models, featuring strong multilingual, multimodal and long-context capabilities. T5Gemma 2 follows the adaptation recipe (via UL2) in T5Gemma -- adapting a pretrained decoder-only model into an encoder-decoder model, and extends it from text-only regime to multimodal based on the Gemma 3 models. We further propose two methods to improve the efficiency: tied word embedding that shares all embeddings across encoder and decoder, and merged attention that unifies decoder self- and cross-attention into a single joint module. Experiments demonstrate the generality of the adaptation strategy over architectures and modalities as well as the unique strength of the encoder-decoder architecture on long context modeling. Similar to T5Gemma, T5Gemma 2 yields comparable or better pretraining performance and significantly improved post-training performance than its Gemma 3 counterpart. We release the pretrained models (270M-270M, 1B-1B and 4B-4B) to the community for future research.

## Notes

<!-- Add your notes here -->
