---
source_pdf: "https://drive.google.com/file/d/1sN1fVk9yAP3xE9_lZGi_IEej9toZazSY/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Synthetic Data 2.0 (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1sN1fVk9yAP3xE9_lZGi_IEej9toZazSY/view)

# Synthetic Data 2.0: Rethinking What's Possible in Healthcare
Ofer Mendelevitch
Friday, April 8, 2022

Innovators in markets such as self-driving cars and fraud detection are increasingly relying on synthetic data. Yet, adoption of synthetic data in healthcare has lagged, despite the tremendous need for data access. Healthcare data is perhaps the most complex type of data, with tens of thousands of data elements likely to exist in a patient's electronic health record. Synthetic data technology to-date has been limited in both scope and performance, unable to capture this complexity, and leading to slow uptake.

Until now.

Syntegra is taking a completely new approach to synthetic data generation that transforms its potential for use in advancing data-driven innovation in medicine, moving towards a goal of true synthetic real-world data (sRWD).

## History of Synthetic Data

Early synthetic data generation approaches commonly used rules-based approaches. Using a list of rules, often curated by domain experts, these pioneers built software to generate synthetic data that mimics real data on the basis of these rules. Rules-based approaches provided a simple generation mechanism yet suffered from low accuracy since they did not reflect the statistical properties of any real data, only the curated opinion of those domain experts.

More recently, generative adversarial networks (GANs) have been shown to provide good performance in generating synthetic data for images or video, and they have been adapted for use with simple, tabular data. Although GANs are notoriously difficult to train successfully, they nonetheless received tremendous attention in the academic community, and recent research continues to improve upon them.

In healthcare, it has long been recognized that synthetic healthcare data — done right — holds incredible utility to enable research and collaboration without compromising patient privacy. Algorithms based on GAN, such as CTGAN, CorGAN or MedGAN, have been used with mixed success to produce table-based, synthetic healthcare data.

## Why Creating Synthetic Healthcare Data is Difficult

But challenges remain despite these technological advancements. All of these methods assume that healthcare data is stored as a single table, but in reality, it is much more complex. Take the commonly used OMOP data format, for example. It contains more than 35 tables (figure 1) that include full longitudinal data about each patient: demographics, diagnosis codes, lab results, drugs, etc.

## Figure 1: OMOP common data models

```
Standardized clinical data
├── Person
│   ├── Observation_period
│   └── Visit_occurrence
│       ├── Visit_detail
│       ├── Condition_occurrence
│       ├── Drug_exposure
│       ├── Procedure_occurrence
│       ├── Device_exposure
│       ├── Measurement
│       ├── Note
│       ├── Note_NLP
│       ├── Survey_conduct
│       ├── Observation
│       ├── Specimen
│       └── Fact_relationship
│
├── Standardized health system data
│   ├── Location
│   ├── Location_history
│   ├── Care_site
│   └── Provider
│
├── Standardized derived elements
│   ├── Condition_era
│   ├── Drug_era
│   └── Dose_era
│
├── Results schema
│   ├── Cohort
│   └── Cohort_definition
│
├── Standardized health economics
│   ├── Cost
│   └── Payer_plan_period
│
├── Standardized metadata
│   ├── CDM_source
│   └── Metadata
│
└── Standardized vocabularies
    ├── Concept
    ├── Vocabulary
    ├── Domain
    ├── Concept_class
    ├── Concept_relationship
    ├── Relationship
    ├── Concept_synonym
    ├── Concept_ancestor
    ├── Source_to_concept_map
    └── Drug_strength
```

This is the case for all data formats used in healthcare, whether it's OMOP, PCORNet, ACT, simply a dump of EPIC or Cerner tables, or claims data.

Early statistical methods and the more recent GAN-based approaches can generate synthetic data for each individual table, but they incorrectly assume each patient record is represented by a single row in this table. As a result, a significant pre-processing effort tailored to specific problems is required ahead of synthetic data generation to select the variables of interest for each patient.

Thus, we end up with some major limitations for table-based approaches:

1.  **Preselection:** To convert the multitude of tables (conditions, drugs, labs, etc.) into a single table, pre-selection of clinical variables is required; for example, a researcher may choose 5 diagnoses, 20 lab results and 10 drugs and convert the source data into 35 columns. This results in synthetic data that is limited in use and fits a very specific research problem.
2.  **Longitudinality:** The flat, single-table format eliminates the temporal aspect of longitudinal healthcare data and the ability to track historical trends over time, such as the causal relationship between a diagnosis of cardiovascular disease and cholesterol lowering medication, or the periodicity of breast cancer checkups.

## Rethinking what's possible

Today, these limitations are no longer a barrier for expanding the use of synthetic data. Syntegra's technology represents "synthetic data 2.0," created with a novel solution utilizing advanced language models that revolutionizes synthetic data generation for healthcare.

| Synthetic Data 1.0          | VS. | Synthetic Data 2.0                     |
| :-------------------------- | --- | :------------------------------------- |
| - Table-based data          |     | ✓ Temporal longitudinal data           |
| - Cohort-based scale        |     | ✓ Full scale + dense medical history   |
| - Specified variables       |     | ✓ Generates all variables of interest  |
| - Limited fidelity          |     | ✓ Multivariate accuracy                |

Syntegra first translates patient records from the customer common data model into "patient trajectories," maintaining the full longitudinal detail of each record.

**Patient Trajectories**

*   **Patient 1:** Demogr. -> Condition -> Lab -> Lab -> Drug -> Condition
*   **Patient 2:** (Longer sequence of various events)
*   **Patient 3:** (Another sequence of various events)

Using large-scale, transformer-based language models, the ever-growing Syntegra Medical Mind learns the multivariate, longitudinal, granular distribution of the underlying data. The resulting synthetic patient records generated by the model thus maintain this complex, longitudinal structure and are subsequently translated back into the original format, maintaining full compatibility with the source data format.

## A Case Study in Working with Complex, Longitudinal Data

Some of our recent work includes generating a synthetic version of community hospital data with the Institute for Health Metrics, an existing provider of real-world data used by life sciences companies to produce the real-world evidence needed to drive forward the development of new patient treatments.

Through our generative approach, we recreated the entire structure of the data with complete accuracy and without losing the longitudinal form and temporal statistical properties. Additionally, the resulting synthetic data is [now available](https://aws.amazon.com/marketplace/pp/prodview-sy22tkkv65b6e?sr=0-1&ref_=beagle&applicationId=AWSMP) on the Amazon Marketplace. This data can be particularly valuable for digital health companies in need of high-quality, patient-level data for product development, model training and testing, and more, without the privacy risk and cost typically associated with working with patient data.

## Towards Synthetic Real-World Data

Healthcare data is complex and dense. Furthermore, some of its most difficult aspects to capture — e.g., the longitudinal and temporal dependencies — are critical to many use cases, in particular in the RWD/RWE space. As such, early attempts to generate synthetic healthcare data, utilizing GANs and other approaches to synthesize simple tabular data, fail to capture these critical elements and thus have not yet been able to be recognized as a true source of real-world evidence.

Through our synthetic data 2.0 approach, capturing full multivariate and temporal detail, Syntegra is driving towards a reality of synthetic real-world data, enabling a world in which high-quality, high-value healthcare data can be easily shared, used in cloud-based environments and with modern data analysis tools, and generated for purpose without limits to population size or make-up. We believe this ability finally solves the data barriers that have kept healthcare innovation from truly embracing a data-centric and data-driven approach within life sciences and have slowed the growth and traction for the recent explosion of digital health companies.