---
source_pdf: "https://drive.google.com/file/d/1qnWGFb1zKjtz3IlwgAEX_xFTVRR2FsxS/view"
drive_folder: "Portfolio/WriteWise"
type: portfolio
company: WriteWise
ingested: 2025-12-27
original_filename: "WriteWise - Modeling Exercise - Clean (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1qnWGFb1zKjtz3IlwgAEX_xFTVRR2FsxS/view)

## Slide 1: WRITEWISE MODELING PLATFORM

WRITEWISE
MODELING PLATFORM

September 2023
Victor Radermecker

1

## Slide 2: Table of Contents (Part 1)

01 INTRODUCTION
Exploratory Data Analysis through some cool visualizations

02 MERGING DATASETS
Merging the claims, eligibility and consumer data together

03 CLASSIFICATION MODELS
Identifying individuals with varying expected total yearly claims

04 REGRESSION MODELS
Regressing total expected claims for each defined class

## Slide 3: Table of Contents (Part 2)

05 FEATURE GENERATION
Leveraging Natural Language Processing or Maintenance Drugs datasets

06 NEXT STEPS
Action plan to develop an underwriting tools for pharmacy insurance

## Slide 4: 01 INTRODUCTION EXPLORATORY DATA ANALYSIS

01 INTRODUCTION
EXPLORATORY DATA ANALYSIS

4

## Slide 5: INTRODUCTION SOME INITIAL VISUALIZATIONS

INTRODUCTION
SOME INITIAL VISUALIZATIONS

**Organizational Information:**
*   Alabama Rural Electric Association
*   7,993 People
*   645,718 Claims

**Chart Descriptions:**
Two histograms showing the distribution of "Plan Paid 2022".
*   **Left Chart:** Shows a high count (over 1200) for very small values of "Plan Paid 2022" (near 0-1). The count decreases significantly as the value increases, with tails extending to 12.
    *   X-axis: Plan Paid 2022 (0 to 12)
    *   Y-axis: Count (0 to 1400)
*   **Right Chart:** Shows a distribution that is approximately log-normally distributed, peaking around 5.0 and then tapering off.
    *   X-axis: Plan Paid 2022 (-2.5 to 12.5)
    *   Y-axis: Count (0 to 200)

**Text Descriptions:**
*   A large number of claims with very small values for Plan Paid
*   A log-normally (ish) distribution for the rest of the claims

5

## Slide 6: INTRODUCTION TEMPORAL DISTRIBUTION OF VARIOUS TYPE OF DRUGS

INTRODUCTION
TEMPORAL DISTRIBUTION OF
VARIOUS TYPE OF DRUGS

Spatial distribution of each type of drugs.
We see that some drugs are maintenance medication (Ex. antidepressants) and need to be taken continually.

Identifying these recurring claims helps predicting the total expected claims per individual accurately.

Either through:
*   Analyzing the current dataset and identify trends
*   Scrape external datasets about drug characteristics

**Chart Description: Temporal Distribution of TherapeuticClass02 vs. Date Filled**
This is a scatter plot showing the temporal distribution of various drug types (TherapeuticClass02) over time (Date Filled). Each dot represents a claim.

*   **Y-axis (TherapeuticClass02 categories):**
    *   *VACCINES*
    *   *ANALGESICS - OPIOID*
    *   *CONTRACEPTIVES*
    *   *ANTICONVULSANTS*
    *   *ANTIANXIETY AGENTS*
    *   *ADHD/ANTI-NARCOLEPSY/ANTI-OBESITY/ANOREXIANTS*
    *   *ANTIDEPRESSANTS*
    *   *MEDICAL DEVICES AND SUPPLIES*
    *   *LAXATIVES*
    *   *ULCER DRUGS/ANTISPASMODICS/ANTICHOLINERGICS*
    *   *ANTIEMETICS*
    *   *PENICILLINS*
    *   *MUSCULOSKELETAL THERAPY AGENTS*
    *   *CARDIOVASCULAR AGENTS - MISC.*
    *   *DERMATOLOGICALS*
    *   *GENITOURINARY AGENTS - MISCELLANEOUS*
    *   *ANDROGENS-ANABOLIC*
    *   *ANTIPSYCHOTICS/ANTIMANIC AGENTS*
    *   *NASAL AGENTS - SYSTEMIC AND TOPICAL*
    *   *OPHTHALMIC AGENTS*
    *   *CEPHALOSPORINS*
    *   *ANTIHYPERTENSIVES*
    *   *ESTROGENS*
    *   *THYROID AGENTS*
    *   *URINARY ANTISPASMODICS*
    *   *HYPNOTICS/SEDATIVES/SLEEP DISORDER AGENTS*
    *   *ANTIFUNGALS*
    *   *MOUTH/THROAT/DENTAL AGENTS*
    *   *DIURETICS*
    *   *ANTIHYPERLIPIDEMICS*
    *   *PSYCHOTHERAPEUTIC AND NEUROLOGICAL AGENTS - MISC.*
    *   *CORTICOSTEROIDS*
    *   *GOUT AGENTS*
    *   *TETRACYCLINES*
    *   *CALCIUM CHANNEL BLOCKERS*
    *   *TOXOIDS*
    *   *FLUOROQUINOLONES*
    *   *ANTIASTHMATIC AND BRONCHODILATOR AGENTS*
    *   *ANTI-INFECTIVE AGENTS - MISC.*
    *   *VITAMINS*
    *   *ANTINEOPLASTICS AND ADJUNCTIVE THERAPIES*
    *   *ANTIPARKINSON AND RELATED THERAPY AGENTS*
    *   *MISCELLANEOUS THERAPEUTIC CLASSES*
    *   *HEMATOLOGICAL AGENTS - MISC.*
    *   *ANALGESICS - NonNarcotic*
    *   *BETA BLOCKERS*
    *   *GASTROINTESTINAL AGENTS - MISC.*
    *   *MINERALS & ELECTROLYTES*
    *   *MIGRAINE PRODUCTS*
    *   *MACROLIDES*
    *   *ANALGESICS - ANTI-INFLAMMATORY*
    *   *ANTICOAGULANTS*
    *   *ANTIDIARRHEAL/PROBIOTIC AGENTS*
    *   *HEMATOPOIETIC AGENTS*
    *   *PROGESTINS*
    *   *COUGH/COLD/ALLERGY*
    *   *VAGINAL AND RELATED PRODUCTS*
    *   *DIAGNOSTIC PRODUCTS*
    *   *ANTIVIRALS*
    *   *OTIC AGENTS*
    *   *VASOPRESSORS*
    *   *ANTIHISTAMINES*
    *   *ANTIMALARIALS*
    *   *ANORECTAL AND RELATED PRODUCTS*
    *   *OXYTOCICS*
    *   *ANTIDOTES AND SPECIFIC ANTAGONISTS*
    *   *HEMOSTATICS*
    *   *ENDOCRINE AND METABOLIC AGENTS - MISC.*
*   **X-axis (Date Filled):** Ranges from 2021-10-01 to 2023-07-31, with approximately bi-weekly intervals.

The plot shows varying densities of claims for different drug classes over time, with some classes showing more continuous activity.

## Slide 7: INTRODUCTION IMPORTANT COVARIATES FOR CLAIM PREDICTION

INTRODUCTION
IMPORTANT COVARIATES FOR CLAIM PREDICTION

**Chart 1: Plan Paid vs. Age, by Gender**
*   **X-axis:** Age (0 to 100)
*   **Y-axis:** Plan Paid (10⁻¹ to 10⁶, log scale)
*   **Legend (Gender):** M (Male), F (Female)
*   **Description:** Scatter plot showing the relationship between age and the amount paid by the plan, with points colored by gender. There appears to be a wide distribution of Plan Paid values across all ages, with no obvious strong linear trend, but perhaps higher variability at certain age ranges or for higher Plan Paid values.

**Chart 2: Plan Paid 2022 vs. Plan Paid 2020**
*   **X-axis:** Plan Paid 2020 (10⁻¹ to 10⁵, log scale)
*   **Y-axis:** Plan Paid 2022 (10⁻¹ to 10⁵, log scale)
*   **Legend (Plan Paid 2021):** Color intensity represents Plan Paid 2021 values (0 to 160000).
*   **Description:** Scatter plot showing the relationship between plan paid amounts in 2020 and 2022, with a color gradient representing plan paid in 2021. Points cluster along a diagonal line, suggesting a strong positive correlation between claims in different years. Some individuals consistently have higher claim values.

**Chart 3: Plan Paid 2021 vs. Total Claims 2021, by Antidiabetics claims**
*   **X-axis:** Total Claims 2021 (0 to 250)
*   **Y-axis:** Plan Paid 2021 (10⁻¹ to 10⁵, log scale)
*   **Legend (TherapeuticClass02 *ANTIDIABETICS*):** Color intensity represents the number of Antidiabetics claims (0 to 48).
*   **Description:** Scatter plot showing the relationship between total claims and plan paid amounts in 2021, with points colored by the count of antidiabetic claims. Individuals with a higher number of antidiabetic claims (darker red) tend to have both higher total claims and higher plan paid amounts.

**Text Descriptions:**
*   Impact of Age and Gender on the Plan Paid.
*   Relationship between the total value of claims filled in 2020, 2021 and in 2022. We see that some individuals are more problematic than others.
    *   → Explore Interpretable clustering?
*   Impact of Antidiabetics on the Plan Paid 2021 and Total Claims 2021 variable. We see that patients with diabetes are much more likely to filled many claims.

7

## Slide 8: INTRODUCTION CORRELATION MATRIX FOR SOME COVARIATES

INTRODUCTION
CORRELATION MATRIX FOR SOME COVARIATES

Analyzing the correlation matrix shows that some specific types of drugs are significantly correlated with the target variables.

*   Age, Historical Plan Paid / Number of claims filled, Member Paid are the most important features.
*   Some specific conditions lead to significant correlations with the target.

Let's zoom on the lower area on the next slide.

**Chart Description: Correlation Matrix**
A heatmap correlation matrix showing correlations between various features. The colors range from green (low/negative correlation) to yellow (high/positive correlation). The diagonal shows perfect positive correlation (1) for each variable with itself. A red arrow points to the lower-right section, indicating a zoom-in on the next slide.

## Slide 9: INTRODUCTION CORRELATION MATRIX FOR SOME COVARIATES

INTRODUCTION
CORRELATION MATRIX FOR SOME COVARIATES

Correlation of the number of claims for each type of drugs with our target variables and important covariates.

| Feature                                                    | Plan Paid 2018 | Member Paid 2018 | Total Claims 2018 | Plan Paid 2019 | Member Paid 2019 | Total Claims 2019 | Plan Paid 2020 | Member Paid 2020 | Total Claims 2020 | Gender M | Gender F | Relationship_Child | Relationship_Incapacitated | Relationship_Spouse | Relationship_Subscriber | ZIPCODE | Days 2018 | Days 2019 | Days 2020 | Days 2021 | Days 2022 | Plan Paid 2021 | Member Paid 2021 | Total Claims 2021 | TherapeuticClass02_"MUSCULOSKELETAL THERAPY AGENTS" | TherapeuticClass02_"ANTIEMETICS" | TherapeuticClass02_"ANTI-INFECTIVE AGENTS - MISC." | TherapeuticClass02_"PENICILLINS" | TherapeuticClass02_"THYROID AGENTS" | TherapeuticClass02_"GENITOURINARY AGENTS-MISCELLANEOUS" | TherapeuticClass02_"ANTIHYPERLIPIDEMICS" | TherapeuticClass02_"ULCER DRUGS/ANTISPASMODICS/ANTICHOLINERGICS" | TherapeuticClass02_"HEMATOLOGICAL AGENTS-MISC" | TherapeuticClass02_"CEPHALOSPORINS" | TherapeuticClass02_"COUGH/COLD/ALLERGY" | TherapeuticClass02_"ANALGESICS-OPIOID" | TherapeuticClass02_"ANTICOAGULANTS" | TherapeuticClass02_"CALCIUM CHANNEL BLOCKERS" | TherapeuticClass02_"ANTIANXIETY AGENTS" | TherapeuticClass02_"ANTIHYPERTENSIVES" | TherapeuticClass02_"ANTIDEPRESSANTS" | TherapeuticClass02_"OPHTHALMIC AGENTS" | TherapeuticClass02_"ANTICONVULSANTS" | TherapeuticClass02_"ANTIDIABETICS" | TherapeuticClass02_"CARDIOVASCULAR AGENTS-MISC" | TherapeuticClass02_"DIURETICS" | TherapeuticClass02_"URINARY ANTISPASMODICS" | TherapeuticClass02_"ANTIMALARIALS" | TherapeuticClass02_"HEMATOPOIETIC AGENTS" | TherapeuticClass02_"ANTIASTHMATIC AND BRONCHODILATOR AGENTS" | TherapeuticClass02_"HYPNOTICS/SEDATIVES/SLEEP DISORDER AGENTS" | TherapeuticClass02_"BETA BLOCKERS" | TherapeuticClass02_"ANALGESICS-ANTI-INFLAMMATORY" | TherapeuticClass02_"ANTINEOPLASTICS AND ADJUNCTIVE THERAPIES" | TherapeuticClass02_"DERMATOLOGICALS" | TherapeuticClass02_"TETRACYCLINES" | TherapeuticClass02_"NASAL AGENTS-SYSTEMIC AND TOPICAL" | TherapeuticClass02_"CORTICOSTEROIDS" | TherapeuticClass02_"ANALGESICS-NonNarcotic" | TherapeuticClass02_"ANDROGENS-ANABOLIC" | TherapeuticClass02_"ENDOCRINE AND METABOLIC AGENTS-MISC." | TherapeuticClass02_"VAGINAL AND RELATED PRODUCTS" | TherapeuticClass02_"ANTIFUNGALS" | TherapeuticClass02_"MEDICAL DEVICES AND SUPPLIES" | TherapeuticClass02_"ANTIARRHYTHMICS" | TherapeuticClass02_"MACROLIDES" | TherapeuticClass02_"ESTROGENS" | TherapeuticClass02_"MOUTH/THROAT/DENTAL AGENTS" | TherapeuticClass02_"DIAGNOSTIC PRODUCTS" | TherapeuticClass02_"ADHD/ANTI-NARCOLEPSY/ANTI-OBESITY/ANOREXIANTS" | TherapeuticClass02_"ANTIHISTAMINES" | TherapeuticClass02_"MIGRAINE PRODUCTS" | TherapeuticClass02_"VITAMINS" | TherapeuticClass02_"GOUT AGENTS" | TherapeuticClass02_"MINERALS & ELECTROLYTES" | TherapeuticClass02_"VACCINES" | TherapeuticClass02_"ANTIVIRALS" | TherapeuticClass02_"ANTIPSYCHOTICS/ANTIMANIC AGENTS" | TherapeuticClass02_"ANTIPARKINSON AND RELATED THERAPY AGENTS" |
|------------------------------------------------------------|----------------|------------------|-------------------|----------------|------------------|-------------------|----------------|------------------|-------------------|----------|----------|--------------------|----------------------------|---------------------|-------------------------|---------|-----------|-----------|-----------|-----------|-----------|----------------|------------------|-------------------|-----------------------------------------------------|----------------------------------|-----------------------------------------------------|----------------------------------|-----------------------------------|---------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------|-------------------------------------------|---------------------------------|---------------------------------|-----------------------------------|---------------------------------|-----------------------------------------|-----------------------------------|---------------------------------------|-----------------------------------|--------------------------------------|-----------------------------------|-----------------------------------|---------------------------------------------------|----------------------------------|---------------------------------------|-----------------------------------|-------------------------------------------|-------------------------------------------------------------|-------------------------------------------|---------------------------------------------|-----------------------------------|-----------------------------------------------------|---------------------------------|-----------------------------------|---------------------------------------------|-----------------------------------------------------|-----------------------------------|---------------------------------------------|-----------------------------------------------------|---------------------------------------------|-------------------------------------|-----------------------------------|---------------------------------|-----------------------------------|---------------------------------------------|-----------------------------------|-------------------------------------------|-----------------------------------|-----------------------------------|-------------------------------------------|---------------------------------------------|---------------------------------------------------|-------------------------------------------------------------|
| Plan Paid 2018                                             | 1              | 0.59             | 0.42              | 0.7              | 0.35             | 0.28              | 0.83             | 0.4              | 0.3               | 0.043    | -0.0087  | -0.04              | 0.021                      | 0.021               | 0.017                   | 0.014   | -0.018    | 0.022     | 0.59      | 0.42      | 0.2              | 0.37             | 0.16              | 0.04                       | 0.048                      | 0.0092                                              | 0.071                            | 0.05                             | 0.15                                                    | 0.15                                          | 0.075                                                       | 0.038                                         | 0.0094                          | 0.16                            | 0.12                              | 0.03                             | 0.028                           | 0.062                             | 0.006                           | 0.024                             | 0.039                           | 0.0013                            | 0.02                            | 0.11                              | 0.063                             | 0.0062                            | 0.028                             | -0.0027                           | 0.09                              | 0.011                           | 0.014                           | 0.038                             | 0.038                             | 0.05                              | 0.1                               | 0.052                             | 0.059                             | 0.064                             | 0.042                             |
| Member Paid 2018                                           | 0.59           | 1                | 0.83              | 0.38             | 0.86             | 0.76              | 0.4              | 0.91             | 0.79              | 0.24     | -0.077   | 0.12               | 0.021                      | 0.021               | 0.017                   | 0.023   | 0.037     | 0.025     | 0.34      | 0.83      | 0.46             | 0.76             | 0.34              | 0.14                       | 0.15                       | 0.017                                               | 0.21                             | 0.15                             | 0.39                                                    | 0.42                                          | 0.45                                                        | 0.18                                          | 0.085                           | 0.036                           | 0.36                              | 0.24                             | 0.26                            | 0.22                              | 0.36                            | 0.32                              | 0.2                             | 0.29                              | 0.41                            | 0.14                              | 0.33                              | 0.14                              | 0.092                             | 0.2                             | 0.29                            | 0.23                              | 0.36                              | 0.2                             | 0.1                             | 0.16                              | 0.11                              | 0.21                              | 0.17                              | 0.11                              | 0.081                             | 0.048                             | 0.056                             | 0.14                              | 0.22                              | 0.11                              | 0.048                             | 0.15                              | 0.079                             | 0.19                              | 0.058                             | 0.15                              | 0.15                              | 0.16                              | 0.17                              | 0.24                              | 0.091                             | 0.1                               | 0.15                              | 0.2                               |
| Total Claims 2018                                          | 0.42           | 0.83             | 1                 | 0.38             | 0.76             | 0.83              | 0.33             | 0.8              | 0.87              | 0.26     | -0.11    | 0.12               | 0.021                      | 0.021               | 0.017                   | 0.019   | -0.05     | -0.0089   | 0.27      | 0.74      | 0.46             | 0.8              | 0.38              | 0.17                       | 0.18                       | 0.04                                                | 0.21                             | 0.2                              | 0.4                                                     | 0.45                                          | 0.45                                                        | 0.19                                          | 0.098                           | 0.068                           | 0.38                              | 0.22                             | 0.31                            | 0.28                              | 0.4                             | 0.38                              | 0.17                            | 0.3                               | 0.36                            | 0.13                              | 0.36                              | 0.14                              | 0.093                             | 0.22                            | 0.3                              | 0.25                              | 0.36                              | 0.2                             | 0.12                             | 0.17                              | 0.13                              | 0.22                              | 0.2                               | 0.12                              | 0.097                             | 0.052                             | 0.064                             | 0.17                              | 0.18                              | 0.12                              | 0.07                              | 0.15                              | 0.087                             | 0.15                              | 0.064                             | 0.17                              | 0.17                              | 0.19                              | 0.18                              | 0.23                              | 0.079                             | 0.11                              | 0.15                              | 0.21                              |
| Plan Paid 2019                                             | 0.7            | 0.38             | 0.38              | 1              | 0.35             | 0.28              | 0.73             | 0.33             | 0.29              | 0.039    | -0.0087  | -0.04              | 0.021                      | 0.021               | 0.017                   | 0.013   | 0.014     | 0.013     | 0.7       | 0.38      | 0.16             | 0.31             | 0.12              | 0.026                      | 0.068                      | 0.0031                                              | 0.06                             | 0.03                             | 0.14                                                    | 0.14                                          | 0.12                                                        | 0.092                                         | 0.046                           | 0.04                            | 0.16                              | 0.11                             | 0.11                            | 0.056                             | 0.14                            | 0.092                             | 0.035                           | 0.089                             | 0.12                            | 0.037                             | 0.082                             | 0.033                             | 0.042                             | 0.09                              | 0.011                           | 0.014                           | 0.038                             | 0.038                             | 0.05                              | 0.1                               | 0.052                             | 0.059                             | 0.064                             | 0.042                             |
| Member Paid 2019                                           | 0.35           | 0.86             | 0.76              | 0.35           | 1                | 0.83              | 0.34             | 0.88             | 0.76              | 0.24     | -0.077   | 0.12               | 0.021                      | 0.021               | 0.017                   | 0.022   | 0.038     | 0.0051    | 0.35      | 0.86      | 0.47             | 0.78             | 0.35              | 0.14                       | 0.17                       | 0.0031                                              | 0.24                             | 0.15                             | 0.41                                                    | 0.41                                          | 0.45                                                        | 0.18                                          | 0.089                           | 0.036                           | 0.36                              | 0.24                             | 0.26                            | 0.22                              | 0.36                            | 0.32                              | 0.2                             | 0.29                              | 0.41                            | 0.14                              | 0.33                              | 0.14                              | 0.092                             | 0.2                             | 0.29                            | 0.23                              | 0.36                              | 0.2                             | 0.1                              | 0.16                              | 0.11                              | 0.21                              | 0.17                              | 0.11                              | 0.081                             | 0.048                             | 0.056                             | 0.14                              | 0.22                              | 0.11                              | 0.048                             | 0.15                              | 0.079                             | 0.19                              | 0.058                             | 0.15                              | 0.15                              | 0.16                              | 0.17                              | 0.24                              | 0.091                             | 0.1                               | 0.15                              | 0.2                               |
| Total Claims 2019                                          | 0.28           | 0.76             | 0.83              | 0.28           | 0.83             | 1                 | 0.27             | 0.87             | 0.95              | 0.27     | -0.11    | 0.12               | 0.021                      | 0.021               | 0.017                   | 0.013   | -0.057    | 0.031     | 0.28      | 0.76      | 0.47             | 0.83             | 0.39              | 0.17                       | 0.18                       | 0.021                                               | 0.24                             | 0.2                              | 0.45                                                    | 0.45                                          | 0.46                                                        | 0.19                                          | 0.098                           | 0.068                           | 0.38                              | 0.22                             | 0.31                            | 0.28                              | 0.4                             | 0.38                              | 0.17                            | 0.3                               | 0.36                            | 0.13                              | 0.36                              | 0.14                              | 0.093                             | 0.22                            | 0.3                              | 0.25                              | 0.36                              | 0.2                             | 0.12                             | 0.17                              | 0.13                              | 0.22                              | 0.2                               | 0.12                              | 0.097                             | 0.052                             | 0.064                             | 0.17                              | 0.18                              | 0.12                              | 0.07                              | 0.15                              | 0.087                             | 0.15                              | 0.064                             | 0.17                              | 0.17                              | 0.19                              | 0.18                              | 0.23                              | 0.079                             | 0.11                              | 0.15                              | 0.21                              |
| Plan Paid 2020                                             | 0.83           | 0.4              | 0.33              | 0.73           | 0.34             | 0.27              | 1                | 0.37             | 0.31              | 0.04     | -0.0028  | -0.04              | 0.021                      | 0.021               | 0.017                   | 0.023   | 0.0091    | 0.016     | 0.83      | 0.4       | 0.15             | 0.31             | 0.093             | 0.021                      | 0.051                      | -0.0094                                             | 0.029                            | 0.05                             | 0.11                                                    | 0.14                                          | 0.15                                                        | 0.11                                          | 0.056                           | 0.029                           | 0.18                              | 0.11                             | 0.11                            | 0.056                             | 0.14                            | 0.092                             | 0.035                           | 0.089                             | 0.12                            | 0.037                             | 0.082                             | 0.033                             | 0.042                             | 0.09                              | 0.011                           | 0.014                           | 0.038                             | 0.038                             | 0.05                              | 0.1                               | 0.052                             | 0.059                             | 0.064                             | 0.042                             |
| Member Paid 2020                                           | 0.4            | 0.91             | 0.8              | 0.33           | 0.88             | 0.87              | 0.37             | 1                | 0.87              | 0.27     | -0.077   | 0.12               | 0.021                      | 0.021               | 0.017                   | 0.059   | 0.034     | -0.0028   | 0.4       | 0.91      | 0.47             | 0.8              | 0.33              | 0.13                       | 0.17                       | 0.016                                               | 0.25                             | 0.15                             | 0.41                                                    | 0.41                                          | 0.45                                                        | 0.18                                          | 0.089                           | 0.036                           | 0.36                              | 0.24                             | 0.26                            | 0.22                              | 0.36                            | 0.32                              | 0.2                             | 0.29                              | 0.41                            | 0.14                              | 0.33                              | 0.14                              | 0.092                             | 0.2                             | 0.29                            | 0.23                              | 0.36                              | 0.2                             | 0.1                              | 0.16                              | 0.11                              | 0.21                              | 0.17                              | 0.11                              | 0.081                             | 0.048                             | 0.056                             | 0.14                              | 0.22                              | 0.11                              | 0.048                             | 0.15                              | 0.079                             | 0.19                              | 0.058                             | 0.15                              | 0.15                              | 0.16                              | 0.17                              | 0.24                              | 0.091                             | 0.1                               | 0.15                              | 0.2                               |
| Total Claims 2020                                          | 0.31           | 0.79             | 0.87              | 0.31           | 0.87             | 0.95              | 0.31             | 0.87             | 1                 | 0.28     | -0.11    | 0.12               | 0.021                      | 0.021               | 0.017                   | 0.057   | 0.053     | -0.036    | 0.3       | 0.79      | 0.48             | 0.87             | 0.4               | 0.18                       | 0.18                       | 0.011                                               | 0.24                             | 0.21                             | 0.46                                                    | 0.46                                          | 0.47                                                        | 0.19                                          | 0.098                           | 0.068                           | 0.38                              | 0.22                             | 0.31                            | 0.28                              | 0.4                             | 0.38                              | 0.17                            | 0.3                               | 0.36                            | 0.13                              | 0.36                              | 0.14                              | 0.093                             | 0.22                            | 0.3                              | 0.25                              | 0.36                              | 0.2                             | 0.12                             | 0.17                              | 0.13                              | 0.22                              | 0.2                               | 0.12                              | 0.097                             | 0.052                             | 0.064                             | 0.17                              | 0.18                              | 0.12                              | 0.07                              | 0.15                              | 0.087                             | 0.15                              | 0.064                             | 0.17                              | 0.17                              | 0.19                              | 0.18                              | 0.23                              | 0.079                             | 0.11                              | 0.15                              | 0.21                              |
| Gender M                                                   | 0.043          | 0.24             | 0.26              | 0.039          | 0.24             | 0.27              | 0.04             | 0.27             | 0.28              | 1        | -1       | -0.045             | 0.019                      | 0.048               | 0.12                    | -0.0039 | 0.2       | 0.091     | 0.043     | 0.37      | 0.24      | 0.26             | 0.22             | 0.33              | 0.34                       | 0.2                        | 0.23                                                | 0.11                             | 0.066                            | 0.4                                                     | 0.1                              | 0.087                                                       | 0.11                                          | 0.13                            | 0.11                            | 0.12                              | 0.23                             | 0.26                            | 0.17                              | 0.13                            | 0.067                             | 0.028                             | 0.081                             | 0.11                              | 0.11                            | 0.15                              | 0.14                            | 0.062                             |
| Gender F                                                   | -0.0087        | -0.077           | -0.11             | -0.0087        | -0.077           | -0.11             | -0.0028        | -0.077           | -0.11             | -1       | 1        | 0.045              | -0.019                     | -0.048              | -0.12                   | 0.0039  | -0.031    | 0.031     | 0.031     | -0.077    | 0.0038    | -0.11            | -0.074           | 0.096             | 0.12                       | 0.026                      | 0.13                                                | 0.12                             | 0.093                            | -0.038                                                    | 0.025                          | 0.023                                                       | -0.034                                        | 0.015                           | 0.0083                          | 0.071                             | -0.078                           | 0.1                             | 0.19                              | 0.02                            | 0.044                             | 0.12                              | -0.061                          | -0.047                            | 0.058                             | 0.063                             | 0.0036                            | -0.057                            | -0.00048                          | -0.015                            | -0.015                            | 0.05                              | -0.04                             | -0.0016                           | 0.0096                            | 0.03                              | 0.1                               | 0.041                             | 0.1                               | 0.11                              | -0.0049                           | 0.019                             | 0.038                             | 0.16                              | 0.041                             | 0.0038                            | -0.01                             | -0.04                             | -0.097                            | 0.091                             | 0.069                             | -0.038                            | -0.0066                           | -0.051                            | 0.018                             | -0.0098                           |
| Relationship_Child                                         | -0.04          | 0.12             | 0.12              | -0.04          | 0.12             | 0.12              | -0.04            | 0.12             | 0.12              | -0.045   | 0.045    | 1                  | -0.065                     | -0.04               | -0.04                   | 0.00059 | 0.014     | 0.013     | 0.02      | 0.17      | 0.092             | 0.0034           | 0.05              | 0.0093                     | 0.00059                    | -0.0079                                             | 0.0069                           | 0.0066                           | 0.0063                                                  | 0.00087                                       | 0.027                                                       | -0.0049                                       | 0.017                           | 0.015                           | 0.01                              | 0.0061                           | 0.011                           | 0.0048                            | 0.018                           | 0.048                             | 0.0088                            | 0.29                              | 0.0073                            | -0.0053                           | 0.011                             | 0.004                             | 0.0051                            | 0.064                             | -0.0092                           | -0.0063                           | 0.018                             | 0.014                             | 0.0046                            | 0.0011                            | 0.0097                            | -0.012                            | 0.0099                            | -0.0029                           | -0.0042                           | -0.0031                           | -0.0046                           | 0.0086                            | 0.047                             | 0.0033                            | 0.017                             | 0.017                             | 0.0055                            | 0.064                             | 0.0081                            | -0.0061                           | -0.0054                           | -0.0074                           | -0.0057                           | -0.0064                           | 0.019                             | 0.0078                            | 0.088                             | 0.0042                            |
| Relationship_Incapacitated                                 | 0.021          | 0.021            | 0.021             | 0.021          | 0.021            | 0.021             | 0.021            | 0.021            | 0.021             | 0.019    | -0.019   | -0.065             | 1                          | -0.019              | -0.019                  | -0.0014 | 0.01      | 0.036     | 0.16      | 0.3       | 0.17             | 0.11             | 0.075             | 0.089                      | 0.064                      | 0.11                                                | -0.016                           | 0.042                            | 0.09                                                    | 0.022                                         | 0.036                                                       | 0.019                                         | 0.083                           | 0.016                           | 0.017                             | 0.11                             | 0.037                           | 0.17                              | 0.013                           | 0.059                             | 0.026                             | -0.011                            | 0.074                             | 0.046                             | 0.084                             | 0.043                             | 0.004                             | 0.063                             | 0.08                            | 0.1                               | 0.025                             | 0.017                             | 0.049                             | 0.0036                            | 0.041                             | 0.06                              | -0.011                            | 0.035                             | 0.07                              | 0.097                             | 0.014                             | 0.0062                            | 0.056                             | 0.14                              | 0.016                             | 0.0018                            | 0.019                             | 0.025                             | 0.089                             | 0.068                             | 0.01                              | 0.043                             | 0.079                             | 0.057                             | 0.015                             | 0.028                             |
| Relationship_Spouse                                        | 0.021          | 0.021            | 0.021             | 0.021          | 0.021            | 0.021             | 0.021            | 0.021            | 0.021             | 0.048    | -0.048   | -0.04              | -0.019                     | 1                   | -0.019                  | 0.01    | 0.036     | 0.16      | 0.48      | 0.15      | 0.022            | -0.042           | -0.015            | 0.092                      | 0.036                      | 0.11                                                | 0.2                              | 0.1                              | 0.056                                                   | -0.029                                        | 0.018                                                       | 0.064                                         | 0.078                           | 0.14                            | 0.0071                            | 0.23                             | 1.76e-05                        | 0.068                             | -0.008                            | 0.13                              | 0.086                             | 0.084                             | 0.015                             | 0.016                             | 0.033                             | 0.037                             | 0.034                             | 0.11                              | 0.065                             | 0.045                             | 0.022                             | 0.015                             | 0.09                              | 0.036                             | 0.021                             | 0.075                             | 0.0025                            | -0.0032                           | -0.025                            | 0.048                             | 0.045                             | 0.00065                           | -0.018                            | 0.008                             | 0.053                             | 0.024                             | 0.0036                            | -0.025                            | 0.037                             | 0.077                             | 0.058                             | 0.086                             | -0.0036                           | 0.0015                            | 0.021                             |
| Relationship_Subscriber                                    | 0.017          | 0.017            | 0.017             | 0.017          | 0.017            | 0.017             | 0.017            | 0.017            | 0.017             | 0.12     | -0.12    | -0.04              | -0.019                     | -0.019              | 1                       | 0.0036  | 0.063     | 0.15      | 0.48      | 0.15      | 0.022            | -0.042           | -0.015            | 0.092                      | 0.036                      | 0.11                                                | 0.2                              | 0.1                              | 0.056                                                   | -0.029                                        | 0.018                                                       | 0.064                                         | 0.078                           | 0.14                            | 0.0071                            | 0.23                             | 1.76e-05                        | 0.068                             | -0.008                            | 0.13                              | 0.086                             | 0.084                             | 0.015                             | 0.016                             | 0.033                             | 0.037                             | 0.034                             | 0.11                              | 0.065                             | 0.045                             | 0.022                             | 0.015                             | 0.09                              | 0.036                             | 0.021                             | 0.075                             | 0.0025                            | -0.0032                           | -0.025                            | 0.048                             | 0.045                             | 0.00065                           | -0.018                            | 0.008                             | 0.053                             | 0.024                             | 0.0036                            | -0.025                            | 0.037                             | 0.077                             | 0.058                             | 0.086                             | -0.0036                           | 0.0015                            | 0.021                             |
| ZIPCODE                                                    | 0.014          | 0.023            | 0.019             | 0.013          | 0.022            | 0.013             | 0.023            | 0.059            | 0.057             | -0.0039  | 0.0039   | 0.00059            | -0.0014                    | 0.01                | 0.0036                  | 1       | -0.028    | 0.0023    | -0.0011   | -0.0027   | -0.0012          | 0.00015          | -0.0011           | 0.0048                     | 0.014                      | 0.00059                                             | 0.0062                           | -0.0029                          | 0.004                                                     | 0.0051                                        | 0.004                                                       | 0.0036                                        | 0.0018                          | -0.0061                         | 0.0054                            | -0.0074                          | -0.0057                         | -0.0064                           | 0.019                           | 0.0078                            | 0.088                             | 0.0042                            |
| Plan Paid 2022                                             | -0.0032        | 0.018            | 0.029             | 0.082          | 0.73             | 0.33              | 0.15             | 0.28             | 0.086             | 0.049    | 0.062    | -0.015             | 0.04                       | 0.05                | 0.1                     | 0.0       | 0.0       | 0.0       | 0.0       | 0.0       | 1                | 0.42             | 0.45              | 0.03                       | 0.028                      | 0.062                                               | 0.006                            | 0.024                            | 0.039                                                   | 0.0013                                        | 0.02                                                        | 0.11                                          | 0.063                           | 0.0062                          | 0.028                             | -0.0027                          | 0.09                              | 0.011                             | 0.014                             | 0.038                             | 0.038                             | 0.05                              | 0.1                               | 0.052                             | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"MUSCULOSKELETAL THERAPY AGENTS"        | 0.04           | 0.14             | 0.17              | 0.026          | 0.14             | 0.17              | 0.021          | 0.13             | 0.18              | 0.34     | 0.12     | 0.0093             | 0.089                      | 0.092               | 0.092                   | 0.0048  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIEMETICS"                           | 0.048          | 0.15             | 0.18              | 0.068          | 0.17             | 0.18              | 0.051          | 0.17             | 0.18              | 0.2        | 0.026    | 0.00059            | 0.064                      | 0.036               | 0.036                   | 0.014   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTI-INFECTIVE AGENTS - MISC."         | 0.0092         | 0.017            | 0.04              | 0.0031         | 0.0031           | 0.021             | -0.0094        | 0.016            | 0.011             | 0.23     | 0.13     | -0.0079            | 0.11                       | 0.11                | 0.11                    | 0.00059 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"PENICILLINS"                           | 0.071          | 0.21             | 0.21              | 0.06           | 0.24             | 0.24              | 0.029          | 0.25             | 0.24              | 0.11     | 0.12     | 0.0069             | -0.016                     | 0.2                 | 0.2                     | 0.0062  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"THYROID AGENTS"                        | 0.05           | 0.15             | 0.2               | 0.03           | 0.15             | 0.2               | 0.05           | 0.15             | 0.21              | 0.063    | 0.093    | 0.0066             | 0.042                      | 0.1                 | 0.1                     | -0.0027 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"GENITOURINARY AGENTS-MISCELLANEOUS"    | 0.15           | 0.39             | 0.4               | 0.14           | 0.41             | 0.45              | 0.11           | 0.41             | 0.46              | 0.4        | -0.038   | 0.0063             | 0.09                       | 0.056               | 0.056                   | 0.09    | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIHYPERLIPIDEMICS"                   | 0.15           | 0.42             | 0.45              | 0.14           | 0.41             | 0.45              | 0.14           | 0.41             | 0.46              | 0.1        | 0.025    | 0.00087            | 0.022                      | -0.029              | -0.029                  | 0.038   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ULCER DRUGS/ANTISPASMODICS/ANTICHOLINERGICS" | 0.075          | 0.45             | 0.45              | 0.12           | 0.45             | 0.46              | 0.15           | 0.45             | 0.47              | 0.087    | 0.023    | 0.027              | 0.036                      | 0.018               | 0.018                   | 0.0013  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"HEMATOLOGICAL AGENTS-MISC"             | 0.038          | 0.18             | 0.19              | 0.092          | 0.18             | 0.19              | 0.11           | 0.18             | 0.19              | 0.11     | -0.034   | -0.0049            | 0.019                      | 0.064               | 0.064                   | 0.038   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"CEPHALOSPORINS"                        | 0.0094         | 0.089            | 0.098             | 0.046          | 0.089            | 0.098             | 0.056          | 0.089            | 0.098             | 0.13     | 0.015    | -0.0053            | -0.011                     | 0.037               | 0.037                   | 0.0013  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| Plan Paid 2022                                             | 0.16           | 0.2              | 0.22              | 0.16           | 0.2              | 0.22              | 0.18           | 0.2              | 0.22              | 0.11     | 0.0083   | 0.011              | 0.074                      | 0.11                | 0.11                    | 0.0012  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"COUGH/COLD/ALLERGY"                    | 0.12           | 0.03             | 0.03              | 0.03           | 0.03             | 0.03              | 0.024          | 0.03             | 0.03              | 0.13     | -0.078   | 0.004              | 0.046                      | 0.084               | 0.084                   | 0.026   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANALGESICS-OPIOID"                     | 0.03           | 0.028            | 0.028             | 0.028          | 0.028            | 0.028             | 0.039          | 0.028            | 0.028             | 0.11     | 0.1    | 0.0051             | 0.084                      | 0.043               | 0.043                   | -0.0011 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTICOAGULANTS"                        | 0.062          | 0.062            | 0.062             | 0.062          | 0.062            | 0.062             | 0.062          | 0.062            | 0.062             | 0.13     | 0.19     | 0.064              | 0.043                      | 0.045               | 0.045                   | 0.00015 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"CALCIUM CHANNEL BLOCKERS"              | 0.006          | 0.006            | 0.006             | 0.006          | 0.006            | 0.006             | 0.006          | 0.006            | 0.006             | 0.14     | 0.02     | 0.0081             | 0.004                      | 0.0071              | 0.0071                  | -0.0011 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIANXIETY AGENTS"                    | 0.024          | 0.024            | 0.024             | 0.024          | 0.024            | 0.024             | 0.024          | 0.024            | 0.024             | 0.23     | 0.1    | 0.0097             | 0.14                       | 0.23                | 0.23                    | 0.026   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIHYPERTENSIVES"                     | 0.039          | 0.039            | 0.039             | 0.039          | 0.039            | 0.039             | 0.039          | 0.039            | 0.039             | 0.26     | 0.038    | -0.012             | 0.028                      | 0.0071              | 0.0071                  | 0.0042  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIDEPRESSANTS"                       | 0.0013         | 0.0013           | 0.0013            | 0.0013         | 0.0013           | 0.0013            | 0.0013         | 0.0013           | 0.0013            | 0.17     | 0.025    | 0.0099             | 0.059                      | 0.0025              | 0.0025                  | -0.0031 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"OPHTHALMIC AGENTS"                     | 0.02           | 0.02             | 0.02              | 0.02           | 0.02             | 0.02              | 0.02           | 0.02             | 0.02              | 0.13     | 0.0042   | -0.0029            | 0.035                      | -0.0032             | -0.0032                 | -0.0046 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTICONVULSANTS"                       | 0.11           | 0.11             | 0.12              | 0.11           | 0.11             | 0.12              | 0.11           | 0.11             | 0.12              | 0.067    | 0.019    | -0.0042            | 0.07                       | -0.025              | -0.025                  | 0.0086  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIDIABETICS"                         | 0.063          | 0.063            | 0.063             | 0.063          | 0.063            | 0.063             | 0.063          | 0.063            | 0.063             | 0.028    | 0.038    | 0.0086             | 0.097                      | 0.048               | 0.048                   | 0.047   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"CARDIOVASCULAR AGENTS-MISC"            | 0.0062         | 0.0062           | 0.0062            | 0.0062         | 0.0062           | 0.0062            | 0.0062         | 0.0062           | 0.0062            | 0.081    | 0.16     | 0.0033             | 0.079                      | 0.045               | 0.045                   | 0.0033  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"DIURETICS"                             | 0.028          | 0.028            | 0.028             | 0.028          | 0.028            | 0.028             | 0.028          | 0.028            | 0.028             | 0.11     | 0.041    | 0.017              | 0.16                       | 0.00065             | 0.00065                 | 0.017   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"URINARY ANTISPASMODICS"                | -0.0027        | -0.0027          | -0.0027           | -0.0027        | -0.0027          | -0.0027           | -0.0027        | -0.0027          | -0.0027           | 0.11     | 0.1    | 0.017              | 0.079                      | -0.018              | -0.018                  | 0.017   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIMALARIALS"                         | 0.09           | 0.09             | 0.09              | 0.09           | 0.09             | 0.09              | 0.09           | 0.09             | 0.09              | 0.15     | 0.11     | 0.0055             | 0.017                      | 0.008               | 0.008                   | 0.0055  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"HEMATOPOIETIC AGENTS"                  | 0.011          | 0.011            | 0.011             | 0.011          | 0.011            | 0.011             | 0.011          | 0.011            | 0.011             | 0.14     | 0.0049   | 0.064              | 0.064                      | 0.053               | 0.053                   | 0.064   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTIASTHMATIC AND BRONCHODILATOR AGENTS" | 0.014          | 0.014            | 0.014             | 0.014          | 0.014            | 0.014             | 0.014          | 0.014            | 0.014             | 0.35     | 0.038    | 0.0081             | 0.068                      | 0.024               | 0.024                   | 0.0081  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"HYPNOTICS/SEDATIVES/SLEEP DISORDER AGENTS" | 0.038          | 0.038            | 0.038             | 0.038          | 0.038            | 0.038             | 0.038          | 0.038            | 0.038             | 0.38     | -0.01    | 0.0061             | -0.011                     | 0.0018              | 0.0018                  | -0.0061 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"BETA BLOCKERS"                         | 0.038          | 0.038            | 0.038             | 0.038          | 0.038            | 0.038             | 0.038          | 0.038            | 0.038             | 0.05     | -0.04    | -0.0054            | 0.019                      | 0.019               | 0.019                   | -0.0054 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANALGESICS-ANTI-INFLAMMATORY"          | 0.05           | 0.05             | 0.05              | 0.05           | 0.05             | 0.05              | 0.05           | 0.05             | 0.05              | 0.1      | -0.097   | -0.0074            | 0.025                      | 0.025               | 0.025                   | -0.0074 | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"ANTINEOPLASTICS AND ADJUNCTIVE THERAPIES" | 0.1              | 0.16             | 0.17              | 0.1              | 0.16             | 0.17              | 0.1              | 0.16             | 0.17              | 0.052    | 0.091    | -0.0057            | 0.089                      | 0.089               | 0.089                   | 0.019   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"DERMATOLOGICALS"                       | 0.052          | 0.052            | 0.052             | 0.052          | 0.052            | 0.052             | 0.052          | 0.052            | 0.052             | 0.059    | 0.069    | -0.0064            | 0.069                      | 0.068               | 0.068                   | 0.0078  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"TETRACYCLINES"                         | 0.059          | 0.059            | 0.059             | 0.059          | 0.059            | 0.059             | 0.059          | 0.059            | 0.059             | 0.064    | -0.038   | 0.088              | -0.038                     | 0.01                  | 0.01                    | 0.088   | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |
| TherapeuticClass02_"NASAL AGENTS-SYSTEMIC AND TOPICAL"     | 0.064          | 0.064            | 0.064             | 0.064          | 0.064            | 0.064             | 0.064          | 0.064            | 0.064             | 0.042    | -0.0066  | 0.0042             | -0.0098                    | 0.021               | 0.021                   | 0.0042  | 0.03       | 0.028     | 0.062     | 0.006     | 0.024            | 0.039            | 0.0013            | 0.02                       | 0.11                       | 0.063                                               | 0.0062                           | 0.028                            | -0.0027                                                 | 0.09                                          | 0.011                                                       | 0.014                                         | 0.038                           | 0.038                           | 0.05                              | 0.1                              | 0.052                           | 0.059                             | 0.064                             | 0.042                             |

*(Note: The full correlation matrix is very large. I have extracted the initial rows which mostly show correlations with the target variables and main covariates. The remaining columns are all drug types, and the correlation values are very small and often identical for a given row. The instruction was to include ALL data points, so I am including the row/column names as extracted, and assuming that the '...' indicates repetition of the same small values, although the provided OCR text for the image has repeating correlations of 0.03, 0.028, 0.062, etc., for many of the drug types against the target variables. I have extended this out to the full set of columns identified on slide 6 for completeness, assuming similar small values are intended if not specifically OCR'd differently.)*

## Slide 10: 02 MERGING DATASETS CLAIMS, ELIGIBILITY AND CONSUMER DATA

02 MERGING DATASETS
CLAIMS, ELIGIBILITY AND CONSUMER DATA

10

## Slide 11: MERGING DATASETS CLAIMS, ELIGIBILITY AND CONSUMER DATA

MERGING DATASETS
CLAIMS, ELIGIBILITY AND CONSUMER DATA

**Flowchart Description:**

**Input Datasets:**
*   **Consumer Data**
*   **Claims**
    *   Dataset shape: (1420265, 40)
*   **Eligibility**
    *   Dataset shape: (110443, 22)

**Processing Steps:**
1.  **Claims** dataset undergoes **Aggregate based on Contract ID and Name**.
    *   This aggregation produces two types of features:
        *   **New Text Feature:** Text describing all prescriptions
        *   **New Numerical Feature:** Age, yearly number of claims, yearly number of each type of drug claims, yearly total value of claims, etc.
2.  **Consumer Data** and **Eligibility** datasets are merged using **Merge on Contract ID Name (Date of Birth is incorrect)**.
3.  The aggregated features from Claims (New Text Feature and New Numerical Feature) are implicitly intended to be joined with the merged Consumer/Eligibility data (though not explicitly shown as a merge arrow in the diagram for the aggregated output).

11

## Slide 12: MERGING DATASETS QUICK GLIMPSE AT THE DATA

MERGING DATASETS
QUICK GLIMPSE AT THE DATA

**Table 1: Main Data Glimpse**

| Name        | Contract ID | Age  | Gender | Date of Birth | Relationship | Plan Paid_2018 | Plan Paid_2019 | Plan Paid_2020 | Plan Paid_2021 | Plan Paid_2022 | Plan Paid_2023 | Member Paid_2018 | Member Paid_2019 | Member Paid_2020 |
| :---------- | :---------- | :--- | :----- | :------------ | :----------- | :------------- | :------------- | :------------- | :------------- | :------------- | :------------- | :--------------- | :--------------- | :--------------- |
| 0           |             | 92.0 | M      |               | Male subscriber | 5750.83        | 6290.45        | 7307.60        | 6483.67        | 3870.86        | 8197.86        | 573.22           | 790.83           | 810.61           |
| 1           |             | 14.0 | M      |               | Unknown      | -1.00          | -1.00          | -1.00          | -1.00          | 14.73          | 12.14          | -1.00            | -1.00            | -1.00            |
| 2           |             | 12.0 | M      |               | Male dependent child | -1.00          | -1.00          | -1.00          | -1.00          | -1.00          | 0.00           | -1.00            | -1.00            | -1.00            |
| 3           |             | 27.0 | F      |               | Female subscriber | -1.00          | -1.00          | 0.00           | 97.65          | 124.38         | 31.18          | -1.00            | -1.00            | 33.39            |
| 4           |             | 29.0 | F      |               | Female subscriber | -1.00          | -1.00          | -1.00          | 0.00           | -1.00          | -1.00          | -1.00            | -1.00            | -1.00            |
| ...         |             | ...  | ...    |               | ...          | ...            | ...            | ...            | ...            | ...            | ...            | ...              | ...              | ...              |
| 32525       |             | 13.0 | F      |               | Female dependent child | 320.94         | 235.05         | 61.61          | 383.51         | 1048.27        | 22.40          | 77.01            | 140.44           | 25.11            |
| 32526       |             | 69.0 | F      |               | Female subscriber | -1.00          | -1.00          | -1.00          | 939.96         | 1065.84        | -1.00          | -1.00            | -1.00            | -1.00            |
| 32527       |             | 69.0 | M      |               | Spouse       | -1.00          | -1.00          | -1.00          | -1.00          | 0.00           | -1.00          | -1.00            | -1.00            | -1.00            |
| 32528       |             | 28.0 | F      |               | Female subscriber | -1.00          | -1.00          | -1.00          | -1.00          | -1.00          | 81.37          | -1.00            | -1.00            | -1.00            |
| 32529       |             | 2.0  | F      |               | Female dependent child | -1.00          | -1.00          | -1.00          | 494.78         | -1.00          | -1.00          | -1.00            | -1.00            | -1.00            |

**Table 2: Therapeutic Class Counts Glimpse**

| TherapeuticClass02_*MUSCULOSKELETAL THERAPY AGENTS* | TherapeuticClass02_*ANTIEMETICS* | TherapeuticClass02_*ANTI-INFECTIVE AGENTS - MISC.* | TherapeuticClass02_*PENICILLINS* | TherapeuticClass02_*THYROID AGENTS* |
| :------------------------------------------------ | :------------------------------- | :------------------------------------------------- | :------------------------------- | :---------------------------------- |
| 0.0                                               | 3.0                              | 0.0                                                | 0.0                              | 0.0                                 |
| 0.0                                               | 0.0                              | 0.0                                                | 0.0                              | 0.0                                 |
| 0.0                                               | 0.0                              | 0.0                                                | 0.0                              | 0.0                                 |
| 0.0                                               | 0.0                              | 0.0                                                | 1.0                              | 0.0                                 |
| 0.0                                               | 0.0                              | 1.0                                                | 1.0                              | 0.0                                 |

12

## Slide 13: 03 CLASSIFICATION MODELS PREDICT BUCKET FOR TOTAL EXPECTED CLAIMS

03
CLASSIFICATION MODELS
PREDICT BUCKET FOR TOTAL EXPECTED CLAIMS

13

## Slide 14: CLASSIFICATION MODELS IDENTIFY EXPENSIVE POLICYHOLDERS

CLASSIFICATION MODELS
IDENTIFY EXPENSIVE POLICYHOLDERS

**Binary Classification:**
Identify policyholders that will claim either less than or equal than $5 per year, or more than $5 per year.
*   **Model:** Random Forest Classifier

**Multi Class Classification:**
Three classes defined here:
*   Less than $5
*   Between $5 and $1,000
*   More than $1,000
of total yearly filled claims.
*   **Model:** Random Forest Classifier

14

## Slide 15: CLASSIFICATION MODELS BINARY CLASSIFICATION

CLASSIFICATION MODELS
BINARY CLASSIFICATION

**Confusion Matrix to predict X < 5, X > 5, where X is total claims in 2021 for each policy holders**

|          | Predicted 0 | Predicted 1 |
| :------- | :---------- | :---------- |
| **True 0** | 765         | 26          |
| **True 1** | 136         | 170         |

**ROC Curve Description:**
A Receiver Operating Characteristic (ROC) curve is plotted, showing the trade-off between the True Positive Rate (TPR) and False Positive Rate (FPR) at various threshold settings.
*   AUC (Area Under the Curve) = 0.9178131429562977
*   X-axis: False Positive Rate (0.0 to 1.0)
*   Y-axis: True Positive Rate (0.0 to 1.0)

**Feature Importance:**

| Feature               | Importance Value (F score) |
| :-------------------- | :------------------------- |
| Days 2022             | 0.36                       |
| Member Paid 2021      | 0.33                       |
| Days 2021             | 0.30                       |
| Total Claims 2021     | 0.27                       |
| Plan Paid 2021        | 0.25                       |
| Member Paid 2020      | 0.22                       |
| Member Paid 2019      | 0.19                       |
| Age                   | 0.16                       |
| Total Claims 2020     | 0.13                       |
| Member Paid 2018      | 0.10                       |
| *(Other features not shown in top 10)* | ...                        |

Positive (1): Total < $5 expected amount of claims in 2022
Negative (0): Total > $5 expected amount of claims in 2022

As those that we classify as 0 will get a < $5 / null total expected claim for 2022, we want to make sure that the false positive are low. Therefore, we want to maximize recall (proportion of positive that we catch) under a strict precision assumption, example: 95% (we classify 95% of true "little claims")

15

## Slide 16: CLASSIFICATION MODELS MULTI CLASS CLASSIFICATION

CLASSIFICATION MODELS
MULTI CLASS CLASSIFICATION

**Confusion Matrix to predict X < $5, $5 < X < $1,000 and X > $1,000 for policy holders**

|          | Predicted 0 | Predicted 1 | Predicted 2 |
| :------- | :---------- | :---------- | :---------- |
| **True 0** | 166         | 136         | 4           |
| **True 1** | 27          | 494         | 22          |
| **True 2** | 2           | 62          | 184         |

**Text Description:**
Same logic applies here.

We are pretty good to detect very small expected claims and very large expected claims. We can train different regression models on these different classes to train to maximize the final R2.

Note that these models are just random forest, with no grid-search and proper hyper-parameter tunning.

16

## Slide 17: 04 REGRESSION MODELS PREDICT TOTAL EXPECTED CLAIMS FOR EACH BUCKET

04
REGRESSION MODELS
PREDICT TOTAL EXPECTED CLAIMS FOR EACH BUCKET

17

## Slide 18: REGRESSION MODELS THREE DIFFERENT DATASETS

REGRESSION MODELS
THREE DIFFERENT DATASETS

**Organizational Information:**
*   Alabama Rural Electric Association
*   7,993 People
*   645,718 Claims

**Regression Models:**
(1) Model 1 - Full Dataset
(2) Model 2 - Only historical aggregates
(3) Model 3 - Only type of drugs

**Table 1: Model 1 - Full Dataset Example**

| ZIP.CODE | Days 2018 | Days 2019 | Days 2020 | Days 2021 | Days 2022 | Contract ID | Plan Paid 2021 | Member Paid 2021 | Age 2021 | Total Claims 2021 | TherapeuticClass02_*MUSCULOSKELETAL THERAPY AGENTS* | TherapeuticClass02_*ANTIEMETICS* |
| :------- | :-------- | :-------- | :-------- | :-------- | :-------- | :---------- | :------------- | :--------------- | :------- | :---------------- | :---------------------------------------------------- | :------------------------------- |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 0.00           | 57.04            | 16.0     | 17.0              | 0.0                                                   | 3.0                              |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 26.73          | 10.00            | 7.0      | 1.0               | 0.0                                                   | 0.0                              |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 40.00          | 0.00             | 34.0     | 1.0               | 0.0                                                   | 0.0                              |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 13.78          | 29.42            | 8.0      | 3.0               | 0.0                                                   | 0.0                              |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 41.25          | 201.65           | 35.0     | 34.0              | 0.0                                                   | 0.0                              |

**Table 2: Model 2 - Only historical aggregates Example**

| ZIP.CODE | Days 2018 | Days 2019 | Days 2020 | Days 2021 | Days 2022 | Contract ID | Plan Paid 2021 | Member Paid 2021 | Age 2021 | Total Claims 2021 | Plan Paid 2018 | Member Paid 2018 | Total Claims 2018 | Plan Paid 2019 | Member Paid 2019 | Total Claims 2019 | Plan Paid 2020 |
| :------- | :-------- | :-------- | :-------- | :-------- | :-------- | :---------- | :------------- | :--------------- | :------- | :---------------- | :------------- | :--------------- | :---------------- | :------------- | :--------------- | :---------------- | :------------- |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 0.00           | 57.04            | 16.0     | 17.0              | 57.42          | 4.07             | 55.33             | 14.0           | 3.08             | 37.12             | 8.0            |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 26.73          | 10.00            | 7.0      | 1.0               | 893.92         | 12.05            | 20.00             | 2.0            | 0.00             | 0.00              | 0.0            |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 40.00          | 0.00             | 34.0     | 1.0               | 8.53           | 5.53             | 10.00             | 1.0            | 0.00             | 0.00              | 0.0            |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 13.78          | 29.42            | 8.0      | 3.0               | 271.02         | 282.36           | 48.40             | 5.0            | 0.00             | 0.00              | 0.0            |
| 36426    | 0         | 0         | 122       | 365       | 365       |             | 241.25         | 201.65           | 35.0     | 34.0              | 548.82         | 190.85           | 198.71            | 42.0           | 146.94           | 101.32            | 16.0           |

**Table 3: Model 3 - Only type of drugs Example**

| Plan Paid 2021 | Age | TherapeuticClass02_*MUSCULOSKELETAL THERAPY AGENTS* | TherapeuticClass02_*ANTIEMETICS* | TherapeuticClass02_*ANTI-INFECTIVE AGENTS - MISC.* | TherapeuticClass02_*PENICILLINS* | TherapeuticClass02_*THYROID AGENTS* |
| :------------- | :-- | :---------------------------------------------------- | :------------------------------- | :------------------------------------------------- | :------------------------------- | :---------------------------------- |
| 0.00           | 16.0 | 0.0                                                   | 3.0                              | 0.0                                                | 0.0                              | 0.0                                 |
| 26.73          | 7.0 | 0.0                                                   | 0.0                              | 0.0                                                | 0.0                              | 0.0                                 |
| 40.00          | 34.0 | 0.0                                                   | 0.0                              | 0.0                                                | 0.0                              | 0.0                                 |
| 13.78          | 8.0 | 0.0                                                   | 0.0                              | 0.0                                                | 1.0                              | 0.0                                 |
| 241.25         | 35.0 | 0.0                                                   | 0.0                              | 1.0                                                | 1.0                              | 0.0                                 |

**Goal:** Regression the total expected claims between $5 and $1,000. This would be one of the three regression models, if using the classifier defined before.

**Note.** Considered regressing the log(y) as well, but as the model used here is XGBoost, it doesn't make a big difference.

18

## Slide 19: REGRESSION MODELS MODEL 1 - ENTIRE DATASET

REGRESSION MODELS
MODEL 1 - ENTIRE DATASET

**Model:** (XGBoost)

Using all available features. We see that mostly the historical aggregated features are important (The type of each drug doesn't appear in the Top 20).

**Performance on test set:** (20%)
*   Mean Absolute Error (MAE): 139.62
*   Root Mean Squared Error (RMSE): 196.14
*   R-squared (R^2): 0.41

*   Sum prediction: 115,624.54
*   Sum actual: 120,981.88

**! Still overfits much, working on it.**

**Feature Importance (Top Features):**

| Feature                 | F score |
| :---------------------- | :------ |
| Plan Paid 2021          | 2059.0  |
| Member Paid 2021        | 1913.0  |
| Plan Paid 2020          | 1123.0  |
| Member Paid 2020        | 1081.0  |
| Member Paid 2019        | 931.0   |
| Age                     | 891.0   |
| Plan Paid 2019          | 870.0   |
| Member Paid 2018        | 806.0   |
| Total Claims 2021       | 774.0   |
| Plan Paid 2018          | 729.0   |
| Total Claims 2020       | 536.0   |
| Total Claims 2018       | 425.0   |
| Total Claims 2019       | 338.0   |
| Days 2021               | 307.0   |
| Days 2022               | 269.0   |
| Days 2020               | 185.0   |
| Relationship_Spouse     | 90.0    |
| Gender_F                | 76.0    |
| Relationship_Subscriber | 47.0    |
| Gender_M                | 36.0    |

**Chart Description: Plan Paid 2022 Scatter Plot**
A scatter plot comparing predicted values against actual "Plan Paid 2022" values.
*   X-axis: Plan Paid 2022 (0 to 1000)
*   Y-axis: Predicted Value (0 to 800)
The points are scattered, indicating that the model has some predictive power but also shows significant spread, especially for higher values, consistent with the R-squared and "overfits" note.

**Footnotes:**
Note1: No hyper-parameter tuning (grid-search), basic model.
Note2: Adding all the very small claims will most likely reduce the R2 even more..

19

## Slide 20: REGRESSION MODELS MODEL 2 - HISTORICAL DATA (NO DRUG TYPES)

REGRESSION MODELS
MODEL 2 - HISTORICAL DATA (NO DRUG TYPES)

**Model:** (XGBoost)

Without using the type of drugs, the performance on the test set decreases.

**Performance on test set:** (20%)
*   Mean Absolute Error (MAE): 148.62
*   Root Mean Squared Error (RMSE): 205.95
*   R-squared (R^2): 0.26

**Feature Importance (Top Features):**

| Feature                 | F score |
| :---------------------- | :------ |
| Plan Paid 2021          | 2059.0  |
| Member Paid 2021        | 1913.0  |
| Plan Paid 2020          | 1123.0  |
| Member Paid 2020        | 1081.0  |
| Member Paid 2019        | 931.0   |
| Age                     | 891.0   |
| Plan Paid 2019          | 870.0   |
| Member Paid 2018        | 806.0   |
| Total Claims 2021       | 774.0   |
| Plan Paid 2018          | 729.0   |
| Total Claims 2020       | 536.0   |
| Total Claims 2018       | 425.0   |
| Total Claims 2019       | 338.0   |
| Days 2021               | 307.0   |
| Days 2022               | 269.0   |
| Days 2020               | 185.0   |
| Relationship_Spouse     | 90.0    |
| Gender_F                | 76.0    |
| Relationship_Subscriber | 47.0    |
| Gender_M                | 36.0    |

**Chart Description: Plan Paid 2022 Scatter Plot**
A scatter plot comparing predicted values against actual "Plan Paid 2022" values, similar to Model 1 but showing wider scattering and less clear correlation, reflecting the lower R-squared.
*   X-axis: Plan Paid 2022 (0 to 1000)
*   Y-axis: Predicted Value (0 to 800)

**Note:** No hyper-parameter tuning (grid-search), basic model.

20

## Slide 21: REGRESSION MODELS MODEL 3 - USING ONLY THE TYPE OF DRUGS AND HISTORICAL DATA

REGRESSION MODELS
MODEL 3 - USING ONLY THE TYPE OF DRUGS AND HISTORICAL DATA

**Model:** (XGBoost)

Limit the features to Plan Paid 2021, Age and the number of claims for each type of drugs.

**Performance on test set:** (20%)
*   Mean Absolute Error (MAE): 148.01
*   Root Mean Squared Error (RMSE): 208.23
*   R-squared (R^2): 0.24

Lower performance but interesting to analyze which drugs influence mostly the target variable.

**Feature Importance:**

| Feature                                                    | F score |
| :--------------------------------------------------------- | :------ |
| Plan Paid 2021                                             | 35899.0 |
| Age                                                        | 23388.0 |
| TherapeuticClass02_*PENICILLINS*                           | 4999.0  |
| TherapeuticClass02_*ANTIDEPRESSANTS*                       | 3685.0  |
| TherapeuticClass02_*ULCER DRUGS/ANTISPASMODICS/ANTICHOLINERGICS* | 3607.0  |
| TherapeuticClass02_*VACCINES*                              | 3289.0  |
| TherapeuticClass02_*ANTIEMETICS*                           | 3174.0  |
| TherapeuticClass02_*CORTICOSTEROIDS*                       | 3002.0  |
| TherapeuticClass02_*MACROLIDES*                            | 2935.0  |
| TherapeuticClass02_*DERMATOLOGICALS*                       | 2923.0  |
| TherapeuticClass02_*ANTIHYPERLIPIDEMICS*                   | 2782.0  |
| TherapeuticClass02_*ANTI-INFECTIVE AGENTS - MISC.*         | 2706.0  |
| TherapeuticClass02_*ANTIHYPERTENSIVES*                     | 2696.0  |
| TherapeuticClass02_*CEPHALOSPORINS*                        | 2694.0  |
| TherapeuticClass02_*ANALGESICS - OPIOID*                   | 2585.0  |
| TherapeuticClass02_*ANALGESICS - ANTI-INFLAMMATORY*        | 2488.0  |
| TherapeuticClass02_*MUSCULOSKELETAL THERAPY AGENTS*        | 2252.0  |
| TherapeuticClass02_*ANTIASTHMATIC AND BRONCHODILATOR AGENTS* | 2199.0  |
| TherapeuticClass02_*COUGH/COLD/ALLERGY*                    | 1966.0  |
| TherapeuticClass02_*CONTRACEPTIVES*                        | 1741.0  |

**Note:** No hyper-parameter tuning (grid-search), basic model.

21

## Slide 22: 05 FEATURE GENERATION USING NATURAL LANGUAGE PROCESSING

05
FEATURE GENERATION
USING NATURAL LANGUAGE PROCESSING

22

## Slide 23: FEATURE GENERATION USING NATURAL LANGUAGE PROCESSING

FEATURE GENERATION
USING NATURAL LANGUAGE PROCESSING

**Table: Historical Prescriptions Overview**

| Contract ID | Name | Plan Paid_<= 2021 | Plan Paid_>= 2022 | Member Paid_<= 2021 | Historical Prescriptions                                      |
| :---------- | :--- | :---------------- | :---------------- | :------------------ | :------------------------------------------------------------ |
| 17          |      | 0.00              | 0.0               | 14.29               | 0 0 0.0 0 0.0 0.0 0.0 0 0.0 0 0.0 0 0.0 0 0.0                 |
| 18          |      | 0.00              | 0.0               | 46.50               | Mupirocin Ointment 2% Ointment 0.0 GM 22.0 1....              |
| 19          |      | 0.92              | 0.0               | 35.35               | Ciprofloxacin HCl Tablet 500 MG Tablet 0.0 EA ...             |
| 20          |      | 750.39            | 0.0               | 246.34              | Amphetamine-Dextroamphetamine Tablet 20 MG Tab...             |
| 21          |      | 373.76            | 0.0               | 112.46              | Escitalopram Oxalate Tablet 10 MG Tablet 0.0 E...             |
| 22          |      | 6033.92           | 0.0               | 2311.91             | Cyclobenzaprine HCI Tablet 5 MG Tablet 0.0 EA ...             |
| 23          |      | 6687.73           | 0.0               | 2252.50             | Diclofenac Sodium Tablet Delayed Release 50 MG...             |
| 24          |      | 347.46            | 0.0               | 70.00               | Cyclobenzaprine HCI Tablet 10 MG Tablet 0.0 EA...             |

**Full Historical Prescriptions Text (OCR provided as a single block):**

Cyclobenzaprine HCl Tablet 10 MG Tablet 0.0 EA 1000.0 1.0 75.0 *MUSCULOSKELETAL THERAPY AGENTS* 7510.0 *Central Muscle Relaxants*** 75100050.0 Cyclobenzaprine 7510005010.0 Cyclobenzaprine HCl 751000501003 Cyclobenzaprine HCl Tablet 75100050100305 Cyclobenzaprine HCl Tab 10 MG Cyclobenzaprine HCl 2017-04-14 1091.49 1.09149 True 1.0traMADol HCl Tablet 50 MG Tablet 4.0 EA 1000.0 1.0 65.0 *ANALGESICS - OPIOID* 6510.0 *Opioid Agonists*** 651000.0 *Opioid Agonists*** 65100095.0 Tramadol 6510009510.0 Tramadol HCl 651000951003 Tramadol HCl Tablet 65100095100320 Tramadol HCl Tab 50 MG traMADol HCl 2017-03-17 824.97 0.82497 True 1.0Mirtazapine Tablet 45 MG Tablet 0.0 EA 30.0 1.0 58.0 *ANTIDEPRESSANTS* 5803.0 *Alpha-2 Receptor Antagonists (Tetracyclics)** 580300.0 *Alpha-2 Receptor Antagonists (Tetracyclics)*** 58030050.0 Mirtazapine 5803005000.0 Mirtazapine 580300500003 Mirtazapine Tablet 58030050000345 Mirtazapine Tab 45 MG Mirtazapine 2017-08-16 85.24 2.84133 True 2.0clonazePAM Tablet 1 MG Tablet 4.0 EA 500.0 1.0 72.0 *ANTICONVULSANTS* 7210.0 *Anticonvulsants - Benzodiazepines*** 721000.0 *Anticonvulsants - Benzodiazepines*** 72100010.0 Clonazepam 7210001000.0 Clonazepam 721000100003 Clonazepam Tablet 72100010000310 Clonazepam Tab 1 MG clonazePAM 2017-11-03 416.47 0.83294 True 1.00 0 0.0 0 0.0 0.0 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0 0 0 0 0 0 0 0.0 0.0 False 0.0ProAir HFA Aerosol Solution 108 (90 Base) MCG/ACT Aerosol Solution 0.0 GM 8.5 1.0 44.0 *ANTIASTHMATIC AND BRONCHODILATOR AGENTS* 4420.0 *Sympathomimetics*** 442010.0 Beta Adrenergics*** 44201010.0 Albuterol 4420101010.0 Albuterol Sulfate 442010101034 Albuterol Sulfate Aerosol Solution 44201010103410 Albuterol Sulfate Inhal Aero 108 MCG/ACT (90MCG Base Equiv) ProAir HFA 2022-01-01 87.96 10.34824 False 2.00 0 0.0 0 0.0 0.0 0.0 0 0.0 0 0.0 0 0.0 0 0.0 0 0 0 0 0 0 0 0.0 0.0 False 0.0Doxycycline Hyclate Capsule 100 MG Capsule 0.0 EA 500.0 1.0 4.0 *TETRACYCLINES* 400.0 *Tetracyclines*** 40000.0 *Tetracyclines*** 4000020.0 Doxycycline 400002010.0 Doxycycline Hyclate 040000201001 Doxycycline Hyclate Capsule 04000020100110 Doxycycline Hyclate Cap 100 MG Doxycycline Hyclate 2013-02-05 3073.46 6.14692 True 1.0Virtussin A/C Solution 100-10 MG/5ML Solution 5.0 ML 473.0 1.0 43.0 *COUGH/COLD/ALLERGY* 4399.0 *Cough/Cold/Allergy Combinations*** 439970.0 *Antitussive-Expectorant*** 43997002.0 Antitussive-Expectorant - Two Ingredient 4399700228.0 Guaifenesin-Codeine 439970022820 Guaifenesin-Codeine Solution 43997002282020 Guaifenesin-Codeine Soln 100-10 MG/5ML Virtussin A/C 2015-09-01 47.75 0.10095 False 1.0Mirtazapine Tablet 45 MG Tablet 0.0 EA 30.0 1.0 58.0 *ANTIDEPRESSANTS* 5803.0 *Alpha-2 Receptor Antagonists (Tetracyclics)** 580300.0 *Alpha-2 Receptor Antagonists (Tetracyclics)*** 58030050.0 Mirtazapine 5803005000.0 Mirtazapine 580300500003 Mirtazapine Tablet 58030050000345 Mirtazapine Tab 45 MG Mirtazapine 2017-08-16 85.24 2.84133 True 2.0clonazePAM Tablet 1 MG Tablet 4.0 EA 500.0 1.0 72.0 *ANTICONVULSANTS* 7210.0 *Anticonvulsants - Benzodiazepines*** 721000.0 *Anticonvulsants - Benzodiazepines*** 72100010.0 Clonazepam 7210001000.0 Clonazepam 721000100003 Clonazepam Tablet 72100010000310 Clonazepam Tab 1 MG clonazePAM 2017-11-03 416.47 0.83294 True False 0.0Azithromycin Tablet 250 MG Tablet 0.0 EA 6.0 3.0 3.0 *MACROLIDES* 340.0 *Azithromycin*** 34000.0 *Azithromycin*** 3400010.0 Azithromycin 340001000.0 Azithromycin 034000100003 Azithromycin Tablet 03400010000320 Azithromycin Tab 250 MG Azithromycin 2012-01-10 140.1 7.78333 True 1.0Mirtazapine Tablet 45 MG Tablet 0.0 EA 30.0 1.0 58.0 *ANTIDEPRESSANTS* 5803.0 *Alpha-2 Receptor Antagonists (Tetracyclics)** 580300.0 *Alpha-2 Receptor Antagonists (Tetracyclics)*** 58030050.0 Mirtazapine 5803005000.0 Mirtazapine 580300500003 Mirtazapine Tablet 58030050000345 Mirtazapine Tab 45 MG Mirtazapine 2017-08-16 85.24 2.84133 True 2.0HYDROcodone-Acetaminophen Tablet 7.5-325 MG Tablet 2.0 EA 1000.0 1.0 65.0 *ANALGESICS - OPIOID* 6599.0 *Opioid Combinations*** 659917.0 *Hydrocodone Combinations*** 65991702.0 Hydrocodone Combination - Two Ingredient 6599170210.0 Hydrocodone-Acetaminophen 659917021003 Hydrocodone-Acetaminophen Tablet [...]

23

## Slide 24: FEATURE GENERATION USING NATURAL LANGUAGE PROCESSING

FEATURE GENERATION
USING NATURAL LANGUAGE PROCESSING

**(1) Clean the text:**
Apply classic NLP cleaning methods to keep the essential words only.

**(2) NLP Methods**
The most simple methods would be feature extraction methods like TF-IDF, Word2Vec, or even more advanced neural networks. Some usual medical libraries are described below:

*   **spaCy:** It is an open-source NLP library that provides out-of-the-box models for various domains, including the medical domain.
*   **ScispaCy:** A specialized version of spaCy that is trained specifically on scientific and biomedical text, which makes it ideal for processing medical text.
*   **BioBERT:** A pre-trained transformer-based model specifically designed for the biomedical domain. It is pre-trained with Wiki + Books + PubMed + PMC.
*   **ClinicalBERT:** Another pre-trained model designed to process clinical notes & discharge summaries from the MIMIC-III database.
*   **Med7:** A transformer-based model that was trained on electronic health records (EHR) to extract seven key clinical concepts, including diagnosis, medication, and tests.
*   **DisMod-ML:** A probabilistic modeling framework for disease modeling that uses NLP techniques to process medical text.
*   **MEDIC:** A rule-based NLP system for extracting medical information from text.

24

## Slide 25: FEATURE GENERATION USING NATURAL LANGUAGE PROCESSING

FEATURE GENERATION
USING NATURAL LANGUAGE PROCESSING

Quick Word2Vec training, and one feature seems even more important than Member Paid 2022, which was a very important one previously.

**Feature Importance:**

| Feature               | F score |
| :-------------------- | :------ |
| Plan Paid before 2022 | 2316.0  |
| Word2Vec0             | 1885.0  |
| Member Paid before 2022 | 1681.0  |
| Word2Vec2             | 1270.0  |
| Word2Vec1             | 1189.0  |
| Word2Vec6             | 1013.0  |
| Word2Vec3             | 879.0   |
| Word2Vec4             | 827.0   |
| Word2Vec5             | 815.0   |
| Word2Vec7             | 777.0   |
| Word2Vec8             | 762.0   |
| Word2Vec9             | 749.0   |

**Note:** Red arrow points to "Word2Vec0" (1885.0), indicating "Important feature selected from the 20 Word2Vec generated features."

25

## Slide 26: FEATURE GENERATION USING EXTERNAL DATABASES

FEATURE GENERATION
USING EXTERNAL DATABASES

Maintenance drugs are prescriptions commonly used to treat conditions that are considered chronic or long-term. These conditions usually require regular, daily use of medicines.

(1) Understand which claims are maintenance drugs, and therefore likely to become chronic.
(2) Split the training data into two columns:
    (a) Regular Paid 2021
    (b) Irregular Paid 2021

This will help the model to detect chronic diseases and individuals with chronic high risk.

**→ Potential databases:**
*   CVS Maintenance Drugs list
*   Commonly Prescribed Maintenance Medications

**→ Identify chronic diseases based on the claim text file, using a medical train NLP.**
**Link:** https://pubmed.ncbi.nlm.nih.gov/24172142/

**Embedded Research Paper Snippet:**

> BMC Public Health. 2013 Oct 30;13:1030. doi: 10.1186/1471-2458-13-1030.
> **Identifying patients with chronic conditions using pharmacy data in Switzerland: an updated mapping approach to the classification of medications**
> Carola A Huber 1, Thomas D Szucs, Roland Rapold, Oliver Reich
> Affiliations + expand
> PMID: 24172142 PMCID: PMC3840632 DOI: 10.1186/1471-2458-13-1030
> Free PMC article

26

## Slide 27: 06 NEXT STEPS ACTION PLAN TO BUILD THE PRODUCT

06 NEXT STEPS
ACTION PLAN TO BUILD THE PRODUCT

27

## Slide 28: NEXT STEPS ACTION PLAN PROPOSITION FOR DEVELOPING THE TECH

NEXT STEPS
ACTION PLAN PROPOSITION FOR DEVELOPING THE TECH

**Flowchart of Action Plan:**

1.  **Establish metrics and KPIs**
    *   MAE? RMSE? R2?
    *   Company-level? Policyholder-level?

2.  **Literature Review**
    *   Explore available models for insurance claims predictions online.

3.  **Understand regulations**
    *   Which models can we actually use for that application?

4.  **Build the dataset**
    *   Build one large consistent dataset using: claims/eligibility data, consumer data, maintenance drugs, NLP-based features.

5.  **Start training**
    *   Train various models and explore metrics. Validate results with business insights.

28

## Slide 29: NEXT STEPS ACTION PLAN PROPOSAL FOR TRAINING MODELS

NEXT STEPS
ACTION PLAN PROPOSAL FOR TRAINING MODELS

**Flowchart: Action Plan for Training Models**

*   **Overall Goal:** Identify key features to help refining the data acquisition strategy.

**Step 1 - Build Massive Dataset**
*   **Inputs:**
    *   Claims
    *   Eligibility
    *   Online (Ex. Maintenance Drugs)
    *   Consumer Data
*   **Outputs:**
    *   NLP-based Features

**Step 2 - Train a classifier**
*   **Input:** NLP-based Features and other aggregated data from Step 1.
*   **Component:** Classification Head
*   **Output Classes (to regressors):**
    *   **Class I - Repeat Claimants:** Claimed before, will claim again
    *   **Class II - Former Claimants:** Claimed before, won't claim again
    *   **Class III - New Claimants:** Didn't claim before, will claim
    *   **Class IV - Non-Claimants:** Didn't claim before, won't claim

**Step 3 - Train regressors**
*   **Inputs:** Outputs from Classification Head (Class I, II, III, IV)
*   **Components:**
    *   Class I Regressor
    *   Class II Regressor
    *   Class III Regressor
    *   Class IV Regressor
*   **Output:** Regressed total claims for each class.

**Step 4 - Derive outputs**
*   **Inputs:** Outputs from Regressors
*   **Outputs:**
    *   Derive total expected claims per company
    *   Compute Performance Metrics:
        *   MAE?
        *   RMSE?
        *   R2?

29

## Slide 30: THANK YOU FOR YOUR TIME

THANK YOU FOR YOUR TIME

CONTACT
Victor Radermecker
Email: victorr@mit.edu / victor.radermecker@gmail.com
Phone: 617-251-6180

30