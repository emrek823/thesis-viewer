![[Images/jepa-world-models-displace-llms-for-clinical-decisions.png]]

## 1-2 Sentence Summary

**Clinical AI developers** adopt world model architecture over LLMs because LLMs predict tokens but clinicians need trajectory predictions → world models become standard for clinical decision support; LLM-only approaches retreat to documentation and summarization.

---

## Investment Take

**Today:** Foundation models trained on medical text are hitting a measurable ceiling on real clinical tasks. GPT-4 achieves just 30.3% completeness on oncology treatment decisions. The latest reasoning models (o3 at 67.8%, GPT-5 at 91%+ diagnostic accuracy) show dramatic improvement on static benchmarks, but specialized models still outperform on trajectory prediction where disease progression and treatment response matter most.

The fundamental problem is architectural: LLMs predict the next token, but clinicians need to predict the next patient state. When a physician asks "If I give Drug A, where will this patient be in 6 months?", an LLM has no mechanism to answer—it can only generate plausible-sounding text based on pattern matching. This is why foundation models fail at perturbation prediction in biology (Nature Methods 2025: "None of the deep learning models was able to consistently outperform the mean prediction or the linear model") and why single-cell foundation models like scGPT and Geneformer perform worse than simple HVG + Harmony baselines.

World models—specifically JEPA-style architectures that predict future states in latent space rather than generating pixels or tokens—solve this by modeling biological dynamics directly. Standard Model's JEPA achieves 0.78 AUROC on treatment change prediction vs. 0.70 for generalist models, with the gap widening on heterogeneous conditions like sarcoma (+6 points). Meta's V-JEPA 2 (released June 2025) validates the architectural approach: with just 1.6B parameters, it matches larger generative VLMs and enables zero-shot robotic planning, outperforming peers by up to 30x in speed.

The catch: Epic already knows this. Their Curiosity model (100B+ events, Feb 2026 researcher access) uses the same architectural insight—simulating "plausible future timelines" rather than predicting tokens. The real competition isn't JEPA vs. LLM; it's Epic's data moat (300M patients via Cosmos, 37.7% acute care market share) vs. specialized players with richer multimodal data in specific verticals.

**In 3-5 years:** World model architecture becomes table stakes for clinical decision support. The market bifurcates: Epic dominates general clinical AI through distribution and data scale (150+ AI features in development for 2026, native ambient AI launching early 2026), while specialized players (Standard Model, Bioptimus) capture premium pricing in deep verticals like oncology where multimodal integration (imaging + genomics + pathology + EHR) matters more than raw scale.

LLMs don't disappear—they retreat to tasks where token prediction is the right paradigm: clinical documentation, summarization, patient communication, prior authorization. The critical insight from 2026 research: "LLMs are not inherently superior to SLMs in predicting future clinical events...should prioritize models capable of predicting clinical trajectories." This is a massive market, but it's not clinical decision-making.

Pharma becomes the high-margin customer for trajectory prediction. Trial simulation, synthetic control arms, and counterfactual analysis ("what would have happened with different treatment?") command 10x premiums because trial failures cost $50-200M. Even 10% improvement in trial design ROI is $5-20M value per trial. Standard Model's AstraZeneca meeting "exceeded expectations" per January 2026 call; Sanofi's $4.8M contract validates willingness to pay.

**How this evolved:**
- *2025-12-17:* Core insight crystallized from Standard Model blog: "Human biology is not a linguistic problem; it is inherently multimodal." GPT-4's 30.3% completeness on real treatment decisions proved LLM ceiling.
- *2025-12-17:* MSK validation: JEPA 0.727 vs Qwen3-VL 0.687 AUROC. Treatment change prediction 0.78 vs 0.70. Model weights public.
- *2025-12-20:* Upgraded to Emerging. Multiple implementations validating architecture: CRONOS (4D imaging), MCR-VQGAN (synthetic PET), Bioptimus M-Optimus.
- *2025-12-21:* Epic Curiosity launched. Incumbent threat validated—they're building this too.
- *2025-12-29:* PerturBench (Nature Methods): Foundation models fail at perturbation prediction. scGPT worse than mean baseline. Critical validation that token prediction fails for interventional questions.
- *2026-01-07:* **REBUILD** — Two HIGH threats: o3/GPT-5 improving on diagnostic tasks, Epic's data moat. Core mechanism confirmed but confidence lowered.
- *2026-01-12:* Thermo Fisher-NVIDIA partnership announced "lab-in-the-loop" vision—validates Physical AI convergence with world models.
- *2026-01-26:* **REBUILD** — GPT-5 reaches 91%+ diagnostic accuracy, but trajectory prediction gap persists. Epic threat intensifies (native ambient AI, 150+ features in development). Specialized models (8B parameter CLEVER study) outperform larger general-purpose systems on precision tasks. Yann LeCun's Ami raised $500M at $3.5B for JEPA approach. Nabla $120M partnership with LeCun's AMI for FDA-certifiable healthcare AI.

---

## Bull Case

- [x] **LLMs hit measurable ceiling on clinical trajectory tasks.** GPT-4 achieves 30.3% completeness on real oncology treatment decisions. LLMs perform "markedly lower" than physicians on script concordance testing (NEJM AI 2025). Even o3 (67.8% on clinical reasoning) underperforms senior residents and attending physicians on nuanced clinical reasoning. ([[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]], [[Assessment of Large Language Models in Clinical Reasoning: A Novel Benchmarking Study | NEJM AI]])

- [x] **Foundation models fail at perturbation/intervention prediction.** Nature Methods 2025: "None of the deep learning models was able to consistently outperform the mean prediction or linear model" on gene perturbation. scGPT and Geneformer perform WORSE than simple baselines. Token prediction architecturally cannot answer "what happens if we give Drug X?" ([[PerturBench and Foundation Model Perturbation Failures]], [[Zero-shot evaluation reveals limitations of single-cell foundation models]])

- [x] **JEPA architecture delivers quantified lift on dynamic tasks.** +5.8% AUROC over SFT-only on MSK data. Treatment change prediction 0.78 vs 0.70. Sarcoma sees +6 point lift where pattern-matching fails. RadJEPA outperforms Rad-DINO on disease classification, segmentation, and report generation. ([[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]], [[Sources/Research-Papers/RadJEPA Radiology Encoder for Chest X-Rays via Joint Embedding Predictive Architecture]])

- [x] **Multiple independent teams converging on world model architecture.** Epic Curiosity (100B events), Bioptimus M-Optimus (first multimodal bio world model, #1 ranked pathology FM out of 22), CRONOS (4D imaging), SurgWorld (surgical robotics), SLIM-Brain (JEPA for fMRI), V-JEPA 2 (Meta, June 2025). Academic review explicitly names "JEPA-style predictive representation learning" as emerging approach. ([[Curiosity A New Medical Intelligence for Clinical and Operational Insights]], [[Bioptimus Unveils M-Optimus, a World Model for Biology]], [[Beyond Generative AI - World Models for Clinical Prediction]])

- [x] **Major capital commitment validates world model thesis.** Yann LeCun's Ami raised ~$500M at $3.5B valuation for JEPA approach. Nabla raised $120M and partnered with LeCun's Advanced Machine Intelligence for world model technology to build FDA-certifiable agentic AI in healthcare. ([[Sources/Granola/Virtue - Internal Team Sync-2026-01-12_11-21-24]], [[Sources/Browser-History/2026-01-11-nabla]])

- [x] **Pharma validation through commercial contracts.** Standard Model: AstraZeneca meeting "exceeded expectations" (Jan 2026); $2.5M bridge on $35M cap; JPM panel on AI agents calling foundation models. Sanofi $360K POC + $4.8M contract. IQVIA $44M proposal via Nvidia. ([[SMB __ Virtue]], [[Sources/Granola/Kevin Brown and Virtue-2026-01-16_13-00-36]])

- [x] **Specialized models outperform general-purpose on precision tasks.** CLEVER study: 8B-parameter specialized model outperforms much larger general-purpose systems on precision-critical tasks. Healthcare NLP achieves 96% F1-score vs GPT-4o's 79% on PHI detection. MDS-ICU: 0.90 AUC mortality, 0.97 AUC mechanical ventilation—multimodal AI outperforms both clinicians and LLMs on 33 ICU outcomes. ([[Sources/Research-Papers/A Multimodal Deep Learning Framework for Predicting ICU Deterioration Integrating ECG Waveforms with]])

- [ ] **Reasoning models don't close the gap on trajectory tasks.** o3/GPT-5 improve on DIAGNOSTIC accuracy (static) but lack mechanism for trajectory prediction (dynamic). Needs monitoring as o4/o5 release.
  - *Needs validation:* Track o4/o5 performance on treatment change prediction benchmarks, not just diagnostic accuracy

---

## Bear Case

- [x] **GPT-5 and reasoning models improving faster than expected.** GPT-5 improves reasoning by +29.62% and understanding by +36.18% over GPT-4o on multimodal medical benchmarks. GPT-5 moves from "human-comparable to above human-expert performance" on controlled multimodal reasoning. Six times fewer hallucinations than o3. ([OpenAI GPT-5](https://openai.com/index/introducing-gpt-5/), [Capabilities of GPT-5 on Multimodal Medical Reasoning](https://arxiv.org/html/2508.08224v1))

- [x] **Epic's data moat and distribution advantage is insurmountable for most startups.** Curiosity: 100B+ events, outperformed 78 single-purpose models, Feb 2026 researcher access. Epic has 300M patients via Cosmos, 37.7% acute care market share, 43.92% ambulatory. 150+ AI features in development for 2026. Native ambient AI launching early 2026. "Good enough" incumbent AI may wipe out "best of breed" point solutions. ([[Curiosity A New Medical Intelligence for Clinical and Operational Insights]], [Healthcare Dive](https://www.healthcaredive.com/news/top-healthcare-ai-artificial-intelligence-trends-2026/809493/))

- [x] **Integration barrier favors incumbents.** Startups face "integration tax"—turning on Epic feature is "one-click" vs. legal review, security audits, BAAs for third-party vendors. Experts expect 2026 to be year "good enough" incumbent AI wipes out best-of-breed point solutions. "Unless startup's performance is orders of magnitude better, path of least resistance wins." ([Menlo Ventures](https://menlovc.com/perspective/2025-the-state-of-ai-in-healthcare/))

- [ ] **JEPA architecture unproven beyond MSK.** Validated on one cancer center's data. Transfer to other institutions, cancer types, non-oncology conditions uncertain. Overfitting risk is real in healthcare ML.
  - *Needs validation:* Replication at Dana-Farber, MD Anderson, non-academic settings. Standard Model targeting 10 AMCs publishing on model by Q2 2026.

- [ ] **World model architecture may commoditize quickly.** ODesign (world model for biomolecular interaction) is open-source Apache 2.0. V-JEPA 2 from Meta is open. Academic open-sourcing accelerates. Architecture advantage may shrink to 12-18 months.
  - *Needs monitoring:* Track how quickly Bioptimus M-Optimus, Epic Curiosity erode Standard Model's technical differentiation

- [ ] **Data access insurmountable for startups.** World models need longitudinal data at scale. Epic has 100B events. HIPAA/consent barriers could block multi-institution aggregation.
  - *Needs validation:* Standard Model ARPA-H initiative targets 10% US patient data (VA-heavy). Kaiser partnership (15M patients, 20 years) as proof of alternative data path.

## The Counter Thesis

Epic wins by default. With 300M patients in Cosmos, 100B+ medical events, researcher access launching February 2026, and 150+ AI features in development, Epic's Curiosity model represents the same architectural insight (simulate future timelines, not predict tokens) with unassailable data scale. Startups face a three-front war: (1) Epic has the data moat, (2) Epic has the distribution (90%+ of US hospitals using their EHR), (3) customers prefer buying AI from their incumbent EHR for operational simplicity.

The 2026 evidence is stark: EHR vendors are now a "competitive threat to startups" according to industry experts. The "integration tax" for third-party vendors (legal review, security audits, BAAs) means Epic's "one-click" activation beats startups unless performance is "orders of magnitude better."

The Standard Model path requires either: (a) winning specific verticals where Epic's EHR-centric data is insufficient (oncology with imaging + genomics + pathology), (b) achieving performance differentiation so stark that pharma mandates it for regulatory purposes, or (c) capturing the ARPA-H/VA data initiative to build alternative data access.

The most bearish scenario: Epic bundles Curiosity into EHR contracts at minimal marginal cost, GPT-5/o4-class models achieve trajectory prediction through scale + reasoning, and specialized world model startups get squeezed from both sides. This would validate the architecture thesis while invalidating the startup investment opportunity.

---

## Timeline

**Now to 2026:**
- Standard Model weights public on HuggingFace, enables academic replication. Target: 10 AMCs publishing on model by Q2 2026.
- Epic Curiosity researcher access Feb 2026—watch adoption velocity and benchmark results
- Standard Model $2.5M bridge on $35M cap; AstraZeneca meeting "exceeded expectations"; JPM panel validates positioning
- Key signals: Do AMCs (Dana-Farber, MD Anderson) replicate MSK results? Does ARPA-H data initiative materialize?
- Watch: GPT-5.2, o4 release—do reasoning models close the gap on dynamic tasks?
- Epic native ambient AI launching early 2026—watch adoption vs. Abridge/Nabla

**2027 to 2028:**
- World model becomes standard benchmark for clinical AI papers
- FDA guidance on simulation-based evidence expected (trial design implications)
- Epic either dominates clinical AI or fails to translate Curiosity to clinical workflows
- Inflection: Pharma trials using world model for synthetic control arms
- Market bifurcation: Epic wins general clinical AI, specialists win deep verticals
- Critical test: Does specialized outperformance persist (8B > 405B on precision tasks)?

**2029+:**
- Token-prediction LLMs relegated to documentation/summarization/admin
- World model architecture table stakes for clinical decision support
- Epic or 2-3 specialized players dominate trajectory prediction
- Trial simulation standard in drug development
- Counterfactual analysis enables precision dosing, adaptive therapy

---

## Startup Opportunities

**1. Oncology World Model (Standard Model path)**
- Why this follows: JEPA +5.8% AUROC proven. Drug spend is 70% of oncology spend. Pharma contracts ($4.8M Sanofi) validate willingness to pay. First to crack trajectory prediction at scale wins regulatory premium.
- Wedge: Academic partnerships (MSK, MD Anderson, Yale, Kaiser). Publish replication studies. Make "bad practice" not to benchmark against the model. Capture ARPA-H data initiative (10% US patient data target).
- Risk: Epic Curiosity bundles trajectory prediction into EHR. Data access (18-24 months to negotiate). GPT-5/o4 reasoning models close the gap without architectural change.

**2. Clinical Trial Simulation SaaS**
- Why this follows: Trial failures cost $50-200M. Even 10% improvement in design ROI is $5-20M value per trial. World models enable counterfactual analysis ("what if different treatment?"). Synthetic control arms reduce trial size requirements.
- Wedge: Partner with CROs for pilot studies. Outcomes-based pricing: pay only if simulation predictions validated. Target Phase 2/3 trials where failure cost is highest.
- Risk: Regulatory acceptance of simulated evidence uncertain. Pharma conservatism. Data access for training longitudinal cohorts.

**3. FDA-Certifiable Healthcare Agents (Nabla path)**
- Why this follows: Nabla $120M + LeCun AMI partnership validates path to FDA-certifiable agentic AI using world model technology. Agents that can plan and act (not just chat) require trajectory prediction.
- Wedge: Start with lower-risk agentic use cases (prior authorization, care coordination). Build FDA dossier. Expand to clinical decision support.
- Risk: FDA pathway for agentic AI unclear. Epic bundles agentic capabilities.

---

## Watch For

**If RIGHT (thesis plays out):**
- Standard Model or similar replicates results at 2+ additional cancer centers by mid-2026
- Pharma signs world model contracts >$5M (not just POCs)
- FDA issues guidance acknowledging simulation-based evidence in trial design
- o4/o5-class reasoning models still underperform world models on trajectory tasks
- Epic Curiosity fails to penetrate clinical workflows (distribution ≠ adoption)
- Specialized 8B models continue outperforming 405B+ general-purpose on precision tasks

**If WRONG (thesis fails):**
- Epic Curiosity dominates clinical AI discourse by end of 2026, startups can't differentiate
- GPT-5.2/o4 reasoning models achieve 80%+ on treatment change prediction without architectural change
- JEPA advantages don't transfer outside MSK (overfitting confirmed)
- Pharma continues buying generic foundation model access, no premium for trajectory prediction
- Standard Model ARPA-H/Kaiser partnerships fail to materialize

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]] | Research | "GPT-4 achieves just 30.3% completeness" on real treatment decisions. "Language is a sufficient proxy for disease biology" is flawed assumption. |
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]] | Research | MSK validation: JEPA 0.727 vs Qwen3-VL 0.687 AUROC. Treatment change 0.78 vs 0.70. "Hierarchy unambiguous: generalist < specialist < world model." |
| 2025-12-17 | [[Bioptimus Unveils M-Optimus, a World Model for Biology]] | Company | "First model combining multiple biological modalities at this scale." #1 ranked out of 22 pathology FMs. |
| 2025-12-18 | [[CRONOS Continuous Time Reconstruction for 4D Medical Longitudinal Series]] | Research | "First continuous sequence-to-image forecasting for 3D medical data." 50-70% scan reduction potential. |
| 2025-12-21 | [[Curiosity A New Medical Intelligence for Clinical and Operational Insights]] | Company | Epic Curiosity: 100B+ events, "plausible future timelines," outperformed 78 single-purpose models. Feb 2026 researcher access. |
| 2025-12-11 | [[SMB __ Virtue]] | Operator | Sanofi $360K POC + $4.8M contract. "Performance so superior that not using SMB model risks regulatory approval." |
| 2025-12-29 | [[Beyond Generative AI - World Models for Clinical Prediction]] | Research | L1-L4 capability framework. "JEPA-style predictive representation learning" as emerging approach. Most systems achieve L1-L2, few L3, rare L4. |
| 2025-12-29 | [[PerturBench and Foundation Model Perturbation Failures]] | Research | Nature Methods: "None of the deep learning models was able to consistently outperform the mean prediction." Foundation models fail at perturbation. |
| 2025-12-29 | [[Zero-shot evaluation reveals limitations of single-cell foundation models]] | Research | scGPT and Geneformer perform WORSE than HVG + Harmony baselines. "MLM pretraining may not produce useful cell embeddings." |
| 2026-01-04 | [[Benchmarking LLMs for Predictive Applications in the Intensive Care Units]] | Research | "LLMs are not inherently superior to SLMs in predicting future clinical events...should prioritize models capable of predicting clinical trajectories." |
| 2026-01-04 | [[SLIM-Brain A Data- and Training-Efficient Foundation Model for fMRI Data Analysis]] | Research | Uses explicit JEPA architecture (Hiera-JEPA) for voxel-level fMRI representations. SOTA on diverse brain imaging tasks. |
| 2026-01-04 | [[SurgWorld Learning Surgical Robot Policies from Videos via World Modeling]] | Research | World model for surgical robotics: generates realistic surgery videos, VLA policy outperforms real-only training. |
| 2026-01-12 | [[Sources/Granola/Virtue - Internal Team Sync-2026-01-12_11-21-24]] | Operator | "Yann LeCun's Ami raised ~$500M at $3.5B valuation for JEPA approach—major capital commitment validates world model thesis" |
| 2026-01-11 | [[Sources/Browser-History/2026-01-11-nabla]] | Company | "Nabla raised $120M, partners with Yann LeCun's Advanced Machine Intelligence for world model technology to build FDA-certifiable agentic AI in healthcare" |
| 2026-01-16 | [[Sources/Granola/Kevin Brown and Virtue-2026-01-16_13-00-36]] | Operator | "SMB: AstraZeneca meeting exceeded expectations; JPM panel on AI agents calling foundation models; $2.5M bridge on $35M cap" |
| 2026-01-26 | [[Sources/Research-Papers/RadJEPA Radiology Encoder for Chest X-Rays via Joint Embedding Predictive Architecture]] | Research | "RadJEPA self-supervised JEPA framework outperforms Rad-DINO on disease classification, segmentation, and report generation" |
| 2026-01-26 | [[Sources/Research-Papers/A Multimodal Deep Learning Framework for Predicting ICU Deterioration Integrating ECG Waveforms with]] | Research | "MDS-ICU: 0.90 AUC mortality, 0.97 AUC mechanical ventilation—multimodal AI outperforms both clinicians and LLMs on 33 ICU outcomes" |
| 2026-01-26 | [[Sources/Research-Papers/ART Action-based Reasoning Task Benchmarking for Medical AI Agents]] | Research | "GPT-4o-mini and Claude 3.5 show substantial gaps in EHR aggregation (28-64%) and threshold reasoning (32-38%)—validates LLM limitations on dynamic clinical tasks" |
| 2026-01-26 | Web: [OpenAI GPT-5](https://openai.com/index/introducing-gpt-5/) | Company | GPT-5: +29.62% reasoning, +36.18% understanding over GPT-4o on medical benchmarks. 6x fewer hallucinations than o3. |
| 2026-01-26 | Web: [NEJM AI Clinical Reasoning](https://ai.nejm.org/doi/full/10.1056/AIdbp2500120) | Research | o3 achieved 67.8% on clinical reasoning benchmark. LLMs perform "markedly lower" than physicians on script concordance testing. |
| 2026-01-26 | Web: [V-JEPA 2](https://ai.meta.com/blog/v-jepa-2-world-model-benchmarks/) | Research | Meta V-JEPA 2: 1.6B params matches larger VLMs, 30x faster than Nvidia Cosmos on zero-shot robotic planning. |
| 2026-01-26 | Web: [Healthcare Dive 2026 Trends](https://www.healthcaredive.com/news/top-healthcare-ai-artificial-intelligence-trends-2026/809493/) | News | EHR vendors "competitive threat to startups." Epic 150+ AI features in development. "Good enough" incumbent AI may wipe out best-of-breed. |

---

*Confidence: MEDIUM — Core architectural mechanism validated (JEPA beats LLMs on trajectory prediction). Two HIGH threats: (1) GPT-5 reasoning models improving faster than expected on diagnostic tasks, (2) Epic's data moat and distribution advantage makes startup competition extremely difficult. Specialized models still outperform general-purpose on precision tasks, but integration barrier favors incumbents.*

*Last rebuilt: 2026-01-26*

*Contrarian threats: GPT-5 reaches above human-expert performance on multimodal medical reasoning (HIGH)—addressed by noting trajectory prediction gap persists. Epic Curiosity + 150 AI features + native ambient AI creates insurmountable incumbent advantage (HIGH)—addressed by narrowing thesis to specialized verticals where multimodal integration matters more than EHR scale.*
