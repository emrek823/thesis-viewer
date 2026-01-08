---
source_pdf: "https://drive.google.com/file/d/1Frae_GbRpiesK_t55jogkZrTXUbrcayW/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Michael Wornow.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1Frae_GbRpiesK_t55jogkZrTXUbrcayW/view)

## Slide 1: CS PhD Thesis Defense
Developing and Evaluating Foundation Models to Automate Enterprise Healthcare Workflows
Michael Wornow
March 14, 2025

## Slide 2: Many problems in healthcare are caused by a lack of automation

## Slide 3: Motivation
# $1 trillion
Spent annually on
US healthcare administration

**Society suffers**

*McKinsey 2021; NSI Nursing 2024; Kocher and Sahni 2011*

## Slide 4: Motivation
# $1 trillion
Spent annually on
US healthcare administration

**Society suffers**
**Patients suffer**

### Causes of death in US (2013) - Bubble Chart Data
| Cause of Death       | Count (k) | Note                                                                 |
| :------------------- | :-------- | :------------------------------------------------------------------- |
| Heart disease        | 611k      |                                                                      |
| Cancer               | 585k      |                                                                      |
| Medical error        | 251k      | Based on our estimate. medical error is the 3rd most common cause of death in the US |
| COPD                 | 149k      |                                                                      |
| Suicide              | 41k       |                                                                      |
| Firearms             | 34k       |                                                                      |
| Motor vehicles       | 34k       |                                                                      |

*McKinsey 2021; NSI Nursing 2024; Kocher and Sahni 2011*

## Slide 5: Motivation
# $1 trillion
Spent annually on
US healthcare administration

**Society suffers**
**Patients suffer**
**Providers suffer**

### Causes of death in US (2013) - Bubble Chart Data
| Cause of Death       | Count (k) | Note                                                                 |
| :------------------- | :-------- | :------------------------------------------------------------------- |
| Heart disease        | 611k      |                                                                      |
| Cancer               | 585k      |                                                                      |
| Medical error        | 251k      | Based on our estimate. medical error is the 3rd most common cause of death in the US |
| COPD                 | 149k      |                                                                      |
| Suicide              | 41k       |                                                                      |
| Firearms             | 34k       |                                                                      |
| Motor vehicles       | 34k       |                                                                      |

### What Contributes Most to Your Burnout? - Bar Chart Data
| Factor                        | Percentage |
| :---------------------------- | :--------- |
| Too many bureaucratic tasks   | 61%        |
| Lack of respect from coworkers | 38%        |
| Too many work hours           | 37%        |
| Insufficient compensation     | 34%        |
| Lack of control/autonomy      | 31%        |
| Computerization of practice (EHRs) | 25%        |

*McKinsey 2021; NSI Nursing 2024; Kocher and Sahni 2011*

## Slide 6: Meanwhile in the rest of society…
*Full Self-Driving (Supervised) is engineered to drive you almost anywhere.*
*The future of driving is here, Full Self-Driving combines Autopilot and Enhanced Autopilot features to allow your car to drive autonomously to a destination, reacting to its environment and performing most driving tasks. Note: FSD is currently in beta and requires active driver supervision. It does not make your car autonomous.*

**Autonomous cars**
**Autonomous kitchens**
**Autonomous software engineering**
**Autonomous legal advice**

*Twitter; Tesla; Harvey; Cursor*

## Slide 7: Foundation models (FMs) drove most of this recent success in AI
### Diagram: Foundation Model Ecosystem
-   **Data:**
    -   Text
    -   Images
    -   Speech
    -   Structured Data
    -   3D Signals
-   **Training:** Feeds diverse data into a Foundation Model.
-   **Adaptation:** Foundation Model is adapted to various downstream tasks.
-   **Tasks:**
    -   Question Answering
    -   Sentiment Analysis
    -   Information Extraction
    -   Image Captioning
    -   Object Recognition
    -   Instruction Following

-   **Benefits of Foundation Models:**
    ✓ Lots of unlabeled data
    ✓ Self-supervised training
    ✓ Task agnostic
    ✓ Sample efficient

An FM is a large ML model trained on a large dataset

*Bommasani et al. 2022*

## Slide 8: When is the “autonomous hospital”?

## Slide 9: Foundation models (FMs) can solve many of the challenges faced in hospital workflows

## Slide 10: However, research is outpacing our ability to integrate ML in hospitals
*Scopus; Stanford Hospital*

## Slide 11: However, research is outpacing our ability to integrate ML in hospitals
Thousands of papers are published every year…
…but few models are actually deployed

### Chart: # of ML for healthcare papers on Scopus
| Year | # of Papers |
| :--- | :---------- |
| 2012 | 20          |
| 2013 | 23          |
| 2014 | 37          |
| 2015 | 51          |
| 2016 | 88          |
| 2017 | 132         |
| 2018 | 253         |
| 2019 | 527         |
| 2020 | 850         |
| 2021 | 1702        |
| 2022 | 2383        |
| 2023 | 2851        |
| 2024 | 3326        |
| 2025 | 3326        |

# 57
AI systems are actively deployed
at Stanford Hospital*
* 31 are for imaging

*Scopus; Stanford Hospital*

## Slide 12: ML research does not reflect the needs and concerns of hospitals
*Bedi 2024; Raji 2025; MedScape 2023 Report; WSJ*

## Slide 13: ML research does not reflect the needs and concerns of hospitals
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    # <5%
    of clinical evaluations
    of LLMs since 2022 used
    real-world patient data

    “Given the critical role of benchmark[s]...it is essential to move beyond
    **medical exams** and adopt more **grounded**…approaches for evaluation.”
    - Raji et al. 2025, NEJM AI

*Bedi 2024; Raji 2025; MedScape 2023 Report; WSJ*

## Slide 14: ML research does not reflect the needs and concerns of hospitals
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    # <5%
    of clinical evaluations
    of LLMs since 2022 used
    real-world patient data

    “Given the critical role of benchmark[s]...it is essential to move beyond
    **medical exams** and adopt more **grounded**…approaches for evaluation.”
    - Raji et al. 2025, NEJM AI

2.  **The underlying workflows impacted by ML models are poorly understood**

    ### What Contributes Most to Your Burnout? - Bar Chart Data
    | Factor                        | Percentage |
    | :---------------------------- | :--------- |
    | Too many bureaucratic tasks   | 61%        |
    | Lack of respect from coworkers | 38%        |
    | Too many work hours           | 37%        |
    | Insufficient compensation     | 34%        |
    | Lack of control/autonomy      | 31%        |
    | Computerization of practice (EHRs) | 25%        |

    “[D]eveloping the algorithm is…the easy part. The part…that adds value
    is redesigning the workflow to accommodate the AI tool.”
    - Daniel Yang, Head of AI at Kaiser Permanente

*Bedi 2024; Raji 2025; MedScape 2023 Report; WSJ*

## Slide 15: Our work aims to **bridge this gap** by better **grounding** ML research in real-world healthcare **workflows** and **evaluations**

## Slide 16: Our work contributes to the field of ML for healthcare along two axes

## Slide 17: Our work contributes to the field of ML for healthcare along two axes
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    **Structured EHR Data**
    *   **EHRSHOT:** An EHR Benchmark for Few-Shot Evaluation of Foundation Models (Wornow et al. 2023, NeurIPS D&B)
    *   **Context Clues:** Evaluating Long Context Models for Clinical Prediction Tasks on EHRs (Wornow et al. 2024, ICLR)

    **Unstructured EHR Data**
    *   **Zero-Shot Clinical Trial Patient Matching with LLMs** (Wornow et al. 2024, NEJM AI)

    **Benchmarking Tools / Community**
    *   **MEDS Ecosystem**
        *   **MEDS:** Facilitating ML for Health (Arnrich et al. 2024, ICLR Workshop)
        *   **MEDS-Reader:** A fast EHR processing library (Steinberg et al. 2024)
        *   **MEDS-DEV:** Establishing Reproducibility and Comparability in ML for Health (Kolo et al., ML4H Demo)
    *   **The Shaky Foundations of LLMs and Foundation Models for EHRs** (Wornow et al. 2023, npj digital medicine)
    *   **A Systematic Review of Testing and Evaluation of Health Care Applications of LLMs** (Bedi et al. 2024, JAMA)

## Slide 18: Our work contributes to the field of ML for healthcare along two axes
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    **Structured EHR Data**
    *   **EHRSHOT:** An EHR Benchmark for Few-Shot Evaluation of Foundation Models (Wornow et al. 2023, NeurIPS D&B)
    *   **Context Clues:** Evaluating Long Context Models for Clinical Prediction Tasks on EHRs (Wornow et al. 2024, ICLR)

    **Unstructured EHR Data**
    *   **Zero-Shot Clinical Trial Patient Matching with LLMs** (Wornow et al. 2024, NEJM AI)

    **Benchmarking Tools / Community**
    *   **MEDS Ecosystem**
        *   **MEDS:** Facilitating ML for Health (Arnrich et al. 2024, ICLR Workshop)
        *   **MEDS-Reader:** A fast EHR processing library (Steinberg et al. 2024)
        *   **MEDS-DEV:** Establishing Reproducibility and Comparability in ML for Health (Kolo et al., ML4H Demo)
    *   **The Shaky Foundations of LLMs and Foundation Models for EHRs** (Wornow et al. 2023, npj digital medicine)
    *   **A Systematic Review of Testing and Evaluation of Health Care Applications of LLMs** (Bedi et al. 2024, JAMA)

2.  **The underlying workflows impacted by ML models are poorly understood**

    **Workflow Automation**
    *   **Automating the Enterprise with Foundation Models** (Wornow et al. 2024, VLDB)
    *   **Top of the CLASS:** LLM Agents for Real-World Enterprise Tasks (Wornow et al. 2025, ICLR Workshop)

    **Workflow Understanding**
    *   **WONDERBREAD:** A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks (Wornow et al. 2024, NeurIPS D&B)
    *   **APLUS:** A Python Library for Usefulness Simulations of Machine Learning Models in Healthcare. (Wornow et al. 2023, JBI)
    *   **Standing on FURM Ground:** A Framework for Evaluating Fair, Useful, and Reliable AI Models in Health Care Systems (Callahan et al. 2024, NEJM Catalyst)

## Slide 19: Our work contributes to the field of ML for healthcare along two axes
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    **Structured EHR Data**
    *   **EHRSHOT:** An EHR Benchmark for Few-Shot Evaluation of Foundation Models (**Wornow et al. 2023, NeurIPS D&B**)
    *   **Context Clues:** Evaluating Long Context Models for Clinical Prediction Tasks on EHRs (**Wornow et al. 2024, ICLR**)

    **Unstructured EHR Data**
    *   **Zero-Shot Clinical Trial Patient Matching with LLMs** (**Wornow et al. 2024, NEJM AI**)

    **Benchmarking Tools / Community**
    *   **MEDS Ecosystem**
        *   **MEDS:** Facilitating ML for Health (Arnrich et al. 2024, ICLR Workshop)
        *   **MEDS-Reader:** A fast EHR processing library (Steinberg et al. 2024)
        *   **MEDS-DEV:** Establishing Reproducibility and Comparability in ML for Health (Kolo et al., ML4H Demo)
    *   **The Shaky Foundations of LLMs and Foundation Models for EHRs** (Wornow et al. 2023, npj digital medicine)
    *   **A Systematic Review of Testing and Evaluation of Health Care Applications of LLMs** (Bedi et al. 2024, JAMA)

2.  **The underlying workflows impacted by ML models are poorly understood**

    **Workflow Automation**
    *   **Automating the Enterprise with Foundation Models** (**Wornow et al. 2024, VLDB**)
    *   **Top of the CLASS:** LLM Agents for Real-World Enterprise Tasks (**Wornow et al. 2025, ICLR Workshop**)

    **Workflow Understanding**
    *   **WONDERBREAD:** A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks (**Wornow et al. 2024, NeurIPS D&B**)
    *   **APLUS:** A Python Library for Usefulness Simulations of Machine Learning Models in Healthcare. (Wornow et al. 2023, JBI)
    *   **Standing on FURM Ground:** A Framework for Evaluating Fair, Useful, and Reliable AI Models in Health Care Systems (Callahan et al. 2024, NEJM Catalyst)

## Slide 20: Talk Outline
1.  **Motivation**
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  **Improving Clinical Decision Making using Real-World EHR Data with FMs**
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  **Understanding and Automating Administrative Digital Workflows with FMs**
    a. Understanding workflows: WONDERBREAD (NeurIPS 2024)
    b. Automating workflows: ECLAIR (VLDB 2024)
4.  **Conclusion**

## Slide 21: Talk Outline
1.  Motivation
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  **Improving Clinical Decision Making using Real-World EHR Data with FMs**
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  Understanding and Automating Administrative Digital Workflows with FMs
    a. Understanding workflows: WONDERBREAD (NeurIPS 2024)
    b. Automating workflows: ECLAIR (VLDB 2024)
4.  Conclusion

## Slide 22: Can we improve decision making within clinical workflows with FMs?

## Slide 23: Problem
Predicting what
happens to
patients is hard

### Chart: “How long will this patient survive?” - Predicted vs Observed Survival (days)
-   Scatter plot shows Predicted survival (days) vs Observed survival (days).
-   A regression line is present.
-   R^2 = 0.08
-   Axis values for Observed survival (days) and Predicted survival (days) are 1, 7, 14, 30, 90, 180, 365, 1000.

“As duration of doctor-patient relationship increased and time
since last contact decreased, prognostic accuracy decreased”
- Christakis al. 2000, BMJ

*Christakis et al. 2000*

## Slide 24: Most healthcare data is stored in electronic health records (EHRs)
*(Image shows a screenshot of an Epic EHR system with patient information and various sections like Medical Problems, Labs, Medications, etc. Logos for Epic, Cerner, Athenahealth, drchrono are visible at the bottom.)*

## Slide 25: An EHR is a timeline of many types of clinical events
### Chart: Patient Journey - Timeline of Clinical Events
-   A horizontal timeline with red dots representing events.
-   Stacked bars below the timeline represent different types of clinical events occurring over time:
    -   Claims
    -   ICD codes
    -   Medications
    -   Procedures
    -   Lab tests
    -   Clinical notes
    -   Bedside monitors
    -   Wearables
    -   Gene Expression

*Shah et al. 2023*

## Slide 26: We’ll first focus on modeling the structured data within the EHR
### Chart: Patient Journey - Timeline of Clinical Events with Structured Data Highlighted
-   A horizontal timeline with red dots representing events.
-   Stacked bars below the timeline represent different types of clinical events occurring over time.
-   Highlighted in a red box are:
    -   Claims
    -   ICD codes
    -   Medications
    -   Procedures
    -   Lab tests
-   An arrow points from the highlighted box to the text: **Structured data aka “codes”**
-   Other event types shown but not highlighted: Clinical notes, Bedside monitors, Wearables, Gene Expression.

*Shah et al. 2023*

## Slide 27: EHRSHOT: An EHR Benchmark for Few-Shot Evaluation of Foundation Models
Michael Wornow*, Rahul Thapa*, Ethan Steinberg, Jason Fries, Nigam H. Shah
NeurIPS: Benchmarks (2023) — Spotlight

## Slide 28: Structured EHR data can be modeled as a sequence of tokens
### Chart: EHR Timeline with Diagnoses, Medications, Labs, Procedures, Visits
-   Timeline dates: 2013-08-09, 2013-08-12, 2013-10-02, 2015-05-24, 2015-06-01
-   Event types on Y-axis: Diagnoses (yellow circles), Medications (green circles), Labs (purple circles), Procedures (red circles), Visits (blue bars).
-   Multiple events of each type are shown at various points in time.

*Li et al. 2019; Rasmy et al. 2020; Steinberg et al. 2020; Wornow et al. 2024*

## Slide 29: Structured EHR data can be modeled as a sequence of tokens
### Chart: EHR Timeline and Token Sequence
-   **Top half (EHR Timeline):**
    -   Timeline dates: 2013-08-09, 2013-08-12, 2013-10-02, 2015-05-24, 2015-06-01
    -   Event types on Y-axis: Diagnoses (yellow circles), Medications (green circles), Labs (purple circles), Procedures (red circles), Visits (blue bars).
    -   Multiple events of each type are shown at various points in time.
-   **Bottom half (Token Sequence):**
    -   An arrow points from the EHR timeline down to a sequence of tokens.
    -   **We can transform the EHR into a sequence of tokens for modeling**
    -   **Token Sequence:** Visit LOINC/718-7 CPT/71045 RX/1049630 LOINC/4548-4 LOINC/85354-9 RX/197316 ICD/J18.9 Visit RX/197316...

*Li et al. 2019; Rasmy et al. 2020; Steinberg et al. 2020; Wornow et al. 2024*

## Slide 30: Structured EHR data can be modeled as a sequence of tokens
### Chart: EHR Timeline with Transformer Model Overlay
-   **Top half (EHR Timeline):**
    -   Timeline dates: 2013-08-09, 2013-08-12, 2013-10-02, 2015-05-24, 2015-06-01
    -   Event types on Y-axis: Diagnoses (yellow circles), Medications (green circles), Labs (purple circles), Procedures (red circles), Visits (blue bars).
    -   Multiple events of each type are shown at various points in time.
-   **Middle (Transformer Architecture):** A transformer model diagram is overlaid on the timeline, showing positional encoding, input embedding, and multi-head attention blocks.
    -   It consists of multiple (Nx) blocks, each with: Add & Norm, Multi-Head Attention, Feed Forward.
    -   Inputs (shifted right) and Output Prediction are indicated.
-   **Bottom half (Token Sequence):**
    -   **We can transform the EHR into a sequence of tokens for modeling**
    -   **Token Sequence:** Visit LOINC/718-7 CPT/71045 RX/1049630 LOINC/4548-4 LOINC/85354-9 RX/197316 ICD/J18.9 Visit RX/197316...

*Li et al. 2019; Rasmy et al. 2020; Steinberg et al. 2020; Wornow et al. 2024*

## Slide 31: An FM trained on EHRs can learn patterns over millions of patients
### Diagram: Foundation Model Training and Adaptation
-   **Large, Unlabeled Patient Population (millions):** A large circle representing a vast amount of unlabeled patient data.
-   **Pretrain:** An arrow from the large population to a blue box labeled **Foundation Models**.
-   **Adapt:** An arrow from **Foundation Models** to a green circle labeled **hundreds** within a dashed box labeled **Small Labeled Set**.
-   **Shared structure of the EHR language allows transfer of “learned patterns” in the embeddings to a new task** (Dashed arrow from Small Labeled Set back to the Large, Unlabeled Patient Population, implying iterative improvement or knowledge sharing).

*Shah et al. 2023*

## Slide 32: EHR FMs have shown strong potential…
**Less labeled data**
*Steinberg et al. 2020*

### Chart: Inpatient Mortality (AUROC vs Number of labels)
-   X-axis: Number of labels (100, 200, 400, 800, 1600, 3200)
-   Y-axis: AUROC (0.6 to 1.0)
-   Four lines representing different models/methods: Counts, Word2Vec, LSI, CLMBR, with CLMBR All Data as a dashed line.
-   CLMBR and CLMBR All Data generally show higher AUROC.

**Simplified model deployment**
*McDermott et al. 2021*

### Table: EHR FM Tasks
| Task               | Abbr  | Specific Labels                                              | Temporal | Gap |
| :----------------- | :---- | :----------------------------------------------------------- | :------- | :-- |
| Inpatient Mortality | MOR   | Mortality (24h)                                              | Rolling  | 2h  |
|                    |       | Mortality (48h)                                              |          |     |
| Comfort Measures    | CMO   | CMO added (24h)                                              | Rolling  | 6h  |
|                    |       | CMO added (48h)                                              |          |     |
| DNR Ordered        | DNR   | DNR added (24h)                                              | Rolling  | 2h  |
|                    |       | DNR added (48h)                                              |          |     |
| Imminent Discharge | DIS   | Discharge (24h)                                              | Rolling  | 6h  |
|                    |       | Discharge (48h)                                              |          |     |
| ICD Code Prediction | ICD   | Appendix Table 7                                             | Static   | 12h |
| Long Length-of-Stay | LOS   |                                                              | Static   |     |
| 30 Day ICU         |       |                                                              |          |     |
| Readmission        | REA   |                                                              | Static   | N/A |
| Final Acuity       | ACU   |                                                              | Static   | 12h |
| Next Timepoint     | WBM   | Appendix Table 6                                             | AR       | 6h  |
| Future Treatment   |       |                                                              |          |     |
| Sequence           | FTS   |                                                              | AR       | N/A |

**Better performance**
*Guo et al. 2023*
*Lemmon et al. 2023*

### Chart: Hospital Mortality (AUROC vs Time)
-   Two sub-charts, both with AUROC on Y-axis.
-   Top: AUROC (0.90 to 0.95) for CLMBR and Count-LR, with CLMBR higher.
-   Middle: AUROC (0.30 to 0.60) for CLMBR and Count-LR, with CLMBR higher.
-   Bottom: AUROC (0.00 to 0.01) for CLMBR and Count-LR, with CLMBR higher.
-   X-axis labels are 09-12, 13-16, 17-21 (DDDD).

*Steinberg et al. 2020; McDermott et al. 2021; Guo et al. 2023; Lemmon et al. 2023*

## Slide 33: Problem: …but evaluations are lacking…
**Less labeled data**
*Steinberg et al. 2020*
-   **X** Only tested at one hospital
-   **X** Models not public
-   **X** No true “few shot” evals

### Chart: Inpatient Mortality (AUROC vs Number of labels)
-   X-axis: Number of labels (100, 200, 400, 800, 1600, 3200)
-   Y-axis: AUROC (0.6 to 1.0)
-   Four lines representing different models/methods: Counts, Word2Vec, LSI, CLMBR, with CLMBR All Data as a dashed line.
-   A red box highlights the entire chart, with the above three issues.

**Simplified model deployment**
*McDermott et al. 2021*
-   **X** Only considers ICU and ED
-   **X** Models not public

### Table: EHR FM Tasks
| Task               | Abbr  | Specific Labels                                              | Temporal | Gap |
| :----------------- | :---- | :----------------------------------------------------------- | :------- | :-- |
| Inpatient Mortality | MOR   | Mortality (24h)                                              | Rolling  | 2h  |
|                    |       | Mortality (48h)                                              |          |     |
| Comfort Measures    | CMO   | CMO added (24h)                                              | Rolling  | 6h  |
|                    |       | CMO added (48h)                                              |          |     |
| DNR Ordered        | DNR   | DNR added (24h)                                              | Rolling  | 2h  |
|                    |       | DNR added (48h)                                              |          |     |
| Imminent Discharge | DIS   | Discharge (24h)                                              | Rolling  | 6h  |
|                    |       | Discharge (48h)                                              |          |     |
| ICD Code Prediction | ICD   | Appendix Table 7                                             | Static   | 12h |
| Long Length-of-Stay | LOS   |                                                              | Static   |     |
| 30 Day ICU         |       |                                                              |          |     |
| Readmission        | REA   |                                                              | Static   | N/A |
| Final Acuity       | ACU   |                                                              | Static   | 12h |
| Next Timepoint     | WBM   | Appendix Table 6                                             | AR       | 6h  |
| Future Treatment   |       |                                                              |          |     |
| Sequence           | FTS   |                                                              | AR       | N/A |
-   A red box highlights the entire table, with the above two issues.

**Better performance**
*Guo et al. 2022*
*Lemmon et al. 2023*
-   **X** Only tested at one hospital
-   **X** Models not public
-   **X** Narrow set of tasks

### Chart: Hospital Mortality (AUROC vs Time)
-   Two sub-charts, both with AUROC on Y-axis.
-   Top: AUROC (0.90 to 0.95) for CLMBR and Count-LR, with CLMBR higher.
-   Middle: AUROC (0.30 to 0.60) for CLMBR and Count-LR, with CLMBR higher.
-   Bottom: AUROC (0.00 to 0.01) for CLMBR and Count-LR, with CLMBR higher.
-   X-axis labels are 09-12, 13-16, 17-21 (DDDD).
-   A red box highlights the entire chart, with the above three issues.

*Steinberg et al. 2020; McDermott et al. 2021; Guo et al. 2023; Lemmon et al. 2023*

## Slide 34: Problem: …the ability to do few-shot prediction is unclear…
### Chart: AUC (%) vs # training patients for fine-tuning
-   **a DHF-Cerner - GRU**
    -   X-axis: # training patients for fine-tuning (100, 300, 500, 1000, 2000, 5000, 10000, 50750)
    -   Y-axis: AUC (%) (45 to 90)
    -   Lines: LR, GRU, GRU+Med-BERT. GRU+Med-BERT performs best, followed by GRU, then LR.
    -   A red box highlights the low-shot region (100-500 patients).
-   **d Paca-Cerner - GRU**
    -   X-axis: # training patients for fine-tuning (100, 300, 500, 1000, 2000, 5000, 10000, 19250)
    -   Y-axis: AUC (%) (45 to 90)
    -   Lines: LR, GRU, GRU+Med-BERT. GRU+Med-BERT performs best, followed by GRU, then LR.
    -   A red box highlights the low-shot region (100-500 patients).
-   **g Paca-Truven - GRU**
    -   X-axis: # training patients for fine-tuning (100, 300, 500, 1000, 2000, 5000, 10000, 23609)
    -   Y-axis: AUC (%) (45 to 90)
    -   Lines: LR, GRU, GRU+Med-BERT. GRU+Med-BERT performs best, followed by GRU, then LR.
    -   A red box highlights the low-shot region (100-500 patients).

*Rasmy et al. 2021*

## Slide 35: Problem: …and the field has a reproducibility crisis
### Chart: Few EHR FMs have open sourced their weights…
-   X-axis: All EHR FMs, Public Code, Public Weights, HuggingFace
-   Y-axis: Count (0 to 35)
-   Bar data:
    -   All EHR FMs: 34
    -   Public Code: 25
    -   Public Weights: 4
    -   HuggingFace: 0

“…and task definitions vary widely”

“[T]he basic definitions of the simple…**mortality**
**prediction** problem…are **irreproducible**…With these
**significant failures**…we are forced to confront the
troubling question:
Is there anything we can do to achieve
**meaningful science in ML/AI for healthcare?**”
- McDermott 2025, ML4H

*Wornow et al. 2023; McDermott 2025*

## Slide 36: Research Question
Do EHR FMs outperform traditional ML methods
across diverse tasks and few-shot settings?

## Slide 37: Existing benchmarks cannot answer this question
### Table: Existing Benchmarks
| Benchmark       | ICU/ED Visits | All Other Visit Types | # of Tasks | Few Shot Eval | Public Model Weights |
| :-------------- | :------------ | :-------------------- | :--------- | :------------ | :------------------- |
| MIMIC-Extract   |               |                       | 5          |               |                      |
| Purushotham 2018 |               |                       | 3          |               |                      |
| Harutyunyan 2019 |               |                       | 4          |               |                      |
| Gupta 2022      |               |                       | 4          |               |                      |
| COP-E-CAT       |               |                       | 4          |               |                      |
| Xie 2022        |               |                       | 3          |               |                      |
| eICU            |               |                       | 4          |               |                      |
| EHR PT          |               |                       | 11         |               |                      |
| FIDDLE          |               |                       | 3          |               |                      |
| HiRID-ICU       |               |                       | 6          |               |                      |
| Solares 2020    |               |                       | 2          |               |                      |

*Wornow et al. 2023*

## Slide 38: Problem: They do not contain longitudinal data…
### Table: Existing Benchmarks (with data source info)
| Benchmark       | ICU/ED Visits | All Other Visit Types | # of Tasks | Few Shot Eval | Public Model Weights |
| :-------------- | :------------ | :-------------------- | :--------- | :------------ | :------------------- |
| MIMIC-Extract   | ✅            |                       | 5          |               |                      |
| Purushotham 2018 | ✅            |                       | 3          |               |                      |
| Harutyunyan 2019 | ✅            |                       | 4          |               |                      |
| Gupta 2022      | ✅            | 🟡                    | 4          |               |                      |
| COP-E-CAT       | ✅            | 🟡                    | 4          |               |                      |
| Xie 2022        | ✅            | 🟡                    | 3          |               |                      |
| eICU            | ✅            |                       | 4          |               |                      |
| EHR PT          | ✅            |                       | 11         |               |                      |
| FIDDLE          | ✅            |                       | 3          |               |                      |
| HiRID-ICU       | ✅            |                       | 6          |               |                      |
| Solares 2020    | ✅            | ✅                    | 2          |               |                      |

Almost all are sourced from a **single dataset**
called “MIMIC” which contains ~40k patients
from the **ICU** of **one hospital**

*(Image shows a partial timeline of EHR data with only a single event marker for October 2, 2017, illustrating lack of longitudinality.)*

*Wornow et al. 2023*

## Slide 39: Problem: They do not contain longitudinal data…
*(Content identical to Slide 38)*

### Table: Existing Benchmarks (with data source info)
| Benchmark       | ICU/ED Visits | All Other Visit Types | # of Tasks | Few Shot Eval | Public Model Weights |
| :-------------- | :------------ | :-------------------- | :--------- | :------------ | :------------------- |
| MIMIC-Extract   | ✅            |                       | 5          |               |                      |
| Purushotham 2018 | ✅            |                       | 3          |               |                      |
| Harutyunyan 2019 | ✅            |                       | 4          |               |                      |
| Gupta 2022      | ✅            | 🟡                    | 4          |               |                      |
| COP-E-CAT       | ✅            | 🟡                    | 4          |               |                      |
| Xie 2022        | ✅            | 🟡                    | 3          |               |                      |
| eICU            | ✅            |                       | 4          |               |                      |
| EHR PT          | ✅            |                       | 11         |               |                      |
| FIDDLE          | ✅            |                       | 3          |               |                      |
| HiRID-ICU       | ✅            |                       | 6          |               |                      |
| Solares 2020    | ✅            | ✅                    | 2          |               |                      |

Almost all are sourced from a **single dataset**
called “MIMIC” which contains ~40k patients
from the **ICU** of **one hospital**

*(Image shows a partial timeline of EHR data with only a single event marker for October 2, 2017, illustrating lack of longitudinality.)*

*Wornow et al. 2023*

## Slide 40: Problem: …recycle the same limited set of ~4 tasks…
### Table: Existing Benchmarks (with # of Tasks info)
| Benchmark       | ICU/ED Visits | All Other Visit Types | # of Tasks | Few Shot Eval | Public Model Weights |
| :-------------- | :------------ | :-------------------- | :--------- | :------------ | :------------------- |
| MIMIC-Extract   | ✅            |                       | 5          |               |                      |
| Purushotham 2018 | ✅            |                       | 3          |               |                      |
| Harutyunyan 2019 | ✅            |                       | 4          |               |                      |
| Gupta 2022      | ✅            | 🟡                    | 4          |               |                      |
| COP-E-CAT       | ✅            | 🟡                    | 4          |               |                      |
| Xie 2022        | ✅            | 🟡                    | 3          |               |                      |
| eICU            | ✅            |                       | 4          |               |                      |
| EHR PT          | ✅            |                       | 11         |               |                      |
| FIDDLE          | ✅            |                       | 3          |               |                      |
| HiRID-ICU       | ✅            |                       | 6          |               |                      |
| Solares 2020    | ✅            | ✅                    | 2          |               |                      |

*Wornow et al. 2023*

## Slide 41: Problem: …do not consider few-shot evaluation…
### Table: Existing Benchmarks (with Few Shot Eval info)
| Benchmark       | ICU/ED Visits | All Other Visit Types | # of Tasks | Few Shot Eval | Public Model Weights |
| :-------------- | :------------ | :-------------------- | :--------- | :------------ | :------------------- |
| MIMIC-Extract   | ✅            |                       | 5          |               |                      |
| Purushotham 2018 | ✅            |                       | 3          |               |                      |
| Harutyunyan 2019 | ✅            |                       | 4          |               |                      |
| Gupta 2022      | ✅            | 🟡                    | 4          |               |                      |
| COP-E-CAT       | ✅            | 🟡                    | 4          |               |                      |
| Xie 2022        | ✅            | 🟡                    | 3          |               |                      |
| eICU            | ✅            |                       | 4          |               |                      |
| EHR PT          | ✅            |                       | 11         | ✅            |                      |
| FIDDLE          | ✅            |                       | 3          |               |                      |
| HiRID-ICU       | ✅            |                       | 6          |               |                      |
| Solares 2020    | ✅            | ✅                    | 2          |               |                      |

*Wornow et al. 2023*

## Slide 42: Problem: …and do not publish model weights, hindering reproducibility.
### Table: Existing Benchmarks (with Public Model Weights info)
| Benchmark       | ICU/ED Visits | All Other Visit Types | # of Tasks | Few Shot Eval | Public Model Weights |
| :-------------- | :------------ | :-------------------- | :--------- | :------------ | :------------------- |
| MIMIC-Extract   | ✅            |                       | 5          |               |                      |
| Purushotham 2018 | ✅            |                       | 3          |               |                      |
| Harutyunyan 2019 | ✅            |                       | 4          |               |                      |
| Gupta 2022      | ✅            | 🟡                    | 4          |               |                      |
| COP-E-CAT       | ✅            | 🟡                    | 4          |               |                      |
| Xie 2022        | ✅            | 🟡                    | 3          |               |                      |
| eICU            | ✅            |                       | 4          |               |                      |
| EHR PT          | ✅            |                       | 11         | ✅            |                      |
| FIDDLE          | ✅            |                       | 3          |               |                      |
| HiRID-ICU       | ✅            |                       | 6          |               |                      |
| Solares 2020    | ✅            | ✅                    | 2          | ✅            |                      |

*Wornow et al. 2023*

## Slide 43: EHRSHOT fills these gaps in the ML for healthcare literature
### Table: EHRSHOT and Existing Benchmarks Comparison
| Benchmark       | ICU/ED Visits | All Other Visit Types | # of Tasks | Few Shot Eval | Public Model Weights |
| :-------------- | :------------ | :-------------------- | :--------- | :------------ | :------------------- |
| MIMIC-Extract   | ✅            |                       | 5          |               |                      |
| Purushotham 2018 | ✅            |                       | 3          |               |                      |
| Harutyunyan 2019 | ✅            |                       | 4          |               |                      |
| Gupta 2022      | ✅            | 🟡                    | 4          |               |                      |
| COP-E-CAT       | ✅            | 🟡                    | 4          |               |                      |
| Xie 2022        | ✅            | 🟡                    | 3          |               |                      |
| eICU            | ✅            |                       | 4          |               |                      |
| EHR PT          | ✅            |                       | 11         | ✅            |                      |
| FIDDLE          | ✅            |                       | 3          |               |                      |
| HiRID-ICU       | ✅            |                       | 6          |               |                      |
| Solares 2020    | ✅            | ✅                    | 2          |               |                      |
| **EHRSHOT**     | ✅            | ✅                    | **15**     | ✅            | ✅                   |

-   Arrows point from the "EHRSHOT" row to labels: **Representative data**, **Broad range of tasks**, **Few-shot eval**, **Transparency**.

*Wornow et al. 2023*

## Slide 44: EHRSHOT releases longitudinal EHRs for ~7k patients and the weights of a 141M-parameter EHR foundation model
### EHRSHOT Project Overview
An EHR Benchmark for Few-Shot Evaluation of Foundation Models

-   **Paper**
-   **GitHub**
-   **EHR Foundation Model**
-   **Dataset**

-   **6,739** patients
-   **41,661,637** clinical events
-   **921,499** visits
-   **15** prediction tasks

**ehrshot.stanford.edu**

## Slide 45: We curated EHRSHOT from Stanford’s EHR data warehouse
*(Image shows the Stanford Medicine logo feeding into a box labeled EHRSHOT)*

## Slide 46: We curated EHRSHOT from Stanford’s EHR data warehouse
### Diagram: EHRSHOT Curation Process
-   **7k patients** flows into **Longitudinal EHRs**.
-   **Longitudinal EHRs** flows into a box labeled **15 clinical tasks**.

### Table: 15 Clinical Tasks
| Task Name             | Task Type   | Prediction Time                | Time Horizon           |
| :-------------------- | :---------- | :----------------------------- | :--------------------- |
| **Operational Outcomes** |             |                                |                        |
| Long Length of Stay   | Binary      | 11-70 days on day of admission | Admission duration     |
| 30-day Readmission    | Binary      | 1-30 days on day of admission  | Admission duration     |
| ICU Transfer          | Binary      | 1-70 days on day of admission  | Admission duration     |
| **Anticipating Lab Test Results** |             |                                |                        |
| Thrombocytopenia      | 4-way       | Immediately before result      | Next result            |
| Hyperkalemia          | Binary      | Immediately before result      | Next result            |
| Hypoglycemia          | 4-way       | Immediately before result      | Next result            |
| Hypernatremia         | Binary      | Immediately before result      | Next result            |
| Anemia                | 4-way multiclass | Immediately before result      | Next result            |
| **Assignment of New Diagnoses** |             |                                |                        |
| Alzheimer’s Disease   | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Hyperlipidemia        | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Breast Cancer         | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Celiac                | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Acute MI              | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| **Anticipating Chest X-ray Findings** |             |                                |                        |
| Chest X-Ray Findings  | 14-way multiclass | 30m before report is recorded | Next report            |

## Slide 47: We curated EHRSHOT from Stanford’s EHR data warehouse
### Diagram: EHRSHOT Curation Process
-   **7k patients** flows into **Longitudinal EHRs**.
-   **Longitudinal EHRs** flows into a box labeled **15 clinical tasks**.
-   **2.57M patients** flows into **141M param FM (CLMBR-t-base)**.

### Table: 15 Clinical Tasks
| Task Name             | Task Type   | Prediction Time                | Time Horizon           |
| :-------------------- | :---------- | :----------------------------- | :--------------------- |
| **Operational Outcomes** |             |                                |                        |
| Long Length of Stay   | Binary      | 11-70 days on day of admission | Admission duration     |
| 30-day Readmission    | Binary      | 1-30 days on day of admission  | Admission duration     |
| ICU Transfer          | Binary      | 1-70 days on day of admission  | Admission duration     |
| **Anticipating Lab Test Results** |             |                                |                        |
| Thrombocytopenia      | 4-way       | Immediately before result      | Next result            |
| Hyperkalemia          | Binary      | Immediately before result      | Next result            |
| Hypoglycemia          | 4-way       | Immediately before result      | Next result            |
| Hypernatremia         | Binary      | Immediately before result      | Next result            |
| Anemia                | 4-way multiclass | Immediately before result      | Next result            |
| **Assignment of New Diagnoses** |             |                                |                        |
| Alzheimer’s Disease   | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Hyperlipidemia        | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Breast Cancer         | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Celiac                | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| Acute MI              | Binary      | 11-70 days on day of discharge | 1 year post-discharge  |
| **Anticipating Chest X-ray Findings** |             |                                |                        |
| Chest X-Ray Findings  | 14-way multiclass | 30m before report is recorded | Next report            |

## Slide 48: Our FM beats existing ML baselines across almost all tasks
**Performance**
**Better** (top of Y-axis)
**Worse** (bottom of Y-axis)

**Few-Shot Examples**
**Less** (left of X-axis)
**More** (right of X-axis)

### Charts: AUROC vs # of Train Examples per Class
-   **Operational Outcomes**
    -   X-axis: # of Train Examples per Class (1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 128, All)
    -   Y-axis: AUROC (0.5 to 0.9)
    -   Blue lines: CLMBR-t-base, generally higher.
    -   Red lines: Best baseline, generally lower.
-   **Anticipating Lab Test Results**
    -   X-axis: # of Train Examples per Class (1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 128, All)
    -   Y-axis: AUROC (0.5 to 0.9)
    -   Blue lines: CLMBR-t-base, generally higher.
    -   Red lines: Best baseline, generally lower.
-   **Assignment of New Diagnoses**
    -   X-axis: # of Train Examples per Class (1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 128, All)
    -   Y-axis: AUROC (0.5 to 0.9)
    -   Blue lines: CLMBR-t-base, generally higher.
    -   Red lines: Best baseline, generally lower.
-   **Anticipating Chest X-ray Findings**
    -   X-axis: # of Train Examples per Class (1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 128, All)
    -   Y-axis: AUROC (0.5 to 0.9)
    -   Blue lines: CLMBR-t-base, generally higher.
    -   Red lines: Best baseline, generally lower.

-   Legend:
    -   **CLMBR-t-base** (blue lines)
    -   **Best baseline** (red lines)

## Slide 49: Context Clues: Evaluating Long Context Models for Clinical Prediction Tasks on EHRs
Michael Wornow*, Suhana Bedi*, Miguel Angel Fuentes Hernandez, Ethan Steinberg,
Jason Fries, Christopher Ré, Sanmi Koyejo, Nigam H. Shah
ICLR (2025)

## Slide 50: Problem: We’re doing well despite dropping a ton of patient data
Most EHR FMs have short context windows…
…leading to significant data loss

### Table: EHR FM Context Lengths
| Model          | Citation               | Context Length |
| :------------- | :--------------------- | :------------- |
| CEHR-BERT      | (Pang et al., 2021)    | 300            |
| Med-BERT       | (Rasmy et al., 2021)   | 512            |
| BEHRT          | (Li et al., 2020)      | 512            |
| CORE-BEHRT     | (Odgaard et al., 2024) | 512            |
| ForeSight      | (Kraljevic et al., 2024)| 256            |
| CLMBR          | (Steinberg et al., 2021)| 512            |
| CEHR-GPT       | (Pang et al., 2024)    | 512            |
| TranformEHR    | (Yang et al., 2023a)   | 512            |
| MOTOR          | (Steinberg et al., 2023)| 512            |
| UniHPF         | (Hur et al., 2024b)    | 8192           |
| GenHPF         | (Hur et al., 2024a)    | 8192           |
| EHRMamba       | (Fallahpour et al., 2024)| 2048           |

### Chart: Total # of Events/Patient (all)
-   Histogram shows the distribution of the number of events per patient.
-   X-axis: # of events (10^0 to 10^6, log scale).
-   Y-axis: # of patients.
-   A red vertical line is at 10^2, which corresponds to 512 tokens.
-   Text: **20% of patients have >512 tokens** (area to the right of the red line is shaded).

*Stanford STARR OMOP*

## Slide 51: Problem: And we’re recycling the same old transformer-based architectures
### Table: EHR FM Architectures and Context Lengths
| Model          | Citation               | Architecture | Context Length |
| :------------- | :--------------------- | :----------- | :------------- |
| CEHR-BERT      | (Pang et al., 2021)    | Transformer: BERT | 300            |
| Med-BERT       | (Rasmy et al., 2021)   | Transformer: BERT | 512            |
| BEHRT          | (Li et al., 2020)      | Transformer: BERT | 512            |
| CORE-BEHRT     | (Odgaard et al., 2024) | Transformer: BERT | 512            |
| ForeSight      | (Kraljevic et al., 2024)| Transformer: GPT | 256            |
| CLMBR          | (Steinberg et al., 2021)| Transformer: GPT | 512            |
| CEHR-GPT       | (Pang et al., 2024)    | Transformer: GPT | 512            |
| TranformEHR    | (Yang et al., 2023a)   | Transformer: T5 | 512            |
| MOTOR          | (Steinberg et al., 2023)| Custom       | 512            |
| UniHPF         | (Hur et al., 2024b)    | Custom       | 8192           |
| GenHPF         | (Hur et al., 2024a)    | Custom       | 8192           |
| EHRMamba       | (Fallahpour et al., 2024)| Subquadratic: Mamba | 2048           |

## Slide 52: Research Question
Can we improve predictive performance by
modeling longer spans of EHR context?

## Slide 53: Results: Longer context models tend to perform better
### Chart: Mean AUROC for 14 selected EHRSHOT Tasks (AUROC vs Context Length)
-   X-axis: Context Length (0 to 16000)
-   Y-axis: AUROC (0.73 to 0.81)
-   Lines represent different models:
    -   gpt (blue, circles)
    -   hyena (orange, squares)
    -   llama (green, triangles)
    -   mamba (red, dashes)
    -   Prior SOTA (dashed purple line at approx 0.778 AUROC)

### Key Observations:
*   **Mamba-16k beats prior SOTA (CLMBR-t-base) by +3 AUROC** across 14 EHRSHOT tasks
*   **Mamba, GPT, and Llama** tend to see **improved** performance at **longer** context lengths.
*   **Hyena** performs **worse** at longer contexts.

## Slide 54: We identify 3 properties of EHR data distinct from natural language which tend to reduce model performance

## Slide 55: Results: We identify 3 properties of EHR data distinct from natural language which tend to reduce model performance
**1. Copy-forwarding of important / chronic diagnoses**

### EHRs Example
-   `VisitStart ICD/E11.9 ICD/R07.0 ... VisitStart ICD/E11.9 ... VisitStart LOINC/2.0 ICD/E11.9...`
-   Labels: Copied for billing purposes (under first ICD/E11.9), Copied for billing purposes (under second ICD/E11.9).

### Natural Language Example
-   “You have been my **friend**,” replied Charlotte. “**That in itself is a tremendous thing**.”
-   Assumption that reader can maintain context; no need to explicitly re-state what “That” entails.

### Chart: Impact on CLMBR-t-base performance (Brier Score vs Repetitiveness)
-   X-axis: Repetitiveness (Low to High)
-   Y-axis: Brier Score (0.054 to 0.080)
-   A line shows Brier Score increasing from Low to High Repetitiveness, indicating worse performance with higher repetitiveness.
-   `-- Prior SOTA` (dashed line)

## Slide 56: Results: We identify 3 properties of EHR data distinct from natural language which tend to reduce model performance
**2. Irregular intervals between tokens**

### EHRs Example
-   `VisitStart LOINC/10-9 RX/3140 VisitEnd VisitStart LOINC/10-9 ICD/10 ICD/E11.9 VisitEnd...`
-   Time intervals: `0 secs`, `2 hours`, `3 days`, `1 year`, `4 hours`, `30 mins`, `0 secs`, `0 secs`.

### Natural Language Example
-   `Call me Ishmael. Some years ago ...`
-   Time intervals: `1 1 1 1 1 1 1 pos pos pos pos pos pos pos` (indicating regular intervals).

### Chart: Impact on CLMBR-t-base performance (Brier Score vs Irregularity)
-   X-axis: Irregularity (Low to High)
-   Y-axis: Brier Score (0.050 to 0.078)
-   A line shows Brier Score increasing with higher irregularity, then slightly decreasing.
-   `-- Prior SOTA` (dashed line)

## Slide 57: Results: We identify 3 properties of EHR data distinct from natural language which tend to reduce model performance
**3. Degradation in value of prior tokens due to increased complexity of disease over time**

### EHRs Example (PPL)
-   `Visit/Start RX/29046 ... ICD/C25.0 RX/31337 ... ICD/R17.0 ICDIC/34.0 ... CPT/32490`
-   Token Idx: `0`, `1`, `203`, `204`, `512`, `513`, `590`.
-   PPL (y-axis) starts low and increases with Token Idx.

### Natural Language Example (PPL)
-   `Once upon a time ... lived happily ever after.`
-   Token Idx: `0`, `1`, `2`, `3`, `510`, `511`, `512`, `513`, `514`.
-   PPL (y-axis) remains low and relatively flat.

### Chart: Impact on CLMBR-t-base performance (Brier Score vs Token Idx)
-   X-axis: Token Idx
-   Y-axis: Brier Score
-   The line `--- brier score EOL` generally increases with Token Idx, suggesting performance degrades for later tokens.

## Slide 58: Results: But that longer context models tend to fare better
### Longer context EHR FMs perform better - Metrics Table
| Metric       | Model     | Context Length | Q1     | Q2     | Q3     | Q4     |
| :----------- | :-------- | :------------- | :----- | :----- | :----- | :----- |
| Repetitiveness (1-gram KL) | Mamba       | 16k          | 0.0715 | 0.0808 | 0.0832 | 0.0800 |
|              | Llama     | 512          | 0.0690 | 0.0762 | 0.0792 | 0.0855 |
|              |           | 16k          | 0.0627 | 0.0669 | 0.0722 | 0.0772 |
|              | GPT       | 512          | 0.0711 | 0.0769 | 0.0810 | 0.0878 |
|              |           | 4k           | 0.0715 | 0.0770 | 0.0805 | 0.0871 |
| Irregularity (Standard Deviation) | Mamba       | 16k          | 0.0759 | 0.0820 | 0.0830 | 0.0857 |
|              | Llama     | 512          | 0.0753 | 0.0779 | 0.0787 | 0.0804 |
|              |           | 16k          | 0.0690 | 0.0653 | 0.0610 | 0.0652 |
|              | GPT       | 512          | 0.0745 | 0.0757 | 0.0799 | 0.0847 |
|              |           | 4k           | 0.0757 | 0.0791 | 0.0784 | 0.0848 |

### Chart: PPL vs Token position (for various mamba models)
-   X-axis: Token position (0 to 20000)
-   Y-axis: PPL (2 to 5)
-   Lines: mamba-tiny-1024, mamba-tiny-2048, mamba-tiny-4096, mamba-tiny-16384. All lines show PPL increasing with token position.

### EHRs and Natural Language comparison (repeated from Slides 55-57)
**1. Copy-forwarding of important / chronic diagnoses**
-   **EHRs Example:** `VisitStart ICD/E11.9 ICD/R07.0 ... VisitStart ICD/E11.9 ... VisitStart LOINC/2.0 ICD/E11.9...` (Copied for billing purposes)
-   **Natural Language Example:** “You have been my friend,” replied Charlotte. “That in itself is a tremendous thing.” (Assumption that reader can maintain context; no need to explicitly re-state what “That” entails.)

**2. Irregular intervals between tokens**
-   **EHRs Example:** `VisitStart LOINC/10-9 RX/3140 VisitEnd VisitStart LOINC/10-9 ICD/10 ICD/E11.9 VisitEnd...` (Time intervals: `0 secs`, `2 hours`, `3 days`, `1 year`, `4 hours`, `30 mins`, `0 secs`, `0 secs`)
-   **Natural Language Example:** `Call me Ishmael. Some years ago ...` (Time intervals: `1 1 1 1 1 1 1 pos pos pos pos pos pos pos`)

**3. Degradation in value of prior tokens due to increased complexity of disease over time**
-   **EHRs Example (PPL):** `Visit/Start RX/29046 ... ICD/C25.0 RX/31337 ... ICD/R17.0 ICDIC/34.0 ... CPT/32490` (PPL increases with Token Idx)
-   **Natural Language Example (PPL):** `Once upon a time ... lived happily ever after.` (PPL remains low and relatively flat)

## Slide 59: You can download our models, data, benchmarks, and code!
-   **Project Page:** 🌐 **ehrshot.stanford.edu**
-   **Code:** 🐙 **github.com/som-shahlab/hf_ehr/**
-   **Models:** 🤗 **huggingface.co/StanfordShahLab** (1k+ monthly downloads) - *MEDS compatible!*
-   **Datasets:** 🗄️ **redivis.com/ShahLab** (200+ monthly downloads)

## Slide 60: Talk Outline
1.  Motivation
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  Improving Clinical Decision Making using Real-World EHR Data with FMs
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  Understanding and Automating Administrative Digital Workflows with FMs
    a. Understanding workflows: WONDERBREAD (NeurIPS 2024)
    b. Automating workflows: ECLAIR (VLDB 2024)
4.  Conclusion

## Slide 61: An EHR is simply a timeline of clinical events
### Chart: Patient Journey - Timeline of Clinical Events
-   A horizontal timeline with red dots representing events.
-   Stacked bars below the timeline represent different types of clinical events occurring over time:
    -   Claims
    -   ICD codes
    -   Medications
    -   Procedures
    -   Lab tests
    -   Clinical notes
    -   Bedside monitors
    -   Wearables
    -   Gene Expression

*Shah et al. 2023*

## Slide 62: We now turn our attention to processing clinical text
### Chart: Patient Journey - Timeline of Clinical Events with Clinical Notes Highlighted
-   A horizontal timeline with red dots representing events.
-   Stacked bars below the timeline represent different types of clinical events occurring over time.
-   The **Clinical notes** row is highlighted by a red box.
-   Other event types shown: Claims, ICD codes, Medications, Procedures, Lab tests, Bedside monitors, Wearables, Gene Expression.

*Shah et al. 2023*

## Slide 63: Zero-Shot Clinical Trial Patient Matching with LLMs
Michael Wornow*, Alejandro Lozano*, Dev Dash, Jenelle Jindal,
Kenneth W. Mahaffey, Nigam H. Shah
NEJM AI (2024)

## Slide 64: Problem
Recruiting patients
for clinical trials is a
key bottleneck in
drug discovery

*(Image shows a large red X inside a circle)*
**1 in 3**
Phase III trials fails due to a
lack of enrolled patients

### Chart: Cost drivers in clinical trials - Pie Chart Data
| Cost Driver                                     | Percentage |
| :---------------------------------------------- | :--------- |
| Patient recruitment                             | 32%        |
| Outsourcing costs                               | 14%        |
| Site recruitment                                | 12%        |
| Clinical trial management system and other technology | 8%         |
| Site retention                                  | 7%         |
| Data management and validation                  | 4%         |
| Patient retention                               | 2%         |
| Monitoring                                      | ?%         |
| Investigational product/supply                  | ?%         |
| Other R&D costs                                 | ?%         |

**Recruitment is**
**32% of trial costs!**

*Deloitte 2020; Nuttall 2012*

## Slide 65: Today, coordinators manually screen every (patient, trial) combo
*(Image shows an icon of a person sitting at a computer)*
**Clinical research coordinator**

*Stanford Hospital*

## Slide 66: Today, coordinators manually screen every (patient, trial) combo
*(Image shows a "Clinical research coordinator" icon with an arrow pointing to a "Trial Protocol" document. The protocol includes sections like "Eligibility Criteria" and "Key Inclusion Criteria" with specific medical requirements.)*

*Stanford Hospital*

## Slide 67: Today, coordinators manually screen every (patient, trial) combo
*(Image shows a "Clinical research coordinator" icon with an arrow pointing to a "Trial Protocol" document on one side and an "EHR at a hospital" document on the other. The EHR document shows "Structured Data" and "Unstructured Text" with detailed clinical notes.)*

*Stanford Hospital*

## Slide 68: Today, coordinators manually screen every (patient, trial) combo
*(Image shows a "Clinical research coordinator" icon with a "Trial Protocol" document on one side and an "EHR at a hospital" document on the other. Below the coordinator icon is an hourglass, and text about the time taken.)*

“For every trial, we **manually review**
**1000s of records**.”
- Stanford Research Coordinator

**10-40 min**
to review a single EHR

*Stanford Hospital*

## Slide 69: Many people have tried to solve this problem…

## Slide 70: Problem: Many people have tried to solve this problem…
### Rule-based
*(Diagram for ELiXR shows steps: Criteria Corpus -> Lexicon Creation, Term Annotation, Sentence Categorization, Sentence Annotation, Semantic Parsing, Semantic Construction, Semi-Structured Criteria.)*
-   **ELiXR**
-   **n2c2 RBC**

### Text to Query with NLP
*(Screenshot of a Criteria2Query interface with inclusion/exclusion criteria fields, a list of events, and a generated query result.)*
*(Example of EliIE's rule-based extraction from text using regular expressions and semantic patterns.)*
-   **Criteria2Query**
-   **EliIE**

### End-to-End Deep Learning
*(Diagram for COMPOSE shows Patient Data (EHR), Trial Protocol, and Matching Prediction y using Embedding, Attention Network, and Composite Loss.)*
*(Diagram for DeepEnroll shows Patient EHR and EC Sentence Embedding as input, flowing through an Aligned Embedding and Matching Module to get Numerical Info outputs.)*
-   **COMPOSE**
-   **DeepEnroll

*Weng et al. 2011; Oleynik et al. 2019; Kang et al. 2017; Yuan et al. 2019; Gao et al. 2020; Zhang et al. 2020*

## Slide 71: Problem: …but fell short due to the difficulty of modeling clinical text
### Rule-based
*(Diagram for ELiXR with red X's)*
-   **X** Highly manual
-   **X** Can’t adapt to new trials

### Text to Query with NLP
*(Screenshot of Criteria2Query interface with red X's)*
-   **X** Low accuracy
-   **X** Can’t do complex reasoning

### End-to-End Deep Learning
*(Diagram for COMPOSE and DeepEnroll with red X's)*
-   **X** Low accuracy
-   **X** Not interpretable

*Weng et al. 2011; Oleynik et al. 2019; Kang et al. 2017; Yuan et al. 2019; Gao et al. 2020; Zhang et al. 2020*

## Slide 72: Research Question
Can we automatically match patients to trials in
a scalable, interpretable manner using LLMs?

## Slide 73: Task: Given a patient’s clinical notes, assess if she meets a criterion
### Clinical notes for Patient A
**Associated Diagnoses:** None.
**Subjective:**
11/30/2015 05:00 Patient is 30 who presented to the hospital with 3 days history of fever and cough. She was diagnosed with CAP and was started on antibiotics. Unfortunately, she had a significant episode of hypoxemia and had to be intubated. Pinkish frothy sputum was reported after intubation. Patient has a remote history of smoking.
-----
11/30/2015 06:00 Transparent Physical Examination General: Intubated and sedated. Eye: Pupils are equal, round and reactive to light. Extraocular movements are intact. HENT: Head and neck normal. Chest: Normal. No lymphadenopathy. Respiratory: Bilateral clear. Cardiovascular: Normal rate, regular rhythm. Abdomen: Soft, non-distended. Musculoskeletal: Intubated and sedated. Integumentary: Warm, Dry. Neurologic: Intubated and sedated. Results Review Labs: Last 24 Hrs SELECT Labs ONLY

*Shah et al. 2018*

## Slide 74: Task: Given a patient’s clinical notes, assess if she meets a criterion
### Clinical notes for Patient A
**Associated Diagnoses:** None.
**Subjective:**
11/30/2015 05:00 Patient is 30 who presented to the hospital with 3 days history of fever and cough. She was diagnosed with CAP and was started on antibiotics. Unfortunately, she had a significant episode of hypoxemia and had to be intubated. Pinkish frothy sputum was reported after intubation. Patient has a remote history of smoking.
-----
11/30/2015 06:00 Transparent Physical Examination General: Intubated and sedated. Eye: Pupils are equal, round and reactive to light. Extraocular movements are intact. HENT: Head and neck normal. Chest: Normal. No lymphadenopathy. Respiratory: Bilateral clear. Cardiovascular: Normal rate, regular rhythm. Abdomen: Soft, non-distended. Musculoskeletal: Intubated and sedated. Integumentary: Warm, Dry. Neurologic: Intubated and sedated. Results Review Labs: Last 24 Hrs SELECT Labs ONLY

### Inclusion Criteria X
**ABDOMINAL**
History of intra-abdominal surgery, small or large intestine resection, or small bowel obstruction

## Slide 75: Task: Given a patient’s clinical notes, assess if she meets a criterion
### Clinical notes for Patient A
**Associated Diagnoses:** None.
**Subjective:**
11/30/2015 05:00 Patient is 30 who presented to the hospital with 3 days history of fever and cough. She was diagnosed with CAP and was started on antibiotics. Unfortunately, she had a significant episode of hypoxemia and had to be intubated. Pinkish frothy sputum was reported after intubation. Patient has a remote history of smoking.
-----
11/30/2015 06:00 Transparent Physical Examination General: Intubated and sedated. Eye: Pupils are equal, round and reactive to light. Extraocular movements are intact. HENT: Head and neck normal. Chest: Normal. No lymphadenopathy. Respiratory: Bilateral clear. Cardiovascular: Normal rate, regular rhythm. Abdomen: Soft, non-distended. Musculoskeletal: Intubated and sedated. Integumentary: Warm, Dry. Neurologic: Intubated and sedated. Results Review Labs: Last 24 Hrs SELECT Labs ONLY

### Inclusion Criteria X
**ABDOMINAL**
History of intra-abdominal surgery, small or large intestine resection, or small bowel obstruction

*(An arrow points from both the clinical notes and inclusion criteria to a box labeled LLM)*

## Slide 76: Task: Given a patient’s clinical notes, assess if she meets a criterion
### Clinical notes for Patient A
**Associated Diagnoses:** None.
**Subjective:**
11/30/2015 05:00 Patient is 30 who presented to the hospital with 3 days history of fever and cough. She was diagnosed with CAP and was started on antibiotics. Unfortunately, she had a significant episode of hypoxemia and had to be intubated. Pinkish frothy sputum was reported after intubation. Patient has a remote history of smoking.
-----
11/30/2015 06:00 Transparent Physical Examination General: Intubated and sedated. Eye: Pupils are equal, round and reactive to light. Extraocular movements are intact. HENT: Head and neck normal. Chest: Normal. No lymphadenopathy. Respiratory: Bilateral clear. Cardiovascular: Normal rate, regular rhythm. Abdomen: Soft, non-distended. Musculoskeletal: Intubated and sedated. Integumentary: Warm, Dry. Neurologic: Intubated and sedated. Results Review Labs: Last 24 Hrs SELECT Labs ONLY

### Inclusion Criteria X
**ABDOMINAL**
History of intra-abdominal surgery, small or large intestine resection, or small bowel obstruction

*(An arrow points from both the clinical notes and inclusion criteria to a box labeled LLM, and an arrow points from the LLM box to the output text)*
**“Patient A meets criteria X because [RATIONALE]”**

## Slide 77: Results: LLMs achieve SOTA with zero-shot prompting (i.e. no data labeling)
Results on the n2c2 2018 trial matching benchmark of 86 patients (~5 notes/patient) and 13 criteria

### Table: LLM Performance on n2c2 2018 Benchmark
| Model          | Open Source | Precision ↑       | Recall ↑          | Macro-F1 ↑        | Micro-F1 ↑        |
| :------------- | :---------- | :---------------- | :---------------- | :---------------- | :---------------- |
| Baseline       | ✅          | 0.69              | 0.78              | 0.43              | 0.76              |
| Prior SOTA     | ✅          | 0.88              | 0.91              | 0.75              | 0.91              |
| Llama-2-70b    | ✅          | 0.82 (0.77, 0.87) | 0.41 (0.36, 0.46) | 0.46 (0.44, 0.48) | 0.67 (0.64, 0.70) |
| Mixtral-8x7b   | ✅          | 0.72 (0.68, 0.75) | 0.83 (0.79, 0.86) | 0.64 (0.59, 0.69) | 0.79 (0.77, 0.82) |
| Llama-3-70b    | ✅          | 0.76 (0.72, 0.79) | 0.88 (0.85, 0.91) | 0.68 (0.64, 0.71) | 0.83 (0.81, 0.85) |
| Qwen-2-72b     | ✅          | 0.80 (0.76, 0.83) | **0.94** (0.92, 0.96) | 0.74 (0.68, 0.77) | 0.88 (0.86, 0.90) |
| GPT-3.5        |             | 0.74 (0.70, 0.77) | 0.80 (0.77, 0.84) | 0.59 (0.54, 0.63) | 0.80 (0.77, 0.82) |
| GPT-4          |             | **0.91** (0.88, 0.93) | 0.92 (0.89, 0.94) | **0.81** (0.77, 0.84) | **0.93** (0.91, 0.94) |

*Stubbs et al. 2019*

## Slide 78: Results: LLMs achieve SOTA with zero-shot prompting (i.e. no data labeling)
Results on the n2c2 2018 trial matching benchmark of 86 patients (~5 notes/patient) and 13 criteria

### Table: LLM Performance on n2c2 2018 Benchmark (with highlight)
| Model          | Open Source | Precision ↑       | Recall ↑          | Macro-F1 ↑        | Micro-F1 ↑        |
| :------------- | :---------- | :---------------- | :---------------- | :---------------- | :---------------- |
| Baseline       | ✅          | 0.69              | 0.78              | 0.43              | 0.76              |
| Prior SOTA     | ✅          | 0.88              | 0.91              | 0.75              | 0.91              |
| Llama-2-70b    | ✅          | 0.82 (0.77, 0.87) | 0.41 (0.36, 0.46) | 0.46 (0.44, 0.48) | 0.67 (0.64, 0.70) |
| Mixtral-8x7b   | ✅          | 0.72 (0.68, 0.75) | 0.83 (0.79, 0.86) | 0.64 (0.59, 0.69) | 0.79 (0.77, 0.82) |
| Llama-3-70b    | ✅          | 0.76 (0.72, 0.79) | 0.88 (0.85, 0.91) | 0.68 (0.64, 0.71) | 0.83 (0.81, 0.85) |
| Qwen-2-72b     | ✅          | 0.80 (0.76, 0.83) | **0.94** (0.92, 0.96) | 0.74 (0.68, 0.77) | 0.88 (0.86, 0.90) |
| GPT-3.5        |             | 0.74 (0.70, 0.77) | 0.80 (0.77, 0.84) | 0.59 (0.54, 0.63) | 0.80 (0.77, 0.82) |
| GPT-4          |             | **0.91** (0.88, 0.93) | 0.92 (0.89, 0.94) | **0.81** (0.77, 0.84) | **0.93** (0.91, 0.94) |

*(A large thought bubble covers the table with the question:)*
**How can we scale this to**
**patients with 1000’s of**
**pages of EHR data?**

*Stubbs et al. 2019*

## Slide 79: We set up a 2-stage pipeline for efficiently retrieving relevant notes

## Slide 80: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline Start
-   Patient EHR </> (p ∈ P)
    -   Represents the patient's electronic health record.
-   Criteria (c ∈ C)
    -   Represents the clinical trial inclusion/exclusion criteria.

## Slide 81: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - EHR Chunking
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   A scissors icon with text "Split EHR Into Chunks" points from Patient EHR to a series of "Chunk" boxes.

## Slide 82: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - EHR Chunk Embedding
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   Chunk boxes feed into "Embedding Model (M)", which then outputs embedding vectors.

## Slide 83: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - EHR Chunk Storage
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   Embedding Model (M) outputs "Chunk Embeddings (v)" which are then "Store"d in a "Vector Database".

## Slide 84: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - Criteria Definition Embedding
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
    -   "Definition Lookup" is applied to Criteria, yielding "Definitions: 1", "Definitions: 2".
    -   These definitions feed into an "Embedding Model (M)", which outputs embedding vectors.
-   Chunk processing: EHR -> Split -> Chunk -> Embedding Model (M) -> Chunk Embeddings (v) -> Store -> Vector Database.

## Slide 85: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - Querying
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
    -   Definitions 1 and 2 from "Definition Lookup" feed into "Embedding Model (M)" to create "Criteria Embeddings (Ψ)".
    -   These "Criteria Embeddings (Ψ)" are used as a "Query" into the "Vector Database".
-   Chunk processing path remains the same.

## Slide 86: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - Top K Chunks Retrieval
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   The "Query" into the "Vector Database" retrieves "Top K Chunks (Embeddings & Text)".

## Slide 87: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - Prompt Generation
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   "Top K Chunks (Embeddings & Text)" and "Criteria Embeddings (Ψ)" feed into "Prompt Generator (Φ)".
-   The "Prompt Generator (Φ)" also takes in information from the "Definition Lookup" results for Criteria definitions.

## Slide 88: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - Prompt Output
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   "Prompt Generator (Φ)" outputs a "Prompt" text box.

### Prompt Text Box Content:
`# Task`
`Your job is to decide whether the given patient meets`
`the inclusion criterion.`
`# Patient`
`Below is a clinical note describing the patient's current`
`health status: `**(note 1) +...+(note K)**
`The inclusion criteria being assessed are listed below,`
`followed by their definitions: `**(section_criteria)**

## Slide 89: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - Assessment Model
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   The "Prompt" is fed into an "Assessment Model (Λ)".

## Slide 90: We set up a 2-stage pipeline for efficiently retrieving relevant notes
### Diagram: Pipeline - JSON Output
-   Patient EHR </> (p ∈ P)
-   Criteria (c ∈ C)
-   The "Assessment Model (Λ)" produces "JSON Output (o)".

### JSON Output Example:
`(criterion: MI-6MOS`
`is_met: False`
`rationale: "Clinical`
`note does not mention`
`the patient having a`
`myocardial`
`infarction(MI) in the`
`past 6 months"`
`Confidence:`
`"Medium"`
`medications_and_su`
`pplements:("Acetylsali`
`cylic Acid 325 MG PO`
`QD","Atorvastatin 40`
`MG","Carbamazepine`
`500 MG PO BID"))`

## Slide 91: Results: We can achieve SOTA scores at a fraction of the cost with retrieval
### Chart: Macro-F1 vs Tokens
-   X-axis: Tokens (1, 2, 3, 4, 5, 6, 1e6)
-   Y-axis: Macro-F1 (0.50 to 0.85)
-   Lines:
    -   GPT-4 (orange, solid line with asterisks)
    -   GPT-3.5 (blue, solid line with asterisks)
    -   Prior SOTA (green, dashed line)
    -   Embedding models (dashed lines: RGE, MiniLM)
-   GPT-4 and GPT-3.5 perform significantly better, especially at lower token counts, surpassing Prior SOTA.

### Chart: Micro-F1 vs Tokens
-   X-axis: Tokens (1, 2, 3, 4, 5, 6, 1e6)
-   Y-axis: Micro-F1 (0.750 to 0.950)
-   Lines:
    -   LLM (GPT-3.5, GPT-4 - blue and orange solid lines with asterisks)
    -   Prior SOTA (green, dashed line)
    -   Embedding models (dashed lines: RGE, MiniLM)
-   GPT-4 and GPT-3.5 perform significantly better, especially at lower token counts, surpassing Prior SOTA.

## Slide 92: Results: We can achieve SOTA scores at a fraction of the cost with retrieval
### Chart: Macro-F1 vs Tokens (with thought bubble)
-   X-axis: Tokens (1, 2, 3, 4, 5, 6, 1e6)
-   Y-axis: Macro-F1 (0.50 to 0.85)
-   Lines: GPT-4, GPT-3.5, Prior SOTA, Embedding models (RGE, MiniLM)
-   A large thought bubble covers most of the chart area with the text:
    **We’d never deploy this by**
    **itself…How can we facilitate**
    **human-AI collaboration?**

### Chart: Micro-F1 vs Tokens (with circles)
-   X-axis: Tokens (1, 2, 3, 4, 5, 6, 1e6)
-   Y-axis: Micro-F1 (0.750 to 0.950)
-   Lines: LLM (GPT-3.5, GPT-4), Prior SOTA, Embedding models (RGE, MiniLM)
-   Several empty circles are placed near the bottom-left of the chart.

## Slide 93: Ask the LLM to generate natural language explanations!

## Slide 94: Results: Ask the LLM to generate natural language explanations!
### Prior “black box” ML systems
-   **Clinical notes for Patient A** (box)
-   **Inclusion Criteria X** (box)
-   Both point to a box labeled **ML model**.
-   **ML model** points to an output **0.43**.

## Slide 95: Results: Ask the LLM to generate natural language explanations!
### Prior “black box” ML systems
-   **Clinical notes for Patient A** (box)
-   **Inclusion Criteria X** (box)
-   Both point to a box labeled **ML model**.
-   **ML model** points to an output **0.43**.

### Zero-shot LLM-based system
-   **Clinical notes for Patient A** (box)
-   **Inclusion Criteria X** (box)
-   Both point to a box labeled **LLM**.
-   **LLM** points to the output text:
    **“Patient A meets criteria X because**
    **she mentioned having a headache”**

## Slide 96: The explanations generated by our LLM-based system make sense

## Slide 97: Results: The explanations generated by our LLM-based system make sense
# 97%
of “correct” decisions
were fully or partially justified.

### Chart: Clinician Assessment of Explanations (Correct Decisions) - Bar Chart Data
-   X-axis: Count (0 to 30)
-   Y-axis: Various medical criteria (ABDOMINAL, ADVANCED-CAD, ALCOHOL-ABUSE, ASP-FOR-MI, CREATININE, DIETSUPP-2MOS, DRUG-ABUSE, ENGLISH, HBA1C, KETO-1YR, MAJOR-DIABETES, MAKES-DECISIONS, MI-6MOS).
-   Each bar is segmented by clinician assessment: Incorrect (red), Partially Correct (yellow), Correct (green).
-   For "correct" decisions, the vast majority of bars are green (Correct) or yellow (Partially Correct).

## Slide 98: Results: The explanations generated by our LLM-based system make sense
# 97%
of “correct” decisions
were fully or partially justified.

# 75%
of “incorrect” decisions
were fully or partially justified.

### Chart: Clinician Assessment of Explanations (Correct Decisions) - Bar Chart Data
-   X-axis: Count (0 to 30)
-   Y-axis: Various medical criteria.
-   Segments: Incorrect (red), Partially Correct (yellow), Correct (green).
-   For "correct" decisions, most bars are green or yellow.

### Chart: Clinician Assessment of Explanations (Incorrect Decisions) - Bar Chart Data
-   X-axis: Count (0 to 30)
-   Y-axis: Various medical criteria.
-   Segments: Incorrect (red), Partially Correct (yellow), Correct (green).
-   For "incorrect" decisions, there's a higher proportion of red, but still a significant amount of green/yellow.

## Slide 99: Results: LLMs could be >500x cheaper and faster than CRCs
### Table: Comparison of LLM vs Clinical Research Coordinator
|             | Model: GPT-4o-mini | Clinical Research Coordinator |
| :---------- | :----------------- | :---------------------------- |
| Cost/patient | ~$0.06             | $34.75                       |
| Time/patient | ~5 secs            | 1 hr                         |
| Micro-F1    | 0.93               | ?                            |
| Interpretable? | ✔                | ✔                            |

*Penberthy et al. 2012; OpenAI Pricing*

## Slide 100: You can download our code!
-   **Project Page:** 🌐 **clinicaltrialmatch.stanford.edu**
-   **Code:** 🐙 **github.com/som-shahlab/clinical_trial_patient_matching**
-   **Industry:** (Partnership with AstraZeneca logo)
    “Big fan of the zero shot matching work you've done. We've rolled out a product
    inspired by it to dozens of sites in the US.”
    - CEO @ CRO

## Slide 101: Talk Outline
1.  Motivation
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  Improving Clinical Decision Making using Real-World EHR Data with FMs
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  Understanding and Automating Administrative Digital Workflows with FMs
    a. Understanding workflows: WONDERBREAD (NeurIPS 2024)
    b. Automating workflows: ECLAIR (VLDB 2024)
4.  Conclusion

## Slide 102: Talk Outline
1.  Motivation
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  Improving Clinical Decision Making using Real-World EHR Data with FMs
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  **Understanding and Automating Administrative Digital Workflows with FMs**
    a. Understanding workflows: WONDERBREAD (NeurIPS 2024)
    b. Automating workflows: ECLAIR (VLDB 2024)
4.  Conclusion

## Slide 103: Can we automate administrative healthcare workflows with FMs?

## Slide 104: Talk Outline
1.  Motivation
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  Improving Clinical Decision Making using Real-World EHR Data with FMs
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  Understanding and Automating Administrative Digital Workflows with FMs
    a. **Understanding workflows: WONDERBREAD (NeurIPS 2024)**
    b. Automating workflows: ECLAIR (VLDB 2024)
4.  Conclusion

## Slide 105: WONDERBREAD: A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks
Michael Wornow, Avanika Narayan, Ben Viggiano, Ishan S. Khare, Tathagat Verma,
Tibor Thompson, Miguel Angel Fuentes Hernandez, Sudharsan Sundar, Chloe Trujillo,
Krrish Chawla, Rongfei Lu, Justin Shen, Divya Nagaraj, Joshua Martinez, Vardhan
Agrawal, Althea Hudson, Nigam H. Shah, Christopher Ré
NeurIPS: Benchmarks (2024)

## Slide 106: Problem
Care delivery
workflows are
complex and often
unmapped

### Diagram: 44-step workflow triggered by an early deterioration model at Kaiser
*(Image shows a highly complex flowchart diagram representing a 44-step clinical workflow across different hospital departments (ICU, ED, Hospital, Intensive Care Unit Nurse Based Response Team & Action Team, Social Services, PC). It's too detailed to transcribe, but clearly illustrates a complex, multi-departmental process.)*

*Dummett et al. 2016*

## Slide 107: Traditional process mining offers a narrow view of workflows
### Table: Process trace extracted from audit logs
| Case id | Timestamp         | Activity                | Transaction type | Resource              |
| :------ | :---------------- | :---------------------- | :--------------- | :-------------------- |
| ...     | ...               | ...                     | ...              | ...                   |
| 5302    | 23/08/2021 08:51:33 | Registration            | Start            | Receptionist Monica   |
| 5295    | 23/08/2021 08:53:12 | CT scan available       | Complete         | Radiologist David     |
| 5303    | 23/08/2021 08:54:36 | Registration            | Start            | Receptionist Michael  |
| 5302    | 23/08/2021 08:55:01 | Registration            | Complete         | Receptionist Monica   |
| 5301    | 23/08/2021 08:58:19 | EEG test                | Complete         | Lab technician Jennifer |
| 5302    | 23/08/2021 09:02:46 | Consultation            | Start            | Neurologist William   |
| 5303    | 23/08/2021 09:03:25 | Registration            | Complete         | Receptionist Michael  |
| 5301    | 23/08/2021 09:07:59 | Consultation            | Start            | Neurologist Amy       |
| 5292    | 23/08/2021 09:08:12 | Urine test              | Complete         | Nurse Robert          |
| 5303    | 23/08/2021 09:10:53 | EEG test                | Start            | Lab technician Jennifer |
| 5287    | 23/08/2021 09:14:49 | Discharge               | Start            | Neurologist Lisa      |
| ...     | ...               | ...                     | ...              | ...                   |

*(Image includes an icon of a pickaxe)*

*Roock et al. 2022*

## Slide 108: Traditional process mining offers a narrow view of workflows
### Table: Process trace extracted from audit logs (partial, as on slide 107)
| Case id | Timestamp         | Activity                | Transaction type | Resource              |
| :------ | :---------------- | :---------------------- | :--------------- | :-------------------- |
| ...     | ...               | ...                     | ...              | ...                   |
| 5302    | 23/08/2021 08:51:33 | Registration            | Start            | Receptionist Monica   |
| 5295    | 23/08/2021 08:53:12 | CT scan available       | Complete         | Radiologist David     |
| 5303    | 23/08/2021 08:54:36 | Registration            | Start            | Receptionist Michael  |
| 5302    | 23/08/2021 08:55:01 | Registration            | Complete         | Receptionist Monica   |
| 5301    | 23/08/2021 08:58:19 | EEG test                | Complete         | Lab technician Jennifer |
| 5302    | 23/08/2021 09:02:46 | Consultation            | Start            | Neurologist William   |
| 5303    | 23/08/2021 09:03:25 | Registration            | Complete         | Receptionist Michael  |
| 5301    | 23/08/2021 09:07:59 | Consultation            | Start            | Neurologist Amy       |
| 5292    | 23/08/2021 09:08:12 | Urine test              | Complete         | Nurse Robert          |
| 5303    | 23/08/2021 09:10:53 | EEG test                | Start            | Lab technician Jennifer |
| 5287    | 23/08/2021 09:14:49 | Discharge               | Start            | Neurologist Lisa      |
| ...     | ...               | ...                     | ...              | ...                   |

**Actual workflow execution**
*(Image shows a screenshot of an Epic EHR system, similar to slides 24 and 131.)*
*(Image includes an icon of an eye)*

*Roock et al. 2022*

## Slide 109: Research Question
Can vision-language models (VLMs) accurately
document, understand, and improve workflows?

## Slide 110: Existing agentic benchmarks overlook workflow understanding tasks
### Table: Agentic Benchmarks
| Benchmark  | # Tasks | # Envs | Env Type |
| :--------- | :------ | :----- | :------- |
| AITW       | 30,378  | 357    | M        |
| Mind2Web   | 2,350   | 137    | W        |
| MoTIF      | 6,100   | 125    | M        |
| WebArena   | 812     | 4      | W        |
| OmniAct    | 9,802   | 65     | D + W    |
| WebShop    | 12,087  | 1      | W        |
| VWA        | 910     | 3      | W        |
| WorkArena  | 23,150  | 5      | W        |
| WebLINX    | 2,337   | 155    | W        |
| OSWorld    | 369     | 13     | D + W    |

*Friedrich et al. 2011*

## Slide 111: Existing agentic benchmarks overlook workflow understanding tasks
### Table: Agentic Benchmarks (with Auto Evaluation)
| Benchmark  | # Tasks | # Envs | Env Type | Evaluation |
| :--------- | :------ | :----- | :------- | :--------- |
| AITW       | 30,378  | 357    | M        | Auto: ✅    |
| Mind2Web   | 2,350   | 137    | W        | Auto: ✅    |
| MoTIF      | 6,100   | 125    | M        | Auto: ✅    |
| WebArena   | 812     | 4      | W        | Auto: ✅    |
| OmniAct    | 9,802   | 65     | D + W    | Auto: ✅    |
| WebShop    | 12,087  | 1      | W        | Auto: ✅    |
| VWA        | 910     | 3      | W        | Auto: ✅    |
| WorkArena  | 23,150  | 5      | W        | Auto: ✅    |
| WebLINX    | 2,337   | 155    | W        | Auto: ✅    |
| OSWorld    | 369     | 13     | D + W    | Auto: ✅    |

*Friedrich et al. 2011*

## Slide 112: Existing agentic benchmarks overlook workflow understanding tasks
### Table: Agentic Benchmarks (with Evaluation Gaps)
| Benchmark  | # Tasks | # Envs | Env Type | Evaluation             |
| :--------- | :------ | :----- | :------- | :--------------------- |
| AITW       | 30,378  | 357    | M        | Auto: ✅, Doc: -, KT: -, Imp: - |
| Mind2Web   | 2,350   | 137    | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| MoTIF      | 6,100   | 125    | M        | Auto: ✅, Doc: -, KT: -, Imp: - |
| WebArena   | 812     | 4      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| OmniAct    | 9,802   | 65     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - |
| WebShop    | 12,087  | 1      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| VWA        | 910     | 3      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| WorkArena  | 23,150  | 5      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| WebLINX    | 2,337   | 155    | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| OSWorld    | 369     | 13     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - |

**Evaluations do not cover documentation (Doc),**
**knowledge transfer (KT), or improvement (Imp) tasks**

*Friedrich et al. 2011*

## Slide 113: Existing agentic benchmarks overlook workflow understanding tasks
### Table: Agentic Benchmarks (with Evaluation Gaps)
| Benchmark  | # Tasks | # Envs | Env Type | Evaluation             |
| :--------- | :------ | :----- | :------- | :--------------------- |
| AITW       | 30,378  | 357    | M        | Auto: ✅, Doc: -, KT: -, Imp: - |
| Mind2Web   | 2,350   | 137    | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| MoTIF      | 6,100   | 125    | M        | Auto: ✅, Doc: -, KT: -, Imp: - |
| WebArena   | 812     | 4      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| OmniAct    | 9,802   | 65     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - |
| WebShop    | 12,087  | 1      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| VWA        | 910     | 3      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| WorkArena  | 23,150  | 5      | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| WebLINX    | 2,337   | 155    | W        | Auto: ✅, Doc: -, KT: -, Imp: - |
| OSWorld    | 369     | 13     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - |

**Evaluations do not cover documentation (Doc),**
**knowledge transfer (KT), or improvement (Imp) tasks**

# 60%
Of the typical process
improvement project is
spent simply defining
the workflow!

*Friedrich et al. 2011*

## Slide 114: Existing agentic benchmarks overlook workflow understanding tasks
### Table: Agentic Benchmarks (with Human Demonstrations)
| Benchmark  | # Tasks | # Envs | Env Type | Evaluation             | Human Demonstrations                       |
| :--------- | :------ | :----- | :------- | :--------------------- | :----------------------------------------- |
| AITW       | 30,378  | 357    | M        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 23.5 |
| Mind2Web   | 2,350   | 137    | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| MoTIF      | 6,100   | 125    | M        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.77 |
| WebArena   | 812     | 4      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.22 |
| OmniAct    | 9,802   | 65     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| WebShop    | 12,087  | 1      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.13 |
| VWA        | 910     | 3      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0   |
| WorkArena  | 23,150  | 5      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0   |
| WebLINX    | 2,337   | 155    | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| OSWorld    | 369     | 13     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |

**Evaluations do not cover documentation (Doc),**
**knowledge transfer (KT), or improvement (Imp) tasks**
**Data does not support BPM tasks**

*Friedrich et al. 2011*

## Slide 115: Existing agentic benchmarks overlook workflow understanding tasks
### Table: Agentic Benchmarks (with Human Demonstrations)
| Benchmark  | # Tasks | # Envs | Env Type | Evaluation             | Human Demonstrations                       |
| :--------- | :------ | :----- | :------- | :--------------------- | :----------------------------------------- |
| AITW       | 30,378  | 357    | M        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 23.5 |
| Mind2Web   | 2,350   | 137    | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| MoTIF      | 6,100   | 125    | M        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.77 |
| WebArena   | 812     | 4      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.22 |
| OmniAct    | 9,802   | 65     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| WebShop    | 12,087  | 1      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.13 |
| VWA        | 910     | 3      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0   |
| WorkArena  | 23,150  | 5      | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0   |
| WebLINX    | 2,337   | 155    | W        | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| OSWorld    | 369     | 13     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: - | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |

**Evaluations do not cover documentation (Doc),**
**knowledge transfer (KT), or improvement (Imp) tasks**
**Data does not support BPM tasks**

*Friedrich et al. 2011*

## Slide 116: WONDERBREAD fills these gaps in the agentic workflow literature!
### Table: Agentic Benchmarks (with WONDERBREAD)
| Benchmark    | # Tasks | # Envs | Env Type | Evaluation                                                     | Human Demonstrations                                       |
| :----------- | :------ | :----- | :------- | :------------------------------------------------------------- | :--------------------------------------------------------- |
| AITW         | 30,378  | 357    | M        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 23.5 |
| Mind2Web     | 2,350   | 137    | W        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| MoTIF        | 6,100   | 125    | M        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.77 |
| WebArena     | 812     | 4      | W        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.22 |
| OmniAct      | 9,802   | 65     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| WebShop      | 12,087  | 1      | W        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0.13 |
| VWA          | 910     | 3      | W        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0   |
| WorkArena    | 23,150  | 5      | W        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 0   |
| WebLINX      | 2,337   | 155    | W        | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| OSWorld      | 369     | 13     | D + W    | Auto: ✅, Doc: -, KT: -, Imp: -                                  | Action: ✅, Video: ✅, SOP: -, Ranking: -, Demos/Task: 1   |
| **Wonderbread** | **598** | **4**  | **W**    | **Auto: ✅, Doc: ✅, KT: ✅, Imp: ✅** | **Action: ✅, Video: ✅, SOP: ✅, Ranking: ✅, Demos/Task: 4.9** |

## Slide 117: WONDERBREAD
**A WOrkflow uNDERstanding BenchmaRk, EvAluation harness, and Dataset**
*(Image: A cartoon toast character with glasses and a bow tie is sitting at a desk, typing on a computer keyboard. The computer screen shows a flowchart. There are small red, yellow, and blue circles above the character.)*

## Slide 118: WONDERBREAD is a benchmark and dataset for studying the workflow understanding capabilities of models
1.  **Dataset**
    ### Diagram: Dataset Structure
    -   Shows a hierarchical structure: Workflow 4, Workflow 3, Workflow 2, Workflow 1.
    -   Each Workflow contains Demo 1, Demo 2, Demo 3, ...
-   **Dataset Statistics:**
    *   **2,928** demonstrations
    *   **598** workflows
    *   **162** rankings
    *   **4** websites

## Slide 119: WONDERBREAD is a benchmark and dataset for studying the workflow understanding capabilities of models
1.  **Dataset**
    ### Diagram: Dataset with Recording
    -   Shows a hierarchical structure of Workflows and Demos.
    -   An arrow points from "Demo 1" to "Recording (.mp4 file)".
    -   The recording is represented by a series of video frames, showing a sequence of actions on a web interface.

-   **Dataset Statistics:**
    *   **2,928** demonstrations
    *   **598** workflows
    *   **162** rankings
    *   **4** websites

## Slide 120: WONDERBREAD is a benchmark and dataset for studying the workflow understanding capabilities of models
1.  **Dataset**
    ### Diagram: Dataset with Key Frames
    -   Shows a hierarchical structure of Workflows and Demos.
    -   "Recording (.mp4 file)" is shown as a sequence of video frames.
    -   Highlighted sections of the recording point to "Key Frames (.png files)", which are static screenshots.
    -   Red "CLICK" labels indicate actions performed at certain key frames.

-   **Dataset Statistics:**
    *   **2,928** demonstrations
    *   **598** workflows
    *   **162** rankings
    *   **4** websites

## Slide 121: WONDERBREAD is a benchmark and dataset for studying the workflow understanding capabilities of models
1.  **Dataset**
    ### Diagram: Dataset with Action Trace
    -   Shows a hierarchical structure of Workflows and Demos.
    -   "Recording (.mp4 file)" and "Key Frames (.png files)" are shown.
    -   An arrow points from "Key Frames" to "Action Trace (.json file)".
    -   The action trace contains JSON objects describing actions, states, and HTML attributes for each click.
        -   Example JSON for "CLICK":
            ```json
            {
              "type": "action",
              "id": "0",
              "start": "4.6342",
              "type": "mouseup",
              "html": "<body> ... </body>",
              "text": "Dashboard",
              "bounds": [...]
            }
            ```
        -   Example JSON for "State":
            ```json
            {
              "type": "state",
              "id": "2",
              "start": "7.8383",
              "url": "...",
              "html": "...",
              "products": "Reports / Magento Admin",
              "text": "BestSellers"
            }
            ```

-   **Dataset Statistics:**
    *   **2,928** demonstrations
    *   **598** workflows
    *   **162** rankings
    *   **4** websites

## Slide 122: WONDERBREAD is a benchmark and dataset for studying the workflow understanding capabilities of models
1.  **Dataset**
    ### Diagram: Dataset with SOP
    -   Shows a hierarchical structure of Workflows and Demos.
    -   "Recording (.mp4 file)", "Key Frames (.png files)", and "Action Trace (.json file)" are shown.
    -   An arrow points from "Action Trace" to "SOP (.txt file)".
    -   The SOP contains numbered instructions derived from the actions.
        -   Example SOP instructions:
            1.  Click the "Reports" button on the left to open the menu.
            2.  Click on "Bestsellers" which is located under the "Products" section.
            3.  Click on the arrow to the right of the "Period" filter to open the dropdown.

-   **Dataset Statistics:**
    *   **2,928** demonstrations
    *   **598** workflows
    *   **162** rankings
    *   **4** websites

## Slide 123: WONDERBREAD contains 6 benchmark tasks covering workflow documentation, knowledge transfer, and process improvement
### Diagram: WONDERBREAD Benchmark Tasks
-   **Documentation**
    -   Input: `{"Keyframes": [X, Y], "SOP": ""}` (from Workflow)
    -   Multimodal FM -> SOP
    -   Output: Steps (1. Click X, 2. Type Y, 3. Scroll, 10. Done)
-   **Knowledge Transfer**
    -   Input: Demo 1, Demo 2, Demo 3 (Workflow)
    -   Multimodal FM -> `OR` `X`
-   **Improvement**
    -   Input: SOPs (Workflow)
    -   Multimodal FM -> Steps (1. Task X, 2. Type Y, 3. Scroll)
    -   Output: 1 or 2 or 3 (Ranking), Gold SOP

## Slide 124: Documentation tasks evaluate a modelʼs ability to generate SOPs and segment video demonstrations
### Documentation Benchmark Tasks
#### SOP Generation
-   **Input:** `{"Keyframes": [X, Y], "SOP": ""}`
-   **Multimodal FM** -> New SOP (Steps)
    -   Steps: 1. Click X, 2. Type Y, 3. Scroll, 10. Done
-   **Gold SOP** (Steps)
    -   Steps: 1. Click X, 2. Type Y, 3. Scroll, 10. Done
-   **Evaluation:** GPT4 and Pairwise Precision/Recall between New SOP and Gold SOP.

#### Demo Segmentation
-   **Input:** Concatenated Demo Videos
-   **Multimodal FM** -> Predicted Segmentation
-   **Ground Truth Segmentation**
-   **Evaluation:** V-Measure

*(The Knowledge Transfer and Improvement sections are identical to slide 123)*

## Slide 125: Models can document workflows based on video recordings
### SOP Generation Result
To find the email address of the contributor with the most
commits to the "gh-pages" branch in the given GitLab UI, follow
these steps:
1.  Open the GitLab repository page.
2.  On the left sidebar, click on "Graph" under the "Repository"
    section to view the contribution graph.
3.  In the "Graph" section, ensure you are on the "Commits" tab.
...

**Standard Operating Procedure (“SOP”)**

### Results: Recall vs Precision
-   X-axis: Precision (0.4 to 0.8)
-   Y-axis: Recall (0.4 to 0.8)
-   Scatter plot points for various models:
    -   GPT-4 (+ACT) (blue triangle)
    -   GPT-4 (WD) (black x)
    -   GPT-4 (+WD+KF+ACT) (green square)
    -   Gemini Pro 1 (WD+KF) (orange triangle)
    -   Gemini Pro 3 (WD) (pink star)
    -   Claude 3 Sonnet (WD+KF+ACT) (purple diamond)
    -   Claude 3 Sonnet (WD) (light blue circle)
-   A highlighted point indicates: **0.80 precision, 0.88 recall** (achieved by VLM)

*(VLM box shown as input)*

*(The Documentation, Knowledge Transfer and Improvement sections are identical to slide 123)*

## Slide 126: Knowledge Transfer tasks evaluate a modelʼs ability to answer questions about a workflow
### Knowledge Transfer Benchmark Tasks
#### Question Answering
-   **Input:** Demo, Question
-   **Multimodal FM** -> Response (GPT4)
-   **Reference**
-   **Evaluation:** Soundness, Clarity, Completeness (via Criteria Scoring)

#### Demo Validation
-   **Input:** Demo
-   **Multimodal FM** -> Completed? (Yes/No, ✅/❌)
-   **Evaluation:** F1 Score, Adhered to SOP?

*(The Documentation and Improvement sections are identical to slide 123)*

## Slide 127: Models can answer complex visual reasoning questions
### Dataset of 120 open-ended questions paired with workflow demonstration videos.
*   “Explain what the most common failure modes might
    be for a user performing this task.”
*   “Here are two demonstrations, one of which is more
    efficient than the other. Please describe ways to
    improve the less optimal workflow.”
*   “What is the purpose of doing this workflow?”
*   “Why does the user type the string "01/01/2023" in
    screenshot #5?”
*   “Here are two workflows. Please identify the key
    *differences* between them.”
*   “How would a user completing the task of modifying
    the address know that the workflow is completed?”

### Chart: Answers on a scale of 1 (bad) to 3 (good) - Radar Chart Data
-   Axes: Soundness, Clarity, Completeness, Compactness.
-   Scale: 0 to 3 (inner ring at 0.5, outer ring at 2.5).
-   Models:
    -   GPT4 (blue)
    -   GeminiPro (orange)
    -   Human (green)
    -   Claude3 (purple)
-   All models cluster around the 1.5-2.5 range, with Human generally slightly better, especially for Soundness and Completeness. GPT4 and GeminiPro are also strong.

*(The Documentation, Knowledge Transfer and Improvement sections are identical to slide 123)*

## Slide 128: Improvement tasks evaluate a modelʼs ability to compare and improve workflow demonstrations
### Improvement Benchmark Tasks
#### SOP Ranking
-   **Input:** Reference SOPs
-   **Multimodal FM** -> Predicted Ranking
-   **Reference Ranking**
-   **Evaluation:** Kendall Correlation

#### SOP Improvement
-   **Input:** Demo, SOP (I)
-   **Iterative Improvement:** Multimodal FM -> SOP (I+1)
-   **Evaluation:** SOP Generation Rubric, Rubric Based Scoring (using GPT4)

*(The Documentation and Knowledge Transfer sections are identical to slide 123)*

## Slide 129: Talk Outline
1.  Motivation
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  Improving Clinical Decision Making using Real-World EHR Data with FMs
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  Understanding and Automating Administrative Digital Workflows with FMs
    a. Understanding workflows: WONDERBREAD (NeurIPS 2024)
    b. **Automating workflows: ECLAIR (VLDB 2024)**
4.  Conclusion

## Slide 130: Automating the Enterprise with Foundation Models
Michael Wornow*, Avanika Narayan*, Krista Opsahl-Ong, Quinn McIntyre,
Nigam H. Shah, Christopher Ré
VLDB (2024)

## Slide 131: Problem
Administrative
digital workflows
pose a burden for
hospital staff

*(Image shows a screenshot of an Epic EHR system, similar to slides 24 and 108.)*
# $1 trillion
Spent annually on
US healthcare administration

*McKinsey 2021*

## Slide 132: Current automation relies on robotic process automation (RPA)
*(Image shows a screenshot of UiPath Studio, displaying a flowchart for an automation process with "Start", "Assign", "Decision", "Message Box" activities, etc.)*

*(Logos: UiPath, Automation Anywhere, blueprism)*

## Slide 133: Problem: RPA has struggled, especially in healthcare
1.  **High Set-Up Costs**
    RPA requires trained specialists to develop and test automation scripts, which can take **months**.
2.  **Unreliable Execution**
    RPA relies on **hard-coded rules**, making it brittle to changes in the environment.
3.  **Burdensome Maintenance**
    RPA deployments almost always require **continued human oversight** for detecting and fixing errors.

*Moreira et al. 2021; Perdana et al. 2023; Chakraborti et al. 2020*

## Slide 134: Problem: RPA has struggled, especially in healthcare
### Stanford Hospital revenue cycle management (RCM) case study
1.  **High Set-Up Costs**
    RPA requires trained specialists to develop and test automation scripts, which can take **months**.
    -   Deployment took **18 months + $10k’s**
2.  **Unreliable Execution**
    RPA relies on **hard-coded rules**, making it brittle to changes in the environment.
3.  **Burdensome Maintenance**
    RPA deployments almost always require **continued human oversight** for detecting and fixing errors.

*Moreira et al. 2021; Perdana et al. 2023; Chakraborti et al. 2020; Wornow et al. 2024*

## Slide 135: Problem: RPA has struggled, especially in healthcare
### Stanford Hospital revenue cycle management (RCM) case study
1.  **High Set-Up Costs**
    RPA requires trained specialists to develop and test automation scripts, which can take **months**.
    -   Deployment took **18 months + $10k’s**
2.  **Unreliable Execution**
    RPA relies on **hard-coded rules**, making it brittle to changes in the environment.
    -   Bot could only handle **2 narrowly-scoped workflows (~0.2 FTEs of work)**
3.  **Burdensome Maintenance**
    RPA deployments almost always require **continued human oversight** for detecting and fixing errors.

*Moreira et al. 2021; Perdana et al. 2023; Chakraborti et al. 2020; Wornow et al. 2024*

## Slide 136: Problem: RPA has struggled, especially in healthcare
### Stanford Hospital revenue cycle management (RCM) case study
1.  **High Set-Up Costs**
    RPA requires trained specialists to develop and test automation scripts, which can take **months**.
    -   Deployment took **18 months + $10k’s**
2.  **Unreliable Execution**
    RPA relies on **hard-coded rules**, making it brittle to changes in the environment.
    -   Bot could only handle **2 narrowly-scoped workflows (~0.2 FTEs of work)**
3.  **Burdensome Maintenance**
    RPA deployments almost always require **continued human oversight** for detecting and fixing errors.
    -   Bot required **continuous human monitoring** via a managed service

*Moreira et al. 2021; Perdana et al. 2023; Chakraborti et al. 2020; Wornow et al. 2024*

## Slide 137: Problem: Prior AI agents focused on simple websites, not EHRs
*(Left image: Screenshot of a United Airlines flight booking website. Text below: "Book a flight to Cancun")*
*(Right image: Screenshot of an Epic EHR system. Text below: "Place all the required orders for this patient.")*

### Challenges for AI Agents in EHRs:
*   **Limited APIs**
*   **Domain knowledge**
*   **Purely visual (no HTML / accessibility trees)**

*Gur et al. 2023; Zhang et al. 2023; Wang et al. 2024; Lai et al. 2024; Zhou et al. 2024; He et al. 2024 + many more*

## Slide 138: Research Question
Can vision-language models (VLMs) accurately
observe, execute, and validate digital workflows?

## Slide 139: ECLAIR
**Enterprise sCaLe AI for woRkflows**
*(Image: A cheerful chocolate-covered pastry character, resembling an éclair, with googly eyes and hands, is sitting at a computer and typing on a keyboard.)*

## Slide 140: ECLAIR uses a VLM to autonomously complete tasks in an SOP
*(Image: Screenshot of an Epic EHR system. The screen shows patient data and various medical sections.)*

## Slide 141: ECLAIR uses a VLM to autonomously complete tasks in an SOP
*(Image: Two screenshots of an Epic EHR system side-by-side. An arrow points from the first screenshot to the second.)*
**Visually**
**observe**
**screen**

## Slide 142: ECLAIR uses a VLM to autonomously complete tasks in an SOP
*(Image: A process flow diagram showing the steps ECLAIR takes.)*
-   **Visually observe screen** (represented by a screenshot of an Epic EHR)
-   Arrow from screenshot to a thought bubble labeled **Action history, current state, task goal…**
-   Thought bubble points to a box labeled **VLM** (Vision-Language Model).
-   **VLM** box points to **Plan next action**.

## Slide 143: ECLAIR uses a VLM to autonomously complete tasks in an SOP
*(Image: A process flow diagram showing the steps ECLAIR takes.)*
-   **Visually observe screen** (represented by a screenshot of an Epic EHR)
-   Arrow from screenshot to a thought bubble labeled **Action history, current state, task goal…**
-   Thought bubble points to a box labeled **VLM** (Vision-Language Model).
-   **VLM** box points to **Plan next action**.
-   **SOP** (Standard Operating Procedure) box is shown below "Plan next action".

### SOP Text Example:
To find the email address of the
contributor with the most commits
to the "gh-pages" branch in the
given GitLab UI, follow these
steps:
1.  Open the GitLab repository
    page.
2.  On the left sidebar, click on
    "Graph" under the "Repository"
    section to view the contribution
    graph.
3.  In the "Graph" section, ensure
    you are on the "Commits" tab....

### Table: Performance Metrics
|             | Next Action Suggestions Acc. | Overall Workflow Completion Acc. |
| :---------- | :--------------------------- | :------------------------------- |
| X           | 0.83                         | 0.17                             |
| ✅          | 0.92                         | 0.40                             |

## Slide 144: ECLAIR uses a VLM to autonomously complete tasks in an SOP
*(Image: A process flow diagram showing the steps ECLAIR takes.)*
-   **Visually observe screen** (represented by a screenshot of an Epic EHR)
-   Arrow from screenshot to a thought bubble labeled **Action history, current state, task goal…**
-   Thought bubble points to a box labeled **VLM** (Vision-Language Model).
-   **VLM** box points to **Plan next action**.
-   **SOP** box is shown below "Plan next action".
-   "Plan next action" points to **Execute action**.
-   **TYPE(“sitter”, x=1093, y=141)** (example of an executed action)

### SOP Text Example:
To find the email address of the
contributor with the most commits
to the "gh-pages" branch in the
given GitLab UI, follow these
steps:
1.  Open the GitLab repository
    page.
2.  On the left sidebar, click on
    "Graph" under the "Repository"
    section to view the contribution
    graph.
3.  In the "Graph" section, ensure
    you are on the "Commits" tab....

### Table: Performance Metrics
|             | Next Action Suggestions Acc. | Overall Workflow Completion Acc. |
| :---------- | :--------------------------- | :------------------------------- |
| X           | 0.83                         | 0.17                             |
| ✅          | 0.92                         | 0.40                             |

## Slide 145: ECLAIR uses a VLM to autonomously complete tasks in an SOP
*(Image: A process flow diagram showing the steps ECLAIR takes, now with a loop for repeating actions.)*
-   **Visually observe screen** (represented by a screenshot of an Epic EHR)
-   Arrow from screenshot to a thought bubble labeled **Action history, current state, task goal…**
-   Thought bubble points to a box labeled **VLM** (Vision-Language Model).
-   **VLM** box points to **Plan next action**.
-   **SOP** box is shown below "Plan next action".
-   "Plan next action" points to **Execute action**.
-   A loop arrow goes from "Execute action" back to "Visually observe screen", with text: **Repeat until model decides task is completed**.
-   **TYPE(“sitter”, x=1093, y=141)** (example of an executed action)

### SOP Text Example:
To find the email address of the
contributor with the most commits
to the "gh-pages" branch in the
given GitLab UI, follow these
steps:
1.  Open the GitLab repository
    page.
2.  On the left sidebar, click on
    "Graph" under the "Repository"
    section to view the contribution
    graph.
3.  In the "Graph" section, ensure
    you are on the "Commits" tab....

### Table: Performance Metrics
|             | Next Action Suggestions Acc. | Overall Workflow Completion Acc. |
| :---------- | :--------------------------- | :------------------------------- |
| X           | 0.83                         | 0.17                             |
| ✅          | 0.92                         | 0.40                             |

## Slide 146: End-to-end demo on nursing workflow

## Slide 147: We record a nurse demonstrating a workflow
### Diagram: ECLAIR Workflow Recording and SOP Generation
-   **Full screen recording** -> **Automated**
-   **Clicks, keystrokes, scrolls** -> **Automated**
-   **Screenshots of key frames** -> **Manual (optional)**
-   **Step-by-step instructions (voice or text)** -> **Manual (optional)**

*(Image: Left side shows a screen recording of a nurse interacting with an Epic EHR system, with various annotations. The right side shows a conceptual diagram of the four types of input mentioned above, categorizing them into Automated and Manual (optional).)*

**Collaboration with SHC Nursing Informatics -- big thanks**
**to Darren Batara and Nerissa Ambers for their support!**

## Slide 148: ECLAIR watches the demonstration and creates an SOP
### Standard Operating Procedure (SOP) of the telesitter ordering workflow
1.  Click on the "X" button located at the top right corner of the "Orders" panel to close it.
2.  Click on the text field under the "Place orders or order sets" section on the right side of the screen, directly below the "Providers" tab and above the "Verbal with readback" dropdown menu.
3.  Clear out any characters that were previously typed into the text field.
4.  Type the word "Sitter" into the text field.
5.  Press the 'Enter' key on the keyboard after typing "Sitter" to initiate the search for the order.
6.  Click on the "Accept" button located at the bottom right of the "Order and Order Set Search" window to confirm the selection of the nursing order for a sitter.
7.  Click on the checkboxes labeled "Falls" under the "Secondary Adverse Effects" section and "Delirium" under the "Primary Rationale" section.
8.  Click on the checkbox labeled "Brain Injury" under the "Secondary Rationale" section.
9.  Click on the checkbox labeled "Poor Comprehension" under the "Secondary Risk Factor(s)" section.
10. Scroll down the page slightly within the application to reveal additional content.
11. Click on the checkbox labeled "NG/GJ Tube" under the "Additional Considerations" section in the "Sitter Required" order window.
12. Click on the checkbox labeled "Hard of Hearing" under the "Additional Considerations" section.
13. Click on the "Falls" checkbox located in the "Secondary Adverse Effect(s)" section of the "Sitter Required" order form.
14. Click on the dropdown menu labeled "Verbal with readback" located in the "Orders" section on the right side of the screen, directly below the "Manage Orders" and "Order Sets" tabs.
15. Select the option "Verbal without readback" from the dropdown menu.
16. Click on the "Per protocol without co-sign" button located in the "Ordering Information" section under the "Providers" subheading.
17. Click on the magnifying glass icon located in the "Ordering Provider" section of the ordering window.
18. Click on the "Accept" button located at the bottom right of the "Ordering Information" window to confirm the selection of the provider and proceed with the ordering process.
19. Scroll down the page by approximately 13 pixels to view additional content in the application window.
20. Scroll to the left by approximately 3 pixels to adjust the horizontal position of the content in the application window.
21. Scroll down the page by 39 pixels to view additional content that was not visible in the first screenshot.
22. Scroll left by 10 pixels to adjust the horizontal view of the page.
23. Scroll up the page by 154 pixels to view content that was previously out of view at the top of the screen.
24. Scroll left by 34 pixels to bring content that was off-screen on the right side into view.
25. Click on the "Orders" tab at the top of the screen.
26. Click on the "Acknowledge All" button located in the "Orders to be Acknowledged For" section.
27. Scroll down the page by 26 pixels to view more content in the main panel of the application.
28. Scroll left by 2 pixels to adjust the view of the main content area slightly to the left.
29. Click on the "RN Orders" tab located at the top of the patient's chart.
30. Click on the "Sign" button located at the bottom right corner of the screen within the "Orders" section to finalize and submit the information entered into the system.

*(Left side of the slide shows "Clicks, keystrokes, scrolls" and "Screenshots of key frames" feeding into an "ECLAIR" box.)*

## Slide 149: ECLAIR assumes full control of our laptop with a test instance of Epic
*(Image: A laptop displaying an Epic EHR screen is shown. To the right, an animated mouse cursor icon is shown, along with a keyboard icon.)*

**ECLAIR**

```python
import pyautogui
pyautogui.moveTo(x=1241.0, y=74.0)
pyautogui.click()
pyautogui.typewrite('Sitter')
```

## Slide 150: ECLAIR autonomously executes the nursing order
*(Image: A screenshot of an Epic EHR system. A red box with an arrow highlights the phrase "Place a sitter order for this patient", showing a mouse cursor clicking it. Below this, a "SOP for workflow" box is visible.)*

**ECLAIR**

## Slide 151: ECLAIR self-audits its own workflow execution
### Diagram: ECLAIR Self-Audit Process
-   **Inputs:**
    -   **Clicks, keystrokes, scrolls** (represented by JSON example: `{"type": "mouseup", "x": 42.53125, "y": 590.5859375, "element_attributes": {"x": 42, "y": 590, "height": 62, "width": 88}}`)
    -   **Screenshots of key frames** (represented by multiple small screenshots)
    -   **Full screen recording** (represented by a full screenshot)
-   These inputs flow into a box labeled **ECLAIR**.
-   **ECLAIR** then feeds into a box labeled **Was workflow successfully completed?**
-   This leads to a **YES / NO** decision.
-   A separate box labeled **SOP for workflow** is shown below the "Was workflow successfully completed?" box.

### SOP for workflow Text Example:
Placing an Order for a Sitter
1.  Close the "Orders" panel by
    clicking the "X" button.
2.  Find the "Place orders or order
    sets" section on the right.
3.  Clear the last two characters
    from the text field.
4.  Type "Sitter."
5.  Press "Enter" to search.
...

## Slide 152: You can download our data and code!
-   **Code:** 🐙 **github.com/HazyResearch/eclair-agents**
-   **Dataset:** 🗄️ **zenodo.org/records/14094162** (WONDERBREAD logo)
-   **Industry:** Highlighted in the Air Street’s **2024 State of AI** report! (MultiOn logo, Orby logo, ...)

## Slide 153: Talk Outline
1.  Motivation
    a. Healthcare has problems and FMs can help, but most research is disconnected from the realities of healthcare
2.  Improving Clinical Decision Making using Real-World EHR Data with FMs
    a. Structured data: EHRSHOT (NeurIPS 2023) + Context Clues (ICLR 2025)
    b. Unstructured data: Zero-Shot CT Matching (NEJM AI 2024)
3.  Understanding and Automating Administrative Digital Workflows with FMs
    a. Understanding workflows: WONDERBREAD (NeurIPS 2024)
    b. Automating workflows: ECLAIR (VLDB 2024)
4.  **Conclusion**

## Slide 154: Our work aimed to **bridge the gap** between ML research and real-world healthcare **workflows** and **evaluations**

## Slide 155: Our work shows that FMs can solve challenging healthcare workflows
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    **Structured EHR Data**
    *   **EHRSHOT:** An EHR Benchmark for Few-Shot Evaluation of Foundation Models (Wornow et al. 2023, NeurIPS D&B)
    *   **Context Clues:** Evaluating Long Context Models for Clinical Prediction Tasks on EHRs (Wornow et al. 2024, ICLR)

    **Unstructured EHR Data**
    *   **Zero-Shot Clinical Trial Patient Matching with LLMs** (Wornow et al. 2024, NEJM AI)

    **Benchmarking Tools / Community**
    *   **MEDS Ecosystem**
        *   **MEDS:** Facilitating ML for Health (Arnrich et al. 2024, ICLR Workshop)
        *   **MEDS-Reader:** A fast EHR processing library (Steinberg et al. 2024)
        *   **MEDS-DEV:** Establishing Reproducibility and Comparability in ML for Health (Kolo et al., ML4H Demo)
    *   **The Shaky Foundations of LLMs and Foundation Models for EHRs** (Wornow et al. 2023, npj digital medicine)
    *   **A Systematic Review of Testing and Evaluation of Health Care Applications of LLMs** (Bedi et al. 2024, JAMA)

2.  **The underlying workflows impacted by ML models are poorly understood**

    **Workflow Automation**
    *   **Automating the Enterprise with Foundation Models** (Wornow et al. 2024, VLDB)
    *   **Top of the CLASS:** LLM Agents for Real-World Enterprise Tasks (Wornow et al. 2025, ICLR Workshop)

    **Workflow Understanding**
    *   **WONDERBREAD:** A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks (Wornow et al. 2024, NeurIPS D&B)
    *   **APLUS:** A Python Library for Usefulness Simulations of Machine Learning Models in Healthcare. (Wornow et al. 2023, JBI)
    *   **Standing on FURM Ground:** A Framework for Evaluating Fair, Useful, and Reliable AI Models in Health Care Systems (Callahan et al. 2024, NEJM Catalyst)

## Slide 156: Future Work
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    **Structured EHR Data**
    *   **EHRSHOT:** An EHR Benchmark for Few-Shot Evaluation of Foundation Models (Wornow et al. 2023, NeurIPS D&B)
    *   **Context Clues:** Evaluating Long Context Models for Clinical Prediction Tasks on EHRs (Wornow et al. 2024, ICLR)

    **Unstructured EHR Data**
    *   **Zero-Shot Clinical Trial Patient Matching with LLMs** (Wornow et al. 2024, NEJM AI)

    **Benchmarking Tools / Community**
    *   **MEDS Ecosystem**
        *   **MEDS:** Facilitating ML for Health (Arnrich et al. 2024, ICLR Workshop)
        *   **MEDS-Reader:** A fast EHR processing library (Steinberg et al. 2024)
        *   **MEDS-DEV:** Establishing Reproducibility and Comparability in ML for Health (Kolo et al., ML4H Demo)
    *   **The Shaky Foundations of LLMs and Foundation Models for EHRs** (Wornow et al. 2023, npj digital medicine)
    *   **A Systematic Review of Testing and Evaluation of Health Care Applications of LLMs** (Bedi et al. 2024, JAMA)

2.  **The underlying workflows impacted by ML models are poorly understood**

    **Workflow Automation**
    *   **Automating the Enterprise with Foundation Models** (Wornow et al. 2024, VLDB)
    *   **Top of the CLASS:** LLM Agents for Real-World Enterprise Tasks (Wornow et al. 2025, ICLR Workshop)

    **Workflow Understanding**
    *   **WONDERBREAD:** A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks (Wornow et al. 2024, NeurIPS D&B)
    *   **APLUS:** A Python Library for Usefulness Simulations of Machine Learning Models in Healthcare. (Wornow et al. 2023, JBI)
    *   **Standing on FURM Ground:** A Framework for Evaluating Fair, Useful, and Reliable AI Models in Health Care Systems (Callahan et al. 2024, NEJM Catalyst)

## Slide 157: A moment in ML for Healthcare?
*(Image: A smiling emoji head. Followed by a diagram of the MEDS ecosystem.)*
### Diagram: MEDS Ecosystem
-   **Dataset Specific** -> **Extraction Pipeline**
-   **MEDS** (metadata, MEDS-compliant dataset) -> **MEDS-compliant, Model-specific** (User-defined or Public, Semi-Composable Transformation Pipeline)
-   **Model-specific** -> **ML Dataset**, **ML Model**
-   From ML Model:
    -   **MEDICAL EVENT DATA STANDARD (MEDS):** FACILITATING MACHINE LEARNING FOR HEALTH
        -   *MEDS Working Group (Arnrich et al. 2024)*
    -   **MEDS_READER:** A FAST EHR PROCESSING LIBRARY
        -   *Ethan Steinberg et al. 2024*
    -   **MEDS Dynamic Extensible Validation (MEDS-DEV):** Benchmark: Re-thinking Reproducibility and Validation in ML for Health
        -   *Anonymous Authors, K. et al. 2024*

### The MEDS community is building tools and standards for training and evaluating EHR FMs
*(Images of various EHR-related research projects/models: EHRSHOT, YAIB, MIMIC-IV, aumc, GEMINI, eICU Collaborative Research Database. Also shows HuggingFace and StanfordShahLab mentions with links.)*

**Dozens of researchers**
**and institutions**
**across the globe!**

*Arnrich et al. 2024; Kolo et al. 2024; Steinberg et al. 2024; Credit Matthew McDermott and Jason Fries for slide inspiration*

## Slide 158: Future Work
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    **Structured EHR Data**
    *   **EHRSHOT:** An EHR Benchmark for Few-Shot Evaluation of Foundation Models (Wornow et al. 2023, NeurIPS D&B)
    *   **Context Clues:** Evaluating Long Context Models for Clinical Prediction Tasks on EHRs (Wornow et al. 2024, ICLR)

    **Unstructured EHR Data**
    *   **Zero-Shot Clinical Trial Patient Matching with LLMs** (Wornow et al. 2024, NEJM AI)

    **Benchmarking Tools / Community**
    *   **MEDS Ecosystem**
        *   **MEDS:** Facilitating ML for Health (Arnrich et al. 2024, ICLR Workshop)
        *   **MEDS-Reader:** A fast EHR processing library (Steinberg et al. 2024)
        *   **MEDS-DEV:** Establishing Reproducibility and Comparability in ML for Health (Kolo et al., ML4H Demo)
    *   **The Shaky Foundations of LLMs and Foundation Models for EHRs** (Wornow et al. 2023, npj digital medicine)
    *   **A Systematic Review of Testing and Evaluation of Health Care Applications of LLMs** (Bedi et al. 2024, JAMA)

2.  **The underlying workflows impacted by ML models are poorly understood**

    **Workflow Automation**
    *   **Automating the Enterprise with Foundation Models** (Wornow et al. 2024, VLDB)
    *   **Top of the CLASS:** LLM Agents for Real-World Enterprise Tasks (Wornow et al. 2025, ICLR Workshop)

    **Workflow Understanding**
    *   **WONDERBREAD:** A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks (Wornow et al. 2024, NeurIPS D&B)
    *   **APLUS:** A Python Library for Usefulness Simulations of Machine Learning Models in Healthcare. (Wornow et al. 2023, JBI)
    *   **Standing on FURM Ground:** A Framework for Evaluating Fair, Useful, and Reliable AI Models in Health Care Systems (Callahan et al. 2024, NEJM Catalyst)

## Slide 159: Safely integrating ML across the full spectrum of hospital operations
### Chart: Cumulative cost to execute workflow across enterprise ($) vs Workflows
-   X-axis: Workflows (implies a wide range of different workflows)
-   Y-axis: Cumulative cost to execute workflow across enterprise ($)
-   The chart shows a steeply declining curve, suggesting that a few workflows are very costly, while many are less costly.

*Unsubstantiated conjectures based on a small sample size of lived experience*

## Slide 160: Safely integrating ML across the full spectrum of hospital operations
### Chart: Cumulative cost to execute workflow across enterprise ($) vs Workflows (with examples)
-   X-axis: Workflows
-   Y-axis: Cumulative cost to execute workflow across enterprise ($)
-   The declining curve has two labels pointing to the steeper part:
    -   **Taking notes during a patient encounter**
    -   **Coding a patient visit for billing**

*Unsubstantiated conjectures based on a small sample size of lived experience*

## Slide 161: Safely integrating ML across the full spectrum of hospital operations
### Chart: Cumulative cost to execute workflow across enterprise ($) vs Workflows (with more examples)
-   X-axis: Workflows
-   Y-axis: Cumulative cost to execute workflow across enterprise ($)
-   The declining curve has more labels on the flatter, "long tail" part:
    -   **Saving transcribed voicemails to a shared drive**
    -   **Ordering DME for discharged patients**
    -   Several empty thought bubbles with ellipses (...) along the tail.

*Unsubstantiated conjectures based on a small sample size of lived experience*

## Slide 162: Safely integrating ML across the full spectrum of hospital operations
### Chart: Cumulative cost to execute workflow across enterprise ($) vs Workflows (with automation threshold)
-   X-axis: Workflows
-   Y-axis: Cumulative cost to execute workflow across enterprise ($)
-   A dashed horizontal line represents **Minimum cost to justify investing engineering time to automate ($)**.
-   The text below the chart states:
    There’s a **long tail** of healthcare workflows never “**costly enough**” or too difficult
    to fix with limited engineering resources, so they continue to be done **manually**.
-   Examples along the curve include "Taking notes during a patient encounter", "Coding a patient visit for billing", "Saving transcribed voicemails to a shared drive", "Ordering DME for discharged patients", and several empty bubbles.

*Unsubstantiated conjectures based on a small sample size of lived experience*

## Slide 163: Safely integrating ML across the full spectrum of hospital operations
### Chart: Cumulative cost to execute workflow across enterprise ($) vs Workflows (with AI opportunity)
-   X-axis: Workflows
-   Y-axis: Cumulative cost to execute workflow across enterprise ($)
-   A dashed horizontal line representing the minimum cost for automation is present (from previous slide).
-   A large thought bubble appears above the "long tail" section of the curve, containing images of:
    -   A toast character at a computer (WONDERBREAD)
    -   A chocolate éclair character (ECLAIR)
    -   A stylized globe/network (Foundation Models)
-   Text associated with the thought bubble: **that can be improved with AI!**
-   The text from the previous slide about the "long tail" is still present but faded: "There’s a long tail of healthcare workflows never “costly enough” or too difficult to fix with limited engineering resources, so they continue to be done manually."

*Unsubstantiated conjectures based on a small sample size of lived experience*

## Slide 164: Thanks!

## Slide 165: Questions?
1.  **Evaluations are not grounded in real-world clinical data or use cases**

    **Structured EHR Data**
    *   **EHRSHOT:** An EHR Benchmark for Few-Shot Evaluation of Foundation Models (Wornow et al. 2023, NeurIPS D&B)
    *   **Context Clues:** Evaluating Long Context Models for Clinical Prediction Tasks on EHRs (Wornow et al. 2024, ICLR)

    **Unstructured EHR Data**
    *   **Zero-Shot Clinical Trial Patient Matching with LLMs** (Wornow et al. 2024, NEJM AI)

    **Benchmarking Tools / Community**
    *   **MEDS Ecosystem**
        *   **MEDS:** Facilitating ML for Health (Arnrich et al. 2024, ICLR Workshop)
        *   **MEDS-Reader:** A fast EHR processing library (Steinberg et al. 2024)
        *   **MEDS-DEV:** Establishing Reproducibility and Comparability in ML for Health (Kolo et al., ML4H Demo)
    *   **The Shaky Foundations of LLMs and Foundation Models for EHRs** (Wornow et al. 2023, npj digital medicine)
    *   **A Systematic Review of Testing and Evaluation of Health Care Applications of LLMs** (Bedi et al. 2024, JAMA)

2.  **The underlying workflows impacted by ML models are poorly understood**

    **Workflow Automation**
    *   **Automating the Enterprise with Foundation Models** (Wornow et al. 2024, VLDB)
    *   **Top of the CLASS:** LLM Agents for Real-World Enterprise Tasks (Wornow et al. 2025, ICLR Workshop)

    **Workflow Understanding**
    *   **WONDERBREAD:** A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks (Wornow et al. 2024, NeurIPS D&B)
    *   **APLUS:** A Python Library for Usefulness Simulations of Machine Learning Models in Healthcare. (Wornow et al. 2023, JBI)
    *   **Standing on FURM Ground:** A Framework for Evaluating Fair, Useful, and Reliable AI Models in Health Care Systems (Callahan et al. 2024, NEJM Catalyst)