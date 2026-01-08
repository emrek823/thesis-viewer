---
title: On Estimating Age and Gender from Parkinson's Disease Diagnostic-Oriented Recordings
  Using Wav2Vec 2.0
authors:
- Klempir, O.
- Tichopad, A.
- Krupicka, R.
date: '2025-12-29'
categories:
- health-informatics
pdf_url: https://www.medrxiv.org/content/10.64898/2025.12.29.25343161v1.full.pdf
paper_id: medrxiv_10.64898_2025.12.29.25343161
source: medrxiv
tags:
- paper
- source/medrxiv
- topic/health-informatics
---

# On Estimating Age and Gender from Parkinson's Disease Diagnostic-Oriented Recordings Using Wav2Vec 2.0

**Authors:** Klempir, O., Tichopad, A., Krupicka, R.

**Date:** 2025-12-29 | **Source:** medrxiv | **Categories:** health-informatics

[PDF](https://www.medrxiv.org/content/10.64898/2025.12.29.25343161v1.full.pdf)

## Abstract

Can self-supervised speech foundation models (SFMs) be used for automatic patient metadata extraction, even when no prior demographic information is available and speech is affected by pathology? SFMs show strong cross-task generalization, yet it remains unclear to what extent demographic attributes such as age and gender are intrinsically encoded, particularly in pathological speech. This study evaluated the capability of a pretrained SFM Wav2Vec 2.0 to estimate age and gender across healthy controls (HC), Parkinsons disease (PD) subjects, and related parkinsonian syndromes (multiple system atrophy, progressive supranuclear palsy), without exposing the model to any data from the evaluated datasets. A frozen, publicly available Wav2Vec 2.0 model was used to extract speech representations from three independent multilingual datasets. No machine learning model was trained or fine-tuned on the target data. The analysis solely assessed information already present in the pretrained embeddings. Multiple speech tasks (read text, diadochokinesis, sustained vowels) and diagnostic groups were evaluated using gender accuracy, correlations with true age, chi-square tests, and group-level analyses. Gender estimation achieved consistently high accuracy (min. 94%, up to 100%) across datasets and tasks. Age estimation showed significant correlations with true age for read speech, including PD speakers. Analyses of vowel data demonstrated preserved gender distributions but systematic age bias across all diagnostic groups. Without task-specific training, pretrained Wav2Vec 2.0 embeddings robustly encode gender and preserve age-related structure in connected, including pathological, speech, whereas age estimation from isolated vowel phonation remains unreliable. These findings highlight the demographic robustness of SFMs and the need to monitor age-related bias in clinical applications.

## Notes

