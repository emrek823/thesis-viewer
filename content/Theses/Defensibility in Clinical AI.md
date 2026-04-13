---
source: notion
synced: 2026-04-06 16:56
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
<page url="https://www.notion.so/33ac0b141fd68173b8b5c7402e838940">Evidence Scan — 2026-04-06</page>

---
## Sub-Pages
### Evidence Scan — 2026-04-06
Search stats: 6 QMD queries (90 results) + 6 grep passes (\~300 hits) + 30+ files read. 8 CHALLENGES, 12 STRENGTHENS, 6 EXTENDS.
## Key Challenges
1. Cross-institution data moats contractually blocked — per-institution, not compounding
2. LLMs DEGRADE with structured EHR data (El Khettari et al.) — requires purpose-built architecture
3. Ambient scribes have ZERO moat standalone — 67% would switch. Mount Sinai 9/10 would switch to Epic
4. Kintsugi shutdown after 7-year FDA attempt — regulatory moat is also a startup killer
5. 1,250+ FDA clearances dilute regulatory moat — clearance alone no longer differentiates
## Potential New Takes
1. Clinical AI is THREE markets (health systems / medical groups / consumer) with different defensibility requirements
2. Privatization of clinical evidence as fourth defensibility layer (AHRQ gutted + S.1399 opens reimbursement)
Full analysis: Sources/LLM-Chats/2026-04-06-existing-theses-defensibility-clinical-ai.md
