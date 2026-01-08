---
source_pdf: "https://drive.google.com/file/d/1sjB7Ahr7jOlIW5mDEf9GtLuZ7AroZloB/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Aevius+Seed+Deck+10.15.25+(1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1sjB7Ahr7jOlIW5mDEf9GtLuZ7AroZloB/view)

## Slide 1: AEVIUS
# AEVIUS
## The Complete Patient Representation Layer
Making patients computable for the first time

## Slide 2: Team
### AEVIUS
Mahmood Lab
HARVARD MEDICAL SCHOOL
Mass General Brigham

**Rowland Pettit, MD, PhD, MBA**
CEO & Co-Founder
Physician-scientist (Harvard Pathology); ex-VC; years of startup consulting; comp bio/Al
[LinkedIn](https://www.linkedin.com/in/rowland-pettit/) [Website](https://www.aevius.ai/)

**Max Lu, PhD**
CTO & Co-Founder
MIT PhD; expert in multimodal Al; built 7.2M-patient system; 20+ papers
[LinkedIn](https://www.linkedin.com/in/max-lu-phd/) [Google Scholar](https://scholar.google.com/citations?user=...)

**Faisal Mahmood, PhD**
Technical Architect & Co-Founder
HMS Professor; multimodal foundation models for human health (UNI/CONCH/PathChat)
[LinkedIn](https://www.linkedin.com/in/faisal-mahmood/) [Website](https://www.mahmoodlab.org/) [Google Scholar](https://scholar.google.com/citations?user=...)

**Long Phi Le, MD, PhD**
Healthcare Data Infrastructure & Co-Founder
Co-founded ArcherDX → $1.4B exit; VP Pathology MGH
[LinkedIn](https://www.linkedin.com/in/long-phi-le-b86a014/)

**Qi Li, MD**
Chief Business Officer (Acting)
Innovation VP at InterSystems (Epic's backend); 500+ hospital relationships
[LinkedIn](https://www.linkedin.com/in/qi-li-md-7679a613/)

**Bowen Chen**
Founding Engineer
Stanford CS PhD dropout (for this company!); built V1 pipeline
[LinkedIn](https://www.linkedin.com/in/bowen-chen-4756511b8/) [Google Scholar](https://scholar.google.com/citations?user=...)

Proprietary and Confidential 2 Aevius

## Slide 3: PROBLEM - Patients aren't computable
### Patients aren't computable
Patients exist as fragments; Al can't compute across them.

*   Data are siloed across EHR tables, PACS/LIS, notes, genomics, and devices.
*   No unified patient representation; models see pieces, not people.
*   APIs throttle and schemas fragment; timeline and cross-modal context is lost.

Proprietary and Confidential 3 Aevius

## Slide 4: CONTEXT - Self supervised learning
### Self supervised learning
How do you make a model learn data representations without labels?

The self-supervised solution:
1.  Take complete data
2.  Randomly hide 15%
3.  Force model to predict hidden values what from remains

Canonical example SSL trained on Wikipedia (Word2Vec) the model learns relationships, geometry encodes meaning!

**Word2Vec Embedding Relationships:**
*   King - Man = Queen - Woman → Meaning emerges
*   Clusters show relationships:
    *   **Gender/Royalty:** King, Queen, Man, Woman
    *   **Geography:** France, Paris, Japan, Tokyo
    *   **Medical:** Doctor, Nurse, Hospital, Clinic

Proprietary and Confidential 4 Aevius

## Slide 5: INNOVATION - Can we apply SSL to medical data?
### Can we apply SSL to medical data?
Patient care is driven by multi-modal data (structured, unstructured, imaging, other)

**a**
*   12 acute and specialty hospitals
*   4 ambulatory surgery centers
*   5 teaching hospitals
*   22 urgent care centers
*   28 rehabilitations locations
*   5 community health centers

*   7.2M patients
*   140 countries
*   4B encounters
*   18 modalities

**c (Modalities and their Data Volume - Count (log scale))**
| Modality                        | Count (approximate) |
| :------------------------------ | :------------------ |
| Vital signs                     | 2B                  |
| Labs                            | 1.6B                |
| Progress notes                  | 158.7M              |
| Medications                     | 111.4M              |
| Radiology                       | 46.6M               |
| Diagnosis                       | 39.3M               |
| Clinical notes                  | 27.5M               |
| Pathology                       | 13.1M               |
| Cardiology                      | 8.4M                |
| Vascular                        | 1.5M                |
| Nuclear medicine                | 1.1M                |
| Respiratory                     | 1.1M                |
| Muscoskeletal                   | 960.6K              |
| Genitourinary                   | 522.2K              |
| Hematology                      | 276.4K              |
| Molecular & genetics            | 214.1K              |
| Neurology & sleep               | 130.9K              |
| Endoscopy & procedures          | 129.7K              |
| Pulmonary                       | ~120K (estimated)   |
| *Other Disease Categories Shown (no explicit counts)* | Infectious disease, Blood & immune, Neoplasms, Endocrine & metabolic, Mental & neuro-divergence, Nervous, Eye disorder, Ear disorder, Circulatory, Digestive, Skin & sub-cutaneous, Ophthalmology, Bone density, Perinatal condition childbirth, Pregnancy &, Congenital disorder not otherwise classified, Injuries & external causes, External causes of morbidity, Contact with health services, Special purposes |

Multimodal encoders → cross-modal attention → temporal transformer → one unified and updating patient embedding

Proprietary and Confidential 5 Aevius

## Slide 6: CONTEXT - Unstructured data unlocks the "why" behind the "what"
### Unstructured data unlocks the "why" behind the "what"
Cross-modal learning reveals causality, context and reasoning invisible in structured data

Structured data shows facts

**Patient: John D., 68-year-old male**
Primary Complaint: Chest Pain

**Diagnoses**
I10 (Hypertension), E11.9 (Type 2 Diabetes), R07.9 (Chest Pain)

**Medications**
Metformin, Lisinopril, Atorvastatin, Aspirin

**Vitals**
BP 145/90, HR 82, BMI 31

**Labs**
HbA1c 7.8%, LDL 110 mg/dL, Cr 0.9 mg/dL

Unstructured data reveals meaning

**Clinic Note:** “... intermittent, **non-exertional** chest tightness, described as 'a dull ache'. No shortness of breath. States he often **forgets to take his Lisinopril** ... anxious about **financial stress**."
**Chest X-Ray:** "**No acute cardiopulmonary process**. Mild degenerative changes of the thoracic spine.”

The chest pain is non-cardiac. The real issues are medication non-adherence and stress.

Proprietary and Confidential 6 Aevius

## Slide 7: INNOVATION - Let's use SSL to unify ALL medical data
### Let's use SSL to unify ALL medical data
From all modalities to one unified, continuously updating patient representation

**INPUTS**
*   Lab Values: 3,000+ LOINC codes
*   Pathology: Gigapixel whole slide images
*   Clinical Notes: 158M progress notes
*   Radiology: CT/MRI/X-ray
*   Genomics: Variants & expression
*   Medications: 156M administrations
*   Vitals: 2B measurements

Specialized Encoders

**OUTPUT: UNIFIED PATIENT EMBEDDING**
`[0.234, -0.891, 0.445, 0.123, -0.567, 0.890, -0.234, 0.678, -0.345, 0.901, -0.123, 0.456, -0.789, 0.234, -0.567, ... 1000+ dimensions ... 0.345, -0.678, 0.123, -0.456, 0.789]`

Every patient becomes one vector. All medical questions become computation.

Proprietary and Confidential 7 Aevius

## Slide 8: KEY INNOVATION - This creates a patient level representation
### This creates a patient level representation
From scattered records and diverse data modalities - to temporally aligned embeddings

**Diagram Flow:**
*   **Visit 1** data (icons representing different modalities like lab results, imaging, clinical notes)
*   These generate **Event tokens** and are aligned with **Time tokens** (t0, t1, t2, t3).
*   Input to a **Modality-Specific Deep Tokenizer**.
*   Feeds into **V1 Multimodal Temporal Foundation Model**.
*   Produces a **Dynamic Whole-Patient Embedding** (represented by a human silhouette).
*   **Outputs/Applications:**
    *   Survival Modeling
    *   Binary Classification
    *   Prediction at a given time
    *   Changes across time (visualized as evolving points in an embedding space)

Proprietary and Confidential 8 Aevius

## Slide 9: KEY INNOVATION - Each touchpoint updates our embeddings in real time
### Each touchpoint updates our embeddings in real time
Not a snapshot—a continuously learning whole-patient representation!

**Diagram Flow (Extending from Slide 8):**
*   **Visit 1** data (Event tokens, Time tokens t0-t3)
*   ... (continuation of patient journey)
*   **Visit 2** data (Event tokens, Time tokens t4-t7, ..., tn)
*   These are processed by a **Modality-Specific Deep Tokenizer**.
*   Feeds into **V1 Multimodal Temporal Foundation Model**.
*   Continuously updates the **Dynamic Whole-Patient Embedding**.
*   **Outputs/Applications:**
    *   Survival Modeling
    *   Binary Classification
    *   Prediction at a given time
    *   Changes across time (visualized as evolving points in an embedding space, showing movement of a patient's embedding over time)

Proprietary and Confidential 9 Aevius

## Slide 10: KEY INNOVATION - Embeddings becomes the history and prediction engine
### Embeddings becomes the history and prediction engine
Query past states, predict future trajectories—a tractable new paradigm for medicine

**Diagram Flow (Extending from Slide 9):**
*   **Visit 1** data (Event tokens, Time tokens t0-t3)
*   ... (continuation)
*   **Visit 2** data (Event tokens, Time tokens t4-t7, ..., tn)
*   ... (continuation)
*   **Visit 3** data (Event tokens, Time tokens tn+1, tn+2, tn+3)
*   Processed by a **Modality-Specific Deep Tokenizer**.
*   Feeds into **V1 Multimodal Temporal Foundation Model**.
*   Continuously updates the **Dynamic Whole-Patient Embedding**.
*   **Outputs/Applications:**
    *   Survival Modeling
    *   Binary Classification
    *   Prediction at a given time
    *   Changes across time (visualized as evolving points in an embedding space, showing past trajectory and potential future path)

Proprietary and Confidential 10 Aevius

## Slide 11: CONSEQUENCE - Patient clusters emerge naturally in embedding space
### Patient clusters emerge naturally in embedding space
No labels needed—search, compare, forecast, triage on patients via representations

**UMAP Plot of Patient Clusters:**
*   **UMAP 1** (X-axis) and **UMAP 2** (Y-axis)
*   Distinct clusters of patients are observed, color-coded by condition, demonstrating natural emergence of groups.
*   **Legend:**
    *   Cardiovascular (Orange)
    *   Healthy (Light Green)
    *   Neurodegenerative (Purple)
    *   Oncology (Red)
    *   Pre-disease (Gray)
    *   Type 2 Diabetes (Light Blue)

*Concept rendering - actual demo to come

Proprietary and Confidential 11 Aevius

## Slide 12: CONSEQUENCE - We unlock capabilities across clinical care & discovery
### We unlock capabilities across clinical care & discovery
With multimodal embeddings, every medical question becomes computationally tractable

**Capabilities:**

1.  **Early Diagnosis**
    *   Diagram showing a patient journey with detection points.
2.  **Treatment Response**
    *   Diagram showing treatment leading to potential outcomes: Effect, No Effect, Adverse Effect.
3.  **Biomedical discovery**
    *   **Fine-grained disease subtyping:** t-SNE plot showing distinct sub-clusters of a disease.
    *   **Novel biomarker discovery:** Graph showing distinct peaks for potential biomarkers.
4.  **Dynamic risk scores**
    *   **Alzheimer's Disease:** Graph showing increasing risk over time.
    *   **Cancer:** Graph showing fluctuating risk over time.
5.  **Clinical Trial Matching**
    *   **Patient to Trial:** Visual representation of matching a patient to suitable trials/treatments.
    *   **Trial to Patient:** Visual representation of finding suitable patients for a trial.
6.  **Population Health**
    *   UMAP-like plots showing changes in population distribution over several months (Nov, Dec, Jan, Feb).

[Demo link](https://www.aevius.ai/demo)

Proprietary and Confidential 12 Aevius

## Slide 13: SOLUTION - We built V1 at Harvard & Mass General Brigham
### We built V1 at Harvard & Mass General Brigham
7.2M Patients | 4B Events | 28y Span (1992–2025) | 158M Clinical notes | 1.6B Labs | 2B vitals | Multimodal w/ pathology & genomics

**V1 Architecture Diagram:**

*   **Inputs:** Patient attributes (cls, Ethnicity, Sex, Age) and various modality icons (representing different data types like clinical notes, labs, imaging) across multiple visits (Visit 1, Visit 2, Visit 3, Visit 4, Visit n).
*   These inputs are converted into **Value tokens (modality-specific)** and **Time tokens** (t0, t1, t2, t3, ..., tn+3).
*   **V1 Encoder:** Processes the tokens.
    *   **Outputs:** Patient embedding and Hidden state.
*   **V1 Decoder:** Takes the Hidden state.
    *   **Outputs:** Reconstructed value tokens.

**Tokenization Components:**

*   **Text encodings:** LLM, MLP
*   **Paired modality encoding (test, value):** Learn. emb. + LLM, MLP
*   **Structured encoding <value>:** Tokenizer, MLP
*   **Image encoding:** VFM, MLP

Proprietary and Confidential 13 Aevius

## Slide 14: SOLUTION - We built V1 at Harvard & Mass General Brigham
### We built V1 at Harvard & Mass General Brigham
7.2M Patients | 4B Events | 28y Span (1992–2025) | 158M Clinical notes | 1.6B Labs | 2B vitals | Multimodal w/ pathology & genomics

**Screenshot of UMAP Explorer:**
*   **Title:** UMAP Explorer
*   **Filters:** Year: 2020 - N=50000
*   **Actions:** Search patients, Search, Clear, Fit Classifier, Reset View, Download Table CSV
*   **Instructions:** Click a table cell to see full contents
*   **Main View:** A large scatter plot (UMAP projection) displaying patient embeddings, colored by density or a latent feature.
*   **Bottom Right:** A small video frame showing a person, likely demonstrating the interface.

[Demo link](https://www.aevius.ai/demo)

Proprietary and Confidential 14 Aevius

## Slide 15: BENCHMARKS - V1 delivers
### V1 delivers
Multimodal patient embeddings capture the full spectrum of patient phenotypes

**UMAP Plot with Phenotype Clusters and Examples:**

*   **Skeletal Problems Cluster:**
    *   78M, degenerative joint disease of right knee
    *   30F, acute osteomyelitis from tibia fracture
    *   29M, degeneration in spinal disk
*   **Skin Lesions Cluster:**
    *   15M, acne
    *   45F, many benign skin lesions, recommended biopsy
    *   69F, basal cell carcinoma & other benign skin lesions
*   **Blood Disorders Cluster:**
    *   45F, anemia secondary to menorrhagia
    *   29F, nodular lymphocyte predominant Hodgkin's lymphoma
    *   25M, biopsy of neck mass with Hodgkin's lymphoma
    *   64M, bone marrow biopsy with hairy cell leukemia
*   **Eye Disorders Cluster:**
    *   72M, considering cataract surgery
    *   73F, glaucoma with history of stroke
    *   49F, retinal scarring & atrophic macula
    *   50F, angle-closure glaucoma with history of asthma & rosacea
*   **Pap Smears Cluster:**
    *   18F, normal pap smear
    *   33F, normal pap smear with inflammation
    *   38F, squamous metaplasia
*   **Breast Imaging Cluster:**
    *   28F, interlobular fibrosis & inflammation in right breast
    *   47F, breast MRI with abnormal mass
    *   38F, ductal carcinoma in situ
    *   40F, invasive ductal carcinoma

Proprietary and Confidential 15 Aevius

## Slide 16: BENCHMARKS - V1 delivers
### V1 delivers
Excellent predictive capability across 100+ clinical & operational tasks

**AUROC Performance Across Task Categories (50%-100% AUROC):**
*   **Performance Categories:** Poor, Fair, Good, Excellent, Elite
*   **Legend:** Count (Baseline 1), Age+Sex (Baseline 2), V1 (Aevius Model)

**1. New Disease Onset (77 tasks)**
*   **Examples of tasks and their performance level (V1):**
    *   **Elite:** COVID-19 Death, Acute MI, Preeclampsia, In-Hospital Sepsis, Schizophrenia, VTE, Death Prostate Cancer, Opioid Use Dis After Opioid, Opioid Use Disorder, Death Aortic Stenosis, Death by Stroke, 30-Day Hospital Readmission, Hospital Length Of Stay >, Sleep Apnea, Death Breast Cancer, Death HF, Death Lung Cancer.
    *   V1 consistently outperforms Count and Age+Sex across nearly all 77 tasks, with most in the "Excellent" or "Elite" range.

**2. Disease Progression (30 tasks)**
*   **Examples of tasks and their performance level (V1):**
    *   **Elite:** COVID-19 Death, Diastolic HF HTN, HF HTN, death Prostate Cancer, CKD Stage 3+ HTN, death Aortic Stenosis, T2DM Obesity, AFib HTN, death Stroke, Urine Ret BPH, Resp Fail COPD, death Breast Cancer, PAD Dis Diabetes Mellitus, Insulin T2DM, HF Coronary Artery Dis, Exac COPD, DM Foot Ulcer T2DM, death HF, Steroids Asthma, death Lung Cancer, AKI Fail HF, first metastasis after diagnosis, death Colon Cancer, Cirrhosis Chronic Hepatitis, Ischemic Stroke AFib, Stage 4+ CKD CKD Stage 3, death Liver Cancer, RA Second-Line Therapy.
    *   V1 shows strong performance, primarily in the "Excellent" or "Elite" range.

**3. Treatment Outcomes (14 tasks)**
*   **Examples of tasks and their performance level (V1):**
    *   **Excellent/Elite:** Opioid Use Dis After Opioids, GI Bleeding on Antiplatelet s, T2DM After Corticosteroid s, T2DM After Atypical Antipsychotic, death following pembrolizumab, a positive response to Nivolumab, death following nivolumab, death following ipilimumab, + response to Pembroliz, + response to Etanercept, + response to Ipilimumab, + response to Trastuzumab, + response to Durvalumab, Clostridioides difficile.
    *   V1 demonstrates high predictive power for treatment outcomes.

**4. Hospital Operations (3 tasks)**
*   **Tasks and their performance level (V1):**
    *   **Elite:** In-Hospital Sepsis, 30-Day Hospital Readmission, Hospital Length Of Stay >.
    *   V1 achieves very high performance for these critical operational tasks.

Proprietary and Confidential 16 Aevius

## Slide 17: BENCHMARKS - V1 delivers
### V1 delivers
Already demonstrating elite capability in interesting areas

**AUROC Performance Comparison (V1 vs. Baselines):**
*   **X-axis:** AUROC (60% to 100%) with regions for Fair (yellow), Good (light green), Excellent (green), Elite (dark green).
*   **Legend:** Count (grey), Age+Sex (light blue), V1 (dark blue)

| Task                          | V1 AUROC (approx.) |
| :---------------------------- | :----------------- |
| COVID-19 Death                | 95%                |
| Death                         | 93%                |
| Acute MI                      | 90%                |
| Preeclampsia                  | 92%                |
| In-Hospital Sepsis            | 89%                |
| Schizophrenia                 | 88%                |
| VTE                           | 85%                |
| Death Prostate Cancer         | 90%                |
| Opioid Use Dis After Opioid   | 90%                |
| Opioid Use Disorder           | 88%                |
| Death Aortic Stenosis         | 81%                |
| Death by Stroke               | 88%                |
| 30-Day Hospital Readmission   | 80%                |
| Hospital Length Of Stay >     | 82%                |
| Sleep Apnea                   | 78%                |
| Death Breast Cancer           | 89%                |
| Death HF                      | 79%                |
| Death Lung Cancer             | 78%                |

*   V1 consistently shows significantly higher AUROC compared to 'Count' and 'Age+Sex' baselines across all listed tasks.

Proprietary and Confidential 17 Aevius

## Slide 18: BENCHMARKS - One Model, Multiple Specialties
### One Model, Multiple Specialties
v1 achieves strong performance across medical domains with a single architecture

**Bubble Chart: Group Performance (AUROC) vs. Improvement Over Baseline Models**
*   **X-axis:** Improvement Over Baseline Models (+0% to +20%)
*   **Y-axis:** Group Performance (AUROC) (75% to 90%)
*   Each bubble represents a medical specialty, with the number of tasks in parentheses.

| Specialty                     | AUROC (approx.) | Improvement (approx.) | Number of Tasks |
| :---------------------------- | :-------------- | :-------------------- | :-------------- |
| Sepsis/Critical               | 88%             | 11%                   | (2)             |
| Addiction Medicine            | 87%             | 18%                   | (3)             |
| Orthopedics                   | 87%             | 6%                    | (2)             |
| Neurovascular                 | 86%             | 14%                   | (2)             |
| Pulmonary                     | 85%             | 11%                   | (7)             |
| Endocrine                     | 84%             | 14%                   | (8)             |
| Hematology                    | 84%             | 16%                   | (2)             |
| Cardiovascular Risk           | 83%             | 5%                    | (1)             |
| Cardiology                    | 82%             | 9%                    | (11)            |
| Nephrology                    | 81%             | 7%                    | (4)             |
| Mortality Risk                | 81%             | 10%                   | (6)             |
| Operations                    | 81%             | 12%                   | (2)             |
| Neurology                     | 80%             | 15%                   | (4)             |
| Mental Health                 | 80%             | 17%                   | (3)             |
| Oncology                      | 80%             | 10%                   | (21)            |
| Urology                       | 79%             | 13%                   | (1)             |
| Hepatology                    | 78%             | 14%                   | (2)             |
| Internal Medicine             | 78%             | 8%                    | (31)            |
| Critical Care                 | 77%             | 15%                   | (2)             |
| Rheumatology                  | 77%             | 8%                    | (4)             |
| Gastroenterology              | 76%             | 14%                   | (4)             |
| Sleep Medicine                | 76%             | 10%                   | (1)             |
| Gynecology                    | 76%             | 12%                   | (1)             |

Proprietary and Confidential 18 Aevius

## Slide 19: VISION - The Unified Patient Representation Platform
### The Unified Patient Representation Platform
From fragmented multimodal data to continuous embedding intelligence

1.  **Multimodal Data Pipeline**
    Real-time ingestion from EHR and clinical systems
2.  **Foundation Model (v1)**
    Temporal and cross-modal self-supervised learning across 7M patients
3.  **Patient Embeddings**
    Continuously updating vectors capturing complete patient state
4.  **Application Suite, Query & Computation Layer**
    Platform for search, inference, and deployed clinical applications

*   **Right Side:** A UMAP visualization of patient embeddings, similar to previous slides, illustrating the patient representation space.

Proprietary and Confidential 19 Aevius

## Slide 20: Seed Execution Plan
### Seed Execution Plan
The next 120 days

Proprietary and Confidential 20 Aevius

## Slide 21: GO-TO-MARKET - How do we scale beyond Harvard & Mass Gen Brigham?
### How do we scale beyond Harvard & Mass Gen Brigham?
We want to reproducibly turn fragmented patient data into computational intelligence

**Wedge**
Epic → Cloud Data Lake
Secure the data pipeline
→ GET IN

**Platform**
Centralized Embeddings
Privacy-compliant aggregation
→ SCALE

**Deployment**
Model Distribution
Every pipe = distribution channel
→ DISTRIBUTE

Proprietary and Confidential 21 Aevius

## Slide 22: GO-TO-MARKET - Our 3-Phase Go-to-Market Strategy
### Our 3-Phase Go-to-Market Strategy
Build pipeline → Add compliance → Deploy products

| Phase                 | 1. Data Wedge                                        | 2. Embedding Platform                                | 3. AI Deployment                                       |
| :-------------------- | :--------------------------------------------------- | :--------------------------------------------------- | :----------------------------------------------------- |
| **Timeline**          | Q1 2026                                              | Q2 2026                                              | Q3 2026+                                               |
| **Strategy**          | ENTRY: Build data pipeline to prove value            | SCALE: Centralize embeddings with compliance         | END GAME: Our embeddings + pipes = Al at scale         |
| **WHAT WE BUILD**     | → Epic → Cloud data pipeline                         | → Expert-determined embeddings                       | → Deploy our models to all sites                       |
|                       | → Local embedding generation                         | → Cross-site patient search                          | → Push embedding-enabled apps                          |
|                       | → Clinical search & sandbox tools                    | → One contract = entire network                      | → Instant network-wide updates                         |
| **ECONOMICS/REVENUE** | **ECONOMICS:**                                       | **REVENUE MODEL:**                                   | **PLATFORM ECONOMICS:**                                |
|                       | • Free/low-cost deployment                           | • Platform access (pharma/payers)                    | • Per-site deployment fees                             |
|                       | • We get: data access rights                         | • Hospital analytics & benchmarking                  | • Model usage subscriptions                            |
|                       | • Build trust & prove ROI                            | • Annual enterprise + usage pricing                  | • Compute markup on inference                          |
| **Market Value**      | **$5B**                                              | **$20B**                                             | **$50B+**                                              |

Proprietary and Confidential 22 Aevius

## Slide 23: GO-TO-MARKET - 1) The Wedge
### 1) The Wedge
Building a focused multimodal data access pipeline

**Data Pipeline Flow:**
*   **Epic Chronicles** (Proprietary NoSQL (Cache/MUMPS))
*   ETL nightly ↓
*   **Epic Clarity** (SQL Server • 18,000+ tables)
*   Read access ↑
*   **DATA LAKE FOUNDATION: Apache Iceberg Table Format** (Raw data storage • Open-source • ACID • Time travel)
*   Compute engines ↓
*   **Compute Engines:** Snowflake, Databricks, or MS Fabric
*   Output ↓
*   **Patient Embeddings**

**GET IN (Steps):**
1.  **Deploy Apache Iceberg:** Create universal data lake from Epic Clarity data
2.  **Map Clarity Schema:** Raw storage of 18,000+ tables in open format
3.  **Connect Analytics Platform:** Snowflake/Databricks/Fabric read from Iceberg

**HOLD (Capabilities):**
*   **A. Research Workbench:**
    *   Embedding-based discovery platform
    *   Novel insights → publications → academic prestige
*   **B. Semantic Search + Cohort Builder:**
    *   Find patients by multimodal concepts not codes
    *   Natural language queries and cohort building
*   **C. Operational AI → MVP Clinical Copilot:**
    *   Quick wins: readmission, sepsis, deterioration
    *   Foundation for durable clinical intelligence

Proprietary and Confidential 23 Aevius

## Slide 24: GO-TO-MARKET - Execute our wedge initially where doors are open
### Execute our wedge initially where doors are open
We will target organizations already choosing cloud for their EHR data warehouse.

**Venn Diagram:**
*   **Epic AMCs ~130:** (Growing at 15+ per year, Dominates AMCS)
*   **Cloud DW ~30:** (Started cloud migration for better access)
*   **OUR SEED WEDGE (Overlap):** Early adopters ready today

**MARKET REALITY**
| Metric                   | Value       |
| :----------------------- | :---------- |
| Total U.S. AMCS:         | 220         |
| Epic in AMCs:            | ~60%        |
| U.S. EHR market share:   | 55%         |
| New wins 2024:           | 70%         |
| Cloud migration:         | Accelerating|

**WHY WE WIN HERE**
*   ✓ Cloud infrastructure in place
*   ✓ Now need usability layer
*   ✓ Budget exists for innovation
*   ✓ Deploy embeddings immediately

**THE PAIN POINT DRIVING MIGRATION**
Hospitals want better data access and utility than Epic's provides → they adopt cloud data warehousing → we deliver the embedding-based intelligence layer on top

Proprietary and Confidential 24 Aevius

## Slide 25: GO-TO-MARKET - 2) Building the Embedding Platform
### 2) Building the Embedding Platform
Creating privacy-compliant streamlined infrastructure for network-wide intelligence

**Embedding Aggregation Architecture:**
*   Distributed hospitals (MGB, #2, #3, #4) each contain patient data.
*   Centralized embeddings are derived, allowing search across sites while raw data stays local.

**What Centralized Embeddings Enable:**
*   **Search:** Query patients across sites
*   **Benchmarking:** Site performance metrics
*   **Discovery:** Find similar patients globally
*   **Analytics:** Compare populations
*   **Intelligence:** Real-time network insights
*   **Cohorts:** Multi-site patient groups

**How We Ensure Privacy:**
*   ✓ **Trusted Partner Network:** Platform access for verified healthcare organizations under legal agreements. Business Associate Agreements (BAAs) with all parties. Full audit trail of all queries and access
*   ✓ **Local Processing, Central Aggregation:** Raw data never leaves hospital systems. Only high-dimensional embeddings (1000+ dimensions) are shared - mathematically non-invertible to original patient data
*   ✓ **Automated Similarity Validation:** Embeddings compared to baseline distributions in real-time. Statistical outliers beyond threshold automatically excluded. System self-regulates without manual intervention
*   ✓ **Differential Privacy Controls:** Calibrated noise injection prevents individual patient memorization. Gradient clipping limits any single patient's influence. Search returns cohorts (minimum size), never individuals
*   ✓ **HIPAA Expert Determination:** Third-party statistical validation proves embeddings cannot be reversed to identify individuals. Covers entire pipeline from embedding generation through search operations

Proprietary and Confidential 26 Aevius

## Slide 26: GO-TO-MARKET - Automated privacy compliance through statistical similarity
### Automated privacy compliance through statistical similarity
One-time expert determination enables continuous nightly batch processing

**Embedding Distribution Analysis:**
*   **X-axis:** Embedding Space (1000+ dimensions)
*   **σ = 0.95 threshold** (red dashed line)
*   **Distributions:**
    *   Canonical Set (blue)
    *   Auto-approved (99.9%) (green)
    *   Outliers excluded (0.1%) (red)

**How It Works:**
1.  Define canonical embedding set
2.  Extract nightly embeddings
3.  Compare to canonical
4.  Auto-approve if σ < 0.95
5.  Exclude outliers

Proprietary and Confidential 27 Aevius

## Slide 27: PRODUCT VISION - From V1 Model → Product: Search • Compare • Reason
### From V1 Model → Product: Search • Compare • Reason
Multi-modal, multi-temporal patient embeddings for real-time similarity → cohorting → evidence

**DATA MODALITIES:**
*   Clinical Notes
*   Lab Values
*   Imaging
*   Genomics
*   Wearables

**EMBEDDING SPACE:**
*   (Visual representation of patient embeddings grouped into clusters)

**MULTIMODAL SIGNATURES (Use Cases):**

*   **HOSPITAL: READMISSION SIGNATURE**
    *   Discharge notes ∩ social factors ∩ lab trends
    *   → 30-day readmission prevention

*   **PHARMA: HIDDEN RESPONDER SIGNATURE**
    *   Failed therapies ∩ histopathology ∩ imaging ∩ genomics
    *   → Rescue non-responders

*   **PAYER: FREQUENT FLYER SIGNATURE**
    *   ER patterns ∩ SDOH ∩ med adherence ∩ psych notes
    *   → Prevent high-cost ER cycles

Proprietary and Confidential 28 Aevius

## Slide 28: PRODUCT ROADMAP - Ship Search UI & APIs → Let products emerge
### Ship Search UI & APIs → Let products emerge
Usage patterns = customer-pull products we want to build; let partners/agents build the rest

**Top-level Products:**
*   **Search:**
    *   k-NN retrieval at a chosen timepoint
    *   Find patients like this
*   **Compare:**
    *   Cohort builder + subclustering
    *   See structure inside the cohort
*   **Reason:**
    *   Ask time-anchored questions
    *   Pathways • baselines • outcomes

**Core APIs:**
*   `similar_to_patient(patient_id, timepoint)`
*   `similar_to_criteria(signature)`
*   `predict_outcome(patient_id, task)`

**Products emerge from usage:**
*   Prior-Auth Evidence Packs
*   Billing compliance checks
*   Green-Button RWE
*   Utilization Mirror
*   Similar-case retrieval
*   Responder portraits
*   Multi-level monitoring • Cluster watch
*   Medical Twins

Proprietary and Confidential 29 Aevius

## Slide 29: BUSINESS MODEL - Monetization & customer segments
### Monetization & customer segments
V1 embeddings + lightweight productization enable paid search, cohort intelligence, and AI deployment

| STAKEHOLDER                   | PRODUCT MODULES (LIGHT LIFT)                                                                           | BUSINESS VALUE & OUTCOMES                                                                                                                                                                                                                                                                                                                                                                                             | ECONOMICS                                                                                                                                             |
| :---------------------------- | :----------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Health systems (IDNs/AMCs)    | Prior-Auth Evidence Packs • Billing compliance checks • Case Atlas • Research Cohort Builder • Search API (V1) | Time-anchored multimodal similarity assembles "patients like this" with approved outcomes to attach as evidence → denials down, approvals faster. For rev-cycle, similarity search flags documentation/coding gaps vs best-match cohorts.                                                                                                                                                                                      | Hospital earns new rev-share + activation. We pay you before you pay us (aligned incentives)                                                            |
| Pharma / CRO                  | Green-Button RWE • Comparator lookups • Trial Signal & Rescue (site heatmaps)                          | Concept/signature creates a cohort handle; similarity finds comparators; we return aggregate outcomes and site counts as signed Evidence Packs → faster feasibility & trial rescue.                                                                                                                                                                                                                                        | Pays: $/query + SLAs • Hospital earns: rev-share + activation                                                                                         |
| Payers / ACOs                 | Utilization Mirror • Prior-auth evidence (aggregate)                                                   | Matched-cohort comparisons over embeddings give like-for-like outcome/cost benchmarks; aggregate evidence supports policy tuning and expedited approvals.                                                                                                                                                                                                                                                               | Pays: PMPM + usage • Hospital earns: shared analytics fees                                                                                            |
| Clinicians                    | Similar-case retrieval • Treatment pathway navigator • Rare-disease match                              | Time-anchored similarity shows what actually happened to comparable patients and their treatment pathways → supports the differential (no CDS).                                                                                                                                                                                                                                                                         | Pays: seat bundles (via hospital)                                                                                                                     |
| Device & commercial Intelligence | Market Trends & Utilization • Responder portraits • Living registry (aggregate)                      | Treatment patterns, device utilization. Responder vs non-responder cohorts via similarity around outcome anchors; scheduled aggregate refresh keeps surveillance current.                                                                                                                                                                                                                                               | Pays: subscriptions + programs • Hospital earns: rev-share                                                                                            |
| AI/Tech                       | SDK + sandbox • Agent plugins • AMC-scoped keys                                                        | Agents call concept/similarity/aggregate endpoints to retrieve cohorts and evidence packs; keys are AMC-scoped to local policies.                                                                                                                                                                                                                                                                                       | Pays: usage • Hospital earns: % of app revenue + new data sale                                                                                        |
| Public health / gov           | Multi-level monitoring • Cluster watch • Safety signal context packs                                   | Embedding-space monitoring flags unusual clusters; we attach cohort context as aggregates only.                                                                                                                                                                                                                                                                                                                       | Pays: program contracts • Hospital earns: passthrough + overhead                                                                                      |
| Direct consumers (opt-in)     | Medical Twins • Trial radar • Expert finder (counts)                                                   | Consent-in records map to nearest-neighbor journeys and "successful enrollee" signatures; we show expert/provider counts (aggregate only) for navigation.                                                                                                                                                                                                                                                              | Pays: sponsors/grants/D2C • Hospital earns: passthrough + goodwill                                                                                    |

*Fine print: Compute remains local; exports are aggregates or approved embeddings via expert determination. Retrieval-only; observational outputs—no prescriptive CDS.*

Proprietary and Confidential 30 Aevius

## Slide 30: RAISE - $6M Seed: What We'll Accomplish
### $6M Seed: What We'll Accomplish
18 months to tackle the biggest layers of risk

1.  **Build Focused Platform**
    *   Enable secure external access
    *   → HIPAA-compliant infrastructure
    *   → Centralized embeddings storage
    *   → Expert determination pipeline
    *   → Security certifications
2.  **Prove Generalizability**
    *   Show wedge & v1 works across sites
    *   → Deploy at 2 more AMCs
    *   → Model generalizes across sites
    *   → Epic → cloud pipeline
    *   → Secure embedding access
3.  **Demo MVPs**
    *   Test market pull
    *   → Brokerage MVP: Semantic patient search
    *   → Clinical MVP: Similar patient finder for AMC researchers/billing compliance
    *   → Pilots → track queries → expand

*   ✓ 1 + 2 unlocks Series A
*   ✓ Traction with 3 makes it a much bigger round

Proprietary and Confidential 31 Aevius

## Slide 31: GLIMMER OF GREATNESS - End game: AI medicine
### End game: AI medicine
We own the unified, semantic layer and build the downstream clinical intelligence

**PATH A: Partner Big**
*   Medical data layer for frontier reasoning models
*   **Frontier AI enablement (Enable):** Multi-modal, longitudinal patient embeddings no one else has
*   **Usage-based infrastructure (Monetize):** Every medical inference flows through us, compounding value
*   **Network effects at scale (Compound):** More hospitals → better models → more partners → repeat
*   **Data gravity moat (Defend):** 10-year head start on hospital integrations + longitudinal data

**OR**

**PATH B: Build it Ourselves**
*   Full clinical agentic orchestration build
*   **AI Diagnostic reasoning (Doctor):** Pattern recognition across all modalities
*   **Treatment optimization (Intelligence):** Personalized pathways from population data
*   **Workflow automation (Agents):** Prior auth, documentation, care coordination
*   **Real-time decision support (Co-Pilot):** Ambient intelligence during care delivery
*   **Target:** 100m+ Series B/C

*Our multimodal data pipeline isn't just infrastructure — it's also the deployment layer! Every hospital we connect is instant distribution for frontier Al*

Proprietary and Confidential 32 Aevius