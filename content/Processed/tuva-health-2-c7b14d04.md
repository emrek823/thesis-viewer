---
source_pdf: "https://drive.google.com/file/d/1LmcWq4JK6Ijeizvd3e9dWlSvN-k7h109/view?usp=drivesdk"
drive_folder: "Portfolio/Tuva Health/Tuva Health"
type: portfolio
company: Tuva Health
ingested: 2025-12-26
original_filename: "Tuva Health (2).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1LmcWq4JK6Ijeizvd3e9dWlSvN-k7h109/view?usp=drivesdk)

## Slide 1: TUVAHEALTH

TUVAHEALTH
Open source software that cleans and transforms
messy healthcare data

## Slide 2: Former senior execs leading product and data science

Former senior execs leading
product and data science

**Aaron Neiderhiser**
CEO + Co-founder
HealthCatalyst

**Jorge Zuloaga**
CTO + Co-founder
strive
HEALTH

## Slide 3: Problem

Problem

*   Raw healthcare data (EHR, claims, labs) is useless for analytics + ML
*   Solution (data transformation + data quality) is complex, requiring highly-specialized healthcare knowledge
*   ~40 customer discovery conversations confirmed industry-wide problem

3

## Slide 4: Simple Example: Patient Race

Simple Example: Patient Race

Patient race is represented dozens of different ways in the EHR

| Raw Data            |
| :------------------ |
| African American    |
| Alaskan Native      |
| American Indian     |
| asian               |
| Asian               |
| Black               |
| black               |
| black american      |
| blk                 |
| Chinese             |
| Indian              |
| indian              |
| Japanese            |
| Missing             |
| N/A                 |
| n/a                 |
| Native American     |
| native American     |
| not known           |
| Other               |
| other               |
| Unknown             |
| unknown             |
| White               |
| white               |
| Whtie               |

Normalized data ready to analyze

| Normalized Data                    |
| :--------------------------------- |
| American Indian or Alaskan Native  |
| Asian                              |
| Black or African American          |
| Native Hawaiian or Other Pacific Islander |
| White                              |
| Other                              |
| Unknown                            |

4

## Slide 5: Hundreds of Examples

Hundreds of Examples

**Data Normalization**

| Category     | Description                                                                                             |
| :----------- | :------------------------------------------------------------------------------------------------------ |
| **Medications** | Requests, administrations, drug names drug classes, doses, routes, strengths, quantities, medication history, etc. |
| **Labs**     | Orders, results, panels, components, reference ranges, specimens, status, etc.                          |
| **Visit Types** | Acute inpatient, outpatient, ambulatory, inpatient rehab, home health, SNF, hospice, palliative care, ED, etc. |
| **Vital Signs** | Blood pressure, heart rate, respiratory rate, oxygen saturation, height, weight, body temperature   |
| **Patients** | Birth, death, gender, race, ethnicity, language, marital status, address, city, state, zip code, master patient index |
| **And more...** | Providers, conditions, procedures, immunizations, allergies, family history, observations, etc.       |

**Data Enrichment**

| Category        | Description                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------ |
| **Readmissions** | Index admissions, specialty cohorts, planned admissions, transfers, same day, etc.                      |
| **Risk Scores** | Generated from publicly available models (e.g. CMS-HCC) for stratification and adjustment               |
| **Quality Measures** | Diabetic foot exam, well-child check, immunization screenings, colorectal cancer screening, etc.        |
| **Under-Dx**    | Logic comparing lab tests to diagnoses to identify patients that may be under-diagnosed                 |
| **Care Gaps**   | Logic comparing medication history to diagnoses to identify patients that may be under-treated          |
| **And more...** | Phenotypes, provider network, patient attribution, medical economics, acute complications, and more...  |

## Slide 6: Our solution generates data in a common, quality-tested format

Our solution generates data in a common,
quality-tested format

| Data Sources | Tuva Project                                       | Data Science |
| :----------- | :------------------------------------------------- | :----------- |
| EHR          | **Core**                                           | Notebooks    |
| Claims       | &nbsp;&nbsp;&nbsp;&nbsp;Common Data Model          | Dashboards   |
| HIE          | &nbsp;&nbsp;&nbsp;&nbsp;Common Terminology         | ML Models    |
| Lab          | **Enrichment**                                     |              |
| Wearables    | &nbsp;&nbsp;&nbsp;&nbsp;Readmissions               |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;HCCs                       |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Spend + Utilization        |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Quality Measures           |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Patient Attribution        |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Network + Referrals        |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Care Gaps                  |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Under-Dx Patients          |              |
|              | **Data Quality Testing**                           |              |
|              | **Documentation**                                  |              |

Check out docs.tuvahealth.com for a detailed overview of the Tuva Project.

## Slide 7: Traction in 3 months

Traction in 3 months

*   Dec 2021: Launched Tuva Project on Github
*   Jan 2022: Signed 1st customer paying $10k/month
*   Feb 2022: Completed 1st major software release

7

## Slide 8: Customer case study: Syntegra

Customer case study: Syntegra

**What they do:**
Syntegra uses AI to generate realistic synthetic healthcare datasets

**How they use Tuva:**
*   Syntegra gets data from customers in many different formats
*   They use to Tuva to normalize this data into a common format

**Status:**
*   3 datasets running on Tuva and adding more
*   Expanding core data model, adding data quality tests, and data marts

8

## Slide 9: Network Effects

Network Effects

Every customer's data is in the exact same quality-tested format

This enables:
1.  Reusable community-created content
2.  Multi-customer datasets for benchmarking, research, and ML

## Slide 10: Our vision

Our vision

**Tuva Project**
Phase 1
Open standard for healthcare data transformation

**Tuva Cloud**
Phase 2
Hosted + hybrid versions of Tuva Project

**Tuva Network**
Phase 3
Multi-customer data network and data science apps

## Slide 11: Market Size

$5B
$500k/year x 10k healthcare orgs (U.S. only)

| Traditional Healthcare | Digital Health           | Health Tech      | Pharma                          |
| :--------------------- | :----------------------- | :--------------- | :------------------------------ |
| Health Systems         | Virtual-first Providers  | Data Analytics   | BioPharma                       |
| Payers                 | Virtual-first Payers     | Infrastructure   | Contract Research Organizations |
| ACOs                   |                          | RWD/RWE          |                                 |

11

## Slide 12: What we need

What we need

*   $1.5m to build Tuva Project
*   Hire 10 data engineers
*   1-year target: $1m ARR (10x)

12

## Slide 13: Appendix

Appendix

13

## Slide 14: How we make $

How we make $

**Phase 1: Tuva Project Development Program - years 1+2**
*   Pricing: $10k per month
*   Customers: 20+

**Phase 2: Tuva Cloud (managed service) - years 3+4**
*   Pricing: $10-100k per month (based on data volume)
*   Customers: 40+ (convert from dev program)

**Phase 3: Tuva Network (SaaS) - years 5+**
*   Pricing: $100k annual subscription ramping to $1m+
*   Customers: 80+ (both Tuva Cloud and Tuva Network)

14

## Slide 15: Why Tuva Cloud?

Why Tuva Cloud?

*   Mapping raw data sources to a common data model and terminology can be labor intensive
*   Software can make this process 10x more efficient than manual approaches
*   This software is not part of the Tuva Project (open source)

| Data Sources | Tuva Project                                       | Data Science |
| :----------- | :------------------------------------------------- | :----------- |
| EHR          | **Core**                                           | Notebooks    |
| Claims       | &nbsp;&nbsp;&nbsp;&nbsp;Common Data Model          | Dashboards   |
| HIE          | &nbsp;&nbsp;&nbsp;&nbsp;Common Terminology         | ML Models    |
| Lab          | **Enrichment**                                     |              |
| Wearables    | &nbsp;&nbsp;&nbsp;&nbsp;Readmissions               |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;HCCs                       |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Spend + Utilization        |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Quality Measures           |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Patient Attribution        |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Network + Referrals        |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Care Gaps                  |              |
|              | &nbsp;&nbsp;&nbsp;&nbsp;Under-Dx Patients          |              |
|              | **Data Quality Testing**                           |              |
|              | **Documentation**                                  |              |

## Slide 16: Tuva Cloud

Tuva Cloud
Tuva Cloud customers outsource their data transformation and data quality to us

| Data Sources | Proprietary Software       | Tuva Project                                       | Data Science |
| :----------- | :------------------------- | :------------------------------------------------- | :----------- |
| EHR          | **Normalization Engine**   | **Core**                                           | Notebooks    |
| Claims       | &nbsp;&nbsp;Auto-mapped Recommnedations | &nbsp;&nbsp;&nbsp;&nbsp;Common Data Model          | Dashboards   |
| HIE          | &nbsp;&nbsp;Human-in-the-Loop Workflow | &nbsp;&nbsp;&nbsp;&nbsp;Common Terminology         | ML Models    |
| Lab          | **Data Quality Surveillance** | **Enrichment**                                     |              |
| Wearables    | &nbsp;&nbsp;Detect                 | &nbsp;&nbsp;&nbsp;&nbsp;Readmissions               |              |
|              | &nbsp;&nbsp;Prioritize             | &nbsp;&nbsp;&nbsp;&nbsp;HCCs                       |              |
|              | &nbsp;&nbsp;Monitor                | &nbsp;&nbsp;&nbsp;&nbsp;Spend + Utilization        |              |
|              |                            | &nbsp;&nbsp;&nbsp;&nbsp;Quality Measures           |              |
|              |                            | &nbsp;&nbsp;&nbsp;&nbsp;Patient Attribution        |              |
|              |                            | &nbsp;&nbsp;&nbsp;&nbsp;Network + Referrals        |              |
|              |                            | &nbsp;&nbsp;&nbsp;&nbsp;Care Gaps                  |              |
|              |                            | &nbsp;&nbsp;&nbsp;&nbsp;Under-Dx Patients          |              |
|              |                            | **Data Quality Testing**                           |              |
|              |                            | **Documentation**                                  |              |

## Slide 17: Competition

Competition

*   Data Platforms - Health Catalyst, Innovaccer, Ursa Health
*   Normalization (Unstructured Data) - John Snow Labs, Science.io, Mendel AI
*   Normalization (Structured Data) - Diameter Health
*   Enrichment - 3M, Milliman, Johns Hopkins, Optum

## Slide 18: Customer Discovery Calls - Who We Talked To

Customer Discovery Calls - Who We Talked To

39 conversations over ~4 months
*   Traditional Healthcare: 9
*   Digital Health: 10
*   Health Tech: 18
*   Pharma: 2

*(Visuals include logos of companies such as onerecord, PINE PARK HEALTH, LucernaHealth, particle, Health, Cricket Health, strive HEALTH, sunnyside, UW Medicine, eVisit, PointClickCare, virta, actium, HORNE, omada, Nascare, ATROPOS, kaia health, OSU, Planned Parenthood, bwell, verily, eva, HCPF, Stanford HEALTH CARE, HEALTH GORILLA, Home SYNTEGRA, Kara Health, Zus, Hydrogen Health, apollomed, healthcare Vesta, epam, Janssen, Johnson&Johnson, Laguna, erudition HEALTH.)*

## Slide 19: Customer Discovery Calls - Key Learnings

Customer Discovery Calls - Key Learnings

**Ideal Customer Profile:**
Health tech companies have access to patient data and are the most financially motivated to streamline data infrastructure (impacts COGS)

**Most Common Need:**
Majority of customers have data in multiple formats and need to standardize to a single common format to scale their data product development

**Top Use Cases:**
1) Value-based care (medical economics, risk stratification, patient attribution, quality measures, etc.)
2) Research (HEOR, clinical trials recruitment, etc.)