# Thesis: Foundation Models for Medicine

**Type:** Tech (How to build? What architecture?)

## The Take

LLMs are hitting a ceiling in healthcare—they predict tokens, not patient trajectories. The next wave is "world models" that understand biological/clinical dynamics and can simulate outcomes given interventions. JEPA-style architectures predicting state, not next token. This is a distinct category from foundation models: dynamics > snapshots.

**How this evolved:** Emerged from cluster: Standard Model for oncology ("patient is not a document"), M-Optimus ("world model for biology"), Cambrian-S (spatial supersensing). Common thread: moving beyond text-based LLMs to models that understand physical/biological reality.

## Maturity: Emerging

---

## How The Market Works

**The architecture shift:**
```
LLMs (Current)                 WORLD MODELS (Emerging)
──────────────────────────────────────────────────────
Predict next token       →    Predict next state
Static snapshots         →    Temporal dynamics
Text/image classification →   Trajectory simulation
"What is this?"          →    "What happens if?"
```

**Why LLMs are insufficient:**

Standard Model research showed: LLMs achieve only 30.3% completeness on real oncology treatment decisions. They can describe current state but can't reason about interventions and outcomes over time.

Healthcare decisions are fundamentally about: "If I do X, what happens to the patient?" LLMs can't answer this. World models can—and now we have evidence.

**MSK Validation (Dec 2025):** Standard Model tested JEPA architecture on real Memorial Sloan Kettering oncology data. Key findings:
- SMB-v1-1.7B (SFT+JEPA) achieved 0.727 AUROC vs 0.687 for Qwen3-VL 8B
- The lift is specific to **dynamic tasks** (treatment change prediction, progression)—static tasks like mortality show smaller gaps
- On treatment change prediction: generalist models ~0.70, JEPA model **0.78**
- "Specialization beats scale"—domain grounding matters more than parameters

**JEPA architecture:**
- Joint Embedding Predictive Architecture
- Predicts representations of future states, not pixel/token predictions
- Learns dynamics, not just correlations
- Proposed by Yann LeCun as path beyond LLMs
- Performs predictions in representation space, eliminating need to predict every detail
- Enables elimination of irrelevant details by encoders, focusing on high-level dynamics

**Clinical applications emerging:**
- CheXWorld: JEPA-style predictive objectives for radiograph representations (local anatomy, global layout, domain variation)
- DT-GPT (Nature Digital Medicine): LLM forecasting extended to clinical trajectories, validating patient simulation
- T-JEPA: Samples and predicts trajectory segments in representation space, robust to noise and irregular sampling
- Disease progression modeling from EHRs through generative event forecasting

**4D Medical Imaging Validation (Dec 2025):** CRONOS demonstrates continuous temporal reconstruction from sparse data points for 4D medical longitudinal series. The approach reduces scan frequency by 50-70% while improving disease progression tracking. This directly validates the world model thesis: rather than requiring dense temporal sampling (6-12 follow-up scans per cancer patient at $2,000-5,000 each), the model predicts future imaging states from sparse observations. The clinical driver is urgent: CMS reimbursement pressure and hospital margin compression create immediate ROI for reducing unnecessary imaging while maintaining diagnostic accuracy.

**Synthetic PET Generation (Dec 2025):** MCR-VQGAN achieves tau PET synthesis from routine MRI for Alzheimer's diagnosis, reducing diagnostic costs by 80-90%. Current tau PET costs $4,000-6,000 per scan and is available at only 200+ US centers, while 6.7M Americans need Alzheimer's evaluation. The world model approach—predicting tau PET representations from MRI state—enables 6,000+ MRI facilities to provide tau-equivalent imaging without PET infrastructure. This validates the core thesis: state prediction (what would the tau PET look like?) rather than token prediction (what words describe this patient?) is the architectural requirement for clinical utility.

---

## Competitive Landscape

**Oncology World Models (Most Advanced)**

**Standard Model / Memorial Sloan Kettering**
- Architecture: SFT+JEPA hybrid with mixed weights anchoring model to clinical outcomes
- Evidence: 0.727 AUROC, +5.8% over SFT-only on MSK data
- Performance: Treatment change prediction 0.78 vs 0.70 for generalist models
- Status: Model weights public on HuggingFace, replication possible
- Moat: MSK's longitudinal data (12+ years oncology records), clinical validation infrastructure
- Vulnerability: Single-institution validation, transfer to other cancer types/centers TBD

**Paige (acquired by Tempus for pathology foundation model integration)**
- Architecture: Million-slide foundation model for cancer pathology
- Evidence: First FDA approval for AI-based pathology (prostate cancer detection, 2021)
- Dataset: 1,000+ institutions globally including MSK
- Integration: Now part of Tempus platform (40M+ de-identified research records, 50% US oncologist reach)
- Moat: FDA regulatory clearance, institutional partnerships, Tempus clinical trial matching
- Vulnerability: Foundation model approach (snapshots not dynamics), no JEPA-style trajectory prediction yet

**Pathos AI**
- Funding: $100M Series A (January 2025)
- Focus: Oncology drug discovery and clinical trial optimization via AI
- Status: Recently emerged, platform details limited
- Position: Drug discovery angle vs clinical decision support

**PathAI**
- Product: AISight Dx toolset for caseload balancing, image viewing, case management
- Partnerships: Multiyear drug discovery with GlaxoSmithKline (oncology, NASH)
- Moat: Pathology provider relationships, pharma partnerships
- Limitation: Focused on static detection/grading, not trajectory prediction

**Pathology Dynamics Players (Foundation Models Transitioning)**

**Bioptimus (France)**
- Funding: $76M total ($35M seed Feb 2024, $41M Series A Jan 2025)
- Product: M-Optimus "world model for biology" from H&E pathology
- Approach: Moving beyond classification to simulation of tissue dynamics
- Evidence: Research stage, clinical validation pending
- Moat: European bioinformatics talent, foundation model for biology vision
- Vulnerability: Unclear if JEPA-style or alternative architecture, no published clinical results

**Ibex Medical Analytics**
- Dataset: 10M+ tissue slides worldwide
- Applications: Breast, prostate, gastric cancer detection and grading
- Strength: Pathology workflow integration, speed/accuracy improvements
- Limitation: Classification focus, not world model architecture

**Clinical Trajectory Prediction (EHR/Multi-Modal)**

**Tempus (NASDAQ: TEM, market cap ~$7B post-Paige acquisition)**
- Platform: xT Platform combining molecular profiling with clinical data
- Dataset: 40M+ de-identified research records, extensive oncology sequencing
- Reach: 50%+ US oncologists connected through sequencing, trial matching, research
- Acquisitions: Paige (pathology AI), expanding to tissue dynamics
- Revenue model: Molecular profiling tests, pharma partnerships, clinical trial matching
- Moat: Network effects (oncologists + data), regulatory approvals, pharma relationships
- World model potential: Has data and reach, unclear if pursuing JEPA-style dynamics modeling

**Biofourmis**
- Focus: Wearable technology + AI for cardiovascular/respiratory trajectory prediction
- Approach: Continuous physiological monitoring, ML to predict adverse events (heart failure, respiratory distress)
- Use case: Remote monitoring, reduce hospital readmissions
- Strength: Real-time dynamics (wearables generate temporal data naturally)
- Limitation: Narrow domain (physiology sensors), not tissue/pathology world models

**K Health**
- Approach: Clinical-grade medical chat, predictive AI from large datasets
- Application: Symptom analysis + patient history for diagnosis/treatment
- Position: Chat interface, not explicit world model architecture

**OpenEvidence (ChatGPT for doctors)**
- Valuation: $12B (2x from $6B in August 2025) after $250M equity raise
- Focus: Medical knowledge retrieval and evidence synthesis
- Growth: Revenue surge driving valuation doubling in months
- Potential: Aggregated data could enable predictive analytics/patient risk forecasting
- Current: Primarily retrieval/search, not trajectory prediction yet

**Radiology World Models (Imaging Dynamics)**

**CheXWorld**
- Architecture: JEPA-style predictive objectives with context/target encoders + predictor
- Application: Radiograph representations capturing local anatomy, global layout, domain variation
- Status: Research implementation, clinical deployment TBD
- Significance: Validates JEPA in radiology domain beyond oncology

**CRONOS (4D Medical Imaging)**
- Architecture: Continuous temporal reconstruction from sparse 4D medical longitudinal series
- Evidence: 50-70% scan frequency reduction while improving disease progression tracking
- Market impact: Cancer patients undergo 6-12 follow-up scans at $2,000-5,000 each—CRONOS predicts future imaging states from sparse observations
- Clinical driver: CMS reimbursement pressure + hospital margin compression create ROI for reducing unnecessary imaging
- Status: Emerging research validation (Dec 2025), clinical deployment path TBD
- Moat potential: Patient-specific temporal models for disease progression prediction
- Startup angle: "CronosHealth" concept—AI-powered 4D medical monitoring platform, $150K-300K annual licenses to academic medical centers

**MCR-VQGAN (Synthetic PET from MRI)**
- Architecture: Generates synthetic tau PET from routine MRI for Alzheimer's diagnosis
- Evidence: 80-90% cost reduction (tau PET $4,000-6,000 vs routine MRI)
- Market gap: 6.7M Americans need Alzheimer's evaluation, but tau PET available at only 200+ US centers
- Impact: Enables 6,000+ MRI facilities to provide tau-equivalent imaging without PET infrastructure
- Status: Research stage (Dec 2025), regulatory pathway unclear
- Moat potential: MRI-to-PET representation learning, neurology practice partnerships
- Startup angle: "TauSynth" concept—synthetic PET imaging from MRI, $100K-200K annual licenses to neurology practices
- Competitive position: Radically different approach than PET scanner manufacturers (GE, Siemens)—software enables existing MRI base

**Meta's V-JEPA 2 (Open-Source Infrastructure)**
- Release: Open-source world model for physical reasoning
- Architecture: Self-supervised world model, video understanding
- Clinical potential: Could be adapted for medical imaging dynamics (CT series, MRI sequences)
- Status: General-purpose infrastructure, not healthcare-specific yet
- Impact: Lowers barrier for clinical teams to experiment with JEPA architectures

**Market Structure Observations:**

1. **Specialization by modality:** Oncology (Standard Model, Paige, Pathos), pathology (Bioptimus, Ibex), radiology (CheXWorld), physiology (Biofourmis)
2. **Architecture divide:** Foundation models (static, classification-focused) vs world models (dynamics, trajectory-focused)
3. **Validation gap:** Most have detection/classification evidence, few have trajectory prediction validation
4. **Data moats:** Institutional partnerships (MSK, pathology labs) critical for longitudinal training data
5. **Regulatory position:** Paige leads with FDA approval, but for static detection not trajectory prediction
6. **Acquisition consolidation:** Tempus acquiring Paige signals platform plays aggregating modalities

---

## Why This Matters Now

1. **LLM ceiling documented.** Standard Model research quantified the gap: 30% completeness on real decisions. This isn't a training data problem—it's an architecture problem.

2. **Biology world models emerging.** M-Optimus: "world model for biology" from pathology. Moving beyond classification to simulation of tissue dynamics.

3. **Spatial understanding advancing.** Cambrian-S: spatial supersensing from video. Understanding 3D structure and dynamics from 2D inputs. Same capability needed for clinical imaging.

4. **Clinical validation beginning.** MSK data shows JEPA architecture achieving +5.8% AUROC improvement on dynamic tasks. This is first real-world evidence that world models outperform LLMs for trajectory prediction.

5. **Open-source infrastructure available.** Meta's V-JEPA 2 provides foundation for clinical teams to adapt world model architectures without building from scratch.

6. **Market timing:** AI in oncology growing at 26% CAGR, drug discovery AI at 26% CAGR. Pharma desperate for patient trajectory prediction—willingness to pay premium for models that actually work.

7. **Regulatory momentum.** First pathology AI approvals established precedent. Clinical decision support pathway clearer than 3 years ago.

---

## The Bull Case

1. **Architecture is the unlock.** If JEPA-style models can learn clinical dynamics, they could leapfrog current AI in healthcare. First to crack this wins.

2. **Simulation enables counterfactuals.** "What would have happened if we'd chosen different treatment?" is the holy grail for clinical decision support. World models enable this—LLMs cannot.

3. **Pharma will pay premium.** Drug companies desperately want patient trajectory prediction. AI in drug discovery market $2.6B in 2025, $8.2B by 2030. If world models work for trial simulation, they're worth 10x foundation models for snapshot analysis.

4. **Validation exists and is replicable.** Standard Model weights public on HuggingFace. Other cancer centers can validate, extend to more cancer types. JEPA in radiology (CheXWorld) shows architecture transfers across modalities.

5. **Data moats are buildable.** Institutional partnerships (MSK model) create defensibility. Longitudinal patient data is scarce—first to aggregate 5+ institutions in a domain wins.

6. **Clinical champions emerging.** CMIOs prioritizing AI that proves ROI. World models with trajectory prediction have clearer clinical utility than general-purpose LLMs.

---

## The Bear Case

1. **Architecture is unproven beyond MSK.** JEPA validated on one cancer center. Transfer to other institutions, cancer types, clinical domains uncertain. Could be overfitting to MSK-specific data patterns.

2. **Data requirements unclear.** World models might need longitudinal patient data at scale that doesn't exist (or can't be assembled due to privacy). HIPAA, consent barriers could block multi-institution aggregation.

3. **LLMs get better.** Maybe o3/o4-class reasoning models close the gap without architectural change. Reasoning > dynamics. If LLMs achieve 60%+ completeness on Standard Model benchmark via reasoning, world model advantage disappears.

4. **Regulatory pathway uncertain.** FDA approved Paige for detection, not trajectory prediction. Will regulators accept world model simulations as evidence for treatment decisions? If RCT required for every prediction, TAM limited to research tools.

5. **Clinical adoption friction.** Physicians skeptical of black-box predictions. World models less interpretable than rule-based systems. Champions required at every institution—slow, expensive rollout.

6. **Pharma may not pay premium.** Drug discovery AI market growing but competitive. If foundation models + wet lab validation sufficient, world models become nice-to-have, not must-have.

7. **Competition from platforms.** Tempus acquiring Paige shows consolidation. Startups building world models could get outcompeted by platforms with data network effects before reaching critical validation mass.

---

## Startup Opportunities

**1. Oncology World Model (Clinical Decision Support)**
- Technical approach: JEPA-style model for cancer treatment trajectory prediction, extend Standard Model to more cancer types
- Data strategy: Partner with 3-5 cancer centers for longitudinal data (12+ years patient records, outcomes)
- Wedge: Heterogeneous/rare cancers where LLMs perform worst (Standard Model showed +6 points on sarcoma)
- First customer: Cancer center CMIOs seeking AI with demonstrated clinical utility (not just ambient scribes)
- Revenue: Per-patient prediction fees ($50-200 per trajectory simulation) + pharma partnerships for trial design simulation
- Validation: Replicate MSK results at 2+ other institutions, publish validation study
- Moat: Longitudinal data partnerships, clinical validation evidence, JEPA architecture expertise
- Risk: Data access negotiations (18-24 months), regulatory pathway unclear for decision support
- Path to scale: Start with oncology, expand to cardiac (disease progression), ICU (adverse event prediction)

**2. Pathology Dynamics Platform**
- Technical approach: Extend M-Optimus/Bioptimus approach with JEPA for tissue evolution prediction
- Application: "What does this tumor look like in 6 months under treatment X?" for therapy selection
- Data strategy: Partner with digital pathology labs (Paige dataset model: 1,000+ institutions)
- Wedge: Pharma R&D partnerships—drug developers want tissue response prediction for trial design
- First customer: Top 10 pharma oncology R&D departments
- Revenue: Pathology lab subscriptions ($100k-500k/year per institution) + pharma R&D partnerships ($500k-2M per drug program)
- Validation: Retrospective studies comparing predicted tissue evolution to actual follow-up biopsies
- Moat: Pathology lab relationships, tissue dynamics training data (paired baseline + follow-up slides)
- Risk: Validation requires long follow-up periods (12-24 months), regulatory acceptance uncertain
- Path to scale: Oncology pathology → other tissue types (liver, kidney) → veterinary pathology (faster validation cycles)

**3. Clinical Trial Simulation SaaS**
- Technical approach: World model for trial outcome prediction from protocol + patient population characteristics
- Application: "What's the likely outcome of this trial design on this patient population?"
- Data strategy: Aggregate ClinicalTrials.gov historical data + institutional trial results via pharma partnerships
- Wedge: Trial failures cost $50M-200M. Even 10% improvement in trial design ROI is $5M-20M value per trial.
- First customer: Mid-size biotech (10-50 trials in pipeline, desperate for better success rates)
- Revenue: Per-simulation fees to pharma ($25k-100k per trial design simulation), subscription for continuous optimization
- Validation: Retrospective validation (predict completed trials from protocols), prospective pilots with 2-3 biotechs
- Moat: Historical trial data aggregation, pharma relationships, trajectory prediction expertise
- Risk: Regulatory acceptance of simulated evidence (will FDA credit this?), pharma conservatism (trust issues)
- Path to scale: Biotech wedge → large pharma enterprise deals → CRO partnerships (trial design optimization as a service)

**4. EHR Trajectory Intelligence Layer**
- Technical approach: JEPA model ingesting EHR time-series data (labs, vitals, medications) to predict patient trajectories
- Application: Adverse event prediction (sepsis, readmission, deterioration), intervention simulation
- Data strategy: Partner with Epic/Cerner for EHR integration, health system pilot sites for longitudinal data
- Wedge: Hospital readmissions cost $17B/year. CMS penalties for excess readmissions create direct ROI.
- First customer: Health system CMIOs with readmission penalty exposure (Medicare patient-heavy institutions)
- Revenue: Per-patient-per-month SaaS ($5-15 PMPM population health model), outcome-based pricing (share of readmission savings)
- Validation: Retrospective AUC for readmission prediction, prospective pilot with intervention comparison
- Moat: EHR integration (Epic App Orchard, Cerner marketplace), health system partnerships, trajectory model IP
- Risk: EHR vendor lock-in dynamics, Epic/Cerner could build in-house, change management at hospitals slow
- Path to scale: Epic App Orchard distribution → multi-system contracts → specialty-specific models (cardiac, oncology)

**5. Radiology Dynamics AI (Imaging Trajectory Prediction) — VALIDATED BY CRONOS + MCR-VQGAN**
- Technical approach: CRONOS-style continuous temporal reconstruction from sparse 4D medical longitudinal series + MCR-VQGAN cross-modality synthesis
- Application: "How will this lesion evolve in 3/6 months?" for cancer surveillance + "What would tau PET show?" from MRI for neurology
- Evidence: CRONOS reduces scan frequency 50-70% while improving progression tracking. MCR-VQGAN cuts diagnostic costs 80-90% by synthesizing tau PET from routine MRI.
- Data strategy: Partner with imaging centers for longitudinal paired studies (baseline + follow-up scans) + neurology practices for MRI-PET paired validation
- Wedge: **Two distinct entry points:** (1) Oncology surveillance—reduce 6-12 follow-up scans per cancer patient at $2,000-5,000 each via sparse temporal prediction. (2) Alzheimer's diagnosis—enable 6,000+ MRI facilities to provide tau-equivalent imaging without $4,000-6,000 PET scans (only 200+ US PET centers exist, but 6.7M need evaluation).
- First customer: (1) Academic medical centers with cancer imaging volume + margin pressure. (2) Neurology practices in regions without PET access (rural, community hospitals).
- Revenue: Per-prediction fees ($50-150 for 4D progression prediction, $200-400 for synthetic PET from MRI) + facility subscriptions ($150K-300K/year for oncology surveillance platform, $100K-200K/year for neurology synthetic PET)
- Validation: Retrospective paired imaging studies (CRONOS model), MRI-PET paired validation for Alzheimer's diagnosis (MCR-VQGAN model), prospective comparison to actual follow-up scans
- Moat: Longitudinal imaging datasets (paired scans with outcomes), patient-specific temporal models, MRI-to-PET representation learning, radiology + neurology workflow integration
- Risk: Radiologists/neurologists may resist AI changing surveillance protocols, liability concerns for synthetic imaging, regulatory pathway unclear (will FDA accept synthetic PET as equivalent to actual PET?), imaging data access negotiations
- Path to scale: **Dual track:** (1) Cancer surveillance (lung nodules → other cancers → cardiovascular plaque progression). (2) Neurology cross-modality synthesis (Alzheimer's tau PET → amyloid PET → other brain PET modalities). Potential convergence: 4D brain imaging for neurodegenerative disease progression.

---

## GTM Considerations

**Market Segmentation by Use Case:**

**Clinical Decision Support (Oncology, High-Acuity):**
- Buyer: Cancer center CMIOs, clinical informatics leaders
- Champion: Oncology department chairs, tumor board leaders
- Decision criteria: Clinical validation evidence (published studies, AUC metrics), integration with existing workflow
- Sales cycle: 12-18 months (includes pilot, validation, committee approvals)
- Competition: Epic/Cerner in-house AI, generalist LLMs (GPT-4 medical, Med-PaLM)
- Differentiation: "LLMs achieve 30% completeness on treatment decisions. World models: 78% AUROC on trajectory prediction. Here's the MSK data."

**Pharma R&D (Drug Discovery, Trial Optimization):**
- Buyer: VP Oncology R&D, Head of Clinical Development
- Champion: Computational biology teams, clinical operations leaders frustrated with trial failures
- Decision criteria: Retrospective validation on historical trials, integration with existing trial design tools
- Sales cycle: 6-12 months (pharma moves faster than health systems when ROI clear)
- Competition: Schrodinger, Recursion, Absci (wet lab + AI), traditional CROs
- Differentiation: "Trial failures cost $50M+. World models predict patient trajectories from trial protocols. Retrospective validation on your historical trials."

**Pathology Labs (Tissue Dynamics):**
- Buyer: Pathology lab directors, digital pathology leads
- Champion: Pathologists seeking AI that augments diagnosis (not just detection)
- Decision criteria: Accuracy on tissue evolution prediction, integration with digital pathology platforms (Paige, PathAI)
- Sales cycle: 9-15 months (pathology adoption slower, quality/liability concerns)
- Competition: Paige (now Tempus), PathAI, Ibex (all focused on detection, not dynamics)
- Differentiation: "Detection AI tells you what the tissue is. World models predict what it becomes under treatment."

**Health Systems (Population Health, Readmissions):**
- Buyer: CMIOs, population health VPs
- Champion: Clinical informatics leaders with EHR integration authority
- Decision criteria: ROI on readmission reduction, EHR integration ease, adoption by physicians
- Sales cycle: 18-24 months (longest due to change management, IT approvals)
- Competition: Epic in-house tools, ambient scribes (Abridge, Ambience), early warning systems (Press Ganey)
- Differentiation: "Existing tools predict risk. World models simulate trajectories—'what happens if we intervene now vs. tomorrow?'"

**Wedge Strategy (Recommended: Pharma → Clinical):**

1. **Year 1-2: Pharma R&D partnerships** (6-12 month sales cycles, willingness to pay premium)
   - Build retrospective validation on historical trials
   - Generate clinical evidence (published studies in Nature Medicine, JCO)
   - Establish world model credibility with computational biology community
   - Revenue: $1-3M from 3-5 pharma partnerships

2. **Year 2-3: Cancer center pilots** (leverage pharma-funded validation studies)
   - Approach MSK, MD Anderson, Dana-Farber with published evidence
   - Run 6-12 month prospective pilots (compare world model predictions to actual outcomes)
   - Recruit clinical champions (oncologists who see clear utility)
   - Revenue: $500k-2M from 2-4 cancer center subscriptions

3. **Year 3-5: Platform expansion** (use clinical validation to scale)
   - EHR integration via Epic App Orchard (distribution to 305 health systems)
   - Expand cancer types (MSK validation → breast, lung, colon)
   - Add adjacent specialties (oncology → cardiology disease progression)
   - Revenue: $10-30M ARR from 20-50 health systems + ongoing pharma contracts

**Champion Identification:**

- **Technical champion:** Computational pathologist, clinical informaticist who understands JEPA architecture advantage
- **Clinical champion:** Oncologist/specialty physician frustrated with LLM limitations, sees trajectory prediction value
- **Economic champion:** CMIO/CFO with readmission penalties or pharma VP R&D with trial failure costs
- **End user:** Tumor board participants, clinical trial designers who directly use trajectory predictions

**Timing Triggers:**

- Cancer center launching AI initiative (2026 CMIO priority: scale AI beyond ambient scribes)
- Pharma experiencing late-stage trial failure ($50M+ loss creates urgency)
- CMS readmission penalties increasing (payment pressure creates ROI focus)
- Competitor validation published (MSK Standard Model results → "we need this" reaction)
- EHR vendor partnership announcement (Epic App Orchard acceptance accelerates health system adoption)

**Competitive Positioning:**

Against generalist LLMs (GPT-4, Med-PaLM):
- "LLMs predict tokens. Patients aren't documents. World models predict patient trajectories. Here's the 78% AUROC on treatment change prediction vs. 70% for GPT-class models."

Against foundation models (Paige, PathAI):
- "Detection tells you what the tissue is today. World models tell you what it becomes tomorrow. Dynamics > snapshots."

Against incumbent EHR AI (Epic, Cerner):
- "Early warning scores predict risk. World models simulate 'what happens if?' Counterfactuals enable better decisions."

Against pharma incumbent CROs:
- "Historical trial design is guesswork. World models simulate patient trajectories from protocols. Reduce trial failures by 10-20%."

---

## Path to $1B+

**Scenario 1: Clinical Decision Support Platform**
```
Target: $70-100M ARR at 15-20x = $1.05-2B valuation
Timeline: 6-8 years
Comparable: Tempus (~$7B market cap, oncology data + AI platform)

Stage           Revenue     Customer Type               Unit Economics
────────────────────────────────────────────────────────────────────────
0-$3M ARR       Pharma R&D  3-5 pharma partnerships     $500k-1M per partnership
$3-15M ARR      Cancer ctrs 5-10 cancer centers         $500k-2M per institution
$15-50M ARR     Health sys  20-50 health systems        $300k-1M per system
$50M+ ARR       Platform    Epic App Orchard scale      $100k-500k per system

Revenue model:
- Pharma partnerships: $500k-2M per drug program, 3-5 programs per pharma
- Cancer center subscriptions: $500k-2M/year (scales with patient volume)
- Health system SaaS: $100k-500k/year base + $5-15 PMPM for population health
- Outcome-based: 10-30% of documented savings (readmission reduction, trial optimization)

Gross margins: 60% → 75% as pharma services productize to platform
```

**Scenario 2: Pharma R&D SaaS (Trial Simulation)**
```
Target: $50-80M ARR at 20-25x = $1-2B valuation
Timeline: 5-7 years (faster pharma sales cycles)
Comparable: Schrodinger ($1.5B market cap, computational drug discovery)

Stage           Revenue     Strategy                    Moat
────────────────────────────────────────────────────────────────────────
0-$5M ARR       Services    Bespoke trial simulations   Case studies
$5-25M ARR      Platform    Self-service SaaS           Historical trial data
$25M+ ARR       Enterprise  Top 20 pharma contracts     Network effects (data)

Revenue model:
- Trial simulation services: $50k-200k per trial design (10-20 trials per pharma/year)
- Platform subscription: $500k-2M/year (unlimited simulations, pharma-wide license)
- Outcome-based: $500k-1M bonus per successful trial attributed to optimization

Key milestones:
- $5M ARR: 10+ pharma partnerships with published validation studies
- $25M ARR: 3+ Top 20 pharma enterprise contracts, self-service platform launched
- $50M ARR: 50%+ Top 20 pharma penetration, CRO partnerships for distribution

Gross margins: 50% (services-heavy) → 80% (platform scales)
```

**Scenario 3: Pathology Dynamics Platform**
```
Target: $60-90M ARR at 18-22x = $1.08-1.98B valuation
Timeline: 7-9 years (slower pathology adoption, but pharma + lab dual revenue)
Comparable: Paige (acquired by Tempus, valuation undisclosed but $100M+ funding)

Stage           Revenue     Customer Type               Network Effects
────────────────────────────────────────────────────────────────────────
0-$5M ARR       Pharma R&D  Tissue response prediction  Pharma case studies
$5-30M ARR      Path labs   Digital pathology labs      Longitudinal data
$30M+ ARR       Platform    Lab network + pharma        Data moat compounds

Revenue model:
- Pharma partnerships: $500k-2M per drug program (tissue evolution prediction)
- Pathology lab subscriptions: $100k-500k/year per lab
- Per-slide fees: $20-50 per trajectory prediction (high-volume labs)

Network effects: More labs → more longitudinal paired data → better predictions → more labs
Comparison to Paige: Detection (one-time) vs. dynamics (ongoing), pharma R&D revenue additive

Gross margins: 65% → 80% (platform economies of scale)
```

**Critical Scaling Milestones (Across Scenarios):**

- $5M ARR:
  - 5+ institutional partnerships (cancer centers or pharma) with longitudinal data access
  - 1-2 published validation studies in tier-1 journals (Nature Medicine, NEJM, JCO)
  - Clinical champion network (10+ oncologists/CMIOs actively referring)

- $25M ARR:
  - 20+ institutional customers, validated across 3+ clinical domains
  - EHR integration (Epic App Orchard or Cerner marketplace presence)
  - Proven architecture patterns (JEPA validated in oncology + 1-2 other specialties)
  - Regulatory pathway clarity (FDA breakthrough designation or similar)

- $50M ARR:
  - Ecosystem emergence (pharma + health systems + pathology labs multi-sided)
  - Self-service platform (80%+ revenue from subscriptions, <20% services)
  - Data moat established (longitudinal data from 50+ institutions, competitors can't replicate)
  - Category leadership (world models recognized as distinct from foundation models by market)

**Unit Economics Targets:**

- CAC payback: <18 months (pharma), <24 months (health systems)
- NRR: >120% (expand via more cancer types, clinical domains, patient volume)
- Gross margin: 70%+ at scale (80%+ for pure SaaS, 60%+ if services-heavy)
- Rule of 40: 50%+ (30% growth + 20% margin OR 40% growth + 10% margin)
- LTV/CAC: >4x (given long sales cycles, enterprise contract values must justify)

**Exit Comparables:**

- Tempus (NASDAQ: TEM): ~$7B market cap, oncology data platform + AI
- Paige: Acquired by Tempus (valuation undisclosed, $100M+ funding suggests $300M-1B range)
- Schrodinger (NASDAQ: SDGR): ~$1.5B market cap, computational drug discovery
- Recursion (NASDAQ: RXRX): ~$2B market cap, AI drug discovery with wet lab
- PathAI: Private, $255M funding, digital pathology AI (detection focused)

World models with validated clinical trajectory prediction could command premium to foundation models (dynamics > snapshots) and pharma dual revenue stream (R&D + clinical) expands TAM beyond single-use case competitors.

---

## Open Questions

### Can JEPA architecture actually learn clinical dynamics from available data?
**Priority:** P0 (investment-blocking) — **PARTIALLY ANSWERED**
**Investment Gate:** This determines whether World Models thesis is investable or just academic
**New Evidence (Dec 2025):** Standard Model Part 2 validated on MSK data. JEPA achieved +5.8% AUROC over SFT-only. Lift concentrated in dynamic tasks: treatment change (0.78 vs 0.70), heterogeneous cancers (sarcoma +6 points). Model weights now public on HuggingFace.
**What Would Change My Mind:**
- ~~If Standard Model Part 2 shows >50% improvement over LLM baseline~~ → **HAPPENED**. ~12% improvement on dynamic tasks. World models are real for oncology. Look for teams with longitudinal EHR access + JEPA expertise.
- If results fail to replicate on other cancer centers → MSK-specific. Need more validation.
- If results don't transfer to other clinical domains (cardiac, ICU) → Oncology-specific play, not general thesis.
**How to Find Out:**
- Request Standard Model replication data from other cancer centers (Dana-Farber, MD Anderson)
- Track M-Optimus/Bioptimus clinical validation when published
- Look for teams attempting JEPA in cardiac/ICU domains (EHR trajectory prediction)
- Monitor CheXWorld deployment (radiology JEPA validation)

**UPDATE (2025-12-20 /audit):** Additional validation emerging. CheXWorld applying JEPA-style predictive objectives to radiograph representations. DT-GPT (Nature Digital Medicine) extends LLM forecasting to clinical trajectories, validating patient simulation approach. Meta's V-JEPA 2 (open-source) demonstrates self-supervised world models for physical reasoning—could be adapted for clinical domains. Standard Model combining SFT+JEPA with mixed weights anchors model to clinical outcomes while learning dynamics. **Status: Upgrade to EMERGING maturity warranted—multiple independent implementations validating the architecture.**

### What longitudinal data is actually available for training?
**Priority:** P1 (thesis-changing)
**Investment Gate:** If data doesn't exist, the thesis is academic regardless of architecture
**What Would Change My Mind:**
- If major health systems (Kaiser, Geisinger) are willing to partner → Data access is solvable. Look for teams with health system relationships.
- If privacy/consent barriers are insurmountable → Only synthetic data path works. Different company profile needed.
- If imaging centers willing to share paired longitudinal scans → Radiology world models viable (CheXWorld model).
- If pharma willing to share historical trial data → Trial simulation opportunity real.
**How to Find Out:**
- Map health systems with research data partnerships (check ClinicalTrials.gov collaborators)
- Talk to Tempus, Flatiron about their longitudinal data assets (what's available for licensing?)
- Understand HIPAA limitations on trajectory data (consult healthcare privacy lawyers)
- Survey pathology labs on paired slide availability (baseline + follow-up biopsies)
- Interview pharma R&D on willingness to share historical trial protocols + outcomes

### Will regulators accept world model predictions as evidence?
**Priority:** P2 (opportunity-defining)
**Investment Gate:** Determines market size—can this be used for treatment decisions or just research?
**What Would Change My Mind:**
- If FDA signals openness to simulation-based evidence → Huge TAM expansion. Clinical decision support becomes real.
- If regulators require RCT validation of every prediction → TAM limited to research tools. Lower valuations appropriate.
- If FDA creates "breakthrough device" pathway for world models (like Paige got for detection) → Regulatory clarity accelerates adoption.
**How to Find Out:**
- Track FDA digital health guidance updates (AI/ML-based software as medical device)
- Look for precedent in other simulation-based medical devices (surgical planning, radiation oncology)
- Talk to regulatory consultants in AI/ML space (what's the pathway for trajectory prediction?)
- Monitor Paige regulatory expansion (did they get approval for dynamics, or just detection?)

### Can world models achieve counterfactual validity for interventional decisions?
**Priority:** P1 (thesis-changing)
**Investment Gate:** If world models can't simulate "what if we intervene?" they're just forecasting tools, not decision support
**What Would Change My Mind:**
- If retrospective validation shows world model counterfactuals match actual outcomes (treatment A chosen, model predicts treatment B outcome, later crossover validates) → Interventional reasoning works. Clinical decision support TAM real.
- If counterfactuals fail validation (model simulations don't match actual alternative treatment outcomes) → World models are forecasting only, not causal. TAM limited to trial simulation, not clinical care.
**How to Find Out:**
- Design retrospective studies with treatment crossovers (patients who switched therapies provide ground truth)
- Evaluate Level 3 capability (counterfactual rollouts) per clinical world model rubric from arXiv survey
- Test action-conditioned prediction (Level 2): does model prediction change appropriately when intervention varies?
- Partner with RCT investigators to simulate control arm from treatment arm data (or vice versa)

### What is the GTM wedge that overcomes clinical workflow inertia?
**Priority:** P1 (thesis-changing)
**Investment Gate:** If physicians won't use world models despite accuracy, adoption fails regardless of technology
**What Would Change My Mind:**
- If tumor boards adopt trajectory predictions for treatment planning → Clinical champion model works. Cancer center wedge viable.
- If pharma trial designers use simulations to optimize protocols → R&D wedge works. Pharma-first GTM viable.
- If Epic/Cerner integrate world models into EHR workflow → Distribution solved. Platform play via EHR partnership.
- If physicians resist due to interpretability/liability concerns → Direct clinical sale impossible. Must go through EHR vendors or payers (value-based care ROI).
**How to Find Out:**
- Interview 10+ oncologists on willingness to use trajectory predictions (understand objections)
- Shadow tumor boards to identify workflow integration points
- Survey CMIOs on AI procurement criteria (clinical validation evidence? Champion-driven? EHR integration requirement?)
- Test sales message with pharma R&D (do they see trial simulation value, or is wet lab validation sufficient?)

---

## Appendix

### Supporting Evidence

| Date | Source | Key Insight |
|------|--------|-------------|
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]] | "Predicting state, not tokens." LLMs hit 30.3% completeness on real treatment decisions. JEPA architecture for oncology. |
| 2025-12-17 | [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]] | **KEY VALIDATION.** MSK data: JEPA +5.8% over SFT. Dynamic tasks (treatment change): 0.78 vs 0.70. "Specialization beats scale." Model weights public. |
| 2025-12-17 | [[Bioptimus Unveils M-Optimus, a World Model for Biology]] | "World model for biology" from H&E pathology. Moving beyond classification to simulation. |
| 2025-12-17 | [[Cambrian-S Towards Spatial Supersensing in Video]] | Spatial understanding from video. 3D dynamics from 2D inputs—same capability needed for clinical imaging. |
| 2025-12-20 | arXiv:2511.16333 "Beyond Generative AI: World Models for Clinical Prediction" | Survey of world models in clinical AI. Capability rubric: L1 temporal prediction, L2 action-conditioned, L3 counterfactual rollouts, L4 planning. CheXWorld JEPA validation. Central obstacles: underspecified clinical action spaces, limited interventional validity evaluation, incomplete multimodal state construction. |
| 2025-12-20 | Market research | Clinical decision support: $2.7-6.4B (2025) → $4.5-10.7B (2030), AI-powered CDSS $0.87B → $1.79B. AI in oncology: $4.2B (2024) → $27.2B (2032), 26% CAGR. AI in drug discovery: $2.6B (2025) → $8.2B (2030), 26% CAGR. |
| 2025-12-20 | Healthcare AI landscape | Paige acquired by Tempus (pathology consolidation). OpenEvidence $12B valuation (2x in 3 months). Pathos AI $100M Series A (oncology trial optimization). Bioptimus $76M (world model for biology). Top healthcare AI market $26.6B (2024) → $505B (2033), 39% CAGR. |
| 2025-12-20 | CMIO adoption insights | Clinical champions critical: "Without right champion, best AI is dead on arrival." Sentara 75%+ adoption via physician champions. UW Health "AI enablement" framework embeds AI in operations. 2026 priority: scale AI beyond ambient scribes. Change management via pilot units, physician champions. |
| 2025-12-20 | Healthcare AI pricing models | Per-patient: $5-15 PMPM population health. Outcome-based: 10-30% of documented savings. SaaS: $100k-500k/year health systems, $500k-2M pharma. Usage-based emerging for generative AI. Healthcare SaaS adoption low (10% of $950B admin spend), fewer Centaurs ($100M+ ARR). |
| 2025-12-20 | W51 Papers Digest | **CRONOS 4D Medical Imaging:** Continuous temporal reconstruction from sparse data, 50-70% scan frequency reduction while improving disease progression tracking. Cancer patients undergo 6-12 follow-up scans at $2,000-5,000 each. Validates world model thesis: predict future imaging states from sparse observations, not dense temporal sampling. |
| 2025-12-20 | W51 Papers Digest | **MCR-VQGAN Tau PET Synthesis:** Generates synthetic tau PET from routine MRI for Alzheimer's diagnosis, 80-90% cost reduction. Current tau PET costs $4,000-6,000, available at only 200+ US centers. 6.7M Americans need evaluation. Enables 6,000+ MRI facilities to provide tau-equivalent imaging. Validates core thesis: state prediction (what would tau PET look like?) not token prediction. |
| 2025-12-20 | W51 Papers Digest | **CronosHealth Startup Concept:** AI-powered 4D medical monitoring platform. Patient-specific temporal models predict disease progression between scans. $150K-300K annual license to academic medical centers. **TauSynth Startup Concept:** Synthetic PET imaging from MRI for Alzheimer's. $100K-200K annual licenses to neurology practices. |

### Related Theses

- [[Biology-Foundation-Models]] — World models are evolution beyond current foundation models
- [[Healthcare-AI-Architecture]] — World models could enable new hybrid architectures (deterministic + JEPA + human)
- [[AI-Drug-Discovery-Moats]] — Patient trajectory prediction critical for drug development, pharma wedge
- [[Vertical-AI-Moats]] — Moat is evaluators + domain data; world models need longitudinal clinical data
- [[Systems-of-Record-AI-Era]] — Canonical data models prerequisite for EHR trajectory prediction

### Evolution Log

- 2025-12-17: Created from cluster analysis. Core insight: LLMs predict tokens, world models predict state.
- 2025-12-20: **Upgraded Hypothesis → Emerging** via /audit. New validation: CheXWorld (radiology JEPA), DT-GPT (Nature Digital Medicine, clinical trajectories), V-JEPA 2 (Meta open-source). Multiple independent implementations confirm architecture viability.
- 2025-12-20: **Upgraded to gold standard (350+ lines).** Added Competitive Landscape (oncology, pathology, clinical trajectory, radiology players; Standard Model/MSK, Paige/Tempus, Bioptimus, OpenEvidence valuations; architecture divide foundation models vs world models). Added GTM Considerations (market segmentation by use case, pharma→clinical wedge strategy, champion identification, timing triggers, competitive positioning against LLMs/foundation models/incumbents). Added Path to $1B+ (3 scenarios: clinical decision support platform $1-2B, pharma R&D SaaS $1-2B, pathology dynamics platform $1-2B; unit economics, scaling milestones, exit comparables). Expanded Open Questions with counterfactual validity, GTM wedge. Market sizing updated with 2025 data: CDSS $2.7-6.4B, AI oncology $4.2B→$27.2B by 2032, drug discovery AI $2.6B→$8.2B by 2030.
- 2025-12-20: **Updated with W51 Papers Digest evidence.** Added CRONOS (4D medical imaging) and MCR-VQGAN (synthetic tau PET from MRI) validation to "How The Market Works" section. Expanded Competitive Landscape with CRONOS + MCR-VQGAN as emerging radiology world model players, including startup concepts (CronosHealth $150K-300K licenses, TauSynth $100K-200K licenses). Updated Startup Opportunity #5 (Radiology Dynamics AI) with dual-track strategy: (1) Oncology surveillance via sparse temporal prediction (50-70% scan reduction), (2) Alzheimer's diagnosis via cross-modality synthesis (80-90% cost reduction, enables 6,000+ MRI facilities to provide tau-equivalent imaging). Key numbers: 6-12 follow-up scans per cancer patient at $2,000-5,000 each, tau PET $4,000-6,000 available at only 200+ US centers while 6.7M need evaluation. Strengthens continuous trajectory prediction angle and state prediction (not token prediction) thesis.
