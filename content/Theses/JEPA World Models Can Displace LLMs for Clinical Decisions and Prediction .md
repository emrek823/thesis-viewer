## Overview

LLMs have hit a measurable ceiling on clinical trajectory tasks: GPT-4 achieves just 30.3% completeness on real oncology treatment decisions, MedHELM benchmarks show LLMs score 0.61-0.76 on Clinical Decision Support but only 0.53-0.63 on Administration & Workflow, and ICU research concludes "LLMs are not inherently superior to SLMs in predicting future clinical events." The architectural problem is fundamental: token prediction optimizes for semantic consistency with medical text rather than biological fidelity to disease dynamics. A clinician asks "given State(t) + Intervention, what is State(t+1)?", but LLMs learn "given tokens, what is the next token?" JEPA (Joint-Embedding Predictive Architecture) offers an alternative: predicting latent states rather than tokens, enabling causal dynamics modeling. At one major cancer center, a JEPA world model achieved 0.727 AUROC vs. SFT-only 0.715 vs. Qwen3-VL 0.687, with treatment change prediction at 0.78 vs. 0.70 (+18%) and sarcoma showing +8.5% lift where pattern-matching fails.

The benchmark progression tells the story. USMLE tests static medical knowledge—LLMs ace it because it's pattern matching on training data. OpenAI's HealthBench moves to single-turn patient conversations, exposing gaps in clinical reasoning. Multi-turn patient conversations where context accumulation matters show LLMs struggling to maintain coherent clinical trajectories across turns. EHRSHOT shifts to actual EHR data with temporal sequences, and LLM gains compress to +0.3-0.9% (below the +2% "meaningful" threshold per Stanford researchers). At the far end, JEPA achieves +7.2% c-index on trajectory prediction tasks—exactly where token prediction architectures fail and world models excel. Each step up in clinical realism exposes more of the architectural mismatch: LLMs optimize for plausible text, not accurate futures.

The opportunity sits at the intersection of clinical prediction and pharma economics. Epic's Curiosity (115B events, 118M patients, 0.925 AUROC on chronic heart failure) validates the architectural insight that simulating future timelines beats token prediction, but Epic's EHR-centric data lacks multimodal depth. Nabla's $120M + LeCun AMI partnership explicitly targets "FDA-certifiable agentic AI" using world model technology, betting that "deterministic, auditable decision-making" requires world models, not LLMs. The gap: clinical trajectory prediction where Epic's EHR-only data and LLM-based ambient AI (Commure: >1% of US appointments) are insufficient. Buyers are pharma (trial design, enrollment prediction), academic medical centers (prognosis, toxicity assessment), and health systems seeking dynamic prediction beyond documentation.

---

## Bull Case

**LLMs hit measurable ceiling on clinical trajectory tasks.** GPT-4 achieves 30.3% completeness on real oncology treatment decisions. MedHELM (Stanford, 35 benchmarks) found LLMs perform worst on Administration & Workflow (0.53-0.63) and only 0.61-0.76 on Clinical Decision Support. ICU benchmarking concludes: "LLMs are not inherently superior to SLMs in predicting future clinical events...should prioritize models capable of predicting clinical trajectories rather than focusing on simpler tasks such as named entity recognition."
> "To achieve meaningful clinical outcomes, future efforts in training LLMs should prioritize developing models capable of predicting clinical trajectories." — Benchmarking LLMs for Predictive Applications in the Intensive Care Units

**Foundation models fail at perturbation/intervention prediction.** Nature Methods 2025: "None of the deep learning models was able to consistently outperform the mean prediction or the linear model" on gene perturbation tasks. scGPT and Geneformer perform WORSE than simple baselines. Perturbation = intervention = the exact question clinical care requires ("what happens if we give Drug X?"). This is devastating because token prediction architectures optimize for dataset statistics, not causal dynamics.
> "Foundation models don't beat baselines" on perturbation prediction. — PerturBench and Foundation Model Perturbation Failures

**JEPA architecture delivers quantified lift on dynamic tasks.** Cancer center validation: JEPA 0.727 AUROC vs SFT-only 0.715 vs Qwen3-VL 0.687. Treatment change prediction: 0.78 vs 0.70 (+18%). Sarcoma: +8.5% where pattern-matching fails. Stanford researchers note: +7.2% C-index on temporal tasks is "very impressive if real." JEPA excels on heterogeneous diseases because it learns phenotype from temporal vital/lab trajectories rather than text labels.
> "The hierarchy of performance is unambiguous: generalist models < specialized public models < specialized privately fine-tuned models < specialized World Models." — Research analysis

**Independent validation of JEPA for clinical prediction.** RadJEPA outperforms Rad-DINO on disease classification, segmentation, and report generation for chest X-rays. NeurIPS 2025 workshop explicitly names "JEPA-style predictive representation learning" for medical imaging. Nabla + LeCun AMI partnership targets FDA-certifiable clinical AI using world models: "LLMs lack physical foundation and temporal reasoning required for clinical decision support."
> "World models represent the next major shift, enabling deterministic, auditable decision-making, simulation-based reasoning, robust handling of continuous medical signals, and a credible regulatory path for autonomous systems." — Nabla announcement

---

## Bear Case

**Epic's data moat and distribution advantage is insurmountable.** Curiosity: 115B events, 118M patients, outperformed 78 single-purpose models. Epic has 300M patients via Cosmos, 38% acute care market share, 1,760+ hospitals, 200+ AI features in development. Startups face "integration tax"—turning on Epic feature is "one-click" vs. legal review, security audits, BAAs for third-party vendors.
> "The moat is data, not model architecture. Any sufficiently capitalized team could replicate the transformer training. What they cannot replicate is access to 115 billion medical events." — Industry analysis

**GPT-5 and reasoning models improving faster than expected on diagnostic tasks.** GPT-5 improves reasoning by +29.62% and understanding by +36.18% over GPT-4o on multimodal medical benchmarks. Kimi K2 and GPT-5.2 achieved 100% diagnostic accuracy on clinical reasoning benchmarks. However: improvement is on DIAGNOSTIC accuracy (static classification), not trajectory prediction (dynamic). The architectural gap may persist even as raw capability improves on static tasks.

**JEPA architecture unproven at scale beyond one cancer center.** Validated on one cancer center's data. Transfer to other institutions, cancer types, non-oncology conditions uncertain. JEPA training is notoriously unstable (constant output collapse). Acknowledging need for "hybrid optimization" with SFT anchoring—a patch, not a solution. No one else in biology is using JEPA—either early movers are ahead or wrong. EHRSHOT gains (+0.3-0.9%) were below the +2% threshold researchers call "meaningful."

**LLM-based ambient AI capturing production share.** Commure: >1% of all US appointments on Ambient AI, $25B annualized payments processed, 60+ EHR integrations. 100% of KLAS interviewed customers would buy again. LLM-based solutions solving the documentation burden that drives clinician adoption, potentially pre-empting world model clinical decision support before it reaches market.

---

## Startup Opportunities

**Oncology World Model (Stage: Proven)** — JEPA +5.8% AUROC proven at major cancer center. Drug spend is 70% of oncology spend. Wedge: Academic partnerships (top cancer centers). Publish replication studies. The edge: Multimodal integration (imaging + genomics + pathology + EHR) where Epic's EHR-centric Curiosity is insufficient for complex trajectory prediction. Buyers: Top 20 pharma, academic medical centers. Risk: JEPA lift doesn't replicate outside initial validation; Epic Curiosity extends to multimodal.

**FDA-Certifiable Healthcare Agents (Stage: Early)** — Nabla $120M + LeCun AMI partnership validates path to FDA-certifiable agentic AI using world model technology. BJC Healthcare deploying multi-agent LLM systems with "learning reviewer agent" using 35,000+ labeled patients, but still LLM-based. The edge: Regulatory moat—first to build FDA dossier for agentic clinical decision support using world models owns the category. World models enable the "deterministic, auditable" reasoning regulators require. Buyers: Health systems, ambulatory care networks. Risk: Regulatory timelines; LLM-based agents achieve "good enough" without world models.

---

## Open Questions

**Does JEPA lift replicate outside initial validation site?** +7.2% C-index on temporal tasks is "very impressive if real" per Stanford researchers. But validated on one cancer center. EHRSHOT gains below +2% threshold on noisy tasks. If advantages don't transfer, thesis weakens significantly.
→ Would validate architectural moat (if positive) or reveal data artifact (if negative). Key test: Independent replication at 2+ academic medical centers in 2026.

**Will Epic Curiosity translate to clinical workflows?** Distribution does not equal adoption. Epic has 200+ AI features in development but Curiosity is prediction, not documentation—different adoption path than ambient AI. If Curiosity fails to penetrate clinical decision-making (vs. operational/admin tasks), specialized JEPA players have opening.
→ Would determine competitive intensity for trajectory prediction vertical.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-17 | The Patient is Not a Document (Part 1) | Research | GPT-4 achieves 30.3% completeness. "Language is NOT a sufficient proxy for disease biology." |
| 2025-12-17 | The Patient is Not a Document (Part 2) | Research | Cancer center validation: JEPA 0.727 vs Qwen3-VL 0.687. Treatment change 0.78 vs 0.70. Sarcoma +8.5%. |
| 2025-12-21 | Curiosity Medical Intelligence | Company | Epic Curiosity: 115B events, plausible future timelines, outperformed 78 single-purpose models. |
| 2025-12-29 | PerturBench and Foundation Model Perturbation Failures | Research | Nature Methods: "None of the deep learning models was able to consistently outperform the mean prediction." |
| 2026-01-04 | Benchmarking LLMs for Predictive Applications in ICU | Research | "LLMs not inherently superior to SLMs in predicting future clinical events." |
| 2026-01-26 | RadJEPA Radiology Encoder paper | Research | RadJEPA outperforms Rad-DINO on disease classification, segmentation, and report generation. |
| 2025-11-25 | Beyond Generative AI - World Models for Clinical Prediction | Research | NeurIPS 2025 Workshop: JEPA-style architectures explicitly named for medical imaging. |
| 2025-12-18 | Nabla announcement | Company | Nabla + LeCun AMI for "FDA-certifiable agentic AI." World models enable "deterministic, auditable decision-making." |
| 2026-01-12 | Epic Curiosity healthcare foundation model analysis | Research | Epic CoMET: 115B events, 118M patients. 0.925 AUROC on chronic heart failure. "Moat is data, not architecture." |
| 2025-06 | MedHELM evaluation | Research | MedHELM: LLMs perform worst on Administration & Workflow (0.53-0.63). Clinical Decision Support only 0.61-0.76. |
| 2026-01-07 | Commure reaching escape velocity | News | Commure: >1% of all US appointments on Ambient AI. Bear case: LLM-based ambient capturing production share. |

---

*Confidence: MEDIUM — Core mechanism validated (JEPA beats LLMs on trajectory prediction at major cancer center, +18% on dynamic tasks, RadJEPA independent validation). Two HIGH threats: (1) Epic's 300M patient data moat + bundled distribution, (2) JEPA unproven outside single cancer center. Key uncertainty: Does JEPA lift replicate?*
