# Thesis: JEPA World Models Beat LLMs for Patient Trajectory Prediction

## Investment Take

LLMs are hitting a ceiling in healthcare—they predict tokens, not patient trajectories. Standard Model research showed LLMs achieve only 30.3% completeness on real oncology treatment decisions ([[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]]). The next wave is JEPA-style "world models" that understand clinical dynamics and simulate outcomes given interventions.

MSK validation proves the thesis: JEPA architecture achieved 0.727 AUROC vs 0.687 for Qwen3-VL 8B. The lift is specific to dynamic tasks—treatment change prediction: 0.78 vs 0.70 for generalist models. "Specialization beats scale." Model weights now public on HuggingFace ([[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]]).

Healthcare decisions are fundamentally about: "If I do X, what happens to the patient?" LLMs can't answer this. World models can. CRONOS validates this for imaging: 50-70% scan frequency reduction while improving progression tracking. MCR-VQGAN generates synthetic tau PET from routine MRI for Alzheimer's, cutting diagnostic costs 80-90% (W51 Papers Digest). Both represent state prediction (what would it look like?) rather than token prediction.

**How this evolved:**
- *2025-12-17:* Emerged from cluster: Standard Model for oncology, M-Optimus "world model for biology," Cambrian-S spatial supersensing. Common thread: beyond text-based LLMs to models understanding physical/biological reality.
- *2025-12-20:* Upgraded Hypothesis → Emerging. Multiple implementations validating architecture: CheXWorld (radiology JEPA), DT-GPT (clinical trajectories), CRONOS (4D imaging), MCR-VQGAN (synthetic PET).
- *2025-12-21:* **Epic enters the race.** Epic Curiosity (Sep 2025) trained on 100 billion patient events simulates "plausible future timelines"—exactly the world model architecture we predicted. Outperformed single-purpose models in 78 cases. February 2026 researcher access. Epic's distribution moat (90%+ US medical records) + world model capability = formidable incumbent threat.
- *2025-12-22:* **Standard Model publishes architectural deep-dive.** Details JEPA implementation: multimodal fusion (genomics, imaging, EHR), cause-and-effect data structuring ((Pre-State + Intervention) → Post-State), hybrid optimization combining SFT anchoring with JEPA dynamics. Key insight: "pure JEPA models suffer training collapse—hybrid anchoring solves this." Model predicts future state embeddings, not pixels/tokens. StandardModel-v1 coming to HuggingFace.

---

## Bull Case

- [x] **Architecture is the unlock.** JEPA achieved +5.8% AUROC over SFT-only on MSK data. Dynamic tasks show larger gains. Model weights public.
  - *Evidence:* [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]] — Treatment change 0.78 vs 0.70

- [ ] **Simulation enables counterfactuals.** "What would have happened if we'd chosen different treatment?" is the holy grail for clinical decision support. World models enable this—LLMs cannot.
  - *Evidence:* Needs validation — Design retrospective studies with treatment crossovers

- [ ] **Pharma will pay premium.** Drug companies want patient trajectory prediction. AI in drug discovery: $2.6B (2025) → $8.2B (2030). Trial simulation worth 10x foundation models.
  - *Evidence:* Needs validation — Test sales message with pharma R&D

---

## Bear Case

- [x] **Incumbents can build this.** Epic launched Curiosity (Sep 2025) using same architecture—100B events, simulates "plausible future timelines." Outperformed 78 task-specific models. Feb 2026 researcher access. Epic has 90%+ US medical records.
  - *Evidence:* [[2025-12-21-curiosity-a-new-medical-intelligence-for-clinical]] — Epic world model live, researcher access Feb 2026

- [ ] **Architecture unproven beyond MSK.** JEPA validated on one cancer center. Transfer to other institutions/cancer types uncertain. Could be overfitting.
  - *Evidence:* Needs validation — Request replication from Dana-Farber, MD Anderson

- [ ] **Data requirements unclear.** World models might need longitudinal data at scale that doesn't exist. HIPAA/consent barriers could block multi-institution aggregation.
  - *Evidence:* Needs validation — Map health systems with research data partnerships

- [ ] **LLMs get better.** Maybe o3/o4-class reasoning models close the gap without architectural change. If LLMs achieve 60%+ completeness via reasoning, advantage disappears.
  - *Evidence:* Needs monitoring — Track Standard Model benchmark results for new reasoning models

---

## Startup Opportunities

**1. Oncology World Model (Clinical Decision Support)**
- JEPA-style model for cancer treatment trajectory prediction, extend Standard Model to more cancer types
- Why this follows: Drug spend 70% of oncology. First to crack trajectory prediction wins. Model weights public for starting point.
- Revenue: Per-patient prediction ($50-200) + pharma partnerships for trial simulation
- Risk: Data access negotiations (18-24 months). Regulatory pathway unclear.

**2. Radiology Dynamics AI (CRONOS + MCR-VQGAN validated)**
- 4D medical imaging: predict lesion evolution from sparse scans + cross-modality synthesis (MRI → PET)
- Why this follows: CRONOS reduces scans 50-70%. MCR-VQGAN cuts costs 80-90%. Both validated state prediction over token prediction.
- Revenue: Per-prediction fees ($50-150 for 4D, $200-400 for synthetic PET) + facility subscriptions
- Risk: Radiologists may resist protocol changes. FDA pathway for synthetic imaging unclear.

**3. Clinical Trial Simulation SaaS**
- World model for trial outcome prediction from protocol + patient population characteristics
- Why this follows: Trial failures cost $50M-200M. Even 10% improvement in design ROI is $5-20M value per trial.
- Revenue: Per-simulation fees ($25-100k) + subscription for continuous optimization
- Risk: Regulatory acceptance of simulated evidence uncertain. Pharma conservatism.

---

## Open Questions

**Can JEPA architecture learn clinical dynamics from available data?**
→ PROGRESS (Dec 2025): Standard Model Part 2 validated on MSK data. +5.8% AUROC. Model weights public. Next: validate on other cancer centers.

**What longitudinal data is available for training?**
→ OPEN: If major health systems (Kaiser, Geisinger) willing to partner, data access solvable. If privacy barriers insurmountable, synthetic data path only. Map research data partnerships.

**Will regulators accept world model predictions as evidence?**
→ OPEN: If FDA signals openness to simulation-based evidence, TAM expands to clinical decision support. If RCT required for every prediction, limited to research tools. Track FDA digital health guidance.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]] | Research | LLMs hit 30.3% completeness on real treatment decisions. JEPA architecture proposed. |
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]] | Research | MSK validation: JEPA +5.8% over SFT. Treatment change 0.78 vs 0.70. Model weights public. |
| 2025-12-17 | [[Bioptimus Unveils M-Optimus, a World Model for Biology]] | Company | "World model for biology" from H&E pathology. Beyond classification to simulation. |
| 2025-12-20 | W51 Papers Digest | Research | CRONOS: 50-70% scan reduction. MCR-VQGAN: 80-90% cost reduction for tau PET from MRI. |
| 2025-12-20 | arXiv survey | Research | CheXWorld: JEPA for radiograph representations. DT-GPT: LLM forecasting for clinical trajectories. |
| 2025-12-20 | Market research | Research | AI oncology: $4.2B (2024) → $27.2B (2032). Drug discovery AI: $2.6B → $8.2B by 2030. |
| 2025-12-21 | [[2025-12-21-curiosity-a-new-medical-intelligence-for-clinical]] | Company | Epic Curiosity: 100B patient events, simulates "plausible future timelines," outperformed 78 single-purpose models. Feb 2026 researcher access. |
| 2025-12-21 | [[CRONOS Continuous Time Reconstruction for 4D Medical Longitudinal Series]] | Research | First continuous sequence-to-image forecasting for 3D medical data. Spatio-temporal velocity field for trajectory prediction. |
| 2025-12-22 | [[2025-12-21-thesis-viewer-virtue-vc]] | Company | Standard Model architectural details: JEPA with multimodal fusion, hybrid SFT+JEPA training to prevent collapse, cause-and-effect data structuring. StandardModel-v1 coming to HuggingFace. |
