---
title: Determinants of Training Corpus Size for Clinical Text Classification
authors:
- Jaya Chaturvedi
- Saniya Deshpande
- Chenkai Ma
- Robert Cobb
- Angus Roberts
- Robert Stewart
- Daniel Stahl
- Diana Shamsutdinova
date: '2026-01-22'
categories:
- cs.CL
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.15846v1
arxiv_id: 2601.15846v1
tags:
- paper
- alphaxiv/hot
- topic/cs-CL
- topic/cs-LG
---

# Determinants of Training Corpus Size for Clinical Text Classification

**Authors:** Jaya Chaturvedi, Saniya Deshpande, Chenkai Ma, Robert Cobb, Angus Roberts...

**Date:** 2026-01-22 | **Categories:** cs.CL, cs.LG

[PDF](https://arxiv.org/pdf/2601.15846v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.15846v1)

## Abstract

Introduction: Clinical text classification using natural language processing (NLP) models requires adequate training data to achieve optimal performance. For that, 200-500 documents are typically annotated. The number is constrained by time and costs and lacks justification of the sample size requirements and their relationship to text vocabulary properties.   Methods: Using the publicly available MIMIC-III dataset containing hospital discharge notes with ICD-9 diagnoses as labels, we employed pre-trained BERT embeddings followed by Random Forest classifiers to identify 10 randomly selected diagnoses, varying training corpus sizes from 100 to 10,000 documents, and analyzed vocabulary properties by identifying strong and noisy predictive words through Lasso logistic regression on bag-of-words embeddings.   Results: Learning curves varied significantly across the 10 classification tasks despite identical preprocessing and algorithms, with 600 documents sufficient to achieve 95% of the performance attainable with 10,000 documents for all tasks. Vocabulary analysis revealed that more strong predictors and fewer noisy predictors were associated with steeper learning curves, where every 100 additional noisy words decreased accuracy by approximately 0.02 while 100 additional strong predictors increased maximum accuracy by approximately 0.04.

## Notes

