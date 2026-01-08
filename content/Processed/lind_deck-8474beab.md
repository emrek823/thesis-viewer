---
source_pdf: "https://drive.google.com/file/d/1FdVTKcAPV5W3UZW4KYBlWJesScucx6qe/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "LIND_deck.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1FdVTKcAPV5W3UZW4KYBlWJesScucx6qe/view)

## Slide 1: LIND AI

# LIND AI
www.lind.care

Scale Clinical Trial Operations with AI-powered Data Processing
1

## Slide 2: Proven Founding Team in AI & Clinical Studies

# Proven Founding Team in AI & Clinical Studies

Leaders with 25+ years of experience in ML, NLP, Bioinformatics and Clinical Studies.

**Ognjen (Oggie) Nikolic**
* Co-Founder, **Betteromics** Life Sciences ML Platform
* Director, **GrailBio** Bioinformatics & Data Science
* ML Lead, **Google** Assistant Quality
* ML Lead, **Google** Ads Integrity

**Pranav Singh**
* ML Lead, **Upstart** MLOps & Training
* Founding Eng, **Betteromics** ML & Full Stack
* ML Eng **GrailBio** Bioinformatics & Deep Learning
* Software Engineer, **Illumina** Oncology

**Clinical Studies:**
Pan-Cancer cfDNA Test | Multi-omic Precision Medicine w/ Cedars-Sinai | RWD Cancer Registry
2

## Slide 3: Manual Discovery Restricts Clinical Trial Enrollment

# Manual Discovery Restricts Clinical Trial Enrollment

| Stage | Description | Data Points |
| :---------------------- | :----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **High Demand for Cutting Edge Trials** | | 4.5M Monthly Visitors to ClinicalTrials.gov⁵ |
| 8% Patients Offered a Trial¹ | (85K Recruiting Trials², 20K words per EHR Record³) | |
| **Limited Discovery** | | |
| **Biased Population** | | 5% Patients Enrolled¹ (Selection bias towards Top-Tier Institutions) |
| 55% Trials Terminated⁴ | (25% of trials adjust criteria⁴) | |
| **Low Success** | | |
3

## Slide 4: Massive Market Opportunity for Pharma and Patients

# Massive Market Opportunity for Pharma and Patients

**Trial Sponsors (Pharma & CROs)**

| Category | Value |
| :---------------- | :------------------ |
| Recruitment Spend by Pharma⁶ | $3.7B |
| Cost per patient Recruited⁷ | ~$6K |
| Daily lost revenue due to recruitment delays⁸ | ~$1-8M |

**Healthcare (Clinicians & Patients)**

| Category | Value |
| :-------------------------- | :------ |
| Avg Patients Enrolled per Site/Trial/Mth⁹ | 0.4 |
| Months avg recruitment period⁹ | 18 |
4

## Slide 5: Unstructured Clinical Data Requires Manual Harmonization

# Unstructured Clinical Data Requires Manual Harmonization

**Trial Eligibility**

**Trial 1, Criteria 10¹¹**
AST (SGOT), ALT (SGPT) ≤ 2.5 × upper limit of normal range (ULN), unless liver metastases are present, then ≤ 5 x ULN is acceptable. Total bilirubin ≤ 1.5 × ULN.

**Trial 2, Criteria 8¹²**
Laboratory values meet the following constraints: Bilirubin less than or equal to 2 mg/dL; AST and ALT less than or equal to 3 x ULN (stenting to improve biliary obstruction is permitted) No evidence of metastatic disease based on imaging of the chest, abdomen and pelvis.

**Clinical Researchers**

One Patient, One Trial
20 min to assess eligibility
3.5hrs to enroll patient on trial
45 min data entry per on-trial visit⁷

Groundbreaking clinical research is moving at the speed of brute-force human data wrangling and entry by Clinical Researchers

**EHR Record**

**Lab Report**

| LIVER FUNCTION TESTS: | RESULT |
| :-------------------------- | :------------------ |
| | **1843-27-12** |
| **TEST** | **NORMAL VALUE** | **UNIT** | **27-Dec-2017 16:18** |
| BILIRUBIN TOTAL | 0.2 - 1.2 | mg/dl | **0.4** |
| BILIRUBIN CONJUGATED | Less Than 0.5 | mg/dl | **0.1** |
| BILIRUBIN UNCONJUGATED | 0.1 - 1.0 | mg/dl | **0.3** |
| S.G.P.T (A.L.T) | Less Than 55 | U/L | **116** |
| S.G.O.T (A.S.T) | 5 - 34 | U/L | **38** |
| ALKALINE PHOSPHATASE | 40 - 150 | U/L | **108** |
| GAMMA G.T. | 10 - 64 | U/L | **49** |
| TOTAL PROTEIN | 6.0 - 8.5 | G/dl | **7.7** |
| ALBUMIN | 3.5 - 5.0 | G/dl | **4.0** |

**Pathology Report**
Left lateral segment:
- Hepatocellular carcinoma, well to moderately differentiated
- Size 3.7 cm
- Negative for significant necrosis
- Negative for vascular space invasion
- Tumor abuts surgical margin and branch of portal vein
- AJCC Cancer Stage PT1NXMX (6th ed. 2002)
5

## Slide 6: LIND AI Automates Data Harmonization with Evidence

# LIND AI Automates Data Harmonization with Evidence

**Trial Eligibility**

**Trial 1, Criteria 10¹¹**
AST (SGOT), ALT (SGPT) ≤ 2.5 × upper limit of normal range (ULN), unless liver metastases are present, then ≤ 5 x ULN is acceptable. Total bilirubin ≤ 1.5 × ULN.

**Trial Eligibility Results**
NCT1352352 Recruiting
A Cedars-Sinai (7mi) 312 out of 500 Phase II 11/21/2019 - 04/27/2024
First-in-Human Study of RGT-419B Alone and With Endocrine Therapy Full Title Trastuzumab

| Type | Criteria | Patient Meets Criteria | Trial Requirement | Supporting Evidence |
| :--- | :------- | :--------------------- | :---------------- | :------------------ |
| | | | AST (SGOT), ALT (SGPT) ≤ 2.5 x upper limit of normal range (ULN), unless liver metastases are present, then ≤ 5 x ULN is acceptable. Total bilirubin ≤ 1.5 x ULN. | * AST 0.4 mg/dl,<br> * ALT 0.1 mg/dl,<br> * Bilirubin 0.4 mg/dl<br> * Negative vascular space invasion<br> * Cancer stage pT1NXMX |

**LIND System**

1.  **Semantic Decomposition**
    (LLM Named Entity Chunking + LLM Semantic Embeddings)
2.  **Retrieval Aug. Generation**
    (Embeddings Cosine Similarity)

*liver metastases* <-> *neg. vascular invasion*
*cancer stage pT1NXMX*

3.  **LLM Chain-of-Thought**
    Given {Context} evaluate {Criteria}

**EHR Record**

**Lab Report**

| LIVER FUNCTION TESTS: | RESULT |
| :-------------------------- | :------------------ |
| | **1843-27-12** |
| **TEST** | **NORMAL VALUE** | **UNIT** | **27-Dec-2017 16:18** |
| BILIRUBIN TOTAL | 0.2 - 1.2 | mg/dl | **0.4** |
| BILIRUBIN CONJUGATED | Less Than 0.5 | mg/dl | **0.1** |
| BILIRUBIN UNCONJUGATED | 0.1 - 1.0 | mg/dl | **0.3** |
| S.G.P.T (A.L.T) | Less Than 55 | U/L | **116** |
| S.G.O.T (A.S.T) | 5 - 34 | U/L | **38** |
| ALKALINE PHOSPHATASE | 40 - 150 | U/L | **108** |
| GAMMA G.T. | 10 - 64 | U/L | **49** |
| TOTAL PROTEIN | 6.0 - 8.5 | G/dl | **7.7** |
| ALBUMIN | 3.5 - 5.0 | G/dl | **4.0** |

**Pathology Report**
Left lateral segment:
- Hepatocellular carcinoma, well to moderately differentiated
- Size 3.7 cm
- Negative for significant necrosis
- Negative for vascular space invasion
- Tumor abuts surgical margin and branch of portal vein
- AJCC Cancer Stage PT1NXMX (6th ed. 2002)
6

## Slide 7: One Marketplace, Multiple Product Surfaces

# One Marketplace, Multiple Product Surfaces

**Online Trial Search**
*   **Community Clinics**
    *   **Goal:** Refer Community Patients & Clinicians to Academic Medical Centers

**Cohort Screening EHR App**
*   **Clinicians & CRCs**
    *   **Goal:** Cohort Eligibility Assessment w/ evidence and per-criteria results

**Patient Eligibility EHR App**
*   **Clinicians & CRCs**
    *   **Goal:** Individual patient eligibility assessment across active clinical trials
7

## Slide 8: Unimpeded Go To Market Strategy

# Unimpeded Go To Market Strategy

| Quarter | Action | Description |
| :------ | :--------------- | :----------------------------------------------------------------------------------------------------- |
| Q1 24'  | Launch Search Engine | Launch MVP, targeting specific diseases with large trial capacity and candidate pool.                      |
| Q2 24'  | Grow Supply Side | Increase Patient User Base via specific ad targeting, partnerships with advocacy groups.                   |
| Q3 24'  | Grow Demand Side | Demonstrate Efficacy to Pharma with user-analytics report.                                               |
| Q4 24'  | Monetize Conversions | Monetize via Sponsored Listings and Funnel Conversions.                                                |
8

## Slide 9: Strong Product Market Fit & Validation

# Strong Product Market Fit & Validation

*   **Healthcare Engagement**
    *   **Key Opinion Leaders:**
        *   UCSF CEO, CMO, Vice-Chancellor of Research
        *   Cedars-Sinai CIO, Cancer Dr.
    *   **Product Fit:** loved operational reduction, evidence (30+ clinicians)
    *   **Traction:** Verbal commitment from UCSF CEO, pilot discussions with UCSF and Cedars-Sinai.

*   **Pharma Engagement**
    *   **Key Opinion Leaders:**
        *   Eli Lilly CFO, CMO
        *   BMS Board member
        *   Novartis CEO
    *   **Product Fit:** pharma seeks direct to patients channel, inelastic demand for eligibility matched pts
    *   **Traction:** LOI negotiations for clinician in-EHR app pilot.
9

## Slide 10: Business Objectives over the next 18 months

# Business Objectives over the next 18 months

## $5M SAFE

**Recruit Team**
*   Medical / Commercial Lead
*   Core 6-7 ML & Eng
*   Contract: Quality, CRCs

**Product Build-Out**
*   Online Trial Search - 3mth
*   EHR App Search (Epic) - 6mth
*   Pharma Monetization - 12mth

**Grow Marketplace**
*   Online Search: 20k MAUs
*   EHR Search: 2 Hospitals
*   Sponsored Listings: 3 Pharma

**Proprietary Moat**
*   Proprietary Dataset: 3mth
*   Proprietary Model: 6mth
*   Case Study Validation: 12mth
10

## Slide 11: Product Demo

# Product Demo
11

## Slide 12: Public Web-based Clinical Trial Search Engine

# Public Web-based Clinical Trial Search Engine

*(Screenshot of LIND AI web interface)*

**Navigation Bar:**
About Us | How It Works | For Patients | For Clinicians | For Pharma

**Main Section:**
LIND AI
Find the right Clinical Trials
We help match patients to clinical trials, for improved outcomes

**Search Filters:**
Disease [Dropdown]
Age [Dropdown]
Gender [Dropdown]
Location [Dropdown]
Search [Button]

**Featured Trial Card (top right):**
NCT1352352
Cedars-Sinai (7mi) 312 out of 500
Phase II 11/21/2019 - 04/27/2024

**Image Caption:**
First-in-Human Study of RGT-419B Alone and With E...
*(Icons: 7 green checkmarks, 2 orange exclamation marks, 6 red 'x' marks)*
12

## Slide 13: Public Web-based Clinical Trial Search Results

# Public Web-based Clinical Trial Search Results

*(Screenshot of LIND AI search results page)*

**Search Filters (top):**
Cancer | 50-65 | Female | Los Angeles, California | Search

**Top Remaining Trial Questions:**
What is the patient's current medication regimen?
No current medications | Specific medications | Multiple medication
Show results
← Previous | Next →

**Trial Matches:**
10 Trial matches

**Recruiting Trials List:**

1.  **NCT1352352**
    Cedars-Sinai (7mi) 312 out of 500 ►►Phase II 11/21/2019 - 04/27/2024
    First-in-Human Study of RGT-419B Alone and With Endocrine Th... Trastuzumab
    *(Icons: 7 green checkmarks, 2 orange exclamation marks, 6 red 'x' marks)*

2.  **NCT3352325**
    City of Hope (25mi) 88 out of 120 Phase 1 03/18/2022 - 05/05/2025
    Prospective Study of the Prosigna Assay on Neoadjuvant Clinical Decitabine Injection... Trastuzumab
    *(Icons: 4 green checkmarks, 2 orange exclamation marks, 9 red 'x' marks)*

3.  **NCT1352352**
    Cedars-Sinai (7mi) 312 out of 500 ►Phase II 11/21/2019 - 04/27/2024
    First-in-Human Study of RGT-419B Alone and With Endocrine Th... Trastuzumab
    *(Icons: 7 green checkmarks, 2 orange exclamation marks, 6 red 'x' marks)*
13

## Slide 14: Public Web-based Clinical Trial Eligibility

# Public Web-based Clinical Trial Eligibility

*(Screenshot of LIND AI trial eligibility details page)*

**Trial Header:**
Recruiting
**NCT1352352** Cedars-Sinai (7mi) 312 out of 500 ►►Phase II 11/21/2019 - 04/27/2024
First-in-Human Study of RGT-419B Alone and With Endocrine Therapy Full Title Trastuzumab
*(Icons: 7 green checkmarks, 2 orange exclamation marks, 6 red 'x' marks)*

**Eligibility Criteria Table:**

| Criteria Type | Patient Meets Criteria | Trial Requirement | Supporting Evidence |
| :------------ | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I             | (Green Check)          | Individuals without history of PDAC                                                                                                                                                                                                                                                                                                | No prior history of cancer                                                                                                                                                                                                                                                   |
| I             | (Green Check)          | 2+ relatives with PDAC on same side of family where 2 affected are first degree related to each other and at least 1 affected is first degree related to subject; age 50+ or 10 years younger than earliest PDAC in family at time of diagnosis                                                                                       | 2 paternal uncles with PDAC<br>Patient Age 58                                                                                                                                                                                                                                |
| E             | (Green Check)          | 2 affected first degree relatives with PDAC, age 50+ or 10 years younger than earliest PDAC in family                                                                                                                                                                                                                              | 2 uncles with history of PDAC<br>Patient Age 58                                                                                                                                                                                                                              |
| E             | (Red X)                | BRCA1, BRCA2, PALB2, ATM, MLH1, MSH2, MSH6, PMS2, EPCAM pathogenic or likely pathogenic variant AND 1 first or second degree relative with PDAC; age 50+ or 10 years younger than earliest PDAC in family at time of diagnosis                                                                                                      | Negative for BRCA1, BRCA2, ATM<br>Not tested for PALB2, MLH1, MSH2, MSH6, PMS2, EPCAM                                                                                                                                                                                           |
| I             | (Green Check)          | Familial Atypical Moles and Malignant Melanoma (FAMMM) with pathogenic or likely pathogenic CDKN2A variant; age 40+                                                                                                                                                                                                               | Diagnosed familial melanoma with multiple atypical nevi<br>Patient Age 58                                                                                                                                                                                                     |
| I             | (Red X)                | Peutz-Jegher syndrome with STK11 pathogenic or likely pathogenic variant; age 35+                                                                                                                                                                                                                                              | Negative for PJS                                                                                                                                                                                                                                                             |
| I             | (Green Check)          | Hereditary pancreatitis with PRSS1 pathogenic or likely pathogenic variant and history of pancreatitis; age 40+                                                                                                                                                                                                                  | Evidence of hereditary pancreatitis, positive for PRSS1<br>Patient Age 58                                                                                                                                                                                                      |
14

## Slide 15: Patient-Centric Eligibility EHR App

# Patient-Centric Eligibility EHR App

*(Screenshot of Patient-Centric Eligibility EHR App)*

**Patient Demographics (top bar):**
MRN 23402352 | Age: 68 | Female | Invasive Ductal Carcinoma | Next Visit: 10/11/2023

**Top Remaining Trial Questions:**
Has the patient been treated of this condition previously or currently?
No prior treatment | Currently undergoing treatment | Previously treated
Show results
← Previous | Next →

**Patient's Per Trial Eligibility Chart (right panel):**
*(Bar chart showing % Trial Criteria (Y-axis) from 0 to 100, and a distribution of criteria on the X-axis. Green bars represent "Match", red bars "No Match", and grey "Unknown". The chart visually shows a decreasing percentage of matching criteria across a large number of criteria.)*
**Eligibility Result:** Match, No Match, Unknown

**Trial Matches (bottom panel):**
16 Trial matches

**Recruiting Trials List:**

1.  **NCT1352352**
    Cedars-Sinai (7mi) 312 out of 500 ►Phase II 11/21/2019 - 04/27/2024
    First-in-Human Study of RGT-419B Alone and With Endocrine Th... Trastuzumab
    *(Icons: 7 green checkmarks, 2 orange exclamation marks, 6 red 'x' marks)*

2.  **NCT3352325**
    City of Hope (25mi) 88 out of 120 ►Phase I 03/18/2022 - 05/05/2025
    Prospective Study of the Prosigna Assay on Neoadjuvant Clinical Decitabine Injection.... Trastuzumab
    *(Icons: 4 green checkmarks, 2 orange exclamation marks, 9 red 'x' marks)*
15

## Slide 16: Trial-Centric Eligibility EHR App

# Trial-Centric Eligibility EHR App

*(Screenshot of Trial-Centric Eligibility EHR App)*

**Trial Header:**
Recruiting
**NCT1352352** A Cedars-Sinai (7mi) 312 out of 500 ►Phase II 11/21/2019 - 04/27/2024
First-in-Human Study of RGT-419B Alone and With Endocrine Th... Trastuzumab

**Trial Eligibility Per Patient Chart (left panel):**
*(Bar chart showing % Trial Criteria (Y-axis) from 0 to 100, and individual patients on the X-axis. Green bars represent "Match", red bars "No Match", and grey "Unknown". Shows a distribution of eligibility across patients for the trial.)*
**Eligibility Result:** Match, No Match, Unknown

**Trial Eligibility Per Criteria Chart (right panel):**
*(Sankey-like diagram showing patient flow through criteria: Metastatic BC, No CKD4/6 AE, Females >=18yr, ECOG< 2, HER2-, HR+, <=1 Prior Cytotoxic CTX. Lines indicate matches and non-matches, showing how many patients meet each criterion.)*

**Potentially Eligible Patients List:**
105 Potentially Eligible Patients

| MRN        | Age | Gender | Diagnosis              | Match Icons |
| :--------- | :-- | :----- | :--------------------- | :---------- |
| 23406352   | 68  | Female | Invasive Ductal Carcinoma | 9 0 4       |
| 18772083   | 44  | Female | Ductal Carcinoma In Situ | 7 2 7       |
| 03239978   | 58  | Female | Triple-Negative Breast Cancer | 6 1 7       |
16

## Slide 17: EHR App: On-Trial Patient eCRF Summary

# EHR App: On-Trial Patient eCRF Summary

*(Screenshot of EHR App: On-Trial Patient eCRF Summary)*

**Patient Header:**
MRN234023 | Age: 68 | Female | Invasive ductal carcinoma | Next visit: 11/02/2023 | Enrolled: 8/07/2023
eCRFs Completed: 30 | Sign off: 4 | Queries: 2

**Data Grid (showing cycles/months):**

| Category | Initial/Pre-Cycle | Cycle 1        | Cycle 2        | Cycle 3        |
| :------- | :---------------- | :------------- | :------------- | :------------- |
| **DM**   | eConsent         |                |                |                |
|          | Hx Cancer        |                |                |                |
|          | Family Hx Cancer |                |                |                |
| **EN**   | Intake           |                |                |                |
|          | RECIST 1.1       |                |                |                |
| **VS**   | BMI              | BMI            | BMI            | BMI            |
|          | BP               | BP             | BP             | BP             |
| **LB**   | Heme             | Heme           | Heme           | Heme           |
|          |                  | Urine          |                |                |
| **PR**   | Biopsy           | Cisplatin      | Cisplatin      | Cisplatin      |
|          |                  | MRI            | MRI            | MRI            |
| **AE**   | ECOG             | ECOG           |                |                |
|          |                  | Recist         | PR AE          | PR AE          |
|          |                  |                |                |                |
| **Month**|                  | **January**    | **February**   | **March**      | **April**      |
17

## Slide 18: EHR App: On-Trial Patient Automated eCRF Data Capture

# EHR App: On-Trial Patient Automated eCRF Data Capture

*(Screenshot of EHR App: On-Trial Patient Automated eCRF Data Capture, showing a "Patient Timeline" on the left and "RECIST 1.1 - Target Lesions" on the right.)*

**Patient Timeline (left panel - condensed from previous slide):**
← Patient Timeline
MRN234023 | Age: 68 | Female | Invasive ductal carcinoma | Next visit: 11/02/2023 | Enrolled: 8/07/2023
eCRFs Completed: 30 | Sign off: 2 | Queries: 2

*(Categories and data points similar to previous slide: DM (eConsent, Hx Cancer, Family Hx Cancer), EN (Intake, RECIST 1.1), VS (BMI, BP), LB (Heme, Urine), PR (Biopsy, Cisplatin, MRI), AE (ECOG, Recist), with Cycle 1 shown)*

**RECIST 1.1 - Target Lesions (right panel):**

**What is the Histological Grade?**
G1 | **G2** | G3 | G4 | Gx | Unknown
*(G2 is selected)*

**Source Document**
Pathology Report (9/15/2023):
Diagnosis:
Breast, Right, Mastectomy: Invasive Ductal Carcinoma.
Tumor Size: 7 cm in greatest dimension.
Histologic Grade: G2 (Moderate Differentiation)
- Tubule formation: 2/3
- Nuclear pleomorphism: 2/3
- Mitotic rate: 2/3

[Accept Suggested Answer] [Override Answer]

**What was the [Tumor/Lesion] identifier?** [Dropdown]

**What was the laterality of the anatomical location?** [Dropdown]

**What was the directionality of the anatomical location?** [Dropdown]

**What is the tumor diameter?** [Dropdown]
18

## Slide 19: Appendix

# Appendix
19

## Slide 20: Hard problem requiring Proprietary Model and Datasets

# Hard problem requiring Proprietary Model and Datasets

Leverage state-of-the-art NLP techniques for LLM chain-of-thought, question-answer, semantic embeddings & summarization

| Model Type | Pros | Cons |
| :------------------------------------------ | :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **Custom MLP Model** (LLM Embeddings + MLP) | + fine-tune / training, ~69% accuracy, simple, compact, fast train & serve               | - hard to generalize, no COT                                                       |
| **Hosted LLM** (GPT-3.5, GPT-4, PaLM2)      | + easy to prototype, gpus, ~78% accuracy                                                 | - lack of control, limit on quality, out of vocab                                  |
| **Fine-tuned LLM (in development)** (FLAN-T5, MedPaLM2, Llama2) | + outperform baseline LLM, reinforcement learning w/ human feedback (RLHF), specialized per task | - large data & gpus, costly to train & serve                                       |
| **Foundation Model Emulating Study Researcher** (Encoder-only, ~10B Param) | + fine-tune / training, accuracy, proprietary LLM, RLHF                                  | - large dataset, gpus, costly to train & serve                                     |

**Benchmark:** ~87% Inter-rater Concordance¹³
20

## Slide 21: Clinical Trial Journey

# Clinical Trial Journey

Burdensome manual data entry at every step limits clinical trial success.

*(Flow Diagram elements)*

*   **Trial Discovery**
    *   8% of patients offered, 5% enrolled in clinical trials

*   **Informed Consent**
    *   Lack regimen logistics, efficacy, side-effects, trial phase, RCT arms

*   **Trial Eligibility**
    *   ~20 min per trial eval, Avg patient considered for 5 out of 85k trials

*   **Trial Enrollment**
    *   ~3.5 hrs of manual data entry into EDC and document verification

*   **On-Trial Regimen**
    *   45 min data entry / visit, 6-8 month backlog, 3M data points per trial

*   **Trial Operations**
    *   Data QC, AEs, protocol deviations, site queries, patient replacement

**Conclusion:** ~12 years for drug development; 55% of trials fail due to lack of enrollment
21

## Slide 22: One Marketplace, Multiple Product Surfaces

# One Marketplace, Multiple Product Surfaces

*(Screenshot of LIND AI web interface - Online Search Engine)*
**Online Search Engine**
*   **Broad Reach**
    *   **Users:** Patients & Clinicians
    *   **Distr:** SEO, Registry, Forum

*(Screenshot of LIND AI EHR Clinician App)*
**EHR Clinician App**
*   **Clinicians**
    *   **Users:** 6.1M Clinicians
    *   **Distr:** Pilot, SEO, Conf., Ref.

*(Screenshot of LIND AI EHR Patient App)*
**EHR Patient App**
*   **Patients**
    *   **Users:** 405M Patients
    *   **Distr:** EHR Patient Portal
22

## Slide 23: Available Data to Proprietary Expert Labeled Datasets

# Available Data to Proprietary Expert Labeled Datasets

| Clinical Trial Protocols        | Clinical Trial eCRFs               | Clinical EHR Records         |
| :----------------------------- | :--------------------------------- | :--------------------------- |
| 466K trial protocols           | 75 eCRFs at CDISC Portal¹⁸         | 40K clin. notes at MIMIC-III²¹ |
| at clinicaltrials.gov¹⁷        | 56 eCRFs at OpenClinica¹⁹        | 10K clin. docs at N2C2²²     |
|                                | 540 eCRFs at REDCap²⁰              | 25K path. reports at TCGA²³  |
|                                |                                    | 5.1M EHR records at Shaip²⁴  |

**Proprietary Datasets: CRC Expert Labeled**
Proprietary datasets for: 1) Granular Fact Decompositions, 2) Fact-to-Fact Retrieval and 3) Retrieval Augmented Chain-of-Thought decisions.

**Quality & Compliance:** ISO 9001, ISO 27001, HITRUST, HIPAA, SOC-2 Type 2, 21 CFR Part 11
23

## Slide 24: Market Research - Interviews with C-suite executives

# Market Research - Interviews with C-suite executives

*   **Trial Sponsors (Eli Lilly, Novartis, BMS):**
    *   Interested in patient recruitment and trial discovery, ability to reach patients directly
    *   Pharma values eligibility & enrollment over leads, DTC marketing historically poor ROI
    *   Prior solutions send poor quality leads that do not meet criteria nor results in enrollment
    *   Pharma willing to pay for patient recruitment, target demographics, criteria, rare diseases
    *   Pharma spends $6k on patient recruitment, $19k on replacement and $41k / patient / trial
    *   Important to educate patient on trial expectations, regimen, schedule, procedures
    *   Suggested additional services for Trial Protocol Design and Site Selection

*   **Research Hospitals (UCSF, Cedars-Sinai):**
    *   Focused on reducing operational churn of study coordinators and improve trial capacity
    *   PIs and clinicians at research institutions want to conduct more studies/trials for prestige
    *   Very interested in trial screening for large screening population trial and auto-capture product for operational efficiency
    *   Providers see themselves as the buyer of auto-capture, budget would come from trials
    *   Require auto-capture across all trials and diseases, don't want software fragmentation
    *   SMEs Requested Trial Deviation and Adverse Event monitoring as additional services
24

## Slide 25: Sources

# Sources

1.  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8679028/
2.  https://clinicaltrials.gov/search?aggFilters=status:not%20rec
3.  https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2796664
4.  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7342339/
5.  https://classic.clinicaltrials.gov/ct2/resources/trends
6.  https://www.insightaceanalytic.com/report/global-patient-recruitment-and-retention-services-market/1335
7.  https://www.cellandgene.com/doc/clinical-trial-recruitment-0001
8.  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7342338/
9.  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9321424/
10. Clinical Research Coordinator Interview from Cedars-Sinai
11. https://clinicaltrials.gov/study/NCT00838929
12. https://clinicaltrials.gov/study/NCT02318095
13. https://pubmed.ncbi.nlm.nih.gov/16085195/