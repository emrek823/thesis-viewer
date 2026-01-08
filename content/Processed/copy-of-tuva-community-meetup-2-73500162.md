---
source_pdf: "https://drive.google.com/file/d/1iCshBSp43RXtC_jB5AwgTEggR6Cme1Zim78oua59ugE/view"
drive_folder: "Portfolio/Tuva Health/Tuva Health/Tuva-Data-Room/DRAFTS"
type: portfolio
company: Tuva Health
ingested: 2025-12-27
original_filename: "Copy of Tuva Community Meetup #2"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1iCshBSp43RXtC_jB5AwgTEggR6Cme1Zim78oua59ugE/view)

# THE TUVA PROJECT Community Meetup #2

## Slide 1: THE TUVA PROJECT Community Meetup #2

## Slide 2: Agenda
* Tuva Overview
* Deep-dive: Acute Inpatient Data Quality

## Slide 3: Our Problem: Healthcare data is never ready for analysis.

## Slide 4: Tuva Overview
Tuva has four main components.
Every healthcare data team is building these components from scratch.

*   **Core Data Model**
*   **Data Marts**
*   **Terminology**
*   **Data Quality**

## Slide 5: Core Data Model
Designed to integrate claims and clinical data.

FHIR-inspired.

Relational.

Not FHIR for claims.

**Core Data Model**
*   Medical Claim
*   Patient
*   Procedure
*   Medication
*   Pharmacy Claim
*   Encounter
*   Practitioner
*   Lab
*   Eligibility
*   Condition
*   Location
*   Observation

## Slide 6: Terminology
40+ code sets and reference tables.

Maintained by different organizations and updated on different frequencies.

Loaded directly into the data warehouse.

Version controlled with the data model.

**Terminology**
*   ICD-10
*   NDC
*   HCPCS
*   Bill Type
*   SNOMED-CT
*   RxNorm
*   DRG
*   Revenue Center
*   LOINC
*   ATC
*   Place of Service
*   + More

## Slide 7: Data Marts
Higher-level concepts that enrich the data.

Create measures, groupers, risk models, care pathways, etc.

Combine algorithms + value sets.

**Data Marts**
*   Quality Measures
*   Service Categories
*   Treatment Periods
*   HCCs
*   Financial PMPM
*   Acute Inpatient
*   Phenotypes
*   ED Classification
*   Readmissions
*   Emergency Department
*   Patient Journeys
*   + More

## Slide 8: Data Quality
Designed to answer two types of questions.
I. Did I map correctly?
II. Is my data ready for analytics - if not, why not?

**Data Quality**
*   Atomic-level
*   Analytics-level

## Slide 9: Acute Inpatient Data Quality

## Slide 10: core.encounter

| ENCOUNTER_ID | PATIENT_ID | ENCOUNTER_START_DATE | ENCOUNTER_END_DATE | LENGTH_OF_STAY | DISCHARGE_DISPOSITION_CODE | MS_DRG_CODE |
|:-------------|:-----------|:---------------------|:-------------------|:---------------|:---------------------------|:------------|
| 310          | 1296       | 2017-10-15           | 2017-10-23         | 8              | 06                         | 455         |
| 247          | 1228       | 2016-06-07           | 2016-06-09         | 2              | 01                         | 313         |
| 101          | 11030      | 2017-11-23           | 2017-11-24         | 1              | 02                         | 280         |
| 321          | 11985      | 2018-03-06           | 2018-03-10         | 4              | 06                         | 640         |
| 303          | 10396      | 2017-06-10           | 2017-06-14         | 4              | 03                         | 069         |
| 168          | 10873      | 2016-01-25           | 2016-01-29         | 4              | 06                         | 435         |
| 308          | 12547      | 2018-05-04           | 2018-05-29         | 25             | 06                         | 542         |
| 140          | 12720      | 2018-07-14           | 2018-07-16         | 2              | 06                         | 470         |
| 380          | 12093      | 2018-09-15           | 2018-09-21         | 6              | 01                         | 392         |
| 419          | 11670      | 2018-07-17           | 2018-07-25         | 8              | 03                         | 683         |
| 16           | 102        | 2016-08-13           | 2016-08-16         | 3              | 06                         | 312         |
| 145          | 13372      | 2017-02-02           | 2017-02-04         | 2              | 62                         | 948         |
| 224          | 13372      | 2018-04-07           | 2018-04-09         | 2              | 01                         | 293         |
| 27           | 11199      | 2017-11-01           | 2017-11-08         | 7              | 03                         | 871         |
| 184          | 10070      | 2017-09-02           | 2017-09-04         | 2              | 03                         | 690         |
| 97           | 11584      | 2017-07-12           | 2017-07-14         | 2              | 01                         | 743         |
| 269          | 10779      | 2017-01-26           | 2017-01-30         | 4              | 03                         | 470         |
| 389          | 13143      | 2016-03-01           | 2016-03-03         | 2              | 06                         | 637         |
| 230          | 11496      | 2017-08-14           | 2017-08-16         | 2              | 01                         | 086         |
| 128          | 11907      | 2018-08-28           | 2018-08-31         | 3              | 06                         | 689         |

## Slide 11: core.encounter

(Same table as Slide 10 with annotations)
- Multiple claims make up an encounter

## Slide 12: core.encounter

(Same table as Slide 10 with annotations)
- Multiple claims make up an encounter
- There is complex logic that goes into constructing the encounter

## Slide 13: core.encounter

(Same table as Slide 10 with annotations)
- Multiple claims make up an encounter
- There is complex logic that goes into constructing the encounter
The core.encounter table does not have visibility into that complexity

## Slide 14: core.encounter

| ENCOUNTER_ID | PATIENT_ID | ENCOUNTER_START_DATE | ENCOUNTER_END_DATE | LENGTH_OF_STAY | DISCHARGE_DISPOSITION_CODE | MS_DRG_CODE |
|:-------------|:-----------|:---------------------|:-------------------|:---------------|:---------------------------|:------------|
| 310          | 1296       | 2017-10-15           | 2017-10-23         | 8              | 06                         | 455         |
| 247          | 1228       | 2016-06-07           | 2016-06-09         | 2              | 01                         | 313         |
| 101          | 11030      | 2017-11-23           | 2017-11-24         | 1              | 02                         | 280         |
| 321          | 11985      | 2018-03-06           | 2018-03-10         | 4              | 06                         | 640         |
| 303          | 10396      | 2017-06-10           | 2017-06-14         | 4              | 03                         | 069         |
| 168          | 10873      | 2016-01-25           | 2016-01-29         | 4              | 06                         | 435         |
| 308          | 12547      | 2018-05-04           | 2018-05-29         | 25             | 06                         | 542         |
| 140          | 12720      | 2018-07-14           | 2018-07-16         | 2              | 06                         | 470         |
| 380          | 12093      | 2018-09-15           | 2018-09-21         | 6              | 01                         | 392         |
| 419          | 11670      | 2018-07-17           | 2018-07-25         | 8              | 03                         | 683         |
| 16           | 102        | 2016-08-13           | 2016-08-16         | 3              | 06                         | 312         |
| 145          | 13372      | 2017-02-02           | 2017-02-04         | 2              | 62                         | 948         |
| 224          | 13372      | 2018-04-07           | 2018-04-09         | 2              | 01                         | 293         |
| 27           | 11199      | 2017-11-01           | 2017-11-08         | 7              | 03                         | 871         |
| 184          | 10070      | 2017-09-02           | 2017-09-04         | 2              | 03                         | 690         |
| 97           | 11584      | 2017-07-12           | 2017-07-14         | 2              | 01                         | 743         |
| 269          | 10779      | 2017-01-26           | 2017-01-30         | 4              | 03                         | 470         |
| 389          | 13143      | 2016-03-01           | 2016-03-03         | 2              | 06                         | 637         |
| 230          | 11496      | 2017-08-14           | 2017-08-16         | 2              | 01                         | 086         |
| 128          | 11907      | 2018-08-28           | 2018-08-31         | 3              | 06                         | 689         |

## Slide 15: Data Quality: Construction of high-level concepts

## Slide 16: Data Quality: Construction of high-level concepts
medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

## Slide 17: Data Quality: Construction of high-level concepts
Apply complex logic to build high-level concepts

medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

## Slide 18: Data Quality: Construction of high-level concepts
Apply complex logic to build high-level concepts

core.encounter

| ENCOUNTER_ID | PATIENT_ID | ENCOUNTER_START_DATE | ENCOUNTER_END_DATE | LENGTH_OF_STAY | DISCHARGE_DISPOSITION_CODE | MS_DRG_CODE |
|:-------------|:-----------|:---------------------|:-------------------|:---------------|:---------------------------|:------------|
| 310          | 1296       | 2017-10-15           | 2017-10-23         | 8              | 06                         | 455         |
| 247          | 1228       | 2016-06-07           | 2016-06-09         | 2              | 01                         | 313         |
| 101          | 11030      | 2017-11-23           | 2017-11-24         | 1              | 02                         | 280         |
| 321          | 11985      | 2018-03-06           | 2018-03-10         | 4              | 06                         | 640         |
| 303          | 10396      | 2017-06-10           | 2017-06-14         | 4              | 03                         | 069         |
| 168          | 10873      | 2016-01-25           | 2016-01-29         | 4              | 06                         | 435         |
| 308          | 12547      | 2018-05-04           | 2018-05-29         | 25             | 06                         | 542         |
| 140          | 12720      | 2018-07-14           | 2018-07-16         | 2              | 06                         | 470         |
| 380          | 12093      | 2018-09-15           | 2018-09-21         | 6              | 01                         | 392         |
| 419          | 11670      | 2018-07-17           | 2018-07-25         | 8              | 03                         | 683         |
| 16           | 102        | 2016-08-13           | 2016-08-16         | 3              | 06                         | 312         |
| 145          | 13372      | 2017-02-02           | 2017-02-04         | 2              | 62                         | 948         |
| 224          | 13372      | 2018-04-07           | 2018-04-09         | 2              | 01                         | 293         |
| 27           | 11199      | 2017-11-01           | 2017-11-08         | 7              | 03                         | 871         |
| 184          | 10070      | 2017-09-02           | 2017-09-04         | 2              | 03                         | 690         |
| 97           | 11584      | 2017-07-12           | 2017-07-14         | 2              | 01                         | 743         |
| 269          | 10779      | 2017-01-26           | 2017-01-30         | 4              | 03                         | 470         |
| 389          | 13143      | 2016-03-01           | 2016-03-03         | 2              | 06                         | 637         |
| 230          | 11496      | 2017-08-14           | 2017-08-16         | 2              | 01                         | 086         |
| 128          | 11907      | 2018-08-28           | 2018-08-31         | 3              | 06                         | 689         |

medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

## Slide 19: Data Quality: Construction of high-level concepts
Make logic transparent with a data quality lens

medical_claim
Apply complex logic to build high-level concepts

core.encounter

| ENCOUNTER_ID | PATIENT_ID | ENCOUNTER_START_DATE | ENCOUNTER_END_DATE | LENGTH_OF_STAY | DISCHARGE_DISPOSITION_CODE | MS_DRG_CODE |
|:-------------|:-----------|:---------------------|:-------------------|:---------------|:---------------------------|:------------|
| 310          | 1296       | 2017-10-15           | 2017-10-23         | 8              | 06                         | 455         |
| 247          | 1228       | 2016-06-07           | 2016-06-09         | 2              | 01                         | 313         |
| 101          | 11030      | 2017-11-23           | 2017-11-24         | 1              | 02                         | 280         |
| 321          | 11985      | 2018-03-06           | 2018-03-10         | 4              | 06                         | 640         |
| 303          | 10396      | 2017-06-10           | 2017-06-14         | 4              | 03                         | 069         |
| 168          | 10873      | 2016-01-25           | 2016-01-29         | 4              | 06                         | 435         |
| 308          | 12547      | 2018-05-04           | 2018-05-29         | 25             | 06                         | 542         |
| 140          | 12720      | 2018-07-14           | 2018-07-16         | 2              | 06                         | 470         |
| 380          | 12093      | 2018-09-15           | 2018-09-21         | 6              | 01                         | 392         |
| 419          | 11670      | 2018-07-17           | 2018-07-25         | 8              | 03                         | 683         |
| 16           | 102        | 2016-08-13           | 2016-08-16         | 3              | 06                         | 312         |
| 145          | 13372      | 2017-02-02           | 2017-02-04         | 2              | 62                         | 948         |
| 224          | 13372      | 2018-04-07           | 2018-04-09         | 2              | 01                         | 293         |
| 27           | 11199      | 2017-11-01           | 2017-11-08         | 7              | 03                         | 871         |
| 184          | 10070      | 2017-09-02           | 2017-09-04         | 2              | 03                         | 690         |
| 97           | 11584      | 2017-07-12           | 2017-07-14         | 2              | 01                         | 743         |
| 269          | 10779      | 2017-01-26           | 2017-01-30         | 4              | 03                         | 470         |
| 389          | 13143      | 2016-03-01           | 2016-03-03         | 2              | 06                         | 637         |
| 230          | 11496      | 2017-08-14           | 2017-08-16         | 2              | 01                         | 086         |
| 128          | 11907      | 2018-08-28           | 2018-08-31         | 3              | 06                         | 689         |

medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

## Slide 20: Constructing acute inpatient encounters

## Slide 21: Constructing acute inpatient encounters
(Timeline diagram)
 Institutional Claim

## Slide 22: Constructing acute inpatient encounters
(Timeline diagram)
Admission Date: Eg. 2022-08-01
Institutional Claim
Discharge Date: Eg. 2022-08-07

## Slide 23: Constructing acute inpatient encounters
(Timeline diagram showing multiple claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Discharge Date: Eg. 2022-09-05

## Slide 24: Constructing acute inpatient encounters
(Timeline diagram with encounter dates highlighted)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim | Institutional Claim | Institutional Claim
Discharge Date: Eg. 2022-09-05 -> Encounter end date

## Slide 25: Constructing acute inpatient encounters
(Timeline diagram with DRG arrow)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim -> DRG | Institutional Claim | Institutional Claim
Discharge Date: Eg. 2022-09-05 -> Encounter end date

## Slide 26: Constructing acute inpatient encounters
(Timeline diagram with DRG and Admit type code arrow)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim -> DRG, Admit type code | Institutional Claim | Institutional Claim
Discharge Date: Eg. 2022-09-05 -> Encounter end date

## Slide 27: Constructing acute inpatient encounters
(Timeline diagram with DRG, Admit type code, and Admit source code arrow)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim -> DRG, Admit type code, Admit source code | Institutional Claim | Institutional Claim
Discharge Date: Eg. 2022-09-05 -> Encounter end date

## Slide 28: Constructing acute inpatient encounters
(Timeline diagram with DRG, Admit type code, Admit source code, and Discharge Disposition Code arrows)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim -> DRG, Admit type code, Admit source code | Institutional Claim | Institutional Claim -> Discharge Disposition Code
Discharge Date: Eg. 2022-09-05 -> Encounter end date

## Slide 29: Constructing acute inpatient encounters
(Timeline diagram with claims requirements)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim -> DRG, Admit type code, Admit source code | Institutional Claim | Institutional Claim -> Discharge Disposition Code
Discharge Date: Eg. 2022-09-05 -> Encounter end date

Institutional Claims must:

## Slide 30: Constructing acute inpatient encounters
(Timeline diagram with claims requirements)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim -> DRG, Admit type code, Admit source code | Institutional Claim | Institutional Claim -> Discharge Disposition Code
Discharge Date: Eg. 2022-09-05 -> Encounter end date

Institutional Claims must:
- Overlap and have the same facility_npi

## Slide 31: Constructing acute inpatient encounters
(Timeline diagram with claims requirements)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim -> DRG, Admit type code, Admit source code | Institutional Claim | Institutional Claim -> Discharge Disposition Code
Discharge Date: Eg. 2022-09-05 -> Encounter end date

Institutional Claims must:
- Overlap and have the same facility_npi
- Adjacent, have the same facility_npi, and earlier claim discharge disp = 30 (still a patient)

## Slide 32: Constructing acute inpatient encounters
(Timeline diagram showing DRG derivation from multiple claims)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim | Institutional Claim | Institutional Claim
DRG 1 <- DRG, Admit type code, Admit source code
DRG 2
DRG 3
Discharge Date: Eg. 2022-09-05 -> Encounter end date
Discharge Disposition Code

## Slide 33: Constructing acute inpatient encounters
(Timeline diagram showing DRG, Admit type/source code selected from first claim)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim | Institutional Claim | Institutional Claim
DRG, Admit type code, Admit source code (Selected from first claim)
Discharge Date: Eg. 2022-09-05 -> Encounter end date
Discharge Disposition Code

## Slide 34: Constructing acute inpatient encounters
(Timeline diagram showing DRG, Admit type/source code from first claim, and Discharge Disposition Code from last claim)
Admission Date: Eg. 2022-08-01 -> Encounter start date
Institutional Claim | Institutional Claim | Institutional Claim
DRG, Admit type code, Admit source code (Selected from first claim)
Discharge Disposition Code (Selected from last claim)
Discharge Date: Eg. 2022-09-05 -> Encounter end date

## Slide 35: Constructing acute inpatient encounters
(Timeline diagram showing professional claims alongside institutional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

## Slide 36: Constructing acute inpatient encounters
(Timeline diagram with explanation for professional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

These are individual bills that overlap with the encounter as defined by the institutional claim.
Roll up their cost to the encounter paid_amount

## Slide 37: Constructing acute inpatient encounters
(Timeline diagram asking how to identify institutional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

How do you identify these institutional claims?

## Slide 38: Constructing acute inpatient encounters
(Timeline diagram with "3 key data elements" for identifying institutional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

How do you identify these institutional claims?
3 key data elements:

## Slide 39: Constructing acute inpatient encounters
(Timeline diagram with Bill Type Code for institutional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

How do you identify these institutional claims?
3 key data elements:
Bill Type Code in {11X, 12X}

## Slide 40: Constructing acute inpatient encounters
(Timeline diagram with Bill Type Code and DRG for institutional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

How do you identify these institutional claims?
3 key data elements:
Bill Type Code in {11X, 12X}
DRG

## Slide 41: Constructing acute inpatient encounters
(Timeline diagram with Bill Type Code, DRG, and Room & Board Rev Codes for institutional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

How do you identify these institutional claims?
3 key data elements:
Bill Type Code in {11X, 12X}
DRG
Room & Board Rev Codes

## Slide 42: (Venn Diagram for identifying claims)
*   **Blue Circle:** Claims with a valid Room & Board revenue code
*   **Green Circle:** Claims with a valid DRG
*   **Red Circle:** Claims with a valid Inpatient Hospital bill type code (11X, 12X)

## Slide 43: (Venn Diagram for identifying AIP institutional claims)
*   **Blue Circle:** Claims with a valid Room & Board revenue code
*   **Green Circle:** Claims with a valid DRG
*   **Red Circle:** Claims with a valid Inpatient Hospital bill type code (11X, 12X)
*   **Intersection (Highlighted in Magenta):** AIP institutional claims (The overlap of all three circles)

## Slide 44: (Venn Diagram with a wider highlighted area)
*   **Blue Circle:** Claims with a valid Room & Board revenue code
*   **Green Circle:** Claims with a valid DRG
*   **Red Circle:** Claims with a valid Inpatient Hospital bill type code (11X, 12X)
*   **Highlighted (Magenta):** The areas where the green and red circles overlap, and also where the blue and red circles overlap, and the full intersection of all three. This indicates a broader set of relevant claims than just the strict AIP institutional claims.

## Slide 45: Constructing acute inpatient encounters
(Timeline diagram of institutional and professional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

## Slide 46: Constructing acute inpatient encounters
(Timeline diagram asking how to identify professional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

How do you identify these professional claims?

## Slide 47: Constructing acute inpatient encounters
(Timeline diagram with identification criteria for professional claims)
Admission Date: Eg. 2022-08-01
Institutional Claim | Institutional Claim | Institutional Claim
Professional claims: 2022-08-02 | 2022-08-07 | 2022-08-15
Discharge Date: Eg. 2022-09-05

How do you identify these professional claims?
Place of service = '21' (Inpatient Hospital)

## Slide 48: (Diagram showing relationship between medical_claim and core.encounter tables)
Apply complex logic to build high-level concepts

medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

core.encounter

| ENCOUNTER_ID | PATIENT_ID | ENCOUNTER_START_DATE | ENCOUNTER_END_DATE | LENGTH_OF_STAY | DISCHARGE_DISPOSITION_CODE | MS_DRG_CODE |
|:-------------|:-----------|:---------------------|:-------------------|:---------------|:---------------------------|:------------|
| 310          | 1296       | 2017-10-15           | 2017-10-23         | 8              | 06                         | 455         |
| 247          | 1228       | 2016-06-07           | 2016-06-09         | 2              | 01                         | 313         |
| 101          | 11030      | 2017-11-23           | 2017-11-24         | 1              | 02                         | 280         |
| 321          | 11985      | 2018-03-06           | 2018-03-10         | 4              | 06                         | 640         |
| 303          | 10396      | 2017-06-10           | 2017-06-14         | 4              | 03                         | 069         |
| 168          | 10873      | 2016-01-25           | 2016-01-29         | 4              | 06                         | 435         |
| 308          | 12547      | 2018-05-04           | 2018-05-29         | 25             | 06                         | 542         |
| 140          | 12720      | 2018-07-14           | 2018-07-16         | 2              | 06                         | 470         |
| 380          | 12093      | 2018-09-15           | 2018-09-21         | 6              | 01                         | 392         |
| 419          | 11670      | 2018-07-17           | 2018-07-25         | 8              | 03                         | 683         |
| 16           | 102        | 2016-08-13           | 2016-08-16         | 3              | 06                         | 312         |
| 145          | 13372      | 2017-02-02           | 2017-02-04         | 2              | 62                         | 948         |
| 224          | 13372      | 2018-04-07           | 2018-04-09         | 2              | 01                         | 293         |
| 27           | 11199      | 2017-11-01           | 2017-11-08         | 7              | 03                         | 871         |
| 184          | 10070      | 2017-09-02           | 2017-09-04         | 2              | 03                         | 690         |
| 97           | 11584      | 2017-07-12           | 2017-07-14         | 2              | 01                         | 743         |
| 269          | 10779      | 2017-01-26           | 2017-01-30         | 4              | 03                         | 470         |
| 389          | 13143      | 2016-03-01           | 2016-03-03         | 2              | 06                         | 637         |
| 230          | 11496      | 2017-08-14           | 2017-08-16         | 2              | 01                         | 086         |
| 128          | 11907      | 2018-08-28           | 2018-08-31         | 3              | 06                         | 689         |

## Slide 49: (Diagram showing relationship between medical_claim and core.encounter tables via intermediate concepts)
Apply complex logic to build high-level concepts
Intermediate concepts

medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

core.encounter

| ENCOUNTER_ID | PATIENT_ID | ENCOUNTER_START_DATE | ENCOUNTER_END_DATE | LENGTH_OF_STAY | DISCHARGE_DISPOSITION_CODE | MS_DRG_CODE |
|:-------------|:-----------|:---------------------|:-------------------|:---------------|:---------------------------|:------------|
| 310          | 1296       | 2017-10-15           | 2017-10-23         | 8              | 06                         | 455         |
| 247          | 1228       | 2016-06-07           | 2016-06-09         | 2              | 01                         | 313         |
| 101          | 11030      | 2017-11-23           | 2017-11-24         | 1              | 02                         | 280         |
| 321          | 11985      | 2018-03-06           | 2018-03-10         | 4              | 06                         | 640         |
| 303          | 10396      | 2017-06-10           | 2017-06-14         | 4              | 03                         | 069         |
| 168          | 10873      | 2016-01-25           | 2016-01-29         | 4              | 06                         | 435         |
| 308          | 12547      | 2018-05-04           | 2018-05-29         | 25             | 06                         | 542         |
| 140          | 12720      | 2018-07-14           | 2018-07-16         | 2              | 06                         | 470         |
| 380          | 12093      | 2018-09-15           | 2018-09-21         | 6              | 01                         | 392         |
| 419          | 11670      | 2018-07-17           | 2018-07-25         | 8              | 03                         | 683         |
| 16           | 102        | 2016-08-13           | 2016-08-16         | 3              | 06                         | 312         |
| 145          | 13372      | 2017-02-02           | 2017-02-04         | 2              | 62                         | 948         |
| 224          | 13372      | 2018-04-07           | 2018-04-09         | 2              | 01                         | 293         |
| 27           | 11199      | 2017-11-01           | 2017-11-08         | 7              | 03                         | 871         |
| 184          | 10070      | 2017-09-02           | 2017-09-04         | 2              | 03                         | 690         |
| 97           | 11584      | 2017-07-12           | 2017-07-14         | 2              | 01                         | 743         |
| 269          | 10779      | 2017-01-26           | 2017-01-30         | 4              | 03                         | 470         |
| 389          | 13143      | 2016-03-01           | 2016-03-03         | 2              | 06                         | 637         |
| 230          | 11496      | 2017-08-14           | 2017-08-16         | 2              | 01                         | 086         |
| 128          | 11907      | 2018-08-28           | 2018-08-31         | 3              | 06                         | 689         |