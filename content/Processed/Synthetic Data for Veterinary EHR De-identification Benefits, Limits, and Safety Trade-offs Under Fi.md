---
title: 'Synthetic Data for Veterinary EHR De-identification: Benefits, Limits, and
  Safety Trade-offs Under Fixed Compute'
authors:
- David Brundage
date: '2026-01-13'
categories:
- cs.CR
- cs.AI
- cs.CL
pdf_url: https://arxiv.org/pdf/2601.09756v1
arxiv_id: 2601.09756v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CR
- topic/cs-AI
- topic/cs-CL
---

# Synthetic Data for Veterinary EHR De-identification: Benefits, Limits, and Safety Trade-offs Under Fixed Compute

**Authors:** David Brundage

**Date:** 2026-01-13 | **Categories:** cs.CR, cs.AI, cs.CL

[PDF](https://arxiv.org/pdf/2601.09756v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.09756v1)

## Abstract

Veterinary electronic health records (vEHRs) contain privacy-sensitive identifiers that limit secondary use. While PetEVAL provides a benchmark for veterinary de-identification, the domain remains low-resource. This study evaluates whether large language model (LLM)-generated synthetic narratives improve de-identification safety under distinct training regimes, emphasizing (i) synthetic augmentation and (ii) fixed-budget substitution. We conducted a controlled simulation using a PetEVAL-derived corpus (3,750 holdout/1,249 train). We generated 10,382 synthetic notes using a privacy-preserving "template-only" regime where identifiers were removed prior to LLM prompting. Three transformer backbones (PetBERT, VetBERT, Bio_ClinicalBERT) were trained under varying mixtures. Evaluation prioritized document-level leakage rate (the fraction of documents with at least one missed identifier) as the primary safety outcome. Results show that under fixed-sample substitution, replacing real notes with synthetic ones monotonically increased leakage, indicating synthetic data cannot safely replace real supervision. Under compute-matched training, moderate synthetic mixing matched real-only performance, but high synthetic dominance degraded utility. Conversely, epoch-scaled augmentation improved performance: PetBERT span-overlap F1 increased from 0.831 to 0.850 +/- 0.014, and leakage decreased from 6.32% to 4.02% +/- 0.19%. However, these gains largely reflect increased training exposure rather than intrinsic synthetic data quality. Corpus diagnostics revealed systematic synthetic-real mismatches in note length and label distribution that align with persistent leakage. We conclude that synthetic augmentation is effective for expanding exposure but is complementary, not substitutive, for safety-critical veterinary de-identification.

## Notes

