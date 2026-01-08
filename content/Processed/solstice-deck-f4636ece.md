---
source_pdf: "https://drive.google.com/file/d/1s7bYAZ5c5tcDcNb3AG-YNMq848e5Mtbu/view"
drive_folder: "Portfolio/Solstice Health"
type: portfolio
company: Solstice Health
ingested: 2025-12-27
original_filename: "Solstice-deck.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1s7bYAZ5c5tcDcNb3AG-YNMq848e5Mtbu/view)

# Solstice

## Slide 1: Solstice
Solstice
Automating the clinical data retrieval process for community practices

This presentation is property of Solstice Health, Inc. and is confidential.
1

## Slide 2: Problem
Problem
Finding patient records is time-consuming and expensive.
Context
Prior to a patient's initial visit, community practices need copies of each patient's complete medical records for treatment decisions. Without them, they must postpone or cancel appointments.

**Records Request**
*Fax*
*EHR¹ Access*
*Fax*

**Records Release**

**Filtering Records**
*Labs*
*Progress Note*

**Structuring Records**

This process takes on average **2 hours** and costs **$80 per patient**, amounting to **$125bn annually**.
2
(1) Electronic health record

## Slide 3: Solution
Solution
Solstice is a fully automated medical records retrieval pipeline.
We automate the medical records processing for community practices by:
1. **RETRIEVING** all necessary information from relevant providers;
2. **FILTERING** to identify exactly the information necessary for the doctor to provide care, and;
3. **STRUCTURING** this information into an easily consumed report.
3

## Slide 4: Product: Retrieval
Product: Retrieval
We retrieve longitudinal clinical information from providers.

**HEALTH INFORMATION EXCHANGES**
*Epic*
*Cerner*
*athenahealth*
*commonwell HEALTH ALLIANCE*
*eHealth Exchange*

**SOLSTICE CLINICAL PIPELINE**

**INDIVIDUAL PROVIDERS**
*Regional Hospitals*
*Academic Hospitals*
*Regional Clinics*
*Surgical Centers*
*Physician Practices*
*Independent Labs*
*Imaging Centers*
*Physician Networks*

Cumulatively access to **92%** of all US health organizations:
**27K+ PROVIDER GROUPS**
**3.1K HOSPITAL SYSTEMS**

To providers not accessible through EHRs, HINs¹, and exchanges:
**AUTOMATED FAX TRANSMISSION**
**CONTINUOUS FOLLOW-UPS**
4
(1) Health information network

## Slide 5: Product: Filtering
Product: Filtering
We filter through thousands of digital and machine-readable documents to find what matters for physicians.
Robust selection criteria established through 1000s of validated reports by physicians, using identifiers such as:
* CLINICAL KEYWORDS
* TYPE OF APPOINTMENT
* TIMESTAMPS
* TEST RESULTS
* PROVIDER NAME
* TYPE OF DOCUMENT

**Patient Record Example Data Points:**
* John Apple
* Medications
* Diagnoses
* Pathology
* Lab Results

1 Diagnosis-specific & customizable
EXAMPLES:
* Breast Cancer: Mammograms, CT
* Lung Cancer: CT, MRI
* Hematology: Blood tests

2 Structured and unstructured information filtering

| Document Type | Category | Data Extracted |
|---|---|---|
| XML | Structured | Labs, Medications, Diagnoses |
| JSON | Structured | Labs, Medications, Diagnoses |
| PDF | Unstructured | Progress Notes, Operative Notes |
| | Unstructured | Progress Notes, Operative Notes |
5

## Slide 6: Product: Structuring
Product: Structuring
We transform clinical documents into standardized formats.
Information from HIEs, EHRs, and individual providers arrives in many different formats...
* Difficult for admin staff to decipher
* Difficult for clinician to interpret

Using pre-trained LLMs, Solstice takes heterogenous data to transform it into uniformly structured data formats.
* LABS & BLOOD TESTS
* PATHOLOGY REPORTS
* IMAGING REPORTS
* PROGRESS NOTES
* GENETIC PANELS

**Data Flow Transformation:**
* HIE data -> Structured Report
* EHR data -> Structured Report
* Fax data -> Structured Report
6

## Slide 7: Traction
Traction
8 practices have adopted Solstice, and 4 are actively using it.

**Adopted Practices (Initial Pilots):**
* NMCC NEW MEXICO CANCER CENTER
* Oregon Specialty Group
* MARY BIRD PERKINS CANCER CENTER™
* MARYLAND ONCOLOGY HEMATOLOGY
* ALABAMA ONCOLOGY.
* Oncology & Hematology Specialists, P.A.
* NEBRASKA CANCER SPECIALISTS
* MOASD Medical Oncology Associates of San Diego (A Partner of OneOncology)

**Progression of Adoption:**
* 8 initial pilots with initial MVP
* 3.3% conversion from cold outreach
* Digital connections to HIEs only
* 4 current users with adjusted platform
* 3.74x increase in usage
* Digital connections with automated fax and report processing
7

## Slide 8: Market Validation
Market Validation
Dominant players have focused on large health systems.

| Company | CIOX® (A DATAVANT Company) | MRO | Phreesia |
|---|---|---|---|
| Providers | 18k providers | 35k providers | 3.3k providers |
| Volume/Activity | 15mm annual clinical records volume | 65mm annual clinical records volume | 120mm annual patient check-ins |
| Focus | Focus on large health systems | Focus on large health systems | Focus on large health systems |

Community providers haven't been targeted because the economics of manual data retrieval haven't made sense, until now.
8

## Slide 9: Market
Market
The annual TAM for Solstice's clinical data retrieval is $125bn.

| Market Segment | Value |
|---|---|
| TOTAL CLINICAL DATA RETRIEVAL MARKET¹ | $125bn |
| RETRIEVAL MARKET FOR COMMUNITY PRACTICES² | $19.1bn |
| RETRIEVAL MARKET FOR COMMUNITY ONCOLOGY³ | $143mm |
9
(1) Nashville Medical News, 2023. (2) Definitive Healthcare, 2022. (3) American Society of Clinical Oncology, 2018.

## Slide 10: Why Now?
Why Now?
Growing HIE adoption and LLM sophistication makes this business possible now.

1 HIE Adoption Growing
53% adoption rate in 2019 – 92% adoption rate in 2023

2 LLM Sophistication
Enhances the ability to process and structure large amounts of information

HYPOTHESIS:
These two macro trends will make automating the records retrieval process for community practices economical.
10

## Slide 11: Vision
Vision
Painting a comprehensive view of a patient's history for both providers and biopharma.
85% of specialty patients are treated in the community setting.
Retrieving entire medical histories for these patients creates the opportunity to create the first fully-comprehensive, linked dataset for oncology and other specialties.
GLOBAL REAL WORLD EVIDENCE MARKET¹: $15.6bn
Applications of RWD range from drug discovery, clinical trial matching, & post-market approval.
11
(1) Fortune Business Insights, 2023.

## Slide 12: Team
Team
We're two chronic disease patients with experience building in healthcare.

**Aris Saxena**
Product, Founder, Patient.

**Yiwen Li**
Operations, Founder, Patient.

We're fueled by our experiences as chronic disease patients struggling to transfer records.
We've been friends since our freshman year at Penn/Wharton.
* Penn Medicine
* Wharton UNIVERSITY of PENNSYLVANIA
* Morgan Stanley
* BCG
* Z Fellows

Past Ventures: We've previously built software for clinics in Africa to manage medication deliveries (3000+ deliveries/day) and an at-home physical therapy marketplace (30+ providers).

Current Investors: Travis May (Datavant), Cory Levy (Z Fellows), Ed Lando (Misfits Market), Jordan Epstein & Snaebjorn Gunnsteinsson (Juno Kids)
12

## Slide 13: Appendix: Solstice Clinical Reports
Appendix: Solstice Clinical Reports
We curate clinical summary reports for clinical teams.

**Structured Data and History (Example Snippet)**
**General Chemistry**
| Date | Test | Value | Range | Status |
|---|---|---|---|---|
| 10/04/2022 | eGFR Non African American | 97 | | Normal |
| 10/04/2022 | Alkaline Phosphatase (45-117 unit/L) | 251 | | Above high normal |
| 04/06/2022 | Sodium (133-145 mMol/L) | 133 | | Normal |
| 04/06/2022 | Potassium (3.1-5.1 mMol/L) | 3.5 | | Normal |
| 04/06/2022 | Prot Total (6.4-8.2 gm/dL) | 6.7 | | Normal |
| 04/06/2022 | Chloride (97-108 mmol/L) | 103 | | Normal |

**Medications (Example Snippet)**
| Medication | Instructions | Quantity | Status | Started | Stopped | Doctor |
|---|---|---|---|---|---|---|
| Diovan HCT 160-25 MG Oral Tablet (hydrochlorothiazide 25 MG/valsartan 160 MG Oral Tablet [Diovan HCT]) | 1 every morning | 90 | active | 10/19/2022 | 1/17/2023 | Charles Boackle |

**Patient Demographics:**
Sally Smith, Female, mm/dd/yyyy (nn years)
Address 1: 2222 Home Street, Beaverton, OR 97867
Address 2: 17 Main Road, Prostoquashino, CA 02368
Phone Number: 555-555-5555

**Past Medical Problems (Example Snippet)**
| Name | ICD10 Code | Status | Onset Date |
|---|---|---|---|
| Stage IVII pancreatic ductal adenocarcinoma | | Active | Specified date |
| Alcoholic fatty liver | K70.0 | Active | 5/8/2019 |
| Chronic kidney disease, stage 3 unspecified | N18.30 | Active | 2/17/2019 |
| Hypertensive chronic kidney disease w stg 1-4/unsp chr kdny | I12.9 | Active | 2/17/2019 |
| Gastro-esophageal reflux disease without esophagitis | K21.9 | Active | 8/25/2015 |
| Subacute cutaneous lupus erythematosus | L93.1 | Active | 11/3/2014 |
| Discoid lupus erythematosus | L93.0 | Resolved | 4/1/2014 |
| Essential (primary) hypertension | I10 | Active | 6/10/2010 |
| Other dorsalgia | M54.89 | Active | 10/13/2009 |
| Oth disrd of bone density and structure, unspecified | M85.80 | Active | 10/13/2009 |
| Allergic rhinitis, unspecified | J30.9 | Active | 10/8/2008 |
| Oth specific arthropathies, NEC, unsp hand | M12.849 | Active | 10/8/2008 |
| Discoid lupus erythematosus | L93.0 | Resolved | 10/8/2008 |
| Gastro-esophageal reflux disease without esophagitis | K21.9 | Resolved | 10/8/2008 |

**Social History (Example Snippet)**
| Social History Element | Family History Element | Last Updated |
|---|---|---|
| Ex-smoker | Family history reviewed bro. CHF, defibrillator/pacer -bro. | 05/07/2020 |
| Unable to tidy house | prostate cancer ~ | |
| 2 children | | |
| Tobacco usage screening (procedure) | Maternal grandfather's history of bone cancer | 5/11/2017 |
| Caffeine user | Maternal grandmother's history of bone cancer | 5/11/2017 |
| Exercises regularly | Maternal history of mother in fair health 1936 bilat TKA | 5/11/2017 |
| Current drinker of alcohol | Paternal grandfather: stroke/cerebrovascular accident | 5/11/2017 |
| Married | Paternal grandmothers' history of diabetes mellitus | 5/11/2017 |
| Heterosexual | Father died at age 38 MVA | 5/11/2017 |
| Full-time employment | | |
| Social drinker | | |

**Progress Notes and Reports (Example Snippets)**
**Radiology Reports**
*Reported: 10/04/2022 04:39 PM*
*Fluoroscopy Up Hour*
*INDICATION: SURGERY*
*COMPARISON: None*

**Pathology Reports**
*Surgical Pathology Report DOS: 10/05/2022*
*PERFORMING LABORATORY: Grandview Medical Center Clinical Laboratory 3690 Grandview Parkway Birmingham AL 35243*

**Operative Reports**
*Operative Report DOS: 10/04/2022*
*PREOPERATIVE DIAGNOSIS: Stage IVII adenocarcinoma, head of the pancreas, with elevated CA-19-9. 2. 50-pound weight loss.*
*POSTOPERATIVE DIAGNOSIS: Stage IVII adenocarcinoma, head of the pancreas, with elevated CA-19-9. 2. 50-pound weight loss. 3. Nodule on segment 8 of the liver.*
*PROCEDURES PERFORMED: 1. Laparoscopic wedge biopsy, right lobe of the liver. 2. Placement of a 9.6-French port, left subclavian vein, with chest fluoroscopy.*
*ADDITIONAL SURGEON*
*ANESTHESIA: General.*
*ESTIMATED BLOOD LOSS: Less than 10 cc. IV FLUIDS: Per anesthetic record.*
*DRAINS: None.*
*COMPLICATIONS: None.*
*INDICATION FOR PROCEDURE: The patient is a who about a year ago started losing weight, having oily stools. She lost about 50 pounds. She then presented with obstructive jaundice, dark urine, light-colored stools. She underwent an EUS by who then noted a 2.6cm mass, head of the pancreas, biopsy positive adenocarcinoma, stent placed. PET scan revealed disease only in the head of the pancreas. CA-19-9 was elevated at 216. Told the family we would do a laparoscopy and place a port. She also had a reducible left inguinal hernia, she wanted to look at. I told her we would repair that if it just simply took a stitch or could be closed primarily without putting mesh in. Risks and benefits were discussed.*
*OP DICTATION DATE: 2022-04-07*
*SURGEON/PROVIDER:*
*ASSISTANT:*
*PREOPERATIVE DIAGNOSIS: Pressure injury, cervical and thoracic spine, with exposure of T1.*
*POSTOPERATIVE DIAGNOSIS: Pressure injury, cervical and thoracic spine, with exposure of T1 with gross evidence of osteomyelitis.*
*PROCEDURE PERFORMED: 1. Excisional debridement of posterior. 2. Resection of C7 spinous process. 3. Resection of T1 spinous process. 4. Bilateral paraspinous muscle flaps. 5. Bilateral trapezius myocutaneous flaps. 15734, 22100, 22101, 97606 General anesthesia.*
*ESTIMATED BLOOD LOSS: 50 mL. COMPLICATIONS: None.*
*SPECIMEN: Segments of bone from C7 and T1 were sent for microbiology. DRAINS: A #10 Blake drain was brought out the left side and secured with a 4-0 nylon suture.*
*BRIEF HISTORY: This is a patient sent to us by She has previously had spinal fusions. She has thinning of the skin over her C7 spinous process with significant protuberance and pain. She also has an ulceration below that just over the T1 spinous process. There is concern that she may develop an infection and with her hardware develop a significant complication. We have gone over the risks and benefits including scar location, recovery, recurrent seroma, hematoma, wound healing problems and need for additional surgery, well understands and wants to proceed in the prone position operative risk.*
*TECHNICAL DETAILS: The patient was marked, taken to the operating room. General anesthesia was induced. She was moved onto the operating room table in the prone position and prepped and draped in the usual sterile fashion. A timeout was performed. Local anesthesia was administered to the After allowing that to take effect, a 10 blade was used to circumscribe the abnormal skin overlying the posterior spine and neck. We dissected We marked the area where there was an ulceration at the level of T1. We used a rongeur to resect the bone down to good, healthy appearing We also resected the protuberance of the C7. We irrigated copiously with Betadine and checked for hemostasis. We elevated our bilateral trapezius myocutaneous flaps on each side, dissecting out. We identified what appeared to be the spinal accessory nerve, which we tried to preserve on each side. We did visualize some hardware on each side and then decided to elevate a separate paraspinous muscle flap on each side to fold over and er the exposed hardware. We irrigated copiously with Betadine again. We checked for hemostasis. We advanced our paraspinous muscle flaps to the hardware on each side and inset it with 2-0 Vicryl simple interrupted and horizontal mattress sutures. We made sure that we had adequately released our trapezius myocutaneous flaps, and they wou would advance to the midline. We first inset the muscle and fascial layer with 0 Vicryl simple interrupted and horizontal mattress sutures. We used an imbricating layer of 2-0 Vicryl simple interrupted sutures. We used 3-0 PDS for the deep layer and to evert the skin and then 3-0 Monocryl for the skin. We placed a PICO negative pressure wound dressing that was approximately 15 x 4 cm. tolerated the procedure well. Following surgery, I spoke with her husband. I was present for and supervised the key and critical portions of the operation. JORGE 1. DE LA TORRE, MD (205) 591-mingham, brly*

**Filter Based On**
* Date of Document
* Type of Document
* Provider Name
* Type of Appointment
13

## Slide 14: Appendix: Summary of Core Features
Appendix: Summary of Core Features
We give oncologists a complete view of their patients.

1 Automated records retrieval
We retrieve patients' clinical records from digital connections to HINs and automated fax transmissions.

2 Optimized records categorization
We filter patient data into their data types immediately to include only relevant information.

3 Tailored patient summary reports
We standardize notes using tailored LLMs to make it easier for clinicians to interpret and digest.
14

## Slide 15: Appendix: Go-To-Market
Appendix: Go-To-Market
We're building a network of community practices in the US.

1 Intra-regional expansion through specialty relationships
ONCOLOGY, HEMATOLOGY, UROLOGY, PATHOLOGY, GYNECOLOGY

2 Inter-regional expansion through physician group networks
* The US Oncology Network
* OneOncology

3 Nationwide expansion through large-scale vendor distribution
* flatiron.
* MCKESSON
15

## Slide 16: Appendix: Sources of Health Data
Appendix: Sources of Health Data
We paint a holistic picture of a cancer patient.
We pull information from all the health systems they visited throughout their care journey.

| Data Source | Information Retrieved |
|---|---|
| **Primary care doctor** | Medical history, Diagnosis, Family history, Medication list |
| **Specialty care** | Radiology reports, Biometric data, Specialized tests |
| **Clinical testing** | Blood protein tests, Genetic panels, CBC tests, Tumor markers |
| **Ancillary care** | Psychologists, Physical therapy, Speech therapy |
| **Provider reports** | Physician notes, Discharge summaries, Assessment plans |
| **Insurance provider** | Billing data, Claims data, Insurance details |

Cancer patients generate many forms of data that sit in siloes.
16

## Slide 17: Appendix: Life Sciences Applications
Appendix: Life Sciences Applications
Creating linked patient datasets for RWE applications.

**Label Expansion**
Our real-world data derived from electronic health records may be used to **enhance the understanding of how your therapies are being used in an off-label setting.**

**Payer Reimbursement**
Our real-world data may be used to enhance traditional approaches to cost-effectiveness analysis to **increase drug reimbursement and inform HTA decision-making.**

**Biomarker Discovery**
Our paired genomic data with longitudinal clinical data enables researchers to **create connections between patient genetic profiles with their clinical outcomes**, accelerating biomarker identification.

**Post-Marketing Requirements**
Our real-world data may be used to **fulfill PMRs and PMCs to study the efficacy of approved therapies on patients who have not participated in pivotal studies.**

**Clinical Trial Matching**
Our linked clinico-genomic data may be used to **identify patients with certain genotypic and phenotypic markers who meet your trial requirements and are eligible to participate.**
17