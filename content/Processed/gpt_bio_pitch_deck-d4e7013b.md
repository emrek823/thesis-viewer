---
source_pdf: "https://drive.google.com/file/d/1Tmyj_OzHAdwgB4R_qBOOpZoDg4Qaw1KJ/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "GPT_Bio_Pitch_Deck.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1Tmyj_OzHAdwgB4R_qBOOpZoDg4Qaw1KJ/view)

## Slide 1: G2P Bio

G2P Bio
Building the AI Foundation Model of Human Population

We validate targets today. We simulate patients tomorrow.

Hamed Heydari, CSO • Allan Fisch, CEO • Toronto • g2p.bio

## Slide 2: World-Class Team. 7-Year Head Start.

### 1
**Hamed Heydari**
**CSO & Co-Founder**
Invented SLMM. 7 years building population-scale genomic methods that actually work on real human data.
*Logos: UNIVERSITY OF TORONTO, Arc, exai, UNIVERSITY OF TORONTO*

### 2
**Charlie Boone**
**Chief Biology Officer**
National Academy of Sciences member. 59K+ citations. Decades defining how genes work in living systems.
*Logos: UNIVERSITY OF TORONTO, NATIONAL ACADEMY, RIKEN, CAB*

### 3
**Gary Bader**
**Chief Data Officer**
Built Cytoscape used by 1M+ researchers worldwide. 100K+ citations in computational biology.
*Logos: TORONTO, The Princess Margaret, UHN, BADER LAB, DSI*

### 4
**Allan Fisch**
**CEO & Co-Founder**
YC W21 alumnus. Four successful exits. More than 15 years leading enterprise go-to-market strategy.
*Logos: YC, Y, Wharton, MARS, NEXTAI*

Combined credentials: 160K+ citations • 4 exits • 7-year technical moat that competitors cannot replicate

## Slide 3: Drug Development + clinical trial process is Broken

### 90%
**Failure Rate**
of drugs fail in clinical trials – after billions invested

### 87%
**Phase II Failure**
means the biological signal seen in animals or early human studies **doesn't hold in the real world**

### $2.6B
**Cost Per Drug**
and 10+ years to bring one successful drug to market

### 2.6×
**Success Multiplier**
drugs with human genetic support are 2.6× more likely to succeed

Source: Minikel et al., Nature 2024

Pharma has the human evidence needed for success sitting in biobanks but can't turn it into actionable answers fast enough. That's the market opportunity.

## Slide 4: Today's AI Fails When Applied To Real Human Outcomes

Most AI in drug discovery is trained on cell lines, animal models, protein structures rarely validated on real human outcomes.

We tested 11 leading mutation-effect prediction models on real human population data. Only 2 beat random chance. The rest learned patterns that don't translate to actual patients.

### Chart: ΔBIC (Delta BIC) Comparison of Mutation-Effect Prediction Models

*Chart Title: (Implicit comparison of models based on ΔBIC)*
*Y-axis: ΔBIC*
*X-axis: Mutation-Effect Prediction Models*
*Horizontal dashed line at 0 represents random chance.*

| Model                       | ΔBIC Value |
| :-------------------------- | :--------- |
| MutationTaster              | 27.4       |
| AlphaMissense (Mixed A/P)   | 13.1       |
| DEOGEN2                     | 11.8       |
| FATHMM                      | 2.2        |
| ESM-1b                      | 1.6        |
| SIFT                        | 0.7        |
| PolyPhen-2 HVAR             | 0.5        |
| PrimateAI                   | -1.0       |
| BayesDel NoAF               | -3.1       |
| MetaSVM                     | -8.3       |
| BayesDel AddAF              | -10.6      |

## Slide 5: Millions of Genomes Sitting Idle

### The Opportunity
Massive biobanks now exist. Genomes linked to electronic health records and real clinical outcomes:
*   UK Biobank
*   All of Us (NIH)
*   Our Future Health
*   Proprietary pharma datasets

### The Bottleneck
*   Traditional tools break beyond ~40K samples
*   Analyses take months & iteration is impossible
*   Biobanks should be the ultimate translational engine
Instead, they're frozen assets.

### UK Biobank data
*Chart describing UK Biobank data types linked to a human body illustration*
*   **Vision and hearing**
*   **Brain MRI**
*   **Cognition**
*   **Sociodemographics and lifestyle**
*   **Heart and lung function**
*   **Carotid ultrasound**
*   **Heart MRI**
*   **Abdominal MRI**
*   **Environmental factors**
*   **Physical activity monitoring**
*   **BLOOD**
*   **Genetics**
    *   Genotyping
    *   Whole-exome
    *   Whole-genome
    *   Polygenic risk scores
*   **Metabolites**
*   **Telomere length**
*   **Haematology**
*   **Biochemical measures**
*   **Infectious disease markers**
*   **Proteomics**
*   **HEALTH RECORD LINKAGE**
    *   Death and cancer
    *   Primary care records
    *   Hospital admissions
*   **Whole body DXA**
    *   of bones and joints
*   **Anthropometry and other physical measures**
*   **Heel bone density ultrasound**
*Logo: uk biobank. Enabling scientific discoveries that improve human health*

## Slide 6: The Missing Piece, SLMM: Clean Signal Extraction

*Diagram: Biobank Data (Signal mixed with noise) funneling into SLMM: Precision Processing Filter, which then outputs Pure Biological Signal (Real-World Impact & Innovation).*

**Input (Biobank Data - Signal mixed with noise):**
*   ENVIRONMENT
*   TECHNICAL ARTIFACTS
*   ANCESTRY DIFFERENCES

**Processing:**
*   SLMM: PRECISION PROCESSING FILTER

**Output:**
*   PURE BIOLOGICAL SIGNAL (REAL-WORLD IMPACT & INNOVATION)

Clean human signal extraction at scale is the missing piece for validation today, AI training tomorrow, and clinical simulation after that.

## Slide 7: SLMM — The Data Refinery for Human Genomics

Biobank data is like crude oil – valuable, but unusable in raw form.

SLMM, our patent pending product, is the refinery. 7 years of work on SLMM that extract clean, causal human signals at biobank scale.

### The Fuel We Produce:
1.  **Validation** – Test any target against real human outcomes
2.  **Training Data** – Clean signals become reward functions for AI
3.  **Foundation Models** – The only AI trained on refined human data

**IP Protection:** Two provisional patents being filed.

### Chart: Runtime (hours) vs. Sample size (in thousands)

*Chart Title: (Implicitly, scalability of SLMM vs Old way)*
*Y-axis: Runtime (hours)*
*X-axis: Sample size (in thousands)*

| Sample size (in thousands) | Old way Runtime (hours) | G2P Bio Runtime (hours) |
| :------------------------- | :---------------------- | :---------------------- |
| 10                         | ~0.1                    | ~0.1                    |
| 50                         | ~1.5                    | ~0.5                    |
| 100                        | ~3.5                    | ~1                     |
| 150                        | -                       | ~1.5                    |
| 200                        | -                       | ~2.5                    |
| 250                        | -                       | ~3                     |
| 300                        | -                       | ~3.5                    |

Old tools break after ~40K samples. SLMM keeps refining at 300K+. That's a 1000x speed advantage.

## Slide 8: The Only Foundation Model Trained on Real Human Outcomes

### 1
**Step 1**
SLMM extracts clean genetic signals from biobanks

### 2
**Step 2**
Signals become reward functions for AI training

### 3
**Step 3**
Reinforcement learning trains models on genotype to phenotype & outcomes

### Other AI Models
*   Trained on mice, cells, protein structures
*   Hope it translates to humans
*   9/11 failed our human benchmark

### G2P Foundation Model
*   Trained on millions of real patients
*   Grounded in human outcomes
*   Improves via RL on clean signals

**Why no one else can do this:** Their data is contaminated. Their AI learns noise. We have the only clean training signal at scale.

## Slide 9: 20x Improvement Over State-of-the-Art

### 556 vs 27

Order of magnitude improvement over state-of-the-art mutation effect predictor, a glimpse of what's now possible with G2P.

ΔBIC benchmark across 13 mutation-effect prediction models tested on human population data. Higher is better. Zero = random chance.

### Chart: Model Comparison (Median ΔBIC)

*Chart Title: Model Comparison*
*Y-axis: Median ΔBIC*
*X-axis: Model*
*Horizontal dashed line represents random chance (0).*

| Model            | Median ΔBIC |
| :--------------- | :---------- |
| G2P Bio (Ours)   | 556         |
| Next Best Model  | 27.4        |

## Slide 10: Two Ways to Win in Drug Development

### Translational Insights (Today)
*   Show which targets have genuine human genetic support
*   Kill weak AI models early
*   Tune capable models to better explain outcomes

### Clinical Execution (Tomorrow)
*   Design trials that succeed
*   Identify subpopulations most likely to respond
*   Trial simulation to optimize design before spending $100M

Even good targets fail because trials are mis-designed – wrong cohort, wrong endpoint, wrong power assumptions. We solve these problems.

*Diagram: Drug Development Pipeline*
**Drug Discovery** -> **Clinical Trials** (Phase 1 -> Phase 2 -> Phase 3) -> **Market Launch**

## Slide 11: What We Sell Today — Human Validation Services

### Deliverables
*   Does this target show effect in humans?
*   What effect sizes and safety signals exist?
*   Which model performs better for the outcome of interest?
*   Are our efforts in AI translating into improvements in predicting human outcomes?
*   **Next:** Train population based foundation models for the outcomes of interest

### Turnaround
Weeks, not months. Faster iteration = better decisions.

Proof of value: Altos Labs paid $100K and changed R&D priorities based on our analysis. We needed 3x fewer samples than existing tools to reach the same statistical power.

## Slide 12: What we are working on: G2P Generative Virtual Patient Model

**The Generative Model of Human Population Outcomes**

### Human Biobank Data
*Diagram showing the flow through the G2P Generative Virtual Patient Model*

**Input: Phenotype**
*(Flows into VAE)*

**Path through model for de novo sample generation:**

*   **Input: metadata**
    *   Biological metadata (sex, age) -> Biological latent -> Biological classifiers -> **Output: predicted Phenotype (sex: male, age: 65)**
    *   Genetic metadata (mutation, PRS) -> Genetic latent -> Genetic classifiers -> **Output: predicted Phenotype (mutation: BRCA1, PRS: high risk)**
    *   Lifestyle metadata (smoking, diet) -> Lifestyle latent -> Lifestyle classifiers -> **Output: predicted Phenotype (smoking: current, diet: western)**

**Output: predicted Phenotype** *(from VAE and latents)*

## Slide 13: What we will sell: From Validation to Patient Simulation

Building the first generative model of human populations, predicting how real patients respond to real drugs.

### Synthetic Patients
Generate realistic, privacy-safe cohorts on demand. Model genetic diversity without violating HIPAA.

### Drug Effect Prediction
Simulate phenotype shifts under treatments. Find side effects and repurposing opportunities before trials start.

### Digital Twins & Virtual Trials
Simulate patient trajectories over time. Optimize trial design before spending $100M on execution.

Run 1,000 virtual trials. Find optimal design. Run one real trial that succeeds.

## Slide 14: Market Size for AI in Clinical Trials and Drug Discovery

### Global Clinical Trials
**Today:** ~$73B
**2030:** >$130B
**Drivers:** Rising trial volume, decentralized trials, faster validation.

### AI Drug Discovery & Preclinical
**Today:** ~$20B
**2032:** >$90B
**Drivers:** Generative biology, target identification, AI modeling.

### Pharma R&D (Clinical Dev)
**Annual:** ~$260B
**Drivers:** Reduce 87% Phase II failure, improve population validation.

This indicates a combined $350B+ total opportunity for AI platforms that improve population validation, reduce Phase II failure, accelerate target discovery, optimize patient selection, and clean contaminated biological signals.

87% of Phase II trials fail due to poor biological validation – the core problem our AI platform fixes.

Sources: BIO, IQVIA, Deloitte, GlobalData, BCG

## Slide 15: Path to $100M ARR

### Year 1-2: $2M ARR
*   10-15 validation engagements
*   Close pipeline & secure referrals

### Year 3-4: $10M ARR
*   Platform launch + enterprise deals
*   Ship self-serve platform; sign 2-3 enterprise deals

### Year 4-5: $50M ARR
*   Foundation model + expansion
*   Launch model licensing; expand to 20+ enterprises

### Year 6: $100M ARR
*   Virtual trials + market leadership
*   Virtual trial products live; 50+ enterprise customers

## Slide 16: Back the Team Turning Millions of Genomes into Clinical Decisions

### What We're Building
*   Validating drug targets today with unmatched speed and accuracy
*   Building virtual patient models for tomorrow's clinical trials
*   Creating the foundation for precision medicine at population scale

### Use of Funds
*   Expand pharma & biotech partnerships
*   Build foundation models to tuned to biobanks globally
*   Build first generation of virtual trial products

### Contact
hamed@g2p.bio
allan@g2p.bio
g2p.bio