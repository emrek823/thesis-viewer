---
type: research
topic: "REVE EEG Foundation Model"
date: 2026-01-10
assessment: ANSWERED
confidence: HIGH
rounds: 2
vault_sources: 11
web_sources: 15
---

# REVE EEG Foundation Model: Deep Dive for Investment Call

**Assessment:** ANSWERED | **Confidence:** HIGH | **Rounds:** 2

---

## The Take

REVE is a legitimate technical advance—the first EEG foundation model that actually generalizes across electrode configurations—which matters because EEG setups are wildly inconsistent (3 to 129 channels, different montages, different positions), so previous models trained on one hospital's setup were useless at another. This is why EEG AI stayed stuck in research while medical imaging AI shipped: no one could build a model that worked across real-world clinical heterogeneity. The team has strong credentials (IMT-Atlantique + UMontreal brain dynamics labs).

**The strategic question:** Is this a "faster horse" (better seizure detection, pharma biomarkers—improvements on things done today) or a "different animal" (physiological FMs learn generalizable health representations that predict diverse outcomes far beyond training domain)?

SleepFM (Nature Medicine, Jan 2026) proved the "different animal" thesis is real—one night of sleep predicts 130 diseases. But SleepFM used multimodal PSG (EEG + ECG + EMG + respiratory), and ECG outperformed EEG on most conditions. **The critical unknown: does EEG alone carry the signal?**

**Bull case:** REVE becomes the encoder layer for all EEG applications. Someone (maybe these founders) validates that EEG-only predicts diverse health outcomes via biobank partnership. The business isn't "sell to neurologists"—it's a general health biomarker platform competing with Tempus/Grail, not Beacon/Ceribell.

**Bear case:** EEG-only doesn't work without ECG/respiratory. The "different animal" thesis fails for brain signals specifically. You're left competing on seizure detection against Beacon's $100M+ head start and FDA-cleared products.

---

## 1. Technical Architecture (Undergrad Level)

### What's the problem REVE solves?

EEG setups are wildly inconsistent:
- Different electrode counts (3 to 129 channels)
- Different electrode positions (10-20 vs 10-10 vs custom)
- Different recording lengths (seconds to hours)
- Different sampling rates

Previous EEG models trained on one setup couldn't transfer to another. Imagine if a vision model trained on 224x224 images couldn't work on 256x256 images—that's the EEG situation.

### The 4D Positional Encoding (the core innovation)

Standard transformers use 1D positional encoding (token position in sequence). REVE uses **4 dimensions**:

![[Screenshot 2026-01-10 at 7.23.46 PM.png]]

| Dimension | What it encodes | Why it matters |
|-----------|-----------------|----------------|
| x | Electrode left-right position | Spatial brain location |
| y | Electrode front-back position | Spatial brain location |
| z | Electrode top-bottom position | Spatial brain location |
| t | Temporal patch index | When in the recording |

**Key trick:** Instead of learning separate embeddings for each electrode position (which breaks when you see a new configuration), REVE uses **Fourier features** (sinusoidal projections of coordinates at multiple frequencies—sin/cos applied to each spatial dimension at varying wavelengths, creating a rich high-dimensional encoding that captures both fine-grained local structure and coarse global position) generated directly from the 3D coordinates. Any electrode anywhere gets a valid encoding.

**Robustness mechanism:** They add Gaussian noise (σ=0.25 cm) to electrode positions during training, so the model becomes tolerant of slight positioning errors in real-world caps.

### Masked Autoencoding for EEG

Same principle as BERT (mask tokens, predict them) or MAE for images—but the EEG adaptation is non-trivial. BERT proved that forcing a model to reconstruct missing text from context creates representations that capture deep linguistic structure (syntax, semantics, world knowledge) without any labels. MAE extended this to vision: masking 75% of image patches and reconstructing them teaches spatial relationships and object semantics. The insight is that reconstruction is a harder task than classification, so it forces richer internal representations. 

***For EEG, this matters because labeled clinical data is scarce*** (expert annotation takes hours per recording), but raw EEG is abundant. Masked reconstruction lets REVE learn from 61,000 hours of unlabeled signal. The learned representations capture what matters in EEG—cross-channel correlations (which electrodes fire together), temporal dynamics (how signals evolve), and frequency patterns (alpha, theta, gamma rhythms)—all without a single diagnostic label. 

***This is why foundation models unlock EEG: you pretrain once on everything, then fine-tune on your small labeled dataset for seizure detection, sleep staging, or whatever task you need.***

**The deeper question (from SleepFM):** What do these representations actually learn? SleepFM's surprising finding: sleep signal representations predict not just sleep disorders, but 130+ diseases across cardiovascular, metabolic, oncology, and mortality—outcomes that have no obvious connection to brain activity. The implication: self-supervised learning on physiological signals may capture latent health state that manifests across the body. If true for EEG, the learned representations aren't just "seizure features" or "sleep stage features"—they're general biomarkers of systemic health. This would explain why foundation models outperform task-specific models: they're learning something more fundamental.

1. **Patch embedding:** Chop each channel's signal into overlapping temporal windows
2. **Block masking:** Hide 55% of patches (not random—contiguous 3cm spatial × 3s temporal blocks to simulate realistic dropout)
3. **Reconstruction:** Predict the raw EEG values for masked patches
4. **Loss function:** L1 (not L2)—more robust to the high noise in EEG

**Secondary task:** A global attention-pooled token learns to summarize the entire recording, improving performance when you freeze the encoder (important for practical deployment).

### Model specs

- Architecture: Transformer with RMSNorm, GEGLU activations, Flash Attention v2
- Parameters: REVE-Base and REVE-Large variants
- Training: 61,415 hours from 92 datasets (25,000 subjects)
- Pretraining window: 10 seconds, but generalizes to 30+ seconds

---

## 2. Scaling Potential: Data & Compute

### Current data landscape

| Source | Scale | Notes |
|--------|-------|-------|
| TUH Corpus | 541k channel-hours | Single hospital, clinical EEG, primary pretraining source |
| OpenNeuro | ~56 datasets | Diverse but smaller, BIDS format |
| MOABB | 27 datasets | BCI-focused |
| PhysioNet | Various | Sleep, seizure, motor imagery |

**REVE used:** 61,415 hours from 92 datasets. This is ~10% of estimated available public EEG data.

### What more data/compute buys you

From review of EEG foundation models:

- **NeuroLM** scaled to 1.7B parameters (7x more data than prior work)
- **BrainWave** showed data diversity > raw scale for out-of-distribution transfer
- **LUNA** (NeurIPS 2025) addresses topology-agnostic modeling

**Scaling hypothesis:** Unlike language (clear log-linear scaling), EEG scaling laws are unclear. BrainWave paper found mixing intracranial + scalp EEG helped generalization—suggesting the bottleneck may be diversity, not volume.

**The SleepFM counter-example:** SleepFM achieved 130-disease prediction with only 4.4M parameters—tiny by foundation model standards (GPT-3: 175B, REVE: ~60M). What mattered wasn't model size but:
1. **Data with outcome linkage** — 585K hours from cohorts with 5-20 year health follow-up
2. **Multimodal contrastive learning** — Forcing alignment across EEG, ECG, EMG, respiratory
3. **Population diversity** — 65K subjects across 5 clinical cohorts

This suggests the value function for EEG FMs isn't `performance = f(params, hours)` but rather `performance = f(outcome_linkage, modality_diversity, population_diversity)`. TUH has massive hours but no outcomes. REVE trained on 92 datasets but mostly without outcome labels. **The gap isn't compute—it's data architecture.**

---

## Lessons from Prior Research → Commercialization Implications

### The SleepFM Validation: Physiological FMs Actually Work

Before diving into EEG-specific lessons, the most important recent result: **SleepFM proved that foundation models on physiological signals learn health-relevant representations that generalize far beyond their training task.**

| Finding | Implication |
|---------|-------------|
| Predicts 130 diseases from 1 night of sleep | Physiological signals encode systemic health, not just organ-specific state |
| C-index 0.85+ for dementia, Parkinson's, cancer | Representations transfer to outcomes with no obvious mechanistic link |
| 4.4M params outperforms larger models | Data architecture (outcomes, diversity) > model scale |
| Works on held-out cohort (Sleep Heart Health Study) | Transfer learning actually works for physiological FMs |
| Contrastive learning across modalities | Cross-modal alignment may be key to learning health state |

**Why this matters for REVE:** If the thesis "physiological FMs learn generalizable health representations" is true (SleepFM says yes), then the question for any EEG FM isn't "does it beat baselines on seizure detection?" but "what health outcomes can it predict?" The commercial opportunity expands from "sell to neurologists" to "sell to anyone who cares about health biomarkers."

**The open question:** SleepFM used multimodal PSG. Does EEG alone capture enough signal? REVE's architecture is EEG-only. If EEG-only works, REVE is well-positioned. If multimodal is required, different technical problem.

---

### What Academic EEG Foundation Models Got Right

| Lesson | Research Finding | Commercial Implication for REVE |
|--------|------------------|--------------------------------|
| **Diversity beats scale** | BrainWave: mixing intracranial + scalp EEG improved OOD transfer more than 10x data volume | Data moat isn't about hospital partnership volume—it's about modality breadth. Consumer EEG (Muse, Emotiv) may be more valuable than 5 more clinical sites. |
| **5% of data can match full training** | EEG-DLite: training on curated 5% of 2,500 hrs matched full dataset performance | Data curation expertise could be a wedge. If REVE can help customers train faster, that's a service opportunity independent of model licensing. |
| **Spatial scale matters** | BaRISTA: region-level token encoding outperformed channel-level for downstream tasks | REVE's 4D positional encoding is technically differentiated, but must prove this matters for clinical (not just benchmark) performance. |
| **Transfer is fragile** | Cross-domain medical ML research consistently shows benchmark success ≠ clinical deployment | Research benchmarks (TUAB 83.2%) are necessary but not sufficient. Multi-site clinical validation is the actual moat. |

### What Academic Models Got Wrong (or Ignored)

1. **No regulatory strategy**
   - Every paper ends at "achieves SOTA on benchmark X"—none describe 510(k) path
   - REVE's commercial advantage: can they be first to run a prospective multi-site validation? Ceribell's Clarity required 700+ patients across sites

2. **Single-site training bias**
   - TUH is the de facto training corpus (541k channel-hours), but it's one hospital in Philadelphia
   - Clinical performance degrades on other populations—this is the "TUH problem"
   - **Implication:** REVE must prove generalization beyond TUH or face same deployment failures

3. **Linear probing vs fine-tuning gap**
   - Research papers report fine-tuned results, but clinical deployment often requires frozen encoders (simpler validation, faster iteration)
   - If REVE's frozen encoder performance is poor, enterprise customers must fine-tune per-site—breaks the "foundation model" value prop

4. **Ignored pharma biomarker opportunity**
   - Academic focus: seizure detection, sleep staging, BCI
   - Alto Neuroscience showed the real WTP: EEG biomarkers for patient stratification in drug trials
   - Pharma pays $10-50M for biomarker validation studies; device companies pay $500K for software licenses

### What This Means for REVE's Commercial Path

**The hard truth:** Open source foundation models rarely build sustainable businesses. Hugging Face is the exception, not the rule—and they had 7 years of community building.

**Three viable paths:**

| Path | Example | What It Requires | Revenue Potential |
|------|---------|------------------|-------------------|
| **Pharma biomarker platform** | Alto model | Outcome-linked EEG data, trial partnerships | High ($10M+ contracts) |
| **Vertical FDA-cleared device** | Beacon, Ceribell | Multi-site clinical validation, 510(k) | Medium ($1-5M ARR) |
| **Platform for diverse health outcomes** | SleepFM thesis | Proof that EEG-only predicts non-neuro outcomes | Very High (if validated) |

**Key question for the call:** Which path is the founder pursuing? If they say "all three," that's a yellow flag—each requires different org structure, data strategy, and timeline. The critical probe: do they have a path to outcome-linked data?

### Specific Risks from Research Literature

1. **The plateau problem:** *5% of data can match full training | EEG-DLite: training on curated 5% of 2,500 hrs matched full dataset performance | Data curation expertise could be a wedge. If REVE can help customers train faster, that's a service opportunity independent of model licensing.* 

2. **The heterogeneity problem:** Every EEG setup is different (electrodes, sampling rate, populations). Foundation models promise "train once, deploy everywhere"—but if every deployment requires significant fine-tuning, you're running a services business, not a platform.

3. **The Beacon problem:** Beacon Biosignals already has FDA-cleared EEG algorithms, $100M+ raised, and hospital relationships. They're not using foundation model architecture—they're using task-specific models with clinical validation. If task-specific beats general-purpose for FDA purposes, REVE's technical advantage may not matter.

### Paths to more data

1. **Hospital partnerships** — Most clinical EEG is discarded (the TUH problem: single-site bias)
2. **Consumer devices** — Muse, Emotiv, Neurosity generate massive volumes (lower quality, different modality)
3. **Pharma trial data** — Alto, Cerevel, others have proprietary datasets from clinical trials
4. **Synthetic data** — Generative models for EEG augmentation (emerging area)

---

## 3. Author Track Record

### Vincent Gripon (IMT-Atlantique)
- **Credentials:** Full Professor, IEEE Senior Member, 70+ papers
- **Relevant work:** Published "A Strong and Simple Deep Learning Baseline for BCI Motor Imagery decoding" in IEEE TNSRE
- **Research focus:** Efficient neural networks, few-shot learning, graph signal processing
- **Signal:** Deep ML expertise + specific BCI experience. Not a neuroscience tourist.

### Karim Jerbi (Université de Montréal)
- **Credentials:** Directs CoCo Lab (Cognitive and Computational Neuroscience)
- **Relevant work:** MEG/EEG brain dynamics, neural oscillations, gamma rhythms
- **Signal:** Serious neuroscience credentials. Published on statistical pitfalls in brain signal classification—knows the failure modes.

### Team composition
French ML lab (IMT-Atlantique) + Canadian neuroscience lab (UMontreal). This hybrid is the right structure—pure ML teams often miss domain constraints, pure neuro teams often build toy systems.

---

## 4. Commercial Use Cases + Accuracy Requirements

### What These Metrics Actually Mean

**Tier 1 Metrics Explained:**

| Metric | What it means in practice |
|--------|--------------------------|
| **Sensitivity >95%** (seizure detection) | Out of 100 actual seizures, the system catches at least 95. Missing 5% of seizures is tolerable because clinicians still monitor—but miss more and you're legally liable for delayed treatment. |
| **FAR <0.5/hr** (false alarm rate) | Fewer than 1 false alarm every 2 hours. ICU nurses ignore alarms after ~5 false positives—alarm fatigue kills more patients than missed events. This threshold keeps staff responsive. |
| **Kappa >0.67** (sleep staging) | Cohen's kappa measures agreement beyond chance. At 0.67, the model agrees with expert polysomnography technicians about as well as experts agree with each other (inter-rater reliability ~0.70-0.80). Below 0.6, you're not matching human performance. |
| **>95% agreement vs PSG** (sleep staging) | Polysomnography is gold standard. 95% means out of 100 30-second sleep epochs, the model matches the PSG technician's staging on 95. Insurance reimbursement for home sleep tests requires this threshold. |
| **Sensitivity >85%, Specificity >80%** (abnormal screening) | At 85/80: per 1000 EEGs where 100 are abnormal, you catch 85 abnormals (miss 15) and correctly clear 720 normals (180 false alarms). This ratio is acceptable for triage—a neurologist still reviews flagged cases. Lower sensitivity = missed pathology = malpractice risk. |
| **Balanced accuracy 83.2%** (TUAB benchmark) | Average of sensitivity and specificity. At 83.2%, the model performs ~83% on both classes—decent but not clinical-grade. FDA typically wants >90% for primary diagnostic use. |

**Tier 2 Metrics Explained:**

| Metric | What it means in practice |
|--------|--------------------------|
| **60-90% for binary BCI control** | User thinks "left" vs "right"—system must decode correctly. At 60%, you're barely above chance (50%)—frustrating but usable for locked-in patients with no alternatives. At 90%, control feels responsive. Consumer gaming requires 80%+. |
| **56.5% emotion recognition** | 4-class emotion task (happy/sad/angry/neutral). Random chance = 25%, so 56.5% is 2x chance—statistically real but not practically useful. You'd misclassify nearly half of emotional states. Research curiosity, not product. |
| **76.6% cognitive load** | Binary high/low mental workload. At 76.6%, correct 3 out of 4 predictions. Useful for adaptive interfaces (dim distractions when focused) but not reliable enough for safety-critical (don't trust it to say "pilot is overloaded"). |

**Tier 3 Metrics (Pharma Biomarkers):**

Pharma doesn't need high accuracy—they need **predictive validity**. If an EEG biomarker (e.g., theta band power) correlates with drug response at r=0.3, that's clinically meaningful even though it "explains" only 9% of variance. Why? Because enriching trials with biomarker-positive patients can:
- Cut trial size by 40-60% (fewer non-responders diluting signal)
- Increase effect size detection (responders show clearer drug vs placebo separation)
- Enable smaller, faster Phase 2 trials ($5-10M savings per trial)

Alto's ~50% biomarker-positive rate for MDD means they can theoretically run trials with half the patients. The biomarker doesn't need to be accurate—it needs to be *predictive* of who will respond to that specific drug mechanism.

**The SleepFM Reframe: What If Tiers 1-3 Are the Wrong Frame?**

The tier structure above assumes EEG is a *neuro-specific diagnostic*. SleepFM challenges this: if sleep signals predict cardiac events (MI 0.81), metabolic disease (CKD 0.79), and cancer (0.87-0.89), then physiological FMs may learn *systemic health state*, not organ-specific patterns.

If true for EEG:

| Traditional Frame | SleepFM-Informed Frame |
|-------------------|------------------------|
| "What seizure detection accuracy do we need?" | "What health outcomes does EEG predict?" |
| "Compete with Beacon on clinical EEG" | "Compete with Tempus/Grail on biomarker platform" |
| "Sell to neurologists" | "Sell to primary care, pharma, insurers, employers" |
| "510(k) for seizure detection" | "Multi-indication biomarker with breakthrough pathway" |
| "Accuracy vs clinical gold standard" | "Predictive validity for diverse outcomes" |

**The key validation needed:** Does EEG alone (not multimodal PSG) predict non-neuro outcomes? No one has published this. If REVE or another EEG FM shows correlation with cardiac, metabolic, or mortality outcomes, that's a paradigm shift. If not, we're back to Tier 1-3 competition.

### Tier 1: Near-term viable (FDA 510(k) precedent exists)

| Application | Accuracy needed | REVE performance | Gap |
|-------------|-----------------|------------------|-----|
| **Seizure detection** | Sensitivity >95%, FAR <0.5/hr | TUAB: 83.2% balanced acc | Need clinical validation study |
| **Sleep staging** | Kappa >0.67 vs PSG, >95% agreement | ISRUC: 78.2% | Close to threshold |
| **Abnormal EEG screening** | Sensitivity >85%, Specificity >80% | TUAB: 83.2% | At threshold |

**FDA path:** Ceribell's Clarity got 510(k) with 700-patient multi-site validation. Need: sensitivity/specificity/PPV/NPV, software documentation, hazard analysis.

### Tier 2: Emerging (regulatory pathway unclear)

| Application | Accuracy needed | REVE performance | Notes |
|-------------|-----------------|------------------|-------|
| **Motor imagery BCI** | 60-90% for binary control | MI datasets: 64-65% | Consumer, not medical device |
| **Emotion recognition** | N/A (no clinical standard) | FACED: 56.5% | Research only |
| **Cognitive load** | N/A | MAT: 76.6% | Enterprise/consumer play |

### Tier 3: Pharma biomarkers (Alto's model)

This is where the real money may be. Alto Neuroscience uses EEG biomarkers to:
- **Stratify patients** — ~50% of MDD patients are "ALTO-300 biomarker positive"
- **Predict responders** — Enrich trials with likely responders
- **Measure pharmacodynamics** — Track drug effect on brain activity

Alto's approach: **Don't sell EEG devices, sell drugs selected via EEG biomarkers.** FDA Fast Track for ALTO-101 (cognitive impairment in schizophrenia) using theta ITC as primary outcome.

---

## 5. Competitive Landscape

### Direct competitors (EEG foundation models)

| Model | Scale | Architecture | Key Differentiator | Status |
|-------|-------|--------------|-------------------|--------|
| **REVE** | 61k hrs, 92 datasets | Transformer + MAE | 4D Fourier positional encoding for electrode-agnostic transfer | Open source, NeurIPS 2025 |
| **CBraMod** | TUEG corpus | Criss-Cross Transformer | Parallel spatial/temporal attention + asymmetric conditional positional encoding | ICLR 2025, [GitHub](https://github.com/wjq-learning/CBraMod) |
| **LaBraM** | 2,500 hrs | VQ-VAE tokenizer + Transformer | Strong codebook of neural patterns; diversity > volume for OOD transfer | Academic, fixed 10-20 layout |
| **NeuroLM** | 25k hrs, 1.7B params | LLM backbone + VQ tokenizer | Largest EEG model; treats EEG as foreign language for multi-task | ICLR 2025, [GitHub](https://github.com/935963004/NeuroLM) |
| **LUNA** | 21k hrs (TUEG + Siena) | Cross-attention to latent space | Topology-agnostic via learned queries; 300× fewer FLOPs, 10× less memory | NeurIPS 2025, BioFoundation |
| **Brant-2 / BrainWave** | 4 TB, 15k subjects, 1B params | Multi-FFN Transformer | First model for both SEEG + EEG; mask prediction + forecasting dual pretraining | [GitHub](https://github.com/yzz673/Brant-2) |
| **EEGPT** | 10M params | Hierarchical Transformer | Mask-based dual self-supervised learning with spatio-temporal alignment | NeurIPS 2024, [GitHub](https://github.com/BINE022/EEGPT) |
| **FoME** | 1.7 TB, 745M params | Time-freq fusion + ATLAS attention | Adaptive temporal-lateral attention scaling; strong on forecasting/imputation | [GitHub](https://github.com/1061413241/FoME) |
| **Neuro-GPT** | TUH corpus | EEG encoder + GPT decoder | Auto-regressive masked chunk prediction; validated on motor imagery | [GitHub](https://github.com/wenhui0206/NeuroGPT) |
| **BIOT** | 3.3M params | Channel-wise tokenization | Cross-data learning (EEG, ECG, HAR); contrastive learning; supports multiple electrode configs | Smallest foundation model |
| **ALFEE** | 25k hrs, up to 300M params | Hybrid attention (channel + temporal) | Channel encoder for variable configs; dual temporal + frequency reconstruction | [GitHub](https://github.com/xw1216/ALFEE) |
| **EEGFormer** | 1.7 TB | VQ-VAE + Transformer | Largest pretraining dataset; power-spectral input instead of time-series | Academic |
| **BENDR** | Clinical EEG | CNN + Transformer | BERT-style masking on clinical corpus; early foundation model | Fixed 19 channels only |
| **BrainBERT** | 43.7 hrs iEEG | Transformer | First released EEG-FM; established conventions; subject/electrode-agnostic for intracranial | Academic |
| **Brant** (original) | 1.01 TB, 500M+ params | Transformer | First large-scale intracranial (SEEG) foundation model; time + frequency domain | NeurIPS 2024 |
| **EEG2Vec** | Various | CNN + Transformer | Self-supervised masked prediction; unified representations without fine-tuning | Academic |

### The Paradigm-Shifting Result: SleepFM (Multimodal, Not EEG-Only)

| Model | Scale | Architecture | Key Differentiator | Status |
|-------|-------|--------------|-------------------|--------|
| **SleepFM** | 585k hrs, 65k subjects | 1D CNN + Transformer + LSTM | Multimodal (EEG+ECG+EMG+respiratory), contrastive learning, **predicts 130 diseases** | Nature Medicine Jan 2026, [GitHub](https://github.com/zou-group/sleepfm-clinical) |

**Why SleepFM reframes the competitive landscape:**

SleepFM isn't an EEG FM—it's multimodal sleep. But it's the first proof that physiological FMs learn generalizable health representations. Every EEG FM above optimizes for neuro-specific benchmarks (seizure, sleep staging, BCI). SleepFM optimizes for predicting *any health outcome*.

**The competitive question shifts:** Not "who wins seizure detection?" but "who can first prove EEG-only predicts diverse health outcomes?" That company isn't competing with Beacon—it's competing with Tempus/Grail.

**Key observations from the landscape:**
- **Scaling laws unclear:** Unlike LLMs, EEG models haven't shown clear performance gains from scale. BrainWave found data diversity > raw volume. SleepFM hit SOTA with only 4.4M params.
- **Electrode flexibility is critical:** Most models lock to specific channel counts (BENDR: 19, LaBraM/NeuroLM: 10-20 layout). REVE, LUNA, BIOT, and ALFEE address this.
- **Parameter range:** 3.3M (BIOT) to 1.7B (NeuroLM)—no consensus on optimal size. SleepFM suggests small + outcome-linked data beats large + task labels.
- **Training data:** 4.5k channel-hours (BrainBERT) to 877k channel-hours (BrainWave). REVE at ~61k hrs is mid-range.
- **The real gap is outcome linkage:** All EEG FMs above trained on task labels. None validated against longitudinal health outcomes. SleepFM's edge wasn't architecture—it was data with 5-20 year follow-up.
- **Generalization gap:** Benchmark SOTA ≠ clinical deployment. Linear probing vs fine-tuning performance varies significantly.

### Adjacent companies

**[Prima Mente](https://www.primamente.com/)** (London/SF)

Prima Mente is building foundation models for molecular biology, not EEG. Their first product, **Pleiades**, is a family of epigenomics foundation models (90M, 600M, 7B parameters) trained on 1.9 trillion tokens at single-nucleotide resolution. The approach: predict disease from cell-free DNA (cfDNA) in blood samples—non-invasive liquid biopsy instead of brain scans or spinal taps.

*What Pleiades actually does:*
- Analyzes methylation patterns in cfDNA to detect tissue damage (dying brain cells shed DNA into bloodstream)
- Predicts cell type of origin from fragmented plasma DNA
- Generates synthetic cfDNA for in silico experimentation

*Clinical performance:*
- Alzheimer's detection: Pleiades 7B alone matches pTau-217 (the current best blood biomarker); combined with pTau-217 hits 0.97 AuROC
- Parkinson's detection: 0.84 AuROC from blood sample alone
- Launching 1,000-patient Alzheimer's validation study

*Funding:* $10M seed closed mid-2025 (per founder Devin Gilliam in our call). PitchBook shows earlier $1.42M from Antler, Octopus Ventures, Episode 1, Bluebirds Capital, Beyond Capital. NVIDIA partnership for DGX compute.

*The strategic model:* Prima Mente generates proprietary data in their wet lab (plasma samples, brain tissue from biobanks), trains foundation models on it, then builds diagnostics. This is "own the data, own the model" versus REVE's open-source approach. Long-term goal: "holistic brain foundation model" with in silico brain representation at various disease stages.

**Comparison to REVE:** Different modalities entirely. Prima Mente = epigenomics/proteomics from blood. REVE = EEG signal processing. Not competitive—but both targeting neurodegenerative market. Prima Mente's diagnostic could trigger the need for REVE's EEG monitoring (detect disease → monitor progression → measure drug response).

---

**[Alto Neuroscience](https://investors.altoneuroscience.com/)** (Public: ANRO)

Alto is the proof point that EEG biomarkers have pharma willingness-to-pay. They don't sell EEG technology—they use EEG biomarkers to develop drugs and enrich clinical trials.

*Did Alto prove EEG is a good predictive biomarker?*

**Yes, with caveats.** ALTO-300 Phase 2a (239 MDD patients) is the clearest evidence:

| Metric | Biomarker+ Patients | Biomarker- Patients | Delta |
|--------|---------------------|---------------------|-------|
| 8-week MADRS reduction | 8.3 points | 5.7 points | +46% |
| Clinical response rate (week 4) | 47% | 27% | +74% |
| Clinical response rate (week 8) | 62% | 47% | +32% |

*The critical finding:* The EEG biomarker was **drug-specific**—it did not predict response to placebo, SSRIs, or SNRIs. This means the biomarker identifies patients whose brain state matches ALTO-300's mechanism, not just patients likely to respond to any treatment.

*What the biomarker actually measures:* Alto's ML model detects "neural noise" patterns in EEG that reflect elevated 5-HT2C tone and reduced dopaminergic activity. ALTO-300 (agomelatine) is a melatonin agonist / 5-HT2C antagonist—so the biomarker identifies patients whose brain state is the inverse of the drug's mechanism. This mechanistic specificity is why the biomarker works.

*Validation status:*
- Phase 2a: Positive (Dec 2023)
- Phase 2b: Interim analysis positive (Feb 2025), enrollment increased by ~50 biomarker+ patients
- Topline Phase 2b results expected mid-2026

*The limitations:*
1. **Small biomarker+ cohort:** Only 55 biomarker+ patients in Phase 2a, 87 in Phase 2b interim. Statistical power is thin.
2. **Retrospective biomarker identification:** The ML biomarker was derived from the Phase 2a data itself (post-hoc), not validated prospectively. Phase 2b is the first true prospective test.
3. **Effect size is modest:** 2.6-point MADRS delta (8.3 vs 5.7) is statistically significant but not transformative. Compare to ketamine's ~6-point separation.
4. **~50% biomarker prevalence:** About half of MDD patients are biomarker-positive. This enriches trials but isn't selective enough to be a true precision medicine win.

*Pipeline breadth:* Alto isn't betting only on ALTO-300. They have 7 clinical programs using different EEG/cognitive biomarkers:
- ALTO-207 (TRD): Dopamine D3/D2 agonist + 5-HT3 antagonist
- ALTO-100 (Bipolar Depression): BDNF enhancer, uses cognitive biomarker
- ALTO-101 (CIAS): PDE4 inhibitor, uses EEG theta band biomarker, FDA Fast Track
- ALTO-203 (MDD with anhedonia): H3 receptor antagonist

**Implication for REVE:** Alto validates the market but doesn't validate foundation model architecture. Alto's biomarkers are drug-specific ML classifiers trained on small trial datasets—not generalizable foundation models. If REVE could provide a pre-trained encoder that Alto fine-tunes per-drug, that's the partnership opportunity. But Alto may prefer task-specific models (simpler FDA story, proprietary data moat).

---

**Standard Model Bio** (Portfolio)
- Multimodal clinical foundation model (pathology, EHR, genomics, radiology)
- $4.8M Sanofi contract, MSK partnership
- **Synergy question:** Does SMB expand into EEG/neuro, or is that a different modality play? EEG is fundamentally different from imaging—time series vs spatial, different noise profiles, different clinical workflows. More likely: SMB stays in its lane, REVE stays in its lane, potential data partnership if SMB's EHR data enhances REVE's clinical phenotyping.

---

## 6. Regulatory Requirements by Application

### FDA 510(k) for EEG algorithms (21 CFR 882)

Required elements:

1. **Clinical validation:** Sensitivity, specificity, PPV, NPV per intended use
2. **Multi-site study:** Single-site insufficient (TUH problem)
3. **Software documentation:** SRS, SDS with verification/validation
4. **Hazard analysis:** Device cannot be standalone diagnostic
5. **Repeatability:** Interclass correlation coefficients demonstrated

**Recent precedents:**
- Ceribell Clarity: Neonatal seizure detection, 700+ patient validation
- Beacon SleepStageML: Sleep staging from clinical PSG
- NEBA ADHD: Theta/beta ratio as ADHD diagnostic aid (controversial)

---

## 7. Questions for the Founder

Add to this manualy 

**Overview** 
- Why did you want to do this? Could be a lot of things
- Do you want to build better seizure detection or biomarkers  for disease prediction for pharma (build faster horse of things done today) or are you thinking bigger like SleepFM on how physiological signals (EEG, ECG, respiratory) discovers latent representations of systemic health that predict diverse outcomes far beyond the training domain?
### Technical depth
1. What excited you about this specific technique approach( electrodes are inconsistent and FM can scale, don't need a ton of labeled data + raw data is prolific)
2. What have you proven so far? What's the plan for future clinical validation studies?

**REVE Current Results Cheat Sheet:**

| Benchmark | Task | REVE Performance | Context |
|-----------|------|------------------|---------|
| **TUAB** | Abnormal EEG detection | 83.2% balanced accuracy | At FDA threshold (~85% sens, ~80% spec) |
| **ISRUC** | Sleep staging | 78.2% | Close to clinical threshold (Kappa >0.67) |
| **FACED** | Emotion recognition | 56.5% | 2x chance (research-only) |
| **MAT** | Cognitive load | 76.6% | Enterprise/consumer potential |
| **MI datasets** | Motor imagery BCI | 64-65% | Consumer BCI threshold: 60-90% |

**Proven:**
- ✓ 4D Fourier encoding works across electrode configs (3-129 channels)
- ✓ Pretraining on 61k hrs (92 datasets) transfers to downstream tasks
- ✓ Competitive with task-specific models on standard benchmarks

**NOT proven:**
- ✗ Multi-site clinical validation (FDA requires this)
- ✗ Prospective real-world performance
- ✗ EEG-only predicts non-neuro outcomes (SleepFM gap)
- ✗ Consumer-grade EEG (4-8 dry channels) has useful signal

3. How / what do you actually deploy to customers? SMB delivers patient embeddings and customers do rest, sometimes does white-glove for largrer contracts? 

### Commercial strategy
4. What use cases do you want to start with initially?
   - Clinical (seizure detection, sleep staging) → FDA 510(k) path?
   - Pharma (biomarker platform for trial enrichment) → Alto model?
   - Consumer (wellness → validated biomarker) → Oura path?
   - Which one and why that sequencing?
5. Who's the first paying customer? What's the deal structure—license fee, rev share, per-patient?
6. What's your competitive wedge against Beacon (FDA-cleared, $100M+ raised, hospital relationships already)?
   - **Beacon's arsenal:** Three FDA 510(k)-cleared products—Waveband (at-home EEG headband, rebranded from Dreem 3S), SleepStageML (automated sleep staging algorithm for in-lab PSG), and SleepView (home sleep study device). Their platform is trained on 200,000+ hours of EEG data.
   - **Their moat:** They've been shipping clinical-grade products since 2023. November 2025 raised $86M Series B (GV, Innoviva, Takeda, Nexus NeuroTech) specifically to build "the world's largest neurodiagnostic dataset." They're not waiting for foundation models—they're accumulating proprietary data with task-specific models that already work.
   - **The real question:** Does REVE's electrode-agnostic generalization matter if Beacon owns the clinical relationships and the data flywheel? Or can REVE leapfrog by proving multi-disease prediction (SleepFM thesis) while Beacon stays narrow on sleep/seizure?

### Scaling & moat
7. What's the data moat? TUH is public—what proprietary data sources are you pursuing?
8. BrainWave found diversity > volume for OOD transfer. What's your data diversity strategy beyond more clinical EEG? Mixing intracranial + scalp helped BrainWave generalize—are you pursuing SEEG data, consumer EEG, or other modalities?
9. Do you see clear scaling laws, or does performance plateau? EEG-DLite matched full training with 5% curated data—does more data actually help, or is curation the bottleneck?
10. What's the path to outcomes-linked data? TUH has hours but no 5-year follow-up. SleepFM's edge was data architecture, not scale—who has EEG + longitudinal health outcomes you could partner with? (UK Biobank? All of Us? Pharma trial partners like Alto?)
11. How does frozen encoder vs fine-tuning performance compare? If every deployment requires per-site fine-tuning, you're a services business. What's the linear probing gap, and does that break the "train once, deploy everywhere" foundation model value prop?
12. Consumer EEG devices (Muse, Emotiv, Dreem/Beacon) generate massive volumes at lower quality. Is that data valuable for pretraining, or is the signal-to-noise too poor? Any partnerships there?
13. What's the defensibility if you're open source? Hugging Face took 7 years to build community moat. What stops Beacon or a well-funded competitor from taking REVE and out-executing with more data + clinical relationships?
14. How do you think about the TUH problem? It's the de facto training corpus, but it's one hospital in Philadelphia. Clinical performance degrades on other populations. What's your multi-site generalization story?

---

## The Bigger Thesis: What If Physiological Foundation Models Actually Work?

**The thesis:** Self-supervised learning on physiological signals (EEG, ECG, respiratory) discovers latent representations of systemic health that predict diverse outcomes far beyond the training domain.

**What "actually work" means:**
- NOT: "Achieves SOTA on seizure detection benchmark"
- YES: "Predicts outcomes with no obvious mechanistic link to the signal"

**The evidence (SleepFM):**
- Trained to reconstruct sleep signals → predicts cancer (no known mechanism linking sleep to breast/prostate cancer)
- 4.4M params beats larger models → signal is in the data architecture, not model scale
- Works on held-out cohort → transfer learning actually works

**If true for EEG:**
1. EEG isn't just a brain diagnostic—it's a window into systemic health
2. REVE's representations (learned from seizure/sleep data) may already encode cardiac, metabolic, mortality risk
3. The business isn't "sell to neurologists"—it's "platform for any health biomarker"
4. The competitive set isn't Beacon/Ceribell—it's Tempus/Grail scale

**The critical unknown:** SleepFM used multimodal PSG. Does EEG *alone* carry the signal?

---

### Could an EEG Foundation Model Actually Answer This Question?

**What would "answering the question" require?**

| Requirement | SleepFM Had It | REVE Has It | Gap |
|-------------|----------------|-------------|-----|
| Large-scale pretraining | ✓ 585k hrs | ✓ 61k hrs | Close enough |
| Outcome-linked data | ✓ 5-20 yr follow-up | ✗ Task labels only | **Critical gap** |
| Diverse health outcomes | ✓ 130 conditions | ✗ Neuro only | **Critical gap** |
| Held-out validation cohort | ✓ Sleep Heart Health Study | ✗ | **Critical gap** |
| Transfer learning validation | ✓ | ✗ | **Critical gap** |

**The bottleneck isn't the model—it's the data.**

REVE's architecture is arguably better than SleepFM's for generalization (4D positional encoding vs fixed channel layout). But REVE was trained on TUH + 91 other datasets that have *task labels* (seizure/no seizure, sleep stage N1/N2/N3/REM), not *health outcomes* (developed dementia in 5 years, had MI in 10 years).

**Who has EEG + outcomes data?**

| Data Source | EEG Type | Outcomes | Scale | Access |
|-------------|----------|----------|-------|--------|
| UK Biobank | Some EEG substudy | Full phenotype + registry linkage | ~5k EEG | Application required |
| All of Us | Planned EEG | Full phenotype | TBD | Open |
| Alto Neuroscience | Clinical trial EEG | Drug response (psychiatric) | ~1k per trial | Proprietary |
| Sleep Heart Health Study | Full PSG (not EEG-only) | CV outcomes | 6k | Public |
| Consumer devices (Muse, etc.) | Consumer EEG | None | Millions of hours | Proprietary, no outcomes |

**What the REVE founders could do:**

1. **Partner with UK Biobank** — Take REVE encoder, fine-tune on Biobank EEG substudy, predict full range of outcomes. If it works, publish in Nature Medicine like SleepFM.

2. **Partner with Alto** — Alto has EEG + drug response outcomes. Could REVE's pretrained encoder improve their biomarker performance? If yes, pharma partnership. If no, task-specific models still win.

3. **Run a prospective study** — Collect EEG from 10K patients, link to EHR, wait 2-5 years. Expensive, slow, but definitive.

4. **Prove it on existing public data** — TUAB has some outcome labels (abnormal/normal). Can REVE predict 2-year mortality from the "normal" EEGs? That would be a start.

**The strategic question for the call:**

*"SleepFM proved physiological FMs predict diverse health outcomes. Do you see validating this for EEG-only as part of your roadmap? If so, who has the outcome-linked data you'd need?"*

If they say "yes, we're pursuing UK Biobank / pharma partnership / prospective study" → they're thinking bigger than seizure detection.

If they say "we're focused on seizure detection first" → fine business, but capped upside. They're competing with Beacon, not building Tempus.

---

### The SleepFM Result—Pressure Tested

[SleepFM](https://www.nature.com/articles/s41591-025-04133-4) (James Zou lab, Nature Medicine Jan 2026) trained on 585,000 hours of polysomnography from 65,000 people. The headline: **one night of sleep predicts 130 diseases** with C-index ≥0.75.

| Condition | C-Index | 95% CI | What this means |
|-----------|---------|--------|-----------------|
| Parkinson's | 0.89 | 0.85–0.92 | Detects prodromal PD years before motor symptoms |
| Dementia | 0.85 | 0.82–0.87 | Sleep architecture changes precede cognitive decline |
| All-cause mortality | 0.84 | 0.81–0.87 | General health state encoded in sleep patterns |
| Myocardial infarction | 0.81 | — | Cardiac stress visible in HRV during sleep |
| Breast cancer | 0.90 | 0.86–0.93 | Mechanism unclear |
| Prostate cancer | 0.90 | 0.87–0.93 | Mechanism unclear |

**But here's what the paper actually shows when you dig in:**

### Caveat 1: ECG Outperforms EEG on Most Conditions

| Modality | Conditions Where It Excels |
|----------|---------------------------|
| **ECG** | 47 conditions |
| EEG (brain signals) | 32 conditions |
| Respiratory | 32 conditions |
| EMG | "Generally the worst" |

**Implication for EEG FMs:** The multimodal signal matters. ECG carries more predictive information than EEG for most diseases. If you strip out ECG/respiratory/EMG and use EEG alone, you may lose significant performance. SleepFM does NOT validate that EEG-only works.

### Caveat 2: Modest Improvement Over Demographics

SleepFM's improvement over a simple age/sex/BMI/race baseline:
- **C-Index:** +4.8% improvement
- **6-year AUROC:** +9.4% improvement

That's real but not transformative. Age alone predicts most diseases pretty well. The model is adding signal, but it's incremental—not a paradigm shift.

### Caveat 3: Selection Bias

All 65,000 subjects were **patients referred for sleep studies due to suspected sleep disorders**. This is NOT a random population screen.

- These patients are enriched for sleep apnea, insomnia, restless legs—conditions that correlate with cardiovascular disease, metabolic syndrome, and cognitive decline
- The model may be detecting "sick sleepers" rather than learning generalizable health representations
- Performance on a true screening population (random primary care patients) is unknown

### Caveat 4: Temporal Degradation

The paper acknowledges: "model's performance shows some degradation in temporal test sets"

- Training data: mostly 2015-2020
- Temporal test: later time periods
- This suggests some overfitting to the training era—concerning for real-world deployment

### Caveat 5: Cancer Predictions—Real Signal or Artifact?

The 0.90 C-index for breast/prostate cancer is surprising. Possible explanations:

1. **Real mechanism:** Sleep disorders → chronic inflammation → cancer risk. Plausible but not proven.
2. **Confounding:** Sleep study patients are older, have more comorbidities → higher baseline cancer risk. Model may be detecting age/comorbidity, not sleep-specific signal.
3. **Reverse causation:** Early-stage cancer → sleep disruption → referred for sleep study. Model detecting existing cancer, not predicting future cancer.

The paper says cancer predictions "align with existing literature linking sleep patterns to cancer risk" but doesn't prove causation.

### Caveat 6: 6-Year Horizon, Not Lifetime

The actual validation window is **6 years**. The "predicts 130 diseases" claim is within this horizon, not lifetime risk prediction.

### What This Means for the EEG FM Thesis

| Claim | Reality |
|-------|---------|
| "Physiological FMs learn generalizable health representations" | **Partially validated.** But ECG > EEG for most conditions. |
| "EEG alone can predict diverse health outcomes" | **NOT validated.** SleepFM is multimodal. EEG-only ablation shows weaker performance. |
| "Foundation models beat task-specific models" | **Partially validated.** 5-10% improvement over baselines. |
| "One night of sleep predicts 130 diseases" | **Technically true but misleading.** Selection bias, modest improvement over demographics, unclear mechanisms for some claims. |

**The honest assessment:**

SleepFM is a legitimate advance. But it's not magic, and it doesn't prove EEG-only works. The critical questions for any EEG FM:

1. Can you match SleepFM's performance without ECG/respiratory?
2. Can you replicate on a non-sleep-clinic population?
3. What's your improvement over age/sex/comorbidities alone?

**The architecture:** 4.44M parameters, multimodal (EEG, ECG, EMG, respiratory), contrastive learning across modalities. Much smaller than REVE (61M+ params)—scale isn't the driver. But multimodality may be.

---

### The Strategic Reframe: If the "Different Animal" Thesis Is True

SleepFM proved sleep signals predict outcomes far beyond sleep disorders—cardiac (MI 0.81), metabolic (CKD 0.79), oncology (breast cancer 0.87), and mortality (0.84). The brain during sleep reflects systemic physiology because it integrates everything.

**If EEG alone captures even a fraction of this multi-disease prediction:**

1. **The addressable market explodes.** Not "neurologists buying seizure detectors" but anyone who cares about health biomarkers—pharma (trial enrichment across therapeutic areas), insurers (risk stratification), primary care (screening).

2. **The competitive set changes.** Not Beacon/Ceribell (EEG-specific clinical tools) but Tempus/Grail (general health biomarker platforms).

3. **The data strategy changes.** TUH (clinical neuro) may be less valuable than diverse datasets with outcome linkage. A 10K-patient study with 5-year follow-up beats 500K hours of unlabeled clinical EEG.

4. **The platform economics work.** Instead of one FDA clearance for one indication (seizure), license the foundation model for N indications.

**But this requires validation.** The path:
- Partner with UK Biobank or All of Us (EEG + full phenotyping + registry linkage)
- Apply REVE encoder to predict diverse outcomes
- Publish Nature Medicine-level validation
- Then the market opens

**What the founders need to answer:** Do they have a path to outcome-linked data? That's the bottleneck, not the model.

---

## Key Takeaways for Your Call

**The technical advance:** REVE's 4D Fourier positional encoding solves the electrode configuration problem that blocked prior EEG AI. Previous models used discrete lookup tables per electrode → broke on new setups. REVE uses a continuous function over electrode space → any configuration works. This is why it's the first foundation model that actually generalizes.

**The strategic question:** Is this a "faster horse" or a "different animal"?

| Path | What It Means | What to Probe |
|------|---------------|---------------|
| **Narrow** (seizure detection) | Fine business, constrained TAM | Competing with Beacon's $100M+ head start |
| **Medium** (pharma biomarkers) | Alto validates WTP | Need outcomes data beyond TUH, how do they differentiate? |
| **Broad** (general health biomarker) | Highest upside if validated | Do they have a path to outcome-linked data? |

**The critical unknown:** SleepFM used multimodal PSG (EEG + ECG + EMG + respiratory), and ECG outperformed EEG on most conditions. Does EEG-only carry the signal? If yes, REVE is well-positioned. If no, different technical problem.

**The validation gap:** REVE has the architecture. It lacks outcome-linked data. The experiment that answers the question: REVE encoder + UK Biobank EEG + diverse health outcomes. If that works, paradigm shift. If not, back to seizure detection.

**Portfolio context:** SMB = multimodal clinical FM (pathology, EHR, genomics). EEG is time-series, different domain. Not competitive—potentially complementary. More relevant comp: Prima Mente (neuro-focused FM, proprietary data) and Alto (EEG biomarkers for pharma).

---

## Sources

### Papers
- [REVE arXiv paper](https://arxiv.org/abs/2510.21585)
- [REVE NeurIPS poster](https://neurips.cc/virtual/2025/poster/117334)
- [EEG Foundation Models Review](https://arxiv.org/abs/2504.20069)
- [SleepFM - Nature Medicine](https://www.nature.com/articles/s41591-025-04133-4) — 130 diseases from 1 night of sleep, James Zou lab
- [SleepFM GitHub](https://github.com/zou-group/sleepfm-clinical)

### Companies
- [Prima Mente](https://www.primamente.com/)
- [Alto Neuroscience IR](https://investors.altoneuroscience.com/)
- [Ceribell FDA clearance](https://ceribell.gcs-web.com/news-releases/news-release-details/ceribell-receives-fda-510k-clearance-use-clarity-algorithm)
- [Beacon Biosignals](https://beacon.bio/)

### Regulatory
- [FDA 21 CFR 882 - Neurological Devices](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-882)

### Authors
- [Vincent Gripon profile](http://www.vincent-gripon.com/)
- [Vincent Gripon Google Scholar](https://scholar.google.com/citations?user=n3IKEqgAAAAJ)

### Vault
- [[Sources/Portfolio/2025-12-21_manifesto-3be84cff.md]] — SMB multimodal foundation model strategy
- [[Sources/Granola/SMB __ Virtue.md]] — SMB Sanofi contract, MSK partnership details
- [[Archive/Theses/Biology-Foundation-Models.md]] — Multimodal biomarker thesis context
- [[Sources/Papers/EEG-D3 A Solution to the Hidden Overfitting Problem of Deep Learning Models.md]] — EEG overfitting solutions
- [[Sources/Clippings/QoQ-Med Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training.md]] — ECG/EEG clinical foundation models
