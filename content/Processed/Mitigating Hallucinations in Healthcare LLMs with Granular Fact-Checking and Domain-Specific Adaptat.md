---
title: Mitigating Hallucinations in Healthcare LLMs with Granular Fact-Checking and
  Domain-Specific Adaptation
authors:
- Musarrat Zeba
- Abdullah Al Mamun
- Kishoar Jahan Tithee
- Debopom Sutradhar
- Mohaimenul Azam Khan Raiaan
- Saddam Mukta
- Reem E. Mohamed
- Md Rafiqul Islam
- Yakub Sebastian
- Mukhtar Hussain
date: '2025-12-18'
categories:
- cs.CL
pdf_url: https://arxiv.org/pdf/2512.16189v1
arxiv_id: 2512.16189v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
---

# Mitigating Hallucinations in Healthcare LLMs with Granular Fact-Checking and Domain-Specific Adaptation

**Authors:** Musarrat Zeba, Abdullah Al Mamun, Kishoar Jahan Tithee, Debopom Sutradhar, Mohaimenul Azam Khan Raiaan...

**Date:** 2025-12-18 | **Categories:** cs.CL

[PDF](https://arxiv.org/pdf/2512.16189v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.16189v1)

## Abstract

In healthcare, it is essential for any LLM-generated output to be reliable and accurate, particularly in cases involving decision-making and patient safety. However, the outputs are often unreliable in such critical areas due to the risk of hallucinated outputs from the LLMs. To address this issue, we propose a fact-checking module that operates independently of any LLM, along with a domain-specific summarization model designed to minimize hallucination rates. Our model is fine-tuned using Low-Rank Adaptation (LoRa) on the MIMIC III dataset and is paired with the fact-checking module, which uses numerical tests for correctness and logical checks at a granular level through discrete logic in natural language processing (NLP) to validate facts against electronic health records (EHRs). We trained the LLM model on the full MIMIC-III dataset. For evaluation of the fact-checking module, we sampled 104 summaries, extracted them into 3,786 propositions, and used these as facts. The fact-checking module achieves a precision of 0.8904, a recall of 0.8234, and an F1-score of 0.8556. Additionally, the LLM summary model achieves a ROUGE-1 score of 0.5797 and a BERTScore of 0.9120 for summary quality.

## Notes

