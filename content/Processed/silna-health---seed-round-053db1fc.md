---
source_pdf: "https://drive.google.com/file/d/1Oo4a5IASKWzPBuh6_J0yQa4PE-XFwOC8/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Silna Health - Seed Round.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1Oo4a5IASKWzPBuh6_J0yQa4PE-XFwOC8/view)

# Silna: The system for independent specialty healthcare providers to manage their payor workflows.

## The Problem

Healthcare providers used to provide care, then bill to insurance companies. The ground has now shifted under them - they have to focus on billing even before providing care.

The billing workflow of a provider working with a payor is multi-step.

### Provider Billing Workflow
1.  **PROVIDER BILLING WORKFLOW**
2.  Insurance Verifications & Benefits Eligibility
3.  Prior Authorizations
4.  Claims Creation & Submission
5.  Payment Reconciliation
6.  Denial Management
7.  Appeals Submission

Prior authorizations are a process that payors (health insurance companies) use to determine whether they will cover certain services or medications.

Payor and provider incentives have never been more misaligned. Payors control the criteria for billing in healthcare and their need to minimize costs has driven them to create nuanced and ever-changing requirements for billing—forcing providers to spend more administrative resources to jump through complex hoops. Providers lack the transparency and tools to combat payor complexity and ultimately take control of the financial health of their business.

As a result, healthcare providers' margins are at an all-time low, with 15% of revenue loss due to claim denials - the number one reason for denials are errors in the Prior Authorization (PA) process.

## The Opportunity

Due to the underlying shift in workflows between providers and payors, we have an opportunity to use prior authorizations to own the entire payor billing workflow for independent specialty providers. Privately owned specialty healthcare providers make up ~30% of the healthcare landscape today and experience the most acute billing pain due to lack of internal resources and tooling. For specialty providers, there's a massive opportunity to reduce administrative costs in the billing process and increase revenue via improving claim acceptance rates.

## Why Prior Authorizations

Prior Authorizations are our wedge into streamlining providers' entire billing workflows with payors.

1.  **Prior authorizations have become one of the most severe pain points for providers.**
    *   There are ~200M PAs done per year, and this number is only growing.
    *   Errors in the PA process are now the #1 reason that claims are denied and cause cascading problems throughout the entire billing workflow.
    *   According to [CAQH](https://www.caqh.org/core/news/caqh-index-points-opportunities-further-streamline-administrative-transactions-and-generate-27-billion-annual-savings), Prior Authorizations have become the most costly, time-consuming administrative transaction for providers.

### Percentage of Fully Electronic Administrative Transactions
Breakdown by Billing Process

*(Note: Values are estimated from the bar chart as exact figures are not provided on the chart itself.)*

| Billing Process                        | 2013  | 2014  | 2015  | 2016  | 2017  | 2018  | 2019  | 2020  | 2021  | 2022  |
| :------------------------------------- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Eligibility and Benefit Verification   | 75%   | 78%   | 80%   | 82%   | 84%   | 86%   | 87%   | 88%   | 89%   | 90%   |
| Prior Authorization                    | 10%   | 12%   | 15%   | 18%   | 22%   | 25%   | 28%   | 32%   | 35%   | 40%   |
| Coordination of Benefits               | 55%   | 58%   | 62%   | 65%   | 68%   | 70%   | 72%   | 74%   | 76%   | 78%   |
| Claim Status Inquiry                   | 45%   | 48%   | 52%   | 55%   | 58%   | 60%   | 62%   | 64%   | 66%   | 68%   |
| Claim Status Payment                   | 40%   | 43%   | 46%   | 49%   | 52%   | 55%   | 58%   | 60%   | 62%   | 65%   |
| Remittance Advice                      | 35%   | 38%   | 42%   | 45%   | 48%   | 50%   | 55%   | 60%   | 65%   | 70%   |

2.  **PAs will continue to be an issue, in spite of legislative recognition of the problem.**
    *   There's projected to be a significant increase in the Medicare eligible population forecasted over the next 10 years, and Medicare's [preference](https://www.cms.gov/newsroom/press-releases/cms-proposes-new-rules-advance-interoperability-and-improve-prior-authorization-processes) for PAs sets the standard for private payors.
    *   Despite legislative pressure, only six payors implemented [Fast PATH](https://www.caqh.org/press/release/caqh-core-releases-new-fast-path-initiative-support-automated-prior-authorization-transactions), a digital portal for providers to submit a subset of their PAs, in Jan 2020, and has not meaningfully moved the needle of automation (shown in graph above).
    *   After further regulatory pressure, the Center for Medicare & Medicaid Services (CMS) [proposed a rule](https://www.cms.gov/newsroom/press-releases/cms-proposes-new-rules-advance-interoperability-and-improve-prior-authorization-processes) in Dec 2022 that would require payors to implement an electronic interface and improve transparency for PAs, which would get enforced by Jan 2026 if finalized.

3.  **Solving for PAs sets us up to solve the rest of the billing process.**
    *   By solving for PAs, we gain access to patient medical and insurance data, payor communication channels and payor contracts that are critical to the success of submitting claims, appealing denied claims, and reconciling revenue.

## Our Core Beliefs

We firmly believe that to establish a successful health tech company, two cardinal rules must be adhered to:
1.  Go-to-market (GTM) and distribution are the key hurdles to overcome.
2.  Maintain hyper-focus on excellently solving a singular issue.

The majority of health tech ventures fail due to premature over-expansion and over-generalization.

## The Solution

We believe that a mixture of delightful software and streamlined operational services is a winning solution. We plan to build a **full-stack PA solution** that maximizes PA coverage by taking on 100% of the PAs to fully remove the burden for the provider. This includes a **software platform** to automate the majority of the PA process and integrates with payor portals, and an **operations team** to complete the long tail of complex PAs still requiring human intervention. Advancements in Large Language Models (LLMs) and Speech Recognition Systems (ASR), have provided unprecedented capabilities to address the intricate, bureaucratic challenges inherent in payor workflows. We plan to use LLMs to interpret complex payor rules to increase our percent coverage of no-touch, automated PAs.

### Prior Authorization Process

**01 Benefits Check / Insurance Eligibility**
*   Leverage eligibility APIs (eg. Change Healthcare)
*   Voice RPA for automated phone calls

**02 Compiling Relevant Data**
*   Sync to EHR + other data sources to get treatment plan notes, patient data
*   Silna billing agent can also compile manually
*   Validation and summarization by LLMs

**03 Submit Prior Authorization Documentation**
*   Auto-generate PA submission document
*   Use payor integrations and RPA to automate submission via fax, email and phone

**04 Status Monitoring**
*   Automate follow ups via payor integrations, RPA

**05 Escalation Management**
*   Enable provider to directly contact payor when a PA requires a peer to peer review

**06 Denial Workflow**
*   Initially, have operations team re-file PA if denied and easily resolvable reason
*   Rules based logic to eventually automate

### Underlying Pillars

**Payors Rules Engine**
*   Adapting to contact method (API, portal, fax, phone, email) & requirements by payor
*   Initially manual, then consuming policies with LLMs

**Living Payor Documents**
*   Payor policies (previous tests required, authorization required, etc.) parsing through LLM consuming payor documentation
*   Poll payor websites for updates, automatically flag rule changes as they come up

**Operations Team**
*   Team of billing agents to step in when technology cannot be used to complete a task
*   **Example:** Handling edge cases around insurance eligibility, compiling required data for submission if no access to EHR, following up on status of PA, involving provider if blocked on peer to peer review

## Our Team

| Name                | Title | Bio                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :------------------ | :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jeff Morelli        | CEO   | Jeff Morelli was the first employee at Truework (Series C), where he built the GTM team and led the company from $0 to $10M+ in revenue. Jeff signed the first 7-figure contract in company history and helped hire the company's GTM executive team. Before Truework, Jeff ran sales at Nightingale (YC14), a data collection company for Autism therapy.                                                                                                                   |
| Sagar Jajoo         | COO   | Sagar Jajoo was the first Product hire at Truework (employee #20) and built the Product function and a majority of Truework's core products, including automating manual employer outreach workflows and integrations with leading payroll companies and lenders core systems. His wealth of B2B product experience also spans successful Product tenures at Blend and Okta.                                                                                              |
| Pavel Asparouhov    | CTO   | Pavel Asparouhov joined Ramp as their 30th employee, and built Ramp Bill Pay from 0 to a multi-billion dollar annual TPV product, making it the fastest-growing product in the Ramp ecosystem. Most recently a Staff Software Engineer managing a team of 10 engineers, he oversaw the Bill Pay, Procurement, and Payment Platform engineering teams.                                                                                                                |

### Our Advantage

Jeff and Sagar were both instrumental in building [Truework's Smart Outreach product](https://www.truework.com/products/smart-outreach/), which involved hiring onshore and offshore operations teams to contact employers via fax, phone and email on a lender's behalf to verify an employee's income, and over time, increasingly automating this workflow. Now, 60% of verifications are completed with no human touch points.

Pavel spent his time at Ramp working on accountant automation tools in their accounts payables product, which are traditionally manual workflows. Recently, Pavel played a key role in deploying LLMs for document parsing, enhancing the company's Contract Management solution.

## Segments

We have conducted ~50 discovery calls and have three pilot customers lined up. The initial specialities we are focused on are independent specialty providers in Applied Behavioral Analysis (ABA, or Autism Therapy) and Physical Therapy. Our decision criteria was based on:
*   Require PAs on a recurring basis
*   Highly fragmented
*   High PA spend and low PA complexity

Effective distribution partners also include private equity groups that have rolled up independent providers in the Physical Therapy and ABA space, and in the long term outsourced billing services and RCM providers.

### Specialty Segments by PA Volume and Complexity

**Independent**

*   **Low PA Volume**
    *   Pediatrics
    *   Psychiatry
    *   Ophthalmology
    *   Urology
    *   Dermatology
    *   Gastroenterology
    *   Chiropractic
    *   Mental Health Therapy
    *   Speech Therapy
    *   Oncology (partially low)
*   **High PA Volume**
    *   Ear, Nose, & Throat
    *   Physical Therapy
    *   Applied Behavior Analysis
    *   Oncology (partially high)
    *   Neurology
    *   Radiology
    *   Cardiology

**Consolidated**
*   Anesthesiology
*   Pathology

## Appendix

### Advisors

As first-time healthcare founders and operators, we are bringing on healthcare domain experts to be advisors including:
*   **Avery Bullock** is a digital health operator with an extensive background in care delivery, revenue cycle management, enterprise and commercial relations, systems integration, clinical staffing and management, and QA and compliance. She has deep experience building out manual operations teams and processes in the healthcare space, where she has worked for over a decade at companies such as Nomad Health, Minded, and Zocdoc.
*   **James Woodward** is a Healthcare executive with over 30 years of experience in leading complex healthcare organizations. Most recently he is the CEO of Trinity Health Mid-Atlantic, a six hospital system covering Southeastern Pennsylvania, Bucks County, Pennsylvania and Wilmington, Delaware with over 9,700 employees and 2,200 medical staff.

### Competitive Landscape

| Category                               | Examples                                     | Why Silna Wins                                                                                                                                                                                                                                                                                                              |
| :------------------------------------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Electronic prior authorization (ePA)   | myndshft, AccuReg, pVerify Front End Revenue Cycle, pVerify | These companies primarily solve for PAs that are available through payor portals, and do not cover manual PAs and peer to peer escalations which providers must handle themselves. Coverage is typically <50%                                                                                                              |
| Medication focused prior authorization | covermymeds, LATENT, Develop Health          | These companies only focus on medication related PAs, which involve working with a pharmacy as well. We are focused on services-related PAs.                                                                                                                                                                                      |
| Revenue Cycle Management (RCM)         | WAYSTAR, Olive, adonis                       | These companies are typically focused on other areas of the Revenue Cycle Management process so their success rate of completing PAs is ~40% if they have a PA solution                                                                                                                                                       |
| Payor-focused prior authorization      | cohere, co:helm                              | These companies are not competitive in the near-term as they are solving for payors. Our belief is that payors and Provider incentives will always be misaligned, so you must build for one party and providers are most impacted by the burdensome system.                                                                     |
| Voice AI agents / RPAs                 | Outbound AI, INFINITUS                       | These platforms are focused on automating phone-based workflows for providers, which include but are not limited to PA and benefits eligibility. The challenge with these solutions is phone calls are not the only way PAs and eligibility checks are done, and these solutions can't handle escalations that require manual intervention. |

## Provider Segmentation Analysis

| COMPANY                     | RISK OF PRIOR AUTH RATE(1) (procedure and Part B) | PRIOR AUTH COMPLEXITY(1) | MARKET SIZE(2) (bn) | CONSOLIDATION(3) (% of providers in practices size <50) |
| :-------------------------- | :------------------------------------------------ | :----------------------- | :------------------ | :------------------------------------------------------- |
| ABA                         | 70.00%                                            | Easy                     | $16.20              | 75.00%                                                   |
| Physical Therapy            | 40.00%                                            | Easy                     | $48.70              | 80.30%                                                   |
| Anesthesiology              | 23.70%                                            | Easy                     | $17.00              | 30.70%                                                   |
| Cardiology                  | 92.60%                                            | Hard                     | $58.50              | 16%                                                      |
| Dermatology                 | 12.40%                                            | Easy                     | $8.70               | 54%                                                      |
| Diagnostic Radiology        | 91.10%                                            | Hard                     | $23.70              | 38%                                                      |
| Emergency Medicine          | 50.10%                                            | Easy                     | $212.00             | 22.70%                                                   |
| Gastroenterology            | 76.90%                                            | Hard                     | $61.05              | 56.50%                                                   |
| General Practice            | 58.50%                                            | Easy                     | $312.80             | 81%                                                      |
| General Surgery             | 70.00%                                            | Hard                     |                     | 40.50%                                                   |
| Hematology/Oncology         | 87.80%                                            | Hard                     | $9.70               | 56.30%                                                   |
| Neurology                   | 69.90%                                            | Hard                     |                     |                                                          |
| Neurosurgery                | 89.60%                                            | Hard                     |                     | 30.50%                                                   |
| Obstetrics/Gynecology       | 18.70%                                            | Hard                     | $13.00              |                                                          |
| Ophthalmology               | 43.60%                                            | Easy                     | $12.00              | 89%                                                      |
| Orthopedic Surgery          | 85.00%                                            | Hard                     | $21.00              |                                                          |
| Otolaryngology (ENT)        | 74.00%                                            | Hard                     | $16.15              | 95.27%                                                   |
| Pathology                   | 2.40%                                             | Easy                     | $34.40              |                                                          |
| Pediatric Medicine          | 19.30%                                            | Easy                     | $14.80              | 89.20%                                                   |
| Psychiatry                  | 3.50%                                             | Hard                     | $11.20              | 85.30%                                                   |
| Pulmonary Disease           | 77.80%                                            | Hard                     |                     |                                                          |
| Urology                     | 84.20%                                            | Hard                     | $17.70              | 59.00%                                                   |
| Speech Therapy              | 40%                                               | Easy                     | $5.00               | 40.00%                                                   |
| Mental Health Services      | low                                               | Easy                     |                     | 98.70%                                                   |
| Chiropractors               | low                                               | Easy                     | $18.70              | 98.10%                                                   |
| Rheumatology                | 48.00%                                            | Hard                     | $0.94               | low                                                      |
| Endocrinology               | 60.4%                                             | Hard                     | $2.35               | low                                                      |

(1) Jama Network Report
(2) IBISWorld, Grandview
(3) Missing data plotted on charts with qualitative information

### Prior Auth Complexity And Spend By Provider Segment

*(Note: "Spend" on this chart is equivalent to "Market Size (bn)" from the table above, used to categorize High/Low PA Spend.)*

**Low PA Spend, Low PA Complexity**
*   Applied Behavior Analysis
*   Physical Therapy
*   Chiropractic
*   Speech Therapy
*   Dermatology
*   Ophthalmology
*   Pediatrics
*   General Medicine

**Low PA Spend, High PA Complexity**
*   Anesthesiology
*   Pathology
*   Emergency Medicine
*   OBGYN

**High PA Spend, Low PA Complexity**
*   Endocrinology
*   Psychiatry
*   Pulmonology
*   Gastroenterology
*   Urology
*   Rheumatology

**High PA Spend, High PA Complexity**
*   Cardiology
*   Orthopedics
*   Neurology/Neurosurgery
*   Radiology
*   Oncology
*   Ear, Nose, & Throat