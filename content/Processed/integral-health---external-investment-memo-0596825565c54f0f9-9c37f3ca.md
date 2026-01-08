---
source_pdf: "https://drive.google.com/file/d/1tvi6TR26A9IkCcvdh-3X563fRyX8_aja/view"
drive_folder: "Portfolio/Integral"
type: portfolio
company: Integral
ingested: 2025-12-27
original_filename: "Integral Health - External Investment Memo 0596825565c54f0f90efdf026aba7199.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1tvi6TR26A9IkCcvdh-3X563fRyX8_aja/view)

# Integral Health - External Investment Memo

## Company / Deal Overview
### Company Overview
*   **Name:** Integral Health
*   **Overview:** Integral is building software to help biopharma automate statistical analyses to certify that relevant healthcare data is de-identified under HIPAA. The long-term vision is to build the “OS for healthcare compliance”.
*   **HQ:** San Francisco, CA
*   **Website:** https://useintegral.com/
*   **Founding Year:** 2022

## Company / Deal Overview
*   **Management Ownership:** 51/49 (Shubh / John)

### Deal Terms
*   **Round Size:** $2.1M
*   **Post-Money:** $8M
*   **Virtue Investment Amount & Ownership (% on fully diluted basis):** $640K (8%)
*   **Financing Instrument (equity, SAFE, convertible note, etc.):** SAFE
*   **Syndicate:** Array Ventures, Caffeinated Capital and GPV

### Diligence Overview
*   Mgmt calls / interaction: 10+
*   Mgmt References (on & off sheet): 7+
*   Potential Series A Partner Validation: Yes, definite interest; main considerations / concerns are market related (TAM/Sizing, GTM, pull).
*   Customers / KOLs / Experts: 8+

## Executive Summary
Integral is building software to help biopharma companies automate statistical analysis to certify healthcare data is de-identified under HIPAA.

Biopharma companies want to combine a variety of data sources with healthcare data to create a 360° view of the patient, but the current statistical risk analysis to maintain HIPAA compliance is a clunky consulting process requiring manual data analysis. Integral automates this "expert determination analysis" with a software platform that sits on top of any data system to continuously monitor dataset combinations. This rapid and continuous monitoring not only maintains HIPAA compliance, which can result in billions of fines or criminal penalties, but unlocks hundreds of dataset combinations to better target patients for trials or increase drug sales. Integral's goal is to be the foundation for discovering insights from data and leveraging them for better drug development, distribution, and analysis.

John and Shubh first built a tutoring startup together in college and they came up with the idea for Integral while Shubh (CEO) was at LiveRamp working on HIPAA compliant data analysis products. LiveRamp is also their first channel partner which enables them to service their first 2-3 clients in and lay the foundation for direct sales to pharma. With this $2.1M fundraise, Integral plans to execute with its initial LiveRamp clients, sign 1-2 additional channel partnerships, begin its direct-to pharma GTM motion, and build out its engineering infrastructure to support 100M+ records.

## Team

### Shubh Sinha
*   Product Lead for LiveRamp Health
    *   Launched 4 HIPAA compliant data products producing $10M+ in revenue in 2 years
    *   Led compliance reviews for top pharma and insurance companies

### John Kuhn
*   Senior Full-Stack software engineer at Oliver.Space (#10 of 100+ employees)
    *   Built large scale data processing systems for 10k+ users
*   Former software engineer at Salesforce

## HIPAA Overview
One of the most critical pieces of privacy legislation in US healthcare, the Health Insurance Portability and Accountability Act (HIPAA), was first enacted in 1996 when healthcare providers and payers used paper-based medical records. There are many policies or “titles” within HIPAA (e.g., health insurance portability, group health plan requirements, life insurance taxes, etc) but the Privacy Rule is arguably the most impactful. The Privacy Rule governs the use of Protected Health information (PHI) by "covered entities”, which says what organizations working in healthcare can do with the information they collect. Not maintaining HIPAA compliance can result in billions of dollars in fines and potential criminal penalties.

### HIPAA Overview (Diagram Content Description)
The diagram titled "The Deidentification Pipeline" illustrates different entities and data flows related to HIPAA. It is structured into concentric circles and connected elements:

**Central Entities (The Covered Entity Cool Kid's Club):**
*   Pharmacy
*   Payer
*   Health system
*   Reference lab

**Entities in "The BA Circle of Minimum Necessary Data":**
*   ECG Machine
*   PACS
*   Patient Portal
*   Telehealth App

**Entities in "The Outer Zone of Release by Consent":**
*   Lawyers
*   Personal health records and wellness apps
*   The Patient
*   Anyone with patient's consent
*   Life Insurance

**Connected to The Deidentification Pipeline:**
*   Pharma (on the right side)

**HIPAA Overview (Definitions)**
*   **Covered Entities:** Organizations that are legally required to follow the privacy and security rules laid out in HIPAA are called covered entities. Typically, covered entities are health plans, healthcare clearinghouses, and providers conducting HIPAA transactions. These covered entities are able to share data with each other without explicit patient consent because they are directly involved in the delivery or payment of patient care.
*   **Business Associates:** Certain organizations that conduct business with covered entities also need to follow HIPAA. These "business associates" are required to sign a "business associate agreement” (BAA) with the covered entity and must comply with HIPAA security and privacy standards. A technology company is a business associate of a covered entity if it creates, receives or maintains PHI on behalf of the covered entity, rather than under a direct relationship with the patient.
*   **Patient Consent:** Patients or other non-HIPAA entities who want health data are entitled to receive those health records (the Designated Record Set) with explicit patient authorization. Developers and other technology vendors will not be business associates because they enter into direct relationships with consumers that do not run through covered entities. As a result, the health data they collect will generally not be treated as PHI that is subject to HIPAA.
*   **De-identification:** HIPAA explicitly calls out that if protected health information is de-identified (e.g., stripped of any and all identifying information) up to a defined standard, it can be utilized by groups like biopharma for real-world data (RWD) use cases.

## Problem
### Expert Determination is manual and slow
Section 164.514(a) of the HIPAA Privacy Rule provides the standard for de-identification of protected health information. There are 2 methods by which health information can designated as de-identified:

*   **Safe Harbor:** Simply redacting 18 types of information (name, geo, phone numbers, SSN, etc).
*   **Expert Determination:** Partially redacting the dataset using statistical and analytical methods, and then having an expert certify that there's a minimal risk of compromising privacy (e.g., risk of re-identification is <1%).

Expert Determination is the more common pathway because organizations want to remove as little data as possible, but the process is slow and inefficient. It is typically a cumbersome consulting process that involves contracting HIPAA expert consultants, sending all relevant datasets for their review, and working with them to achieve a full documented approval. HIPAA Expert consultants are mostly one-off shops with fewer than 10 people engaging in very manual data analysis. These consultants have a backlog of 20-50 implementations to certify every month for a variety of companies. Reviews take as long as 2-3 months due to collaboration between companies and their partners to answer open questions use cases and datasets. Reviews cost $100K - $200K per use case due to hourly charges and deliverable charges.

### Expert Determination Workflow Today (https://vimeo.com/542923529) (Flowchart Description)
The typical Expert Determination conversion workflow is a flowchart involving a "Client" and several steps:

1.  **Data Dictionary** and **Data Sample** are input.
2.  **Initial Exploration** occurs, which can lead to an "issue" back to the client or proceed to "OK".
3.  **List and Classify Variables** occurs, which can lead to an "issue" back to the client or proceed to "OK".
4.  **Health Data Present?** occurs. If yes, proceed.
5.  **Direct Identifiers Redacted?** occurs, which can lead to an "issue" back to the client or proceed to "OK".
6.  **Indirect Identifiers Interrogation** occurs, which can lead to an "issue" back to the client or proceed to "OK".
7.  **Creation of Composite Sample** occurs.
8.  **Quantification of dataset risk** occurs, which can lead to an "issue" back to the client.
9.  Finally, a **Report Created** is delivered to the client.

### Pharma struggles to get a 360° view of the patient
The fragmentation of the healthcare data landscape and challenges of cost, competition, completeness, interoperability, security and privacy have caused biopharma to over rely on particular data resources while under utilizing others (depicted in image below).

### DATA MATURITY WITHIN PHARMA (Chart Description)
This radial diagram illustrates various data categories and their data maturity status within pharma, grouped by different functional areas.

**Central Elements:**
*   **Customer Profile Data**
*   **Market Research & Patient Data**

**Connected Data Categories (with illustrative examples):**
*   **Promotional Data:** DTC, SAMPLE, APLD, CLAIMS, EMR/EHR, EPI, CHART AUDITS, CI
*   **Managed Care Data:** FORMULARY/LIVES, CO-PAY/PA/STEP-EDIT, PAYER-PLAN-PBM, NP/PA, PHYSICIAN, IDN/IHN FAMILY TREES, AFFILIATIONS
*   **Sales Data:** SPP/MAIL ORDER, SPECIALTY DISTRIBUTOR, LTC, GOVT., NON-RETAIL (DDD), RETAIL
*   **Trade & Contracting Data:** EDI, GPOVIDN, PBM, MCO

**Data Maturity Legend:**
*   Mature
*   Evolving

*Caption: Data Maturity within Pharma (Snowflake and Novartis)*

Consumer data in particular has been underutilized but is growing in importance as biopharma tries to form a 360° view of the patient for commercial and R&D business objectives. Every time biopharma wants to source and combine different datasets, they must get a HIPAA compliance approval for those datasets. They are limited to only working with a small list of their goals today due to the amount of time the current process takes. Even after a dataset combination has been approved, a small change to any of the datasets in the combination (e.g., add a geography column) forces another approval. Imagine optimizing a DTC online marketing campaign for a migraine drug when each tweak you make to datasets requires weeks or months of HIPAA compliance review. Pharma companies are beginning to see early ROI from these initiatives but have no room for flexibility largely because the solution today is an ad-hoc consulting process when it should be recurring and continuous.

## Solution
Integral develops software that sits on top of any data system and *continuously* determines the HIPAA compliance requirements and associated risk analysis of different dataset combinations. Integral has 3 key automations to enable companies to work with healthcare data in hours instead of months.

### Real Time Data Collaboration
The current process involves hopping on phone calls, emailing stakeholders, and other manual methods of communication in order to answer open questions. Integral has real time collaboration so various stakeholders across companies can collaborate in one easy-to-use platform.

*(Screenshot Description: Integral Stakeholders Interface)*
The screenshot displays a user interface with "Dashboard," "Stakeholders," "Risk Analysis," "Audits," and "Settings" in a left sidebar. The main content area shows a "Stakeholders for: Claims Dataset" view, with sections for:
*   **Physician purchase orders:** Lists Account Manager (Shelby Good, shelbygood@nediagnostic.com, No pending tasks) and Product Manager (Bob Jones, bjonesy18@nediagnostic.com, 2 pending tasks).
*   **Phsycians by PII:** Lists Product Manager (Steve Perry, sperry@npiregistry.com, No pending tasks) and Account Manager (Ashly Vance, avance@piregistry.com, No pending tasks).
*   **Physcian attributes:** Lists Account Manager (Paul Gosh, pgosh@cvshealth.com, No pending tasks) and Product Manager (Mark Walters, mwalters@cvshealth.com, No pending tasks).
Each section has a "See more" link.

*Caption: Vendors, partners, and clients can easily answer open questions, assign tasks, and manage communications all in one place.*

### HIPAA Expert Review Analysis Automation
In the current process, all datasets for a workflow are gathered and sent to a consultant to run HIPAA risk analyses. By directly plugging into data systems and continuously monitoring, Integral has a suite of automations to run the HIPAA risk analysis as different datasets are populated, providing real time compliance statuses and remediations.

*(Screenshot Description: Integral Risk Analysis Interface)*
The screenshot shows an Integral interface with "Dashboard," "Stakeholders," "Risk Analysis," "Audits," and "Settings" on the left. The main area shows a "Risk Analysis" section with a query input `SELECT * FROM cjb_xlsx`. Below this, a table displays sample data with columns like `cjb_xlsx.name`, `cjb_xlsx.yw`, `cjb_xlsx.sx`, `cjb_xlsx.yy`, `cjb_xlsx.wl`, `cjb_xlsx.hx`, `cjb_xlsx.zz`, `cjb_xlsx.ls`, `cjb_xlsx.totalscore`, `cjb_xlsx.rankyw`, `cjb_xlsx.ranksx`, `cjb_xlsx.rankyy`, `cjb_xlsx.ra`. Many initial rows contain `NULL` values, while later rows show numerical data for several columns, for example:
| cjb_xlsx.name | cjb_xlsx.yw | cjb_xlsx.sx | cjb_xlsx.yy | cjb_xlsx.wl | cjb_xlsx.hx | cjb_xlsx.zz | cjb_xlsx.ls | cjb_xlsx.totalscore | cjb_xlsx.rankyw | cjb_xlsx.ranksx | cjb_xlsx.rankyy | cjb_xlsx.ra |
|---------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|---------------------|-----------------|-----------------|-----------------|-------------|
| NULL          | NULL        | NULL        | NULL        | NULL        | NULL        | NULL        | NULL        | NULL                | NULL            | NULL            | NULL            | NULL        |
| NULL          | 133         | 108         | 126         | 82          | 53          | 71          | 64          | 637                 | 1               | 4               | 2               |             |
| NULL          | 124         | 128         | 122         | 77          | 78          | 70          | 65          | 664                 | 5               | 1               | 3               |             |
| NULL          | 49          | 90          | 104         | 90          | 10          | 62          | 111         | 516                 | 38              | 11              | 8               |             |
| NULL          | 120         | 123         | 105         | 80          | 57          | 63          | 100         | 648                 | 7               | 2               | 7               |             |

*Caption: The querying environment sits directly in the platform and on-top of any cloud system. This enables preconfigured automations for HIPAA risk assessments of all datasets for a workflow.*

### Automated Tracking and Documentation
A necessary part of the current compliance process is documenting the steps taken to reach approval such as communications, risk analyses methods, and the final approval report. By consolidating all operations to a centralized platform, Integral automatically tracks all steps for an approval and generate necessary audit documentation.

*(Screenshot Description: Acme Pharma Analytics Audit Interface)*
The screenshot shows an Integral interface for "Acme Pharma Analytics" with "Dashboard," "Stakeholders," "Risk Analysis," "Audits," and "Settings" on the left. The main area features sections for audit documentation:
*   **Expert Report Management:** Contains a "Download Report" button.
*   **Data Owners List:** Contains a "Download Owner Info" button.
*   **Additional Evidence:** Contains an "Add Evidence" button.

*Caption: Integral automatically tracks all documents necessary for audit departments to maintain HIPAA compliance records. Documentation packages are stored in platform and can be downloaded any time to be made available offline.*

## Why Now?
### Increasing Data Volume
The average patient generates at least **80MB** of clinical data each year. According to RBC Capital, the average person will log **5,000 daily interactions** with digital devices by 2025. Approximately 30% of the world's data volume is being generated by the healthcare industry today and the CAGR for healthcare data is expected to continue to surpass other industries. Most of these studies and metrics are from before COVID-19 as well. After an explosive year for virtual care utilization, contact tracing, outbreak tracking, virus testing, remote work, and medical research, it's safe to assume that healthcare is generating even more data than the organizations protecting it anticipated.

### Increase in Reported Breaches
The black-market value of a single medical record is **~$250** - 50 times the value of a stolen credit card. According to HHS Office for Civil Rights (OCR) there have been approximately 3,200 total reported breaches from covered entities and their business associates from 2015 to 2021 affecting >270M individuals. IBM's Cost of a Data Breach Report 2022 highlighted that healthcare has had the highest average cost associated with data breaches for 12 consecutive years. Healthcare data breach costs increased from an average total cost of $7.1M in 2020 to $10.1M in 2022.

### Evolving Legal and Regulatory Trends
The increasing amount of health data and vulnerability of this data is causing massive policy and regulatory shifts for HIPAA and beyond. Healthcare organizations are already moving to proactively to adopt novel privacy and security technologies rather than waiting for the rule of law to catch up.

*   **Changes in HIPAA:** HHS is expected to issue the final changes to the HIPAA Privacy Rule by the end of 2022. The HHS Office for Civil Rights (OCR) issued a Notice of Proposed Rulemaking in December 2020 that proposed a number of changes to the Privacy Rule, including changes related to the exchange of protected health information (PHI). Legislators in the US are also introducing bills to modernize HIPAA and health data privacy laws.
*   **Interoperability:** The CMS Interoperability and Patient Access Final Rule and ONC Cures Act Final Rule have wide-reaching implications for interoperability of health data and patient access, but greater data access and a stronger reliance on APIs increases security and privacy risks.
*   **Litigation and Enforcement Focus on Individual Consent to Data Sharing:** Several Massachusetts health care providers settled a class action suit for $18.4M when the plaintiffs alleged that providers did not obtain “sufficient consent when placing third party analytics tools, cookies and pixels on their general and publicly accessible websites”. Flo Health, a popular fertility tracking app, also settled with the FTC in 2021 after it shared the health data of >100M users with third parties that provided marketing and analytics services to Flo.
*   **FTC Health Breach Notification Rule:** In September 2021, the FTC announced its intent to enforce the Health Breach Notification Rule and to expand the its applicability to non-HIPAA regulated entities, such as health apps and connected devices. Technology vendors are required to report security breaches to the FTC, individuals, and in some cases, the media.
*   **Geographic and Diverse Market Considerations:** Pharma companies are massive global organizations that are subject to a myriad of changing privacy laws around the world. Under the General Data Protection Regulation (GDPR) in the EU, one of the strictest in the world, organizations that process the personal information of EU data subjects will have to demonstrate compliance with a robust statutory framework or else face steep fines of up to 20M Euros or 4% of worldwide revenue, whichever is higher. The new definition of consent, which must be informed, freely given and specific, may inhibit secondary uses of identified clinical data which is often repurposed in the pharmaceutical industry.

### Increasing Use of Real-world Data (RWD)
Biopharma companies have become more sophisticated with how they leverage RWD across the entire value chain. The rapid growth in the overall amount of data utilized in RWD, early signals of ROI and internal data science sophistication has driven the rapid evolution of biopharma's data journey.

### RWD Use-cases (Verana Health) (Table Description)
The diagram outlines various RWD use-cases across different functions:

| RESEARCH & DEVELOPMENT        | MARKET PLANNING              | COMMERCIAL OPERATIONS    | MARKET ACCESS                 | MARKETING                       | MEDICAL AFFAIRS               |
|:------------------------------|:-----------------------------|:-------------------------|:------------------------------|:--------------------------------|:------------------------------|
| Real world evidence studies   | Patient flow forecasting     | Salesforce planning      | Pricing                       | Patient education and engagement| Patient subset analysis       |
| Natural history investigation | Market tracking              | Salesforce comp          | Reimbursement and access      | Provider education and engagement| Patient reported outcomes    |
| Identify unmet medical needs  | Market segmentation          | Marketing science        | Payer budget impact           |                                 | Real world outcomes           |
| Therapeutic targeting         | Competitive intelligence     | Marketing analytics      | Health economics and outcomes research (HEOR)|                                 | Pharmacovigilance             |
| Targeted product profile design| Current treatment patterns   |                          | Real world outcomes           |                                 | Safety signal detection       |
| Clinical trials:              | Geographic variations        |                          | Cost effectiveness analysis   |                                 |                               |
| - Site identification         | Payment patterns             |                          | Compliance support            |                                 |                               |
| - Patient screening           | Comorbidities                |                          |                               |                                 |                               |
| - Patient enrollment          |                              |                          |                               |                                 |                               |
| - Patient remote monitoring   |                              |                          |                               |                                 |                               |
| - Site management             |                              |                          |                               |                                 |                               |

*   **RWD Data Growth:** Today, Databricks estimates that ~**2,000 TB of healthcare data per month** is utilized for different data transformations within biopharma.
*   **Early ROI example:** Novartis was launching a sickle cell disease infusion therapy but was unable to identify eligible patients or understand patients' access to centers of excellence (CoE). The company used SDoH insights to understand patient cohorts and asses their access to care, transportation, proximity to CoEs, income levels, and education to better understand their likelihood to adopt preventative care. They identified an additional 14k patients ($300M in revenue potential) and identified patients that would be non-adherent based on their access to transportation.
*   **Internal data science sophistication:** Internal data science teams at Merck, Amgen, GSK, Novartis, and many others are becoming more sophisticated and expanding beyond niche business units. These organizations are adopting next-generation infrastructure to connect data within cross-functional teams - across different personas (data scientist, sales rep, marketing, researcher), internal organizations (finance, commercial, manufacturing) and data types.

## Market
### Growing Data Ecosystem
The healthcare data ecosystem has grown over the last decade as data vendors become more specialized. In the past, IQVIA and Symphony were the only major data aggregators and only sold claims data. It was a struggle to share these claims datasets between brand teams within the same company, let alone between your International HQ in Japan and US HQ in Boston. Over the last 5-10 years, there has been an explosion in the breadth and depth of data as vendors get more specialized across different data types and therapeutic areas (depicted below). In 2021, for example, Datavant added 17 EHR data partners across oncology, rheumatology, mental health, women's health, and dermatology. The level of depth and specificity is a massive shift compared to the stale claims datasets of the past.

### Datavant Healthcare Data Ecosystem (Chart Description)
This is a comprehensive diagram showing the "Healthcare Data Ecosystem" compiled by Datavant, categorizing various companies by their function:

**Originators**
*   **EHR Software:** Epic, MEDITECH, Allscripts, Cerner, Best Of Breed (QS/1, cpsi, MEDHOST, MCKESSON, And, etc.)
*   **Distribution / Pharmacies / Specialty:** Humana, Diplomat, Anda, PharMerica, CVS
*   **Claims Clearinghouse:** Change Healthcare, PNC, Optum, R1, HDX, Infinedi, Cortex, NEO
*   **Labs:** GRAIL, Natera
*   **Information Exchanges:** Orion, CIOX, Genomind, Portae, Sectra, Core, MOXE, Akiri, Redox, Philips, VYNE, Lifeimage, AGFA, Ambra, ICA, FujiFilm, Optum, Verily, Camer, Kythera, Veradigm, VALIDIC

**Intermediaries**
*   **Decision Support:** Change Healthcare, Evidation, PNC, Pulse, Evive, Cota
*   **Registries and Consortia:** MedX, AAOS, AMA, Commit, FARE, ASCO, Veradigm
*   **Aggregators:** IQVIA, LexisNexis, Verity, Premier, Optum, HealthVerity, Aetion, Clarify Health, Symphony Health, CSL, Civis, Datavant
*   **Enterprise Data Warehousing:** Cognizant, Coleidos, NTT DATA, Palantir, WNS, Accenture, Change Healthcare, SAP, Atlas, IBM, Oracle

**Use Cases**
*   **Services for Patients:** Health, Behavior & Wellness (Veritas, Garmin, Fitbit, Samsung, Whoop, Nokia, HCOR, Verily, Cure, Lark, Itose, mPulse, Noom, Vido, IMD, Mene), Genetics (Helix, Phosphorus, Ancestry, GIDENTI, GeneO), AI (Clew, IBM, Myriad, Medial EarlySign, SAS)
*   **Services for Risk-Bearing Entities:** Population Management (Astion, Health Catalyst, Healthmine, Welltok)
*   **Services for Biopharmaceuticals:** Pulse, Oscar, Pear, Ayasdi, Advera, Thread

**Horizontal Categories (spanning across Originators/Intermediaries):**
*   **Government Entities:** Council, CMS, DOE, FDA, VA
*   **Socioeconomic & Behavioral Data:** Experian, Acxiom, Nielsen, Perion

## Initial TAM
To estimate the size of the initial TAM for Integral's first HIPAA compliance solution, we first analyzed the broader RWD Customer/Patient Analytics TAM. We did a bottoms-up analysis based on number of enrolling trials, number of indications, and ASP per trial or price per indication. We then triangulated it with a 2018 McKinsey report to pressure test our assumptions.

### 2022 RWD Customer/Patient Analytics TAM US Only (Chart Data)
This is a stacked bar chart comparing TAM estimates from "Virtue Bottoms-up" and "McKinsey" sources.

| Category                      | Virtue Bottoms-up (Value in $B) | McKinsey (Value in $B) |
|:------------------------------|:--------------------------------|:-----------------------|
| R&D - trial design, protocol feasability, site selection, etc | $5.5B                           | $3.6B                  |
| Commercial - patient cohorting, treatment patterns, forecasting, launch plan, etc | $6.8B                           | $4.9B                  |
| Market Access                 |                                 | $2.4B                  |
| Med Affairs                   |                                 | $2.4B                  |
| Patient Services              |                                 | $2.4B                  |
| Pharmacovigilance             |                                 | $0.1B (inferred)       |
| **Total**                     | **$12.3B**                      | **$15.8B**             |

*   **Virtue Bottoms-up:** Based on industry pricing comps for R&D analytics (e.g., trial design, protocol feasibility, site selection, etc) we assumed a $3M ASP times the number of Ph I - Ph IV trials enrolling per year in the US. For commercial (e.g., patient cohorting, treatment patterns, forecasting, launch plan, etc), we assumed an average price of ~$500K per indication multiplied by the number of unique indications for industry sponsors.
*   **McKinsey:** The McKinsey report broke down the commercial bucket in more granular detail into market access, med affairs, patient services, and pharmacovigilance. We applied a conservative 5% CAGR to the 2018 McKinsey data to compare apples to apples.

Based on initial LiveRamp implementations, Integral can expect to capture 10%-20% of the total ACV of these RWD customer/patient analytics solutions. With this analysis, we estimate Integral's initial market to be **$1.5B - $3B** for expert determination analysis alone. Over time, Integral can expand within the **$10B - $15B life sciences analytics space** (e.g., data management/quality, compliance analytics) and to other evolving areas of security and compliance (SOC2, GDPR, etc). We believe this market is at an inflection point for growth based on the market dynamics ("Why now" section) and Integral can leverage this foundation to expand to capture additional market opportunities ("Opportunities" section).

## Competition
*   **Mirador Analytics:** Mirador Analytics is the closest competitor in market to Integral today, but its recent acquisition by Datavant has limited its long-term product vision. Mirador started as a group of academics who came together to outsource back-office functions so they could focus on statistical analysis. The company has grown to 50+ employees and was acquired by Datavant in 2021 because Mirador was becoming a major bottleneck for Datavant's data marketplace. Mirador's statistical disclosure risk assessment is comparable to Integral's alpha product, but Mirador is less focused on continuous monitoring given it is now a cost center for Datavant. Even though Mirador Analytics promises 24 hour turnaround time for customers, anecdotally, the process can still take weeks. Datavant is talking with Integral today to see how they can leverage their internal consultants with Integral's software platform.
*   **Boutique consulting firms or academic statisticians:** HIPAA Expert consultants are mostly one-off shops with fewer than 10 people engaging in very manual data analysis.
*   **Basic HIPAA compliance software (Accountable, Drata, SecureFrame):** A number of companies have built basic HIPAA compliance software solutions but none of these provide the software to streamline HIPAA certification of different dataset combinations requiring statistical analysis. These more general compliance companies provide HIPAA employee training, document policies and procedures, manage business associate agreements, and track and monitor which employees have access to PHI. Some companies, like Secureframe, go beyond HIPAA and provide similar software for SOC2, ISO 27001, and GDPR security compliance. None of these focus on providing the necessary software to streamline HIPAA certification of different dataset combinations requiring statistical analysis.

## GTM / Commercial
### Channel Partners: Initial Distribution Hack
Integral is leveraging a creative distribution and GTM hack with LiveRamp, its 1st channel partner. The LiveRamp relationship at this early-stage is incredibly value as it allows Integral to build early momentum, optimize for customer learnings, and show early ROI to reduce the long sales cycles for biopharma.

**LiveRamp Channel Partnership:** LiveRamp is a middleware company that moves data between marketing applications. LiveRamp's IdentityLink, an anonymous identifier that uniquely pinpoints an individual online and offline, collects data from all channels and devices and matches them to the relevant customers using its "identity graph”. LiveRamp Health, launched 2 years ago, leverages this platform for health insurers and pharma clients to study the efficacy of expensive ad campaigns, create customer profiles for clinical trial recruitment, create insurance member patient profiles, and many other use cases.

Today, LiveRamp passes through the cost of outsourcing the HIPAA risk analysis to its clients. For illustrative numbers, LiveRamp will charge a client ~$3M per year - $2.7M for LiveRamp's services and $300K that it will pass-through to the outsourced HIPAA consultant. With Integral, the process does not change as LiveRamp is now simply passing through the cost of Integral's white-labeled software instead of a consultant. Integral will be embedded in LiveRamp's infrastructure to automatically scan and determine HIPAA compliance of different dataset combinations. LiveRamp originally tried to build this solution internally but did not and is highly unlikely to purse in the future because of incentive alignment given pass-through economics, internal focus/priorities as a company working across multiple industries, and desire to not be "grading its own homework".

### Integral and LiveRamp Integration (Flowchart Description)
This flowchart illustrates the integration process:

**Left Column (Data Providers to LiveRamp):**
*   **Pharma Client:** Sends "Promotional CRM Diabetes Drug" data (First_Name, Last_Name, Address, City, State, Zip) to LiveRamp.
*   **LiveRamp:** Receives data and includes "Ads Data Diabetes Drug" (Ad_type, Ad_location, Clicked).
*   **Wearables Data Provider:** Sends "Wearable Health Age 25+" data (Wearable_Type, Minutes, Calories, Height, Weight) to Integral via LiveRamp's infrastructure.
*   **Healthcare Data Provider:** Sends "Prescriptions Age 25+" data (Pharmacy, Pharmacy_Location, Medication) to Integral via LiveRamp's infrastructure.

**Middle Column (Integral Processing within LiveRamp Env):**
*   **Integral white labeled layer within LR Env:**
    *   Integral assesses real time compliance of combining different datasets.
*   **LiveRamp Core Env:**
    *   Receives "Final Datasets Approved Columns" from Integral layer.
    *   LiveRamp performs analysis.

**Right Column (Process Steps):**
1.  All companies send their data to LiveRamp.
2.  Integral has been embedded in LiveRamp's infrastructure to automatically scan and determine HIPAA compliance of different dataset combinations.
3.  Integral flags any columns that are too sensitive to join and surfaces them to users for making the appropriate changes (hashing, encryption, removal, etc).
4.  After compliance is achieved, LiveRamp uses joined dataset to conduct analytics (ex: how many customers saw an Ad and bought a medication).

Currently, LiveRamp is “under water” and is pushing Integral to speed up their implementations compared to even 2 weeks ago (early August). Integral has line of sight to implementations with 2-3 LiveRamp clients with ACVs ranging from $300K - $400K. Integral's current pricing model includes an upfront implementation fee (~$50K) and has a tiered pricing model based on the number of records it scans:

*   <5M records: $10K / month
*   5M - 20M records: $20K / month
*   20M - 50M records: $30K / month
*   >50M records: $40K/month

Beyond LiveRamp, Integral is also in early discussions with Komodo, Change Healthcare, Datavant, and other potential healthcare analytics providers. The initial promising relationship with LiveRamp highlights the opportunity for Integral to partner with a number of players across the healthcare analytics and data supply chain.

Internally we think about data flowing from: systems of record → middleware → systems of admin → systems of intelligence. Integral has interest and conversations with vendors in 3 of 4 of these buckets today with the potential to expand to systems of admin as well.

### Healthcare Ecosystem - Provider/Payer & Life Sciences/MedTech (Diagram Description)
This diagram illustrates the flow of data across different systems, categorized by Provider/Payer and Life Sciences/MedTech, and then further by System type:

**PROVIDER/PAYER**

*   **SYSTEMS OF RECORD:**
    *   **Referral Optimization:** VIM, Definitive Healthcare, CareJourney, Optum, Quest Analytics
    *   **Care Ops Optimization:** Qventus, Lumeon
    *   **VBC Administration and Care Gaps:** Optum, SignifyHealth, Icaro, StellarHealth
*   **SYSTEMS OF ADMIN:**
    *   **Population Health:** Health Catalyst, Arcadia, Cedar Gate
    *   **Payments & GRC:** R1, Symplr
    *   **Care Mgmt. Engine:** ZeOmega, Medecision
    *   **Member Engagement:** Accolade, HealthSparq

**LIFE SCIENCES/MEDTECH**

*   **SYSTEMS OF RECORD:**
    *   **Network Analytics:** Optum, Amino
    *   **Rate Intelligence:** Optum
*   **SYSTEMS OF ADMIN:**
    *   **RWE:** Aetion, ConcertAI, Evidation, Elektra Health
    *   **Commercial Analytics:** Komodo, OM1
    *   **Trial Recruitment:** IQVIA, Trialbee
*   **SYSTEMS OF INTELLIGENCE:**
    *   **Trial Admin:** Medidata, Veeva
    *   **Sales Admin:** Imdegene, Eversana

**MIDDLEWARE** (spanning both Provider/Payer and Life Sciences/MedTech)
*   **Tokenization, Synthetic Data, Chart Retrieval, EDI, HIES, CDIS:** Datavant, Syntegra, LiveRamp, Redox, Inovalon
*   **Site Networks:** TriNetx, nference
*   **EMR, Practice Management:** Cerner, Athenahealth
*   **Labs/Dx:** Quest Diagnostics
*   **Pharmacy:** Elixir, Surescripts
*   **Claims:** Change Healthcare, Plexis
*   **Trial Management/Sales CRM:** Veeva, Medidata

### Direct Sales
In the next 12-18 months, Integral will look to leverage 2-3 channel partnerships to lay the foundation for direct sales to pharma. Direct sales requires additional customization for on-prem implementation, additional product features, and a more refined GTM approach. The technical foundation, lessons learned, and experience with channel partners directly supports this direct sales approach.

### How Channel Partner Relationships Expedite Direct Sales vs. Requirements for Direct Sales to Pharma (Table)

| How Channel Partner Relationships Expedite Direct Sales | Requirements for Direct Sales to Pharma                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:--------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Implementation experience:** Originally, Integral was planning on a cloud-hosted model with LiveRamp. Given the urgency for LiveRamp to adopt Integral, Integral will deploy on-prem initially with certain a-la-carte features of its modular software. This gives the team experience with these more time intensive implementations with a trusted channel partner. | **On-prem implementation:** A majority of Integral's biopharma clients today require on-prem solutions, which require more specific work to each client to make sure if fits within their architecture. The first "0 to 1" implementation will be clunky and hands-on, but other successful companies in the space (Datavant, TriNetX) have shown this initial implementation work can be a long-term differentiator. |
| **Learnings from use cases:** Integral's current software solution solves an acute need and pain point in its current iteration, but the company will be able to learn from ~100M records during these initial implementations to prioritize product features for clients down the road.                                                                                                                              | **Additional product features:** Integral will focus on developing a more vertically-integrated product suite (dashboard, analytics, data management) to replace internal BI tools and become a data owner when working directly with pharma.                                                                                                                                                                                              |
| **Early ROI and Credibility:** Biopharma clients are notoriously skeptical but “fast-followers" once ROI has been proven by another company or in another therapeutic area. Although the requirements for internal integrations within biopharma will differ slightly, the core solution and value prop is exactly the same. These early channel partnerships give Integral the evidence to pitch technical and business leaders about the value of Integral's product.          | **Refined GTM:** In this direct-to-pharma approach, Integral will be selling into a data science, RWD, patient centricity, or CMO persona. From industry feedback, we've seen a shift inside biopharma with where these more technical cross-functional teams have budget and influence to adopt novel solutions, especially those with proven ROI.                                     |

## Financing / Milestones
With this $1.5M - $2M fundraise, Integral plans to build out the team, execute on the initial LiveRamp clients, sign 1-2 additional channel partnerships, begin its direct to pharma sales motion, and build out its engineering infrastructure.

*   **Hiring:** LiveRamp is pushing Integral to deploy on an expedited timeline given LiveRamp's internal needs and lack of available solutions. To meet these timelines, Integral will look to bring on an additional engineer to help with some portions of the product that need to be deployed on-prem. In addition, the team has a HIPAA consultant identified that they will bring on full or part time (depending on volume) to be the “human-in-the-loop” for internal validation and the “stamp of approval” for initial expert determinations. As the team begins its direct to pharma GTM strategy following the LiveRamp deployment, the team will engage a senior pharma sales person they have already identified (likely Q1 2023).
*   **Commercial:** The immediate focus is deploying with LiveRamp as a channel partner. There are 5 LiveRamp clients in the pipeline (3 pharma = $374K ACV/client, 2 insurance clients with $250K ACV/client) representing >$1.5M in expected contract value. Probability weighted, we'd assume a base scenario of $500K in ACV over the next 12 months. Beyond LiveRamp, the team has a goal to sign 1-2 more channel partners over the next 12-18 months and be in a position to close its first direct to pharma deal around the time of its next round.
*   **Engineering:** The bulk of engineering time will be dedicated to scaling up the engineering infrastructure to support 100M+ records running through the platform. Additional product features (data management, analytics, etc) will be prioritized based on progress and conversations with pharma clients.

## Opportunities and Risks
### Opportunities
*   **Early momentum with creative distribution hack.** The most successful pre-seed companies we see in market develop strong early momentum out of the gate that compounds and pays massive dividends over time. Integral can leverage its LiveRamp relationship to optimize customer learnings, show early ROI to reduce the long sales cycles for biopharma, and has a clear line of sight to $500K+ in ACV over the next 12 months. Revenue alone is not the only thing to optimize at this early-stage, but it quantifies the value of Integral's solution and massive pain point for channel partners and clients. The technology foundation and learnings from its channel partner relationships will provide similar momentum for the direct to pharma GTM strategy.
*   **High-gross margin software business.** A SaaS businesses in healthcare like Integral provides the best of both worlds - the potential for high gross-margins (70-80%+) and recurring revenue from the SaaS world and stickiness of healthcare customers (e.g., less likely to rip and replace). While in the early days Integral will require upfront white-glove service for on-prem deployment and incorporate a human-in-the-loop, its eventual business model has very attractive margin profiles. These initial deployments and the internal validation with a human-in-the-loop may be longer ramp-up but provide very attractive moats that give Integral the opportunity to capture significant value over time (e.g., similar to Veeva's shifting revenue mix).
*   **Land and expand potential.** Compliance and privacy regulations force adoption of Integral in a top-down mechanism as the cost of doing business in healthcare. This foot in the door gives Integral the opportunity to build the foundation to become the compliance and privacy foundation for discovering insights from data and leveraging them for better drug development, distribution, and analysis. Although Integral is not a data owner today, the scale of data running through their platform will be in the order of hundreds of millions of records. For example, Integral can build a custom SQL and analytics layer so that clients are building with compliance in mind rather than having to build around compliance. As another example, the expert determination provision in HIPAA offers opportunities for Integral to push for the application of novel techniques (homomorphic encryption, federated learning, zero-knowledge proofs, tokenization, synthetic data, etc) to balance privacy, utility, and computational/engineering performance. Integral can become the “arbiter for privacy engineering" - a privacy, regulatory, and compliance layer that can help dictate which approaches are best for which analytics use cases.

### Risks
*   **Building Product Anchored to 1 Customer.** Many early-stage startups have failed because they focused all of their product development efforts on serving their first big enterprise customer rather than the broader market. Integral has a similar risk with LiveRamp, but is acutely aware of this dynamic early on and prioritizing its initial deployment in the “0-to-1” to ensure it is repeatable and scalable. As mentioned above, these successful on-prem deployments can create a competitive advantage over time if Integral proactively builds with other customers in mind.
*   **Scalable GTM Strategy.** The initial GTM strategy with LiveRamp is advantageous, but it may be difficult to replicate with a similar channel partner. It may also take much longer than expected to transition to the direct to biopharma GTM strategy leaving Integral reliant on LiveRamp for a large portion of its business for the next 1-2 years. We strongly believe the initial channel partnership strategy with LiveRamp is a creative distribution hack for growth, there is a larger than expected universe of channel partners to explore, and the foundation from channel partner implementations sets them up for success in the direct to pharma GTM.
*   **Automating Human in the Loop.** Integral will leverage an in-house consultant initially as a "human-in-the-loop” that uses Integral's platform internally to run queries and provide the final check. Although Integral plans to automate this process over time, this process may prove difficult and relegate Integral as just another consultant shop. This “human-in-the-loop” is necessary today for internal platform validation and provides advantages over the long-term. Today, there is no standard for who an “expert” is or what level of "determination” is appropriate (e.g., re-identification risk <5% or <1%). The lack of a current standard is certainly a risk, but also a massive opportunity if Integral can become the de-facto standard for HIPAA statistical risk analysis.

END