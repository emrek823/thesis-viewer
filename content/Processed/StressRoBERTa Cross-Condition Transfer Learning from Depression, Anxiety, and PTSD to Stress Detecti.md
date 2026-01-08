---
title: 'StressRoBERTa: Cross-Condition Transfer Learning from Depression, Anxiety,
  and PTSD to Stress Detection'
authors:
- Amal Alqahtani
- Efsun Kayi
- Mona Diab
date: '2025-12-29'
categories:
- cs.CL
- cs.AI
pdf_url: https://arxiv.org/pdf/2512.23813v1
arxiv_id: 2512.23813v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-AI
---

# StressRoBERTa: Cross-Condition Transfer Learning from Depression, Anxiety, and PTSD to Stress Detection

**Authors:** Amal Alqahtani, Efsun Kayi, Mona Diab

**Date:** 2025-12-29 | **Categories:** cs.CL, cs.AI

[PDF](https://arxiv.org/pdf/2512.23813v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.23813v1)

## Abstract

The prevalence of chronic stress represents a significant public health concern, with social media platforms like Twitter serving as important venues for individuals to share their experiences. This paper introduces StressRoBERTa, a cross-condition transfer learning approach for automatic detection of self-reported chronic stress in English tweets. The investigation examines whether continual training on clinically related conditions (depression, anxiety, PTSD), disorders with high comorbidity with chronic stress, improves stress detection compared to general language models and broad mental health models. RoBERTa is continually trained on the Stress-SMHD corpus (108M words from users with self-reported diagnoses of depression, anxiety, and PTSD) and fine-tuned on the SMM4H 2022 Task 8 dataset. StressRoBERTa achieves 82% F1-score, outperforming the best shared task system (79% F1) by 3 percentage points. The results demonstrate that focused cross-condition transfer from stress-related disorders (+1% F1 over vanilla RoBERTa) provides stronger representations than general mental health training. Evaluation on Dreaddit (81% F1) further demonstrates transfer from clinical mental health contexts to situational stress discussions.

## Notes

