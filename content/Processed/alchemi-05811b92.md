---
source_pdf: "https://drive.google.com/file/d/1rMrNIEXbW7eWlnxRo60OFp4EUE_XSD1S/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Alchemi.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1rMrNIEXbW7eWlnxRo60OFp4EUE_XSD1S/view)

## Slide 1: Alchemi Title Page

**Alchemi**

Private & Confidential
1

---

## Slide 2: Summary

# Summary

*   Report writing is a huge burden on scientists across the Pharma R&D value chain; we estimate it costs the industry ~$30bn a year in lost scientist productivity
*   This is caused by a fragmented tech stack and poor fit of incumbent technologies (e.g. MSFT Office) to scientific workflows
*   That's why we decided to build Alchemi, an LLM powered report automation tool that radically streamlines this process by ingesting experiment data and producing regulatory compliant output
*   The potential market is huge ($7.5bn) given broad applicability; we are initially focusing on CROs and CDMOs given high willingness to adopt
*   Customer traction is strong; we have 4 design partners (collective market cap >$3bn) and strong customer pipeline with clear path to >$2m ARR
*   Beta testing is positive (superior to ChatGPT); clear plan on product / hiring; want to get to scale quickly given first mover advantage and adjacent areas attracting VC investment

Private & Confidential
2

---

## Slide 3: Problem: The drug development process is long and expensive, with millions of hours dedicated to writing reports

# Problem: The drug development process is long and expensive, with millions of hours dedicated to writing reports

**Drug Development Process Flow:**

| Phase of Drug Development | Early Research                  | Pre-Clinical                              | Clinical                                  | Approved                      |
| :------------------------ | :------------------------------ | :---------------------------------------- | :---------------------------------------- | :---------------------------- |
| **Activities**            | Drug Discovery (Target and Hit Screening) | In-Vitro Testing                          | Phase I Clinical Safety                   | Phase IV Post Approval Surveillance |
|                           | Lead Selection                  | In-Vivo Testing                           | Phase II Clinical Efficacy                |                               |
|                           |                                 |                                           | Phase III Pivotal                         |                               |
| Efficacy Testing          |                                 | Disease Models                            | Patient Outcome Reporting                 |                               |
| Non-clinical Pharmacology | Small scale synthesis & expression | Toxicology                                | GMP Transfer and Scale Up                 | Quality Control               |
|                           |                                 | Pharmacokinetics (PK)                     | Long term Stability                       | Process Improvement           |
|                           |                                 | Pharmacodynamics (PD)                     |                                           |                               |
| Product Testing           |                                 | Process Optimization                      |                                           |                               |
|                           |                                 | Formulation Development                   |                                           |                               |
| **Regulatory Filing**     | **FDA Filing**                  | **IND**                                   |                                           | **NDA / BLA**                 |

**We estimate report writing costs the industry ~$30bn a year¹**

¹ Based on estimate size of scientist cost bucket per segment (CRO, CDMO, Biotech, Pharma) and ~20% of time allocated to report writing depending on function. For reference the FDA estimates complying with the reporting requirements for IND filings alone costs 23 million hours per year.

Private & Confidential
3

---

## Slide 4: Example (Bioanalytical Assay): Due to antiquated tech stack, report writing consumes 20-30% of scientist time

# Example (Bioanalytical Assay): Due to antiquated tech stack, report writing consumes 20-30% of scientist time

**Assay Equipment Flow:**

1.  **Assay Equipment**
    *   Data flow
    *   Data generated from equipment

2.  **Data Storage**
    *   Electronic Lab Notebook (ELN): Benchling, LABWARE, Labguru, Dotmatics
    *   Equipment Database: Thermo Fisher SCIENTIFIC, BIO-RAD, Agilent Technologies, Illumina
    *   *Action:* Data manually transferred to an ELN, Excel, or left in equipment database

3.  **Data Analysis**
    *   Specialist Analytical Tools: FLOWJO, Prism, Thermo Fisher SCIENTIFIC, CERTARA
    *   Office
    *   *Action:* Data analyzed on equipment, specialist analytical tools, or Excel

4.  **Report Writing**
    *   Office
    *   *Action:* Experiment results manually written up in Office
    *   **20-30% of scientist time spent here¹**

5.  **Report Approval**
    *   QMS: Veeva
    *   *Action:* Sent to QMS where reports can be reviewed / iterated

6.  **Output**
    *   Fed into more extensive reports e.g. IND, NDA

¹ Time in motion studies from CRO, Customer Interviews

Private & Confidential
4

---

## Slide 5: Solution: LLM based report generation

# Solution: LLM based report generation

**Alchemi LLM Based Report Generation Process:**

*   **Input:**
    *   Scientist
    *   Experiment Data
    *   Quality Management System (e.g. SOPs, Reg Guidance)
    *   Scientist Interaction Database (First Party Dataset for Free)

*   **Process (Alchemi):**
    1.  **Prompt Engineered LLM**
        *   RAG (Retrieval Augmented Generation)
        *   Vector Database
    2.  **Initial Report Output**
    3.  **Scientist Interactions** (Corrections, Feedback on Model Outputs)
        *   Positive Feedback Loop improving LLM (from Initial Report Output back to Prompt Engineered LLM)
        *   Positive Feedback Loop improving LLM (from Scientist Interactions back to Prompt Engineered LLM)
    4.  **Final Output Report**
    5.  **Report Repository** (First Party Dataset for Free)

**Legend:**
*   Alchemi
*   Data input

**What is our Moat?**
*   **Data access:** we will get access to both final report output and scientist interactions (First Party Dataset for Free)
    *   Initially we will use this to iterate prompt engineering and develop RAG. Accumulation of data over time will allow us to pursue fine tuning / new forms of model augmentation as LLM infrastructure develops
*   **Additional integrations:** such as querying QMS / DMS system with RAG will significantly reduce hallucinations vs out of the box solutions

Private & Confidential
5

---

## Slide 6: Customer: $7.5bn market size; initially targeting CROs and CDMOs given importance of productivity to their business model

# Customer: $7.5bn market size; initially targeting CROs and CDMOs given importance of productivity to their business model

| Category              | CRO                                | CDMO                                   | Biotech                                | Big Pharma                                           |
| :-------------------- | :--------------------------------- | :------------------------------------- | :------------------------------------- | :--------------------------------------------------- |
| **What They Do**      | • Outsourced R&D                   | • Outsourced manufacturing             | • R&D                                  | • R&D                                                |
|                       | • Regulatory support               | • Regulatory support                   | • Regulatory filings                   | • Manufacturing                                      |
|                       |                                    |                                        |                                        | • Sales                                              |
|                       |                                    |                                        |                                        | • Regulatory filings                                 |
| **Benefits of Alchemi** | Increased Scientist productivity (lower cost / higher throughput) | Reduced drug development timeline      | Faster turnaround time to clients      |                                                      |
| **Market Size¹**      | ~$1.5B                             | ~$1.5B                                 | ~$1B                                   | ~$3.5B                                               |
| **Ability to Penetrate** | High                               | High                                   | Medium                                 | Low (initially)                                      |
| **Design Partner**    | Kcas bio, SCIENCE ACCELERATED      | elevatebio®                            | sensorium THERAPEUTICS, bit.bio        | TBC                                                  |

¹ Based on estimate size of scientist cost bucket per segment and lower bound of 20% allocated to report writing depending on function (~$30bn total). Assuming 25% drop through to potential SaaS revenue.

Private & Confidential
6

---

## Slide 7: Traction: 4 design partners and strong customer pipeline with clear path to >$2m ARR

# Traction: 4 design partners and strong customer pipeline with clear path to >$2m ARR

**ARR Build (in $m):**

| Date    | Design Partners | Pipeline | New   | Total (approx) |
| :------ | :-------------- | :------- | :---- | :------------- |
| Jul-24  | ~0.1            | ~0.0     | ~0.0  | 0.1              |
| Oct-24  | ~0.3            | ~0.1     | ~0.0  | 0.4              |
| Jan-25  | ~0.6            | ~0.3     | ~0.0  | 0.9              |
| Apr-25  | ~0.8            | ~0.6     | ~0.0  | 1.4              |
| Jul-25  | ~0.9            | ~0.9     | ~0.1  | 1.9              |
| Oct-25  | ~1.0            | ~1.2     | ~0.3  | 2.5              |

**Design Partner Logos:** biorasi, PHARMARON, eurofins, charles river, Generate:Biomedicines, LEXEO, Kcas bio, SCIENCE ACCELERATED, sensorium THERAPEUTICS, elevatebio, bit.bio

**Example Customer: KCAS**
*   CRO with 100 scientists (small compared to major CROs with 10,000+ FTE). Despite this spend **$6m a year** in scientist time on report writing.
*   Alchemi Beta developed on one of their most time-consuming reports (ADA validation) currently costing them $2m a year.
*   Testing shows we can automate 50% of this workflow. Translates to $1m of savings at scale. Planning to bill on a per project basis at a 4:1 drop through; leads to **$250k ACV initially.**
*   Aside from meaningful improvement in profitability (+20% on per project basis), Alchemi will improve KCAS customer satisfaction through reduced turnaround time and ease scientist burnout.

Private & Confidential
7

---

## Slide 8: Vision: Alchemi is uniquely positioned to become a category defining business

# Vision: Alchemi is uniquely positioned to become a category defining business

**V1: Reporting**
*   **Regulatory Affairs: ~$25bn**
    *   Capture more extensive submissions (IND, NDA) and eat into lucrative regulatory market
*   **Report Automation: ~$7.5bn**
    *   Become key workflow tool for technical report generation

**V2: Category defining business**
*   **AI Research Assistant: $$$bn**
    *   Scientifically tuned LLM opens door to value-add workflows that would turbo charge lab R&D + mining data from reports allows better R&D decision making
    *   **Workflows:**
        *   Experiment Design
        *   Automated Analysis
        *   Lab / Robot Orchestration
        *   Predictive Modelling
        *   Asset Prioritization
*   **Disrupt CRO/CDMO industry: ~$300bn**
    *   CRO/CDMOs are huge and often maligned; through reporting Alchemi is building connective tissue between biotech & vendors - become de facto **middleware** for outsourced development or vertically integrate to become **tech-enabled CRDMO**

Private & Confidential
8

---

## Slide 9: Team: unique combination of experiences across Life Sciences and Tech

# Team: unique combination of experiences across Life Sciences and Tech

**Tom Mulvey (CEO)**
*   Life Sciences and SaaS investor @ Vitruvian Partners ($18bn fund)
*   Chief of Staff @ Ori Biotech (cell therapy manufacturing startup that raised $140M)
*   Business Development @ Lexeo Therapeutics (listed clinical stage gene therapy biotech)
*   Strategy Consultant @ OC&C Strategy
*   Hedge Fund Sales @ Goldman Sachs
*   MBA @ Harvard Business School

**Anuj Chadha (CTO/COO)**
*   Senior Software Engineer, CTO Office @ Vecna Robotics (Series C warehouse automation company that raised $145M)
*   Investor @ BlueYard Capital ($500M deep tech early-stage fund)
*   Researcher @ NASA Jet Propulsion Laboratory
*   Mechanical Engineer, Controls & Dynamical Systems @ Caltech
*   MBA @ Harvard Business School

**Chief Architect (Onboarding)**
*   Professor of CS, PhD, leading European University
*   Previously Architect @ Vecna Robotics

**Logos of Affiliations (from images):**
*   VITRUVIAN PARTNERS
*   LEXEO therapeutics
*   Oribiotech
*   OC&C Strategy consultants
*   Goldman Sachs
*   JPL Jet Propulsion Laboratory California Institute of Technology
*   VECNA ROBOTICS
*   BLUE YARD
*   Caltech

Private & Confidential
9

---

## Slide 10: Appendix

# Appendix

Private & Confidential
10

---

## Slide 11: The next wave of $bn technology companies in the life sciences space will be driven by AI powered workflow tools

# The next wave of $bn technology companies in the life sciences space will be driven by AI powered workflow tools

**Technology Waves in Life Sciences:**

*   **Digital**
    *   MEDIDATA
    *   Thermo Fisher SCIENTIFIC
    *   LABWARE Results Count
    *   *Description:* 1st Gen LIMS / ELN, trial software

*   **Cloud**
    *   TEMPUSTM
    *   Benchling
    *   Veeva
    *   flatiron.
    *   *Description:* 2nd Gen LIMS / ELN, CRM, Decentralized trials, RWE / RWD

*   **AI**
    *   AI Discovery: Isomorphic Labs, Benevolent
    *   *Description:* First AI disruption focused on discovery. We think the real AI disruption is targeting 'boring' workflows e.g. AI Research Assistant

**Why?**
*   **Talent Gap:** Life Science companies inherently lacking in CS talent - best engineers don't want to be second fiddle to Bio
*   **Urgent Need:** R&D costs are ballooning at a time when Pharma needs to innovate most (e.g. IRA). Tech stack still woeful (data silos, manual process) leads to inefficiency and poor decision making
*   **GenAI:** LLMs are a huge unlock for targeting knowledge-based workflows

Private & Confidential
11

---

## Slide 12: GTM hack: use biotech / academia to drive adoption of Alchemi with CRO / CDMOs, before eventually selling to Big Pharma

# GTM hack: use biotech / academia to drive adoption of Alchemi with CRO / CDMOs, before eventually selling to Big Pharma

**Go-to-Market Strategy Flow:**

1.  **Lite product (QC/QA) given to academia and biotechs for free**
    *   *Action:* Biotech use multiple CRO / CDMO, encourage them to use new tech to improve turnaround time
    *   *Leads to:* Penetration of Biotech / Big Pharma with full product

2.  **Penetration of Biotech / Big Pharma with full product**
    *   *Action:* Biotech acquired by big pharma + academics graduate to biotech
    *   *Leads to:* Improved product quality through users

3.  **Improved product quality through users**
    *   *Action:* CRO / CDMO generate a lot of first party data
    *   *Leads to:* Referral to CRO/CDMO for full product

4.  **Referral to CRO/CDMO for full product**
    *   *Action:* Product 'proven' across industry - able to graduate to big pharma
    *   *Leads back to:* Lite product (QC/QA) given to academia and biotechs for free (implied cycle of refinement and adoption)

Private & Confidential
12