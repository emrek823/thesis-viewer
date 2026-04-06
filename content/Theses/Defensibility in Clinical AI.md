---
source: notion
synced: 2026-04-02 05:14
status: Active
notion_id: 331c0b14-1fd6-818a-b8c9-d4fc0dda4322
---

# Defensibility in Clinical AI

## Overview
Most of the early healthcare AI investment dollars have gone to ambient scribes and back-end RCM automation. Clinical AI, supporting and automating the patient-provider interaction, is a harder problem with a larger opportunity. The question is what creates defensibility.
We see three layers of defensibility forming:
1. **Data moats** -- proprietary clinical outcome data from deployed systems creates compounding advantages. First movers who process real patient interactions build training sets competitors can't replicate.
2. **Workflow integration** -- deep EHR integration and clinical workflow embedding creates switching costs. The ambient scribe market proved this: once a system is embedded in a provider's daily workflow, displacement is extremely difficult.
3. **Regulatory moats** -- FDA clearance, clinical validation studies, and payer reimbursement codes create barriers that take years to replicate. Companies that navigate the regulatory pipeline first have a durable advantage.
The companies that win will combine all three: proprietary data from deployed clinical AI, deep workflow integration that makes switching costly, and regulatory clearance that blocks fast-followers.
## Evidence
- **PathAI multimodal pathology (April 2026):** PLUTO-4 proprietary foundation model + contrastive vision-language learning. Illustrates all three defensibility layers: (1) **Data moat** — proprietary PLUTO-4 encoder trained on PathAI's slide corpus, (2) **Workflow integration** — multimodal approach aligns with how pathologists actually reason (morphological descriptions), (3) **Regulatory moat** — open-vocabulary classification could accelerate FDA clearance across disease types without retraining per-indication. The compounding dynamic: each deployed use case generates pathologist corrections that improve both the vision encoder and the text description library. [Source](https://www.linkedin.com/pulse/advancing-multimodal-pathology-learning-from-images-language-disease-zimxc/) — Harsha Vardhan Pokkalla, PathAI.
## Key Questions
- Does the company's architecture generate proprietary data that improves the model over time?
- How deep is the EHR/workflow integration -- is it a layer on top or embedded in the clinical workflow?
- What regulatory clearances does the company have or is pursuing?
- Can competitors replicate the training data without similar deployment scale?
