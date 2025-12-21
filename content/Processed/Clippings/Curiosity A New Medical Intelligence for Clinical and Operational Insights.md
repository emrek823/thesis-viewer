---
title: "Curiosity: A New Medical Intelligence for Clinical and Operational Insights"
source: "https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/"
published:
created: 2025-12-20
description:
tags:
  - "clippings"
---
September 3, 2025

Curiosity is a new form of healthcare intelligence designed to help clinicians, health systems, and patients make more informed decisions. By predicting what is likely to happen next in a patient’s journey, Curiosity estimates risk of disease, length of stay, treatment outcomes, and more. Curiosity has learned from more than 100 billion patient medical events to calculate likely futures.

![](https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/post_featured_imageshttps://media.epic.com/epicdotcom/wordpress/cosmos.jpg)

*You can read more about the methods and early evaluation results in* [*this paper*](https://arxiv.org/abs/2508.12104) *on arxiv, written in collaboration with researchers from Yale and Microsoft.*

Every day, clinicians make decisions without knowing exactly what will happen next.

- *A patient presents with abdominal pain, and the clinician needs to decide whether the patient should be admitted, sent home, or referred for further imaging.*
- *A hospitalized patient is improving, but will an early discharge result in them being readmitted in the next few days?*

These kinds of questions are central to clinical workflows but can be clouded by uncertainty.

Curiosity, built on [Epic Cosmos](https://cosmos.epic.com/), simulates likely paths in a patient’s health journey to help care teams plan accordingly. It is trained on a subset of Cosmos data, validated on key use cases, and designed to improve as more data and additional data types are included.

### What Curiosity Is and How It Works

Curiosity models are trained on sequences of time-ordered medical events, including diagnoses, labs, medications, and encounters, spanning millions of de-identified patient records and more than 100 billion data points.

Using the same core technology as today’s large language models, Curiosity learns how clinical patterns evolve over time. When given a patient’s current state, it generates a number of plausible future timelines that reflect real-world complexity: diagnoses resolving or emerging, complications arising, and care needs shifting.

These simulations from Curiosity will be summarized into insights and presented to clinicians in workflows to provide a quantitative, data-driven view of what is likely to happen next, helping care teams anticipate and act.

![](https://media.epic.com/epicdotcom/wordpress/curiosity-image.png)

### Designed for Security

Curiosity is built entirely within [Epic Cosmos](https://cosmos.epic.com/), a secure, collaborative data platform designed for large-scale health research and innovation. Cosmos uses de-identified patient data and operates under rigorous privacy, security, and compliance standards. Because Cosmos is updated as care is delivered, the data powering Curiosity reflects evolving clinical practices and emerging trends across diverse health systems.

Operating within this governed environment, Curiosity can surface insights to participating health systems without compromising patient privacy. The platform’s architecture enables shared learning across the network while preserving privacy and security. Curiosity will undergo case-by-case evaluation to ensure performance is appropriate for specific workflows before being integrated into daily use.

### For Patients, Clinicians, and Health Systems

Curiosity will be able to simulate a patient’s likely future trajectory and summarize key insights, such as extended hospitalization, 30-day readmission, ASCVD risk, or emergence of conditions like pancreatic cancer. In a majority of the 78 cases evaluated, Curiosity outperformed individual models, each specifically designed for one of the cases.

Starting in February 2026, researchers from Cosmos participating organizations will be able to explore Curiosity in a virtual lab to test new use cases and help advance its clinical relevance.

And this is only the beginning. As simulation-based insights become part of everyday healthcare, they open the door to a new kind of care planning: anticipatory rather than reactive, personalized rather than generalized, and data-informed at every level. From use in the emergency department to case management, the future of clinical decision-making is not about finding a single answer; it is about understanding the range of what is possible and being ready for all of it, allowing teams to plan with greater confidence, distribute resources more effectively, and, ultimately, improve the lives of the patients they serve.

Read the full article from [arxiv](https://arxiv.org/abs/2508.12104).