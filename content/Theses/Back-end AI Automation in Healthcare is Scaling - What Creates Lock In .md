---
aliases:
  - Back-end AI Automation in Healthcare is Scaling - What Creates Lock In?
---
## Overview

**Healthcare back-end automation is reaching inflection.** $1 trillion is spent annually on US healthcare administration, yet 90-95% of DME orders still arrive as handwritten fax documents. Two automation wedges are capturing this dysfunction: fax/referral processing (Tennr) and voice scheduling (Assort Health). Investment is following: provider operations captured 44% of healthtech VC in 2025, up from 19% in 2021, with 85% of healthcare AI spend flowing to startups rather than incumbents. The shift is real because labor arbitrage is stark -- Tennr customer BetterNight reduced admin staff from 40 to 5 after implementation; Neb Medical Services went from 5 FTEs to 2 managing fax intake. The category is growing toward $11.7B by 2035 (37.85% CAGR) with $30B annual health system call center spend representing voice TAM.

**The investment opportunity is in lock-in, not technology.** The counterintuitive moat: when practices cut 80% of their back-office staff after AI implementation, switching becomes operationally impossible because the workforce no longer exists. BetterNight's manager stated: "My company could not untangle themselves from Tennr if we tried at this point. It would be disastrous... If they decided to increase our spend by $10,000 a month, at this point I'd have to say yes." This pattern repeats: Luminary Hospice pays $150K/year for Assort and confirmed "50% cheaper wouldn't cause switch." But lock-in is not universal -- TrustCare (a Flip CX customer) explicitly said switching would be "not hard at all." The difference is specialty depth: 28-day retina injection rules, ortho body-part routing, and Brightree API integrations that "took decades to learn" create moats that generic platforms cannot replicate. Fax/referral automation (Tennr) appears structurally stronger than voice (Assort) because Epic has no competitive referral product and fax persistence is structural; voice faces direct commoditization from athena (free Feb 2026) and Zocdoc ($2/appointment).

---

## Bull Case

**1. Staff cuts create irreversible lock-in.** BetterNight reduced from 40 admins to 5 after Tennr implementation. The manager stated: "My company could not untangle themselves from Tennr if we tried at this point. It would be disastrous." He confirmed he would accept a $10K/month price increase rather than switch. Once FTEs are cut, institutional knowledge evaporates and the practice cannot operationally function without the tool. This pattern repeats: Barrington Ortho (7 to 4 FTEs), Neb Medical Services (5 to 2 FTEs), ThriveWell (avoided 5-6 FTE hires), Total Medical Supply (avoided 14 FTE hires = $700K savings). [[manager-at-betternight-_-tennr-_-tegus-3c373487]], [[Chief Executive Officer at Barrington Orthopedic Specialists _ Assort Health _ Tegus]]

**2. Fax/referral automation has no incumbent competitor.** MPOWERHealth: "We have not found any competitors to Tennr in the referral space." 9.5/10 rating. Processing time fell from 6-12 minutes to 1-3 minutes -- 300-400% efficiency improvement. The Pinnacle Group operator noted EMR interoperability "should have gone away 20 years ago but seems to still exist today." Epic has no competitive referral processing product. Brightree API integration "took decades to learn" with 60 WIP states for DME order processing -- this complexity is the moat that generic platforms cannot replicate. [[tennr-mpowerhealth-936bbeef]], [[tennr-pinnacle-group-7764e76c]], [[tennr-sleepquest-b48eb7eb]]

**3. Specialty depth creates platform defensibility.** Retina practices require 28-day injection spacing rules (patient can't reschedule before 28 days from last injection). Ortho needs body-part routing logic. DME requires 60 WIP states for order processing. A 2-3 month specialty build period creates time-to-moat. NorCal Retina picked up 3,400 calls in the first month at 4.3/5 patient satisfaction. The CAO explained: "If that tool can't look at the person's prior appointment to see how many days ago it was to be able to determine when that next appointment should be, then it's quite simple how useful it is." This depth cannot be bundled by generic platforms overnight. [[Chief Administrative Officer at a Medical Group _ Assort Health _ Tegus]], [[2-assort-health-_-interviews-_-tegus-company-profile-e79e4fff]]

**4. Fax persistence makes the category structural.** 90-95% of DME orders are still handwritten fax documents. The Pinnacle Group operator: "Unfortunately, because of the nature of healthcare and the lack of interoperability between most electronic medical record systems, the way that most of those documents are either sent out or come back to you is really in a PDF file that's basically an inbox, but it's through really a fax system." This isn't changing -- "it should have gone away 20 years ago but seems to still exist today." As long as fax remains dominant, automation vendors have a durable wedge. [[Chief Operating Officer at Neb Medical Services _ Tennr _ Tegus]], [[tennr-pinnacle-group-7764e76c]]

---

## Bear Case

**1. Voice AI faces direct commoditization.** athena launching AI-native features free in Feb 2026: intelligent scheduling, voice AI, ambient documentation at no extra cost. Epic Art at $80/provider/month vs startup $600/month is a 7.5x price disadvantage. Zocdoc launched Zo at $2/booked appointment with 70% resolution rate. TrustCare chose Flip over Assort and stated switching to a new vendor would "not be hard at all." The COO explicitly said: "Some of it is age-related as far as the age of the person I'm talking to. Some of it is how technologically forward does someone want to be?" Voice scheduling may commoditize faster than fax/referral automation. [[3-assort-health-_-interviews-_-tegus-company-profile-c5b880a3]], [[2025-12-23-zocdoc-launches-voice-ai-agent-zo-to-streamline-bo]]

**2. Lock-in is not universal -- operator evidence is mixed.** TrustCare's COO on switching AI phone vendors: "Not be hard at all." They chose Flip over Assort partly because Assort's co-founder was too aggressive in sales approach, demonstrating that at the pre-deployment stage, switching costs are minimal. The Tennr customer at SimonMed noted: "What they have right now would not work for radiology today... They haven't taken the time or energy to understand the radiology landscape." AleraCare built proprietary RCM at $100M revenue scale specifically because third-party vendors "fell flat" on reliability. Lock-in requires execution; failed implementations create churn, not stickiness. [[3-assort-health-_-interviews-_-tegus-company-profile-c5b880a3]], [[chief-innovation-officer-at-simonmed-imaging-_-tennr-_-tegus-224eecf0]]

**3. Epic walled garden and integration complexity.** Epic running 200+ AI pilots with full template access. The LifePoint CMIO stated: "100% you're going to see a lot of customers go the Epic route because it's going to be almost free." Mid-market (athena) more open, but vendors will eventually consolidate there too. SimonMed's CIO warned of "verticalized solutions" consolidation risk -- companies like Tennr could become features when RCM, PAC, and scheduling vendors merge. The Pinnacle Group operator experienced 7-month implementation (vs promised 3 months) specifically due to EMR integration challenges. [[Sources/Granola/Jeremy Schwach and Virtue]], [[tennr-pinnacle-group-7764e76c]]

**4. Most AI pilots fail to reach deployment.** Jeremy Schwach (Hummingbird CEO): "Most voice AI / healthcare automation still marginal improvements. LinkedIn AI success stories are mostly hype -- behind closed doors, founders admit limited enterprise impact." KLAS found agentic AI adoption was mentioned by only 17 of 3,000 health systems. The 6-9 month ROI expectation is now standard -- pilots must prove value fast or die. The 95% pilot failure rate means most lock-in never materializes; the survivors get extreme stickiness, but survivorship bias inflates the category's attractiveness. [[Sources/Granola/Jeremy Schwach and Virtue]]

---

## Startup Opportunities

**1. Fax/Referral Automation Platform (Tennr Model) - Proven**
- **Why this follows:** Fax persistence is structural (90-95% of DME orders still handwritten), Epic has no competitive product, Brightree API complexity creates moats
- **Wedge:** Fax-to-EHR automation for DME/radiology/infusion
- **The edge:** Integration complexity that "took decades to learn" with 60 WIP states; contextual AI handling unstructured documents at 95%+ accuracy
- **Buyers:** DME companies, specialty practices, home health providers
- **Risk:** Brightree or EHR vendors build native solutions; specialty-by-specialty build is slow

**2. Specialty Voice AI Platform (Assort Model) - Emerging**
- **Why this follows:** 40% call abandonment at practices without AI; specialty logic (28-day injection rules) creates defensibility against generic platforms
- **Wedge:** Land with one specialty (retina, ortho, dental), prove 95%+ accuracy, expand to adjacent specialties
- **The edge:** 2-3 month specialty build periods create time-to-moat; specialty workflow rules cannot be replicated by athena/Epic overnight
- **Buyers:** Specialty physician groups, DSOs, ophthalmology chains
- **Risk:** athena free AI (Feb 2026) and Zocdoc ($2/appointment) compress pricing; voice is more commoditized than fax

**3. Practice Operating System (Convergence Play) - Early**
- **Why this follows:** BetterNight operator predicts "massive consolidation" into single-vendor platforms; both Assort and Tennr racing toward this position
- **Wedge:** Acquire or build both front-office (voice) and back-office (fax/referral) capabilities
- **The edge:** Winner captures full operational surface area; lock-in compounds when multiple workflows depend on single vendor
- **Buyers:** Multi-location specialty groups, PE-backed practice roll-ups
- **Risk:** First-mover advantage unclear; horizontal expansion dilutes specialty depth

---

## Open Questions

**1. Will Epic ship specialty-depth scheduling within 24 months?**
If yes, the voice AI wedge collapses for all but the most complex specialties. Epic's UGM25 announced SMS scheduling but not specialty logic (28-day injection rules, body-part routing). The window for voice AI startups is 18-24 months before Epic native catches up.
> Would invalidate "specialty depth creates moat" bull case if Epic executes

**2. Does lock-in hold when original champion leaves the organization?**
BetterNight's lock-in quote came from a technical program manager. If that person leaves and new leadership wants to renegotiate, does the operational dependency still hold? No operator interview tested this scenario. The assumption that "workforce no longer exists" may not survive leadership turnover at the practice level.
> Would validate or invalidate "irreversible lock-in" claim at organizational level

**3. Can Tennr/Assort expand from single wedge to full practice OS before EHR vendors bundle?**
Both are racing toward platform status. NorCal Retina operator explicitly recommended this path: "Don't just manage the phone call part. Take responsibility of the whole new patient referral thing which includes faxes and web forms." First to capture both front-office and back-office wins the category before Epic/athena bundle.
> Would shift thesis toward platform vs. point-solution investment strategy

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-10 | [[manager-at-betternight-_-tennr-_-tegus-3c373487]] | Operator | "Could not untangle from Tennr... disastrous." 40 to 5 admins. "$10K increase I'd say yes." |
| 2025-07 | [[Chief Executive Officer at Barrington Orthopedic Specialists _ Assort Health _ Tegus]] | Operator | 40% to 6% abandonment. Wait times 15-20 to 2.5 min. Satisfaction 3.4 to 3.9/5. 7 to 4 FTEs. |
| 2025-07 | [[Chief Administrative Officer at a Medical Group _ Assort Health _ Tegus]] | Operator | 28-day retina injection rules. 4,000-5,000 calls/month at 95% accuracy. 3-month build. 9/10. |
| 2026-01 | [[Chief Operating Officer at Neb Medical Services _ Tennr _ Tegus]] | Operator | 90-95% of DME orders still handwritten fax. Fax queue cleared daily with 2 employees. 5 to 2 FTEs. |
| 2025-12 | [[tennr-mpowerhealth-936bbeef]] | Operator | "No real competitors in referral space." 9.5/10 rating. 6-12 min to 1-3 min processing. |
| 2025-12 | [[tennr-pinnacle-group-7764e76c]] | Operator | "EMR interop should have gone away 20 years ago." 7-month implementation. $50K-100K annual spend. |
| 2026-01 | [[tennr-_-thrivewell-9ec74cd9]] | Operator | ThriveWell: 25 min to 30 sec referral processing. Avoided 5-6 FTE hires. 9/10 rating. |
| 2025-12 | [[tennr-sleepquest-b48eb7eb]] | Operator | SleepQuest DME: Brightree API "took decades to learn." 60 WIP states. Custom workflow complexity = lock-in. |
| 2026-01 | [[Executive Vice President at Total Medical Supply Inc _ Tennr _ Tegus]] | Operator | 300 to 390 patients/employee. Avoided 14 FTE hires = $700K savings. 9/10 rating. |
| 2025-07 | [[3-assort-health-_-interviews-_-tegus-company-profile-c5b880a3]] | Operator | TrustCare chose Flip over Assort. Switching "not hard at all." 22 FTEs downsized. |
| 2025-07 | [[it-manager-at-luminary-hospice-_-assort-health-_-tegus-991d060b]] | Operator | Luminary Hospice: $150K/year Assort spend. "50% cheaper wouldn't cause switch." |
| 2025-12 | [[chief-innovation-officer-at-simonmed-imaging-_-tennr-_-tegus-224eecf0]] | Operator | SimonMed: "Would not work for radiology today." 200+ locations. Vendor skepticism. |
| 2026-01 | [[Sources/Granola/Jeremy Schwach and Virtue]] | Primary | Most voice AI = "marginal improvements." LinkedIn hype. Epic 200+ AI pilots. |
| 2025-12 | [[future-of-healthtech-2025-v2-e6b0381e]] | Research | 44% of healthtech VC to provider ops (up from 19% in 2021). 85% healthcare AI spend to startups. |
| 2025-12 | [[2025-12-23-zocdoc-launches-voice-ai-agent-zo-to-streamline-bo]] | News | Zocdoc Zo: $2/booked appointment. 70% resolution rate. Commoditization pressure. |
| 2025-03 | [[michael-wornow-a86b139b]] | Research | "$1 trillion spent annually on US healthcare administration." 61% burnout from bureaucratic tasks. |
| 2025-12 | [[voice-ai-2259d27c]] | Research | OpenAI Realtime API: $0.06/min input, $0.24/min output = $9/hr. Voice commoditizing. |

---

*Confidence: MEDIUM -- Strong operator evidence (10+ interviews) confirms lock-in mechanism for fax/referral wedge; weaker for voice wedge (TrustCare counter-example). Fax automation appears structurally defensible (no Epic competitor, Brightree API complexity); voice faces direct athena/Zocdoc commoditization. Key uncertainty: 95% pilot failure rate means most lock-in never materializes; thesis depends on identifying survivors early.*
*Last indexed: 2026-02-01*
*Last rebuilt: 2026-02-01*
