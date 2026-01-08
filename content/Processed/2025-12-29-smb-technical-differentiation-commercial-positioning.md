---
type: research
topic: "Standard Model Bio - Technical Differentiation & Commercial Positioning"
date: 2025-12-29
assessment: ANSWERED
iterations: 1
vault_sources: 14
web_sources: 18
---

# SMB's Moat Isn't Architecture—It's the Data-Flywheel-to-Standard-Setting Play

The AI landscape has exploded with world models, multimodal systems, and foundation models for biology. SMB's JEPA architecture is genuinely superior for clinical trajectory prediction (+5.8% AUROC over LLMs), but architecture commoditizes in 12-18 months. The durable differentiation is a three-layer play: (1) multi-modal clinical outcome data aggregation that competitors structurally cannot replicate, (2) a flywheel where model performance earns data access, and (3) a regulatory lock-in strategy that makes "not using SMB" a risk to drug approval.

---

## The Technical Question: Does JEPA Actually Differentiate?

### Yes, But With a Catch

**The core claim is validated:** JEPA world models outperform LLMs on clinical trajectory prediction because they model state transitions, not token probability.

- SMB-v1-1.7B (SFT+JEPA): **0.727 AUROC** on MSK oncology prognosis [[2025-12-26_manifesto-2d5f3898.md]]
- Qwen3-VL 8B (best general LLM): **0.687 AUROC** [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]]
- Treatment change prediction: **0.78 vs 0.70** for dynamic vs static models [[Sources/Granola/Granola 1/SMB __ Virtue]]

The gap widens on heterogeneous diseases:
- **Sarcoma**: +6 AUROC points (0.77 vs 0.71) where text patterns fail [[Part 2 blog]]
- **Upper-GI/Prostate**: Similar lifts on non-linear disease trajectories

**The catch:** Architecture alone isn't the moat. The paper "[Beyond Generative AI: World Models for Clinical Prediction](https://arxiv.org/html/2511.16333)" introduces an L1-L4 capability rubric showing most clinical world models are stuck at L1-L2 (temporal/action-conditioned prediction). L3-L4 (counterfactual rollouts, planning) remain rare. SMB is operating at L2 with clear path to L3—but so are others.

### The Competitive Architecture Landscape (December 2025)

| Player | Architecture | Data Scale | Clinical Focus |
|--------|-------------|------------|----------------|
| **SMB** | JEPA world model | AMC partnerships (MSK, MD Anderson, Yale, UCSD) | Oncology trajectory prediction |
| **Epic Curiosity (CoMET)** | Decoder-only transformer | 115B events, 118M patients | Generalist medical event prediction |
| **Bioptimus M-Optimus** | Multimodal world model | "Millions of patients," 50 organ types | Biology simulation (tissue, molecular, clinical) |
| **Tempus + AZ + Pathos** | Foundation model (building) | 8M de-identified records | Oncology drug discovery |
| **Recursion-Exscientia** | Phenomics + chemistry FM | Proprietary screening data | Drug discovery (not clinical outcomes) |

**Key insight from web research:** Epic's CoMET achieved 0.770 AUROC on 30-day readmission vs 0.718 supervised baselines [[CoMET paper](https://arxiv.org/html/2508.12104v1)]. This is competitive territory. But CoMET operates on structured EHR events only—no imaging, no genomics, no pathology. SMB's multimodal integration is the differentiator.

---

## Why Multi-Modal Integration Matters More Than Architecture

### The "Text Bridge" Problem LLMs Can't Solve

From SMB's blog: "Today's AI models were never natively trained on these foundational biological signals. The latest models from Google, OpenAI, and Anthropic have never 'seen' an entire CT volume or 'read' a whole-genome sequence; they have only processed text descriptions of them." [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]]

GPT-4 achieves only **30.3% completeness** on real oncology treatment decisions [[Nature paper cited in Part 1]]. The failure mode isn't reasoning—it's missing data modalities.

### SMB's Multi-Modal Stack

All modalities converging into single model [[Sources/Granola/Granola 1/SMB __ Virtue]]:
- Patient notes (text)
- Genomics (GenVarFormer for mutation → expression)
- Longitudinal EHR (SMB-EHR-4B)
- Radiology (1M oncology CTs from Gradient for $150K)
- Pathology (MSK core dataset)

**Radiology as wedge:** "Chosen as standard of care longitudinal modality" [[Sources/Granola/Granola 1/SMB __ Virtue]]. This is strategic—radiology is the most regularized imaging with clearest pre/post intervention structure.

### Why Competitors Can't Easily Replicate

1. **Epic Curiosity:** 115B events but *no imaging, no genomics, no pathology*. Context window of 8,192 tokens limits longitudinal history. They're optimizing EHR → EHR, not EHR + imaging + genomics → trajectory.

2. **Bioptimus M-Optimus:** Multimodal (histology + RNA-seq + spatial transcriptomics) but *no longitudinal EHR, no radiology*. Focused on tissue/molecular scale, not patient-journey scale.

3. **Tempus-AZ-Pathos:** $200M deal for oncology FM, but data contribution is horizontal (8M records) not multi-modal integrated. Pathos building the model—Tempus provides data, not architecture.

4. **Recursion:** Drug discovery focus. Owns upstream screening data, but no clinical outcome data. "We're not a drug development copilot, nor do we do molecular simulation or structure" [[2025-12-26_manifesto-2d5f3898.md]]. Different value chain position.

---

## The Commercial Model: How SMB Builds Lock-In

### Layer 1: Pharma Structural Inability to Build

Kevin's manifesto documents why pharma can't do this internally [[2025-12-26_manifesto-2d5f3898.md]]:

- **Data fragmented across departments:** "Digital pathology and genomics data lived in research/drug discovery; radiology images and trial data lived in drug development."
- **Access weaponized for clout:** Data siloed to retain departmental power
- **Tooling dysfunction:** Weights & Biases took 1 year at BMS vs <5 days at Adobe
- **Talent exodus:** Genentech internal AI efforts described as "embarrassing" by recent departure [[Sources/Granola/Granola 1/SMB __ Virtue]]

**Validation:** Tempus—the strongest multimodal oncology player—is seeking genomics foundation model partners despite genomics being their core strength [[SMB __ Virtue-2025-11-21_15-32-49]]. "Early validation that multimodal foundation model leaders outsourcing key capabilities."

### Layer 2: The Data-For-Model Flywheel

From manifesto: "We partner with any data producer and offer our model in exchange for data access. Once we get plurality, not working with us fundamentally limits their AI performance." [[2025-12-26_manifesto-2d5f3898.md]]

**Current traction:**
- Sanofi: $360K POC → $4.8M contract (6 therapeutic areas × $800K) [[Sources/Granola/Granola 1/SMB __ Virtue]]
- IQVIA: $44M proposal (Nvidia introduction) [[Sources/Granola/Granola 1/SMB __ Virtue]]
- AMC velocity: MD Anderson 2-3 hours to surpass prior SOTA; Yale one-hour onboarding [[Sources/Granola/Granola 1/SMB __ Virtue]]

**Network effects compound:** "If you don't contribute, you don't get access" [[2025-12-26_manifesto-2d5f3898.md]]. This creates prisoner's dilemma for data holders.

### Layer 3: Regulatory Lock-In Strategy

The explicit goal: "Make performance so superior that not using SMB model risks regulatory approval" [[Sources/Granola/Granola 1/SMB __ Virtue]].

**Mechanism:**
1. Publish model weights on HuggingFace (done: SMB-v1-1.7B)
2. Make it "bad practice" not to benchmark against the model
3. AMC validation creates academic consensus
4. Pharma adopts because FDA increasingly expects AI validation

**Precedent from drug development:** "Minor differences in performance → billions in revenue difference. OpDivo vs Keytruda example—same mechanism, but performance gap meant billions in lost revenue for BMS." [[2025-12-26_manifesto-2d5f3898.md]]

---

## Competitive Threats: Where SMB Could Lose

### 1. Epic Curiosity Distribution Advantage

Epic has **90%+ of US medical records** and 115B events already tokenized. CoMET researcher access opens February 2026 [[Epic announcement](https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/)].

**Why this matters:** If Epic adds imaging/genomics connectors, they have distribution + data + compute. SMB's path through AMCs is slower than Epic's direct EHR integration.

**Counter:** Epic is workflow-focused, not pharma-facing. Curiosity optimizes operational outcomes (length of stay, readmission), not drug development endpoints (trial design, biomarker selection). SMB's pharma relationships are distinct go-to-market.

### 2. Well-Funded Competitor Raises Massive Round

From meeting notes: "Key concern: competitor raising $200M+ round could steamroll data access advantage" [[SMB __ Virtue-2025-11-21_15-32-49]].

**Tempus-AZ-Pathos $200M deal** is exactly this scenario. However, that capital flows to Tempus (data) and Pathos (model building)—not a vertically integrated player.

**Bioptimus** is the scarier threat: world model architecture, multimodal data, well-funded, and pharma partnerships with 12 of top 20 pharmas.

### 3. Architecture Commoditization

V-JEPA 2 released June 2025 by Meta with 1M+ hours of video pretraining [[Meta AI blog](https://ai.meta.com/vjepa/)]. CheXWorld applies JEPA to radiographs. JEPA is no longer proprietary.

**SMB's response (from manifesto):** "We know the best models are trained on the best data—algorithmic moats survive a limited time as trade secrets and capability." The moat must be data + integration, not architecture.

---

## The Commercial Model That Works

### Short-Term (2025-2026): White-Glove Pharma Pilots

- **Sanofi:** $5.1M total ($360K POC + $4.8M main contract)
- **IQVIA:** $44M proposal
- Per-therapeutic-area pricing: $800K × 6 areas = $4.8M
- Timeline: Pilots Q1 2026, full contracts by mid-2026

### Medium-Term (2026-2027): Platform Tax on Data Suppliers

From manifesto: "Medium term—we supply those who are supplying pharma (billion+ market cap companies). 'You have what I want.'" [[2025-12-26_manifesto-2d5f3898.md]]

- Tempus sliding scale: $4M if no IP retained, $2M if SMB gets model weights [[SMB __ Virtue-2025-11-21_15-32-49]]
- RWD companies (Dandelion, Kaleidoscope) see threat: "reduced data purchases if customers fine-tune models"

### Long-Term (2028+): Part of Every Drug Development Decision

"We're somehow a part of every drug development decision because we're powering the AI that's in all of it. When treatment shifts from Molecule to AI + Molecule, we'll get some slice of that pie." [[2025-12-26_manifesto-2d5f3898.md]]

---

## Synthesis: The Investable Thesis

### What's Actually Differentiating

| Factor | Durable? | SMB Position |
|--------|----------|--------------|
| JEPA architecture | No (12-18 months) | Current lead, will commoditize |
| Multi-modal integration | Yes (24+ months) | Unique: EHR + imaging + genomics + pathology |
| Clinical outcome data | Yes (structural) | AMC partnerships + pharma data |
| Pharma relationships | Yes (sticky) | Sanofi, IQVIA, AZ, GSK pipeline |
| Regulatory positioning | Yes (if achieved) | "Standard" status in progress |

### Bull Case

- Sanofi closes Q1 2026 → validates pharma WTP for trajectory prediction
- AMC expansion 1 → 100 in 2026 → data flywheel accelerates
- Model becomes academic benchmark → regulatory expectations shift
- Pharma competitors fail internally → SMB wins by default

### Bear Case

- Epic Curiosity adds multimodal connectors → distribution moat wins
- Bioptimus out-executes with larger funding → data flywheel goes elsewhere
- Architecture commoditizes faster → SMB's performance lead erodes
- Pharma conservatism → pilots don't convert to platform contracts

### What to Watch

1. **Sanofi contract close (Q1 2026):** First $5M+ validation of pharma WTP
2. **Epic Curiosity researcher adoption (Feb 2026):** Does academic community adopt Epic or SMB as benchmark?
3. **Bioptimus M-Optimus clinical validation:** Do they publish comparable AUROC numbers?
4. **o3/o4 reasoning models:** Do frontier LLMs close the gap without architectural change?

---

## Recommendations

1. **Track Epic Curiosity closely.** February 2026 researcher access is the key competitive milestone. If academics adopt CoMET as benchmark, SMB's "standard" positioning weakens.

2. **Sanofi close is existential.** $5.1M contract validates the commercial model. Delay beyond Q2 2026 signals pharma skepticism.

3. **Bioptimus is the architectural competitor to watch.** Same world model approach, similar multimodal ambitions, better funding. Head-to-head benchmarks will emerge in 2026.

4. **Data flywheel must accelerate.** 1 → 100 AMCs in 2026 isn't just a nice-to-have—it's required to outrun Epic's distribution advantage.

---

## Research Process

- **Iterations:** 1
- **Vault patterns:** Standard Model Bio, SMB, JEPA, foundation model + biology, pharma partnership, Tempus, Epic Curiosity
- **Web queries:** Epic Curiosity benchmark, JEPA world model healthcare, Bioptimus M-Optimus, Tempus AstraZeneca partnership, Recursion Exscientia, multimodal clinical AI
- **Web sources fetched:** 18
- **Total cost:** $0

---

## Sources

### Vault
- [[2025-12-26_manifesto-2d5f3898.md]] — SMB CEO manifesto on positioning
- [[virtue-_-why-we-invested-in-standard-model-bio-the-universa-0e5d6a71.md]] — Investment thesis
- [[Sources/Granola/Granola 1/SMB __ Virtue]] — Dec 2025 meeting notes
- [[SMB __ Virtue-2025-11-21_15-32-49.md]] — Nov 2025 meeting notes
- [[SMB __ Virtue-2025-10-16_13-03-36.md]] — Oct 2025 meeting notes
- [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 1)]] — Architecture deep-dive
- [[The Patient is Not a Document Moving from LLMs to a World Model for Oncology (Part 2)]] — MSK validation results
- [[JEPA World Models Displace LLMs for Clinical Decisions—Token Prediction Becomes Liability by 2028]] — Thesis file

### Web
- [Epic Curiosity announcement](https://www.epic.com/epic/post/curiosity-a-new-medical-intelligence-for-clinical-and-operational-insights/)
- [CoMET scaling paper](https://arxiv.org/html/2508.12104v1)
- [Beyond Generative AI: World Models in Healthcare](https://arxiv.org/html/2511.16333)
- [Bioptimus M-Optimus announcement](https://www.prnewswire.com/news-releases/bioptimus-unveils-m-optimus-a-world-model-for-biology-302644092.html)
- [Tempus-AstraZeneca-Pathos partnership](https://www.tempus.com/news/tempus-signs-expanded-strategic-agreements-with-astrazeneca-and-pathos-to-develop-the-largest-multimodal-foundation-model-in-oncology/)
- [Meta V-JEPA 2](https://ai.meta.com/vjepa/)
- [Recursion-Exscientia merger](https://ir.recursion.com/news-releases/news-release-details/recursion-and-exscientia-two-leaders-ai-drug-discovery-space)
