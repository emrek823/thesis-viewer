---
source: notion
synced: 2026-04-01 13:07
status: 
notion_id: 332c0b14-1fd6-80e7-9a71-d7a2f4114707
---

# Hypothesis: XXX

*Healthcare risk is either mispriced or unpriced. We see opportunity for startups to build underwriting platforms that price risk more precisely and construct defensible moats as AI commoditizes other layers of the stack.*
---
**Healthcare risk is mispriced in different ways depending on who's doing the pricing — and in some cases, nobody's pricing the risk at all.**
PBMs pass pharmacy costs through to employers without guaranteeing anything; the employer absorbs all the volatility while the PBM keeps the spread between what it charges and what it pays. Carriers and health plans price at the group or demographic level when actual risk varies by individual member, drug, or physician. Actuarial benchmarks from consulting firms like Milliman (\$1B+ annual rev) lag reality by 12–18 months. ACOs and provider groups are taking downside risk with little actuarial infrastructure, yet make million-dollar decisions based on simple spreadsheet analyses. The opportunity differs in each case: make hidden costs visible, price at the right resolution, bring more real-time data, or introduce risk pricing where none exists.
This gap is not because incumbents can't build the technology — though that is true in some cases — but because they are not incentivized to do so. PBMs have the data to price at the drug level but won't, because the spread between what they charge plan sponsors and what they pay pharmacies *is* the margin, and transparent pricing would eliminate it. Carriers could price at the individual level, but their entire regulatory and capital structure — reserve calculations, community rating, MLR floors, reinsurance — is built around group-level pooling. ACOs and provider groups simply don't have actuaries; they are clinical organizations being asked to bear financial risk.
**Why now: tailwinds are converging to make this investable at scale.**
The mispricing problem described above isn't new. What's new is that market, policy, and technology forces are simultaneously accelerating — creating urgency for buyers, expanding the addressable market, and collapsing the cost of building the actuarial intelligence required to underwrite precisely.
<span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">Employer healthcare costs are rising at the fastest clip in 15 years — projections for 2026 range from </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[9%](https://www.businessgrouphealth.org/newsroom/news-and-press-releases/press-releases/2026-employer-health-care-strategy-survey)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> to </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[10%](https://www.ifebp.org/resources---news/news-and-regulatory-updates/press-room/press-releases/2025/08/14/employers-project-10--rise-in-health-care-costs-for-2026)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">, pushing </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[average costs above \$18,500 per employee](https://www.mercer.com/en-us/about/newsroom/employers-and-workers-face-affordability-crunch-as-health-insurnace-cost-is-expected-to-exceed-18500-per-employee-in-2026/)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> (62% higher than 2017), driven by structural inflators (GLP-1s, cancer costs, utilization normalization, provider consolidation) — and the pool of risk-bearing entities keeps expanding (</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[67% of covered workers](https://www.kff.org/health-costs/2025-employer-health-benefits-survey/)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> now in self-funded plans, </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[477 MSSP ACOs](https://www.cms.gov/medicare/payment/fee-for-service-providers/shared-savings-program-ssp-acos)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> managing 11.2M beneficiaries) while most lack actuarial infrastructure. On the policy side, CMS is compressing the timeline for ACOs to take downside risk — the </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[CY 2026 PFS final rule](https://www.cms.gov/medicare/payment/fee-for-service-providers/shared-savings-program-ssp-acos)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> caps one-sided risk at five years, down from seven — while </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[H.R. 1](https://www.kff.org/medicaid/medicaid-what-to-watch-in-2026/)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> cuts federal Medicaid funding by \~\$900B over 10 years (</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[7.5M projected to lose coverage](https://www.commonwealthfund.org/publications/issue-briefs/2025/jun/how-medicaid-snap-cutbacks-one-big-beautiful-bill-trigger-job-losses-states)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">), shifting cost and acuity risk onto commercial populations, and </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[MA reported its first collective underwriting loss](https://insurancenewsnet.com/innarticle/opportunities-and-challenges-exist-in-the-ma-market)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> in 2024 (89.9% loss ratio), forcing \~3M beneficiaries to find new plans — all of which creates new buyer segments that need underwriting infrastructure they don't have. Furthermore, the cost of AI inference is declining at </span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8">[\~10–200x per year](https://epoch.ai/data-insights/llm-inference-price-trends)</span><span discussion-urls="discussion://335c0b14-1fd6-8059-b1e3-001c998413d8"> depending on task — faster than compute during the PC revolution or bandwidth during the dotcom boom — meaning actuarial analysis that required a team of PhDs and six months of manual work can now run continuously at a fraction of the cost; claims can be re-priced in real time, not quarterly; and small teams can build actuarial engines that would have required an army of credentialed actuaries five years ago.</span>
**Startups can exploit this by pricing precisely, or by introducing guarantees where none exist.**
The old model across healthcare cost categories is relatively similar: use back-end optimization tools — step edits, care management, utilization review, prior authorization — to shave costs around the edges of a blunt incumbent price.
You're putting lipstick on a pig to do something that is less bad. 
We've reached an inflection point where that's not enough. The new model we're seeing in some pockets replaces the price entirely: guarantee a lower number upfront, bear the risk, and capture the spread.
To be clear, when we talk about underwriting and taking risk, it's much more than a VBC model with shared savings or downside risk for a primary care group. We're taking a broader view of "pricing risk" here. Pharmacy is a useful example because PBMs have no risk infrastructure today. Consider the three basic layers:
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/9652a084-ee9f-44b9-84d4-7ccbc428692b/c08a8ec8-02b1-4976-a094-4c12775da9cd/Screenshot_2026-03-31_at_10.25.30_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRM2CVK%2F20260401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260401T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7l7iMEKLQFVZn0KVayJ03AMqMQ0CoyEAnzX%2BHBDjLCAiEAwgkaQCUUXCk2u%2BFTVqOZE1x1KbIzKHeOaW6qzC2hsdsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDK784Nz9q3PrRQBZQyrcA%2FKq0WRFl8zxyHIB2w9ld2nJv6V0O7wUQt0ruUTDMKA4m87QLm%2B%2BWq6NG3nPVZ37kbaF6XUzgLKpYwSDo%2FPQwSECUQhpvjJKx9t2oBO9Rv0lhrRvI4QyRso%2BFiFGpVWgVceQ5UIB6hIGFCPsRYhvoAJj%2Fw6QOZm2hvvCT5%2BsYPffrdMTk75GfFZEsnAsYOLo%2BeviWCiZumYC78O8UDFz1NZ%2Bm%2BYQrPBu4Cva1gNZGVBHV%2B3KeJEDxEVOM9nQ1KoM7HgRB1WSYpHF2ZLXk8eOt1iN2Jri1rkG52Jkg9E7H7%2Fp96v1RkmEUt%2B1x2srUTsRDTHThv1JNUwjIwW0kW9I8JZhWiVhUSZgfE8tlPZAUOpBJxexlyDpMNBKV%2B5bE0Ko4hZ9Q6rr7AnHpycByuNmNlIFxwLJhqh6x9%2FgTpIpgx8fMCiiAMdN%2FE1PHwuFmJcrgKSkMy2CE%2FCFQycuZFY4evMC7Ny%2FFz57Io9NbKFexefdrsIsVJKP8WwI6YgJ8DmerH9%2FPiHHAREJje50YAz9f4vKYswj00L9npP87m%2BcRA61udYcgcrtbDychqza7IKeHmTTqhSlvZEbt0fjkohxJiqBH1Gx4xAtVwX9W9TpjLGl1nRC6xhzSQsyoZ7VMJWItc4GOqUBNChgyA%2BbeQf7ulxsRMn8pXLseyZy9g3zs2Zzy1Kc7SM5f4WUDj3QgG3W6zzfapxLY%2BZfZ3AJ2jlX%2BPRQRmNal%2FfNh7XfcxGWVlaMaPquSvOP685%2FAHrGn0sMw3iH%2Flv42KUBjRY3X%2BnoRRG%2FfiqgDkkumPm3qZLnod0C0qS4%2FrPVLuUWq%2FQ8vmilabq8m0DevOH4kOGlzBw48%2BnprYuu9SpQ%2F5%2Bm&X-Amz-Signature=4c54755b8d67cd40384dc3adc236b8e069517e94c38252c44222bed75dd2dbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
- [KFF, "2025 Employer Health Benefits Survey"](https://www.kff.org/health-costs/2025-employer-health-benefits-survey/) — self-funded plan prevalence, premium trends, GLP-1 cost impact.
- [Health Affairs Forefront, "Medicare ACOs In 2024"](https://www.healthaffairs.org/do/10.1377/forefront.20251105.540959/) (Nov. 2025) — PY 2024 MSSP results, ACPT headwinds, physician-led vs. hospital-led ACO performance.
- [CMS, Medicare Shared Savings Program](https://www.cms.gov/medicare/payment/fee-for-service-providers/shared-savings-program-ssp-acos) — program overview, participation data, 2026 rule changes.
- [Insurance News Net, "Opportunities and challenges exist in the MA market"](https://insurancenewsnet.com/innarticle/opportunities-and-challenges-exist-in-the-ma-market) (2026) — underwriting losses, declining star ratings, plan terminations.
- [IQVIA / AJHP, "National trends in prescription drug expenditures and projections for 2025"](https://pubmed.ncbi.nlm.nih.gov/40263109/) — \$805.9B total pharma spend in 2024.
- [Allied Market Research, "Stop Loss Insurance Market"](https://www.alliedmarketresearch.com/stop-loss-insurance-market-A325806) (Nov. 2025) — market sizing, growth projections.
- [Milliman, "Under pressure: ACPT pushing down on 2024 and 2025 MSSP starters"](https://www.milliman.com/en/insight/under-pressure-acpt-pushing-mssp-starters) (Nov. 2025) — ACO prospective trend methodology and benchmark headwinds.
- [McDermott+, "Value-based care update"](https://www.mcdermottplus.com/blog/regs-eggs/value-based-care-update-whats-on-the-docket-for-the-cms-innovation-center/) (Sept. 2025) — push toward mandatory downside risk in ACO models.
- [Carrum Health, "Doubles Covered Lives"](https://carrumhealth.com/carrum-health-doubles-growth/) (Oct. 2025) — RAND-validated outcomes, 6.7M covered lives.
- [Business Group on Health, "2026 Employer Health Care Strategy Survey"](https://www.businessgrouphealth.org/newsroom/news-and-press-releases/press-releases/2026-employer-health-care-strategy-survey) (Aug. 2025) — 9% median cost trend, pharmacy cost drivers.
- [Mercer, "Highest health benefit cost increase in 15 years"](https://www.mercer.com/en-us/insights/us-health-news/employers-prepare-for-the-highest-health-benefit-cost-increase-in-15-years/) (2025) — \$18,500+ per employee, non-traditional plan adoption.
- [PwC, "Medical cost trend: Behind the numbers 2026"](https://www.pwc.com/us/en/industries/health-industries/library/behind-the-numbers.html) — 8.5% group market trend, structural inflators, Medicaid cost-shift.
- [KFF, "Medicaid: What to Watch in 2026"](https://www.kff.org/medicaid/medicaid-what-to-watch-in-2026/) (Jan. 2026) — H.R. 1 implementation, work requirements, FMAP sunset.
- [Commonwealth Fund, "Medicaid, SNAP Cutbacks"](https://www.commonwealthfund.org/publications/issue-briefs/2025/jun/how-medicaid-snap-cutbacks-one-big-beautiful-bill-trigger-job-losses-states) (June 2025) — \$863B Medicaid cuts, 1.2M projected job losses.
- [Epoch AI, "LLM inference prices"](https://epoch.ai/data-insights/llm-inference-price-trends) (Mar. 2025) — 50x–200x annual price declines across benchmarks.
<empty-block/>
<empty-block/>
