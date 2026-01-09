---
title: 'CPGPrompt: Translating Clinical Guidelines into LLM-Executable Decision Support'
authors:
- Ruiqi Deng
- Geoffrey Martin
- Tony Wang
- Gongbo Zhang
- Yi Liu
- Chunhua Weng
- Yanshan Wang
- Justin F Rousseau
- Yifan Peng
date: '2026-01-07'
categories:
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.03475v1
paper_id: 2601.03475v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-AI
---

# CPGPrompt: Translating Clinical Guidelines into LLM-Executable Decision Support

**Authors:** Ruiqi Deng, Geoffrey Martin, Tony Wang, Gongbo Zhang, Yi Liu...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.AI

[PDF](https://arxiv.org/pdf/2601.03475v1)

## Abstract

Clinical practice guidelines (CPGs) provide evidence-based recommendations for patient care; however, integrating them into Artificial Intelligence (AI) remains challenging. Previous approaches, such as rule-based systems, face significant limitations, including poor interpretability, inconsistent adherence to guidelines, and narrow domain applicability. To address this, we develop and validate CPGPrompt, an auto-prompting system that converts narrative clinical guidelines into large language models (LLMs).   Our framework translates CPGs into structured decision trees and utilizes an LLM to dynamically navigate them for patient case evaluation. Synthetic vignettes were generated across three domains (headache, lower back pain, and prostate cancer) and distributed into four categories to test different decision scenarios. System performance was assessed on both binary specialty-referral decisions and fine-grained pathway-classification tasks.   The binary specialty referral classification achieved consistently strong performance across all domains (F1: 0.85-1.00), with high recall (1.00 $\pm$ 0.00). In contrast, multi-class pathway assignment showed reduced performance, with domain-specific variations: headache (F1: 0.47), lower back pain (F1: 0.72), and prostate cancer (F1: 0.77). Domain-specific performance differences reflected the structure of each guideline. The headache guideline highlighted challenges with negation handling. The lower back pain guideline required temporal reasoning. In contrast, prostate cancer pathways benefited from quantifiable laboratory tests, resulting in more reliable decision-making.

## Notes

