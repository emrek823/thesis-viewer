## The Take

**Consensus:** AI scheduling and referral automation are features that EHR vendors (Epic, athena) will bundle. Patients prefer online self-service anyway — 89% want to book online. Voice and fax AI are transitional tools that get commoditized as platforms improve. The market is crowded, 95% of AI pilots fail, and the "trough of disillusionment" is coming.

**Today:** Consensus is right about commoditization pressure on generic features — but misses the irreversibility mechanism. When practices cut 40 admins to 5, switching isn't a vendor decision; it's an operational impossibility. The workforce no longer exists. Two wedges — voice scheduling for the front office and fax/referral automation for the back office — are building this dependency independently, and both converge on the same endgame: the practice operating system. Fax/referral may be the more defensible wedge because Epic has no competitive referral product, 90-95% of DME orders are still handwritten fax, and EMR interop "should have gone away 20 years ago" but persists. Voice faces direct commoditization from athena (free Feb 2026) and Zocdoc ($2/appointment), but specialty depth (28-day retina injection rules, ortho body-part routing) creates a moat that generic platforms cannot replicate in the 18-24 month window before lock-in solidifies.

The market is $472M today, growing to $11.7B by 2035 at 37.85% CAGR. $30B in annual health system call center spend is the voice TAM. Strategic capital validates the category: Assort raised $102M, Tennr at $605M valuation, Zocdoc launched Zo. 85% of healthcare AI spend flows to startups because they ship faster than incumbents. But 95% of pilots fail — and the ones that execute get extreme lock-in. This reframes the opportunity: the question isn't whether the category is large, but whether a startup can survive the pilot-to-production gauntlet. Those that do become operationally irreplaceable.

The core mechanism is a three-step trap: (1) labor crisis forces adoption — 3.2M worker shortage by 2026, 45% call center turnover, $8/call costs that don't scale; (2) specialty-specific algorithms create customization lock-in — 2-3 month build periods, 28-day injection spacing rules, body-part routing logic, Brightree API integration that "took decades to learn"; (3) post-staffing cuts make switching operationally impossible — the workers are gone, the institutional knowledge evaporated, and re-hiring would cost more than any price increase the vendor imposes. "If they decided to increase our spend by $10,000 a month, at this point I'd have to say yes."

**In 3-5 years:** Market bifurcates. Generic workflow features (appointment confirmations, simple scheduling, ambient documentation) get commoditized by Epic Art ($80/mo), athena bundling, and Zocdoc. Specialty workflow platforms — the ones that survived the 2026 pilot purge and expanded from wedge to platform — own enough operational surface area that switching would require rebuilding the entire back office. 2-3 vertical OS players dominate per specialty segment. The winners are those who: (1) captured specialty depth early, (2) expanded from initial wedge (voice or fax) into referrals, prior auth, eligibility, and scheduling, and (3) locked in through staff dependency before the consolidation wave. Point solutions that failed to expand become acquisition targets or die. "2026 is end of pilot era" — expand from wedge to platform or die.

**How this evolved:**
- *2026-01-27:* **MERGE** — Consolidated 5 component theses (Voice AI Captures Scheduling, Practices Adopt Voice AI, Voice AI Future/Epic, Workflow Data Compounds, Practices Adopt Fax AI/Tennr) into single healthcare workflow automation thesis. Reframed around irreversible operational dependency as core mechanism. Elevated fax/referral wedge as potentially more defensible than voice. Added "95% fail but survivors get extreme lock-in" framing. Contrarian threats: athena free Feb 2026, Epic Art $80/mo, 89% self-service preference, 95% pilot failure rate, Zocdoc $2/appointment.
- *2026-01-26:* **REBUILD** — Added Jeremy Schwach primary research across voice theses. Contrarian pressure test on all components. Confidence adjusted across files.
- *2026-01-10:* Initial cluster generated from 18+ Tegus expert interviews.

---

## Bull Case

- [x] **Staff cuts create irreversible lock-in.** BetterNight: 40 admins to 5. "Could not untangle from Tennr if we tried... would be disastrous." Would accept $10K/month price increase. ([[manager-at-betternight-_-tennr-_-tegus-3c373487]])

- [x] **Voice AI eliminates 40% call abandonment.** Barrington Ortho: wait times 15-20 min to 2.5 min. Abandonment 40% to 6%. Patient satisfaction 3.4 to 3.9/5. Reduced 7 FTEs to 4. ([[Chief Executive Officer at Barrington Orthopedic Specialists _ Assort Health _ Tegus]])

- [x] **95% accuracy on specialty scheduling at scale.** Assort: 4,000-5,000 calls/month at 95% accuracy. 28-day injection spacing rules for retina. 2-3 month specialty build period. 9/10 vendor rating. ([[Chief Administrative Officer at a Medical Group _ Assort Health _ Tegus]])

- [x] **Fax/referral wedge has no competitors.** MPOWERHealth: "We have not found any competitors to Tennr in the referral space." 9.5/10 rating. Processing time from 6-12 minutes to 1-3 minutes. ([[tennr-mpowerhealth-936bbeef]])

- [x] **90-95% of DME orders are still handwritten fax.** "An overwhelming amount of our orders, probably to the tune of 90%-95%, are still handwritten fax documents." EMR interop "should have gone away 20 years ago but it seems to still exist today." ([[Chief Operating Officer at Neb Medical Services _ Tennr _ Tegus]], [[tennr-pinnacle-group-7764e76c]])

- [x] **Fax automation produces extreme labor arbitrage.** ThriveWell: referral processing from 25 minutes to 30 seconds. Avoided hiring 5-6 additional staff. ([[tennr-_-thrivewell-9ec74cd9]])

- [x] **Integration expertise is earned, not learned.** SleepQuest: 7-month Brightree integration vs. 3-month expectation. Pinnacle Group: "They had a lot of experience API into Brightree... It's really not something you learned." ([[tennr-sleepquest-b48eb7eb]], [[tennr-pinnacle-group-7764e76c]])

- [x] **Demand is structural — $30B call center spend, 3.2M worker shortage.** 89% want online booking but only 6% do. 67% of patients still prefer phone over portal. 53 calls per physician per day. $8/call at scale is unsustainable. (Web: Experian Health 2024, Web: Healthcare staffing 2026)

- [x] **ROI is undeniable when implemented correctly.** TrustCare: 8-12x ROI. "Downsized 22 people at avg $50K/year." Total Medical Supply: 300 to 390 patients/employee, avoided 14 FTE hires = $700K savings. ([[3-assort-health-_-interviews-_-tegus-company-profile-c5b880a3]], [[Executive Vice President at Total Medical Supply Inc _ Tennr _ Tegus]])

- [x] **Strategic funding validates category.** Assort $102M total (Digital Health 50). Tennr $162M total ($605M valuation). Abridge $550M at $5.3B. 85% of healthcare AI spend flows to startups. ([[future-of-healthtech-2025-v2-e6b0381e]])

- [x] **Platform expansion is already underway.** Assort OS: scheduling, care navigation, prescription renewals, referrals, lab coordination. Tennr: referrals to eligibility, benefits, prior auth. Both converging on practice operating system. ([[tennr-mpowerhealth-936bbeef]])

- [ ] **DSO exclusive partnership announced.** Would prove thesis at enterprise scale.

- [ ] **First vertical OS reaches $500M+ ARR.** Would prove platform expansion thesis.

---

## Bear Case

- [x] **89% of patients want online self-service scheduling.** Only 6% book online today, but self-service grew 30% YoY in 2025. 63% of providers now offer it. Texas Children's: 1M appointments via MyChart saving $7M. (Web: Experian Health 2024)

- [x] **95% of gen AI pilots fail.** MIT research. Only 25% of AI initiatives deliver expected ROI. "Trough of disillusionment" — KLAS found agentic AI adoption "statistically negligible," only 17 of 3,000 mentioned it. (Web: CIO Dive, IBM CEO Survey, Web: KLAS 2025)

- [x] **Most voice AI delivers "marginal improvements."** Jeremy Schwach: "Comprehensive scheduling reduced from 14 weeks to 12 weeks." LinkedIn success stories "mostly hype." Patients want "OpenTable experience," not robot conversations. ([[Sources/Granola/Jeremy Schwach and Virtue]])

- [x] **athena launching AI-native encounter free Feb 2026.** Intelligent appointment scheduling, voice AI, ambient documentation at no extra cost. Bundles compete directly with standalone vendors. ([[athenahealth-ai-native-2026]])

- [x] **Epic Art at $80/provider/month vs. startup $600/month.** Epic won 70% of 2024 hospital decisions. 191M MyChart users. Running 200+ AI pilots with full template access. Will replicate 30-year bundling playbook. (Web: KLAS 2025, Web: Epic UGM 2025)

- [x] **67% of ambient scribe users would switch vendors.** "Customers view scribing as becoming commoditized, and current switching costs are low." Adjacent category commoditization is a warning. ([[menlo-ventures-2025]])

- [x] **Zocdoc Zo at $2/booked appointment.** 70% resolution rate. No upfront fees. Aggressive commoditization threat for generic scheduling. (Web: Fierce Healthcare, [[2025-12-23-zocdoc-launches-voice-ai-agent-zo-to-streamline-bo]])

- [x] **Voice tech commoditized to $9/hr.** OpenAI Realtime API: $0.06/min input, $0.24/min output. Infrastructure cost advantage erodes. ([[voice-ai-2259d27c]])

- [x] **Security "essentially non-existent" across AI startups.** Third-party connectors, unclear data handling. "Business death risk if data leaks." ([[Sources/Granola/Jeremy Schwach and Virtue]])

- [x] **2026 is "brutal consolidation phase."** "Pilot fatigue is a real thing. Health systems aggressively cutting vendors that cannot scale." Point solutions face existential risk. (Web: Healthcare 2026 Forecast)

- [ ] **Major practice successfully switches voice AI vendor in <30 days.** Would weaken lock-in thesis.

- [ ] **Healthcare staffing crisis resolves.** Vacancy rates below 20% would reduce pull market.

- [ ] **Epic ships specialty-specific scheduling with 95%+ accuracy at no incremental cost.** Would directly refute specialty moat.

- [ ] **LLMs cannot replace human communication workflows.** "Substantial epistemic uncertainty in aligning LLM drafts with clinician responses"; LLMs struggle specifically with question-asking to elicit patient info ([[How Much Would a Clinician Edit This Draft Evaluating LLM Alignment for Patient Message Response Dra]])

- [ ] **Hospital CEO skepticism on AI expanding beyond documentation.** Expanding ambient AI to RCM/billing "seems a little unrealistic"; warned against single-vendor dependency; prioritized other capital equipment over AI ([[former-high-level-executive-at-a-major-healthcare-company-_-622d4dd5]])

- [ ] **Sophisticated health systems resist irreversible lock-in.** Ardent Health CDTO: "prepared to take advantage of what's best in the moment"; advocates "plug and play" approach to AI vendors ([[qa-ardent-health-envisions-a-clear-path-for-digital-transformation]])

- [ ] **AI scribe switching costs lower than thesis predicts.** MaineHealth says Abridge, Nuance, Ambience are "apple to apple" — "it really comes down to cost." Switched from Nuance to Abridge without significant disruption ([[informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d]])

- [ ] **AI pilot failure rate + low NPI adoption.** 70% of accounts picked an ambient vendor but <10% of NPIs actually adopted; payer AI prior auth "might still be too hard to solve"; total automation "dead on arrival" — copilot approach required; variable labor cost only $10/hour ([[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]])

- [ ] **Expansion beyond initial wedge faces severe switching barriers.** Mayo Clinic: replacing existing coding tools (Optum, 3M, SmarterDX) with scribe-integrated coding has "one out of 10" chance; orgs paying "millions" for extremely sticky workflows; physician adoption "not mandated" ([[Senior Director of Revenue Cycle - Revenue Integrity at Mayo Clinic _ Ambience Healthcare, Inc. _ Tegus]])

- [ ] **Epic native AI threatens standalone vendors.** LifePoint CMIO ranks Abridge 5th of 5 vendors; "bringing joy back is not enough to move the needle"; Epic native AI ready Q1 — "100% you're going to see customers go Epic because it's going to be almost free" ([[Abridge _ Interviews _ Tegus Company Profile]])

**What would have to be true for you to be wrong?** The lock-in mechanism breaks if two things happen simultaneously: (1) Epic or athena ships specialty-depth scheduling (28-day retina rules, body-part routing, Brightree API integration) bundled at no cost, AND (2) practices that have already cut staff find they can re-hire and retrain within a reasonable timeframe. The first is plausible within 3 years for voice but unlikely for fax/referral (Epic has no referral product today). The second is structurally unlikely — the healthcare labor shortage is worsening, not improving, and institutional knowledge doesn't reconstitute. The most realistic failure mode is that the total addressable market shrinks as self-service adoption accelerates past 30%, leaving voice AI serving a smaller (but still locked-in) phone-first segment. For fax/referral, the failure mode is that EMR interoperability actually improves — but operators say this problem "should have gone away 20 years ago" and shows no signs of resolving.

---

## Timeline

**Now → 2026:**
- athenaAmbient free Feb 2026 — monitor whether voice scheduling is included or limited to ambient docs
- Epic Art launches early 2026 — watch for specialty scheduling features vs. documentation-only focus
- Zocdoc Zo expands — watch for specialty customization or DSO enterprise deals
- Assort approaches $100M ARR milestone — S-1 watch begins
- Tennr expansion products (insurance/benefits worker) — track execution vs. missed deadlines
- 95% pilot failure rate means most AI vendors die this year — survivors get category-defining positioning
- Entry point: Series B/C specialty platforms with proven retention metrics and multi-product expansion

**2027 → 2028:**
- Inflection: Voice + fax wedges converge — first platform offers both front-office and back-office automation
- Critical threshold: Self-service adoption — if >30% online booking, voice TAM shrinks; if <20%, phone-first segment remains large
- Consolidation: Point solutions that haven't expanded to platform get acquired or fail
- "Brutal consolidation phase" plays out — number of active AI vendors per specialty drops 50%+
- M&A: EHR vendor or strategic acquirer buys leading vertical OS player at premium

**2029+:**
- 2-3 dominant practice OS players per specialty vertical
- Voice AI and fax AI are features of the platform, not standalone products
- Value shifts to next frontier: prior auth automation, referral intelligence, revenue cycle, care navigation
- Market structure: EHR-native for generic features, vertical OS for specialty workflows
- Staff dependency creates permanent switching costs — these platforms become infrastructure, not vendors

---

## Startup Opportunities

**1. Specialty Voice AI Platform (Assort Model)**
- Why this follows: Labor crisis + specialty algorithms + staff-cut lock-in. 40% of calls come from patients who won't use self-service.
- Wedge: Start with one specialty (retina, ortho, dental), prove 95%+ accuracy, expand to adjacent specialties, then expand into referrals and prior auth
- Risk: athena bundling, Zocdoc commoditization at low end, 18-24 month window before EHRs potentially catch up on specialty depth

**2. Fax/Referral Automation Platform (Tennr Model)**
- Why this follows: "No real competitors" in referral space. 90-95% of DME orders still handwritten fax. EMR interop failure guarantees fax persistence. No Epic competitive product.
- Wedge: Fax-to-EHR automation for DME/radiology/infusion, then expand to scheduling, eligibility, benefits verification, prior auth
- Risk: EMR interoperability improvements (unlikely near-term). Large health systems building in-house. Brightree API moat is narrow if Tennr can't expand beyond DME.

**3. Practice Operating System (Convergence Play)**
- Why this follows: BetterNight operator predicts "massive consolidation" into single-vendor platforms. Both voice and fax wedges converge on the same end state.
- Wedge: Acquire or build both front-office (voice) and back-office (fax/referral) capabilities. Land with one, expand to the other.
- Risk: Execution complexity of multi-product build. Capital intensity. Both Assort and Tennr are racing to this position independently.

**4. Managed Services + AI Layer (Hummingbird Model)**
- Why this follows: Jeremy Schwach thesis — "Technology alone can't solve our access problems." Do the "hard work under the hood" (Epic optimization, process standardization), then layer AI on top.
- Wedge: Operational consulting + AI deployment for health systems that have failed AI pilots due to lack of foundational readiness
- Risk: Higher human capital intensity, slower growth than pure software. But may capture the 95% of practices where pure-software pilots fail.

---

## Watch For

**If RIGHT:**
- Assort announces $100M ARR or S-1 filing by 2027
- Tennr maintains "no real competitors" in referral space through 2027
- Major DSO announces exclusive voice AI partnership
- athena voice scheduling is ambient-docs-only, not specialty scheduling
- Practice churn data shows <5% logo churn at workflow AI vendors
- Voice + fax vendor merges or builds both capabilities
- Self-service adoption stalls below 30% by 2027
- First practice OS player reaches $500M+ ARR

**If WRONG:**
- athena ships voice scheduling with 95%+ specialty accuracy at no incremental cost
- Epic Art includes voice scheduling and achieves >50% adoption in 18 months
- Epic launches referral automation product competing directly with Tennr
- Multiple practices successfully switch workflow AI vendors within 30 days
- Healthcare staffing crisis resolves — call center vacancy below 20%
- Patient self-service adoption exceeds 50% — voice AI becomes niche
- Zocdoc Zo captures specialty segment with custom workflows
- EMR interoperability dramatically improves, eliminating fax persistence
- New entrant wins significant share without specialty customization or integration depth

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-10 | [[manager-at-betternight-_-tennr-_-tegus-3c373487]] | Operator | "Could not untangle from Tennr... disastrous." 40 to 5 admins. "$10K increase I'd say yes." |
| 2025-07 | [[Chief Executive Officer at Barrington Orthopedic Specialists _ Assort Health _ Tegus]] | Operator | 40% to 6% abandonment. Wait times 15-20 to 2.5 min. Satisfaction 3.4 to 3.9/5. 7 to 4 FTEs. |
| 2025-07 | [[Chief Administrative Officer at a Medical Group _ Assort Health _ Tegus]] | Operator | 28-day retina injection rules. 4,000-5,000 calls/month at 95% accuracy. 3-month build. 9/10. |
| 2025-07 | [[it-manager-at-luminary-hospice-_-assort-health-_-tegus-991d060b]] | Operator | 10 days vs 3.5 weeks implementation. "Plug and play" vs CSV exports. $150K/yr. Won't switch at 50% discount. |
| 2026-01 | [[Chief Operating Officer at Neb Medical Services _ Tennr _ Tegus]] | Operator | 90-95% of DME orders still handwritten fax. Fax queue cleared daily with 2 employees. 5 to 2 FTEs. |
| 2026-01 | [[Executive Vice President at Total Medical Supply Inc _ Tennr _ Tegus]] | Operator | 300 to 390 patients/employee. Avoided 14 FTE hires = $700K. "Three-headed monster: Brightree, Parachute, Tennr." |
| 2025-12 | [[tennr-mpowerhealth-936bbeef]] | Operator | "No real competitors in referral space." 9.5/10 rating. 6-12 min to 1-3 min processing. 300-400% efficiency. |
| 2025-12 | [[tennr-pinnacle-group-7764e76c]] | Operator | "EMR interop should have gone away 20 years ago." Brightree API: "not something you learned." |
| 2025-12 | [[tennr-sleepquest-b48eb7eb]] | Operator | SleepQuest 7-month integration. Brightree API expertise took "decades" to learn. |
| 2026-01 | [[tennr-_-thrivewell-9ec74cd9]] | Operator | ThriveWell: 25 min to 30 sec referral processing. Avoided 5-6 FTE hires. 30+ infusion locations. |
| 2025-12 | [[chief-innovation-officer-at-simonmed-imaging-_-tennr-_-tegus-224eecf0]] | Operator | SimonMed: "millions on FTEs for automatable work." "No player outside radiology in the space." 200+ locations. |
| 2026-01 | [[Sources/Granola/Jeremy Schwach and Virtue]] | Primary | Most voice AI = "marginal improvements." LinkedIn hype. Patients want OpenTable. Security non-existent. |
| 2025-11 | [[Sources/Granola/SMB __ Virtue-2025-11-21_15-32-49]] | Founder | SMB Health: 35-40 customers, $399/month. Competitive with Assort/Flip. |
| 2025-07 | [[5-assort-health-_-interviews-_-tegus-company-profile-fdbe3d65]] | Operator | "Abandonment rates under 50%. We needed to do something." |
| 2025-07 | [[8-assort-health-_-interviews-_-tegus-company-profile-3851f70f]] | Operator | "15% pressed nine" — 85% of callers stayed with AI agent. |
| 2025-07 | [[12-assort-health-_-interviews-_-tegus-company-profile-120ba852]] | Operator | "$8 per call — unscalable." Cost driver forcing adoption. |
| 2025-07 | [[3-assort-health-_-interviews-_-tegus-company-profile-c5b880a3]] | Operator | TrustCare: "Downsized 22 people at avg $50K/year." 8-12x ROI. |
| 2025-07 | [[Chief Administrative Officer at California Retina Vitreous Associates Medical Group _ Assort Health _ Tegus]] | Operator | 90-95% of calls answered and completed through Assort. |
| 2025-07 | [[cmo-carbon-health---artera-and-hellopatient-d4d47d29]] | Operator | "Healthcare in 2025 still is mostly fax and phone calls." |
| 2025-12 | [[voice-ai-2259d27c]] | Research | OpenAI Realtime API: $0.06/min input, $0.24/min output = $9/hr. Voice commoditizing. |
| 2026-01 | [[future-of-healthtech-2025-v2-e6b0381e]] | Research | 85% healthcare AI spend to startups. Provider ops 44% of investment. |
| 2025-12 | [[menlo-ventures-2025]] | Research | 67% would switch ambient scribe vendors. Commoditization risk. |
| 2025-12 | [[2025-12-23-zocdoc-launches-voice-ai-agent-zo-to-streamline-bo]] | News | Zocdoc Zo: $2/booked appointment. 70% resolution rate. No upfront fees. |
| 2026-01 | [[athenahealth-ai-native-2026]] | News | athenaAmbient FREE Feb 2026. Intelligent scheduling, voice AI, ambient docs. |
| 2026-01 | [[ease_sept2025-a16z-rcm-roll-up-212465b1]] | Company | "Rollup is the Means, Software is the Outcome." 80% GM on AI-driven vs 20% traditional. |
| 2026-01 | [[abridge-fathom-ab7cd03e]] | Research | Abridge VP Sales: "About to get run over... Epic releasing own scribing capability." |
| 2026-01 | Web: Grand View Research | Market | Voice AI healthcare: $472M (2025) to $11.7B (2035). 37.85% CAGR. |
| 2026-01 | Web: Healthcare staffing 2026 | News | 3.2M worker shortage by 2026. 45% call center turnover. Crisis level. |
| 2026-01 | Web: Experian Health 2024 | Research | 89% want online scheduling. Only 6% book online. 30% YoY self-service growth. |
| 2026-01 | Web: MIT/IBM AI pilots | Research | 95% of gen AI pilots fail. Only 25% deliver expected ROI. |
| 2026-01 | Web: KLAS 2025 | Research | Agentic AI "peak hype" but adoption "statistically negligible." 17 of 3,000 mentioned. |
| 2026-01 | Web: Epic UGM 2025 | News | Epic Art early 2026. Rumored $80/provider/month. 70% of 2024 hospital decisions. |
| 2025-07 | [[abridge-fathom-ab7cd03e]] | Research | Fathom VP: switching costs high — 4-6 month implementation per specialty, 6-12 month IT backlog. Solventum/3M autonomous coding at only 20% automation. Market consolidation to 2-3 players. |
| 2025-07 | [[2025-12-23-how-health-care-remade-the-us-economy]] | News | Healthcare grew from 9% to 13% of US workforce (2000-2024), ~1/3 of all employment growth. 38 states have healthcare as #1 employer. AI may cut ~20% admin employment. Senate bill could cut ~$1T from Medicaid, removing 17M from insurance by 2034. |
| 2025-10 | [[AI in Care Delivery (Virtue)-2025-10-27]] | Operator | USHV/Valerie Health: 50% reduction in intake personnel with AI. "70% of care delivery workflows identical until provider-patient interaction." Voice AI becoming commoditized; specialty depth is the moat. |
| 2024-09 | [[basata-29695686]] | Research | Basata targets admin cost reduction from 40-60% to 5-15% of revenue for specialty clinics; 30+ clinics onboarded; $120K ARR from Tri-City Cardiology (40 cardiologists); 49% physician burnout, 62% blame bureaucratic tasks. |
| 2026-01 | [[Virtue Financial Review_ Sean _ Dave]] | Operator | SmartDX acquired by Thoreau (Matt Holt's new firm from New Mountain Capital) as part of $8-9B acquisition of 4-5 AI healthcare companies — validates PE consolidation thesis. |
| 2025-07 | [[informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d]] | Operator | MaineHealth: 2,000+ Abridge licenses across 12 hospitals and 745 clinics; 97% user retention; providers "can't imagine going back"; 85% avg effort reduction. |
| 2025-12 | [[2025-12-29_Jorie-AI-Announces-Partnership-With-Sauk-Prairie-Healthcare]] | News | Jorie AI partnership with Sauk Prairie Healthcare for RCM automation — AI-powered RCM expanding into smaller community health systems. |
| 2026-01 | [[Shaian Javaid and Virtue]] | Operator | Askloom building DIY agent management platform for healthcare ("Fin for healthcare"); targeting mid-market; Midi Health customer spending ~$50M on marketing; raising $2M seed. |
| 2025-12 | [[tebra-secures-250m-to-challenge-legacy-ehrs-with-ai-powered-automation]] | News | Tebra raised $250M; AI Note Assist generated 500,000+ notes in H2 2025 saving 60% documentation time; 140,000 providers, 125M patient records; validates workflow AI-to-practice OS evolution. |
| 2025-05 | [[12-assort-health-_-interviews-_-tegus-company-profile-120ba852]] | Operator | Shared Practices Group (36 dental locations): missed calls dropped 15% to <2%, cost/call $8 to $3.73 (53% decrease), eliminated entire overseas call center of 15-20 agents. |
| 2025-05 | [[Virtue __ Squad Health]] | Operator | Squad Health automates prior auth end-to-end: auto-checks PA requirements, grabs clinical notes from EHR, completes forms, manages appeals. Up and running in days with just login credentials. |
| 2025-04 | [[Director of IT Cloud Infrastructure Architect at Molina Healthcare Inc _ Anterior _ Tegus]] | Operator | Molina still using faxes for prior auth; Azure AI fax-scanning reads handwriting; mass adjudication ("millions of claims nightly") is top AI wish-list but no vendor solved it. |
| 2025-07 | [[Informatics Director at MaineHealth _ Abridge _ Tegus]] | Research | MaineHealth estimates AI scribes could generate 33,185 additional visits annually (2% increase across 1.6M visits); "we need 5 more neurologists but struggling to recruit"; 22,000 employees. |
| 2025-07 | [[assort-health-_-interviews-_-tegus-company-profile-81ded547]] | Research | Barrington Ortho: 40%+ call abandonment to 4-7%; call length 7-8 min to 2-2.5 min; satisfaction 3.4 to 3.9/4.0; staff 7 FTEs to 4 FTEs, breaking even at 1.5 FTEs saved. |
| 2025-07 | [[assort-health-_-interviews-_-tegus-company-profile-81ded547]] | Research | Assort running 24/7/365 as call center agent; ~3,000 calls/month; spend grew from $60-90K to low six figures; CEO: "if they increased spend $10K/month, I'd have to say yes" — direct lock-in evidence. |
| 2025-07 | [[assort-health-_-interviews-_-tegus-company-profile-81ded547]] | Research | Assort handles 17 physicians' individual preferences (patient types, injury types, body parts); 2-week eval to signed agreement, 4-week implementation. Expanding to voicemail, pre-auth, confirmation calls. |
| 2025-06 | [[cmo-carbon-health---artera-and-hellopatient-d4d47d29]] | Research | Carbon Health CMO (93 clinics, 3,000 daily encounters) chose Hello Patient for outbound voice AI in billing/RCM. "Healthcare in 2025 still is mostly fax and phone calls." Pricing moving to utilization-based. |
| 2025-12 | [[top-20-healthcare-funding-rounds-of-2025]] | News | Tennr $101M Series C, Abridge $550M total, Ambience $243M Series C, Commure $200M, Innovaccer $275M Series F — strategic capital validates healthcare AI workflow at massive scale. |
| 2025-12 | [[2025-12-08]] | Operator | Visionairy: $450K ARR in 5 months automating eye care back office; design partner (50-doctor PE group) delivering $4M annual value; 15% of visits have coding errors; eye care margins dropped 50%. |
| 2026-01 | [[How Much Would a Clinician Edit This Draft Evaluating LLM Alignment for Patient Message Response Dra]] | Research | CHALLENGE: "Substantial epistemic uncertainty in aligning LLM drafts with clinician responses"; LLMs struggle with question-asking to elicit patient info — limits to staff-cut irreversibility for communication workflows. |
| 2023-12 | [[former-high-level-executive-at-a-major-healthcare-company-_-622d4dd5]] | Research | CHALLENGE: Hospital CEO skepticism about expanding ambient AI to RCM/billing: "seems a little unrealistic"; warned against single-vendor dependency; prioritized other capital equipment over AI docs. |
| 2026-01 | [[qa-ardent-health-envisions-a-clear-path-for-digital-transformation]] | News | CHALLENGE: Ardent Health CDTO warns against vendor lock-in: "prepared to take advantage of what's best in the moment"; advocates "plug and play" — sophisticated systems may resist irreversible lock-in. |
| 2025-07 | [[informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d]] | Operator | CHALLENGE: MaineHealth says Abridge, Nuance, Ambience are "apple to apple" — "it really comes down to cost." Switched from Nuance to Abridge without significant disruption — scribe switching costs lower than thesis predicts. |
| 2025-03 | [[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]] | Research | CHALLENGE: "95% of AI pilots fail"; ambient docs: 70% picked vendor but <10% NPIs adopted; payer AI prior auth "problem might be too hard"; total automation "dead on arrival" — copilot required; variable labor cost only $10/hour. |
| 2025-05 | [[Senior Director of Revenue Cycle - Revenue Integrity at Mayo Clinic _ Ambience Healthcare, Inc. _ Tegus]] | Operator | CHALLENGE: Mayo Clinic: replacing coding tools (Optum, 3M, SmarterDX) has "one out of 10" chance; orgs paying "millions" for extremely sticky workflows; physician adoption "not mandated." |
| 2025-08 | [[Abridge _ Interviews _ Tegus Company Profile]] | Research | CHALLENGE: LifePoint CMIO ranks Abridge 5th of 5 vendors; "bringing joy back is not enough"; Epic native AI ready Q1 — "100% you're going to see customers go Epic because it's almost free." |

---

*Confidence: MEDIUM-HIGH — 25+ independent operator sources across both wedges confirm lock-in mechanism and labor arbitrage. $750M+ in category funding validates market. Fax/referral wedge is stronger (no Epic competitor, structural fax persistence) than voice wedge (faces athena/Zocdoc/Epic commoditization). BUT 95% pilot failure rate, 89% self-service preference, Epic Art bundling at $80/mo, and 2026 consolidation wave create real downside. Thesis holds for specialty-depth platforms that execute through the pilot gauntlet and expand from wedge to OS.*
*Last rebuilt: 2026-01-27*
