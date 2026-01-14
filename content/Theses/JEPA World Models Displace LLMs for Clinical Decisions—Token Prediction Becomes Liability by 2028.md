![[Images/jepa-world-models-displace-llms-for-clinical-decisions.png]]

## 1-2 Sentence Summary

**Clinical AI developers** adopt world model architecture over LLMs because LLMs predict tokens but clinicians need trajectory predictions → world models become standard for clinical decision support; LLM-only approaches retreat to documentation and summarization.

---

## Investment Take

**Today:** Foundation models trained on medical text are hitting a measurable ceiling on real clinical tasks. GPT-4 achieves just 30.3% completeness on oncology treatment decisions. The latest reasoning models (o3, GPT-5) improve diagnostic accuracy to 67-78% on static benchmarks, but still fail on dynamic trajectory prediction where disease progression and treatment response matter most.

The fundamental problem is architectural: LLMs predict the next token, but clinicians need to predict the next patient state. When a physician asks "If I give Drug A, where will this patient be in 6 months?", an LLM has no mechanism to answer—it can only generate plausible-sounding text based on pattern matching. This is why foundation models fail at perturbation prediction in biology (Nature Methods 2025: "None of the deep learning models was able to consistently outperform the mean prediction or the linear model") and why single-cell foundation models like scGPT and Geneformer perform worse than simple HVG + Harmony baselines.

World models—specifically JEPA-style architectures that predict future states in latent space rather than generating pixels or tokens—solve this by modeling biological dynamics directly. Standard Model's JEPA achieves 0.78 AUROC on treatment change prediction vs. 0.70 for generalist models, with the gap widening on heterogeneous conditions like sarcoma (+6 points). This isn't marginal improvement; it's a structural advantage that compounds as clinical tasks become more dynamic.

The catch: Epic already knows this. Their Curiosity model (100B+ events, Feb 2026 researcher access) uses the same architectural insight—simulating "plausible future timelines" rather than predicting tokens. The real competition isn't JEPA vs. LLM; it's Epic's data moat (300M patients) vs. specialized players with richer multimodal data in specific verticals.

**In 3-5 years:** World model architecture becomes table stakes for clinical decision support. The market bifurcates: Epic dominates general clinical AI through distribution and data scale, while specialized players (Standard Model, Bioptimus) capture premium pricing in deep verticals like oncology where multimodal integration (imaging + genomics + pathology + EHR) matters more than raw scale.

LLMs don't disappear—they retreat to tasks where token prediction is the right paradigm: clinical documentation, summarization, patient communication, prior authorization. This is a massive market, but it's not clinical decision-making. The winners in trajectory prediction are those who solve the data access problem: Epic (incumbent advantage), Kaiser partnerships (alternative path), or companies that make "not using our model risks regulatory approval" (Standard Model's stated goal).

Pharma becomes the high-margin customer for trajectory prediction. Trial simulation, synthetic control arms, and counterfactual analysis ("what would have happened with different treatment?") command 10x premiums because trial failures cost $50-200M. Even 10% improvement in trial design ROI is $5-20M value per trial. Sanofi's $4.8M contract with Standard Model validates willingness to pay.

**How this evolved:**
- *2025-12-17:* Core insight crystallized from Standard Model blog: "Human biology is not a linguistic problem; it is inherently multimodal." GPT-4's 30.3% completeness on real treatment decisions proved LLM ceiling.
- *2025-12-17:* MSK validation: JEPA 0.727 vs Qwen3-VL 0.687 AUROC. Treatment change prediction 0.78 vs 0.70. Model weights public.
- *2025-12-20:* Upgraded to Emerging. Multiple implementations validating architecture: CRONOS (4D imaging), MCR-VQGAN (synthetic PET), Bioptimus M-Optimus.
- *2025-12-21:* Epic Curiosity launched. Incumbent threat validated—they're building this too.
- *2025-12-29:* PerturBench (Nature Methods): Foundation models fail at perturbation prediction. scGPT worse than mean baseline. Critical validation that token prediction fails for interventional questions.
- *2026-01-07:* **REBUILD** — Pressure-tested with contrarian queries. Two HIGH threats identified: (1) o3/GPT-5 reasoning models improving rapidly on diagnostic tasks (67.8% on NEJM benchmark), (2) Epic's data moat more formidable than assumed (300M patients, 100B events). Core mechanism confirmed but confidence lowered. Title unchanged—architectural bet remains valid.

---

## Bull Case

- [x] **LLMs hit measurable ceiling on clinical trajectory tasks.** GPT-4 achieves 30.3% completeness on real oncology treatment decisions. LLMs perform "markedly lower" than physicians on script concordance testing (NEJM AI 2025). Even o3 (67.8% on clinical reasoning) still underperforms senior residents and attending physicians. ([[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]], [[Assessment of Large Language Models in Clinical Reasoning: A Novel Benchmarking Study | NEJM AI]])

- [x] **Foundation models fail at perturbation/intervention prediction.** Nature Methods 2025: "None of the deep learning models was able to consistently outperform the mean prediction or linear model" on gene perturbation. scGPT and Geneformer perform WORSE than simple baselines. Token prediction architecturally cannot answer "what happens if we give Drug X?" ([[PerturBench and Foundation Model Perturbation Failures]], [[Zero-shot evaluation reveals limitations of single-cell foundation models]])

- [x] **JEPA architecture delivers quantified lift on dynamic tasks.** +5.8% AUROC over SFT-only on MSK data. Treatment change prediction 0.78 vs 0.70. Sarcoma sees +6 point lift where pattern-matching fails. "Hierarchy unambiguous: generalist < specialist < world model." ([[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]])

- [x] **Multiple independent teams converging on world model architecture.** Epic Curiosity (100B events), Bioptimus M-Optimus (first multimodal bio world model), CRONOS (4D imaging), SurgWorld (surgical robotics), SLIM-Brain (JEPA for fMRI). Academic review explicitly names "JEPA-style predictive representation learning" as emerging approach. ([[Curiosity A New Medical Intelligence for Clinical and Operational Insights]], [[Bioptimus Unveils M-Optimus, a World Model for Biology]], [[Beyond Generative AI - World Models for Clinical Prediction]])

- [x] **Pharma validation through commercial contracts.** Sanofi $360K POC + $4.8M contract. Standard Model goal: "performance so superior that not using SMB model risks regulatory approval." Tempus (strongest in genomics) outsourcing foundation model capabilities—validates build-vs-buy dynamic. ([[SMB __ Virtue]], [[SMB __ Virtue-2025-11-21_15-32-49]])

- [ ] **Reasoning models don't close the gap on trajectory tasks.** o3/GPT-5 improve on DIAGNOSTIC accuracy (static) but lack mechanism for trajectory prediction (dynamic). Needs monitoring as o4/o5 release.
  - *Needs validation:* Track o4/o5 performance on treatment change prediction benchmarks, not just diagnostic accuracy

---

## Bear Case

- [x] **Epic already building this with insurmountable data moat.** Curiosity: 100B+ events, outperformed 78 single-purpose models, Feb 2026 researcher access. Epic has 300M patients via Cosmos, 37.7% acute care market share. Customers prefer buying AI from incumbent EHR. ([[Curiosity A New Medical Intelligence for Clinical and Operational Insights]], [Epic's AI-Driven Dominance in U.S. Healthcare](https://www.ainvest.com/news/epic-ai-driven-dominance-healthcare-monopoly-built-data-innovation-2508/))

- [x] **o3/GPT-5 reasoning models improving rapidly.** o3 achieved 67.8% on NEJM clinical reasoning benchmark. GPT-5 sets new SOTA on HealthBench Hard (46.2%). If reasoning alone solves trajectory prediction, architectural advantage disappears. ([[Assessment of Large Language Models in Clinical Reasoning: A Novel Benchmarking Study | NEJM AI]])

- [ ] **JEPA architecture unproven beyond MSK.** Validated on one cancer center's data. Transfer to other institutions, cancer types, non-oncology conditions uncertain. Overfitting risk is real in healthcare ML.
  - *Needs validation:* Replication at Dana-Farber, MD Anderson, non-academic settings

- [ ] **World model architecture may commoditize quickly.** ODesign (world model for biomolecular interaction) is open-source Apache 2.0. Academic open-sourcing accelerates. Architecture advantage may shrink to 12-18 months.
  - *Needs monitoring:* Track how quickly Bioptimus M-Optimus, Epic Curiosity erode Standard Model's technical differentiation

- [ ] **Data access insurmountable for startups.** World models need longitudinal data at scale. Epic has 100B events. HIPAA/consent barriers could block multi-institution aggregation.
  - *Needs validation:* Standard Model Kaiser partnership (15M patients, 20 years) as proof of alternative data path

## The Counter Thesis

Epic wins by default. With 300M patients in Cosmos, 100B+ medical events, and researcher access launching February 2026, Epic's Curiosity model represents the same architectural insight (simulate future timelines, not predict tokens) with unassailable data scale. Startups face a three-front war: (1) Epic has the data moat, (2) Epic has the distribution (90%+ of US hospitals), (3) customers prefer buying AI from their incumbent EHR.

The Standard Model path requires either: (a) winning specific verticals where Epic's EHR-centric data is insufficient (oncology with imaging + genomics + pathology), or (b) achieving performance differentiation so stark that pharma mandates it for regulatory purposes. Path (a) is viable but narrows the TAM. Path (b) is the stated goal ("performance so superior that not using SMB model risks regulatory approval") but remains unproven.

The most bearish scenario: Epic bundles Curiosity into EHR contracts at minimal marginal cost, reasoning models like o4/o5 achieve trajectory prediction through pure scale, and specialized world model startups get squeezed from both sides. This would validate the architecture thesis while invalidating the startup investment opportunity.

---

## Timeline

**Now to 2026:**
- Standard Model weights public on HuggingFace, enables academic replication
- Epic Curiosity researcher access Feb 2026—watch adoption velocity and benchmark results
- Sanofi contract close ($4.8M) validates pharma willingness to pay for trajectory prediction
- Key signals: Do AMCs (Dana-Farber, MD Anderson) replicate MSK results? Does Kaiser partnership data access materialize?
- Watch: o4/o5 release—do reasoning models close the gap on dynamic tasks?

**2027 to 2028:**
- World model becomes standard benchmark for clinical AI papers
- FDA guidance on simulation-based evidence expected (trial design implications)
- Epic either dominates clinical AI or fails to translate Curiosity to clinical workflows
- Inflection: Pharma trials using world model for synthetic control arms
- Market bifurcation: Epic wins general clinical AI, specialists win deep verticals

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
- Wedge: Academic partnerships (MSK, MD Anderson, Yale, Kaiser). Publish replication studies. Make "bad practice" not to benchmark against the model. Achieve performance so stark that not using it risks regulatory approval.
- Risk: Epic Curiosity bundles trajectory prediction into EHR. Data access (18-24 months to negotiate). Reasoning models close the gap without architectural change.

**2. Clinical Trial Simulation SaaS**
- Why this follows: Trial failures cost $50-200M. Even 10% improvement in design ROI is $5-20M value per trial. World models enable counterfactual analysis ("what if different treatment?"). Synthetic control arms reduce trial size requirements.
- Wedge: Partner with CROs for pilot studies. Outcomes-based pricing: pay only if simulation predictions validated. Target Phase 2/3 trials where failure cost is highest.
- Risk: Regulatory acceptance of simulated evidence uncertain. Pharma conservatism. Data access for training longitudinal cohorts.

**3. Radiology Dynamics AI (CRONOS + MCR-VQGAN validated)**
- Why this follows: CRONOS enables 50-70% scan reduction via temporal prediction. MCR-VQGAN cuts tau PET costs 80-90% via MRI synthesis. Both are state prediction architectures.
- Wedge: Partner with NCI-designated cancer centers. Breast/lung cancer protocols have clear imaging guidelines. Publish clinical validation showing equivalent outcomes with fewer scans.
- Risk: Radiologists resist protocol changes. FDA pathway for synthetic imaging unclear. Hospital reimbursement models favor more scans (perverse incentive).

---

## Watch For

**If RIGHT (thesis plays out):**
- Standard Model or similar replicates results at 2+ additional cancer centers by mid-2026
- Pharma signs world model contracts >$5M (not just POCs)
- FDA issues guidance acknowledging simulation-based evidence in trial design
- o4/o5-class reasoning models still underperform world models on trajectory tasks
- Epic Curiosity fails to penetrate clinical workflows (distribution ≠ adoption)

**If WRONG (thesis fails):**
- Epic Curiosity dominates clinical AI discourse by end of 2026, startups can't differentiate
- o4/o5 reasoning models achieve 80%+ on treatment change prediction without architectural change
- JEPA advantages don't transfer outside MSK (overfitting confirmed)
- Pharma continues buying generic foundation model access, no premium for trajectory prediction
- Standard Model Kaiser partnership fails to materialize

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]] | Research | "GPT-4 achieves just 30.3% completeness" on real treatment decisions. "Language is a sufficient proxy for disease biology" is flawed assumption. |
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]] | Research | MSK validation: JEPA 0.727 vs Qwen3-VL 0.687 AUROC. Treatment change 0.78 vs 0.70. "Hierarchy unambiguous: generalist < specialist < world model." |
| 2025-12-17 | [[Bioptimus Unveils M-Optimus, a World Model for Biology]] | Company | "First model combining multiple biological modalities at this scale." Trained on millions of patients, 50 organ types. |
| 2025-12-18 | [[CRONOS Continuous Time Reconstruction for 4D Medical Longitudinal Series]] | Research | "First continuous sequence-to-image forecasting for 3D medical data." 50-70% scan reduction potential. |
| 2025-12-20 | [[papers-digest-2025-W51]] | Research | CRONOS, MCR-VQGAN (80-90% cost reduction for tau PET from MRI). State prediction over token prediction. |
| 2025-12-21 | [[Curiosity A New Medical Intelligence for Clinical and Operational Insights]] | Company | Epic Curiosity: 100B+ events, "plausible future timelines," outperformed 78 single-purpose models. |
| 2025-12-11 | [[SMB __ Virtue]] | Operator | Sanofi $360K POC + $4.8M contract. "Performance so superior that not using SMB model risks regulatory approval." |
| 2025-11-21 | [[SMB __ Virtue-2025-11-21_15-32-49]] | Operator | Tempus seeking genomics foundation model partners. Validates multimodal leaders outsourcing capabilities. |
| 2025-12-29 | [[Beyond Generative AI - World Models for Clinical Prediction]] | Research | L1-L4 capability framework. Explicitly names "JEPA-style predictive representation learning" as emerging approach. |
| 2025-12-29 | [[PerturBench and Foundation Model Perturbation Failures]] | Research | Nature Methods: "None of the deep learning models was able to consistently outperform the mean prediction." Foundation models fail at perturbation—exactly what matters for drug discovery. |
| 2025-12-29 | [[Zero-shot evaluation reveals limitations of single-cell foundation models]] | Research | scGPT and Geneformer perform WORSE than HVG + Harmony baselines. Sometimes worse than random weights. "MLM pretraining may not produce useful cell embeddings." |
| 2025-12-29 | [[DNA Foundation Models Benchmark - Nature Communications 2025]] | Research | General-purpose DNA foundation models less effective than specialized models on complex tasks (gene expression, causal QTL). |
| 2025-12-29 | [[Recursion Boltz-2 Partnership and REC-4881 Results]] | Company | REC-4881 positive Phase 1b/2 results—clinical validation of AI drug discovery. BUT: validates data moat (65PB) > architecture moat. |
| 2025-12-29 | [[ODesign - World Model for Biomolecular Interaction Design]] | Research | First generative world model for cross-modality molecular design. Open-source Apache 2.0. Architecture commoditization risk. |
| 2025-12-29 | [[Comparative Benchmarking of Five Contemporary Language Models on Clinical Reasoning]] | Research | LLMs differ in safety constraint handling. Kimi K2 and GPT-5.2 achieved 100% diagnostic accuracy but nuanced reasoning fails safety tests. |
| 2026-01-04 | [[Benchmarking LLMs for Predictive Applications in the Intensive Care Units]] | Research | "LLMs are not inherently superior to SLMs in predicting future clinical events...should prioritize models capable of predicting clinical trajectories." |
| 2026-01-04 | [[SLIM-Brain A Data- and Training-Efficient Foundation Model for fMRI Data Analysis]] | Research | Uses explicit JEPA architecture (Hiera-JEPA) for voxel-level fMRI representations. SOTA on diverse brain imaging tasks. |
| 2026-01-04 | [[SpatialBench Can Agents Analyze Real-World Spatial Biology Data]] | Research | Frontier AI agents achieve only 20-38% accuracy on spatial biology analysis. Validates LLM limitations on biological reasoning. |
| 2026-01-04 | [[Vaalia Health Causal AI for precision healthcare]] | Company | Causal AI for adherence prediction. Counterfactual "what-if" analysis. 20-40% oral oncology discontinuation addressable. |
| 2026-01-04 | [[SurgWorld Learning Surgical Robot Policies from Videos via World Modeling]] | Research | World model for surgical robotics: generates realistic surgery videos, VLA policy outperforms real-only training. |
| 2026-01-12 | [[Sources/Granola/Virtue - Internal Team Sync-2026-01-12_11-21-24]] | Operator | "Yann LeCun's Ami raised ~$500M at $3.5B valuation for JEPA approach—major capital commitment validates world model thesis" |
| 2026-01-11 | [[Sources/Browser-History/2026-01-11-nabla]] | Company | "Nabla raised $120M, partners with Yann LeCun's Advanced Machine Intelligence for world model technology to build FDA-certifiable agentic AI in healthcare" |

---

*Confidence: MEDIUM — Core architectural mechanism validated (JEPA beats LLMs on trajectory prediction). Two HIGH threats: (1) o3/GPT-5 reasoning models improving rapidly on diagnostic tasks, (2) Epic's data moat more formidable than assumed. Timeline may be optimistic.*

*Last rebuilt: 2026-01-07*

*Contrarian threats: o3/GPT-5 at 67.8% on clinical reasoning closing the gap (HIGH); Epic Curiosity's 300M patient data moat makes startup competition difficult (HIGH). Addressed by narrowing thesis to specialized verticals where multimodal integration (not just EHR scale) determines winners.*
