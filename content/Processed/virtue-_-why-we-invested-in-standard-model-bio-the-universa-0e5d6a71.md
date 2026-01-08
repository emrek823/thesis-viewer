---
source_pdf: "https://drive.google.com/file/d/1m7M1dGdx2E9Bn7r3o7zJjhFutOVMJdhO/view?usp=drivesdk"
drive_folder: "Portfolio/Standard Model Bio"
type: portfolio
company: Standard Model Bio
ingested: 2025-12-23
original_filename: "Virtue _ Why We Invested in Standard Model Bio — The Universal Patient Representation.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1m7M1dGdx2E9Bn7r3o7zJjhFutOVMJdhO/view?usp=drivesdk)

# Virtue VC Research Knowledge Base: Why We Invested in Standard Model Bio

**Date:** 12/11/25, 8:32 AM  
**Author:** Virtue VC  
**Source:** [virtuevc.com/writings/why-we-invested-in-standard-model-bio](https://www.virtuevc.com/writings/why-we-invested-in-standard-model-bio)  
**Subject:** Standard Model Bio (SMB) - The Universal Patient Representation

---

## TLDR
Standard Model Bio (SMB) is building multimodal foundational models (FMs) for biopharma and owners of biomedical data (academic medical centers, biobanks, patients, etc). You can learn more about SMB in this *Introducing Standard Model Biomedicine* blog authored by SMB CEO/Co-Founder, Kevin Brown. Virtue led the SMB seed round.

---

## Problem: Biopharma Moving towards Precision Medicine & AMCs Want To Participate, But Data Siloes Limit Scale

Biopharma and AMCs are both moving towards precision medicine with multimodal data, but today that data is fragmented by institution, modality, and therapeutic area. Foundation models offer a shared backbone that lets biopharma and AMCs build together rather than in siloes.

### Biopharma leveraging precision medicine to move beyond low-hanging fruit.
Biopharma is being pushed to move towards precision medicine as they face an “innovation paradox”. A historic patent cliff over the next 5 years will lead to **$200B+ in lost revenue** while R&D productivity continues to decline (**# of new drugs approved per $B in R&D halves every 9 years**). To address the declining ROI of drug development, biopharma has been moving towards precision medicine (63% of approved drugs over the last decade). The first wave in oncology was successful (EGFR, KRAS, ALK, PD-1/PD-L1, etc) but future growth requires expansion to other data modalities and therapeutic areas.

### AMCs have a history of participating in data partnerships, but engagement is limited and bespoke today.
Over the last 10+ years, partnerships between AMCs and biopharma have shown the initial value of leveraging data to drive drug development.

*   **2014:** Regeneron and Geisinger partnered on a DNA sequencing collaboration.
*   **2016:** Prometheus spun-off from Cedars before being acquired by Merck for $11B.
*   **2016:** Vanderbilt selected by the NIH to lead the Data and Research Support Center for the Precision Medicine Initiative Cohort Program (now ‘All of Us’) and launched NashBio two years later.
*   **2023:** Culmination Bio launched out of Intermountain to develop a disease-independent patient data intelligence platform.
*   **Other notable work:** Roche’s work with Flatiron (community oncology) and FMI (focused on AMCs), nference’s work with the Mayo Clinic platform, and Tempus’ rich molecular data.

Despite these examples, scaling across more data types and therapeutic areas is needed.

### Data siloes limit performance
The US lacks UK Biobank scale data networks. Biomedicine remains siloed: cancer care is divided into sub-specialties, AI researchers focus on narrow models (e.g., image segmentation in thoracic cancers vs. genomic sequences in epilepsy), and biopharma has deep expertise in specific indications. Scaling requires multimodal, cross-therapeutic, and inter-organizational data.

### Multimodal FMs can help solve these challenges
Foundation Models (FMs) deliver better predictive accuracy, reliability across sites, and adaptability across tasks and applications. However, talent for building biomedical foundation model infra is scarce. Teams require expertise in:
1. Training foundation models at scale.
2. Experience with different data modalities (imaging, ‘omics, radiology, EMR, etc).
3. Biopharma domain expertise.

---

## Enter Standard Model Bio

Standard Model Bio builds multimodal foundation models (’omics, radiology, pathology, EHRs, etc) for biopharma and owners of biomedical data. SMB’s mission is to serve as the "quiet backbone" of biomedical AI, providing a compressed representation of human biomedical data via API or a fine-tunable model.

### Chart: The Standard Model Downstream Applications
*Based on the diagram on Page 3.*

| Node | Task / Application |
| :--- | :--- |
| Central Model | **Standard Model** |
| Outbound Link 1 | DECISION SUPPORT |
| Outbound Link 2 | HYBRID DIGITAL/MOLECULAR TX |
| Outbound Link 3 | NOVEL VARIATIONS |
| Outbound Link 4 | NOVEL ENDPOINTS |
| Outbound Link 5 | PATIENT SCREENING |
| Outbound Link 6 | DIGITAL TWINS |

Downstream domain experts tune this model toward tasks such as:
*   Clinical trial recruitment
*   Line-of-therapy transfer prediction for commercial arms of biopharma
*   Predictive models for treatment selection (and companion diagnostics)
*   Digital twins via time-to-progression prognostic models
*   Patient data validation for real-world evidence companies
*   Image segmentation models for surgical preparation

*SMB does not focus on protein/molecular design or chemistry.* It focuses on patient outcomes: **"What is the likely course & outcome of disease for this individual patient?"**

---

## Team: Highly Concentrated Density Across Bio-Data-AI

*   **Kevin Brown (CEO):** Previously led oncology foundation model development at Bristol Myers Squibb and federated learning R&D at Siemens Healthineers. Research spans medical imaging FMs and LLMs for clinical outcome prediction.
*   **Zekai Chen (Multimodal/Time-series ML):** Previously built foundation models at JPMorganChase and Bristol Myers Squibb. Research on graph learning, adaptive sharing, and drift-aware Transformers.
*   **Arda Pekis (Medical imaging & VLMs):** Focuses on high-resolution medical vision (e.g., 3-D breast MRI segmentation).
*   **Shaun Porwal (Clinical utility & stats tooling):** Built stats/ML pipelines at Memorial Sloan Kettering (MSK); open-sourced the `dcurves` library (>32k downloads).
*   **David Laub (Genomics):** UC San Diego bioinformatics PhD. Work on EUGENe (deep-learning toolkit) and GenVarLoader (memory-mapped data loader).
*   **David Laprade (Distributed Systems at Scale):** Biologist and former software engineer at Stripe; invented a distributed computing algorithm for a system moving >$1B/month.
*   **Irsyad Adam (Multi-modal Graphs):** Previously built multi-modal AI pipelines for Genentech and AbbVie; created KG-LLM architectures for diagnosis and biomarker selection.
*   **Erik Reinertsen (Product & Partnerships):** Previously led data science at Prometheus Biosciences (through IPO to $10.8B acquisition by Merck).

---

## Tech: Demonstrating Model Capabilities Across Diverse Data Types

### Chart: Holistic Model Architecture
*Based on the diagram on Page 5.*

| Input Layer | Encoder Layer | Processing Layer | Output |
| :--- | :--- | :--- | :--- |
| **Patient Records** (CT, Pathology, MRI, DNA, EHR) | CT Encoder, Pathology Encoder, MRI Encoder, Arbitrary Encoder | Connectors -> **LLM** | Task (e.g., prognosis, treatment selection) |

### Recent Research Papers

#### 1. GenVarFormer: Predicting Gene Expression From Long-Range Mutations in Cancer
*Extracting data from flow diagram:*
*   **Input 1:** Mutations ({ALT: G, ILEN: -1, VAF: 0.3}) -> Mutation Encoder -> Embeddings.
*   **Input 2:** Flanking DNA (...ACGT...) -> CNN -> Gene Adapter -> Embeddings.
*   **Input 3:** Gene Embedding (Borzoi) -> Gene Adapter -> Embeddings.
*   **Core:** Embeddings + Mutation Positions -> **Transformer** -> **Gene expression (1.2)**.

#### 2. Patient-Specific Biomolecular Instruction Tuning of Graph-LLMs (KRONOS)
*Extracting data from flow diagram:*
*   **Inputs:** Molecular Interaction Network (Topology) + Patient-Specific Proteomics (Node Features).
*   **Tuning:** Patient-Specific Molecular Networks -> GNN Connector: Graph Embedding.
*   **Language Interface:** Patient Queries (e.g., "What is the risk of mortality?") -> Tokenizer -> Word Embedding.
*   **Model:** LLM f(x).
*   **Output:** Biomolecule Instruction Tuning (e.g., "Potential drug targets that are differentially expressed are...", "patient has a __% risk of mortality").

#### 3. Building the EHR Foundation Model via Next Event Prediction (NEP)
*Extracting data from flow diagram on Page 6:*
*   **Data & Tasks:** Diagnosis, lab test, medication, procedure, vital sign, mortality, etc.
*   **Input Context:** Subject_id: XXX001 (JSON) containing demographics, history (Mantle cell lymphoma, Hypertension), and labs (Red Blood Cell Count, White Blood Cell Count).
*   **Question:** "Based on the patient's medical history, what diagnoses are likely to be identified during their next visit within {timeframe}?"
*   **Targets:** Mantle cell lymphoma; rituximab 648 mg; Hematocrit 33.7%.
*   **Flow:** EHR Data -> JSON -> LLM -> Embeddings -> Classifier.

---

## Vision For An Integrated Future

Biology and medicine are multimodal across several axes:
*   **Molecular-level:** Whole-genome sequencing, transcriptomics, proteomics.
*   **Cell-level:** CRISPR perturbation screens, “virtual cell” representations.
*   **Tissue-level:** Digital pathology and spatial transcriptomics.
*   **Organ-level:** CT scans, ECGs, EEGs.
*   **Patient-level:** Longitudinal EMRs and human activity data from wearables.

**The Core Belief:** The era of mere data aggregation and re-selling is over. Value must be delivered to data originators to earn the right to leverage data for novel downstream use cases. Unlike bespoke point solutions, Foundation Models (FMs) are extensible and can surpass performance thresholds needed for real clinical impact.

---

## Next Steps
Standard Model Bio (SMB) is looking for partners and talent:
*   **Biopharma/Data Sources:** Reach out via [link].
*   **Technical Talent:** Reach out via [link].
*   **Follow SMB:** [LinkedIn](https://www.linkedin.com), [X](https://x.com), and [Substack](https://substack.com).

*The foundation is being laid for the future of biomedical research and drug development, one datapoint at a time.*

---
*Document Page: 8/8*