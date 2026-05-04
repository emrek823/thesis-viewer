---
source: notion
synced: 2026-04-29 11:40
status: Drafts
notion_id: 33ac0b14-1fd6-8084-a907-e81acfa62044
---

# Safety Surveillance Infra

*Safety has been an afterthought in drug development; FDA is making it a differentiator. We see opportunity for startups to build federated, regulatory-grade safety infrastructure that goes beyond what Sentinel can operationally support — turning post-market data from a compliance cost into a strategic input pharma pays for.*
---
**Sentinel is the existing infrastructure, and it was built for a different era. Pharma can't query it, payers can't fully participate in it, and it can't see the channels FDA now regulates — and this is exactly when pharma's willingness to pay for safety data is inflecting upward.**
[FDA Sentinel](https://www.sentinelinitiative.org/) is the closest thing to a federated post-market safety platform — [541M cumulative patient identifiers](https://sentinelinitiative.org/about/key-database-statistics) on paper but only \~70M of a promised 100M lives operationally query-usable, batch-mode, claims-only, FDA-gated. Adjacent to it, the commercial pharmacovigilance stack — [Oracle Argus](https://www.oracle.com/health/argus-safety-suite/) (\~60% of top-20 pharma), [Veeva Vault Safety](https://www.veeva.com/products/vault-safety/), and Cognizant / Accenture / Wipro BPO labor — handles most of the [\$8-10B PV market](https://www.grandviewresearch.com/industry-analysis/pharmacovigilance-market) but is built for compliance. Underneath sits a smaller and more interesting [\$2-3B regulatory-grade safety data layer](https://www.grandviewresearch.com/industry-analysis/pharmacovigilance-market) pharma actually buys for lifecycle decisions: signal validation, epi, PMR/PMC execution, and brand differentiation. Today pharma "stumbles ass backward" into Sentinel queries with low hit rates from Carelon and Optum — the data exists in payer hands but there is no reliable way to query it on demand. That \$2-3B layer is the one inflecting from compliance to strategic — pharma is starting to pay for safety data the way it pays for clinical trial data.
**Why now: tailwinds are converging to make this investable at scale**
FDA is compressing pre-market evidence on multiple axes simultaneously. Makary and Prasad's [Feb 19, 2026 NEJM article](https://www.biopharmadive.com/news/fda-makary-prasad0one-pivotal-trial-nejm/812557/) ended the two-trial dogma — single pivotal trials are now the default for new drug approvals, including in psychiatry, immunology, and cardiology where two trials had been gospel since the 1960s. The [Commissioner's National Priority Voucher program](https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program) cut Otarmeni's review to [61 days after BLA filing](https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher), the fastest NME approval since 2002. The [biosimilar CES waiver Makary announced October 29, 2025](https://medcitynews.com/2025/10/fda-biosimilar-biologic-drug-comparative-effectiveness-study-clinical-trial-makary-hhs/) "shaves 3-4 years off the approval process" — his words. [FDA's December 2025 RWE final guidance](https://www.federalregister.gov/documents/2025/12/18/2025-23252/use-of-real-world-evidence-to-support-regulatory-decision-making-for-medical-devices-guidance-for) eliminated patient-level data submission, accepting summary-level evidence. And FDA is [phasing out animal testing for monoclonals](https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs) in favor of organ-on-chip, in silico, and organoid models.
At the same time, the US drug pipeline is being front-loaded with assets the FDA never watched develop. [31% of all molecules large pharma in-licensed in 2024 came from China](https://www.stifel.com/newsletters/investmentbanking/bal/marketing/healthcare/biopharma_timopler/2025/BiopharmaMarketUpdate_Outlook_2025.pdf) — up from 10-12% in 2020-22 — with [\$135.7B in 2025 out-licensing deals](https://www.scmp.com/business/china-business/article/3339011/chinese-drug-makers-strike-record-us136-billion-out-licensing-deals-2025) (a record) and [46% of new first-in-human starts in H1 2025 originating in Chinese biopharma](https://www.biopharmadive.com/news/china-biotech-drug-licensing-deals-pipeline/758283/). Chinese biotech runs Phase I locally in 30-50% less time and at lower cost, then licenses the asset to a US partner that runs the bridging trials. The post-market consequence is structural: more drugs, less FDA-monitored development history, accelerated pathways, and bridging-trial validation rather than de novo Phase III.
The post-market consequences are already landing. [23% of FDA-approved drugs trigger at least one post-market safety action](https://www.ajmc.com/view/postmarket-drug-safety-timelines-largely-unchanged-after-fda-amendments-act); [19% of accelerated-approval oncology indications get withdrawn](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11947834/); median time-to-withdrawal has compressed from 9.5 to 3.2 years; 75% of PMR/PMCs are submitted late. PMR feasibility is no longer an afterthought bolted onto approval — pharma is increasingly making Phase III go/no-go decisions partly on whether the post-marketing requirement can be reliably executed against existing data infrastructure. FDA itself admits the gap. [Makary's March 2026 AEMS announcement](https://www.biopharmadive.com/news/fda-adverse-event-monitoring-system-aems/814528/) called the existing FAERS/VAERS/CAERS stack "outdated and fragmented" with "blind spots in our postmarket surveillance"; the [Sentinel 3.0 procurement](https://www.populationmedicine.org/news-media/harvard-pilgrim-health-care-institute-funded-220-million-next-phase-fda-sentinel-system) (\$304M IDIQ) integrates AI/ML into the data platform for the first time; the [FIRE RFI](https://orangeslices.ai/fda-rfi-proposed-new-contracting-approach-for-sentinel-system-3-0-includes-multiple-award-idiq/) creates a direct VC-to-agency procurement vehicle; and [ICH E2D(R1)](https://www.federalregister.gov/documents/2026/03/04/2026-04252/e2dr1-postapproval-safety-data-definitions-and-standards-for-management-and-reporting-of-individual) brings social media and patient support programs under regulated AE sources for the first time.
**Startups can exploit this by building federated payer networks beyond Sentinel — with safety-only scope discipline**
**Layer 1 - AI-native ICSR processing.** Compresses the Cognizant/Accenture/Wipro BPO layer 5-50x but Oracle and Veeva will match on price. Compliance compression, not strategic differentiation. Table stakes.
**Layer 2 - Horizontal commercial RWE.** [Datavant/Aetion](https://www.datavant.com), [TriNetX](https://www.trinetx.com), and [Komodo](https://www.komodohealth.com) sell broad RWE for HEOR, marketing, and epi. Not safety-disciplined federated networks — FDA-grade safety queries still route through Sentinel.
**Layer 3 - Federated regulatory-grade safety networks.** This is where the margin lives. The emerging model is federated by design: payers expose claims in a federated environment (data does not move), and pharma pays for regulatory-grade queries with full provenance. Three constraints make it defensible — strictly federated architecture (payers reject centralization on contractual and governance grounds), safety-only scope discipline (pursuing HEOR loses payer participation), and PMR feasibility as the killer use case. Drugs are now being designed around whether the post-marketing requirement can be reliably executed; the company that makes PMR execution predictable becomes a toll booth on drug approvals.
A separate parallel wedge sits in the categories Sentinel structurally cannot observe — compounded peptides, 503A cash-pay, supplements, and post-E2D(R1) unstructured AE channels. [FAERS analysis n=81,078](https://pubmed.ncbi.nlm.nih.gov/40285721/) shows compounded GLP-1s have 48.9x the preparation error rate and 6.34x the suicidality odds of branded; zero public-startup competition. Different operating model (telehealth/503A pharmacy data, not payer claims), so a parallel wedge to Layer 3 rather than Layer 3 itself.
The pattern repeats across pharma's lifecycle data needs:
<table header-row="true">
<tr>
<td>Use Case</td>
<td>Buyer</td>
<td>Old Model (Compliance)</td>
<td>New Model (Strategic Asset)</td>
<td>Who</td>
</tr>
<tr>
<td>ICSR processing</td>
<td>Pharma safety ops</td>
<td>BPO + Oracle Argus</td>
<td>AI-native intake including social/PSP</td>
<td>Lydra/CurigenX, Alba, Graph AI, Selta Square</td>
</tr>
<tr>
<td>Active surveillance</td>
<td>FDA via SOC</td>
<td>Sentinel — claims-only, \~70M, batch</td>
<td>Federated payer network with revenue share</td>
<td>Harvard Pilgrim/Sentinel + stealth entrants</td>
</tr>
<tr>
<td>PMR / PMC execution</td>
<td>Pharma development</td>
<td>Manual Phase IV via CRO</td>
<td>Federated query against assembled payer network</td>
<td>Greenfield</td>
</tr>
<tr>
<td>Brand differentiation on safety</td>
<td>Pharma commercial</td>
<td>Not a buyer</td>
<td>Proactive surveillance as commercial asset</td>
<td>Greenfield</td>
</tr>
<tr>
<td>Compounded / 503A / unstructured AE</td>
<td>FDA + telehealth compounders</td>
<td>No mandatory reporting</td>
<td>Outcomes registry + LLM extraction</td>
<td>Parallel wedge</td>
</tr>
</table>
[Datavant](https://www.datavant.com) generates \$1B+ profitably as the horizontal RWE consolidator; [Komodo](https://www.komodohealth.com) at \$3.3B serves 19 of top 20 pharma; [TriNetX](https://www.trinetx.com) operates a 150M-EHR network — but none have the safety-only federated discipline pharma and FDA need for PMR-grade work. AI-native ICSR challengers ([Graph AI](https://www.graphai.com), [Lydra/CurigenX](https://www.ycombinator.com/companies/curigenx), [Alba](https://alba.health), [Selta Square](https://www.seltasquare.com)) compress the BPO layer but won't displace Oracle and Veeva. The Layer 3 builders we're tracking are stealth-stage and anchored on a top-5 US payer with revenue-share economics.
The edge isn't an AI breakthrough. It's federated architecture earned through years of payer trust, scope discipline that keeps the network coherent, FDA permissioning — and going where pharma is shifting its budget, from compliance to lifecycle.
---
**The moats compound**
- **Federated payer network.** Each new payer permanently expands the query-answerable universe. The right model shares methods, designs, results, and standards — not data — which is what payers will sign and FDA will accept.
- **Scope discipline.** Staying narrowly in safety preserves payer comfort; the moment the network extends into HEOR or marketing, payers govern heavily and walk. The counterintuitive moat — what you choose *not* to do.
- **Regulatory permissioning.** FDA data-partner status takes years to qualify. [Sentinel 3.0 Tier 7](https://orangeslices.ai/fda-rfi-proposed-new-contracting-approach-for-sentinel-system-3-0-includes-multiple-award-idiq/) and FIRE RFI are 2025-26 entry points, though FIRE as currently drafted favors large funds and needs reshaping for level-playing-field access.
Critically, federated reliability *is* the surveillance edge. The company that turns post-market data access from "boat sales" into "regular flights" — predictable cycles, regulatory-grade provenance, safety-only scope — captures a layer the horizontal RWE platforms structurally don't operate and the federal program structurally cannot serve. This is the underwriting analog from our [Actuarial Underwriting thesis](https://app.notion.com/p/332c0b141fd680e79a71d7a2f4114707) without the underwriting itself: nobody insures "no signal miss," but FDA-endorsed federated network status replaces the risk-pricing mechanism with a permissioning-plus-reliability mechanism that compounds the same way.
***We'd love to chat with founders building federated payer networks for regulatory-grade safety data — safety-only scope, anchored on PMR feasibility — or outcomes registries for the compounded peptide / 503A / unstructured AE categories Sentinel structurally can't observe.***
**Additional Reading**
- [BioPharma Dive, "FDA leaders say one pivotal trial — not two — should be default" (Feb. 2026)](https://www.biopharmadive.com/news/fda-makary-prasad0one-pivotal-trial-nejm/812557/)
- [FDA, "FDA Adverse Event Monitoring System (AEMS)" (Mar. 2026)](https://www.fda.gov/safety/fda-adverse-event-monitoring-system-aems)
- [Federal Register, "E2D(R1) Postapproval Safety Data" (Mar. 4, 2026)](https://www.federalregister.gov/documents/2026/03/04/2026-04252/e2dr1-postapproval-safety-data-definitions-and-standards-for-management-and-reporting-of-individual)
- [Federal Register, "Use of Real-World Evidence to Support Regulatory Decision Making" (Dec. 18, 2025)](https://www.federalregister.gov/documents/2025/12/18/2025-23252/use-of-real-world-evidence-to-support-regulatory-decision-making-for-medical-devices-guidance-for)
- [Harvard Pilgrim Health Care Institute, "\$220M for Next Phase of FDA Sentinel System" (Nov. 2025)](https://www.populationmedicine.org/news-media/harvard-pilgrim-health-care-institute-funded-220-million-next-phase-fda-sentinel-system)
- [BioPharma Dive, "China biotech licensing deals pipeline" (Aug. 2025)](https://www.biopharmadive.com/news/china-biotech-drug-licensing-deals-pipeline/758283/)
- [SCMP, "Chinese drug makers strike record US\$135.7B in out-licensing deals" (2025)](https://www.scmp.com/business/china-business/article/3339011/chinese-drug-makers-strike-record-us136-billion-out-licensing-deals-2025)
- [Stifel, "Biopharma 2025 Outlook"](https://www.stifel.com/newsletters/investmentbanking/bal/marketing/healthcare/biopharma_timopler/2025/BiopharmaMarketUpdate_Outlook_2025.pdf)
- [Jones Day, "FDA Proposes Removing Comparative Efficacy Studies for Biosimilars" (Nov. 2025)](https://www.jonesday.com/en/insights/2025/11/fda-proposes-removing-comparative-efficacy-studies-for-biosimilars)
- [AJMC, "Postmarket Drug Safety Timelines Largely Unchanged After FDAAA"](https://www.ajmc.com/view/postmarket-drug-safety-timelines-largely-unchanged-after-fda-amendments-act)
- [PubMed 40285721, "Compounded GLP-1 adverse events FAERS analysis (n=81,078)"](https://pubmed.ncbi.nlm.nih.gov/40285721/)
- [Sentinel Initiative, "Key Database Statistics"](https://sentinelinitiative.org/about/key-database-statistics)
- [FDA, "Commissioner's National Priority Voucher (CNPV) Pilot Program"](https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program)
<page url="https://app.notion.com/p/348c0b141fd68173a982d0f21358eb81">Research — Active Thesis Buildout — 2026-04-20</page>
<page url="https://app.notion.com/p/348c0b141fd68173880ada976edfd28d">Proposed Skeleton v1 — 2026-04-20</page>
<page url="https://app.notion.com/p/348c0b141fd68192b53fdbe0769aa102">Proposed Skeleton v2 — Sentinel's Blind Spots — 2026-04-20</page>
<page url="https://app.notion.com/p/348c0b141fd68146ace9cc8dd6c683ea">Original Draft (archived) — 2026-04-20</page>
<page url="https://app.notion.com/p/351c0b141fd6810faefac62cad1f0548">Rewrite v3 — Safety as Strategic Differentiator — 2026-04-29</page>

---
## Sub-Pages
### Research — Active Thesis Buildout — 2026-04-20
# Safety Surveillance Is Becoming a Differentiator, Not a Cost Center — And the Durable Moat Lives Where Sentinel Structurally Can't See
*Drug safety surveillance — pharmacovigilance, active surveillance, PMR/PMC execution, post-market RWE — is a \$8-10B market compounding to \$22-23B by 2034 as FDA accelerates approvals, China me-toos flood the pipeline, and ICH E2D(R1) expands regulated AE sources to social media and support programs. The opportunity is not to out-Oracle Oracle on ICSR processing — that's a price war. The opportunity is to become the FDA-endorsed data utility for the drug categories Sentinel can't observe: compounded peptides, 503A cash-pay, and unstructured AE channels.*
---
## Why your current draft isn't "active" yet
I benchmarked against your 6 active theses (Actuarial Underwriting, Hypothesis—Actuarial Infrastructure, Defensibility in Clinical AI, Payment Infrastructure, RWD Value Accrual, Healthcare Risk Mispriced). They share a 9-part skeleton; your Safety Surveillance draft has 2 of 9:
<table header-row="true" header-column="false">
<tr>
<td>#</td>
<td>Component</td>
<td>Active theses</td>
<td>Current draft</td>
</tr>
<tr>
<td>1</td>
<td>Italic one-sentence falsifiable thesis</td>
<td>✅ all</td>
<td>❌ missing</td>
</tr>
<tr>
<td>2</td>
<td>Problem frame (what's broken, why incumbents can't fix)</td>
<td>✅ all</td>
<td>⚠️ gestural</td>
</tr>
<tr>
<td>3</td>
<td>"Why Now" — 3-5 catalysts, each with \$/% and URL</td>
<td>✅ all</td>
<td>❌ zero numbers, zero citations</td>
</tr>
<tr>
<td>4</td>
<td>2-4 layer stack where value accrues</td>
<td>✅ all</td>
<td>❌ no stack</td>
</tr>
<tr>
<td>5</td>
<td>Pattern table (Category / Market / Old Model / New Model / Who)</td>
<td>✅ Actuarial</td>
<td>❌ missing</td>
</tr>
<tr>
<td>6</td>
<td>Named companies per layer with operator-validated metrics</td>
<td>✅ all</td>
<td>❌ zero companies named</td>
</tr>
<tr>
<td>7</td>
<td>Moat/flywheel mechanism</td>
<td>✅ all</td>
<td>❌ no moat theory</td>
</tr>
<tr>
<td>8</td>
<td>Closing CTA</td>
<td>✅ Actuarial</td>
<td>❌ missing</td>
</tr>
<tr>
<td>9</td>
<td>Additional Reading (10-15 cited)</td>
<td>✅ Actuarial</td>
<td>❌ missing</td>
</tr>
</table>
What "active" actually means for you: **every claim tied to a number + URL, every layer named with real companies, a falsifiable thesis statement, and a moat theory**. Draft currently fails all four.
---
## What the Why-Now section needs to look like
Your "FDA policy is shifting" and "competition from China" framing needs to become specific dated catalysts. Here are 8 that are verified in the vault and real:
1. **ICH E2D(R1) final guidance** — Federal Register **March 4, 2026**. Social media, patient support programs, and market research now regulated AE sources. Volume of unstructured data pharma must monitor expands by orders of magnitude. Oracle Argus was not built for Reddit. (\[\[Sources/Policy/Federal-Register/2026-03-04-E2D(R1)-Postapproval-Safety-Data\]\])
2. **FDA AEMS unification** — **March 12, 2026** Makary announcement. FAERS/VAERS/DAIIRS/CAERS merging into single dashboard; public admission that postmarket surveillance has "blind spots." (\[\[Sources/News/2026-03-14/fda-to-unify-agencys-fragmented-safety-surveillance-system\]\])
3. **Sentinel 3.0 contract** — awarded **November 2025**, 5-year IDIQ through 2030. Harvard Pilgrim up to \$220M; \$304-310M total procurement. AI/ML integrated into Tier 7 Data Platform for first time. (<span color="blue" underline="true">[synopsis](https://www.ostglobalsolutions.com/310m-fda-sentinel-contract-drops-soon-dont-miss-your-shot/)</span>)
4. **FDA RWE final guidance** — **December 2025**. FDA eliminated individual patient-level data requirement; summary-level RWE now accepted. Removes the hardest legal blocker for federated surveillance. (<span color="blue" underline="true">[FDA press release](https://www.fda.gov/news-events/press-announcements/fda-eliminates-major-barrier-using-real-world-evidence-drug-and-device-application-reviews)</span>)
5. **FDA FIRE RFI** — **January 2026**. FDA seeking VC-to-agency contracting vehicle. Removes procurement barrier for AI-native startups to sell directly to FDA. (\[\[Sources/Research/rfifda-26-132067\]\])
6. **CIOMS WG XIV AI-in-PV guidance** — **December 2025**. First international framework mandating human-in-the-loop / on-the-loop models. Explicitly notes "practically all rules-based opportunities exhausted."
7. **Compounded GLP-1 AE reporting gap** (live). FAERS n=81,078: **48.9x preparation error rate, 19x contamination rate, 6.34x suicidality odds, 3.39x cholecystitis odds** vs branded. 503A pharmacies have **no mandatory AE reporting.** 50+ FDA warning letters Sept 2025; Hims DOJ referral Feb 2026. (<span color="blue" underline="true">[PubMed 40285721](https://pubmed.ncbi.nlm.nih.gov/40285721/)</span>)
8. **RFK Jr. peptide reclassification** — **Feb 27, 2026**. 14 of 19 Category 2 peptides → Category 1. Expands compoundable peptide market with zero safety infrastructure. Biosimilar CES waiver (Sept 2025) adds 90% cost reduction / 70% faster approvals → even more post-market workload.
**Market sizing you should cite (triangulated across sources):**
- Pharmacovigilance total: **\$8-10B (2024) → \$22-23B by 2034** (Grand View, 10-13% CAGR)
- PV software: **\$1.91B (2025) → \$4.68B (2034)** (Precedence, 9.37%)
- PV outsourcing: **\$5.3B → \$12.1B** (8-9%)
- Case processing subsegment: \$2.5-3.1B
- Signal detection subsegment: \$3.2-4B (fastest growing, 6.6% CAGR)
- Sentinel scale: **541.5M unique patients, 138.7M active enrollees, 1.5B person-years, 27.7B medical encounters** — but SafetyNet founders say **\~70M lives actually query-usable**, a material gap
- PMR/PMC: 474 PMR/PMCs for 2013-16 approvals, **75% submitted late**; post-approval work = 23.7% of drug-development cost
---
## The seven-layer stack where value accrues
This is the structural move your draft is missing. Mirrors Actuarial (Dashboards → Workflow → Underwriting) and Payment Infra (RCM → Integrity → Claims Infra → Intelligence):
<table header-row="true" header-column="false">
<tr>
<td>Layer</td>
<td>What it is</td>
<td>Market</td>
<td>Companies</td>
<td>Moat</td>
</tr>
<tr>
<td>**1. AE Intake & Triage**</td>
<td>Multi-channel AE capture (email, call, Reddit, PSP). Replacing Cognizant/Accenture PV BPO.</td>
<td>\~\$5.75B → \$12.1B</td>
<td>**Lydra/CurigenX** (YC, your pipeline), **Alba** (your pipeline), YEZA.ai, Oracle Safety One Intake</td>
<td>Low — price war once Oracle matches</td>
</tr>
<tr>
<td>**2. Case Processing / ICSR**</td>
<td>Auto-drafting ICSRs, MedDRA coding, submission workflow</td>
<td>\~\$2.5-3.1B</td>
<td>Oracle Argus (\~60%), ArisGlobal LifeSphere (300+ customers), Veeva Vault Safety (mid-tier), **Graph AI** (\$3M Bessemer), Selta Square</td>
<td>Workflow + validation artifacts (Oracle/Veeva)</td>
</tr>
<tr>
<td>**3. Signal Detection & Intelligence**</td>
<td>Continuous signal detection on processed cases + RWD</td>
<td>\~\$3.2-4B (fastest 6.6%)</td>
<td>Clarivate OFF-X, IQVIA Vigilance+NVIDIA, ClinevoTech, **Alba** (expanding here)</td>
<td>**Compounding data moat** — the Layer-3 underwriting analog</td>
</tr>
<tr>
<td>**4. Active Surveillance Infra**</td>
<td>Sentinel-analog federated networks</td>
<td>\$304M Sentinel 3.0 + pharma-paid analogs</td>
<td>Harvard Pilgrim (Sentinel Ops), Datavant/Aetion (\$400M acq May 2025), TriNetX (150M EHRs), HealthCore, Komodo (325M patients, 19/20 pharma)</td>
<td>Regulatory (FDA data-partner status takes years)</td>
</tr>
<tr>
<td>**5. PMR/PMC Execution**</td>
<td>Workflow to execute 474+ PMR/PMCs</td>
<td>\~\$22B opportunity cost from late submissions</td>
<td>**No pure play.** Aetion, Flatiron (impaired), OM1, Century Health</td>
<td>Greenfield</td>
</tr>
<tr>
<td>**6. Compounded/Peptide/503A Registries**</td>
<td>Outcomes registries for drugs Sentinel can't see</td>
<td>Unsized; 455+ compounded semaglutide AEs in FAERS already</td>
<td>**Zero startups, zero pipeline.** HeadsUp Health (dashboards only), Finnrick (purity testing only)</td>
<td>**Greenfield + regulatory moat**</td>
</tr>
<tr>
<td>**7. RWE Horizontal Platforms**</td>
<td>Data assembly serving FDA + pharma</td>
<td>**\$4.7B → \$12B** (14.8%)</td>
<td>Datavant (\$1B+ rev, profitable), TriNetX, Komodo (\$3.3B val), Clarify (\$1.4B), IQVIA (\$15B), Flatiron</td>
<td>Data-originator relationships</td>
</tr>
</table>
**Pattern table (Actuarial-style) for the thesis itself:**
<table header-row="true" header-column="false">
<tr>
<td>Safety Modality</td>
<td>Market Size</td>
<td>Old Model</td>
<td>New Model</td>
<td>Who</td>
</tr>
<tr>
<td>Spontaneous AE reporting (FAERS)</td>
<td>\$8-10B PV total</td>
<td>BPO manual case processing, Argus structured ICSRs</td>
<td>AI-native intake including social/PSP, E2D(R1)-native</td>
<td>Lydra, Alba, Graph AI</td>
</tr>
<tr>
<td>Active surveillance</td>
<td>\$304M Sentinel 3.0</td>
<td>FDA Sentinel (claims only, 70M query-usable, batch)</td>
<td>Real-time federated networks including EHR/peptide/cash-pay</td>
<td>Datavant/Aetion, TriNetX</td>
</tr>
<tr>
<td>Post-market studies (PMR/PMC)</td>
<td>23.7% of drug dev cost; 75% late</td>
<td>Manual Phase IV studies, \$2-15K/patient</td>
<td>PMR-execution workflow + pre-assembled RWE</td>
<td>Greenfield</td>
</tr>
<tr>
<td>503A / compounded / peptide</td>
<td>Unsized, 48.9x error rate</td>
<td>No mandatory reporting</td>
<td>Compounded-outcomes registry with OMOP vocab extensions</td>
<td>Greenfield</td>
</tr>
<tr>
<td>Unstructured AE (social, PSP, market research)</td>
<td>New regulated surface (E2D R1)</td>
<td>Not monitored</td>
<td>LLM-based extraction + human validation</td>
<td>AI-native only</td>
</tr>
</table>
---
## Moat theory (the section your draft entirely lacks)
Your Defensibility in Clinical AI thesis identifies three moat types: data, workflow, regulatory. Your Actuarial thesis adds a fourth: underwriting guarantees. **Which apply here?**
- **Data moat — WEAK at the processing layer.** Pharma owns the processed cases, not the vendor. This is why Graph AI, Lydra, Alba cannot beat Oracle on accumulated case volume alone.
- **Data moat — STRONG at Layers 4/6.** Federated surveillance networks + compounded-outcomes registries compound: each new data partner permanently expands the query-answerable universe. This is the Datavant model.
- **Workflow moat — STRONG at Layer 2 for incumbents.** Oracle's 60% share and Veeva's platform bundling (Clinical + Quality + Safety) are the real reason AI-native startups face a two-front war. Validation documentation takes 12-24 months to recreate.
- **Regulatory moat — STRONGEST.** FDA data-partner status (Sentinel Tier 3), FIRE RFI direct-to-agency contracting, E2D(R1) compliance infrastructure — all require years of qualification and relationship. This is the closest analog to Actuarial's underwriting moat.
- **Underwriting-analog moat — DOES NOT APPLY.** No PV vendor can guarantee "we won't miss a signal and you won't get a black-box warning." The liability is uninsurable, the tail risk asymmetric. Regulatory permissioning replaces it.
**The flywheel:** Data partners → FDA-validated query execution → pharma pays to run regulatory-grade queries → revenue funds additional data partners (especially in Sentinel-invisible categories: compounded, peptide, cash-pay, social) → wider coverage earns preferred Sentinel 3.0 / AEMS integration → regulator-endorsed utility.
---
## Who wins by segment
- **Large pharma (top 20):** Oracle Argus holds via validation sunk cost. Likely outcome: Oracle acquires one AI-native (Graph AI or Selta Square) rather than lose share.
- **Mid-tier pharma (\$50-500M):** Veeva Vault Safety wins via Clinical/Quality/RIM bundling. This is the biggest blind spot in the in-progress AI-Native PV thesis.
- **Biotech / emerging:** AI-native startups (Lydra, Alba, Graph AI). No validation debt, price-sensitive, greenfield buyers.
- **503A compounders + non-traditional AE sources:** Greenfield. Neither Oracle nor Veeva built for this — the only Layer-6 play.
- **FDA itself:** Sentinel 3.0 incumbents (Harvard Pilgrim, Deloitte) + FIRE RFI startups. New VC-procurement vehicle is a wedge.
---
## Your pipeline exposure is in the wrong layer
You have two pipeline bets (Lydra/CurigenX, Alba) both at **Layer 1 intake**. That's the most crowded layer — Oracle, Veeva, ArisGlobal, Graph AI, Selta Square, and YEZA all compete there, and the BPO-replacement pitch is a price war that compresses 5-50x per the Hidden Labor framework.
Your zero-exposure layers are where the compounding moat actually lives:
- **Layer 4 (Active Surveillance Infra):** Datavant/Aetion, TriNetX, Komodo already occupy. Hard to enter but the Sentinel 3.0 + FIRE RFI + AEMS trifecta creates a direct-to-FDA wedge no AI-native has claimed yet.
- **Layer 5 (PMR/PMC Execution):** 75% late submission rate and \$22B opportunity cost; no dedicated workflow vendor.
- **Layer 6 (Compounded/Peptide/503A):** Zero public startups. Your March 11 peptide research (\[\[Sources/LLM-Chats/2026-03-11-peptide-safety-platform-what-to-actually-build\]\]) already laid out the architecture — Sentinel/PCORnet/OHDSI/TriNetX as templates, OMOP vocabulary extensions for compounded NDCs, FDA 2025 RWE guidance removing the legal blocker. **This is the company you should be sourcing for.**
---
## Contradictions & Open Questions
1. **"Private Sentinel" is partly a metaphor, not a greenfield wedge.** Datavant/Aetion, TriNetX, Komodo already run federated RWE at scale. Your NASA/SpaceX framing overstates how empty the field is. The genuinely unoccupied wedge is the subset of drugs Sentinel structurally can't see (compounded, peptide, cash-pay, supplements).
2. **AI accuracy gap collides with E2D(R1) expansion.** Production ADE extraction sits at 0.52-0.74 F1 (Pfizer vendor POC) vs. the 0.89-0.97 benchmark. You cannot process Reddit at 0.6 F1 for regulatory submission — yet E2D(R1) now mandates pharma monitor Reddit. Who closes the gap first?
3. **Hidden Labor compression cuts both ways.** If PV BPO is 80%+ labor, AI compression is 5-50x not 50-70%. BPOs collapse more violently, but startup take-rate per customer also compresses — the venture math gets worse at Layer 1, not better. Reinforces the case for moving up-stack.
4. **China me-too volume not located.** FDA ANDA aggregation by country-of-origin not public. Would firm up the "China me-too drives PMR demand" argument.
5. **Underwriting-analog doesn't apply** — unlike WriteWise/Sparx/Indigo, nobody underwrites "no signal miss." Regulatory moat replaces it, but it's permissioning not risk-pricing. Worth being explicit about this in the thesis.
---
## Recommended thesis structure (draft outline)
Replace the current 22 lines with this skeleton, borrowing the Actuarial Underwriting template:
1. **Italic thesis statement** (the one I wrote at the top of this doc, or a sharper version)
2. **Problem frame** — Safety as historical cost center; pharma unincentivized; Sentinel is claims-only; 503A/compounded/cash-pay invisible
3. **Why Now** — 8 catalysts above with citations
4. **The 7-layer stack** — table above
5. **Pattern table** — Spontaneous / Active / PMR-PMC / 503A / Unstructured
6. **Moat theory** — data (at Layers 4/6), workflow (incumbent wall at Layer 2), regulatory (strongest), no underwriting analog
7. **Who wins by segment** — top 20 / mid-tier / biotech / 503A / FDA
8. **CTA** — "We'd love to chat with founders building FDA-adjacent surveillance networks or compounded/peptide outcomes registries where Sentinel is structurally blind"
9. **Additional Reading** — 10-15 sources (FDA Sentinel, CIOMS WG XIV, ICH E2D R1, Paragon Institute postmarket piece, Grand View / Precedence, Datavant/Aetion press)
---
## Recommendations
1. **Sharpen the thesis statement** from "safety is becoming a differentiator" (true but not falsifiable) to something like: *"FDA-adjacent federated surveillance networks covering drugs Sentinel can't observe (compounded, peptide, cash-pay, unstructured AE channels) will become a regulator-endorsed utility, capturing value previously locked in Oracle Argus workflow moats and Cognizant BPO labor arbitrage."* That's falsifiable — if Oracle acquires the winner or if Sentinel expands scope to absorb the gap, the thesis fails.
2. **Move pipeline sourcing up-stack.** Lydra/Alba are Layer 1 bets. Source aggressively for Layer 6 (compounded/peptide outcomes registry — your March 11 research is the build spec) and Layer 4 (a FIRE-RFI-native company selling to FDA). Layer 5 (PMR/PMC execution workflow) is the cleanest white-space if someone with pharma ops experience shows up.
3. **Address the Veeva Vault Safety blind spot** in both the Safety Surveillance thesis and the in-progress AI-Native PV thesis. Right now both treat Oracle as the only incumbent. Veeva is the mid-market winner by default.
4. **Fix the typos and incomplete sentences** before promoting: "chagning", "relativelt", "thoguht", "efficiacy", "progarm", "privated", "obversational", "We need ways to ___".
**Bull case:** E2D(R1) volume, AEMS unification, FIRE RFI, and RWE guidance compound into a multi-year regulatory forcing function. Compounded GLP-1 AE crisis triggers legislation requiring 503A reporting. A Layer 6 company hits 2-5M covered peptide users and becomes an FDA-endorsed data partner. Datavant IPOs at \$5-10B and validates the Layer 4/7 category.
**Bear case:** Oracle acquires Graph AI + Veeva ships Vault Safety AI Agents on schedule and mid-tier wedge closes. AI accuracy doesn't clear 0.8 F1 for regulated PV and E2D(R1) compliance stays BPO-heavy. RFK Jr. policy reversal re-classifies peptides back to Category 2, evaporating Layer 6 TAM before a startup can scale. 503A political fight drags on — Congress fails to mandate AE reporting and the registry has no regulatory tailwind.
---
## Search stats
- 5 parallel research agents (Opus)
- 18 vault files read; 15 web sources fetched
- Vault locations: Theses/ (6 active + 8 in-progress), Sources/LLM-Chats/ (6 prior research files), Sources/Pipeline-Deals/ (Alba, Curigenx), Sources/Markets/Life Sciences/, Sources/Market-Research-PDFs/ (Sentinel RFI, synopsis)

---
### Proposed Skeleton v1 — 2026-04-20
*Safety has historically been a cost center for pharma. As FDA speeds up approvals and China me-toos flood the pipeline, safety becomes a differentiator — and the real opportunity is to rebuild the post-market surveillance stack for the drug categories Sentinel can't see.*
## Overview
Safety has been an afterthought at pharma. Pharmacovigilance is an \$8-10B market growing to \$22-23B by 2034, but most of it is BPO labor arbitrage (Cognizant, Accenture, Wipro) feeding structured ICSRs into Oracle Argus. This works when drugs are well-characterized and the population is insured, NDC-coded, and observable via claims.
That's breaking. FDA is compressing approval timelines, ICH E2D(R1) (March 2026) now pulls social media and patient support programs into regulated AE sources, and a flood of China-originated me-toos means we'll increasingly need to understand how new drugs actually behave in the real world — fast. At the same time, compounded peptides, 503A cash-pay drugs, and supplements sit in a blind spot where Sentinel has no NDC to query, no claim to process, and no mandatory AE reporting to pull from.
The FDA Sentinel program is the backbone of active surveillance today — 541M patient records on paper, but only \~70M actually query-usable, batch-mode, claims-only, and FDA-gated. It works the way government infrastructure works. What's missing is a SpaceX to its NASA: a commercial, real-time, cross-source surveillance utility that covers the drugs and channels Sentinel structurally can't.
## What This Means Going Forward
1. **BPO replacement is a price war, not a thesis.** AI-native intake (Lydra, Alba, Graph AI, Selta Square) is coming for the Cognizant/Accenture pharmacovigilance BPO layer — but Oracle and Veeva Vault Safety will eventually match on price and keep top-20 pharma. The durable value is up-stack.
2. **Private Sentinel is the infrastructure wedge.** Datavant/Aetion (\$400M acquisition, May 2025), TriNetX (150M EHRs), and Komodo (325M patients) are already building regulatory-grade RWE networks FDA recognizes. The moat is data-partner status + FDA qualification, which compounds — each new partner permanently expands the query-answerable universe.
3. **Peptides and 503A compounded drugs are the greenfield.** No NDC, no claim, no mandatory reporting. FAERS shows compounded GLP-1s have 48.9x the preparation error rate and 6.34x the suicidality odds of branded. RFK Jr. just reclassified 14 of 19 Category 2 peptides to Category 1 (Feb 2026) — a fast-growing category of drug with zero safety infrastructure. Someone will build the outcomes registry here, and they'll own a data asset Sentinel structurally can't replicate.
4. **PMR/PMC execution is an unglamorous but real gap.** 474 PMR/PMCs were issued for drugs approved 2013-2016; 75% submitted late. Post-approval work is \~24% of total drug development cost. No dedicated workflow vendor owns this.
The convergence thesis: the winner owns the FDA-endorsed data network for surveillance on drugs FDA currently can't observe — compounded, peptide, cash-pay, and unstructured AE channels — and layers signal detection on top once the underlying data moat compounds. We'd love to chat with founders building in any of these layers.

---
### Proposed Skeleton v2 — Sentinel's Blind Spots — 2026-04-20
*Safety surveillance is becoming a differentiator — but not the way most people think. The durable value isn't in out-Oracling Oracle on ICSR processing (that's a price war). It's in becoming the FDA-endorsed data utility for the drugs Sentinel structurally cannot see.*
## Overview
Safety has been an afterthought at pharma. Pharmacovigilance is an \$8-10B market compounding to \$22-23B by 2034, but most of it is BPO labor arbitrage (Cognizant, Accenture, Wipro) feeding structured ICSRs into Oracle Argus. This works when drugs are well-characterized and patients are insured, NDC-coded, and observable via claims.
That's breaking. FDA is compressing approval timelines, China me-toos flood the pipeline, ICH E2D(R1) (March 4, 2026) pulls social media and patient support programs into regulated AE sources, and compounded peptides, 503A cash-pay drugs, and supplements sit in a blind spot where Sentinel has no NDC to query, no claim to process, and no mandatory AE reporting to pull from. Sentinel itself covers 541M patient records on paper — SafetyNet founders estimate \~70M are actually query-usable — and is batch-mode, claims-only, and FDA-gated. What's missing is a SpaceX to Sentinel's NASA: a commercial, real-time, cross-source surveillance utility that covers the drugs and channels Sentinel structurally can't.
## What This Means Going Forward
1. **ICSR automation is a price war worth a specific sliver.** Case processing is a \$2.5-3.1B subsegment; AI-native intake (Alba, Lydra/CurigenX, Graph AI, Selta Square) is coming for the \$5.75B Cognizant/Accenture BPO layer. Oracle and Veeva Vault Safety will match on price and keep top-20 pharma. Hidden Labor compression is 5-50x — BPOs collapse violently but startup take-rates compress too. Real live opportunities, capped moat.
2. **Active surveillance is largely captured.** Datavant/Aetion (\$400M May 2025), TriNetX (150M EHRs), and Komodo (325M patients) already run regulatory-grade federated RWE at scale. "Private Sentinel" as a category oversells the greenfield. The narrow remaining wedge: FIRE RFI (Jan 2026) opens direct VC-to-FDA procurement — a direct-to-agency company to build here, but not a second Datavant.
3. **The Sentinel Blind Zone is the real greenfield.** Compounded peptides, 503A cash-pay drugs, supplements, and (post ICH E2D R1) social/PSP AE channels are regulated surfaces Sentinel structurally cannot observe — no NDC, no claim, no mandatory reporting. RFK Jr. reclassified 14 of 19 Category 2 peptides to Category 1 (Feb 27, 2026), expanding the compoundable market with zero safety infra. FAERS shows compounded GLP-1s have 48.9x the preparation error rate and 6.34x the suicidality odds of branded. The only layer with zero public startup competition AND a live regulatory forcing function.
4. **PMR/PMC execution is the unglamorous workflow gap.** 474 PMR/PMCs issued for drugs approved 2013-16; 75% submitted late; post-approval work is \~24% of drug-development cost. No dedicated workflow vendor. PMR feasibility is increasingly a Phase III go/no-go gate.
## The Company We Want To Back
**"The Datavant of compounded peptides" / "The Flatiron of 503A outcomes."** A federated outcomes registry covering compounded + peptide + 503A cash-pay drugs, mapped to OMOP with custom vocabulary extensions for non-NDC formulations. Free dashboard + AE capture workflow to telehealth compounders (Hims-tier down to 503A pharmacies) → give-to-get data rights → summary-level evidence licensing to FDA (via FIRE RFI) and branded pharma running RWE on their molecules' shadow market. Each new pharmacy permanently expands a query-answerable universe Sentinel cannot replicate. Regulatory moat is FDA data-partner status + E2D(R1) compliance + OMOP vocabulary extensions becoming de facto standard.
## Moat Theory
Safety surveillance moats are regulatory-permissioning moats, not software moats — and the permissioning goes to whoever owns the data FDA needs but cannot legally pull itself. Data moats are weak at Layer 2 (pharma owns cases). Workflow moats are strong for Oracle and Veeva. Regulatory moats are strongest — FDA data-partner status, FIRE RFI direct procurement, E2D(R1) compliance infra. The underwriting-guarantee analog from Actuarial does NOT apply: nobody insures "no signal miss"; regulatory permissioning replaces it.
## Bull / Bear
**Bull:** ICH E2D(R1) + AEMS + FIRE RFI + RWE guidance compound into a multi-year forcing function. Compounded GLP-1 AE crisis triggers federal 503A reporting mandate. A Layer-6 company hits 2-5M covered peptide users and becomes an FDA data partner. Datavant IPOs at \$5-10B and validates the category.
**Bear:** Oracle acquires Graph AI + Veeva ships Vault Safety AI Agents on schedule → mid-market closes. AI accuracy stays sub-0.8 F1 → E2D(R1) compliance stays BPO-heavy. RFK reverses peptide policy → Layer 6 TAM evaporates. 503A reporting mandate stalls in Congress.
## CTA
We'd love to chat with founders building federated outcomes registries for drug categories Sentinel structurally can't see — compounded peptides, 503A cash-pay, supplements, unstructured AE channels — or direct-to-FDA platforms leveraging the new FIRE procurement vehicle.

---
### Original Draft (archived) — 2026-04-20
*Archived original rough draft — before v3 rewrite on 2026-04-20.*
---
# Safety Surveillance Infra
FDA policy is shifting to expedite drug development in the wake of competition from China and new questions are being asked about the FDA's role with peptides. There are opportunities to leverage frameworks and things the FDA already does to drive innovation while keeping patients safe. A role, despite the recent pushback, the FDA has done relatively well over the last few decades.
**MARKET OVERVIEW**
Safety (compared to anything else around sales, RWD proving efficacy, clinical trial recruitment) has often been a cost center and an afterthought for pharma. After all, why would pharma want to bring more attention to the things that go wrong with their drugs? There are things like pharmacovigilance (\$1B-\$2B market; case reports on claims or EHR data) or post-marketing requirements and post-marketing commitments (PMRs or PMCs) that are observational studies that pharma does for pregnant women or children after the trial.
We think this is changing and safety will become more of a differentiator. Conceptually, we think this has to occur as the FDA pushes for more speed. On a more micro level, assume we have more "me-too" drugs from China. We need to understand how these work in the real-world! This ultimately starts with safety.
How did vaccines work? How does this happen today. We have the Sentinel program. What is it? Why doesn't it work?
**GOING FORWARD**
We need to build on top of the Sentinel program.
- FDA Sentinel program should be privatized (NASA vs. SpaceX)
- Peptides open up opportunities to expand things the FDA already does
- RWD observational studies

---
### Rewrite v3 — Safety as Strategic Differentiator — 2026-04-29
# Safety Surveillance Infrastructure
*Pharma safety has been a cost center because pre-market evidence was thick — three trials, decades of FDA-monitored development, claims data sufficient. That world is ending. FDA is shipping one-pivotal-trial defaults, 1-2 month review lanes, biosimilar CES waivers that "shave 3-4 years off the approval process," and absorbing a flood of Chinese-origin assets the agency never watched develop. The post-market burden is compounding faster than legacy infrastructure can absorb it, and the durable winner will be a commercial Sentinel-analog — covering the drugs and channels Sentinel structurally cannot see — that becomes the FDA-endorsed data utility for the next era of drug regulation.*
---
**Safety has been a cost center because pre-market evidence was thick. That's collapsing — and the companies that win the next decade will be the ones that build (or buy) safety infrastructure as a strategic asset, not as a compliance line item.** Pharmacovigilance is an <span color="blue" underline="true">[\$8-10B market growing to \$22-23B by 2034](https://www.grandviewresearch.com/industry-analysis/pharmacovigilance-market)</span> — but most of it is BPO labor arbitrage (Cognizant, Accenture, Wipro) feeding structured ICSRs into Oracle Argus, which holds \~60% share of top-20 pharma. That model worked when drugs were well-characterized through three randomized trials, patients were insured and NDC-coded, and the AE surface was call centers and claims. It was built for a world where pre-market evidence was the moat and post-market surveillance was a compliance afterthought. That world is ending in a 12-month window.
**Why now: pre-market evidence is collapsing on multiple axes simultaneously.** Makary and Prasad's <span color="blue" underline="true">[Feb 19, 2026 NEJM article](https://www.biopharmadive.com/news/fda-makary-prasad0one-pivotal-trial-nejm/812557/)</span> ended the "two-trial dogma" — single pivotal trials are now the default for new drug approvals, including in psychiatry, immunology, and cardiology where two trials had been gospel since the 1960s. The <span color="blue" underline="true">[Commissioner's National Priority Voucher (CNPV) program](https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program)</span> compresses review from 10-12 months to 1-2 months — Otarmeni was <span color="blue" underline="true">[approved 61 days after BLA filing on April 23, 2026](https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher)</span>, the fastest NME approval since 2002. The biosimilar <span color="blue" underline="true">[comparative efficacy study waiver Makary announced October 29, 2025](https://medcitynews.com/2025/10/fda-biosimilar-biologic-drug-comparative-effectiveness-study-clinical-trial-makary-hhs/)</span> "shaves 3-4 years off the approval process" — his words. <span color="blue" underline="true">[FDA's December 2025 RWE final guidance](https://www.federalregister.gov/documents/2025/12/18/2025-23252/use-of-real-world-evidence-to-support-regulatory-decision-making-for-medical-devices-guidance-for)</span> eliminated patient-level data submission; summary-level evidence is now sufficient. FDA is <span color="blue" underline="true">[phasing out animal testing for monoclonals](https://www.fda.gov/news-events/press-announcements/fda-announces-plan-phase-out-animal-testing-requirement-monoclonal-antibodies-and-other-drugs)</span> in favor of New Approach Methodologies (organ-on-chip, in silico). And <span color="blue" underline="true">[31% of all molecules large pharma in-licensed in 2024 came from China](https://www.stifel.com/newsletters/investmentbanking/bal/marketing/healthcare/biopharma_timopler/2025/BiopharmaMarketUpdate_Outlook_2025.pdf)</span> — up from 10-12% in 2020-22 — with <span color="blue" underline="true">[\$135.7B in 2025 China out-licensing deals](https://www.scmp.com/business/china-business/article/3339011/chinese-drug-makers-strike-record-us136-billion-out-licensing-deals-2025)</span> and <span color="blue" underline="true">[46% of new first-in-human starts in H1 2025 originating in Chinese biopharma](https://www.biopharmadive.com/news/china-biotech-drug-licensing-deals-pipeline/758283/)</span>. These are drugs FDA never watched develop from molecule design through Phase I, validated only via post-hoc bridging trials. Meanwhile post-market consequences compound: <span color="blue" underline="true">[23% of FDA-approved drugs trigger at least one post-market safety action](https://www.ajmc.com/view/postmarket-drug-safety-timelines-largely-unchanged-after-fda-amendments-act)</span>; <span color="blue" underline="true">[19% of accelerated-approval oncology indications get withdrawn](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11947834/)</span>; and median time-to-withdrawal has compressed from 9.5 to 3.2 years. FDA itself admits the gap. <span color="blue" underline="true">[Makary's March 12, 2026 AEMS announcement](https://www.biopharmadive.com/news/fda-adverse-event-monitoring-system-aems/814528/)</span> called the existing FAERS/VAERS/CAERS stack "outdated and fragmented" with "blind spots in our postmarket surveillance"; the <span color="blue" underline="true">[Sentinel 3.0 procurement](https://www.populationmedicine.org/news-media/harvard-pilgrim-health-care-institute-funded-220-million-next-phase-fda-sentinel-system)</span> (\$304M IDIQ, \$220M to Harvard Pilgrim, 5-year through 2030) integrates AI/ML into the data platform for the first time; and the <span color="blue" underline="true">[FIRE RFI](https://orangeslices.ai/fda-rfi-proposed-new-contracting-approach-for-sentinel-system-3-0-includes-multiple-award-idiq/)</span> creates a direct VC-to-agency procurement vehicle. <span color="blue" underline="true">[ICH E2D(R1)](https://www.federalregister.gov/documents/2026/03/04/2026-04252/e2dr1-postapproval-safety-data-definitions-and-standards-for-management-and-reporting-of-individual)</span> (Federal Register, March 4, 2026) brings social media, patient support programs, and market research under regulated AE sources for the first time — Oracle Argus was not built for Reddit.
**Startups can exploit this by building the commercial layer on top of Sentinel — not replacing it.** Sentinel is genuinely NASA-like: it sets the standards via the <span color="blue" underline="true">[Sentinel Common Data Model](https://www.sentinelinitiative.org/methods-data-tools/sentinel-common-data-model/sentinel-common-data-model)</span>, Harvard Pilgrim's 11-year operational role is government-style infrastructure stewardship, and its <span color="blue" underline="true">[541M cumulative patient identifiers / 138.7M active enrollees / 27.7B medical encounters](https://sentinelinitiative.org/about/key-database-statistics)</span> is a research-grade footprint nothing private will match. But Sentinel only see drugs that have an NDC, that someone billed insurance for, in batch — and only \~70M lives are operationally query-able in any given year. It cannot see the compounded peptide your patient bought cash from a 503A pharmacy, the supplement she's stacking, or the suicidality post she made on Reddit, even though FDA now regulates all three. Three layers of value accrue on top:
**Layer 1: AI-native ICSR processing.** Compressing the \$5.75B Cognizant/Accenture BPO layer 5-50x via LLM-based intake, MedDRA coding, and submission workflow. Real near-term revenue, capped moat — Oracle and Veeva will match on price and keep top-20 pharma via validation sunk cost (12-24 months to recreate). This is table stakes.
**Layer 2: Active surveillance infrastructure.** Federated regulatory-grade RWE networks pharma can buy directly. <span color="blue" underline="true">[Datavant](https://www.datavant.com)</span>/Aetion (<span color="blue" underline="true">[\$400M acquisition, May 2025](https://www.aetion.com/news/datavant-to-acquire-aetion)</span>), <span color="blue" underline="true">[TriNetX](https://www.trinetx.com)</span> (150M EHRs), and <span color="blue" underline="true">[Komodo Health](https://www.komodohealth.com)</span> (325M patients, 19/20 top pharma, \$3.3B valuation) already run this at scale. They are the de facto private analog to Sentinel on claims and EHR — but they sit inside Sentinel's envelope. The narrow remaining wedge is direct-to-FDA via the FIRE RFI vehicle.
**Layer 3: The Sentinel Blind Zone — and this is where the margin lives.** Compounded peptides, 503A cash-pay drugs, supplements, and (post-E2D(R1)) unstructured social/PSP/market-research AE channels. There is no NDC, no claim, no mandatory reporting. There is also zero public-startup competition and a live regulatory forcing function. RFK Jr. reclassified <span color="blue" underline="true">[14 of 19 Category 2 peptides to Category 1 on Feb 27, 2026](https://www.fda.gov/news-events/press-announcements)</span>, expanding the compoundable market with zero safety infrastructure. The signal in existing data is already loud: <span color="blue" underline="true">[FAERS analysis n=81,078](https://pubmed.ncbi.nlm.nih.gov/40285721/)</span> shows compounded GLP-1s have **48.9x the preparation error rate, 19x the contamination rate, 6.34x the suicidality odds, and 3.39x the cholecystitis odds of branded** — and Sentinel had no way to detect any of it because compounded sema/tirz aren't NDC-coded and 503A pharmacies have no mandatory reporting.
The pattern repeats across modalities:
<table header-row="true" header-column="false">
<tr>
<td>Safety Modality</td>
<td>Market Size</td>
<td>Old Model</td>
<td>New Model</td>
<td>Who</td>
</tr>
<tr>
<td>**Spontaneous AE (FAERS)**</td>
<td>\$8-10B PV total</td>
<td>BPO ICSR processing → Oracle Argus</td>
<td>AI-native intake including social/PSP, E2D(R1)-native</td>
<td>Lydra/CurigenX, Alba, Graph AI (\$3M Bessemer), Selta Square</td>
</tr>
<tr>
<td>**Active surveillance**</td>
<td>\$304M Sentinel 3.0 + commercial RWE</td>
<td>FDA Sentinel — claims-only, \~70M query-usable, batch</td>
<td>Real-time federated networks across claims+EHR</td>
<td>Datavant/Aetion, TriNetX, Komodo</td>
</tr>
<tr>
<td>**Post-market studies (PMR/PMC)**</td>
<td>24% of drug dev cost; <span color="blue" underline="true">[75% of 2013-16 PMRs submitted late](https://pubmed.ncbi.nlm.nih.gov/)</span></td>
<td>Manual Phase IV studies, \$2-15K/patient</td>
<td>PMR-execution workflow + pre-assembled federated RWE</td>
<td>Greenfield</td>
</tr>
<tr>
<td>**503A / compounded / peptide**</td>
<td>Unsized; 48.9x error rate vs branded</td>
<td>No mandatory AE reporting</td>
<td>Compounded outcomes registry with OMOP vocabulary extensions</td>
<td>Greenfield — zero public startups</td>
</tr>
<tr>
<td>**Unstructured AE (social, PSP, market research)**</td>
<td>New regulated surface (E2D R1)</td>
<td>Not monitored; pharma reading Reddit by hand</td>
<td>LLM-based extraction + human validation, FDA-permissioned</td>
<td>AI-native only</td>
</tr>
</table>
The portfolio of who's already built where matters: in active surveillance, <span color="blue" underline="true">[Datavant](https://www.datavant.com)</span> generates \$1B+ revenue profitably and is the consolidator of choice; <span color="blue" underline="true">[Komodo](https://www.komodohealth.com)</span> sits at \$3.3B valuation serving 19 of the top 20 pharma; <span color="blue" underline="true">[TriNetX](https://www.trinetx.com)</span> operates the 150M-EHR federated network. None of them covers compounded, 503A, or cash-pay — the categories Sentinel can't see are also the categories the commercial RWE consolidators haven't extended into. In ICSR processing, <span color="blue" underline="true">[Oracle Argus](https://www.oracle.com/health/argus-safety-suite/)</span> holds 60% top-20 share; <span color="blue" underline="true">[Veeva Vault Safety](https://www.veeva.com/products/vault-safety/)</span> is the credible mid-market bundled play (Clinical + Quality + RIM); AI-native challengers compress the BPO layer but won't displace the validation moat. The blind zone is structurally unoccupied: no compounded-outcomes registry, no pure-play 503A AE infrastructure, no PMR/PMC workflow vendor despite <span color="blue" underline="true">[474 PMR/PMCs issued for 2013-16 approvals with 75% submitted late](https://pubmed.ncbi.nlm.nih.gov/)</span>.
The edge here isn't an AI breakthrough. It's regulatory permissioning earned through years of FDA data-partner qualification, OMOP vocabulary extensions for non-NDC drugs, and going where Sentinel structurally can't follow.
---
**The moats compound.**
- **Regulatory permissioning** — FDA data-partner status takes years to qualify and compounds with each new data source added. <span color="blue" underline="true">[Sentinel 3.0's Tier 7](https://orangeslices.ai/fda-rfi-proposed-new-contracting-approach-for-sentinel-system-3-0-includes-multiple-award-idiq/)</span> (specialty EHRs and special populations) and the FIRE RFI direct-to-agency vehicle are both 2025-2026 entry points that didn't exist before.
- **Federated data network** — each new pharmacy, EHR feed, peptide manufacturer, or PSP integration permanently expands a query-answerable universe Sentinel cannot replicate. This is the Datavant/Aetion compounding model pointed at the categories Sentinel structurally can't observe.
- **Compliance infrastructure** — E2D(R1) compliance for Reddit, market research, and patient support programs is build-not-buy at most pharma. The vendor that ships LLM-based extraction with human validation owns the audit trail and the validation documentation, which in safety is a 12-24 month moat by itself.
Critically, regulatory permissioning *is* the surveillance edge. Companies that automate ICSR processing without earning FDA data-partner status compete on price and lose to Oracle when Oracle ships AI-native Argus. Companies that earn permissioning in the blind zones — compounded outcomes, peptide registries, unstructured AE — own a query-answerable universe FDA increasingly relies on, and can license summary-level evidence to FDA (via FIRE) and to branded pharma running RWE on their molecules' shadow markets. This is the underwriting analog from our <span color="blue" underline="true">[Actuarial Underwriting thesis](https://www.notion.so/virtuevc/Actuarial-Underwriting)</span> without the underwriting itself: nobody insures "no signal miss," but FDA-endorsed data-partner status replaces the risk-pricing mechanism with a permissioning mechanism that has the same compounding properties.
\***We'd love to chat with founders building federated outcomes registries for drug categories Sentinel structurally can't see — compounded peptides, 503A cash-pay, supplements, and unstructured AE channels — or direct-to-FDA platforms leveraging the new FIRE procurement vehicle to operate active surveillance for the wave of accelerated and Chinese-origin approvals coming through CNPV and one-pivotal-trial pathways.**\*
**Additional Reading**
- <span color="blue" underline="true">[BioPharma Dive, "FDA leaders say one pivotal trial — not two — should be default" (Feb. 2026)](https://www.biopharmadive.com/news/fda-makary-prasad0one-pivotal-trial-nejm/812557/)</span>
- <span color="blue" underline="true">[FDA, "FDA Adverse Event Monitoring System (AEMS)" (Mar. 2026)](https://www.fda.gov/safety/fda-adverse-event-monitoring-system-aems)</span>
- <span color="blue" underline="true">[Federal Register, "E2D(R1) Postapproval Safety Data" (Mar. 4, 2026)](https://www.federalregister.gov/documents/2026/03/04/2026-04252/e2dr1-postapproval-safety-data-definitions-and-standards-for-management-and-reporting-of-individual)</span>
- <span color="blue" underline="true">[Federal Register, "Use of Real-World Evidence to Support Regulatory Decision Making" (Dec. 18, 2025)](https://www.federalregister.gov/documents/2025/12/18/2025-23252/use-of-real-world-evidence-to-support-regulatory-decision-making-for-medical-devices-guidance-for)</span>
- <span color="blue" underline="true">[Harvard Pilgrim Health Care Institute, "\$220M for Next Phase of FDA Sentinel System" (Nov. 2025)](https://www.populationmedicine.org/news-media/harvard-pilgrim-health-care-institute-funded-220-million-next-phase-fda-sentinel-system)</span>
- <span color="blue" underline="true">[FDA, "FDA Approves First-Ever Gene Therapy for Genetic Hearing Loss Under National Priority Voucher" (Apr. 23, 2026)](https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher)</span>
- <span color="blue" underline="true">[BioPharma Dive, "China biotech licensing deals pipeline" (Aug. 2025)](https://www.biopharmadive.com/news/china-biotech-drug-licensing-deals-pipeline/758283/)</span>
- <span color="blue" underline="true">[SCMP, "Chinese drug makers strike record US\$135.7B in out-licensing deals" (2025)](https://www.scmp.com/business/china-business/article/3339011/chinese-drug-makers-strike-record-us136-billion-out-licensing-deals-2025)</span>
- <span color="blue" underline="true">[Stifel, "Biopharma 2025 Outlook"](https://www.stifel.com/newsletters/investmentbanking/bal/marketing/healthcare/biopharma_timopler/2025/BiopharmaMarketUpdate_Outlook_2025.pdf)</span>
- <span color="blue" underline="true">[Jones Day, "FDA Proposes Removing Comparative Efficacy Studies for Biosimilars" (Nov. 2025)](https://www.jonesday.com/en/insights/2025/11/fda-proposes-removing-comparative-efficacy-studies-for-biosimilars)</span>
- <span color="blue" underline="true">[AJMC, "Postmarket Drug Safety Timelines Largely Unchanged After FDAAA"](https://www.ajmc.com/view/postmarket-drug-safety-timelines-largely-unchanged-after-fda-amendments-act)</span>
- <span color="blue" underline="true">[PubMed 40285721, "Compounded GLP-1 adverse events FAERS analysis n=81,078"](https://pubmed.ncbi.nlm.nih.gov/40285721/)</span>
- <span color="blue" underline="true">[Sentinel Initiative, "Key Database Statistics"](https://sentinelinitiative.org/about/key-database-statistics)</span>
- <span color="blue" underline="true">[FDA, "Commissioner's National Priority Voucher (CNPV) Pilot Program"](https://www.fda.gov/industry/commissioners-national-priority-voucher-cnpv-pilot-program)</span>
- <span color="blue" underline="true">[BioPharma Dive, "New FDA Guidance Could Elevate Pharma's Biosimilar Market" (Mar. 14, 2026)](https://www.biopharmadive.com/news/biosimilars-fda-guidance-elevate-pharma-market/814591/)</span>
- <span color="blue" underline="true">[FDA, "FDA Achieves Year 1 Goals Reducing Animal Testing in Drug Development" (Apr. 2026)](https://www.fda.gov/news-events/press-announcements/fda-achieves-year-1-goals-reducing-animal-testing-drug-development)</span>
