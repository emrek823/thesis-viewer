---
title: Transcriptome-Conditioned Personalized De Novo Drug Generation for AML Using
  Metaheuristic Assembly and Target-Driven Filtering
authors:
- Abdullah G. Elafifi
- Basma Mamdouh
- Mariam Hanafy
- Muhammed Alaa Eldin
- Yosef Khaled
- Nesma Mohamed El-Gelany
- Tarek H. M. Abou-El-Enien
date: '2025-12-24'
categories:
- cs.LG
- q-bio.QM
pdf_url: https://arxiv.org/pdf/2512.21301v1
arxiv_id: 2512.21301v1
tags:
- paper
- alphaxiv/hot
- topic/cs-LG
- topic/q-bio-QM
---

# Transcriptome-Conditioned Personalized De Novo Drug Generation for AML Using Metaheuristic Assembly and Target-Driven Filtering

**Authors:** Abdullah G. Elafifi, Basma Mamdouh, Mariam Hanafy, Muhammed Alaa Eldin, Yosef Khaled...

**Date:** 2025-12-24 | **Categories:** cs.LG, q-bio.QM

[PDF](https://arxiv.org/pdf/2512.21301v1) | [AlphaXiv](https://alphaxiv.org/abs/2512.21301v1)

## Abstract

Acute Myeloid Leukemia (AML) remains a clinical challenge due to its extreme molecular heterogeneity and high relapse rates. While precision medicine has introduced mutation-specific therapies, many patients still lack effective, personalized options. This paper presents a novel, end-to-end computational framework that bridges the gap between patient-specific transcriptomics and de novo drug discovery. By analyzing bulk RNA sequencing data from the TCGA-LAML cohort, the study utilized Weighted Gene Co-expression Network Analysis (WGCNA) to prioritize 20 high-value biomarkers, including metabolic transporters like HK3 and immune-modulatory receptors such as SIGLEC9. The physical structures of these targets were modeled using AlphaFold3, and druggable hotspots were quantitatively mapped via the DOGSiteScorer engine. Then developed a novel, reaction-first evolutionary metaheuristic algorithm as well as multi-objective optimization programming that assembles novel ligands from fragment libraries, guided by spatial alignment to these identified hotspots. The generative model produced structurally unique chemical entities with a strong bias toward drug-like space, as evidenced by QED scores peaking between 0.5 and 0.7. Validation through ADMET profiling and SwissDock molecular docking identified high-confidence candidates, such as Ligand L1, which achieved a binding free energy of -6.571 kcal/mol against the A08A96 biomarker. These results demonstrate that integrating systems biology with metaheuristic molecular assembly can produce pharmacologically viable, patient tailored leads, offering a scalable blueprint for precision oncology in AML and beyond

## Notes

