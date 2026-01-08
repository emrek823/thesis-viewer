---
source_pdf: "https://drive.google.com/file/d/1bOrSF-liKasMkGlbYEy0pljHO-2EduYW/view?usp=drivesdk"
drive_folder: "Portfolio/Valley Steer"
type: portfolio
company: Valley Steer
ingested: 2025-12-26
original_filename: "Valley Steer Overview.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1bOrSF-liKasMkGlbYEy0pljHO-2EduYW/view?usp=drivesdk)

## Slide 1: Valley Steer Overview

# Valley Steer Overview

## Slide 2: What Is Valley Steer?

# What Is Valley Steer?

Valley Steer is creating a real time payments service for providers in the Managed Medicare and Medicaid markets. We enable this by generating clinically data rich claims and aligning payment acceleration incentives between value based care providers and their contracted risk bearing entities.

Valley Steer is an early stage startup that currently has ~1.5m members and processes over 500k claims / encounters per month.

2

## Slide 3: What Is Valley Steer's Approach?

# What Is Valley Steer's Approach?

Building a real time payments service for value based care providers requires developing and integrating several highly commoditized pieces of payer infrastructure.

As Valley Steer develops each piece of this infrastructure, we sell these pieces as ultra low cost, high quality independent services.

3

## Slide 4: Which Services Are Live Today?

# Which Services Are Live Today?

1.  Redbird: Paper form to structured electronic output
2.  Magneto: Claims aggregation, modification, and misdirection
3.  Jubilee: Patient chart review for suspected diagnosis and quality gaps

4

## Slide 5: What Makes Valley Steer Services Different?

# What Makes Valley Steer Services Different?

|                       | Valley Steer           | Existing Incumbents |
| :-------------------- | :--------------------- | :------------------ |
| Access to Low Cost Overseas Labor | X                      | X                   |
| Developing Proprietary Software | X                      | Sometimes           |
| Leveraging AI / Machine Learning (ML) | X                      |                     |
| Offered Commodity Services Priced As: | Wedge / Loss Leader | Cash Cow            |

5

## Slide 6: Is Valley Steer a Technology or Services Business?

# Is Valley Steer a Technology or Services Business?

Valley Steer is a technology-enabled services business.

All developed technology is used internally to enable Valley Steer's services teams. Valley Steer does not sell technology. Additionally, Valley Steer's products do not require any custom integrations to operate.

Valley Steer sits within the existing data pipes.

6

## Slide 7: Redbird: Ultra Low Cost Paper to Electronic Conversion

# Redbird: Ultra Low Cost Paper to Electronic Conversion

(Diagram shows various paper document types feeding into "Redbird", which then outputs "Structured Data Output")

**Input Documents (Left to Right, Top to Bottom):**
*   Claim: CMS-1500, UB04
*   Dispute / Appeal
*   Pre-Authorization
*   Enrollment
*   Patient Chart

**Processing Step:**
*   Redbird

**Output:**
*   Structured Data Output (csv, EDI, xls, etc)

Utility pricing: Per document fee

7

## Slide 8: Redbird is an ML Assisted Paper Form OCR Extraction Service

# Redbird is an ML Assisted Paper Form OCR Extraction Service

Ex: CMS-1500 to 837 Conversion

(Screenshot of a digital form with highlighted fields and a right-hand panel displaying extracted data points.)

**Top Bar Information:**
*   Received Date: 2022-02-08
*   Last Modify At: 2022-10-02 21:51
*   Assigned To: Notes
*   Document Type: cms1500
*   Last Modify By: Select to assign
*   Status: Needs Review
*   Complete Review (button)

**Left Panel (Form View - partial visible fields):**
*   14. DATE OF CURRENT ILLNESS, INJURY, or PREGNANCY (LMP): 08 09 2022 QUAL 431
*   17. NAME OF REFERRING PROVIDER OR OTHER SOURCE: 17a. 1G SLF000 SELF REFERRAL
*   17b. NPI:
*   19. ADDITIONAL CLAIM INFORMATION (Designated by NUCC): 911 ER TXP FROM SCENE AT 1327 TO PRESBYTERIAN INTERCOMMUNITY HOSP ER DR ACCEPTED PT RESPONSIBILITY
*   21. DIAGNOSIS OR NATURE OF ILLNESS OR INJURY. Relate A-L to service line below (24E): A. T675XXA
*   24. A. DATE(S) OF SERVICE (multiple lines shown with data)
    *   Line 1: 08 09 22 08 09 22 41 X A0427 SH A 184000 001 NPI 1639131436
    *   Line 2: 08 09 22 08 09 22 41 X A0425 SH A 6900 003 NPI 1639131436
    *   Line 3: 08 09 22 08 09 22 41 X A0424 SH 90.100. NPI 001 1639131436
    *   Line 4: 08 09 22 08 09 22 41 X 93005 SH 3500 001 1639131436
*   30. Rsvd for NUCC use: MOUNT PAID 000 37352

**Right Panel (Extracted Data Fields - "Show All Fields" is selected):**
*   24b_1:Place Of Service: 41
*   24c_1:Emg: X
*   24d_1:Code: A0427
*   24d_1:Modifier1: SH!
*   24d_1:Modifier2:
*   24d_1:Modifier3:
*   24d_1:Modifier4:
*   24e_1:Diagnosis Pointer: A
*   24f_1:Charges Dollar: 1840
*   24f_1:Charges Cents: 00
*   24g_1:Days Or Units: 001
*   24h_1:Family Plan:
*   24i_1:Qual: ZZ
*   24j_1:Id: 33-0285453
*   24j_1:Npi: 1639131436

8

## Slide 9: Magneto: Electronic Claims Aggregation, Modification, Misdirects

# Magneto: Electronic Claims Aggregation, Modification, Misdirects

(Flow Diagram showing "Inbound Data" -> "Valley Steer" -> "Payer Internal Systems" or "External Destination")

**Flow:**
1.  **Inbound Data** flows into **Valley Steer**.
    *   **1** Content that should be rejected and sent back to provider or health plan
        *   \*Reasons include insufficient data, wrong data, etc.
2.  From **Valley Steer**, clean content flows to **Payer Internal Systems**.
    *   **2** Clean content can flow directly to payer's internal systems and workflows
3.  From **Valley Steer**, content can be routed to an **External Destination**.
    *   **3** Content that doesn't need to go through ops process can be routed to destination

Utility pricing: Per claim fee

9

## Slide 10: Jubilee: Structuring, Abstracting, Extracting Patient Charts

# Jubilee: Structuring, Abstracting, Extracting Patient Charts

(Diagram shows a medical chart icon pointing to a list of "Data Elements Extracted")

**Data Elements Extracted**
*   Member Details
*   Provider Details
*   Dates of Service
*   Places of Service
*   Suspected Diagnosis
*   HCC's
*   Quality Gaps

\* Paper Charts, PDF's OK

**Valley Steer Difference**

Valley Steer is the only Chart Abstraction company that leverages employed, practicing General Practitioners for chart review. Other companies use non-practitioner individuals with nursing degrees for clinical work.

With regards to risk adjustment, Valley Steer's system is developed and optimized to do concurrent coding

Utility pricing: Per page fee

10

## Slide 11: Jubilee Example of HEDIS / RAF Chart Abstraction

# Jubilee Example of HEDIS / RAF Chart Abstraction

Risk Adjustment Review d\_v0.996

Details For Chart 201: Dates of Service 2020-05-21 to 2020-09-16

(Screenshot of a user interface for chart review, showing ICD-10 codes, actions, status, notes, and a list of prescriptions/medications on the right.)

**Top Navigation:**
(C)hart (E)ncounters (I)CD (R)eview C(P)T Analytics

**Encounter(s) Section (Left Panel):**
Showing 24 results

| ICD-10 | Description                                  | Actions        | History   | Status      | Notes                                                                                                     |
| :----- | :------------------------------------------- | :------------- | :-------- | :---------- | :-------------------------------------------------------------------------------------------------------- |
| E1169  | Type 2 diabetes mellitus with other          | ✓ X Q Change   | Logs (2)  | Accepted    |                                                                                                           |
| E7800  | Pure hypercholesterolemia,                   | ✓ X Q Change   | Logs (1)  | Inconclusive | not listed in diagnosis, but pt refill atorvastatin meds                                                    |
| I10    | Essential (primary) hypertension             | ✓ X Q Change   | Logs (1)  | Inconclusive | BP in this visit 142/78. Slightly elevated (ideally <14 Previous visits BP within normal limit. Need to inquire |
| Z23    | Encounter for immunization                   | ✓ X Q Change   | Logs (1)  | Inconclusive | pt asked for flu shot                                                                                       |
| M2740  | Unspecified cyst of jaw                      | ✓ X Q Change   | Logs (6)  | GP Query    |                                                                                                           |
| Z6824  | Body mass index [BMI] 24.0-24.9, adult       | ✓ X Q Change   | Logs (1)  | Inconclusive | BMI 24.63. categorized as normal, but close to over (>25), which may cause pt to be at an increased risk |
| E1121  | Type 2 diabetes mellitus with diabetic       | ✓ X Q Change   | Logs (8)  | Accepted    |                                                                                                           |
| E119   | Type 2 diabetes mellitus without             | ✓ X Q Change   | Logs (1)  | Accepted    | The provider used code E11.9 which says without complications, but there's also diabetic nephropathy      |
| M109   | Gout, unspecified                            | ✓ X Q Change   | Logs (1)  | Possible Pr... | No information about this condition. Need confirmat provider. Pt doesn't have complaint or prescriptions    |
| R5383  | Other fatigue                                | ✓ X Q Change   | Logs (1)  | Inconclusive |                                                                                                           |

**Summary for All Encounters:**
*   **25 Total Findings**

| Status      | # of Findings |
| :---------- | :------------ |
| Accepted    | 5             |
| Rejected    | 1             |
| GP Query    | 2             |
| Unreviewed  | 17            |

**The Following Has Been Completed:**
*   ✔ Member Details Ch...
*   ✔ Provider Details Ch...
*   ✔ Date of Service Spe...
*   Electronic/Provide...
*   Record is Legible
*   ✔ Hospital/Physician...

**Right Panel (Medication/Prescription History - partial view):**
*   **Cholecalciferol (Vitamin D3) 50000 UNIT Oral Tablet**
    *   Take 1 tablet (50,000 units) by mouth weekly
    *   07/26/19-07/26/19
    *   Vitamin D deficiency
    *   Provider comment: called pharmacy to cancel prescription; unnecessary dose - kk by Katherine Ko NP on 07/26/19
    *   EScript (verified): 07/26/19 Prescriber: Katherine Ko NP SIG: Take 1 tablet (50,000 units) by mouth weekly Refills: 1 Quan
    *   EScript (verified): 03/18/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (50,000 units) by mouth weekly Refills: 1 (
*   **Ergocalciferol (Vitamin D (Ergocalciferol)) 50000 UNIT Oral Capsule**
    *   Take 1 capsule (50,000 units) by mouth weekly
    *   08/09/19-10/09/19
    *   Vitamin D deficiency
    *   EScript (verified): 08/09/19 Prescriber: Katherine Ko NP SIG: Take 1 capsule (50,000 units) by mouth weekly Refills: 1 Qua
*   **Glimepiride (Amaryl) 2 MG Oral Tablet**
    *   Take 1 tablet (2 mg) by mouth daily
    *   04/23/18-03/01/20
    *   Diabetes
    *   Provider comment: Rx by Dr. Lee by David Chen MD MBA on 06/09/20
    *   EScript (verified): 04/17/20 Prescriber: David Chen MD MBA SIG: Take 1 tablet (2 mg) by mouth daily Refills: 0 Quantity:!
    *   EScript (refill request): 12/11/19 Prescriber: Sylvia Ng NP-C SIG: Take 1 tablet (2 mg) by mouth daily Refills: 1 Quantity: 9
    *   EScript (verified): 03/21/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (2 mg) by mouth daily Refills: 1 Quantity:!
    *   EScript (verified): 02/25/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (2 mg) by mouth daily Refills: 1 Quantity::
*   **Losartan Potassium 25 MG Oral Tablet**
    *   Take 1 tablet (25 mg) by mouth daily
    *   04/01/19-09/16/20
    *   Diabetes
    *   EScript (verified): 12/11/19 Prescriber: Sylvia Ng NP-C SIG: Take 1 tablet (25 mg) by mouth daily Refills: 2 Quantity: 90
    *   EScript (verified): 09/27/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (25 mg) by mouth daily Refills: 2 Quantity
    *   EScript (verified): 04/01/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (25 mg) by mouth daily Refills: 1 Quantity
*   **Metformin HCI (metFORMIN HCI) 500 MG Oral Tablet**
    *   Take 1 tablet (500 mg) by mouth 2 times per day
    *   04/23/18-12/11/19
    *   Diabetes
    *   Provider comment: Rx by Dr. Lee by Sylvia Ng NP-C on 12/11/19
    *   EScript (verified): 11/07/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (500 mg) by mouth 2 times per day Refills Quantity: 180
    *   EScript (verified): 03/21/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (500 mg) by mouth 2 times per day Refills Quantity: 180
    *   EScript (verified): 02/25/19 Prescriber: David Chen MD MBA SIG: Take 1 tablet (500 mg) by mouth 2 times per day Refills Quantity: 60
*   **Metformin HCI (metFORMIN HCI) 500 MG Oral Tablet**
    *   Take 1 tablet (500 mg) by mouth 2 times per day with meals
    *   - 06/09/20
    *   Diabetes

Ready For Coding

11

## Slide 12: Questions?

# Questions?

info@valleysteer.com

12