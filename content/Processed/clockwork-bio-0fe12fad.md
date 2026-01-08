---
source_pdf: "https://drive.google.com/file/d/1ZU8e6n7eU30we4Jhm8D1__A_suuQ3NSc/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Clockwork Bio.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1ZU8e6n7eU30we4Jhm8D1__A_suuQ3NSc/view)

## Slide 1: CLOCKWORK BIO
CLOCKWORK BIO
Decoding the mechanisms of cancer

## Slide 2: Mission Statement
Our mission is to industrialize the production of mechanism dense data targeting oncology

## Slide 3: The cost of drug development is increasing In particular for oncology

### Cost to sequence a human genome (USD)
| Year | Cost (USD) |
| :--- | :--------- |
| 2001 | $100,000,000 |
| 2003 | $10,000,000 |
| 2005 | $1,000,000 |
| 2007 | $100,000 |
| 2009 | $10,000 |
| 2011 | $1,000 |
| 2013 | $1,000 |
| 2015 | $1,000 |
| 2017 | $1,000 |
| 2019 | $100 |
| 2021 | $100 |

Source: National Human Genome Research Institute

### EROOM'S LAW
*Number of drugs per billion US$ R&D spending*

| Year | Number of drugs |
| :--- | :-------------- |
| 1950 | 100             |
| 1960 | 30              |
| 1970 | 20              |
| 1980 | 10              |
| 1990 | 5               |
| 2000 | 2               |
| 2010 | 1               |

Scannell et al., Nature Reviews Drug Discovery 11:191, 2012

### Return on Investment in Biopharma R&D
Adapted from Stott 2017

| Year | Return on Investment (%) |
| :--- | :--------------------- |
| 1990 | ~25                    |
| 1992 | ~22                    |
| 1994 | ~20                    |
| 1996 | ~18                    |
| 1998 | ~16                    |
| 2000 | ~14                    |
| 2002 | ~12                    |
| 2004 | ~10                    |
| 2006 | ~8                     |
| 2008 | ~7                     |
| 2010 | ~6                     |
| 2012 | ~5                     |
| 2014 | ~4                     |
| 2016 | ~3                     |
| 2018 | ~2.5                   |
| 2020 | ~2                     |
| 2022 | ~1.2                   |

*   Stott's Historical Analysis
*   Deloitte 2023
*   BCG 2016
*   Imputed Trendline

https://www.linkedin.com/pulse/pharmas-broken-business-model-industry-brink-terminal-kelvin-stott/

### Probability of Success² by Clinical Trial Phase and Therapeutic Area

| Therapeutic Area            | P1 to P2 | P2 to P3 | P3 to Approval | Overall |
| :-------------------------- | :------- | :------- | :------------- | :------ |
| Oncology                    | 57.6     | 32.7     | 35.5           | 3.4     |
| Metabolic/Endocrinology     | 76.2     | 59.7     | 51.6           | 19.6    |
| Cardiovascular              | 73.3     | 65.7     | 62.2           | 25.5    |
| Central Nervous System      | 73.2     | 51.9     | 51.1           | 15.0    |
| Autoimmune/Inflammation     | 69.8     | 45.7     | 63.7           | 15.1    |
| Genitourinary               | 68.7     | 57.1     | 66.5           | 21.6    |
| Infectious Disease          | 70.1     | 58.3     | 75.3           | 25.2    |
| Ophthalmology               | 87.1     | 60.7     | 74.9           | 32.6    |
| Vaccines (Infectious Disease) | 76.8     | 58.2     | 85.4           | 33.4    |
| Overall                     | 66.4     | 48.6     | 59.0           | 13.8    |
| Overall (Excluding Oncology) | 73.0     | 55.7     | 63.6           | 20.9    |

Chi Heem Wong, Kien Wei Siah, Andrew W Lo. "Estimation of clinical trial success rates and related parameters." Biostatistics 20(2): April 2019

## Slide 4: Lack of mechanism dense data is handicapping oncology drug development ...

Industry is mining the same,
mechanism-sparse datasets

*   **uk biobank**
    *   Enabling scientific discoveries that improve human health
*   **CCLE**
    *   Cancer Cell Line Encyclopedia
*   **FINNGEN**
*   **TEMPUS**
*   **NIH**
    *   NATIONAL CANCER INSTITUTE
    *   Genomic Data Commons

Which span a small subset of the full
diversity of cancer subtypes and variants

Diagram content:
*   Extrinsic factors -> Paracrine signaling, Cell stemness, EMT/cell plasticity, Cell migration/invasion, Epigenetic changes, Genetic aberrations, Proteomic variations, Metabolic alterations, Immunosuppression
*   Intrinsic factors -> Genetic aberrations, Epigenetic changes, Proteomic variations, Metabolic alterations, Immunosuppression
*   Central element: Tumor heterogeneity

Bullet points:
*   Cancer isn't a single disease but rather an umbrella term encompassing various subtypes that differ greatly in their biology
*   Most drugs target unknown pathways and subtypes
*   Within the same tumor epigenetic changes, unique mutations, and extracellular interactions make treatment resistant to single therapies

Source: Lüönd, F., Tiede, S. & Christofori, G. Breast cancer as an example of tumour heterogeneity and tumour cell plasticity during malignant progression. Br J Cancer 125, 164–175 (2021). https://doi.org/10.1038/s41416-021-01328-7

## Slide 5: ... driven by a gap in the oncology data generation landscape

### Cell Level Pairwise relationships
*   F → C1
*   F → C2
*   F → C1 (CTFR:23x22 Reduces effect)
*   F → C2

### Relationships to pathways
*   Macrophage-Fibroblast Circuit with CAV at xxx
*   Diagram shows: F, C2, M, Carrying Capacity, C1, -I(t), Φ

### Pathway to cell state
*   Images of cells in different states

### Cell states to biomarker
*   Images of cell pathology

### Biomarker to patient segment
*   Images of patient cohorts

Horizontal arrow labeled: Translation from In-Vitro to Clinical

Below the arrow:
*   Ad-hoc research with limited scale (marked with a red X)
*   Clinical Biopsy + Samples
*   Cellular Imaging
*   Medical Imaging
*   In-Vitro Cellular models [foundation models]
*   Public Biobanks (UKBB, etc.)
*   Patient Samples
*   Biomarker Analysis

## Slide 6: Slow (ad-hoc) data generation equates to decades to learn novel pathways

**Immune checkpoint pathway estimated at $15-20B USD**
*   Pembrolizumab (Keytruda) – US annual sales ≈ $6.5 B
*   Nivolumab (Opdivo) – US annual sales ≈ $5 B (estimate)
*   Ipilimumab (Yervoy) – US annual sales ≈ $800 M
*   Atezolizumab (Tecentriq) – US annual sales ≈ $1.5 B
*   Durvalumab (Imfinzi) – US annual sales ≈ $800 M

Timeline:
*   **1980's-90's**
    *   Discovery of CTLA-4 as an immune brake
*   **1992-2000**
    *   non-specific immune stimulation failures
    *   + tens of thousands of additional failed experiments
    *   Discovery of PD-1 and its role in cancer
*   **2011**
    *   Increasing mapping of tumor antigens
    *   mapping of immune system regulatory mechanisms
    *   Development of drugs to target PD-1/PD-L1
    *   Ipilimumab approved for advanced melanoma
*   **2025**

## Slide 7: Leading to increasing demand for mechanism dense data assets, now

The oncology data market is expected to be $4.77 billion by 2032 [source](https://www.grandviewresearch.com/industry-analysis/oncology-data-market)

| Acquiring Company                          | Data Provider Company       | Deal Value                                                      | Primary Data Type/Focus                     | Key Strategic Rationale                                                                     |
| :----------------------------------------- | :-------------------------- | :-------------------------------------------------------------- | :------------------------------------------ | :------------------------------------------------------------------------------------------ |
| AstraZeneca (similar deals with GSK and many others) | Tempus AI (with Pathos AI)  | $200M upfront (data licensing & AI model development fees)      | De-identified oncology data, AI model development | Accelerate cancer drug discovery with multimodal deep learning model                      |
| Roche                                      | Flatiron Health             | $1.9 billion acquisition                                        | Real-World Data (RWD) from oncology EHRs    | Enhance RWE capabilities, accelerate cancer treatment development                         |
| GSK                                        | Relation Therapeutics       | $45M upfront; up to $63M collaboration payments                 | Fibrotic diseases, oncology, Osteoarthritis | Identification and validation of novel therapeutic targets                                |
| Merck                                      | Caris Life Sciences         | Up to $1.4B with milestones                                     | Oncology (ADCs)                             | Discover and validate novel cancer targets for first-in-class ADC development.          |
| Sanofi                                     | Exscientia                  | $100M upfront; up to $5.2B with milestones + royalties          | Oncology, Immunology                        | Identify and select up to 15 novel small molecule targets                                   |
| Eli Lilly                                  | Isomorphic Labs             | $45M upfront; up to $1.7B with milestones                       | Multiple areas                              | Discover novel therapies against multiple targets.                                          |
| Novartis                                   | Isomorphic Labs             | $37.5M upfront; up to $1.2B with milestones                     | Multiple areas                              | Discover novel therapies against multiple targets.                                          |

## Slide 8: We've developed AI Native LITL systems that can learn mechanisms at scale

Diagram flow:
1.  Edit Cell lines ->
2.  Grow new Cells ->
3.  Sequencing / Imaging / Omics ->
4.  Measure Cell State ->
5.  Update / eliminate Pathway Hypotheses <-
6.  Predict Edits to minimize uncertainty <-

Table:
**We've achieved this** / **There's evidence we can achieve this**

|                  | Ad-Hoc | LITL (SOTA today) | LITL: Production |
| :--------------- | :----- | :---------------- | :--------------- |
| Permutations / Month | 200    | 10,000            | 100,000          |
| 96 Well Plates Run | 10's   | 200-1000          | 10,000           |
| Headcount / time to complete | 50+ / 4 years | 100 / 10 months | 400 / 10 months  |

In a pilot comparing M1 to M2 Macrophages we:
*   Correctly predict 18% and 13% of expressed transcripts in M1 and M2 Macrophages, respectively
*   Identified 3 uncharacterized molecules associated with macrophage polarization
*   Mapped dozens of unique RNA-RNA pairwise relationships (edges in a pathway)
*   Established a foundation model capable of predicting macrophage transcriptomics activity based on stimuli with better than random odds (notably given the low number of cycles)

Publication: https://arxiv.org/pdf/2306.09391v3

## Slide 9: In practice this means we can generate datasets elludicating specific cellular mechanisms ... For on demand hypothesis validation and target qualification

Process flow around the Clockwork Bio logo:

*   I'd like to learn the known mechanisms that convert CAFs (cancer associated fibroblasts) to pan-dCAFs, and what are the hypotheses for how it might be reversed?
*   **Generate Research Plan**
    *   Design hypotheses
    *   Identify potential cell models
    *   Design experiments
    *   Estimate Research Plan budget
    *   Get Approval
*   Augment external data and data with AI Services
*   Assess data for information gaps
*   Build an experimental plan
*   Send data to experimental providers
*   Ingest experimental outputs
*   Update and re-train models
*   Generate novel Hypotheses
*   Qualify and score hypotheses
*   **Review Research Plan**
    *   Design hypotheses
    *   Identify potential cell models
    *   Design experiments
    *   Estimate Research Plan budget
    *   Get Approval

## Slide 10: Effectively closing the gap in oncology data generation ... And suggesting a direct route from assay to clinic

### Cell Level Pairwise relationships
*   F → C1
*   F → C2
*   F → C1 (CTFR:23x22 Reduces effect)
*   F → C2

### Relationships to pathways
*   Macrophage-Fibroblast Circuit with CAV at xxx
*   Diagram shows: F, C2, M, Carrying Capacity, C1, -I(t), Φ

### Pathway to cell state
*   Images of cells in different states

### Cell states to biomarker
*   Images of cell pathology

### Biomarker to patient segment
*   Images of patient cohorts

Horizontal arrow labeled: Translation from In-Vitro to Clinical

Below the arrow:
*   [Clockwork Bio logo]
*   Clinical Biopsy + Samples
*   Cellular Imaging
*   Medical Imaging
*   In-Vitro Cellular models [foundation models]
*   Public Biobanks (UKBB, etc.)
*   Patient Samples
*   Biomarker Analysis

## Slide 11: Commercialization: 4 avenues for early revenue

### Data and Platform as a Service
*   Proprietary, mechanism-rich data assets
*   Scientist-facing tools for visualizing and analyzing data
*   LLM / Agent interfaces for easy interrogation and integration
*   Available on a license basis
*   Compare e.g. Tempus model
*   Two initial datasets:
    *   CAF reversion in Triple Negative Breast Cancer
    *   TBD with early partner

### Target Qualification Services
*   Robust, reproducible qualification of customer's pre-identified biological targets using the ClockworkBio platform
*   Mechanism for building early revenue
*   Ideal path to build trust with customers as foundation for more comprehensive (and lucrative) partnered discovery programs
*   Compare e.g. Relation

### Partnered Discovery Programs
*   Leverage the ClockworkBio platform to de-risk and accelerate discovery in a specific disease area
*   Compare e.g. Insitro model (up-front payments + milestones + downstream royalties)

### Biomarker Development
*   Cellular Mechanisms derived biomarker models for patient risk profiles and trial segmentation
*   Scientist-facing tools that leverage imaging or patient samples for visualizing and analyzing data patient cohorts
*   Cohort segmentation models for clinical trials
*   Compare to: SomaLogic / Novartis partnership

## Slide 12: Targeting an $8B TAM

|                | PaaS                          | DaaS                       | Target Qualification               | Biomarkers                          |
| :------------- | :---------------------------- | :------------------------- | :--------------------------------- | :---------------------------------- |
| Relevant Market Definition | Computational Oncology Software | High-Value R&D Data Licensing | Preclinical Target Validation Services | Oncology Biomarker Discovery Services |
| Estimated TAM (2024) | $1.71 Billion                 | $2.1 Billion               | $1.1 Billion                       | $4.8 Billion                        |
| Market Growth Rate (CAGR) | ~13-17%                       | ~13%                       | ~8-13%                             | ~12-19%                             |
| Key Market Drivers | AI/ML Integration, Data Volume, Cloud Adoption | Need for Multi-Modal Data, R&D Focus | R&D Externalization, Need to De-Risk Early Assets | Precision Medicine, Targeted Therapy Development |

Note that in later stages when we can advance targets directly we'd be able to access the $600B oncology data market directly

## Slide 13: Building out the LITL platform through three phases

Timeline:

**Q2 2027: Build LITL platform**
*   Generate 2 commercially viable data assets
*   Platform able to scale to 5-10 data assets per year
*   Launch Target Qualification business
*   Launch commercial data asset business

**6 Months: LITL platform live with external CRO's** (pointing from Q2 2027)

**EOY 2028: Add automated lab environment and E2E mechanism to clinical data capabilities**
*   Capacity to generate hundreds of datasets per year
*   PAAS for novel dataset generation
*   TQAAS mature and potentially self serve
*   AI Cell State engineering as a service
*   Biomarkers as a service

**15 Months: Internal data capacity live and scaling select oncology data assets** (pointing from EOY 2028)

**24 Months: parallelized data generation** (pointing from 15 Months)

**2029 Onward: Scale and Commercialize**
*   Scale data operations and commercialize data, platform.
*   Options to take targets to market directly or through partnerships

## Slide 14: We know how to build this.

### Shane Lewin
**CEO**
*   VP, AIML at GSK.
*   20 years experience building AI organizations across 5 industries
*   Built and led the pre-clinical AIML organization at GSK (from 10-70), delivering > 30 successful programs with measurable pipeline impact, including 4 successful EITL systems and a novel modality platform
*   MS, Computational and Mathematical Engineering (ICME), Stanford

### Nick Peterson
**CTO**
*   Former VP, Onyx Data Platform at GSK.
*   Built and led GSK's Onyx scientific data + AI platforms organization from the ground up to ≈200 people and scaled impact
*   11 years experience building data / AI platforms and algorithms across healthcare, video games, and pharma
*   PhD in Mathematics focused on scaled probabilistic networks

## Slide 15: Let's work to cure cancer together

### Raising $5M Seed round to build v1 of the LITL platform

### Goal
Build out a functioning (commercially viable) LITL platform ready to scale up AI, wetlab, and data normalization capabilities

### Milestones
*   **0-6 Months:** LITL prototype live. Hire 4 engineers. AI library spanning MVP services. Ingested 20+ data sources.
*   **6-12 Months:** Operational LITL platform for single cell analysis. Integrated multi-omics and imaging data. Phenomics and next assay models SOTA. Team to 10 engineers. Key hire: CSO (chief science officer accountable for biology reviews)
*   **12-24 Months:** Fully running LITL platform ready to scale up data operations. Expansive AI library. Platform has rediscovered 2-3 known oncogenes (HER2, BRCA, etc.) and we're ready to go after novel pathways.