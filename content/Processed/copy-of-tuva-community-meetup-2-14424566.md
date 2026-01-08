---
source_pdf: "https://drive.google.com/file/d/1iCshBSp43RXtC_jB5AwgTEggR6Cme1Zim78oua59ugE/view"
drive_folder: "Portfolio/Tuva Health/Tuva Health/Tuva-Data-Room/DRAFTS"
type: portfolio
company: Tuva Health
ingested: 2025-12-24
original_filename: "Copy of Tuva Community Meetup #2.gslides"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1iCshBSp43RXtC_jB5AwgTEggR6Cme1Zim78oua59ugE/view)

## Slide 1: THE TUVA PROJECT
THE**TUVA**PROJECT
Community Meetup #2

## Slide 2: Agenda
*   Tuva Overview
*   Deep-dive: Acute Inpatient Data Quality

## Slide 3: Our Problem
Our Problem: Healthcare data is never ready for analysis.

## Slide 4: Tuva Overview
Tuva has four main components.

Every healthcare data team is building these components from scratch.

**Components Diagram:**
*   Core Data Model
*   Data Marts
*   Terminology
*   Data Quality

## Slide 5: Core Data Model
Designed to integrate claims and clinical data.

FHIR-inspired.

Relational.

Not FHIR for claims.

**Core Data Model Components Diagram:**
*   Medical Claim
*   Pharmacy Claim
*   Eligibility
*   Patient
*   Encounter
*   Condition
*   Procedure
*   Practitioner
*   Location
*   Medication
*   Lab
*   Observation

## Slide 6: Terminology
40+ code sets and reference tables.

Maintained by different organizations and updated on different frequencies.

Loaded directly into the data warehouse.

Version controlled with the data model.

**Terminology Components Diagram:**
*   ICD-10
*   SNOMED-CT
*   LOINC
*   NDC
*   RxNorm
*   ATC
*   HCPCS
*   DRG
*   Place of Service
*   Bill Type
*   Revenue Center
*   + More

## Slide 7: Data Marts
Higher-level concepts that enrich the data.

Create measures, groupers, risk models, care pathways, etc.

Combine algorithms + value sets.

**Data Marts Components Diagram:**
*   Quality Measures
*   Financial PMPM
*   Readmissions
*   Service Categories
*   Acute Inpatient
*   Emergency Department
*   Treatment Periods
*   Phenotypes
*   Patient Journeys
*   HCCs
*   ED Classification
*   + More

## Slide 8: Data Quality
Designed to answer two types of questions.

I. Did I map correctly?
II. Is my data ready for analytics - if not, why not?

**Data Quality Components Diagram:**
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
(This slide shows the same table as Slide 10, with a red rectangle highlighting the first three rows and a red arrow pointing from the 'ENCOUNTER_START_DATE' and 'ENCOUNTER_END_DATE' columns of the second row (247, 1228) to the bottom of the table.)

Annotation:
- Multiple claims make up an encounter

## Slide 12: core.encounter
(This slide shows the same table as Slide 10, with a red rectangle highlighting the first three rows and a red arrow pointing from the 'ENCOUNTER_START_DATE' and 'ENCOUNTER_END_DATE' columns of the second row (247, 1228) to the bottom of the table.)

Annotations:
- Multiple claims make up an encounter
- There is complex logic that goes into constructing the encounter

## Slide 13: core.encounter
(This slide shows the same table as Slide 10, with a red rectangle highlighting the first three rows and a red arrow pointing from the 'ENCOUNTER_START_DATE' and 'ENCOUNTER_END_DATE' columns of the second row (247, 1228) to the bottom of the table.)

Annotations:
- Multiple claims make up an encounter
- There is complex logic that goes into constructing the encounter
- The core.encounter table does not have visibility into that complexity

## Slide 14: core.encounter
(This slide shows the same table as Slide 10.)

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

## Slide 16: medical_claim
(This slide shows a table.)

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

## Slide 17: Data Quality: Construction of high-level concepts
(This slide shows the `medical_claim` table from Slide 16, with a red arrow pointing upwards and to the right from the table.)

Annotation:
Apply complex logic to build high-level concepts

## Slide 18: Data Quality: Construction of high-level concepts
(This slide shows the `medical_claim` table from Slide 16 at the bottom and the `core.encounter` table from Slide 10 at the top, with a red arrow pointing from the `medical_claim` table towards the `core.encounter` table.)

Annotation:
Apply complex logic to build high-level concepts

## Slide 19: Data Quality: Construction of high-level concepts
(This slide shows the `medical_claim` table from Slide 16 at the bottom and the `core.encounter` table from Slide 10 at the top, with a red arrow pointing from the `medical_claim` table towards the `core.encounter` table.)

Annotations:
Apply complex logic to build high-level concepts
Make logic transparent with a data quality lens

## Slide 20: Constructing acute inpatient encounters

## Slide 21: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with vertical blue bars at the start and end, labeled "Institutional Claim" in the middle.)

## Slide 22: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with vertical blue bars at the start and end, labeled "Institutional Claim" in the middle.)

Annotations:
Left bar:
Admission Date
Eg.
2022-08-01

Right bar:
Discharge Date
Eg.
2022-08-07

## Slide 23: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left:
Admission Date
Eg.
2022-08-01

Right:
Discharge Date
Eg.
2022-09-05

## Slide 24: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box around "Admission Date" and "Eg. 2022-08-01":
Encounter start date

Right red box around "Discharge Date" and "Eg. 2022-09-05":
Encounter end date

## Slide 25: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Red arrow pointing down from the first "Institutional Claim" segment:
DRG

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

## Slide 26: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Red arrow pointing down from the first "Institutional Claim" segment:
DRG
Admit type code

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

## Slide 27: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Red arrow pointing down from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

## Slide 28: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Red arrow pointing down from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code

Red arrow pointing down from the third "Institutional Claim" segment:
Discharge Disposition Code

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

## Slide 29: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Red arrow pointing down from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code

Red arrow pointing down from the third "Institutional Claim" segment:
Discharge Disposition Code

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

Text box at bottom left:
Institutional Claims must:

## Slide 30: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Red arrow pointing down from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code

Red arrow pointing down from the third "Institutional Claim" segment:
Discharge Disposition Code

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

Text box at bottom left:
Institutional Claims must:
- Overlap and have the same facility_npi

## Slide 31: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Red arrow pointing down from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code

Red arrow pointing down from the third "Institutional Claim" segment:
Discharge Disposition Code

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

Text box at bottom left:
Institutional Claims must:
- Overlap and have the same facility_npi
- Adjacent, have the same facility_npi, and earlier claim discharge disp = 30
  (still a patient)

## Slide 32: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Blue arrow pointing down from the first "Institutional Claim" segment:
DRG 1

Red arrow pointing down from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code

Blue arrow pointing down from the second "Institutional Claim" segment:
DRG 2

Red arrow pointing down from the third "Institutional Claim" segment:
Discharge Disposition Code

Blue arrow pointing down from the third "Institutional Claim" segment:
DRG 3

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

## Slide 33: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Gray box with red text, pointed to by a red arrow from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code
Selected from first claim

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

Red arrow pointing from the third "Institutional Claim" segment to "Discharge Disposition Code":
Discharge Disposition Code

## Slide 34: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline, with three segments, each labeled "Institutional Claim".)

Annotations:
Left red box:
Admission Date
Eg.
2022-08-01
Encounter start date

Gray box with red text, pointed to by a red arrow from the first "Institutional Claim" segment:
DRG
Admit type code
Admit source code
Selected from first claim

Gray box with red text, pointed to by a red arrow from the third "Institutional Claim" segment:
Discharge Disposition Code
Selected from last claim

Right red box:
Discharge Date
Eg.
2022-09-05
Encounter end date

## Slide 35: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline of three "Institutional Claim" segments, with "Admission Date" and "Discharge Date" marked. Below this, there are three short vertical green lines with dates, representing "Professional claims".)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

## Slide 36: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 35, with additional text explaining professional claims.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Text box:
These are individual bills that overlap with the encounter as defined by the institutional claim.
Roll up their cost to the encounter paid_amount

## Slide 37: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 35, with an arrow pointing from the second "Institutional Claim" segment to a question.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Blue arrow pointing from the second "Institutional Claim" segment to a text box:
How do you identify these institutional claims?

## Slide 38: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 37, with additional text listing data elements.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Blue arrow pointing from the second "Institutional Claim" segment to a text box:
How do you identify these institutional claims?
3 key data elements:

## Slide 39: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 37, with additional text listing data elements.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Blue arrow pointing from the second "Institutional Claim" segment to a text box:
How do you identify these institutional claims?
3 key data elements:
Bill Type Code in {11X, 12X}

## Slide 40: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 37, with additional text listing data elements.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Blue arrow pointing from the second "Institutional Claim" segment to a text box:
How do you identify these institutional claims?
3 key data elements:
Bill Type Code in {11X, 12X}
DRG

## Slide 41: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 37, with additional text listing data elements.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Blue arrow pointing from the second "Institutional Claim" segment to a text box:
How do you identify these institutional claims?
3 key data elements:
Bill Type Code in {11X, 12X}
DRG
Room & Board Rev Codes

## Slide 42: Venn Diagram for Claims Identification
(This slide displays a Venn diagram with three overlapping circles.)

Circles and their labels:
*   Blue circle: Claims with a valid Room & Board revenue code
*   Green circle: Claims with a valid DRG
*   Red circle: Claims with a valid Inpatient Hospital bill type code (11X, 12X)

## Slide 43: Venn Diagram for Claims Identification
(This slide displays a Venn diagram with three overlapping circles. The central intersection of all three circles is highlighted in magenta and labeled.)

Circles and their labels:
*   Blue circle: Claims with a valid Room & Board revenue code
*   Green circle: Claims with a valid DRG
*   Red circle: Claims with a valid Inpatient Hospital bill type code (11X, 12X)
*   Central intersection (highlighted in magenta): AIP institutional claims

## Slide 44: Venn Diagram for Claims Identification
(This slide displays a Venn diagram with three overlapping circles. The entire outline of all three circles combined is highlighted in magenta.)

Circles and their labels:
*   Blue circle: Claims with a valid Room & Board revenue code
*   Green circle: Claims with a valid DRG
*   Red circle: Claims with a valid Inpatient Hospital bill type code (11X, 12X)

## Slide 45: Constructing acute inpatient encounters
(This slide shows a horizontal blue line representing a timeline of three "Institutional Claim" segments, with "Admission Date" and "Discharge Date" marked. Below this, there are three short vertical green lines with dates, representing "Professional claims".)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

## Slide 46: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 45, with a green arrow pointing from the "Professional claims" timeline to a question.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Green arrow pointing from the "Professional claims" timeline to a text box:
How do you identify these professional claims?

## Slide 47: Constructing acute inpatient encounters
(This slide shows the same timeline as Slide 45, with a green arrow pointing from the "Professional claims" timeline to text detailing identification criteria.)

Annotations:
Top timeline:
Admission Date
Eg.
2022-08-01
[Institutional Claim] [Institutional Claim] [Institutional Claim]
Discharge Date
Eg.
2022-09-05

Bottom timeline (green):
2022-08-02
2022-08-07
2022-08-15
Professional claims

Green arrow pointing from the "Professional claims" timeline to a text box:
How do you identify these professional claims?
Place of service = '21'
(Inpatient Hospital)

## Slide 48: Claims Data and Encounter Data
(This slide shows the `medical_claim` table from Slide 16 at the bottom and the `core.encounter` table from Slide 10 at the top, with a red arrow pointing from the `medical_claim` table towards the `core.encounter` table.)

Annotation:
Apply complex logic to build high-level concepts

### medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

### core.encounter

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

## Slide 49: Claims Data, Intermediate Concepts, and Encounter Data
(This slide shows the `medical_claim` table from Slide 16 at the bottom and the `core.encounter` table from Slide 10 at the top, with a red arrow pointing from the `medical_claim` table towards the `core.encounter` table.)

Annotations:
Apply complex logic to build high-level concepts
Intermediate concepts

### medical_claim

| CLAIM_ID | CLAIM_LINE_NUMBER | CLAIM_TYPE   | PATIENT_ID | MEMBER_ID | PAYER    | PLAN     | CLAIM_START_DATE | CLAIM_END_DATE | CLAIM_LINE_START_DATE |
|:---------|:------------------|:-------------|:-----------|:----------|:---------|:---------|:-----------------|:---------------|:----------------------|
| 1000015  | 1                 | professional | 1041       | 1041      | medicare | medicare | 2018-09-26       | 2018-09-26     | 2018-09-26            |
| 1000078  | 1                 | professional | 12090      | 12090     | medicare | medicare | 2018-03-17       | 2018-03-17     | 2018-03-17            |
| 1000080  | 1                 | professional | 11686      | 11686     | medicare | medicare | 2018-10-27       | 2018-10-27     | 2018-10-27            |
| 1000152  | 1                 | professional | 11388      | 11388     | medicare | medicare | 2017-12-04       | 2017-12-04     | 2017-12-04            |
| 1000165  | 1                 | professional | 11048      | 11048     | medicare | medicare | 2018-02-05       | 2018-02-05     | 2018-02-05            |
| 100020   | 1                 | professional | 1070       | 1070      | medicare | medicare | 2016-10-04       | 2016-10-04     | 2016-10-04            |

### core.encounter

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