---
title: 'SpeechMedAssist: Efficiently and Effectively Adapting Speech Language Models
  for Medical Consultation'
authors:
- Sirry Chen
- Jieyi Wang
- Wei Chen
- Zhongyu Wei
date: '2026-01-08'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.04638v1
arxiv_id: 2601.04638v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# SpeechMedAssist: Efficiently and Effectively Adapting Speech Language Models for Medical Consultation

**Authors:** Sirry Chen, Jieyi Wang, Wei Chen, Zhongyu Wei

**Date:** 2026-01-08 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2601.04638v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.04638v1)

## Abstract

Medical consultations are intrinsically speech-centric. However, most prior works focus on long-text-based interactions, which are cumbersome and patient-unfriendly. Recent advances in speech language models (SpeechLMs) have enabled more natural speech-based interaction, yet the scarcity of medical speech data and the inefficiency of directly fine-tuning on speech data jointly hinder the adoption of SpeechLMs in medical consultation. In this paper, we propose SpeechMedAssist, a SpeechLM natively capable of conducting speech-based multi-turn interactions with patients. By exploiting the architectural properties of SpeechLMs, we decouple the conventional one-stage training into a two-stage paradigm consisting of (1) Knowledge & Capability Injection via Text and (2) Modality Re-alignment with Limited Speech Data, thereby reducing the requirement for medical speech data to only 10k synthesized samples. To evaluate SpeechLMs for medical consultation scenarios, we design a benchmark comprising both single-turn question answering and multi-turn simulated interactions. Experimental results show that our model outperforms all baselines in both effectiveness and robustness in most evaluation settings.

## Notes

