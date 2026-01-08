---
title: Quantifying the severity of patient safety events via statistical natural language
  processing
authors:
- Bhadra, S.
- Fong, A.
- Sengupta, S.
date: '2025-12-27'
categories:
- health-informatics
pdf_url: https://www.medrxiv.org/content/10.64898/2025.12.22.25342876v1.full.pdf
paper_id: medrxiv_10.64898_2025.12.22.25342876
source: medrxiv
tags:
- paper
- source/medrxiv
- topic/health-informatics
---

# Quantifying the severity of patient safety events via statistical natural language processing

**Authors:** Bhadra, S., Fong, A., Sengupta, S.

**Date:** 2025-12-27 | **Source:** medrxiv | **Categories:** health-informatics

[PDF](https://www.medrxiv.org/content/10.64898/2025.12.22.25342876v1.full.pdf)

## Abstract

Medical errors are one of the leading causes of death in the United States. Several public databases have been built to record patient safety events across healthcare systems to better understand and improve safety hazards. These reports typically include both structured fields (e.g., event type, device, manufacturer) and unstructured data elements (free text narrative of what happened). The structured fields are usually restricted to a limited number of categories, whereas the unstructured fields allow the reporter to freely describe the event details. Thus, analyzing the unstructured text, rather than the structured fields, can reveal rich insights that can help improve patient safety. However, manual analysis of these databases is impractical due to their large size and the inherent subjectivity of manual interpretation. Therefore, we need new statistical algorithms to automate this process. In this paper, we develop a novel statistical technique to predict the severity level of a patient safety event based on its free text description. Using NLP techniques, we first express the raw event descriptions as numeric feature vectors and then use statistical techniques to model the severity of the events based on the feature vectors. We consider and compare three statistical approaches: multiclass (one-shot), ordinal, and hierarchical (two-step) models. To illustrate the proposed method, we analyzed a large text corpus of more than 7.7 million patient safety reports from FDA's MAUDE (Manufacturer and User Facility Device Experience) database. The proposed techniques correctly predicted the reported outcome of the events with above 94% accuracy. Furthermore, our techniques helped identify critical terms/phrases and provide a continuous-scale harm score, which can be more useful than a discrete severity level. Inspecting the misclassified reports, we discovered some likely occurrences of mislabeled reports which are correctly classified by our proposed approach.

## Notes

