---
title: 'Bridging the Reality Gap: Efficient Adaptation of ASR systems for Challenging
  Low-Resource Domains'
authors:
- Darshil Chauhan
- Adityasinh Solanki
- Vansh Patel
- Kanav Kapoor
- Ritvik Jain
- Aditya Bansal
- Dhruv Kumar
- Prateek Narang
date: '2025-12-18'
source: arxiv
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.16401v1
arxiv_id: 2512.16401v1
tags:
- paper
- source/arxiv
- alphaxiv/hot
- topic/cs-CL
---

# Bridging the Reality Gap: Efficient Adaptation of ASR systems for Challenging Low-Resource Domains

**Authors:** Darshil Chauhan, Adityasinh Solanki, Vansh Patel, Kanav Kapoor, Ritvik Jain (+3 more)

**Date:** 2025-12-18

**Source:** arxiv | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2512.16401v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.16401v1)

## Abstract

Automatic Speech Recognition (ASR) holds immense potential to streamline clinical documentation, such as digitizing handwritten prescriptions and reports, thereby increasing patient throughput and reducing costs in resource-constrained sectors like rural healthcare. However, realizing this utility is currently obstructed by significant technical barriers: strict data privacy constraints, limited computational resources, and severe acoustic domain shifts. We quantify this gap by showing that a robust multilingual model (IndicWav2Vec) degrades to a stark 40.94% Word Error Rate (WER) when deployed on real-world clinical audio (Gram Vaani), rendering it unusable for practical applications. To address these challenges and bring ASR closer to deployment, we propose an efficient, privacy-preserving adaptation framework. We employ Low-Rank Adaptation (LoRA) to enable continual learning from incoming data streams directly on edge devices, ensuring patient data confidentiality. Our strategy yields a 17.1% relative improvement in WER on the target domain. Furthermore, by integrating multi-domain experience replay, we reduce catastrophic forgetting by 47% compared to naive adaptation. These results demonstrate a viable pathway for building reliable, self-improving ASR systems that can operate effectively within the constraints of high-impact real-world environments.

## Notes

<!-- Add your notes here -->
