---
title: 'LLM-Based Classification of Case Report Abstracts: A Pilot Study on Interactions
  between Radiotherapy and Systemic Therapies'
authors:
- Dennstaedt, F.
- Bobnar, T.
- Handra, A.
- Putora, P. M.
- Filchenko, I.
- Brueningk, S.
- Aebersold, D. M.
- Cihoric, N.
- Shelan, M.
date: '2025-12-29'
categories:
- health-informatics
pdf_url: https://www.medrxiv.org/content/10.64898/2025.12.22.25342797v1.full.pdf
paper_id: medrxiv_10.64898_2025.12.22.25342797
source: medrxiv
tags:
- paper
- source/medrxiv
- topic/health-informatics
---

# LLM-Based Classification of Case Report Abstracts: A Pilot Study on Interactions between Radiotherapy and Systemic Therapies

**Authors:** Dennstaedt, F., Bobnar, T., Handra, A., Putora, P. M., Filchenko, I....

**Date:** 2025-12-29 | **Source:** medrxiv | **Categories:** health-informatics

[PDF](https://www.medrxiv.org/content/10.64898/2025.12.22.25342797v1.full.pdf)

## Abstract

Background: The growing volume of biomedical literature, especially in oncology, necessitates automated tools for extracting clinically relevant information. Large Language Models (LLMs) offer promising capabilities for data extraction in this domain. However, their potential to extract clinically relevant information from case reports detailing rare treatment interactions, remains underexplored. Methods: We systematically searched PubMed for case reports on interactions between radiotherapy (RT) and Pembrolizumab, Cetuximab, or Cisplatin. A random sample of 100 report abstracts for each therapy was manually classified by two independent medical experts using 17 Boolean questions about patient demographics, treatment, cancer type and outcome with mutually exclusive answers, forming a ground truth. An LLM-based system with the open-source GPT models (GPT-OSS-120B and GPT-OSS-20B) was applied to classify these reports and the remaining dataset entries using the defined question structure. Performance of the LLM-based information extraction was evaluated using the standard classification metrics accuracy, precision, recall, and F1-scores. Results: The systematic searches yielded 320 (Pembrolizumab), 147 (Cetuximab), and 2055 (Cisplatin) publications. Inter-rater agreement for manual classification was high (Cohen's kappa = 0.87), though lower (0.60-0.80) for specific outcome and cancer type questions. The LLM-based classification (GPT-OSS-120B model) achieved high overall performance with an F1-score of 94.33% (95.83% accuracy, 93.69% precision, 94.98% recall). Performance was consistent across systemic therapies, with the smaller GPT-OSS-20B model showing similar results (F1-score 94.06%). Analysis of the entire datasets revealed that 56.02% of publications described patients who received both RT and systemic therapy. Proportions of positive and negative outcomes varied by therapy and sequencing. Conclusions: LLM-based classification systems demonstrate high accuracy and reliability for curating scientific case reports on RT and systemic therapy interactions. These findings support their potential for high-throughput hypothesis generation and knowledge base construction in oncology, particularly for underutilized case reports, with even smaller open-source models proving effective for such tasks.

## Notes

