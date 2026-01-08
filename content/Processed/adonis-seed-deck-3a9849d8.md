---
source_pdf: "https://drive.google.com/file/d/1lZS2_O8a-I7svz7KC9fTlttRF8vHIqnV/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Adonis Seed Deck.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1lZS2_O8a-I7svz7KC9fTlttRF8vHIqnV/view)

## Slide 1: Adonis Logo and Tagline

# Adonis
Disentangling healthcare for patients and providers.

## Slide 2: Founders

# Founders

**Aman Magoon**
Co-founder & CPO @ Adonis
Founding Team & ex-VP of Product @ Nayya
prev product leader @liveramp, fintech @Deloitte
2 ML Patents Issued. George Washington Econ

**Akash Magoon**
Co-founder & CEO @ Adonis
co-founder and ex-CTO @ Nayya. Forbes 30u30
prev eng leader @enigma, @cedarhealth, @aws
Maryland CS alum, founder @LIS-labs (exited)

## Slide 3: The Problem Statement

The way medical providers bill for services, and the
way patients pay for care is broken, and it's only
getting worse.

## Slide 4: The Provider Problem

# The Provider Problem
Billing and insurance related activities cost over $99,000
per medical provider per year and represents nearly $1
in every $7 collected by a medical facility*.
You read that right. That's over 14% COGS just to
process billing to insurance payers.

*https://jamanetwork.com/journals/jama/article-abstract/2673128?redirect=true

## Slide 5: The Patient Problem

# The Patient Problem
Medical insurance deductibles continue to rise, resulting
in a nearly 230% increase in how much patient's have to
pay for care. Nearly 100 million Americans* are saddled
with medical debt.

*https://www.texastribune.org/2022/06/16/americans-medical-debt/

## Slide 6: The Status Quo

# The Status Quo

1.  Patient completes paper based onboarding, sharing basic insurance and demographic info.
2.  Administrative staff manually transcribes onboarding data into EMR. 35% of admin time spent performing data entry.
3.  Patient receives care, Provider inputs visit notes into Practice Management system.
4.  Outsourced Medical Billing team manually codes Provider notes from plain text to ICD-10/CPT codes. These billing teams cost the provider 3-8% of the clam amount
5.  Medical Billing Team manually prepares claims submission, including ICD / CPT and patient eligibility.
6.  After passing data validation tests, the claim is then submitted to the respective Payer for adjudication.
7.  Medical Billing team attempts to submit electronic claim to Claims Clearinghouse with 80% error rate.
8.  Adjudication on the claim begins, insurance carrier submits response of Approved / Rejected / Denied back to medical billing team. 5% of claims leak during this process, causing revenue cycle challenges.
9.  Patient is sent paper bill and explanation of benefits via postal, usually months after service. 61% of patients find medical bills confusing and only 70% of patient responsibility is collected.

*Diagram Flow (from left to right, top to bottom)*
-   Paper Based Onboarding
-   EHR / Practice Management Software
-   Billing Management Software
-   Claims Clearinghouse
-   Insurance Carrier

## Slide 7: Introducing Adonis

# Introducing Adonis
Adonis is an intelligent health payments
and billing operating system that creates
transparency between providers and
patients, and efficiency between
providers and payers by seamlessly
integrating with EHR systems of record.

## Slide 8: The Adonis Approach

# The Adonis Approach

1.  **Patient onboards with Adonis**
    Adonis personalizes and simplifies the clunky patient paperwork experience, enables them to share past/updated medical records with provider, and predicts out-of-pocket responsibility.
2.  **Adonis EHR Integrations**
    Adonis builds and maintains API integrations with dozens of incumbent EHR platforms that enables read and write access, as well as visit event triggers (webhooks).
3.  **Patient visit**
    Patient check-in and provider visit is streamlined. Adonis pushes relevant patient data (from Step 1) into EHR for a more enriching care experience for both patient and provider.
4.  **Adonis Transcriber**
    Adonis uses natural language processing (NLP) and machine learning to transcribe provider visit notes into claim object. Claims are pre-processed to ensure reimbursement using reinforcement learning. This is The Adonis Network Effect.
5.  **Adonis Claims Resolver**
    Claims are submitted electronically via Clearinghouse integrations. Adonis programmatically monitors claims status and resolves rejections and denials faster than industry incumbents. Resulting in a shorter Days in Accounts Receivables.
6.  **Patient Payment Experience**
    Patients are notified of their personal responsibility via omni channel behavioral nudging. Empathetic and affordable repayment plans and explanations of benefits improve collection rates and reduce collections overhead.

*Diagram Description:*
A central "Adonis" core (represented by a plus sign shape) connects "Adonis for Patients" (left side of core) and "Adonis for Providers" (right side of core).
-   Adonis for Patients points: 1 (Patient onboards with Adonis), 2 (Adonis EHR Integrations), 6 (Patient Payment Experience).
-   Adonis for Providers points: 3 (Patient visit), 4 (Adonis Transcriber), 5 (Adonis Claims Resolver).
The numbers correspond to the steps in the description.

## Slide 9: How Adonis Makes Money

# How Adonis Makes Money

| Category                                   | Description                                                                                                                                                                     |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **2% fee of reimbursed claims**            | **ML + Automation > Humans** <br> Given the manual nature of the incumbent process, outsourced medical billers charge 3-8% based on volume.                                       |
| **2% of patient copays and out-of-pocket expenses** | **Adonis increases payment collections for providers** <br> With increased consumer billing transparency and nudges, accounts receivable days + debt collection drop significantly. |

## Slide 10: Actual Customer ROI Model

# Actual Customer ROI Model
Adonis unlocks nearly $10M in net new revenue while saving the
practice over $1M in medical billing fees; Adonis earns $3M.

**Trailing 12 month financials w/ outsourced billing agency**

| Yearly Patient Visits | Average Claim to insurer (per visit) | Average Patient Responsibility | Insurance Reimbursement Rate | Patient Collection Rate | Total Revenue from Insurance | Total Revenue from Patients | Cost to Collect (3%) |
| :-------------------- | :----------------------------------- | :----------------------------- | :--------------------------- | :---------------------- | :--------------------------- | :-------------------------- | :------------------- |
| 100,000               | $1,500                               | $75                            | 94%                          | 70%                     | $139.5M                      | $5.25M                      | $4.1M                |

**2023 financials w/ Adonis**

| Yearly Patient Visits | Average Claim to insurer (per visit) | Average Patient Responsibility | Insurance Reimbursement Rate | Patient Collection Rate | Total Revenue from Insurance | Total Revenue from Patients | Adonis Fees (2%) |
| :-------------------- | :----------------------------------- | :----------------------------- | :--------------------------- | :---------------------- | :--------------------------- | :-------------------------- | :--------------- |
| 100,000               | $1,500                               | $75                            | 98%                          | 93%                     | $147M (+7.5M)                | $7.12M (+1.87M)             | $3.0M (-1.1M)    |

This is an actual model for Orthopedics private practice group we are entering contracting
discussions with. They have 14 locations across Maryland, DC, and Virginia, and currently
outsourced billing to a medical billing staffing firm that charges 3%.

## Slide 11: Value Proposition Summary

Some companies help others reduce cost. Others
helps companies increase revenue. Adonis does
both.

## Slide 12: TAM / Business Opportunity

# TAM / Business Opportunity

**Total Addressable Market**
1M Providers x $1.6M Claims/Provider x 2% Adonis Fee = $36B

**Service Addressable Market (Physician Operated Practices)**
.5M Providers x $1.6M Claims/Provider x 2% Adonis Fee = $18B

Despite adoption of EMR/EHR systems more than doubling in
the last ten years, the outsourced medical billing industry is
expected to grow at 16% CAGR over the next ten years.

## Slide 13: Revenue Forecast & Go-to-Market

# Revenue Forecast & Go-to-Market

*   Adonis earns $36k/yr on average per provider.
*   By the end of 2023, Adonis will serve a total of 85 Providers, totaling $3M in revenue
*   In 2024, Adonis will continue the bottoms up approach, penetrating PE backed provider systems
*   In 2025 and beyond, Adonis will partner with larger health systems and payers to unlock more scale with proven ROI

**Revenue Forecast**

| Year | Revenue        |
| :--- | :------------- |
| 2023 | $3,060,000.00  |
| 2024 | $15,120,000.00 |
| 2025 | $45,360,000.00 |
| 2026 | $90,000,000.00 |

## Slide 14: Adonis' Moonshots - 2025 and beyond

# Adonis' Moonshots - 2025 and beyond
Going into daydream mode for just a few seconds...

| Initiative                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Power pharma clinical trials** | Adonis will be able to power high propensity and targeted clinical trials across a variety of patients and provider segments, all while providing researchers with the tools needed to develop a granular understanding of price sensitivity.                                                                                                                                                                                                                         |
| **Acquire incumbent billing firms** | This will be a distribution play. Incumbent billings firms are low margin and traditionally low multiple businesses, and there's a large opportunity to acquire them and swap out the manual billers with Adonis.                                                                                                                                                                                                                                                    |
| **Provider cost + quality index** | Adonis' network effect and growing repository of provider billing and outcomes data, coupled with advanced data science techniques, will yield a strong provider cost + quality index that can power great transparency across the space. Example: Insurers would love this when credentialing new providers into their network |

## Slide 15: Adonis is ready for lift off

# Adonis is ready for lift off

*   **01:** Agreement with 14 location Orthopedic practice in advanced discussions (Jan 2023 launch)
*   **02:** Team of engineers, design, and customer success ready to join
*   **03:** Integrations into dozens of EHRs has been built
*   **04:** Building relationships with top Healthcare Private Equity firms
*   **05:** Patents drafts in progress for ML techniques used in Adonis Claims Engine
*   **06:** Adonis is raising a seed round to fuel take-off.

## Slide 16: Hiring Plan

# Hiring Plan

*Note: The column headers "Jan 22, Feb 22, Mar 22, Apr 22, May 22, June 22" appear after "Dec 22", which is a chronological inconsistency in the slide's presented timeline. The table below represents the visible duration of the green bars in the Gantt chart for each role.*

| Task                          | Aug 22 | Sep 22 | Oct 22 | Nov 22 | Dec 22 | Jan 22 | Feb 22 | Mar 22 | Apr 22 | May 22 | June 22 | Aug 23 |
| :---------------------------- | :----- | :----- | :----- | :----- | :----- | :----- | :----- | :----- | :----- | :----- | :------ | :----- |
| CEO                           | X      | X      | X      | X      | X      | X      | X      | X      | X      | X      | X       | X      |
| **Product**                   |        |        |        |        |        |        |        |        |        |        |         |        |
| CPO                           | X      | X      | X      | X      | X      | X      | X      | X      | X      | X      | X       | X      |
| Senior Designer               |        | X      | X      | X      | X      | X      | X      | X      | X      | X      | X       | X      |
| **Customer Success**          |        |        |        |        |        |        |        |        |        |        |         |        |
| VP, Customer Success          |        | X      | X      | X      | X      | X      | X      | X      | X      | X      | X       | X      |
| Senior Customer Success Manager |        |        |        |        |        |        |        | X      | X      | X      | X       | X      |
| **Engineering**               |        |        |        |        |        |        |        |        |        |        |         |        |
| 2 Principal Engineer          |        | X      | X      | X      | X      | X      | X      | X      | X      | X      | X       | X      |
| Senior Engineer               |        | X      | X      | X      | X      | X      | X      | X      | X      | X      | X       | X      |
| Senior Data Scientist         |        | X      | X      | X      | X      | X      | X      | X      | X      | X      | X       | X      |
| **Sales and Marketing**       |        |        |        |        |        |        |        |        |        |        |         |        |
| Head of Sales                 |        |        |        |        |        | X      | X      | X      | X      | X      | X       | X      |
| Director of Marketing         |        |        |        |        |        | X      | X      | X      | X      | X      | X       | X      |