---
title: 'Cross-Continental Transfer of Perioperative Mortality Prediction: Intraoperative
  Features Generalize Where Preoperative Features Fail'
authors:
- Purkayastha, D. S.
date: '2025-12-29'
categories:
- health-informatics
pdf_url: https://www.medrxiv.org/content/10.64898/2025.12.28.25343118v1.full.pdf
paper_id: medrxiv_10.64898_2025.12.28.25343118
source: medrxiv
tags:
- paper
- source/medrxiv
- topic/health-informatics
---

# Cross-Continental Transfer of Perioperative Mortality Prediction: Intraoperative Features Generalize Where Preoperative Features Fail

**Authors:** Purkayastha, D. S.

**Date:** 2025-12-29 | **Source:** medrxiv | **Categories:** health-informatics

[PDF](https://www.medrxiv.org/content/10.64898/2025.12.28.25343118v1.full.pdf)

## Abstract

BackgroundMachine learning models for perioperative mortality prediction show strong internal discrimination, yet external validation--particularly across continents--remains rare. Whether intraoperative vital sign features, which improve internal performance by 5-10%, transfer across populations is unknown. Furthermore, aggregate discrimination metrics may overstate clinical utility through Simpsons paradox if models separate risk strata without discriminating within them.

MethodsWe conducted a bidirectional cross-continental external validation study using publicly available datasets from Korea (INSPIRE, n=127,413 surgeries, 1,387 deaths) and the United States (MOVER, n=57,545 surgeries, 823 deaths). Eight machine learning models (XGBoost and logistic regression with preoperative-only or preoperative-plus-intraoperative features) were trained on each dataset and validated on the other. We assessed dis-crimination (AUC-ROC), calibration, clinical utility (decision curve analysis), and within-stratum performance to detect Simpsons paradox.

ResultsAll models achieved clinically useful external discrimination (AUC >0.70). The best-performing model (XGB-INS-B) achieved external AUC of 0.895, representing a 4.1% improvement over internal performance. Intraoperative models showed higher mean external AUC than preoperative models (0.82 versus 0.79). Models trained on the diverse Korean population showed 2.6-fold less degradation than those trained on the concentrated US high-acuity population (5.4% versus 13.9%). Critically, preoperative models exhibited Simpsons paradox: one model achieved acceptable overall AUC (0.756) while performing at near-random levels within both ASA strata (0.597 and 0.584). Intraoperative models maintained within-stratum discrimination (0.71-0.74). All models required Platt scaling recalibration.

ConclusionsIntraoperative vital sign features provide population-independent prognostic information that transfers across continents, while preoperative models achieve apparent discrimination through risk stratum separation. For global deployment of perioperative prediction models, real-time physiological monitoring should be prioritized, and stratified validation is essential to detect Simpsons paradox.

## Notes

