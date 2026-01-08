---
source_pdf: "https://drive.google.com/file/d/1ehbFr3QgMAznOMysa7M22I4jk2r31UREj8s4ucQHkwg/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "agm deck (1) (1)"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1ehbFr3QgMAznOMysa7M22I4jk2r31UREj8s4ucQHkwg/view)

## Slide 1: INTEGRAL

7
40
150
160
170
V
V
180
190 200

INTEGRAL
220
AUTOMATING HEALTHCARE DATA
240
250
COMPLIANCE
260

## Slide 2: THE PROBLEM

Healthcare data compliance takes too long and results in outdated insights that can't be leveraged

## Slide 3: WHY IT MATTERS

As a result, pharma companies can't analyze customer behavior and they're losing billions

## Slide 4: WHY IT MATTERS

A unified platform that automates
HIPAA compliance at the dataset level

*   **[Database icon]** One platform to house data and communications
*   **[Wrench and spanner icon]** Automated HIPAA risk analysis upon data ingestion
*   **[Organizational chart icon]** Automated audit/compliance documentation management

## Slide 5: MARKET

MARKET
Land
*   LiveRamp
*   snowflake
*   komodohealth

$20 Billion +
Pharmaceutical spend on
commercial analytics

Expand
*   MERCK
*   Johnson&Johnson
*   Albertsons
*   abbvie
*   Otsuka

$210 Billion +
Pharmaceutical spend on clinical
trials R&D

Background numbers: 150, 60, 170, 180, 190, 200, 21, 06, 08.

## Slide 6: OUR SOLUTION - INTEGRAL

**One source of truth for all vendor/client coordination and project management**

Integral
Integral Demo Workflow
*   **Overview**
    *   Security and Legal: Completed Aug 1
*   **Stakeholders**
    *   Data Upload: Completed Aug 11
*   **Analytics**
    *   Integral Analysis: Not Started Aug 16
*   **Document Upload**
    *   Data Changes: Not Started
*   Next milestone due in 81 days

**Automatically detects data uploads and runs HIPAA analysis in real time**

Integral
< Back
SDOH Data
*   Privacy
*   Data
*   Remediation Options

Sort by: Severity: High to Low

| Column Name                           | Severity | Unique Values | Nulls | Cardinality | Last Processed |
| :------------------------------------ | :------- | :------------ | :---- | :---------- | :------------- |
| zip_code                              | MEDIUM   | 101           | 0     | 0.00        | Oct 12         |
| education_level                       | MEDIUM   | 7             | 0     | 0.00        | Oct 12         |
| occupation                            | MEDIUM   | 30            | 0     | 0.00        | Oct 12         |
| income                                | LOW      | 67786         | 0     | 0.68        | Oct 12         |
| patient_id                            | LOW      | 100000        | 0     | 1.00        | Oct 12         |
| household_id                          | LOW      | 100000        | 0     | 1.00        | Oct 12         |
| access_to_internet                    | LOW      | 2             | 0     | 0.00        | Oct 12         |
| community_resources_food_bank         | LOW      | 2             | 0     | 0.00        | Oct 12         |
| cultural_beliefs                      | LOW      | 20            | 0     | 0.00        | Oct 12         |
| employment_status                     | LOW      | 2             | 0     | 0.00        | Oct 12         |
| food_security                         | LOW      | 2             | 0     | 0.00        | Oct 12         |
| health_literacy                       | LOW      | 6             | 0     | 0.00        | Oct 12         |
| home_environment                      | LOW      | 17            | 0     | 0.00        | Oct 12         |
| housing_type                          | LOW      | 20            | 0     | 0.00        | Oct 12         |
| insurance_coverage                    | LOW      | 20            | 0     | 0.00        | Oct 12         |

## Slide 7: OUR SOLUTION - INTEGRAL

**Automatically records all compliance processes and generates audit documentation**

Integral
Document Upload
*   **Name**
    *   Data Dictionaries
    *   Use Case Description
    *   Data Origin and Intended Recipients
    *   Existing Expert Reports
*   **Actions**
    *   [Icon: cloud upload]
    *   [Icon: cloud upload]
    *   [Icon: cloud upload]
    *   [Icon: cloud upload]

**Real time risk remediations and data editing**

Integral
Option 1
Accept Change

| Column Name                                 | Suppression Type | Notes                                      | Last Processed |
| :------------------------------------------ | :--------------- | :----------------------------------------- | :------------- |
| patient_age_at_diagnosis                    | GENERALIZE       | Top recode as 89+                          | Sep 29         |
| comorbidity_icd_code                        | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| personal_history_of_cancer_icd_code         | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| personal_history_of_cancer_icd_code_description | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| comorbidity_icd_descriptor                  | DROP             | Suppress if ICD code suppressed            | Sep 29         |
| personal_history_of_cancer_icd_version      | DROP             | Suppress if ICD code suppressed            | Sep 29         |
| diagnosis_icd10                             | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| disease_initial_diagnosis_icd10             | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| secondary_disease_diagnosis_icd10           | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| diagnosis_icd10_description                 | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| secondary_disease_diagnosis_icd10_description | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| diagnosis_icd9                              | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| disease_initial_diagnosis_icd9              | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| secondary_disease_diagnosis_icd9            | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| diagnosis_icd9_description                  | GENERALIZE       | Recode according to ICD Transformation     | Sep 29         |
| patient_year_of_birth                       | DROP             | Removed if age is over 89                  | Sep 29         |

## Slide 8: WHY NOW

*   Covid-19 digital data sharing created massive healthcare data repositories
*   New government policies are promoting for healthcare data sharing
*   Digital channels for healthcare advertising and messaging are gaining rapid adoption due to Covid-19

## Slide 9: FUTURE - COMPLIANCE OS FOR HEALTHCARE DATA ANALYTICS

**01**
Enable pharma
companies to analyze
customers quickly and
optimize distribution
strategies

**02**
Streamline drug
development research
by enabling quick,
tailored patient
profiles

**03**
Enable seamless data
transferring and
collaboration at scale

**04**
Enable any startup to
work with healthcare
data in hours (not
months)

## Slide 10: TEAM

Shubh
*   Built 4 data analysis products @ LiveRamp producing $10M+ revenue in 2 years for top pharmaceutical and insurance brands
*   Led HIPAA compliance reviews for pharmaceutical, insurance, analytics, and clinical trial recruitment companies

John
*   Built large data systems and robust applications with 10k+ users
*   Former Senior Software Engineer at Oliver Space (#10 of 100+ employees)
*   Former Software Engineer @ Salesforce

## Slide 11: COMPETITIVE ADVANTAGE

*   Spent 2+ years leading manual HIPAA data compliance reviews for top pharma and insurance companies
*   Spent 5 years building large data processing systems
*   First Mover Advantage

## Slide 12: TRACTION

**6 customers**
*   Eli Lilly

**3 partners**
*   LiveRamp ($RAMP)
*   PurpleLab (Series B)
*   Skyflow (Series B)