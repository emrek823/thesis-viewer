---
source_pdf: "https://drive.google.com/file/d/1ZmOLTIt1xEdMYZeRG-8S8HsAHS6JuQ6V/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Commure + Athelas M&A Memo (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1ZmOLTIt1xEdMYZeRG-8S8HsAHS6JuQ6V/view)

# Commure + Athelas M&A Memo

## Key Takeaways
*   Athelas has a compelling product suite to begin servicing the enterprise segment within RCM and broader admin tooling. CommureOS enables the delivery of said modules through a high-value interoperability layer. Athelas' EPD team is also A+ quality (demonstrated by its high product velocity) that can accelerate Commure's product roadmap
*   Product synergies have not been well explored to date given the state of diligence - only commercial cross-sell opportunity has been explored in detail
*   Athelas is a high growth, high margin business. The business ended 2022 with $24.3M full year revenue, 26.9% gross margin, and (111%) EBITDA margin. This year, the company expects to grow topline over 100% and continue to expand its margin profile to achieve $49.4M full year revenue, 68% gross margin, and (12%) EBITDA margin.
*   We see the current valuation proposal as favorable for Commure. The current relative valuation proposal for this merger is 60% Commure / 40% Athelas - this tracks with where both companies were from a relative topline scale perspective in 2022. However, the relative valuation using 2023 and even 2024 figures is closer to 50 % / 50%.
*   To justify a $6B combined EV in 2025 at an ~11.0-13.0x revenue multiple, we would have to believe the combined company generates ~$450-550M topline that year. This implies ~$220-320M of revenue ‘go-get' on top of the standalone businesses' combined revenue, which the combined entity can achieve through the upsell/cross-sell synergies related to this merger and additional tuck-in acquisitions.

## Product

### Athelas Product Suite

#### RPM (Athelas One)
*   Athelas One administers Clozaril, at-home chemo, and serves as a lab-grade white-blood cell diagnostic
*   While Athelas has built out a compelling RPM platform today, the management team has accurately identified long-term industry pressures for RPM, and thus decided to deprioritize it as a core focus area
*   Going forward, Athelas' RPM product line will be deployed as a clinical module added on to their foundational admin suite
*   For clarity, the M&S team is not focused on RPM in 2023 given the push on RCM. Going forward, SDRs will be incentivized to tack-on RPM modules to existing customer contracts

#### RCM
*   Today, Athelas is an end-to-end RCM software platform to fully outsource outpatient (OP) professional billing
*   Athelas actually started out building RCM functionality to support providers in billing for RPM codes. Over time, the team realized that these RPM-focused RCM services are easily transferable to the broader OP professional billing use case. The team has now created such a compelling solution in this product segment that RCM serves as its core product in Athelas' GTM motion
*   The core RCM workflow includes the following:
    *   First, Athelas integrates with payors' ERAs (Electronic Remittance Advice) and EDI (Electronic Data INterchange, focused on government billing) to facilitate electronic billing vs. going through a cumbersome EOB (Explanation of Benefits) process
    *   Then, Colossus integrates into the practices' EMR instances. At its core, medical charts / notes, billing, and codes are all compiled into a claims submission payload / object
    *   Athelas' R5 module then is the remittance processor, matching by site, encounter, date of service, unique member ID, provider control number, and payor control number. The average timing here is ~2 weeks for Medicare and ~1-4 weeks for private payors
    *   In the event of a denial, Athelas is in charge of managing the denial, including packaging the supporting additional clinical information necessary for an appeal, adjusting the claims submission payload if any errors were involved, etc.
    *   Athelas is also integrated in the back-end with clearinghouses to allow for automated insurance eligibility checks. If the patient's insurance is deemed to be ineligible, Athelas automatically pings patients (configurable to the individual practice's preferences) either through email / text / phone at the appropriate elevation levels
    *   Then, Athelas processes payments back to the provider to conclude the core RCM workflow
*   Athelas' core business model within full-cycle RCM captures ~6% of collections (industry standard pricing approach). In addition, Athelas has a comprehensive suite of add-on products to enhance its RCM offering (vs. being deployed as standalone modules to practices)
    *   Athelas Scribe: Athelas Scribe is an AI scribe module that is deployed and integrated directly into the practice's EHR. Athelas' view is that the quality / accuracy of scribe modules is non-differentiating given the performance of GPT-4 / PaLM 2 (Athelas utilizes the Open AI Whisper framework). Instead, the integration into clinical and admin workflows is more crucial. Note that this historically was a deeply competitive space in the technology market, including players like Nuance, DeepScibe, Suki Health, etc.
    *   Athelas SmartPay: Athelas has a comprehensive D2C / patient self-pay collections portal, similar to Cedar's core GTM, to manage the patient responsibility side. First, Athelas applies a secondary rules engine to pick-up if a secondary payor is eligible to cover any remaining patient responsibility. Then, SmartPay interfaces with customers to offer unique financing options, remind on outstanding bills, and offer a tech-first UI/UX. This is enabled through integrations with Stripe and Klarna/Affirm
    *   Athelas has also built out a wide swath of automations to further improve the efficiency of the workflow. An example of this is developing IVR bots that can automatically interface with payor phone lines for use cases such as eligibility verification, denials appeals, checking on status of payment, prior authorization, etc.
*   Today, Athelas' full-cycle RCM product still includes an off-shore human-in-the-loop, driving ~60-80% gross margins
    *   There is a long-tail of operations that cannot be automated at this point in time. This includes pieces like a regional payor that does offer an ERA and instead provides manual EOBs. Athelas then needs to manually transcribe the EOB and call the payor if there are errors
    *   Note that ~20% of claims are not fully automated today. ½ of these are relatively low touch where a human is just performing recon, but the remaining ½ are high-touch
    *   The aim is to reduce human intervention to 5-10%, driving towards full SaaS margins of 80%+
*   Athelas also provides a front-end product called Athelas Insights, which serves as the reporting hub for practices
    *   Customers end up interfacing with this platform as the end-to-end financial reporting view vs. their traditional ERP given the fidelity of information
*   Note that in the enterprise segment, Athelas does not offer full-cycle today and instead commercializes specific pieces of technology as SaaS modules (e.g., Colossus, SmartPay, Scribe) with no labor support given that enterprise customers typically have in-house RCM teams

### Roadmap
*   Athelas' vision within RCM is to provide a full-cycle offering that can service all RCM use cases. The highest priority piece of their roadmap today is to build out a full workflow for all hospital-based facility and professional billing (they do some of this for kidney care today). This will allow Athelas to fully service health systems, and potentially displace entrenched RCM players like R1 down the road
*   Athelas is also investing into further automations to improve 1st pass rates and reduce necessity for human interventions through further investment into scribing technology, payor ERA integration, payor bot communication automation, prior authorization, etc.
*   Going forward, Athelas' vision is to become the end-to-end admin OS for providers. To achieve that, they aim to build out a broader suite of provider tooling such as patient communications, RCM dashboarding, payments / working capital solutions, revenue <> cost mapping, etc.

## Commure Product Suite

**CommureOS**: CommureOS enables a common platform across all pillars given the criticality of an interoperability layer. The core workflow components include data management, integration engine, process orchestration, real-time location services, developer experience, FHIR & GraphQL APIs, UI framework, user & access management, application management, and security & compliance

**Strongline (Location Aware Hospital Operations)**: StrongLine is Commure's staff safety solution that will expand into broader asset tracking use cases over time. Strongline is currently developing its v2 product that includes mobile app for security responders, 5-year battery life, improved UI/UX of hardware, mobile alerts to enable outdoor use cases, and ability to service new markets (e.g., home health, PAC)

**Care Journeys**: Commure aims to service a broad set of care management workflows. At its core, Commure is building out pathways (care plans), patient segmentations (screening and stratification based on a rules engine), and journey execution (through automated workflows)
*   Care Coordination: improve patient compliance with care plan, including automated patient and clinical communications platform
*   Referral Management: standardize the referral management process to specialists (particularly in OON use cases)
*   Transitions of Care: fully manage the discharge process to ensure patient is engaged into the right level of care after an acute-care setting, including perioperative education, confirmation of Rx pick-ups, patient education on diseases and devices, and follow-up confirmations
*   Care Management: still nascent, but develop customized workflows depending on the indication (e.g., for Type 1 diabetes with SDoH factors)

**Revenue Intelligence**: Built off of PatientKeeper, Commure's RCM offering is focused on charge capture, coding, and enterprise charge reconciliation

## Synergies
The group has not had the opportunity to fully ideate on product synergies to date. A couple of thought starters that have surfaced include:
*   Leveraging technology from Commure Revenue Intelligence to enhance hospital-based offering for Athelas RCM
*   Leveraging Commure's health system customer base to cross-sell RCM modules
*   Integrate with CommureOS to enhance data fidelity on Athelas' RCM & admin tools
*   Integrate Commure Care Journeys into Athelas Insights
*   Further automation of Strongline

## Standalone and Combined Financials

### Athelas Financials

#### Management Case

| | Q1 2022A | Q2 2022A | Q3 2022A | Q4 2022A | Q1 2023A | Q2 2023P | Q3 2023P | Q4 2023P | Mgmt Case 2022 | Mgmt Case 2023 |
|:---------------------------------------------|:---------|:---------|:---------|:---------|:---------|:---------|:---------|:---------|:---------------|:---------------|
| RPM | $3.6 | $3.9 | $4.3 | $4.5 | $4.5 | $4.6 | $4.7 | $4.8 | $16.3 | $18.5 |
| RCM + Workflows | $1.2 | $1.5 | $1.7 | $2.1 | $5.2 | $6.5 | $7.4 | $8.6 | $6.4 | $27.6 |
| Mis. Interest Income | $0.0 | $0.3 | $0.5 | $0.8 | $0.9 | $0.8 | $0.8 | $0.7 | $1.6 | $3.2 |
| **Total Revenue** | **$4.8** | **$5.7** | **$6.4** | **$7.4** | **$10.5** | **$11.9** | **$12.8** | **$14.1** | **$24.3** | **$49.4** |
| % QoQ Growth | | 19% | 13% | 16% | 42% | 13% | 8% | 10% | | 103% |
| % YoY Growth | | | | | 121% | 110% | 100% | 89% | | |
| **Memo: % QoQ Growth / % YoY Growth** | | | | | | | | | | |
| RPM | | 11% | 8% | 7% | (1%) | 2% | 2% | 2% | | 14% |
| RCM + Workflows | | 27% | 15% | 23% | 147% | 25% | 14% | 16% | | 328% |
| Mis. Interest Income | | 430% | 80% | 78% | 10% | (6%) | (6%) | (6%) | | 108% |
| Manufacturing/Equipment Purchase and Shipping Cost/SaaS | $1.0 | $1.2 | $1.0 | $0.9 | $0.6 | $0.5 | $0.4 | $0.4 | $4.1 | $1.9 |
| GGP Inventory Purchase | $2.5 | $2.9 | $2.9 | $3.5 | $3.3 | $3.3 | $3.4 | $3.4 | $11.9 | $13.4 |
| Marketing Spend + Travel | $0.7 | $0.4 | $0.3 | $0.3 | $0.2 | $0.1 | $0.1 | $0.1 | $1.8 | $0.4 |
| **Total COGS** | **$4.2** | **$4.6** | **$4.2** | **$4.8** | **$4.1** | **$3.9** | **$3.9** | **$3.9** | **$17.8** | **$15.8** |
| **Gross Profit** | **$0.6** | **$1.1** | **$2.2** | **$2.7** | **$6.5** | **$8.0** | **$8.9** | **$10.2** | **$6.5** | **$33.6** |
| **% Gross Margin** | **11.6%** | **19.5%** | **34.1%** | **36.1%** | **61.2%** | **67.5%** | **69.7%** | **72.1%** | **26.9%** | **68.0%** |
| **Memo: % Revenue** | | | | | | | | | | |
| Manufacturing/Equipment Purchase and Shipping Cost/SaaS | 20.8% | 21.0% | 16.0% | 11.9% | 5.4% | 3.9% | 3.3% | 3.1% | 16.8% | 3.8% |
| GGP Inventory Purchase | 52.2% | 51.6% | 45.8% | 47.4% | 31.4% | 28.0% | 26.3% | 24.3% | 48.9% | 27.2% |
| Marketing Spend + Travel | 15.4% | 7.9% | 4.1% | 4.7% | 2.0% | 0.6% | 0.7% | 0.5% | 7.4% | 0.9% |
| Rent / Facilities / Utilities | $0.4 | $0.5 | $0.4 | $0.3 | $0.5 | $0.5 | $0.5 | $0.5 | $1.7 | $2.0 |
| Salaries / Benefits / Payroll Expenses | $4.9 | $5.8 | $6.3 | $6.8 | $7.6 | $7.3 | $7.3 | $7.4 | $23.8 | $29.6 |
| Pharmacy Operations | $0.5 | $0.7 | $0.6 | $0.7 | $0.5 | $0.5 | $0.5 | $0.5 | $2.4 | $2.0 |
| International Operations | $0.5 | $0.5 | $0.7 | $0.9 | $1.0 | $1.2 | $1.0 | $0.8 | $2.6 | $3.6 |
| Other Expenses | $0.7 | $0.7 | $0.8 | $0.9 | $0.4 | $0.6 | $0.6 | $0.6 | $3.0 | $2.2 |
| **Total OpEx** | **$6.9** | **$8.2** | **$8.7** | **$9.6** | **$10.2** | **$9.8** | **$9.7** | **$9.8** | **$33.5** | **$39.4** |
| **EBITDA** | **($6.4)** | **($7.1)** | **($6.6)** | **($6.9)** | **($3.8)** | **($1.7)** | **($0.7)** | **$0.4** | **($27.0)** | **($5.8)** |
| **% EBITDA Margin** | **(134%)** | **(126%)** | **(102%)** | **(93%)** | **(36%)** | **(15%)** | **(6%)** | **3%** | **(111%)** | **(12%)** |
| **Memo: % Revenue** | | | | | | | | | | |
| Rent / Facilities / Utilities | 8.8% | 8.7% | 6.6% | 4.7% | 5.2% | 3.9% | 3.8% | 3.5% | 6.9% | 4.0% |
| Salaries / Benefits / Payroll Expenses | 103.2% | 103.0% | 97.5% | 90.7% | 71.8% | 61.2% | 57.2% | 52.5% | 97.8% | 59.9% |
| Pharmacy Operations | 9.8% | 11.9% | 10.1% | 8.7% | 4.7% | 4.2% | 3.9% | 3.6% | 10.0% | 4.1% |
| International Operations | 10.0% | 9.3% | 10.2% | 12.9% | 11.3% | 8.0% | 5.8% | 5.3% | 7.4% | 7.4% |
| Other Expenses | 13.8% | 12.3% | 11.8% | 11.9% | 3.8% | 4.8% | 4.5% | 4.3% | 12.3% | 4.4% |

The company ended 2022 with $24.3M full year revenue, $6.5M gross profit (26.9% gross margin), and -$27.0M EBITDA (-111% EBITDA margin). The impact of the strategic shift to focusing on RCM can be seen in both the topline and margin figures from Q4 2022 to Q1 2023 and in management case beyond:
*   Nearly all of QoQ and rest of 2023 revenue growth driven by increase in RCM + workflows segment; RPM segment largely steady through EOY.
*   Anticipated doubling of gross margin from Q4 2022 to Q4 2023 as business mix shift evolves (RCM is 80%+ GM) and continued automation of business operations overall
*   The company also saw significant efficiencies achieved on the OpEx side last quarter as they automated the EOB team (120 FTEs in India) and reduced OpEx accordingly.

Today, Athelas is at $42M live ARR / $53M cARR, and management forecasts $56M live ARR / $70M cARR by the end of 2023. The current forecasts also assume achieving EBITDA breakeven / positive by Q4 2023 with the current level of SDR investment, though there is significant opportunity to scale up SDRs and achieve further scale with additional investment; this is not reflected in the above forecasts from management.

### Athelas + Commure Financials

If we extrapolate Athelas' current forecast through 2025 (assume YoY ARR growth and accompanying margin expansion) and lay it out next to Commure's current forecasts (note that we have adjusted Commure's fiscal period reporting to align with Athelas' - e.g., 2022 above is actually Commure's internally reported 2023, which runs from February 2022 - January 2023), it looks as follows:

**Athelas Case Extrapolation**

| | 2022 | 2023 | 2024 | 2025 |
|:----------------|:-----|:-----|:-----|:-----|
| EOP ARR | $29.8 | $56.4 | $101.6 | $162.5 |
| % YoY Growth | | 89.5% | 80.0% | 60.0% |
| **Total Revenue** | **$24.3** | **$49.4** | **$79.0** | **$132.1** |
| % YoY Growth | | 103% | 60.1% | 67.1% |
| **Gross Profit** | **$6.5** | **$33.6** | **$58.5** | **$105.7** |
| % Gross Margin | 26.9% | 68.0% | 74.0% | 80.0% |
| **EBITDA** | **($27.0)** | **($5.8)** | **$0.0** | **$6.6** |
| % EBITDA Margin | (111%) | (12%) | 0% | 5% |

**Commure Mgmt Case**

| | 2022 | 2023 | 2024 | 2025 |
|:----------------|:-----|:-----|:-----|:-----|
| EOP ARR | $50.8 | $64.7 | $87.8 | $110.0 |
| % YoY Growth | | 27.4% | 35.7% | 25.3% |
| **Revenue** | **$44.2** | **$51.1** | **$76.2** | **$98.9** |
| % YoY Growth | | 15.6% | 49.1% | 29.8% |
| **Gross Profit** | **$20.5** | **$21.8** | **$39.6** | **$56.4** |
| % Gross Margin | 46% | 43% | 52% | 57% |
| **EBITDA** | **($42.2)** | **($39.2)** | **($28.2)** | **($17.3)** |
| % EBITDA Margin | (95%) | (77%) | (37%) | (17%) |

For Athelas, we believe that $79M in-year revenue for 2024 is reasonable given where the company expects to end this year ($56M ARR / $70M CARR) and a YoY growth rate of 60% of revenue vs. 2023, which we also believe is reasonable for a company at Athelas' stage with an exciting and emerging growth avenue (RCM). Note an acceleration of revenue growth in 2025 given the continued unlock of and traction from the RCM product. Further business diligence would be required to validate these high-level assumptions and make them more robust.

### The combined P&L with no synergy uplift looks as follows:

| | Actual 2022 | Projected 2023 | Projected 2024 | Projected 2025 |
|:--------------------|:------------|:-------------|:-------------|:-------------|
| Athelas | $29.8 | $56.4 | $101.6 | $162.5 |
| Commure | $50.8 | $64.7 | $87.8 | $110.0 |
| **Combined ARR** | **$80.6** | **$121.1** | **$189.4** | **$272.5** |
| % YoY Growth | | 50.3% | 56.3% | 43.9% |
| **Memo: % Combined ARR** | | | | |
| Athelas | 37% | 47% | 54% | 60% |
| Commure | 63% | 53% | 46% | 40% |
| Athelas | $24.3 | $49.4 | $79.0 | $132.1 |
| Commure | $44.2 | $51.1 | $76.2 | $98.9 |
| **Combined Revenue** | **$68.5** | **$100.5** | **$155.2** | **$231.0** |
| % YoY Growth | | 46.7% | 54.5% | 48.8% |
| **Memo: % Combined Revenue** | | | | |
| Athelas | 35% | 49% | 51% | 57% |
| Commure | 65% | 51% | 49% | 43% |
| Athelas | $6.5 | $33.6 | $58.5 | $105.7 |
| Commure | $20.5 | $21.8 | $39.6 | $56.4 |
| **Combined Gross Profit** | **$27.0** | **$55.4** | **$98.1** | **$162.1** |
| % Gross Margin | 39.4% | 55.1% | 63.2% | 70.2% |
| **Memo: % Combined GP** | | | | |
| Athelas | 24% | 61% | 60% | 65% |
| Commure | 76% | 39% | 40% | 35% |
| Athelas | ($27.0) | ($5.8) | $0.0 | $6.6 |
| Commure | ($42.2) | ($39.2) | ($28.2) | ($17.3) |
| **Combined EBITDA** | **($69.2)** | **($45.0)** | **($28.2)** | **($10.7)** |
| % EBITDA Margin | (101.0%) | (44.8%) | (18.2%) | (4.6%) |

The current relative valuation proposal for this merger is 60% Commure / 40% Athelas - this tracks with where both companies were from a relative topline scale perspective in 2022. However, Athelas, as mentioned previously, is both a faster growth and higher margin business such that the relative valuation using 2023 and even 2024 figures is closer to 50 % / 50% (note this does not reflect the proposed $250M of RSUs for the Athelas team). Therefore, we see the current valuation proposal as favorable for Commure on a relative value basis when focusing on forward ARR.

To justify a $6B combined EV in 2025 at an ~11.0-13.0x revenue multiple (see public comps below, which are trading ~9.0-10.0x 2024 revenue - we assume our combined entity would command a premium to that), we would have to believe the combined company generates ~$450-550M topline that year. This implies ~$220-320M of revenue ‘go-get' on top of the standalone businesses' combined revenue of ~$230M. We are excited about the additional sources of revenue that are unlocked as a result of this merger, including upsell/cross-sell synergies related to this merger and additional tuck-in acquisitions to further compound value of the Commure platform. The pro-forma entity would have $270M+ of cash on the balance sheet, providing the company with ample runway and a warchest for further M&A.

## Public Comps

**$ in millions**

| Company                   | Valuation TEV | Market Cap | Revenue 2022 | Revenue 2023 | Revenue 2024 | '22-'23 Growth | '23-'24 Growth | TEV / Revenue 2022 | TEV / Revenue 2023 | TEV / Revenue 2024 | Gross Profit 2022 | Gross Profit 2023 | Gross Profit 2024 | '22-'23 Growth | '23-'24 Growth | Margin 2022 | Margin 2023 | Margin 2024 | TEV/GP 2022 | TEV/GP 2023 | TEV/GP 2024 |
|:--------------------------|:--------------|:-----------|:-------------|:-------------|:-------------|:---------------|:---------------|:-------------------|:-------------------|:-------------------|:------------------|:------------------|:------------------|:---------------|:---------------|:------------|:------------|:------------|:------------|:------------|:------------|
| Definitive Healthcare Corp. | $1,719        | $1,312     | $221         | $252         | $295         | 14%            | 17%            | 7.8x               | 6.8x               | 5.8x               | $194              | $216              | $257              | 11%            | 19%            | 88%         | 86%         | 87%         | 8.9x        | 8.0x        | 6.7x        |
| Certara, Inc.             | $3,188        | $3,130     | $332         | $378         | $431         | 14%            | 14%            | 9.6x               | 8.4x               | 7.4x               | $201              | $240              | $275              | 20%            | 14%            | 61%         | 64%         | 64%         | 15.9x       | 13.3x       | 11.6x       |
| Doximity, Inc.            | $5,916        | $6,741     | $398         | $478         | $576         | 20%            | 21%            | 14.9x              | 12.4x              | 10.3x              | $358              | $428              | $511              | 20%            | 19%            | 90%         | 90%         | 89%         | 16.5x       | 13.8x       | 11.6x       |
| Veeva Systems Inc.        | $29,477       | $33,033    | $2,154       | $2,368       | $2,821       | 10%            | 19%            | 13.7x              | 12.4x              | 10.4x              | $1,607            | $1,721            | $2,080            | 7%             | 21%            | 75%         | 73%         | 74%         | 18.3x       | 17.1x       | 14.2x       |
| 25th percentile           |               |            |              |              |              | 13%            | 16%            | 9.2x               | 8.0x               | 7.0x               |                   |                   |                   | 10%            | 18%            | 71%         | 70%         | 71%         | 14.1x       | 11.9x       | 10.4x       |
| Median                    |               |            |              |              |              | 14%            | 18%            | 11.6x              | 10.4x              | 8.8x               |                   |                   |                   | 15%            | 19%            | 81%         | 79%         | 80%         | 16.2x       | 13.5x       | 11.6x       |
| 75th percentile           |               |            |              |              |              | 16%            | 20%            | 14.0x              | 12.4x              | 10.3x              |                   |                   |                   | 20%            | 20%            | 89%         | 87%         | 87%         | 17.0x       | 14.6x       | 12.2x       |

## Process from Here

1.  Begin to quantify value story to become a $500M revenue platform by 2025. Contemplated revenues include
    a.  Cross-sell synergies between Athelas and Commure (particularly commercializing Athelas' RCM SaaS modules to enterprise segment)
    b.  New products through value of combined technology stack (particularly leveraging CommureOS' interoperability layer to enable Athelas Insights, additional admin tooling, and efficiency of RCM offering)
    c.  Transformational M&A (e.g., expanding into VBC analytics and workflows through acquisition of population health platforms)
2.  Technology deep-dive with external consultant to begin to assess technology synergies
3.  Full-day diligence session to formulate a) scope of tech synergies, b) quantification of revenue synergies (both in terms of cross-sell and new products), c) go-forward organization, and d) the vision for pro-forma company
4.  Engage Big 4 Audit to better assess Athelas financials