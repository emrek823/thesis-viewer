---
source_pdf: "https://drive.google.com/file/d/1kMQAZpZatqHfRsJEVeA5X6gmlOidAZwx/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Aevius Seed Deck 10.29.25.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1kMQAZpZatqHfRsJEVeA5X6gmlOidAZwx/view)

## Slide 1: The Complete Patient Representation Layer

**Logo:** AEVIUS

**Title:** The Complete Patient Representation Layer

**Subtitle:** Making patients computable for the first time

## Slide 2: AEVIUS Team

**Company:** AEVIUS

**Logos:**
*   Mahmood Lab
*   HARVARD MEDICAL SCHOOL
*   Mass General Brigham

**Team Members:**

*   **Rowland Pettit, MD, PhD, MBA**
    *   CEO & Co-Founder
    *   Physician-scientist (Harvard Pathology); ex-VC; years of startup consulting; comp bio/AI
    *   [LinkedIn](https://www.linkedin.com/in/rowlandpettit/)
    *   [Website](https://www.aevius.com)

*   **Max Lu, PhD**
    *   CTO & Co-Founder
    *   MIT PhD; expert in multimodal AI; 20+ papers (Nature, Nature BME, Nature Med, CVPR, ICML, ..)
    *   [LinkedIn](https://www.linkedin.com/in/max-lu-phd/)
    *   [Google Scholar](https://scholar.google.com/citations?user=your_max_lu_id_here)

*   **Faisal Mahmood, PhD**
    *   Scientific Co-Founder
    *   HMS Professor; multimodal foundation models for human health (UNI/CONCH/PathChat)
    *   [LinkedIn](https://www.linkedin.com/in/faisal-mahmood/)
    *   [Website](https://www.mahmoodlab.org/)
    *   [Google Scholar](https://scholar.google.com/citations?user=your_faisal_mahmood_id_here)

*   **Long Phi Le, MD, PhD**
    *   Healthcare Data Infra & Co-Founder
    *   Co-founded ArcherDX → $1.4B exit; VP Pathology MGH
    *   [LinkedIn](https://www.linkedin.com/in/long-phi-le/)

*   **Qi Li, MD**
    *   Chief Business Officer (Acting)
    *   Innovation VP at InterSystems (Epic's backend); 500+ hospital relationships
    *   [LinkedIn](https://www.linkedin.com/in/qi-li-md/)

*   **Bowen Chen**
    *   Founding Engineer
    *   Stanford CS PhD dropout (for this company!); Expert in agentic AI systems for comp bio
    *   [LinkedIn](https://www.linkedin.com/in/bowen-chen/)
    *   [Google Scholar](https://scholar.google.com/citations?user=your_bowen_chen_id_here)

*   **Andrew Zhang**
    *   Founding Team & Engineers (Pre-hired)
    *   Top AI researchers in multimodal AI for healthcare

*   **Tong Ding**
    *   Founding Team & Engineers (Pre-hired)
    *   Top AI researchers in multimodal AI for healthcare

**Footer:** Proprietary and Confidential 2 Aevius

## Slide 3: PROBLEM Patients aren't computable

**Title:** PROBLEM
Patients aren't computable

**Subtitle:** Patients exist as fragments; AI can't compute across them.

*   Data are siloed across EHR tables, PACS/LIS, notes, genomics, and devices.
*   No unified patient representation; models see pieces, not people.
*   APIs throttle and schemas fragment; timeline and cross-modal context is lost.

**Image Description:** A classic illustration of the "Blind men and an elephant" parable, where several blind men touch different parts of an elephant and describe it differently (e.g., a wall, a spear, a snake, a tree trunk, a fan, a rope), symbolizing the fragmented view of patient data.

**Footer:** Proprietary and Confidential 3 Aevius

## Slide 4: CONTEXT Self supervised learning

**Title:** CONTEXT
Self supervised learning

**Subtitle:** How do you make a model learn data representations without labels?

**The self-supervised solution:**

1.  Take complete data
2.  Randomly hide 15%
3.  Force model to predict hidden values what from remains

**Image Description (Left):** A grid of image tiles showing a flamingo. The first panel shows some tiles removed (hidden 15%), and the second panel shows the reconstructed image of the flamingo.

4.  To succeed, model must learn the underlying structure
5.  Result: The model discovers patterns and relationships

**Canonical example SSL trained on Wikipedia (Word2Vec)**
the model learns relationships, geometry encodes meaning!

**Chart: Word2Vec Embedding Space**
*   **Axes:**
    *   Dimension 1 (X-axis)
    *   Gender/Royalty (Diagonal line)
    *   Geography (Arc)
    *   Medical (Arc)
*   **Data Points and Relationships:**
    *   **King** and **Queen** are separated along the Gender/Royalty dimension.
    *   **Man** and **Woman** are separated along the Gender/Royalty dimension, parallel to King-Queen.
    *   **King - Man = Queen - Woman → Meaning emerges**
    *   **France** and **Paris** are clustered together.
    *   **Japan** and **Tokyo** are clustered together.
    *   **Doctor**, **Nurse**, **Hospital**, and **Clinic** are clustered together, showing relationships in the medical domain.

**Footer:** Proprietary and Confidential 4 Aevius

## Slide 5: INNOVATION Can we apply SSL to medical data?

**Title:** INNOVATION
Can we apply SSL to medical data?

**Subtitle:** Patient care is driven by multi-modal data (structured, unstructured, imaging, other)

**a. Healthcare Landscape:**
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

**c. Data Modality Counts (Log Scale):**

| Modality                  | Count        |
| :------------------------ | :----------- |
| Vital signs               | 2B           |
| Labs                      | 1.6B         |
| Progress notes            | 158.7M       |
| Medications               | 111.4M       |
| Radiology                 | 46.6M        |
| Diagnosis                 | 39.3M        |
| Clinical notes            | 27.5M        |
| Pathology                 | 13.1M        |
| Cardiology                | 8.4M         |
| Vascular                  | 1.5M         |
| Nuclear medicine          | 1.1M         |
| Respiratory               | 1.1M         |
| Digestive                 | 1.1M (approx)|
| Bone density              | 960.6K       |
| Hematology                | 522.2K       |
| Molecular & genetics      | 276.4K       |
| Neurology & sleep         | 214.1K       |
| Congenital disorder not otherwise classified | 130.9K |
| Injuries & external causes | 129.7K |

**Process Flow:**
Multimodal encoders → cross-modal attention → temporal transformer → one unified and updating patient embedding

**Footer:** Proprietary and Confidential 5 Aevius

## Slide 6: CONTEXT Unstructured data unlocks the "why" behind the "what"

**Title:** CONTEXT
Unstructured data unlocks the "why" behind the "what"

**Subtitle:** Cross-modal learning reveals causality, context and reasoning invisible in structured data

**Structured data shows facts**

**Patient Profile:**
*   **Patient:** John D., 68-year-old male
*   **Primary Complaint:** Chest Pain

| Category        | Details                               |
| :-------------- | :------------------------------------ |
| **Diagnoses**   | I10 (Hypertension)                    |
|                 | E11.9 (Type 2 Diabetes)               |
|                 | R07.9 (Chest Pain)                    |
| **Medications** | Metformin, Lisinopril, Atorvastatin, Aspirin |
| **Vitals**      | BP 145/90, HR 82, BMI 31              |
| **Labs**        | HbA1c 7.8%, LDL 110 mg/dL, Cr 0.9 mg/dL |

**Unstructured data reveals meaning**

*   **Clinic Note:** “... intermittent, **non-exertional** chest tightness, described as 'a dull ache'. No shortness of breath. States he often **forgets to take his Lisinopril** ... anxious about **financial stress**."
*   **Chest X-Ray:** "No acute cardiopulmonary process. Mild degenerative changes of the thoracic spine.”

**Conclusion:** The chest pain is non-cardiac. The real issues are medication non-adherence and stress.

**Footer:** Proprietary and Confidential 6 Aevius

## Slide 7: INNOVATION Let's use SSL to unify ALL medical data

**Title:** INNOVATION
Let's use SSL to unify ALL medical data

**Subtitle:** From all modalities to one unified, **continuously updating** patient representation

**INPUTS**

*   Lab Values: 3,000+ LOINC codes
*   Pathology: Gigapixel whole slide images
*   Clinical Notes: 158M progress notes
*   Radiology: CT/MRI/X-ray
*   Genomics: Variants & expression
*   Medications: 156M administrations
*   Vitals: 2B measurements

**Process:** Specialized Encoders →

**OUTPUT: UNIFIED PATIENT EMBEDDING**
```
[0.234, -0.891, 0.445, 0.123,
-0.567,
0.890, -0.234, 0.678, -0.345, 0.901,
-0.123, 0.456, -0.789, 0.234,
-0.567,
...   1000+ dimensions   ...
0.345, -0.678, 0.123, -0.456, 0.789]
```

Every patient becomes one vector. All medical questions become computation.

**Footer:** Proprietary and Confidential 8 Aevius

## Slide 8: KEY INNOVATION This creates a patient level representation

**Title:** KEY INNOVATION
This creates a patient level representation

**Subtitle:** From scattered records and diverse data modalities - to temporally aligned embeddings

**Diagram: Patient Level Representation**

*   **Top Section (Data Ingestion):**
    *   **Visit 1** (Represented by icons for various data types like a document, a pathology slide, an imaging scan, and another document)
    *   **Modality-Specific Deep Tokenizer**
    *   **Event tokens** (from t0 to t3)
    *   **Time tokens** (t0, t1, t2, t3)

*   **Middle Section (Foundation Model):**
    *   **V1 Multimodal Temporal Foundation Model**

*   **Bottom Section (Output & Applications):**
    *   **Dynamic Whole-Patient Embedding** (Represented by a human silhouette)
    *   **Prediction at a given time:**
        *   **Survival Modeling** (Graph showing survival curve over time)
        *   **Binary Classification** (Scatter plot with two classes)
    *   **Changes across time:** (Scatter plot of data points representing embeddings, showing potential movement or evolution in embedding space)

**Footer:** Proprietary and Confidential 9 Aevius

## Slide 9: KEY INNOVATION Each touchpoint updates our embeddings in real time

**Title:** KEY INNOVATION
Each touchpoint updates our embeddings in real time

**Subtitle:** Not a snapshot—a continuously learning whole-patient representation!

**Diagram: Continuously Updating Patient Embeddings**

*   **Top Section (Data Ingestion):**
    *   **Visit 1** (Represented by icons for various data types)
    *   **Visit 2** (Represented by icons for various data types, indicating subsequent visits)
    *   **Modality-Specific Deep Tokenizer**
    *   **Event tokens** (from t0 to tn, spanning across Visit 1 and Visit 2)
    *   **Time tokens** (t0, t1, t2, t3 for Visit 1; t4, t5, t6, t7, tn for Visit 2)

*   **Middle Section (Foundation Model):**
    *   **V1 Multimodal Temporal Foundation Model**

*   **Bottom Section (Output & Applications):**
    *   **Dynamic Whole-Patient Embedding** (Represented by a human silhouette)
    *   **Prediction at a given time:**
        *   **Survival Modeling** (Graph showing survival curve over time)
        *   **Binary Classification** (Scatter plot with two classes)
    *   **Changes across time:** (Scatter plot of data points representing embeddings, with a dashed arrow indicating the path of a patient's embedding evolving over time)

**Footer:** Proprietary and Confidential 10 Aevius

## Slide 10: KEY INNOVATION Embeddings becomes the history and prediction engine

**Title:** KEY INNOVATION
Embeddings becomes the history and prediction engine

**Subtitle:** Query past states, predict future trajectories—a tractable new paradigm for medicine

**Diagram: History and Prediction Engine with Patient Embeddings**

*   **Top Section (Data Ingestion):**
    *   **Visit 1** (Represented by icons for various data types)
    *   **Visit 2** (Represented by icons for various data types)
    *   **Visit 3** (Represented by icons for various data types, indicating future visits or projected states)
    *   **Modality-Specific Deep Tokenizer**
    *   **Event tokens** (from t0 to tn+3, spanning across Visit 1, Visit 2, and Visit 3)
    *   **Time tokens** (t0, t1, t2, t3 for Visit 1; t4, t5, t6, t7, tn for Visit 2; tn+1, tn+2, tn+3 for Visit 3)

*   **Middle Section (Foundation Model):**
    *   **V1 Multimodal Temporal Foundation Model**

*   **Bottom Section (Output & Applications):**
    *   **Dynamic Whole-Patient Embedding** (Represented by a human silhouette)
    *   **Prediction at a given time:**
        *   **Survival Modeling** (Graph showing survival curve over time)
        *   **Binary Classification** (Scatter plot with two classes)
    *   **Changes across time:** (Scatter plot of data points representing embeddings, with a dashed arrow indicating the path of a patient's embedding evolving over time, and a distinct green point representing a predicted future state)

**Footer:** Proprietary and Confidential 11 Aevius

## Slide 11: CONSEQUENCE Patient clusters emerge naturally in embedding space

**Title:** CONSEQUENCE
Patient clusters emerge naturally in embedding space

**Subtitle:** No labels needed—search, compare, forecast, triage on patients via representations

**Chart: UMAP Plot of Patient Clusters**

*   **Chart Type:** UMAP (Uniform Manifold Approximation and Projection) scatter plot.
*   **Axes:**
    *   UMAP 1 (X-axis): -4, -2, 0, 2, 4, 6
    *   UMAP 2 (Y-axis): -4, -2, 0, 2, 4
*   **Legend / Clusters:**
    *   Cardiovascular (Orange dots)
    *   Healthy (Light Green/Cyan dots)
    *   Neurodegenerative (Purple dots)
    *   Oncology (Red dots)
    *   Pre-disease (Grey dots)
    *   Type 2 Diabetes (Grey dots)
*   **Description:** The plot shows distinct clusters of patients in the embedding space, where each cluster corresponds to a specific health condition or state, without explicit labeling during the embedding generation process. For instance, Oncology patients form a cluster in the bottom left, Neurodegenerative in the bottom right, Cardiovascular in the middle, and Healthy patients in the top region. Pre-disease and Type 2 Diabetes patients appear as a scattered cluster, often intermingled or overlapping, represented by grey dots.

**Footer:** *Concept rendering - actual demo to come. Proprietary and Confidential 12 Aevius

## Slide 12: CONSEQUENCE We unlock capabilities across clinical care & discovery

**Title:** CONSEQUENCE
We unlock capabilities across clinical care & discovery

**Subtitle:** With multimodal embeddings, every medical question becomes computationally tractable

**Capabilities:**

1.  **Early Diagnosis**
    *   *Image:* A diagram showing a patient's journey with various medical touchpoints (e.g., vitals, lab results, imaging) indicating potential risk flags.

2.  **Treatment Response**
    *   *Graph:* Three lines plotting patient outcomes over time:
        *   Effect (positive trend)
        *   No Effect (flat trend)
        *   Adverse Effect (negative trend)

3.  **Biomedical discovery**
    *   **Fine-grained disease subtyping**
        *   *Graph:* A t-SNE plot showing distinct clusters representing different disease subtypes within a broader condition.
        *   *Axes:* t-SNE1 (-30 to 30), t-SNE2 (-30 to 30)
    *   **Novel biomarker discovery**
        *   *Graph:* A plot showing peaks, potentially indicating novel biomarkers.

4.  **Dynamic risk scores**
    *   **Alzheimer's Disease**
        *   *Graph:* Risk vs. Time, showing an increasing risk trend.
    *   **Cancer**
        *   *Graph:* Risk vs. Time, showing a fluctuating risk trend with intermittent peaks.

5.  **Clinical Trial Matching**
    *   **Patient to Trial**
        *   *Image:* Illustrates matching an individual patient (silhouette + pills) to a clinical trial (group of people).
    *   **Trial to Patient**
        *   *Image:* Illustrates matching a specific trial (pills + group of people) to suitable individual patients.

6.  **Population Health**
    *   *Graphs:* Four t-SNE plots, labeled Nov, Dec, Jan, Feb, showing how patient populations (represented by clusters) evolve or change over time in the embedding space.

**Footer:** Demo link. Proprietary and Confidential 13 Aevius

## Slide 13: SOLUTION We built V1 at Harvard & Mass General Brigham

**Title:** SOLUTION
We built V1 at Harvard & Mass General Brigham

**Subtitle:** 7.2M Patients | 4B Events | 28y Span (1992–2025) | 158M Clinical notes | 1.6B Labs | 2B vitals | Multimodal w/ pathology & genomics

**Screenshot: UMAP Explorer Interface**

*   **Header:**
    *   UMAP Explorer
    *   Year: 2020 - N=50000
    *   Buttons: Search patients, Search, Clear, Fit Classifier, Reset View, Download Table CSV
    *   Map Controls: Q, +, -, X, *, circle (reset view)
    *   Text: "Click a table cell to see full contents"
*   **Main Display:** A large UMAP scatter plot displaying patient embeddings, colored by density or a latent feature, showing a dense cloud of points representing the 50,000 patients.
*   **Footer (bottom right corner of screenshot):** A person (Rowland Pettit) is visible sitting in an office, looking at a screen.

**Footer:** Demo link. Proprietary and Confidential 15 Aevius

## Slide 14: BENCHMARKS V1 delivers

**Title:** BENCHMARKS
V1 delivers

**Subtitle:** Multimodal patient embeddings capture the full spectrum of patient phenotypes

**Chart: UMAP Plot with Phenotype Clusters**

*   **Chart Type:** UMAP scatter plot, similar to previous UMAP plots, showing a dense distribution of patient embeddings.
*   **Highlighted Clusters and Associated Phenotypes (with example patient descriptions):**
    *   **Skeletal Problems:**
        *   78M, degenerative joint disease of right knee
        *   30F, acute osteomyelitis from tibia fracture
        *   29M, degeneration in spinal disk
    *   **Eye Disorders:**
        *   72M, considering cataract surgery
        *   73F, glaucoma with history of stroke
        *   49F, retinal scarring & atrophic macula
        *   50F, angle-closure glaucoma with history of asthma & rosacea
    *   **Pap Smears:**
        *   18F, normal pap smear
        *   33F, normal pap smear with inflammation
        *   38F, squamous metaplasia
    *   **Skin Lesions:**
        *   15M, acne
        *   45F, many benign skin lesions, recommended biopsy
        *   69F, basal cell carcinoma & other benign skin lesions
    *   **Breast Imaging:**
        *   28F, interlobular fibrosis & inflammation in right breast
        *   47F, breast MRI with abnormal mass
        *   38F, ductal carcinoma in situ
        *   40F, invasive ductal carcinoma
    *   **Blood Disorders:**
        *   45F, anemia secondary to menorrhagia
        *   29F, nodular lymphocyte predominant Hodgkin's lymphoma
        *   25M, biopsy of neck mass with Hodgkin's lymphoma
        *   64M, bone marrow biopsy with hairy cell leukemia

**Description:** The UMAP plot visually demonstrates how different patient conditions and phenotypes naturally cluster in the embedding space, indicating that the multimodal embeddings effectively capture diverse clinical characteristics. Each callout points to a specific cluster or region associated with a type of condition and provides examples of patient cases within that cluster.

**Footer:** Proprietary and Confidential 16 Aevius

## Slide 15: BENCHMARKS V1 delivers

**Title:** BENCHMARKS
V1 delivers

**Subtitle:** Excellent predictive capability across 100+ clinical & operational tasks

**Charts: AUROC Performance for Various Tasks**

Each chart shows Area Under the Receiver Operating Characteristic (AUROC) values for different predictive tasks, comparing 'Count', 'Age+Sex', and 'V1' models. The X-axis for all charts ranges from 50% to 100% AUROC, segmented into performance categories: Poor, Fair, Good, Excellent, Elite. 'V1' consistently shows superior performance.

**Legend:**
*   Count (Grey dot)
*   Age+Sex (Orange dot)
*   V1 (Blue dot)

**1. New Disease Onset (77 tasks)**
*   **Performance:** V1 mostly achieves Excellent to Elite performance.
*   **Example Tasks (not exhaustive, representative order):**
    *   **Elite:** HF, Hip Fracture, Death, PAD Dis, CKD, Acute MI, Parkinson's Dis, AKI Fail, AFib, Sepsis, Preeclampsia, Chronic Ischemic Heart Dis, Interstitial Lung Dis
    *   **Excellent:** COPD, Gout, Aortic Aneurysm, Osteoporosis, Gestational Diabetes, Aplastic Anemia, Pulmonary Fibrosis, Lung Cancer, Pneumonia, Liver Cancer, ICH, Stroke, Sensorineural Hearing Loss, Non-Melanoma Skin Cancer, PCOS, BPH, Schizophrenia, Osteoarthritis, VTE, Peripheral Neuropathy, T2DM, HTN, Kidney, Kidney Cancer, Opioid Use Dis, Dyslipidemia, Endometrial Cancer, Non-Hodgkin Lymphoma, Pancreatic Cancer, Melanoma, Colon Cancer, Acute Pancreatitis, Multiple Myeloma, Chronic Otitis Media, Alcohol Use Dis, Sleep Apnea, Corpus Uteri Cancer, Hyperprolactinemia, COVID-19, Ovarian Cancer, Hidradenitis Suppurativa, Rheumatoid Arthritis, Bipolar Dis, Iron Deficiency Anemia, Migraine, Glioblastoma, NAFLD, PTSD, Breast Cancer, Epilepsy, Hypothyroidism, Retinal Detachment, IBD, Rectal Cancer, Overweight, Sarcoidosis, Endometriosis, Hyperthyroidism, Thyroid Cancer, Traumatic Brain Injury, Crohn's Dis, Psoriatic Arthritis, Depression, Ulcerative Colitis, Multiple Sclerosis

**2. Disease Progression (30 tasks)**
*   **Performance:** V1 predominantly achieves Excellent to Elite performance.
*   **Example Tasks (not exhaustive):**
    *   COVID-19 Death, Diastolic HF HTN, HF HTN, death Prostate Cancer, CKD Stage 3+ HTN, death Aortic Stenosis, T2DM Obesity, AFib HTN, death Stroke, Urine Ret BPH, Resp Fail COPD, death Breast Cancer, PAD Dis Diabetes Mellitus, Insulin T2DM, HF Coronary Artery Dis, Exac COPD, DM Foot Ulcer T2DM, death HF, Steroids Asthma, death Lung Cancer, AKI Fail HF, first metastasis after diagnosis, death Colon Cancer, Cirrhosis Chronic Hepatitis, Ischemic Stroke AFib, Stage 4+ CKD CKD Stage 3, death Liver Cancer, RA Second-Line Therapy

**3. Treatment Outcomes (14 tasks)**
*   **Performance:** V1 generally achieves Good to Excellent performance.
*   **Example Tasks (not exhaustive):**
    *   Opioid Use Dis After Opioids, GI Bleeding on Antiplatelet s, T2DM After Corticosteroid s, T2DM After Atypical Antipsychotic, death following pembrolizumab, a positive response to Nivolumab, death following nivolumab, death following ipilimumab, + response to Pembroliz, + response to Etanercept, + response to Ipilimumab, + response to Trastuzumab, + response to Durvalumab, Clostridioides difficile

**4. Hospital Operations (3 tasks)**
*   **Performance:** V1 generally achieves Good to Excellent performance.
*   **Tasks:** In-Hospital Sepsis, 30-Day Hospital Readmission, Hospital Length Of Stay >

**Footer:** Proprietary and Confidential 17 Aevius

## Slide 16: VISION The Unified Patient Representation Platform

**Title:** VISION
The Unified Patient Representation Platform

**Subtitle:** From fragmented multimodal data to continuous embedding intelligence

**Platform Components:**

1.  **Multimodal Data Pipeline**
    *   Real-time ingestion from EHR and clinical systems

2.  **Foundation Model (v1)**
    *   Temporal and cross-modal self-supervised learning across 7M patients

3.  **Patient Embeddings**
    *   Continuously updating vectors capturing complete patient state

4.  **Application Suite, Query & Computation Layer**
    *   Platform for search, inference, and deployed clinical applications

**Image Description:** On the right side, a UMAP plot visually represents patient embeddings, similar to previous slides, illustrating the core output of the platform.

**Footer:** Proprietary and Confidential 20 Aevius

## Slide 17: Seed Execution Plan

**Title:** Seed Execution Plan

**Subtitle:** The next 120 days

**Footer:** Proprietary and Confidential 21 Aevius

## Slide 18: GO-TO-MARKET The Wedge

**Title:** GO-TO-MARKET
The Wedge

**Subtitle:** Building a focused multimodal data access pipeline

**Diagram: Data Access Pipeline**

*   **Source Systems:**
    *   **Epic Chronicles:** Proprietary NoSQL (Cache/MUMPS)
        *   *ETL nightly ↓*
    *   **Epic Clarity:** SQL Server • 18,000+ tables
        *   *Read access ↓*
*   **DATA LAKE FOUNDATION:**
    *   **Apache Iceberg Table Format:** Raw data storage • Open-source • ACID • Time travel
        *   *Compute engines ↓*
        *   **Compute Platforms (Choice of):**
            *   Snowflake
            *   Databricks
            *   MS Fabric
        *   *↓*
        *   **Patient Embeddings**

**Right Column: Strategy**

**GET IN**

1.  **Deploy Apache Iceberg:** Create universal data lake from Epic Clarity data
2.  **Map Clarity Schema:** Raw storage of 18,000+ tables in open format
3.  **Connect Analytics Platform:** Snowflake/Databricks/Fabric read from Iceberg

**HOLD**

A.  **Research Workbench:**
    *   Embedding-based discovery platform
    *   Novel insights → publications → academic prestige
B.  **Semantic Search + Cohort Builder:**
    *   Find patients by multimodal concepts not codes
    *   Natural language queries and cohort building
C.  **Operational AI → MVP Clinical Copilot:**
    *   Quick wins: readmission, sepsis, deterioration
    *   Foundation for durable clinical intelligence

**Footer:** Proprietary and Confidential 25 Aevius

## Slide 19: GO-TO-MARKET Execute our wedge initially where doors are open

**Title:** GO-TO-MARKET
Execute our wedge initially where doors are open

**Subtitle:** We will target organizations already choosing cloud for their EHR data warehouse.

**Venn Diagram: Target Market Segments**

*   **Left Circle:** **Epic AMCs ~130**
    *   Growing at 15+ per year
    *   Dominates AMCS
*   **Right Circle:** **Cloud DW ~30**
    *   Started cloud migration for better access
*   **Intersection (Our Seed Wedge):** **Early adopters ready today**

**Market Reality**

| Metric                      | Value       |
| :-------------------------- | :---------- |
| Total U.S. AMCS:            | 220         |
| Epic in AMCs:               | ~60%        |
| U.S. EHR market share:      | 55%         |
| New wins 2024:              | 70%         |
| Cloud migration:            | Accelerating|

**Why We Win Here**

*   ✓ Cloud infrastructure in place
*   ✓ Now need usability layer
*   ✓ Budget exists for innovation
*   ✓ Deploy embeddings immediately

**The Pain Point Driving Migration**
Hospitals want better data access and utility than Epic's provides → they adopt cloud data warehousing → we deliver the embedding-based intelligence layer on top

**Footer:** Proprietary and Confidential 26 Aevius

## Slide 20: INITIAL PRODUCT VISION From V1 Model → Product: Search • Compare • Reason

**Title:** INITIAL PRODUCT VISION
From V1 Model → Product: Search • Compare • Reason

**Subtitle:** Multi-modal, multi-temporal patient embeddings for real-time similarity → cohorting → evidence

**Data Modalities (Inputs)**
*   Clinical Notes
*   Lab Values
*   Imaging
*   Genomics
*   Wearables

**Embedding Space (Core)**
*   *Image:* A scatter plot representing the embedding space, showing distinct clusters of patients. Arrows from data modalities point towards this space, and arrows from the embedding space point to multimodal signatures.

**Multimodal Signatures (Outputs / Use Cases)**

*   **HOSPITAL: READMISSION SIGNATURE**
    *   Discharge notes ∩ social factors ∩ lab trends
    *   → 30-day readmission prevention

*   **PHARMA: HIDDEN RESPONDER SIGNATURE**
    *   Failed therapies ∩ histopathology ∩ imaging ∩ genomics
    *   → Rescue non-responders

*   **PAYER: FREQUENT FLYER SIGNATURE**
    *   ER patterns ∩ SDOH ∩ med adherence ∩ psych notes
    *   → Prevent high-cost ER cycles

**Footer:** Proprietary and Confidential 30 Aevius

## Slide 21: PRODUCT VISION Pairwise Embedding Search

**Title:** PRODUCT VISION
Pairwise Embedding Search

**Subtitle:** Real-time similarity matching across multi-dimensional clinical embeddings

**Query Patient:** PT-2024-8391

| Attribute   | Value       |
| :---------- | :---------- |
| Age         | 67 years    |
| Diagnosis   | T2DM + CHF  |
| Labs        | HbA1c: 8.2  |
| eGFR        | 45 ml/min   |
| Timeline    | 6 months    |

**Embedding Space (Visualization):**
*   *Image:* A small circular radar-like plot showing a central dot (query patient) and other dots (similar patients) around it, illustrating proximity in the embedding space.

**Top Matches • Cosine Similarity**

*   **95% - PT-2024-7265 (BEST MATCH)**
    *   68yo • T2DM + CHF • HbA1c: 8.1
    *   Similar trajectory, SGLT2i responder

*   **89% - PT-2024-6842 (HIGH MATCH)**
    *   65yo • T2DM + mild CHF • HbA1c: 7.9
    *   Comparable outcomes, different meds

*   **72% - PT-2024-5193 (SIMILAR)**
    *   71yo • T2DM only • HbA1c: 8.5
    *   Different comorbidities, useful comparator

**Footer:** Proprietary and Confidential 31 Aevius

## Slide 22: RAISE $6M Seed: What We'll Accomplish

**Title:** RAISE
$6M Seed: What We'll Accomplish

**Subtitle:** 18 months to tackle the biggest layers of risk

**Key Objectives:**

1.  **Build Focused Platform**
    *   Enable secure access & storage
    *   → HIPAA-compliant infrastructure
    *   → Scalable de-id, extraction & storage
    *   → Security certifications

2.  **Prove Generalizability**
    *   Show wedge & v1 works across sites
    *   → Deploy at 2 more AMCs
    *   → Model generalizes across sites
    *   → Repeatable multimodal data access

3.  **Demo MVPs**
    *   Test market pull
    *   → Ship Multimodal Search + Reasoning
    *   → White glove & pilot paid modules
    *   → Pilots → track queries → expand

**Funding & Milestones:**
*   ✓ 1 + 2 unlocks Series A
*   ✓ Traction with 3 makes it a much bigger round

**Footer:** Proprietary and Confidential 36 Aevius

## Slide 23: SERIES A - NETWORK Two-sided Search Marketplace

**Title:** SERIES A - NETWORK
Two-sided Search Marketplace

**Subtitle:** Our multimodal fully temporal embeddings enable network monetization with aligned incentives

**Left Side: Hospitals / AMCs**
*   *Start free → Earn first → Pay with credits*

*   **INITIALLY FREE:** At-cost search wedge for care, research, and operations

*   **FINAL FORM:**
    *   **→ Pay:**
        *   + Platform access (seats/enterprise) [SaaS - Recurring]
        *   + Query overages (beyond base tier) [Usage-based]
        *   + Premium modules [Add-on - Recurring]
    *   **- Earn: Data dividend (% of query revenue)**
        *   Every query to your node generates credits that offset platform costs

**Middle: Federated Network**

**Right Side: External Partners**
*   *Pharma • CROs • Payers • AI/Tech*

*   **→ Pay:**
    *   + Trusted partner access fee [SaaS - Recurring]
    *   + Per-query fees [Usage]
    *   + RWE evidence packs [Project]
    *   + Premium raw data exports [Transaction] **PREMIUM**
        *   WSI pathology, BAM files, waveforms
    *   + Module licensing [Usage/License]

*   **- Earn: Contribute models & insights**
    *   Revenue share when your AI models or analytics are consumed by the network

**Footer:** Proprietary and Confidential 37 Aevius

## Slide 24: SERIES B - AGENTIC ORCHESTRATION End game: AI medicine

**Title:** SERIES B - AGENTIC ORCHESTRATION
End game: AI medicine

**Subtitle:** We own the unified, semantic layer and build the downstream clinical intelligence

**PATH A: Partner Big**
*   Medical data layer for frontier reasoning models
*   **Logos:** XI, AI
*   **Key Aspects:**
    *   **Frontier AI enablement (Enable):** Multi-modal, longitudinal patient embeddings no one else has
    *   **Usage-based infrastructure (Monetize):** Every medical inference flows through us, compounding value
    *   **Network effects at scale (Compound):** More hospitals → better models → more partners → repeat
    *   **Data gravity moat (Defend):** 10-year head start on hospital integrations + longitudinal data

**OR**

**PATH B: Build it Ourselves**
*   Full clinical agentic orchestration build
*   **Funding Goal:** 100m+ Series B/C
*   **Key Aspects:**
    *   **AI Diagnostic reasoning (Doctor):** Pattern recognition across all modalities
    *   **Treatment optimization (Intelligence):** Personalized pathways from population data
    *   **Workflow automation (Agents):** Prior auth, documentation, care coordination
    *   **Real-time decision support (Co-Pilot):** Ambient intelligence in care delivery

**Bottom Text:** Our multimodal data pipeline isn't just infrastructure — it's also the deployment layer! Every hospital we connect is instant distribution for frontier AI

**Footer:** Proprietary and Confidential 38 Aevius