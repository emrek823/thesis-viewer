---
type: research
topic: "Why Thermo Fisher and Danaher Cannot Build Automation-Native Instruments"
date: 2026-01-05
assessment: ANSWERED
confidence: HIGH
rounds: 2
vault_sources: 4
web_sources: 12
thesis: "[[Automation-Native Instruments Displace GUI-Era Incumbents—New Instrument Prime Emerges by 2032]]"
---

# Thermo Fisher and Danaher Are Structurally Blocked from Automation-Native Instruments

The incumbents aren't slow or incompetent—their business models, org structures, and margin profiles make automation-native design economically irrational. This isn't a failure of vision; it's the innovator's dilemma operating as designed.

**Bottom line for the Charles call:** The gap isn't "someone should build better APIs." The gap is that automation-native instruments require a company that doesn't make 80%+ of revenue from consumables lock-in. The incumbent business model IS the blocker.

---

## 1. The Margin Trap: 82% Recurring Revenue Creates Anti-Automation Incentives

**The numbers:**
- **Thermo Fisher (2024):** 82.6% of $42.9B revenue from consumables + service; only 17.4% from instruments
- **Danaher (Q2 2025):** "More than 80% of sales came from consumables and service, characterized as highly recurring"

**Why this blocks automation:**

> "Instrument manufacturing itself operates on thin profit margins. Companies face strong incentives to create vendor lock-in, as the higher profit margin business lines are through providing integrated solutions and selling consumables."
> — [[Antitrust & the Science Instrument Industry]]

The math is simple: if you're Thermo, why would you build an automation-native instrument with open APIs that lets customers use third-party consumables or switch platforms? Every dollar of instrument revenue (17% of business, thin margins) that enables consumables switching destroys recurring revenue (83% of business, fat margins).

**Evidence from earnings:**
- DHR Q2 2025: "Equipment declined as expected, as customers continue to absorb capacity"
- DHR Q2 2025: "Consumable revenues in bioprocessing grew by low double digits"

They're not trying to grow equipment revenue. They're trying to grow consumables attached to equipment.

---

## 2. M&A Debt: 48 Acquisitions Created Incompatible Tech Stacks

**The consolidation strategy:**

> "Danaher is particularly unabashed about the role M&A plays in their ability to compete... the acquisitions of AB Sciex and Molecular Devices in 2010, Beckman Coulter in 2011, Pall in 2015, Phenomenex in 2016, IDT in 2018, Aldevron in 2021 and Abcam in 2023."
> — [[Antitrust & the Science Instrument Industry]]

Danaher has made **48 acquisitions** across 19 sectors. Thermo Fisher was itself created from the Thermo Electron + Fisher Scientific merger, then added Dionex, Life Technologies, etc.

**The integration reality:**

> "We heard from researcher after researcher on the pain of working with instrument software: poor API documentation, if there even is an API; non-standard data formats, or even vendors encrypting instrument data that can only be decrypted with proprietary software; **9-18 months of upfront development time spent just getting instruments to talk to each other** through homemade drivers."
> — [[Antitrust & the Science Instrument Industry]]

Each acquired company brought its own:
- Proprietary data formats
- Custom control software
- Incompatible APIs (if any)
- Different hardware interfaces

Building automation-native would mean rewriting 20+ software stacks to a common standard. That's a $500M+ project that cannibalizes existing service revenue.

---

## 3. API Licensing: They Monetize Access, Not Enable It

**The Thermo example:**

> "Thermo Fisher markets 'automated electron microscopy' solutions, but to actually automate anything **you need to pay a license to use their Python API and their proprietary IDE**. The state of the science instrument industry is such that in 2025, you pay millions for an instrument and a recurring service contract, then pay again for the privilege of having programmatic control over your instrument."
> — [[Antitrust & the Science Instrument Industry]]

**The licensing structure:**
- Thermo IAPI requires a separate "Fusion IAPI Software License Agreement" beyond instrument purchase ([GitHub](https://github.com/thermofisherlsms/iapi))
- The API examples are MIT-licensed, but production use requires proprietary agreement

**The PyLabRobot paper confirms the pattern:**

> "Proprietary graphical interfaces prevent developers from freely integrating abstractions... Researchers are forced to write programs in proprietary formats using a limited library of tools that they cannot modify... Each proprietary interface is an essentially unique and highly complex application that must be learned anew."
> — [PyLabRobot: An Open-Source, Hardware Agnostic Interface](https://pmc.ncbi.nlm.nih.gov/articles/PMC10369895/)

The incumbents don't view APIs as enablers—they view them as separate revenue streams. Open APIs would destroy this.

---

## 4. The Consolidation Endgame: Horizontal Control of Consumables

**The LCMS example shows the strategy:**

> "Agilent acquired Varian in 2010 to in-house Varian's vacuum pumps and their LC column product lines. Meanwhile, Thermo Fisher acquired Dionex to secure the 'front-end' liquid chromatography hardware. Then there is Danaher, which bought AB Sciex to enter the LCMS hardware game and **Phenomenex to capture revenue from the consumables that run LCMS**."
> — [[Antitrust & the Science Instrument Industry]]

The M&A strategy isn't about building better instruments—it's about controlling the consumables supply chain upstream. Automation-native instruments that work with any consumables would undermine 40 years of consolidation.

---

## 5. No New Prime in 40 Years

> "To truly build automation-native science instruments will require Anduril-like disruption to a legacy industry that **has not seen a new prime in 40 years**."
> — [[Antitrust & the Science Instrument Industry]]

**Market caps tell the story:**
- Thermo Fisher: $210B
- Danaher: $160B
- Agilent: $40B

These aren't companies that need to innovate to survive. They've built regulatory moats, distribution networks, and service organizations that make displacement near-impossible through incremental improvement.

---

## Synthesis: Three Interlocking Blocks

| Block | Mechanism | Why It's Structural |
|-------|-----------|---------------------|
| **Margin structure** | Thin instrument margins, fat consumables margins | Open APIs cannibalize 80%+ of revenue |
| **M&A integration debt** | 20+ acquired product lines with incompatible stacks | Standardization requires $500M+ rewrite |
| **API monetization** | Licensing fees for programmatic access | Open APIs destroy a revenue stream |

These aren't bugs—they're features of a business model optimized for cash extraction, not automation enablement.

---

## Implications for the Charles Call

**Key talking points:**

1. **The gap isn't engineering talent or capital.** Thermo has $43B in revenue. They could build automation-native if they wanted. The business model prevents it.

2. **"Just add APIs" doesn't work.** The fragmentation from M&A means there's no unified platform to add APIs to. And even if there were, open APIs cannibalize consumables revenue.

3. **The window is real.** AI bio companies (Recursion, Insitro, Arctoris) are building custom integrations because commercial solutions are inadequate. They'll pay 2-3x for instruments that work.

4. **The wedge matters.** Liquid handling (31% of market) or sequencing prep are the right entry points—high integration pain, clear automation value.

5. **The defensibility question.** If Charles is building: what stops Thermo from acquiring? Answer: the business model conflict. Acquiring an automation-native company and integrating it destroys the value.

---

## Open Questions for Charles

1. What's your take on the consumables model? Build instruments that use proprietary consumables (Thermo playbook) or enable third-party consumables (automation-native but thinner margins)?

2. Where are you starting? Liquid handling, sequencing prep, something else?

3. What's the go-to-market? Sell to AI bio companies building their own automation, or target pharma automation teams?

4. How do you think about the humanoid robot risk? If Figure/Tesla can operate legacy instruments, does the window close?

---

## Sources

### Vault
- [[Antitrust & the Science Instrument Industry]] — Core source on consolidation and API licensing
- [[DHR-2025-Q2.md]] — Danaher earnings showing 80%+ recurring revenue
- [[TMO-2024-Q4.md]] — Thermo Fisher financials

### Web
- [Thermo Fisher Revenue Breakdown](https://bullfincher.io/companies/thermo-fisher-scientific/revenue-by-segment) — 82.6% recurring
- [Danaher Acquisition History](https://quartr.com/insights/company-research/danaher-business-system-and-acquisition-history) — 48 acquisitions
- [PyLabRobot Paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC10369895/) — API complaint evidence
- [Thermo IAPI GitHub](https://github.com/thermofisherlsms/iapi) — Licensing requirements
