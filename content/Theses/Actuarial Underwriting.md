---
source: notion
synced: 2026-04-02 15:29
status: Active
notion_id: 332c0b14-1fd6-80e7-9a71-d7a2f4114707
---

# Actuarial Underwriting

*Healthcare risk is either mispriced or unpriced. We see opportunity for startups to build underwriting platforms that price risk more precisely and construct defensible moats as AI commoditizes other layers of the stack.*
---
**Healthcare risk is mispriced in different ways depending on who's doing the pricing — and in some cases, nobody's pricing the risk at all.**
PBMs pass pharmacy costs through to employers without guaranteeing anything; the employer absorbs all the volatility while the PBM keeps the spread between what it charges and what it pays. Carriers and health plans price at the group or demographic level when actual risk varies by individual member, drug, or physician. Actuarial benchmarks from consulting firms like Milliman (\$1B+ annual rev) lag reality by 12–18 months. ACOs and provider groups are taking downside risk with little actuarial infrastructure, yet make million-dollar decisions based on simple spreadsheet analyses. The opportunity differs in each case: make hidden costs visible, price at the right resolution, bring more real-time data, or introduce risk pricing where none exists.
This gap is not because incumbents can't build the technology — though that is true in some cases — but because they are not incentivized to do so. PBMs have the data to price at the drug level but won't because the spread between what they charge plan sponsors and what they pay pharmacies *is* the margin, and transparent pricing would eliminate it. Carriers could price at the individual level, but their entire regulatory and capital structure — reserve calculations, community rating, MLR floors, reinsurance — is built around group-level pooling. ACOs and provider groups simply don't have actuaries; they are clinical organizations being asked to bear financial risk.
**Why now: tailwinds are converging to make this investable at scale.**
The mispricing problem described above isn't new. What's new is that market, policy, and technology forces are simultaneously accelerating — creating urgency for buyers, expanding the addressable market, and collapsing the cost of building the actuarial intelligence required to underwrite precisely.
<span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">Employer healthcare costs are rising at the fastest clip in 15 years — projections for 2026 range from </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[9%](https://www.businessgrouphealth.org/newsroom/news-and-press-releases/press-releases/2026-employer-health-care-strategy-survey)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> to </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[10%](https://www.ifebp.org/resources---news/news-and-regulatory-updates/press-room/press-releases/2025/08/14/employers-project-10--rise-in-health-care-costs-for-2026)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">, pushing </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[average costs above \$18,500 per employee](https://www.mercer.com/en-us/about/newsroom/employers-and-workers-face-affordability-crunch-as-health-insurnace-cost-is-expected-to-exceed-18500-per-employee-in-2026/)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> (62% higher than 2017), driven by structural inflators (GLP-1s, cancer costs, utilization normalization, provider consolidation) — and the pool of risk-bearing entities keeps expanding (</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[67% of covered workers](https://www.kff.org/health-costs/2025-employer-health-benefits-survey/)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> now in self-funded plans, </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[477 MSSP ACOs](https://www.cms.gov/medicare/payment/fee-for-service-providers/shared-savings-program-ssp-acos)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> managing 11.2M beneficiaries) while most lack actuarial infrastructure. On the policy side, CMS is compressing the timeline for ACOs to take downside risk — the </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[CY 2026 PFS final rule](https://www.cms.gov/medicare/payment/fee-for-service-providers/shared-savings-program-ssp-acos)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> caps one-sided risk at five years, down from seven — while </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[H.R. 1](https://www.kff.org/medicaid/medicaid-what-to-watch-in-2026/)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> cuts federal Medicaid funding by \~\$900B over 10 years (</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[7.5M projected to lose coverage](https://www.commonwealthfund.org/publications/issue-briefs/2025/jun/how-medicaid-snap-cutbacks-one-big-beautiful-bill-trigger-job-losses-states)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">), shifting cost and acuity risk onto commercial populations, and </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[MA reported its first collective underwriting loss](https://insurancenewsnet.com/innarticle/opportunities-and-challenges-exist-in-the-ma-market)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> in 2024 (89.9% loss ratio), forcing \~3M beneficiaries to find new plans — all of which creates new buyer segments that need underwriting infrastructure they don't have. Furthermore, the cost of AI inference is declining at </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[\~10–200x per year](https://epoch.ai/data-insights/llm-inference-price-trends)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> depending on task meaning actuarial analysis that required a team of PhDs and six months of manual work can now run continuously at a fraction of the cost; claims can be re-priced in real time, not quarterly; and small teams can build actuarial engines that would have required an army of credentialed actuaries five years ago.</span>
**Startups can exploit this by pricing precisely, or by introducing guarantees where none exist.**
The old model across healthcare cost categories is relatively similar: use back-end optimization tools — step edits, care management, utilization review, prior authorization — to shave costs around the edges of a blunt incumbent price.
You're putting lipstick on a pig to do something that is less bad. 
We've reached an inflection point where that's not enough. The new model we're seeing in some pockets replaces the price entirely: guarantee a lower number upfront, bear the risk, and capture the spread.
To be clear, when we talk about underwriting and taking risk, it's much more than a VBC model with shared savings or downside risk for a primary care group. We're taking a broader view of "pricing risk" here. Pharmacy is a useful example because PBMs have no risk infrastructure today. Consider the three basic layers:
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/9652a084-ee9f-44b9-84d4-7ccbc428692b/c08a8ec8-02b1-4976-a094-4c12775da9cd/Screenshot_2026-03-31_at_10.25.30_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGKNT6Y%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T192957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCshoPMsTGlepifjmzCnMWhHkZf4NXh0M%2F%2BPMuCpbjJcwIgRk8%2BNVi8XQcCHIDFRySN7SjEZPVobnuz9e%2Fff9uCTgAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCwh77cjawEYsG204ircA%2BKfnkxfwKvG8Ja%2BpCHa47tEUXDzcJMyS1K2aisP0Wl6FYSjt8y%2FgHgJjE9M143FKq%2FCCGrB6Mx7QjRMmvmMWhZy8rtY%2FohUlkW7OI6sKeD4v54UltD72t4wZavoAGgOq%2FD5mDRHU0Gdh6Ep%2FoYkTr05cL5Auf%2BilMoyhmkwDpg5acAwnosu%2FCwkJV3iuHyh0xrbK7zT2fywiiOrHepG9x2zeckHQVbU%2F2%2BNqL6wkwrgAuwOVVqfUspS0M0C%2BcdauBxRJmR9jVRaQnII018CCU%2BOS%2FS59m1rHxFUl1r8yIV45SLpvO1GxOY2bEEcnZcbycgUlPpbsLyGwLmc95%2FyKSWBqdaHW4u68mU9GYOo7DJK7xICdA3iRLteOCWhNJW9lxJMEMhQ%2BDYgF%2FnyVpFySGtEY5ennUnDkFOfH1BEmJynBdjeEhrVF5nBe6Z%2FmkD%2FwInwQ6qrIYqUtunpgbRCe85SXqcn6BAxYfauw2H5IDKqRDPecTmpNzchil0mTV28jMKJdbhbTwrWQKT2lZSQ4lXy1ASej3E8YikB5wpjCnDXYaVbM0wBpdaM8NGBECQrUt2jmCbbD9vTgHiKIIka5k%2ByiyjB%2Bex0qrjb2oHG6MBYNz2mYqqK%2BDxC4UJOMKrvus4GOqUBs%2Btjjb3r55hXrKmt%2BDObD84zTeGFIsGsMFSXUDo2h4sekCaqkeY92fGcbNZFzWoQMXsQbalajv5qoLbF9wkcoAhqXSK7EE2AIYYTkmxCEeDS01jrR%2F3vwbO442EG0m8n3%2BWwHBHKjQ%2BOR2V50yBRXSflxiQfsSGT2L5N8dIavGGY0FzN2lApwrrI%2F0tWseAq7ndGROaXSQKkygJVAijtfeqTUyEk&X-Amz-Signature=ec9e520c8d600e97e120055bf1bff5f811186bb0bd1e0a954860129903255b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
**Layer 1: Dashboards/Analytics.** Dashboards to upload claims, show trend, and run cost analyses. 
**Layer 2: Workflow Integration.** Step edits, formulary design, prior authorization, patient steerage. This is where you touch the operation and earn the data. Valuable, but increasingly commoditized by AI.
**Layer 3  Underwriting.** Guarantee a number — a fixed PMPM, a shared savings rate, a bundled episode price — and bear the risk. This is where the margin lives and where defensibility compounds.
Dashboards and workflow tools are getting cheaper to build and easier to replicate, which compresses the value of Layers 1 and 2 and pushes margin toward Layer 3. The underwriting layer can't be commoditized because it requires proprietary data, actuarial precision, and the willingness to stand behind your math.
The pattern repeats across verticals: 
<table header-row="true">
<tr>
<td>Category</td>
<td>Market</td>
<td>Old Model (Optimize Around Price)</td>
<td>New Model (Replace the Price)</td>
<td>Who</td>
</tr>
<tr>
<td>Pharmacy</td>
<td>[\~\$806B](https://pubmed.ncbi.nlm.nih.gov/40263109/) total US pharma spend (2024)</td>
<td>PBM passes cost through, no guarantee</td>
<td>Guarantee fixed PMPM at drug level</td>
<td>WriteWise</td>
</tr>
<tr>
<td>ACO Performance</td>
<td>[477 ACOs](https://www.cms.gov/medicare/payment/fee-for-service-providers/shared-savings-program-ssp-acos), 11.2M beneficiaries in MSSP</td>
<td>Care management bends curve</td>
<td>Actuarial math to guarantee downside risk</td>
<td>Sparx</td>
</tr>
<tr>
<td>Surgical Episodes</td>
<td>\~\$400B in US inpatient surgical spend</td>
<td>Prior auth, utilization review</td>
<td>Bundle episode, guarantee price</td>
<td>Carrum</td>
</tr>
<tr>
<td>Medical Malpractice</td>
<td>\$15B</td>
<td>Specialty + geography flat rate</td>
<td>Individual physician scoring via ML</td>
<td>Indigo</td>
</tr>
<tr>
<td>Stop-loss</td>
<td>[\$26.9B](https://www.alliedmarketresearch.com/stop-loss-insurance-market-A325806) in 2024 → projected \$113.5B by 2034</td>
<td>Group demographics</td>
<td>Member-level pricing</td>
<td>Greenfield</td>
</tr>
</table>
In our portfolio, [WriteWise](https://www.writewise.com/) reprices pharmacy claims at the individual drug level and guarantees employers a fixed PMPM. To do so, they assembled data that doesn't exist anywhere else — data PBMs won't share with each other, and which no single market participant can replicate. Outside the portfolio, [Sparx](https://usesparx.com/) underwrites ACO risk and has unlocked \$1B+ in reinsurance capacity by giving ACOs the actuarial confidence to take downside contracts. [Indigo](https://www.getindigo.com/) now [auto-underwrites 20% of malpractice submissions](https://crittendenmedical.com/indigo-reaches-20-ai-underwriting-milestone-in-medical-professional-liability/) through its proprietary AI platform, Lux, pre-scoring every US physician individually — compared to legacy carriers pricing all OBs in Florida at \~\$120K/year regardless of history.
The edge at these companies isn't an AI breakthrough. It's clever actuarial work, data aggregation earned through GTM focus, and doing things incumbents are structurally unwilling to do.
---
**The moats compound**
What makes this a compounding advantage rather than a one-time arbitrage is the flywheel between data and capacity:
- **Data:** Every claim and outcome feeds the pricing model. WriteWise gets more precise with every employer group; Sparx improves with every ACO performance year. No new entrant can replicate years of claims history on day one.
- **Capacity:** Operational execution produces the outcomes the model predicted, which validates the model, which earns reinsurance capacity, which lets you take on more risk.
Critically, operational execution *is* the underwriting edge. You can't just price risk — you have to deliver on the guarantee. [Carrum](https://carrumhealth.com/carrum-health-doubles-growth/) redirects up to 30% of members initially recommended for surgery to less invasive treatment options and reduces readmissions by up to 80% relative to the national average, [according to an independent RAND evaluation](https://carrumhealth.com/blog/quality-healthcare-patient-experience/). WriteWise routes patients to lower-net-cost drugs. The clinical operation reduces variance, which tightens the guarantee, which earns more capacity. Companies that take risk but can't execute operationally blow up on loss ratios.
***We'd love to chat with founders building these types of underwriting platforms or using this underwriting lens to re-wire financial flows in healthcare and life sciences.***
**Additional Reading**
- [MedPAC, "The Medicare Advantage Program: Status Report" (Mar. 2025)](https://www.medpac.gov/document/chapter-11-the-medicare-advantage-program-status-report-march-2025-report/)
- [SOA Research Institute, "Evaluating Risk Adjustment and Medicare Advantage" (Feb. 2025)](https://www.soa.org/research/topics/health-res-report-list/) 
- [Swiss Re, "An Expanded Role for AI in Life & Health Predictive Underwriting" (Feb. 2025)](https://www.swissre.com/reinsurance/insights/ai-predictive-underwriting-life-and-health.html) 
- [Milliman, "Under Pressure: ACPT Pushing Down on 2024 and 2025 MSSP Starters" (Nov. 2025)](https://www.milliman.com/en/insight/under-pressure-acpt-pushing-mssp-starters)
- [Health Affairs Forefront, "Medicare ACOs In 2024: Increased Participation and Evolving Policy Impacts" (Nov. 2025)](https://www.healthaffairs.org/do/10.1377/forefront.20251105.540959/)
- [SOA, "Reimagining Pharmacy Financing in the Commercial Space Using a Value-Based Reimbursement Model"](https://www.soa.org/research/topics/health-res-report-list/) 
- [Penn LDI / Health Affairs, "Future Bundled Payment Models Need To Engage Physician Group Practices" (Apr. 2024)](https://ldi.upenn.edu/our-work/research-updates/future-bundled-payment-models-need-to-engage-physician-group-practices/)
- [PwC Health Research Institute, "Medical Cost Trend: Behind the Numbers 2026"](https://www.pwc.com/us/en/industries/health-industries/library/behind-the-numbers.html)
- [DOL / Federal Register, "Improving Transparency Into Pharmacy Benefit Manager Fee Disclosure" (Jan. 2026)](https://www.federalregister.gov/documents/2026/01/30/2026-01907/improving-transparency-into-pharmacy-benefit-manager-fee-disclosure)
- [Drug Topics / PSG, "PBM Unbundling: New Pricing Models Create More Transparency" (Jan. 2026)](https://www.drugtopics.com/view/pbm-unbundling-new-pricing-models-create-more-transparency)
- [Paragon Institute, "Two Paths for Medicare's Future: Medicare Advantage and ACOs" (Jan. 2025)](https://paragoninstitute.org/medicare/two-paths-for-medicares-future-medicare-advantage-and-accountable-care-organizations/)
- [Fierce Healthcare, "2026 Outlook: The Domino Effect of Medicaid Cuts" (2026)](https://www.fiercehealthcare.com/payers/2026-outlook-domino-effect-medicaid-cuts-and-hidden-costs-healthcare)s
- [MedPAC, "Payment Basics: Accountable Care Organizations" (2025)](https://www.medpac.gov/wp-content/uploads/2024/10/MedPAC_Payment_Basics_25_ACOs_FINAL_SEC.pdf)
<empty-block/>
<empty-block/>
