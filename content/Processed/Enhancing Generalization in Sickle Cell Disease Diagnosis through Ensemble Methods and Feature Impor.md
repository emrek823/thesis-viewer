---
title: Enhancing Generalization in Sickle Cell Disease Diagnosis through Ensemble
  Methods and Feature Importance Analysis
authors:
- Nataša Petrović
- Gabriel Moyà-Alcover
- Antoni Jaume-i-Capó
- Jose Maria Buades Rubio
date: '2026-01-19'
categories:
- cs.LG
pdf_url: https://arxiv.org/pdf/2601.13021v1
arxiv_id: 2601.13021v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
---

# Enhancing Generalization in Sickle Cell Disease Diagnosis through Ensemble Methods and Feature Importance Analysis

**Authors:** Nataša Petrović, Gabriel Moyà-Alcover, Antoni Jaume-i-Capó, Jose Maria Buades Rubio

**Date:** 2026-01-19 | **Categories:** cs.LG

[PDF](https://arxiv.org/pdf/2601.13021v1) | [AlphaXiv](https://alphaxiv.org/abs/2601.13021v1)

## Abstract

This work presents a novel approach for selecting the optimal ensemble-based classification method and features with a primarly focus on achieving generalization, based on the state-of-the-art, to provide diagnostic support for Sickle Cell Disease using peripheral blood smear images of red blood cells. We pre-processed and segmented the microscopic images to ensure the extraction of high-quality features. To ensure the reliability of our proposed system, we conducted an in-depth analysis of interpretability. Leveraging techniques established in the literature, we extracted features from blood cells and employed ensemble machine learning methods to classify their morphology. Furthermore, we have devised a methodology to identify the most critical features for classification, aimed at reducing complexity and training time and enhancing interpretability in opaque models. Lastly, we validated our results using a new dataset, where our model overperformed state-of-the-art models in terms of generalization. The results of classifier ensembled of Random Forest and Extra Trees classifier achieved an harmonic mean of precision and recall (F1-score) of 90.71\% and a Sickle Cell Disease diagnosis support score (SDS-score) of 93.33\%. These results demonstrate notable enhancement from previous ones with Gradient Boosting classifier (F1-score 87.32\% and SDS-score 89.51\%). To foster scientific progress, we have made available the parameters for each model, the implemented code library, and the confusion matrices with the raw data.

## Notes

