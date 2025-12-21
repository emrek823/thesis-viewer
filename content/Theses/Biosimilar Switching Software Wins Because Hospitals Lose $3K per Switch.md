# Thesis: Biosimilar Switching Software Wins Because Hospitals Lose $3K per Switch

## Investment Take

US biosimilar adoption is 20% vs EU's 80% because of perverse economics—hospitals lose $3,148 per patient by switching from Avastin to Mvasi ([[Claude-MSO transactions and biosimilar market evolution]]). This isn't ignorance; it's rational behavior. Hospitals get paid % of list price, so higher-priced reference biologics = higher margins even if acquisition cost is higher.

The fix isn't education—it's software that identifies margin-positive switches using transparency data. Hospital transparency rules + prescription drug MRF now make the data public. No need to build $5M pricing database; just process public files. The opportunity: find the 30-50% of switches that ARE margin-positive and steer there first.

MSO consolidation creates concentrated buyers. Big 3 wholesalers (Cencora, Cardinal, McKesson) spent $16B+ on MSO acquisitions ([[The Future of Buy-and-Bill Market Access]]). OneOncology, US Oncology Network = concentrated prescribing power. They make 3-5x margins on biosimilar steering vs traditional distribution. They want switching tools.

2025-2028 window before regulatory changes close it. FDA eliminated switching studies (June 2024), enabling automatic pharmacy substitution. If CMS mandates pharmacy-level substitution like generics, physician decision point disappears and provider-side software becomes irrelevant.

FDA is accelerating biosimilar approval: October 2025 guidance says comparative efficacy studies (CES) "may not be necessary" if comparative analytical assessment shows high similarity ([[FDA Biosimilar Guidance Oct 2025]]). This "streamlined approach" reduces development cost by $24M+ per biosimilar—more competitors, more price pressure, higher switching incentives.

**How this evolved:**
- *2025-12-17:* Started asking "why won't doctors switch?" Turquoise transparency data revealed the answer: $3,148 margin loss per switch. Not clinical resistance—financial.
- *2025-12-20:* Added MSO consolidation as catalyst. Wholesaler-owned MSOs are motivated buyers (3-5x steering margins). Window defined by pharmacy substitution risk.
- *2025-12-21:* FDA Oct 2025 guidance: CES may not be needed if CAA shows similarity. Accelerates biosimilar entry → more competition → higher switching pressure.

---

## Bull Case

- [x] **Switching happens when economics work.** Adalimumab biosimilars went 2% → 23% market share in 12 months. Bevacizumab at 90%.
  - *Evidence:* [[Claude-MSO transactions and biosimilar market evolution]] — Proves providers WILL switch when margin-positive

- [ ] **MSO incentive alignment.** Wholesaler-owned MSOs make 3-5x margins on biosimilar steering. They're motivated buyers.
  - *Evidence:* [[The Future of Buy-and-Bill Market Access]] — $16B+ MSO acquisitions by Big 3

- [ ] **Transparency data is free infrastructure.** No $5M+ pricing database build. Hospital + prescription drug MRF = complete margin calculation dataset.
  - *Evidence:* Needs validation — Build prototype using public CMS files

---

## Bear Case

- [ ] **CMS mandates pharmacy substitution.** If biosimilar substitution moves to pharmacy level (like generics), physician decision point disappears. Software becomes irrelevant.
  - *Evidence:* FDA June 2024 guidance eliminated switching studies — enables automatic substitution

- [ ] **2028 Medicare Part B cliff.** ASP + 6% → ASP + 2-3% could crush buy-and-bill economics entirely. If nobody makes money on biologics, switching software irrelevant.
  - *Evidence:* Needs monitoring — Track CMS reimbursement proposals

- [ ] **First-wave manufacturers capture all value.** Only 2-3 biosimilars per molecule achieve attractive economics. If steering contracts lock in early, software opportunity closes.
  - *Evidence:* [[Claude-MSO transactions and biosimilar market evolution]] — 10 Humira biosimilars competing, winner-take-most

- [ ] **Anti-Kickback risk on steering payments.** FTC could view manufacturer payments for steering as anti-competitive. DOJ challenging UHG-Amedisys.
  - *Evidence:* Needs monitoring — track FTC PBM investigation for spillover

- [ ] **Payer private-label biosimilars capture economics.** Cordavis (CVS), Quallent (Cigna) may bypass provider steering entirely.
  - *Evidence:* Needs monitoring — track PBM biosimilar launches

---

## Startup Opportunities

**1. Biosimilar Conversion Intelligence Platform**
- EMR-integrated decision support showing physician margin impact per switch
- Why this follows: Hospitals lose $3K/switch on average, but 30-50% of switches ARE margin-positive. Software finds them.
- Sell to MSO-owned practices (OneOncology, US Oncology Network)
- Risk: Window closes if pharmacy substitution mandated

**2. Prior Auth Automation for Biosimilars**
- Auto-generate medical necessity documentation, reduce 45-min friction to 90 seconds
- Why this follows: Even margin-positive switches blocked by admin friction
- Sell to specialty pharmacies and MSOs
- Risk: Generic prior auth tools may be sufficient

**3. Biosimilar Outcomes Registry**
- Track conversions, prove non-inferiority, monetize RWE data
- Why this follows: FDA RWD guidance (Dec 2025) creates buyer demand for post-marketing surveillance
- Sell data to manufacturers ($100K-500K per molecule), payers, FDA
- Risk: Registry requires 3-5 years before data valuable

**4. Independent Practice Aggregator (Virtual GPO)**
- Enable 5,000+ independents to achieve MSO-like rebates without acquisition
- Why this follows: Big 3 MSOs have 3-5x margin advantage; independents losing share
- Revenue: % of rebates captured + SaaS fee
- Risk: Wholesalers acquire remaining independents before aggregation works

---

## Open Questions

**Will CMS mandate pharmacy-level biosimilar substitution?**
→ PROGRESS (Dec 2025): CMS CY2025 rule allows Part D sponsors to substitute ALL biosimilars (not just interchangeables) as "maintenance changes" on formularies. BUT state pharmacy laws still only allow pharmacist substitution for interchangeable biologics—new prescriptions required for non-interchangeables. **Provider decision point STILL EXISTS.** Window extends until state laws change. Monitor state-level pharmacy substitution legislation.

**What % of biosimilar switches are margin-positive?**
→ OPEN: If <15%, provider value prop weak. If 30-50%, massive opportunity. Download CMS transparency files and calculate for top 20 biologic/biosimilar pairs.

**How durable is the 2025-2028 window?**
→ OPEN: Track CMS rulemaking calendar, Medicare Part B reimbursement trends. If window extends to 2030+, normal startup timeline works. If closes 2026-2027, need rapid execution.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-21 | [[FDA Biosimilar Guidance Oct 2025]] | Research | CES "may not be necessary" if CAA shows similarity. "Streamlined approach" reduces dev cost $24M+. |
| 2025-12-16 | [[Claude-MSO transactions and biosimilar market evolution]] | Research | Hospitals lose $3,148/patient switching Avastin→Mvasi. MSO margins 3-5x on steering. Adalimumab 2%→23% in 12 months. |
| 2025-10-21 | [[The Future of Buy-and-Bill Market Access]] | Research | Big 3 spent $16B+ on MSOs. Wholesaler vertical integration creates concentrated buyers. |
| 2025-10-29 | [[FDA Moves to Accelerate Biosimilar Development]] | Research | Saves $24M + 1-3 years per biosimilar. 30-40 launches by 2028. June 2024 guidance eliminated switching studies. |
| 2025-12-17 | [[FDA wants to use more real-world data]] | Research | FDA accepting RWD without patient identifiers. Biosimilar outcome data can support regulatory decisions. |
| 2025-12-20 | [[W51 Policy Digest]] | Research | BSUFA V (FY2028-2032) secures regulatory infrastructure. FDA promotional labeling guidance enables clearer biosimilar marketing. |
| 2025-10-01 | [[CVS, Considering a Breakup]] | Research | CVS $88B+ on vertical integration, now considering breakup. Full integration fails, partial (MSO) works. |
| 2025-12-20 | McKesson-Core Ventures | Company | $2.49B deal closed Aug 2024. FTC did not block. Regulatory green light for MSO consolidation. |
| 2025-12-20 | Cardinal-ION | Company | $1.1B deal closed Dec 2024. No regulatory intervention. |

---

*Absorbed [[Healthcare-Vertical-Integration-Moats]] on 2025-12-21. MSO consolidation context ($16B+ spend, 3-5x margins, OneOncology $243M incremental profit) integrated into biosimilar economics thesis.*
