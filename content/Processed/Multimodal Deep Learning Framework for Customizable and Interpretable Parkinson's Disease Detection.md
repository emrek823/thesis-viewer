---
title: Multimodal Deep Learning Framework for Customizable and Interpretable Parkinson's
  Disease Detection
authors:
- Kothari, M. V.
- Arumuganainar, G.
- Konar, K. S.
date: '2026-01-05'
categories:
- health-systems-and-quality-improvement
pdf_url: https://www.medrxiv.org/content/10.64898/2026.01.01.25343252v1.full.pdf
paper_id: medrxiv_10.64898_2026.01.01.25343252
source: medrxiv
tags:
- paper
- source/medrxiv
- topic/health-systems-and-quality-improvement
---

# Multimodal Deep Learning Framework for Customizable and Interpretable Parkinson's Disease Detection

**Authors:** Kothari, M. V., Arumuganainar, G., Konar, K. S.

**Date:** 2026-01-05 | **Source:** medrxiv | **Categories:** health-systems-and-quality-improvement

[PDF](https://www.medrxiv.org/content/10.64898/2026.01.01.25343252v1.full.pdf)

## Abstract

BackgroundParkinsons Disease (PD) is often reduced to its most visible motor symptoms, yet it is a systemic neurodegenerative disorder with a highly heterogeneous presentation. While cardinal motor signs such as bradykinesia, rigidity, and tremor arise from the loss of dopaminergic neurons in the substantia nigra, they typically manifest only after substantial neurodegeneration (approximately 50-70% loss) has already occurred, inevitably leading to delayed detection [1] PD significantly impacts non-motor and fine-motor domains as well that are frequently overlooked. Research indicates that hypokinetic dysarthria (voice impairment) affects approximately 89% of PD patients, often as an early prodromal sign [18]. Similarly, micrographia (handwriting impairment) is observed in up to 63% of cases, while non-motor symptoms such as hyposmia (loss of smell) and REM sleep behavior disorder occur in over 70% and 40% of patients, respectively--often years before clinical diagnosis [19, 20]. Consequently, diagnostic systems that rely on a single modality fail to capture this complexity, leading to missed detections in patients whose primary symptoms fall outside that specific domain. To address this, we propose a holistic, multimodal AI framework that explicitly targets these diverse pathological vectors--Voice, Gait, Handwriting, and Non-Motor Symptoms--to ensure robust and early detection across the full spectrum of the disease.

MethodsWe propose a modular multimodal AI framework that integrates five complementary inputs: voice recordings, signals captured with the help of a smart pen during drawing spiral/meander, hand-drawn spiral/meander images, wearable sensor-driven gait data, and MDS-UPDRS questionnaire-derived symptom scores. Each modality undergoes an independent preprocessing and specialized modeling pipeline. Outputs from these specialized models are combined using a weighted aggregation engine, which allows for customizable contribution of each modality to the final classification.

ResultsPreliminary experiments show that the unimodal pipelines achieved high accuracy, with the Random Forest (Voice) achieving 89%, XGBoost (Drawing Signal) up to 93%, and ResNet-18 (Drawing Image) up to 92%. Incorporating the Transformer model for gait data, which achieved 86% accuracy, significantly boosts the detection of subtle motor deficits. The proposed approach is expected to improve the overall diagnostic sensitivity and specificity relative to any unimodal baseline, offering transparent score breakdowns for clinical use.

ConclusionThis study validates a comprehensive, multimodal Machine Learning framework designed to capture the holistic nature of clinical Parkinsons Disease. Our results indicate that fine motor control--analyzed through both dynamic handwriting signals and static imagery--serves as a highly discriminative biomarker, offering superior detection of subtle kinematic tremors. Furthermore, the integration of vocal analysis and spatiotemporal gait modeling ensures that the system captures the full spectrum of pathology, distinguishing between phonatory deficits and gross motor irregularities. By synthesizing these diverse clinical indicators, the proposed architecture overcomes the sensitivity limitations of single-modality systems, establishing a robust, non-invasive foundation for objective early screening and longitudinal patient monitoring in real-world settings.

## Notes

