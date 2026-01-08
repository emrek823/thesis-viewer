---
source_pdf: "https://drive.google.com/file/d/1a267rm-iv4xSS5QOI6rHP9rYYNT9tR3O/view?usp=drivesdk"
drive_folder: "Portfolio/Valley Steer"
type: portfolio
company: Valley Steer
ingested: 2025-12-26
original_filename: "Valley Steer - Seed - Oct 22.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1a267rm-iv4xSS5QOI6rHP9rYYNT9tR3O/view?usp=drivesdk)

## Slide 1: Valley Steer Overview

# Valley Steer Overview

## Slide 2: What Is Valley Steer?

# What Is Valley Steer?

Valley Steer is creating a real time payments service for providers in the Managed Medicare and Medicaid markets. We enable this by generating clinically data rich claims and aligning payment acceleration incentives between value based care providers and their contracted risk bearing entities.

Valley Steer is an early stage startup that currently has ~1.5m members and processes over 500k claims / encounters per month.

## Slide 3: What Is Valley Steer's Approach?

# What Is Valley Steer's Approach?

Building a real time payments service for value based care providers requires developing and integrating several highly commoditized pieces of payer infrastructure.

As Valley Steer develops each piece of this infrastructure, we sell these pieces as ultra low cost, high quality independent services.

## Slide 4: Which Services Are Live Today?

# Which Services Are Live Today?

1.  Redbird: Paper form to structured electronic output
2.  Magneto: Claims aggregation, modification, and misdirection
3.  Jubilee: Patient chart review for suspected diagnosis and quality gaps

## Slide 5: What Makes Valley Steer Services Different?

# What Makes Valley Steer Services Different?

| | Valley Steer | Existing Incumbents |
| :------------------------------ | :----------- | :------------------ |
| Access to Low Cost Overseas Labor | X            | X                   |
| Developing Proprietary Software | X            | Sometimes           |
| Leveraging AI / Machine Learning (ML) | X            |                     |
| Offered Commodity Services Priced As: | Wedge / Loss Leader | Cash Cow            |

## Slide 6: Is Valley Steer a Technology or Services Business?

# Is Valley Steer a Technology or Services Business?

Valley Steer is a technology-enabled services business.

All developed technology is used internally to enable Valley Steer's services teams. Valley Steer does not sell technology. Additionally, Valley Steer's products do not require any custom integrations to operate.

Valley Steer sits within the existing data pipes.

## Slide 7: Redbird: Ultra Low Cost Paper to Electronic Conversion

# Redbird: Ultra Low Cost Paper to Electronic Conversion

(Diagram illustrating the flow of different paper documents into Redbird for conversion to structured data output)

**Input Document Types:**
*   Claim: CMS-1500, UB04
*   Dispute / Appeal
*   Pre-Authorization
*   Enrollment
*   Patient Chart

**Process:**
*   All input documents are fed into **Redbird**.

**Output:**
*   **Structured Data Output** (csv, EDI, xls, etc)

**Utility pricing:** Per document fee

## Slide 8: Redbird is an ML Assisted Paper Form OCR Extraction Service

# Redbird is an ML Assisted Paper Form OCR Extraction Service

Ex: CMS-1500 to 837 Conversion

(Screenshot of a user interface showing a CMS-1500 form on the left and extracted data fields on the right.)

**Header Information:**
*   **Received Date:** 2022-02-08
*   **Last Modify At:** 2022-10-02 21:51
*   **Assigned To:** (Blank)
*   **Notes:** (Blank)
*   **Document Type:** cms1500
*   **Last Modify By:** Select to assign
*   **Status:** Needs Review
*   **Action:** Complete Review

**UI Elements (Left Panel - Form View):**
*   Zoom controls, Page Width dropdown
*   "Hide Highlights" button
*   A scanned CMS-1500 form with various fields. Some fields appear to have highlights indicating extracted data.

**UI Elements (Right Panel - Extracted Fields):**
*   "Show All Fields" checkbox
*   Search Fields input
*   List of extracted fields and their values:

| Field                  | Value      |
| :--------------------- | :--------- |
| 24b_1:Place Of Service | 41         |
| 24c_1:Emg              | X          |
| 24d_1:Code             | A0427      |
| 24d_1:Modifier1        | SH!        |
| 24d_1:Modifier2        |            |
| 24d_1:Modifier3        |            |
| 24d_1:Modifier4        |            |
| 24e_1:Diagnosis Pointer | A          |
| 24f_1:Charges Dollar   | 1840       |
| 24f_1:Charges Cents    | 00         |
| 24g_1:Days Or Units    | 001        |
| 24h_1:Family Plan      |            |
| 24i_1:Qual             | ZZ         |
| 24j_1:Id               | 33-0285453 |
| 241_1:Npi              | 1639131436 |
| 25_1:Federal Tax Id    | 8442318264 |
| 26_1:Patient Account Number | 37352      |
| 27_1:Accept Assignment | X          |
| 28_1:Total Charge      | 184000     |
| 29_1:Amount Paid       | 000        |
| 30_1:Rsvd For Nucc Use | 1107       |
| 31_1:Signature Of Physician | (blank)    |
| 32_1:Service Facility Name | 100        |
| 32_1:Service Facility Street | 101        |
| 32_1:Service Facility City | (blank)    |
| 32_1:Service Facility State | (blank)    |
| 32_1:Service Facility Zip | (blank)    |
| 32_1:Service Facility NPI | (blank)    |
| 32_1:Service Facility CLIA | (blank)    |
| 33_1:Billing Provider Info | (blank)    |
| 33_1:Billing Provider Street | (blank)    |
| 33_1:Billing Provider City | (blank)    |
| 33_1:Billing Provider State | (blank)    |
| 33_1:Billing Provider Zip | (blank)    |
| 33_1:Billing Provider Phone | (blank)    |
| 33_1:Billing Provider Fax | (blank)    |
| 33_1:Billing Provider NPI | (blank)    |
| 33_1:Billing Provider Tax | (blank)    |
| 1a_1:Insured ID Number | (blank)    |
| 2_1:Patient Name       | (blank)    |
| 3_1:Patient DOB        | (blank)    |
| 4_1:Insured Name       | (blank)    |
| 5_1:Patient Address    | (blank)    |
| 6_1:Patient Relationship | (blank)    |
| 7_1:Insured Address    | (blank)    |
| 8_1:Patient Status     | (blank)    |
| 9_1:Other Insured Name | (blank)    |
| 10_1:Is Patient's Condition | (blank)    |
| 11_1:Insured Policy Group | (blank)    |
| 12_1:Patient Signature | (blank)    |
| 13_1:Insured Signature | (blank)    |
| 14_1:Date Current Illness | 08/09/2022 |
| 15_1:Other Date        | (blank)    |
| 16_1:Dates Patient Unable | (blank)    |
| 17_1:Name Referring Provider | 1G SLF000  |
| 18_1:Hospitalization Dates | (blank)    |
| 19_1:Additional Claim Info | 911 ER TXP FROM SCENE AT 1327 TO PRESBYTERIAN INTERCOMMUNITY HOSP ER DR ACCEPTED PT RESPONSIBILITY |
| 20_1:Outside Lab       | NO         |
| 21_1:Diagnosis 1       | T675XXA    |
| 22_1:Resubmission Code | (blank)    |
| 23_1:Prior Authorization | (blank)    |

## Slide 9: Magneto: Electronic Claims Aggregation, Modification, Misdirects

# Magneto: Electronic Claims Aggregation, Modification, Misdirects

(Diagram showing the flow of inbound data through Valley Steer to various destinations)

**Flow:**
1.  **Inbound Data** is received.
2.  Data passes through **Valley Steer**.
3.  From Valley Steer, data can go to:
    *   **Payer Internal Systems**
    *   **External Destination**

**Numbered Explanations:**
1.  Content that should be rejected and sent back to provider or health plan
    *   *Reasons include insufficient data, wrong data, etc.*
2.  Clean content can flow directly to payer's internal systems and workflows
3.  Content that doesn't need to go through ops process can be routed to destination

**Utility pricing:** Per claim fee

## Slide 10: Jubilee: Structuring, Abstracting, Extracting Patient Charts

# Jubilee: Structuring, Abstracting, Extracting Patient Charts

(Diagram showing a chart icon leading to a list of data elements)

**Data Elements Extracted**
*   Member Details
*   Provider Details
*   Dates of Service
*   Places of Service
*   Suspected Diagnosis
*   HCC's
*   Quality Gaps

*   Paper Charts, PDF's OK

**Valley Steer Difference**
Valley Steer is the only Chart Abstraction company that leverages employed, practicing General Practitioners for chart review. Other companies use non-practitioner individuals with nursing degrees for clinical work.

With regards to risk adjustment, Valley Steer's system is developed and optimized to do concurrent coding

**Utility pricing:** Per page fee

## Slide 11: Jubilee Example of HEDIS / RAF Chart Abstraction

# Jubilee Example of HEDIS / RAF Chart Abstraction

Risk Adjustment Review d_v0.996

Details For Chart 201: Dates of Service 2020-05-21 to 2020-09-16

(Screenshot of a detailed UI for chart abstraction, showing ICD-10 codes, actions, history, status, notes, and medication lists with associated scripts and provider comments)

**Top Navigation:**
*   (C)hart
*   (E)ncounters
*   (I)CD
*   (R)eview
*   C(P)T
*   Analytics

**Right Panel Filters/Options:**
*   Full Page
*   Report Issue
*   Open RAList
*   Previous, Next, Zoom In, Zoom Out, Zoom: 200%, Page: 7 / 33

**Main Content (Left Section - Encounter(s) and ICD-10 Descriptions):**

| ICD-10 | Description                                     | Actions   | History  | Status      | Notes                                                                                                                                                                                                                                                                              |
| :----- | :---------------------------------------------- | :-------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E1169  | Type 2 diabetes mellitus with other             | ✓ X Q Change | Logs (2) | Accepted    |                                                                                                                                                                                                                                                                                    |
| E7800  | Pure hypercholesterolemia,                      | ✓ X Q Change | Logs (1) | Inconclusive | not listed in diagnosis, but pt refill atorvastatin meds                                                                                                                                                                                                                           |
| I10    | Essential (primary) hypertension                | ✓ X Q Change | Logs (1) | Inconclusive | BP in this visit 142/78. Slightly elevated (ideally <14. Previous visits BP within normal limit. Need to inquire                                                                                                                                                                          |
| Z23    | Encounter for immunization                      | ✓ X Q Change | Logs (1) | Inconclusive | pt asked for flu shot                                                                                                                                                                                                                                                              |
| M2740  | Unspecified cyst of jaw                         | ✓ X Q Change | Logs (6) | GP Query    |                                                                                                                                                                                                                                                                                    |
| Z6824  | Body mass index [BMI] 24.0-24.9, adult          | ✓ X Q Change | Logs (1) | Inconclusive | BMI 24.63. categorized as normal, but close to over (>25), which may cause pt to be at an increased risk                                                                                                                                                                             |
| E1121  | Type 2 diabetes mellitus with diabetic          | ✓ X Q Change | Logs (8) | Accepted    |                                                                                                                                                                                                                                                                                    |
| E119   | Type 2 diabetes mellitus without                | ✓ X Q Change | Logs (1) | Accepted    | The provider used code E11.9 which says without complications, but there's also diabetic nephropathy                                                                                                                                                                               |
| M109   | Gout, unspecified                               | ✓ X Q Change | Logs (1) | Possible Pr... | No information about this condition. Need confirmat provider. Pt doesnt't have complaint or presciptions                                                                                                                                                                           |
| R5383  | Other fatigue                                   | ✓ X Q Change | Logs (1) | Inconclusive |                                                                                                                                                                                                                                                                                    |
|        | Showing 24 results                              |              |          |             |                                                                                                                                                                                                                                                                                    |

**Summary for All Encounters:**

| Status      | # of Findings |
| :---------- | :------------ |
| Accepted    | 5             |
| Rejected    | 1             |
| GP Query    | 2             |
| Unreviewed  | 17            |
| **Total**   | **25**        |

**The Following Has Been Completed:**
*   ✔ Member Details Ch...
*   ✔ Provider Details Ch...
*   ✔ Date of Service Spe...
*   ✔ Electronic / Provide...
*   ✔ Record is Legible
*   ✔ Hospital / Physician...

**Main Content (Right Section - Medication and Script Details):**

*   **Cholecalciferol (Vitamin D3) 50000 UNIT Oral Tablet**
    *   Take 1 tablet (50,000 units) by mouth weekly
    *   07/26/19-07/26/19
    *   Vitamin D deficiency
    *   Provider comment: called pharmacy to cancel prescription; unnecessary dose - kk by Katherine Ko NP on 07/26/19
    *   EScript (verified): 07/26/19 Prescriber: Katherine Ko NP SIG: Take 1 tablet (50,000 units) by mouth weekly Refills: 1 Quantity: 90
    *   EScript (verified): 03/18/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (50,000 units) by mouth weekly Refills: 1 Quantity: 90
*   **Ergocalciferol (Vitamin D (Ergocalciferol)) 50000 UNIT Oral Capsule**
    *   Take 1 capsule (50,000 units) by mouth weekly
    *   08/09/19-10/09/19
    *   Vitamin D deficiency
    *   EScript (verified): 08/09/19 Prescriber: Katherine Ko NP SIG: Take 1 capsule (50,000 units) by mouth weekly Refills: 1 Quantity: 90
*   **Glimepiride (Amaryl) 2 MG Oral Tablet**
    *   Take 1 tablet (2 mg) by mouth daily
    *   04/23/18-03/01/20
    *   Diabetes
    *   Provider comment: Rx by Dr. Lee by David Chen MD MBA on 06/09/20
    *   EScript (verified): 04/17/20 Prescriber: David Chen MD MBA SIG: Take 1 tablet (2 mg) by mouth daily Refills: 0 Quantity: 0
    *   EScript (refill request): 12/11/19 Prescriber: Sylvia Ng NP-C SIG: Take 1 tablet (2 mg) by mouth daily Refills: 1 Quantity: 90
    *   EScript (verified): 03/21/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (2 mg) by mouth daily Refills: 1 Quantity: 90
    *   EScript (verified): 02/25/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (2 mg) by mouth daily Refills: 1 Quantity: 90
*   **Losartan Potassium 25 MG Oral Tablet**
    *   Take 1 tablet (25 mg) by mouth daily
    *   04/01/19-09/16/20
    *   Diabetes
    *   EScript (verified): 12/11/19 Prescriber: Sylvia Ng NP-C SIG: Take 1 tablet (25 mg) by mouth daily Refills: 2 Quantity: 90
    *   EScript (verified): 09/27/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (25 mg) by mouth daily Refills: 2 Quantity: 90
    *   EScript (verified): 04/01/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (25 mg) by mouth daily Refills: 1 Quantity: 90
*   **Metformin HCl (metFORMIN HCI) 500 MG Oral Tablet**
    *   Take 1 tablet (500 mg) by mouth 2 times per day
    *   04/23/18-12/11/19
    *   Diabetes
    *   Provider comment: Rx by Dr. Lee by Sylvia Ng NP-C on 12/11/19
    *   EScript (verified): 11/07/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (500 mg) by mouth 2 times per day Refills: 3 Quantity: 180
    *   EScript (verified): 03/21/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (500 mg) by mouth 2 times per day Refills: 3 Quantity: 180
    *   EScript (verified): 02/25/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (500 mg) by mouth 2 times per day Refills: 1 Quantity: 60
*   **Metformin HCl (metFORMIN HCl) 500 MG Oral Tablet**
    *   Take 1 tablet (500 mg) by mouth 2 times per day with meals
    *   - 06/09/20
    *   Diabetes

## Slide 12: Questions?

# Questions?

info@valleysteer.com