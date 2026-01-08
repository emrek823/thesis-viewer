---
source_pdf: "https://drive.google.com/file/d/1eH52cmHIE0Q35BoPPYlVgiyi4hV_ocKlZvGU-8dc5BQ/view"
drive_folder: "Portfolio/Tuva Health"
type: portfolio
company: Tuva Health
ingested: 2025-12-26
original_filename: "Tuva"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1eH52cmHIE0Q35BoPPYlVgiyi4hV_ocKlZvGU-8dc5BQ/view)

# Page 1
Tuva

# Page 2
~$500K in ARR + following OS metrics
* 1. users running project in production: ~50
* 2. users from mid-market / enterprise: 10-20
* 3. users in slack/discord: 500 - 1K
* 4. # of github issues (shows deep engagement): 100-300 issues
* 5. # of github stars: 3-5K

Tuva specific
* Mapping to CDM
* Utilization of downstream data marts
* Growing ACV (per data source)
* Evolution to Tuva Cloud or managed service
* New data types?

# Page 3
GTM 1) All groupers/terminology out of the box 2) Enterprise customer reach-out

The Tuva Claims Data Stack

**Raw Claims Data Sources** (inputs to Normalize + Test)
*   Medicare
*   Medicaid
*   Commercial

**Normalize + Test** (processes Raw Claims Data Sources)
*   Claims Data Model (output from Raw Claims Data Sources)
*   Data Profiling (output from Raw Claims Data Sources)
*   Terminology (output from Raw Claims Data Sources) - *highlighted with a red box*

**Data Marts** (outputs from Normalize + Test, specifically from Claims Data Model and Data Profiling)

| Measures               | Groupers           | Risk             | Other        |
| :--------------------- | :----------------- | :--------------- | :----------- |
| Hospital Readmission   | Encounter          | HCCs             | Patient      |
| Spend + Utilization    | Service Category   | Care Gaps        | Provider     |
| Hospital-acquired      | Chronic Condition  | Under-Dx         | Attribution  |
| Preventable ED Visits  | Diagnosis          |                  | Referrals    |
| AHRQ Quality Indicators| Procedure          |                  |              |
| ACO Measures           | Acute Episode      |                  |              |

*Note: The "Groupers" column (Encounter, Service Category, Chronic Condition, Diagnosis, Procedure, Acute Episode) is highlighted with a red box, as is "Acute Episode" within that column.*

**Legend**
*   Released
*   In Development
*   Work Not Started