---
source_pdf: "https://drive.google.com/file/d/1xJhgosLoJdOQxE1ZCICedEnCC-mRDqph/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Aevius Seed Deck 10.15.25 (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1xJhgosLoJdOQxE1ZCICedEnCC-mRDqph/view)

## Slide 1: AEVius
- **Logo**: AEVIUS
- **Tagline**: The Complete Patient Representation Layer
- **Subtitle**: Making patients computable for the first time

## Slide 2: AEVIUS - Team
- **Top Logos**: Mahmood Lab, HARVARD MEDICAL SCHOOL, Mass General Brigham
- **Team Members**:
    - **Rowland Pettit, MD, PhD, MBA**
        - **Title**: CEO & Co-Founder
        - **Description**: Physician-scientist (Harvard Pathology); ex-VC; years of startup consulting; comp bio/AI
        - **Links**: [LinkedIn](https://www.linkedin.com/in/rowlandpettit), [Website](https://aevius.com)
    - **Max Lu, PhD**
        - **Title**: CTO & Co-Founder
        - **Description**: MIT PhD; expert in multimodal AI; built 7.2M-patient system; 20+ papers
        - **Links**: [LinkedIn](https://www.linkedin.com/in/maxlu), [Google Scholar](https://scholar.google.com/citations?user=maxlu&hl=en)
    - **Faisal Mahmood, PhD**
        - **Title**: Technical Architect & Co-Founder
        - **Description**: HMS Professor; multimodal foundation models for human health (UNI/CONCH/PathChat)
        - **Links**: [LinkedIn](https://www.linkedin.com/in/faisalmahmood), [Website](https://mahmoodlab.org), [Google Scholar](https://scholar.google.com/citations?user=faisalmahmood&hl=en)
    - **Long Phi Le, MD, PhD**
        - **Title**: Healthcare Data Infrastructure & Co-Founder
        - **Description**: Co-founded ArcherDX → $1.4B exit; VP Pathology MGH
        - **Links**: [LinkedIn](https://www.linkedin.com/in/longphile)
    - **Qi Li, MD**
        - **Title**: Chief Business Officer (Acting)
        - **Description**: Innovation VP at InterSystems (Epic's backend); 500+ hospital relationships
        - **Links**: [LinkedIn](https://www.linkedin.com/in/qili)
    - **Bowen Chen**
        - **Title**: Founding Engineer
        - **Description**: Stanford CS PhD dropout (for this company!); built V1 pipeline
        - **Links**: [LinkedIn](https://www.linkedin.com/in/bowenchen), [Google Scholar](https://scholar.google.com/citations?user=bowenchen&hl=en)
- **Footer**: Proprietary and Confidential 2 Aevius

## Slide 3: PROBLEM - Patients aren't computable
- **Title**: Patients aren't computable
- **Subtitle**: Patients exist as fragments; AI can't compute across them.
- **Bullet Points**:
    - Data are siloed across EHR tables, PACS/LIS, notes, genomics, and devices.
    - No unified patient representation; models see pieces, not people.
    - APIs throttle and schemas fragment; timeline and cross-modal context is lost.
- **Image**: An old illustration depicting several blind men examining different parts of an elephant, symbolizing fragmented understanding.
- **Footer**: Proprietary and Confidential 3 Aevius

## Slide 4: CONTEXT - Self supervised learning
- **Title**: Self supervised learning
- **Question**: How do you make a model learn data representations without labels?
- **The self-supervised solution**:
    1.  Take complete data
    2.  Randomly hide 15%
    3.  Force model to predict hidden values what from remains (Image shows an image of a flamingo with 15% of its pixels masked, and then the original complete image)
    4.  To succeed, model must learn the underlying structure
    5.  Result: The model discovers patterns and relationships
- **Canonical example SSL trained on Wikipedia (Word2Vec)**: the model learns relationships, geometry encodes meaning!
    - **Chart Description**: A 2D scatter plot representing word embeddings.
        - **Dimension 1**: horizontal axis.
        - **Gender/Royalty**: diagonal axis indicating relationship.
        - **Examples**:
            - King, Queen (aligned on Gender/Royalty axis, separated horizontally)
            - Man, Woman (aligned on Gender/Royalty axis, separated horizontally, parallel to King-Queen)
            - Doctor, Nurse, Medical, Hospital, Clinic (clustered in one region)
            - France, Paris (aligned on Geography axis)
            - Japan, Tokyo (aligned on Geography axis, parallel to France-Paris)
        - **Relationship demonstrated**: King - Man = Queen - Woman → Meaning emerges
- **Footer**: Proprietary and Confidential 4 Aevius

## Slide 5: INNOVATION - Can we apply SSL to medical data?
- **Title**: Can we apply SSL to medical data?
- **Subtitle**: Patient care is driven by multi-modal data (structured, unstructured, imaging, other)
- **Top Section (a)**:
    - **Hospital Types**:
        - 12 acute and specialty hospitals
        - 4 ambulatory surgery centers
        - 5 teaching hospitals
        - 22 urgent care centers
        - 28 rehabilitations locations
        - 5 community health centers
    - **Patient & Encounter Statistics**:
        - 7.2M patients
        - 140 countries
        - 4B encounters
        - 18 modalities
- **Bottom Section (C) - Bar Chart: Count of Medical Modalities (log scale)**:
    - **Y-axis**: Count (log scale) from 10^5 to 10^9
    - **X-axis**: Modalities (sorted by count, roughly)
    - **Data Points (approximate values from bars)**:
        - Vital signs: 2B (2 * 10^9)
        - Labs: 1.6B (1.6 * 10^9)
        - Progress notes: 158.7M (1.587 * 10^8)
        - Medications: 111.4M (1.114 * 10^8)
        - Radiology: 46.6M (4.66 * 10^7)
        - Infectious disease: 39.3M (3.93 * 10^7)
        - Diagnosis: 27.5M (2.75 * 10^7)
        - Blood & immune: (implicit in Infectious disease/Neoplasms, not directly listed as a bar)
        - Neoplasms: (implicit, not directly listed as a bar)
        - Endocrine & metabolic: (implicit, not directly listed as a bar)
        - Mental & neuro-divergence: 13.1M (1.31 * 10^7)
        - Nervous: (implicit, not directly listed as a bar)
        - Eye disorder: 8.4M (8.4 * 10^6)
        - Ear disorder: (implicit, not directly listed as a bar)
        - Cardiology: (implicit, not directly listed as a bar)
        - Vascular: 1.5M (1.5 * 10^6)
        - Circulatory: (implicit, not directly listed as a bar)
        - Nuclear medicine: 1.1M (1.1 * 10^6)
        - Respiratory: (implicit, not directly listed as a bar)
        - Digestive: 1.1M (1.1 * 10^6)
        - Skin & sub-cutaneous: (implicit, not directly listed as a bar)
        - Ophthalmology: (implicit, not directly listed as a bar)
        - Bone density: 960.6K (9.606 * 10^5)
        - Musculoskeletal: (implicit, not directly listed as a bar)
        - Pregnancy & childbirth: 522.2K (5.222 * 10^5)
        - Perinatal condition: (implicit, not directly listed as a bar)
        - Genitourinary: 276.4K (2.764 * 10^5)
        - Hematology: (implicit, not directly listed as a bar)
        - Molecular & genetics: 214.1K (2.141 * 10^5)
        - Neurology & sleep: (implicit, not directly listed as a bar)
        - Congenital disorder: (implicit, not directly listed as a bar)
        - Not otherwise classified: (implicit, not directly listed as a bar)
        - Injuries & external causes: 130.9K (1.309 * 10^5)
        - External causes of morbidity: (implicit, not directly listed as a bar)
        - Contact with health services: (implicit, not directly listed as a bar)
        - Special purposes: 129.7K (1.297 * 10^5)
        - Endoscopy & procedures: (implicit, not directly listed as a bar)
        - Pulmonary: (implicit, not directly listed as a bar)
- **Process Description**: Multimodal encoders → cross-modal attention → temporal transformer → one unified and updating patient embedding
- **Footer**: Proprietary and Confidential 5 Aevius

## Slide 6: CONTEXT - Unstructured data unlocks the "why" behind the "what"
- **Title**: Unstructured data unlocks the "why" behind the "what"
- **Subtitle**: Cross-modal learning reveals causality, context and reasoning invisible in structured data
- **Structured data shows facts** (Left Box):
    - **Patient**: John D., 68-year-old male
    - **Primary Complaint**: Chest Pain
    - **Diagnoses**:
        - I10 (Hypertension)
        - E11.9 (Type 2 Diabetes)
        - R07.9 (Chest Pain)
    - **Medications**:
        - Metformin
        - Lisinopril
        - Atorvastatin
        - Aspirin
    - **Vitals**:
        - BP 145/90
        - HR 82
        - BMI 31
    - **Labs**:
        - HbA1c 7.8%
        - LDL 110 mg/dL
        - Cr 0.9 mg/dL
- **Unstructured data reveals meaning** (Right Box):
    - **Clinic Note**: "... intermittent, non-exertional chest tightness, described as 'a dull ache'. No shortness of breath. States he often forgets to take his Lisinopril ... anxious about financial stress."
    - **Chest X-Ray**: "No acute cardiopulmonary process. Mild degenerative changes of the thoracic spine."
    - **Conclusion**: The chest pain is non-cardiac. The real issues are medication non-adherence and stress.
- **Footer**: Proprietary and Confidential 6 Aevius

## Slide 7: INNOVATION - Let's use SSL to unify ALL medical data
- **Title**: Let's use SSL to unify ALL medical data
- **Subtitle**: From all modalities to one unified, continuously updating patient representation
- **INPUTS**:
    - Lab Values: 3,000+ LOINC codes
    - Pathology: Gigapixel whole slide images
    - Clinical Notes: 158M progress notes
    - Radiology: CT/MRI/X-ray
    - Genomics: Variants & expression
    - Medications: 156M administrations
    - Vitals: 2B measurements
- **Process**: Specialized Encoders transform inputs into a unified output.
- **OUTPUT: UNIFIED PATIENT EMBEDDING** (Right Box - example vector):
    ```
    [0.234, -0.891, 0.445, 0.123,
    -0.567,
    0.890, -0.234, 0.678, -0.345, 0.901,
    -0.123, 0.456, -0.789, 0.234,
    -0.567,
    ... 1000+ dimensions ...
    0.345, -0.678, 0.123, -0.456, 0.789]
    ```
- **Description**: Every patient becomes one vector. All medical questions become computation.
- **Footer**: Proprietary and Confidential 7 Aevius

## Slide 8: KEY INNOVATION - This creates a patient level representation
- **Title**: This creates a patient level representation
- **Subtitle**: From scattered records and diverse data modalities - to temporally aligned embeddings
- **Diagram**:
    - **Top**: "Visit 1" with icons representing different data modalities (patient, notes, imaging, labs, forms).
    - **Modality-Specific Deep Tokenizer**: Processes event tokens from each modality.
    - **Time tokens**: (t0, t1, t2, t3) aligned with event tokens.
    - **V1 Multimodal Temporal Foundation Model**: Takes tokenized data and time information.
    - **Dynamic Whole-Patient Embedding**: Output from the model, represented as a human figure.
    - **Applications (bottom left)**:
        - Survival Modeling (line graph)
        - Binary Classification (scatter plot with two classes)
        - **Label**: Prediction at a given time
    - **Applications (bottom right)**:
        - Scatter plot showing changes across time for patient embeddings.
- **Footer**: Proprietary and Confidential 8 Aevius

## Slide 9: KEY INNOVATION - Each touchpoint updates our embeddings in real time
- **Title**: Each touchpoint updates our embeddings in real time
- **Subtitle**: Not a snapshot—a continuously learning whole-patient representation!
- **Diagram**:
    - **Top**: "Visit 1" and "Visit 2" with icons representing different data modalities and an ellipsis (...) between visits.
    - **Modality-Specific Deep Tokenizer**: Processes event tokens from each modality.
    - **Time tokens**: (t0, t1, t2, t3) for Visit 1, and (t4, t5, t6, t7, tn) for Visit 2, indicating continuous temporal progression.
    - **V1 Multimodal Temporal Foundation Model**: Takes tokenized data and time information.
    - **Dynamic Whole-Patient Embedding**: Output from the model, represented as a human figure.
    - **Applications (bottom left)**:
        - Survival Modeling (line graph)
        - Binary Classification (scatter plot with two classes)
        - **Label**: Prediction at a given time
    - **Applications (bottom right)**:
        - Scatter plot showing changes across time for patient embeddings, with an arrow showing the trajectory of a specific patient's embedding over time.
- **Footer**: Proprietary and Confidential 9 Aevius

## Slide 10: KEY INNOVATION - Embeddings becomes the history and prediction engine
- **Title**: Embeddings becomes the history and prediction engine
- **Subtitle**: Query past states, predict future trajectories—a tractable new paradigm for medicine
- **Diagram**:
    - **Top**: "Visit 1", "Visit 2", and "Visit 3" with icons representing different data modalities and ellipses (...) between visits.
    - **Modality-Specific Deep Tokenizer**: Processes event tokens from each modality.
    - **Time tokens**: (t0, t1, t2, t3) for Visit 1, (t4, t5, t6, t7, tn) for Visit 2, and (tn+1, tn+2, tn+3) for Visit 3, indicating continuous temporal progression and future states.
    - **V1 Multimodal Temporal Foundation Model**: Takes tokenized data and time information.
    - **Dynamic Whole-Patient Embedding**: Output from the model, represented as a human figure.
    - **Applications (bottom left)**:
        - Survival Modeling (line graph)
        - Binary Classification (scatter plot with two classes)
        - **Label**: Prediction at a given time
    - **Applications (bottom right)**:
        - Scatter plot showing changes across time for patient embeddings, with an arrow showing the trajectory of a specific patient's embedding over time.
- **Footer**: Proprietary and Confidential 10 Aevius

## Slide 11: CONSEQUENCE - Patient clusters emerge naturally in embedding space
- **Title**: Patient clusters emerge naturally in embedding space
- **Subtitle**: No labels needed—search, compare, forecast, triage on patients via representations
- **Chart: UMAP Plot of Patient Clusters**:
    - **X-axis**: UMAP 1 (from -4 to 6)
    - **Y-axis**: UMAP 2 (from -4 to 4)
    - **Legend**:
        - Cardiovascular (orange cluster, upper-middle)
        - Healthy (light blue/green cluster, top-left)
        - Neurodegenerative (red cluster, bottom-left)
        - Oncology (purple cluster, bottom-right)
        - Pre-disease (grey cluster, top-right)
        - Type 2 Diabetes (dark blue cluster, middle-right, slightly overlapping with Cardiovascular)
    - **Description**: The plot shows distinct clusters of patients in the embedding space, indicating that patients with similar characteristics naturally group together without explicit labeling.
- **Note**: *Concept rendering - actual demo to come
- **Footer**: Proprietary and Confidential 11 Aevius

## Slide 12: CONSEQUENCE - We unlock capabilities across clinical care & discovery
- **Title**: We unlock capabilities across clinical care & discovery
- **Subtitle**: With multimodal embeddings, every medical question becomes computationally tractable
- **Capabilities**:
    - **Early Diagnosis**: Diagram showing patient data flow leading to an early diagnosis.
    - **Treatment Response**:
        - Diagram showing a patient receiving a treatment, leading to three possible outcomes: Effect, No Effect, Adverse Effect.
        - Line graphs illustrating the progression for each outcome.
    - **Biomedical discovery**:
        - **Fine-grained disease subtyping**: t-SNE plot showing distinct sub-clusters within a disease. (t-SNE1 and t-SNE2 axes, range approx -30 to 30)
        - **Novel biomarker discovery**: Graph with peaks illustrating biomarker identification.
    - **Dynamic risk scores**:
        - **Alzheimer's Disease**: Line graph showing increasing risk over time.
        - **Cancer**: Line graph showing fluctuating risk over time.
        - **Axes**: Risk (Y), Time (X)
    - **Clinical Trial Matching**:
        - **Patient to Trial**: Diagram of a patient being matched to a specific clinical trial (pill bottles).
        - **Trial to Patient**: Diagram of a trial seeking suitable patients.
    - **Population Health**:
        - Four scatter plots (t-SNE like) showing population clusters changing over time (Nov, Dec, Jan, Feb).
- **Demo link**: (Text at bottom left, but not an active link in the image)
- **Footer**: Proprietary and Confidential 12 Aevius

## Slide 13: SOLUTION - We built V1 at Harvard & Mass General Brigham
- **Title**: We built V1 at Harvard & Mass General Brigham
- **Data Scale**: 7.2M Patients | 4B Events | 28y Span (1992–2025) | 158M Clinical notes | 1.6B Labs | 2B vitals | Multimodal w/ pathology & genomics
- **Diagram: V1 Architecture**:
    - **Top Row (Inputs)**: Patient demographic info (cls, Ethnicity, Sex, Age) and time-ordered visits (Visit 1, Visit 2, Visit 3, Visit 4, Visit n) with various modality icons per visit.
    - **Time tokens**: horizontal bar labeled 'Time tokens' for each visit (t0, t1, t2, t3 etc.)
    - **Value tokens (modality-specific)**: horizontal bar labeled 'Value tokens' below time tokens, showing color-coded tokens for different modalities.
    - **V1 Encoder**: Processes time and value tokens.
        - **Output**: Patient embedding (a single dark blue block)
        - **Output**: Hidden state (a series of light blue blocks)
    - **V1 Decoder**: Processes the hidden state.
        - **Output**: Reconstructed value tokens (color-coded blocks matching input structure).
- **Lower Section: Tokenizers for V1 Encoder/Decoder**:
    - **Text encodings**:
        - LLM (Large Language Model)
        - MLP (Multi-Layer Perceptron)
    - **Paired modality encoding (test, value)**:
        - Learn. emb. + LLM (Learned Embeddings + LLM)
        - MLP
    - **Structured encoding <value>**:
        - Tokenizer
        - MLP
    - **Image encoding**:
        - VFM (Vision Foundation Model)
        - MLP
- **Footer**: Proprietary and Confidential 13 Aevius

## Slide 14: SOLUTION - We built V1 at Harvard & Mass General Brigham
- **Title**: We built V1 at Harvard & Mass General Brigham
- **Data Scale**: 7.2M Patients | 4B Events | 28y Span (1992–2025) | 158M Clinical notes | 1.6B Labs | 2B vitals | Multimodal w/ pathology & genomics
- **Screenshot: UMAP Explorer**:
    - **Title**: UMAP Explorer
    - **Parameters**: Year: 2020 - N=50000
    - **Search bar and buttons**: Search patients, Search, Clear, Fit Classifier, Reset View, Download Table CSV
    - **Main Area**: A large UMAP scatter plot showing patient embeddings, colored by density or a specific feature (green, yellow, purple scale). Dense clusters are visible.
    - **Message**: "Click a table cell to see full contents"
    - **Visible UI elements**: Zoom controls (+/-), selection tools.
    - **Bottom Right**: A video frame of a person speaking, likely a demo.
- **Demo link**: (Text at bottom left, but not an active link in the image)
- **Footer**: Proprietary and Confidential 14 Aevius

## Slide 15: BENCHMARKS - V1 delivers
- **Title**: V1 delivers
- **Subtitle**: Multimodal patient embeddings capture the full spectrum of patient phenotypes
- **Chart: UMAP Plot with Phenotype Annotations**:
    - **Main Area**: A large UMAP scatter plot showing patient embeddings, colored by density (dark purple to light green/yellow).
    - **Annotated Clusters (Phenotypes) with Patient Examples**:
        - **Eye Disorders (top right)**:
            - 72M, considering cataract surgery
            - 73F, glaucoma with history of stroke
            - 49F, retinal scarring & atrophic macula
            - 50F, angle-closure glaucoma with history of asthma & rosacea
        - **Skeletal Problems (top left)**:
            - 78M, degenerative joint disease of right knee
            - 30F, acute osteomyelitis from tibia fracture
            - 29M, degeneration in spinal disk
        - **Pap Smears (middle right)**:
            - 18F, normal pap smear
            - 33F, normal pap smear with inflammation
            - 38F, squamous metaplasia
        - **Skin Lesions (middle left)**:
            - 15M, acne
            - 45F, many benign skin lesions, recommended biopsy
            - 69F, basal cell carcinoma & other benign skin lesions
        - **Breast Imaging (middle right)**:
            - 28F, interlobular fibrosis & inflammation in right breast
            - 47F, breast MRI with abnormal mass
            - 38F, ductal carcinoma in situ
            - 40F, invasive ductal carcinoma
        - **Blood Disorders (bottom left)**:
            - 45F, anemia secondary to menorrhagia
            - 29F, nodular lymphocyte predominant Hodgkin's lymphoma
            - 25M, biopsy of neck mass with Hodgkin's lymphoma
            - 64M, bone marrow biopsy with hairy cell leukemia
- **Footer**: Proprietary and Confidential 15 Aevius

## Slide 16: BENCHMARKS - V1 delivers
- **Title**: V1 delivers
- **Subtitle**: Excellent predictive capability across 100+ clinical & operational tasks
- **Four Scatter Plots (AUROC vs. Task)**:
    - **X-axis**: AUROC from 50% to 100% (Poor, Fair, Good, Excellent, Elite categories)
    - **Y-axis**: Specific clinical and operational tasks.
    - **Legend**: Count (grey dot), Age+Sex (green dot), V1 (blue dot)
    - **Chart 1: New Disease Onset (77 tasks)**
        - **Tasks (partial list, ordered top-down from chart):** HF, Hip Fracture, Death, PAD Dis, CKD, Acute MI, Parkinson's Dis, AKI Fail, AFib, Preeclampsia, Chronic Ischemic Heart Dis, Interstitial Lung Dis, COPD, Gout, Aortic Aneurysm, Osteoporosis, Gestational Diabetes, Pulmonary Fibrosis, Lung Cancer, Pneumonia, Liver Cancer, ICH, Stroke, Sensorineural Hearing Loss, Non-Melanoma Skin Cancer, PCOS, BPH, Schizophrenia, Osteoarthritis, VTE, Peripheral Neuropathy, T2DM, HTN, Kidney, Kidney Cancer, Opioid Use Dis, Dyslipidemia, Endometrial Cancer, Non-Hodgkin Lymphoma, Pancreatic Cancer, Melanoma, Colon Cancer, Acute Pancreatitis, Multiple Myeloma, Chronic Otitis Media, Alcohol Use Dis, Sleep Apnea, Corpus Uteri Cancer, Hyperprolactinemia, COVID-19, Ovarian Cancer, Hidradenitis Suppurativa, Rheumatoid Arthritis, Bipolar Dis, Iron Deficiency Anemia, Migraine, Glioblastoma, NAFLD, PTSD, Breast Cancer, Epilepsy, Hypothyroidism, Retinal Detachment, IBD, Rectal Cancer, Overweight, Sarcoidosis, Endometriosis, Hyperthyroidism, Thyroid Cancer, Traumatic Brain Injury, Crohn's Dis, Psoriatic Arthritis, Depression, Ulcerative Colitis, Multiple Sclerosis.
        - **General Trend**: V1 consistently outperforms Count and Age+Sex baselines, with many tasks falling into "Excellent" and "Elite" categories for V1.
    - **Chart 2: Disease Progression (30 tasks)**
        - **Tasks (partial list, ordered top-down from chart):** COVID-19 Death, Diastolic HF HTN, HF HTN, death Prostate Cancer, CKD Stage 3+ HTN, death Aortic Stenosis, T2DM Obesity, AFib HTN, death Stroke, Urine Ret BPH, Resp Fail COPD, death Breast Cancer, PAD Dis Diabetes Mellitus, Insulin T2DM, HF Coronary Artery Dis, Exac COPD, DM Foot Ulcer T2DM, death HF, Steroids Asthma, death Lung Cancer, AKI Fail HF, first metastasis after diagnosis, death Colon Cancer, Cirrhosis Chronic Hepatitis, Ischemic Stroke AFib, Stage 4+ CKD CKD Stage 3, death Liver Cancer, RA Second-Line Therapy.
        - **General Trend**: Similar to New Disease Onset, V1 shows strong performance, often in the "Excellent" and "Elite" range, surpassing baselines.
    - **Chart 3: Treatment Outcomes (14 tasks)**
        - **Tasks (partial list, ordered top-down from chart):** Opioid Use Dis After Opioids, GI Bleeding on Antiplatelets, T2DM After Corticosteroids, T2DM After Atypical Antipsychotic, death following pembrolizumab, a positive response to Nivolumab, death following nivolumab, death following ipilimumab, + response to Pembroliz, + response to Etanercept, + response to Ipilimumab, + response to Trastuzumab, + response to Durvalumab, Clostridioides difficile.
        - **General Trend**: V1 again demonstrates superior predictive capability in treatment outcomes, reaching "Excellent" and "Elite" for many tasks.
    - **Chart 4: Hospital Operations (3 tasks)**
        - **Tasks (ordered top-down from chart):** In-Hospital Sepsis, 30-Day Hospital Readmission, Hospital Length Of Stay >.
        - **General Trend**: V1 significantly outperforms baselines for all three operational tasks, achieving "Excellent" and "Elite" performance.
- **Footer**: Proprietary and Confidential 16 Aevius

## Slide 17: BENCHMARKS - V1 delivers
- **Title**: V1 delivers
- **Subtitle**: Already demonstrating elite capability in interesting areas
- **Chart: AUROC Comparison**:
    - **X-axis**: AUROC from 60% to 100%
    - **Y-axis**: Specific tasks
    - **Legend**: Count (grey dot), Age+Sex (green dot), V1 (blue dot)
    - **Tasks (ordered top-down from chart, with approximate AUROC for V1):**
        - COVID-19 Death: ~95%
        - Death: ~95%
        - Acute MI: ~90%
        - Preeclampsia: ~90%
        - In-Hospital Sepsis: ~90%
        - Schizophrenia: ~90%
        - VTE: ~85%
        - Death Prostate Cancer: ~85%
        - Opioid Use Dis After Opioid: ~90%
        - Opioid Use Disorder: ~90%
        - Death Aortic Stenosis: ~80%
        - Death by Stroke: ~85%
        - 30-Day Hospital Readmission: ~80%
        - Hospital Length Of Stay >: ~85%
        - Sleep Apnea: ~75%
        - Death Breast Cancer: ~90%
        - Death HF: ~80%
        - Death Lung Cancer: ~75%
    - **Description**: This chart highlights specific tasks where V1 achieves "Excellent" (light green shaded area) and "Elite" (darker green shaded area) performance, significantly surpassing simpler models based on 'Count' or 'Age+Sex'.
- **Footer**: Proprietary and Confidential 17 Aevius

## Slide 18: BENCHMARKS - One Model, Multiple Specialties
- **Title**: One Model, Multiple Specialties
- **Subtitle**: v1 achieves strong performance across medical domains with a single architecture
- **Chart: Group Performance (AUROC) vs. Improvement Over Baseline Models**:
    - **X-axis**: Improvement Over Baseline Models (from +0% to +20%)
    - **Y-axis**: Group Performance (AUROC) (from 75% to 90%)
    - **Bubble Chart Data (Specialty | Number of Tasks | Approx. AUROC | Approx. Improvement)**:
        - Orthopedics | (2) | ~88% | +5%
        - Sepsis/Critical | (2) | ~89% | +12%
        - Addiction Medicine | (3) | ~87% | +18%
        - Neurovascular | (2) | ~86% | +17%
        - Pulmonary | (7) | ~86% | +10%
        - Endocrine | (8) | ~86% | +13%
        - Cardiology | (11) | ~84% | +9%
        - Hematology | (2) | ~84% | +15%
        - Neurology | (4) | ~83% | +13%
        - Cardiovascular Risk | (1) | ~83% | +5%
        - Nephrology | (4) | ~82% | +7%
        - Mortality Risk | (6) | ~82% | +10%
        - Operations | (2) | ~82% | +12%
        - Mental Health | (3) | ~82% | +18%
        - Oncology | (21) | ~81% | +10%
        - Urology | (1) | ~81% | +13%
        - Internal Medicine | (31) | ~80% | +8%
        - Hepatology | (2) | ~79% | +14%
        - Rheumatology | (4) | ~79% | +7%
        - Critical Care | (2) | ~78% | +15%
        - Sleep Medicine | (1) | ~78% | +10%
        - Gynecology | (1) | ~77% | +12%
        - Gastroenterology | (4) | ~77% | +15%
    - **Description**: The chart shows that V1 provides significant improvements over baseline models across a wide range of medical specialties, with many achieving high AUROC performance.
- **Footer**: Proprietary and Confidential 18 Aevius

## Slide 19: VISION - The Unified Patient Representation Platform
- **Title**: The Unified Patient Representation Platform
- **Subtitle**: From fragmented multimodal data to continuous embedding intelligence
- **Platform Components**:
    1.  **Multimodal Data Pipeline**
        - Real-time ingestion from EHR and clinical systems
    2.  **Foundation Model (v1)**
        - Temporal and cross-modal self-supervised learning across 7M patients
    3.  **Patient Embeddings**
        - Continuously updating vectors capturing complete patient state
    4.  **Application Suite, Query & Computation Layer**
        - Platform for search, inference, and deployed clinical applications
- **Right Image**: A UMAP scatter plot of patient embeddings, similar to previous slides, illustrating the output of the platform.
- **Footer**: Proprietary and Confidential 19 Aevius

## Slide 20: Seed Execution Plan
- **Title**: Seed Execution Plan
- **Subtitle**: The next 120 days
- **Footer**: Proprietary and Confidential 20 Aevius

## Slide 21: GO-TO-MARKET - How do we scale beyond Harvard & Mass Gen Brigham?
- **Title**: How do we scale beyond Harvard & Mass Gen Brigham?
- **Subtitle**: We want to reproducibly turn fragmented patient data into computational intelligence
- **Three Phases**:
    - **Wedge**
        - Epic → Cloud Data Lake
        - Secure the data pipeline
        - **Action**: GET IN
    - **Platform**
        - Centralized Embeddings
        - Privacy-compliant aggregation
        - **Action**: SCALE
    - **Deployment**
        - Model Distribution
        - Every pipe = distribution channel
        - **Action**: DISTRIBUTE
- **Footer**: Proprietary and Confidential 21 Aevius

## Slide 22: GO-TO-MARKET - Our 3-Phase Go-to-Market Strategy
- **Title**: Our 3-Phase Go-to-Market Strategy
- **Subtitle**: Build pipeline → Add compliance → Deploy products
- **Table: Go-to-Market Phases**:

| Phase | 1 Data Wedge | 2 Embedding Platform | 3 AI Deployment |
| :------------------------------ | :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| **Timeline** | Q1 2026 | Q2 2026 | Q3 2026+ |
| **ENTRY/SCALE/END GAME** | Build data pipeline to prove value | Centralize embeddings with compliance | Our embeddings + pipes = AI at scale |
| **WHAT WE BUILD / WHAT'S UNLOCKED / DISTRIBUTION NETWORK** | → Epic → Cloud data pipeline <br> → Local embedding generation <br> → Clinical search & sandbox tools | → Expert-determined embeddings <br> → Cross-site patient search <br> → One contract = entire network | → Deploy our models to all sites <br> → Push embedding-enabled apps <br> → Instant network-wide updates |
| **ECONOMICS / REVENUE MODEL / PLATFORM ECONOMICS** | • Free/low-cost deployment <br> • We get: data access rights <br> • Build trust & prove ROI <br> **$5B** | • Platform access (pharma/payers) <br> • Hospital analytics & benchmarking <br> • Annual enterprise + usage pricing <br> **$20B** | • Per-site deployment fees <br> • Model usage subscriptions <br> • Compute markup on inference <br> **$50B+** |

- **Footer**: Proprietary and Confidential 22 Aevius

## Slide 23: GO-TO-MARKET - 1) The Wedge
- **Title**: 1) The Wedge
- **Subtitle**: Building a focused multimodal data access pipeline
- **Diagram: Data Pipeline**:
    - **Epic Chronicles**: Proprietary NoSQL (Cache/MUMPS)
    - **ETL nightly** (arrow down)
    - **Epic Clarity**: SQL Server • 18,000+ tables
    - **Read access** (arrow down)
    - **DATA LAKE FOUNDATION: Apache Iceberg Table Format**: Raw data storage • Open-source • ACID • Time travel
    - **Compute engines** (arrow down): Snowflake, Databricks, or MS Fabric
    - **Output** (arrow down): Patient Embeddings
- **GET IN (Right Box)**:
    1.  **Deploy Apache Iceberg**: Create universal data lake from Epic Clarity data
    2.  **Map Clarity Schema**: Raw storage of 18,000+ tables in open format
    3.  **Connect Analytics Platform**: Snowflake/Databricks/Fabric read from Iceberg
- **HOLD (Right Box)**:
    - **A Research Workbench**:
        - Embedding-based discovery platform
        - Novel insights → publications → academic prestige
    - **B Semantic Search + Cohort Builder**:
        - Find patients by multimodal concepts not codes
        - Natural language queries and cohort building
    - **C Operational AI → MVP Clinical Copilot**:
        - Quick wins: readmission, sepsis, deterioration
        - Foundation for durable clinical intelligence
- **Footer**: Proprietary and Confidential 23 Aevius

## Slide 24: GO-TO-MARKET - Execute our wedge initially where doors are open
- **Title**: Execute our wedge initially where doors are open
- **Subtitle**: We will target organizations already choosing cloud for their EHR data warehouse.
- **Venn Diagram**:
    - **Left Circle (Purple)**: Epic AMCs ~130
        - Growing at 15+ per year
        - Dominates AMCS
    - **Right Circle (Light Blue)**: Cloud DW ~30
        - Started cloud migration for better access
    - **Intersection (OUR SEED WEDGE)**: Early adopters ready today
- **MARKET REALITY (Right Box)**:
    - Total U.S. AMCS: 220
    - Epic in AMCs: ~60%
    - U.S. EHR market share: 55%
    - New wins 2024: 70%
    - Cloud migration: Accelerating
- **WHY WE WIN HERE (Right Box)**:
    - ✔ Cloud infrastructure in place
    - ✔ Now need usability layer
    - ✔ Budget exists for innovation
    - ✔ Deploy embeddings immediately
- **THE PAIN POINT DRIVING MIGRATION (Bottom Bar)**:
    - Hospitals want better data access and utility than Epic's provides → they adopt cloud data warehousing → we deliver the embedding-based intelligence layer on top
- **Footer**: Proprietary and Confidential 24 Aevius

## Slide 25: GO-TO-MARKET - 2) Building the Embedding Platform
- **Title**: 2) Building the Embedding Platform
- **Subtitle**: Creating privacy-compliant streamlined infrastructure for network-wide intelligence
- **Embedding Aggregation Architecture (Left Diagram)**:
    - Four interconnected circles labeled "MGB", "#2", "#3", "#4" representing different hospital systems.
    - A central logo (AEVIUS) in the middle, indicating aggregation.
    - **Text below**: Centralize embeddings • Raw data stays local • Search across sites
- **What Centralized Embeddings Enable (Top Right Box)**:
    - **Search**: Query patients across sites
    - **Benchmarking**: Site performance metrics
    - **Discovery**: Find similar patients globally
    - **Analytics**: Compare populations
    - **Intelligence**: Real-time network insights
    - **Cohorts**: Multi-site patient groups
- **How We Ensure Privacy (Bottom Right Box)**:
    - **Trusted Partner Network**: Platform access for verified healthcare organizations under legal agreements. Business Associate Agreements (BAAs) with all parties. Full audit trail of all queries and access.
    - **Local Processing, Central Aggregation**: Raw data never leaves hospital systems. Only high-dimensional embeddings (1000+ dimensions) are shared - mathematically non-invertible to original patient data.
    - **Automated Similarity Validation**: Embeddings compared to baseline distributions in real-time. Statistical outliers beyond threshold automatically excluded. System self-regulates without manual intervention.
    - **Differential Privacy Controls**: Calibrated noise injection prevents individual patient memorization. Gradient clipping limits any single patient's influence. Search returns cohorts (minimum size), never individuals.
    - **HIPAA Expert Determination**: Third-party statistical validation proves embeddings cannot be reversed to identify individuals. Covers entire pipeline from embedding generation through search operations.
- **Footer**: Proprietary and Confidential 26 Aevius

## Slide 26: GO-TO-MARKET - Automated privacy compliance through statistical similarity
- **Title**: Automated privacy compliance through statistical similarity
- **Subtitle**: One-time expert determination enables continuous nightly batch processing
- **Embedding Distribution Analysis (Left Chart)**:
    - **X-axis**: Embedding Space (1000+ dimensions)
    - **Y-axis**: (Implied density or frequency)
    - **Graph**: Two overlapping bell-shaped distributions.
        - A larger, broader green distribution.
        - A smaller, red distribution on the right tail of the green one.
        - A horizontal dashed red line: σ = 0.95 threshold (above the main green peak, separating the bulk from the tail)
    - **Legend**:
        - Canonical Set (blue dot, likely representing the ideal distribution)
        - Auto-approved (99.9%) (green region, representing the bulk of the distribution below the threshold)
        - Outliers excluded (0.1%) (red region, representing the tail beyond the threshold)
- **How It Works (Right Box)**:
    1.  Define canonical embedding set
    2.  Extract nightly embeddings
    3.  Compare to canonical
    4.  Auto-approve if σ < 0.95
    5.  Exclude outliers
- **Footer**: Proprietary and Confidential 27 Aevius

## Slide 27: PRODUCT VISION - From V1 Model → Product: Search • Compare • Reason
- **Title**: From V1 Model → Product: Search • Compare • Reason
- **Subtitle**: Multi-modal, multi-temporal patient embeddings for real-time similarity → cohorting → evidence
- **Diagram**:
    - **Left Column: DATA MODALITIES**:
        - Clinical Notes
        - Lab Values
        - Imaging
        - Genomics
        - Wearables
    - **Middle Section: EMBEDDING SPACE**:
        - A scatter plot with two distinct clusters of patient embeddings (one purple, one green). Lines connect data modalities to these clusters.
    - **Right Column: MULTIMODAL SIGNATURES (Examples)**:
        - **HOSPITAL: READMISSION SIGNATURE**
            - Discharge notes ∩ social factors ∩ lab trends
            - → 30-day readmission prevention
        - **PHARMA: HIDDEN RESPONDER SIGNATURE**
            - Failed therapies ∩ histopathology ∩ imaging ∩ genomics
            - → Rescue non-responders
        - **PAYER: FREQUENT FLYER SIGNATURE**
            - ER patterns ∩ SDOH ∩ med adherence ∩ psych notes
            - → Prevent high-cost ER cycles
- **Footer**: Proprietary and Confidential 28 Aevius

## Slide 28: PRODUCT ROADMAP - Ship Search UI & APIs → Let products emerge
- **Title**: Ship Search UI & APIs → Let products emerge
- **Subtitle**: Usage patterns = customer-pull products we want to build; let partners/agents build the rest
- **Top Boxes**:
    - **Search**:
        - k-NN retrieval at a chosen timepoint
        - Find patients like this
    - **Compare**:
        - Cohort builder + subclustering
        - See structure inside the cohort
    - **Reason**:
        - Ask time-anchored questions
        - Pathways • baselines • outcomes
- **Middle Section: Core APIs**:
    - `similar_to_patient(patient_id, timepoint)`
    - `similar_to_criteria(signature)`
    - `predict_outcome(patient_id, task)`
- **Bottom Section: Products emerge from usage**:
    - Prior-Auth Evidence Packs
    - Billing compliance checks
    - Green-Button RWE
    - Utilization Mirror
    - Similar-case retrieval
    - Responder portraits
    - Multi-level monitoring • Cluster watch
    - Medical Twins
- **Footer**: Proprietary and Confidential 29 Aevius

## Slide 29: BUSINESS MODEL - Monetization & customer segments
- **Title**: Monetization & customer segments
- **Subtitle**: V1 embeddings + lightweight productization enable paid search, cohort intelligence, and AI deployment
- **Table: Stakeholder, Product Modules, Business Value & Outcomes, Economics**:

| STAKEHOLDER | PRODUCT MODULES (LIGHT LIFT) | BUSINESS VALUE & OUTCOMES | ECONOMICS |
| :------------------------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Health systems (IDNs/AMCs) | Prior-Auth Evidence Packs • Billing compliance checks • Case Atlas • Research Cohort Builder • Search API (V1) | Time-anchored multimodal similarity assembles "patients like this" with approved outcomes to attach as evidence → denials down, approvals faster. For rev-cycle, similarity search flags documentation/coding gaps vs best-match cohorts. | Hospital earns new rev-share + activation. We pay you before you pay us (aligned incentives) |
| Pharma / CRO | Green-Button RWE • Comparator lookups • Trial Signal & Rescue (site heatmaps) | Concept/signature creates a cohort handle; similarity finds comparators; we return aggregate outcomes and site counts as signed Evidence Packs → faster feasibility & trial rescue. | Pays: $/query + SLAs • Hospital earns: rev-share + activation |
| Payers / ACOs | Utilization Mirror • Prior-auth evidence (aggregate) | Matched-cohort comparisons over embeddings give like-for-like outcome/cost benchmarks; aggregate evidence supports policy tuning and expedited approvals. | Pays: PMPM + usage • Hospital earns: shared analytics fees |
| Clinicians | Similar-case retrieval • Treatment pathway navigator • Rare-disease match | Time-anchored similarity shows what actually happened to comparable patients and their treatment pathways → supports the differential (no CDS). | Pays: seat bundles (via hospital) |
| Device & commercial Intelligence | Market Trends & Utilization • Responder portraits • Living registry (aggregate) | Treatment patterns, device utilization. Responder vs non-responder cohorts via similarity around outcome anchors; scheduled aggregate refresh keeps surveillance current. | Pays: subscriptions + programs • Hospital earns: rev-share |
| AI/Tech | SDK + sandbox • Agent plugins • AMC-scoped keys | Agents call concept/similarity/aggregate endpoints to retrieve cohorts and evidence packs; keys are AMC-scoped to local policies. | Pays: usage • Hospital earns: % of app revenue + new data sale |
| Public health / gov | Multi-level monitoring • Cluster watch • Safety signal context packs | Embedding-space monitoring flags unusual clusters; we attach cohort context as aggregates only. | Pays: program contracts • Hospital earns: passthrough + overhead |
| Direct consumers (opt-in) | Medical Twins • Trial radar • Expert finder (counts) | Consent-in records map to nearest-neighbor journeys and "successful enrollee" signatures; we show expert/provider counts (aggregate only) for navigation. | Pays: sponsors/grants/D2C • Hospital earns: passthrough + goodwill |

- **Footnote**: Compute remains local; exports are aggregates or approved embeddings via expert determination. Retrieval-only; observational outputs—no prescriptive CDS.
- **Footer**: Proprietary and Confidential 30 Aevius

## Slide 30: RAISE - $6M Seed: What We'll Accomplish
- **Title**: $6M Seed: What We'll Accomplish
- **Subtitle**: 18 months to tackle the biggest layers of risk
- **Three Goals**:
    1.  **Build Focused Platform**
        - Enable secure external access
        - → HIPAA-compliant infrastructure
        - → Centralized embeddings storage
        - → Expert determination pipeline
        - → Security certifications
    2.  **Prove Generalizability**
        - Show wedge & v1 works across sites
        - → Deploy at 2 more AMCs
        - → Model generalizes across sites
        - → Epic → cloud pipeline
        - → Secure embedding access
    3.  **Demo MVPs**
        - Test market pull
        - → Brokerage MVP: Semantic patient search
        - → Clinical MVP: Similar patient finder for AMC researchers/billing compliance
        - → Pilots → track queries → expand
- **Key Statements**:
    - ✔ 1 + 2 unlocks Series A
    - ✔ Traction with 3 makes it a much bigger round
- **Footer**: Proprietary and Confidential 31 Aevius

## Slide 31: GLIMMER OF GREATNESS - End game: AI medicine
- **Title**: End game: AI medicine
- **Subtitle**: We own the unified, semantic layer and build the downstream clinical intelligence
- **PATH A: Partner Big**
    - Medical data layer for frontier reasoning models
    - **Partnership with AI (logo)**: Xi AI
    - **Key Elements**:
        - **Frontier AI enablement (Enable)**: Multi-modal, longitudinal patient embeddings no one else has
        - **Usage-based infrastructure (Monetize)**: Every medical inference flows through us, compounding value
        - **Network effects at scale (Compound)**: More hospitals → better models → more partners → repeat
        - **Data gravity moat (Defend)**: 10-year head start on hospital integrations + longitudinal data
- **OR** (Separator)
- **PATH B: Build it Ourselves**
    - Full clinical agentic orchestration build
    - **Outcome**: 100m+ Series B/C
    - **Key Elements**:
        - **AI Diagnostic reasoning (Doctor)**: Pattern recognition across all modalities
        - **Treatment optimization (Intelligence)**: Personalized pathways from population data
        - **Workflow automation (Agents)**: Prior auth, documentation, care coordination
        - **Real-time decision support (Co-Pilot)**: Ambient intelligence during care delivery
- **Bottom Tagline**: Our multimodal data pipeline isn't just infrastructure — it's also the deployment layer! Every hospital we connect is instant distribution for frontier AI
- **Footer**: 32 Aevius