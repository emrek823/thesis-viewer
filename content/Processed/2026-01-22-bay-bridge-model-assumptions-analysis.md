---
type: research
topic: Bay Bridge Decacorn Model Assumptions - Software vs Biotech vs FM
date: 2026-01-22
assessment: ANSWERED
confidence: HIGH
rounds: 2
vault_sources: 5
web_sources: 8
---

# Key Assumptions in the Bay Bridge Model: Software vs Biotech vs Foundation Model Companies

The Bay Bridge "Anatomy of a Decacorn" framework compares tech and biotech paths to $10B+ outcomes. For your SMB conversation, here are the **most hand-wavy assumptions** and what evidence supports (or challenges) them.

---

## The Core Framework

Bay Bridge's insight: **MOIC alone is misleading.** You need to see:
1. Round size (determines portfolio construction)
2. Time-to-inflection (determines IRR)
3. Dilution per round (determines ownership at exit)
4. Exit multiple structure (determines terminal value)

---

## Assumption 1: Dilution Per Round

### What Bay Bridge Assumes (Implicit)
- ~20% dilution per round across stages (tech)
- ~25-30% dilution per round (biotech)

### Actual Data (Carta Q4 2024)

| Stage | General Market | Biotech Specific |
|-------|---------------|------------------|
| Seed | 18-20% | 22-28% |
| Series A | 20.5% median | **28.2% median** |
| Series B | 15-17% median | **24.5% median** |
| Series C+ | 12-15% | 20%+ |

**Source:** [Carta State of Private Markets Q4 2024](https://carta.com/data/state-of-private-markets-q4-2024/), [Qubit Biotech Valuation Benchmarks](https://qubit.capital/blog/biotech-series-a-b-valuation-benchmarks)

### The Gap: FM Companies

Foundation model companies are **structurally between** these:
- Lower dilution than biotech (no clinical trial capital sink)
- Higher dilution than pure software (compute-intensive, longer to revenue)

**SMB-specific:**
- Seed: 8% on $22.5M post → implied ~$1.8M check
- Bridge: 7.14% on $35M post → ~$2.5M check
- **Projected Series A:** 20% on $70M post → $14M check (better than biotech, worse than software)

**Hand-waviness level:** MEDIUM. Biotech dilution is well-documented. FM dilution is extrapolated from software with adjustment for capital intensity.

---

## Assumption 2: Time-to-Inflection

### Bay Bridge Numbers
| Company Type | Time to Inflection | Inflection Event |
|--------------|-------------------|------------------|
| Tech/Software | 2-3 years | Product-market fit |
| Biotech | 5-7 years | Phase 2 POC |

### The FM Insight: Compressed Timeline with Biotech-Like Upside

| Model | Inflection Point | Typical Capital | Typical Time |
|-------|-----------------|-----------------|--------------|
| **Software** | PMF / $1M ARR | $10-30M | 2-3 years |
| **Foundation Model** | First major pharma deal | $30-50M | 2-3 years |
| **Biotech** | Phase 2 POC | $75-150M | 5-7 years |
| **SMB (Actual)** | Sanofi $4.8M contract | **$5M** | **18 months** |

**Source:** [[SMB Re-investment Memo.md]]:196-204

**Why SMB is anomalous:**
- Noetik raised ~$50M before GSK $50M deal
- Chai raised $225M total at $1.3B valuation
- SMB reaching commercial validation on $5M → **6-10x more capital-efficient than FM peers**

**Hand-waviness level:** LOW for the general framework. HIGH for assuming SMB's capital efficiency is replicable or sustainable.

---

## Assumption 3: Exit Multiples

### The Structural Arbitrage

| Business Model | Revenue Multiple | Why |
|---------------|------------------|-----|
| **Biotech (pipeline)** | 3-5x revenue | Binary clinical risk, milestone-gated |
| **Biotech (platform)** | 6.2x median (Q4 2024) | Some recurring, still clinical exposure |
| **SaaS/Software** | 6-10x ARR (private), 10-15x (growth) | Recurring, predictable, low variance |
| **AI Infrastructure** | 15-25x ARR | Scarcity, strategic value, winner-take-most |

**Source:** [Finerva BioTech & Genomics 2025](https://finerva.com/report/biotech-genomics-2025-valuation-multiples/), [SaaS Capital 2025](https://www.saas-capital.com/blog-posts/private-saas-company-valuations-multiples/)

### The Key Bet: Does FM Licensing Get Software Multiples?

**Evidence FOR (from your thesis):**
- GSK-Noetik: $50M for 5-year model license + annual subscription
- Chai at $1.3B on $225M raised, zero approved drugs → that's software economics
- Same $50M ARR = $150-250M (biotech) vs $500-750M (software) → **2-3x arbitrage**

**Source:** [[AI Biotech Model Licensing Captures SaaS Multiples—Drug Deals Become Software Deals by 2028.md]]:16-18

**Evidence AGAINST:**
- BenevolentAI 90% collapse when hype met reality
- Phase II success rate unchanged at 28.9%
- Zero AI-discovered drugs approved

**Hand-waviness level:** HIGH. This is the core bet. The January 2026 deals (GSK-Noetik, Chai-Lilly, Boltz-Pfizer) are the first proof points, but NRR and renewal data won't exist until 2027-2028.

---

## Assumption 4: Capital Efficiency (Cost to First Major Deal)

### Bay Bridge's Implied Model

| Stage | Drug Asset | Typical FM | SMB Actual |
|-------|-----------|------------|------------|
| Discovery/Dev | $30-50M | $20-35M | $3M |
| Preclinical | $15-30M | $5-10M (compute) | $2M |
| First deal | 5-7 years | 12-18 months | 18 months |
| **Total to first deal** | **$55-100M** | **$30-50M** | **$5M** |

**Source:** [[SMB Re-investment Memo.md]]:217-222

### The Compounding Economics

| Metric | Drug Asset | Model License | SMB Projection |
|--------|-----------|---------------|----------------|
| Deal 1 cost | $50-100M | $3-5M | $5M |
| Deal 1 margin | Negative | 50-60% | ~60% (Sanofi) |
| Incremental deal cost | $50M+ (new asset) | $0.5M (license) | $0.5M |
| Year 3 margin (4 deals) | Still negative | 90%+ | Projected 90%+ |

**Why this matters for modeling:** The first FM deal is expensive (building the model). Deals 2-4 are nearly free (licensing same weights). This is SaaS economics applied to biotech.

**Hand-waviness level:** MEDIUM. The $5M to first deal is factual for SMB. The 90%+ margin projection for Deal 2+ is extrapolated from SaaS economics, not proven in biotech.

---

## Assumption 5: Round Size → Portfolio Construction

### Bay Bridge's Insight

A $300M fund can execute:
- **~45+ tech investments** at $3-4M average Series A check
- **~20 biotech investments** at $15-20M average Series A check

### FM Companies: The Middle Ground

| Company Type | Typical Seed | Typical Series A | Typical Series B |
|--------------|-------------|------------------|------------------|
| Software | $2-4M | $8-15M | $20-40M |
| Foundation Model | $5-15M | $15-30M | $40-80M |
| Biotech | $5-10M | $20-50M | $50-150M |

**SMB-specific:**
- Seed: $1.8M (below FM typical)
- Bridge: $2.5M
- Projected Series A: $15M at $70M post (low end of FM range)

**Hand-waviness level:** LOW. Round sizes are well-documented. The question is whether FM companies can sustain smaller rounds while still building moats.

---

## Assumption 6: Ownership at Exit (The Waterfall)

### Standard Model

```
Ownership at Exit = Entry Ownership × (1 - dilution_A) × (1 - dilution_B) × ...
```

### SMB Specific Calculation

| Stage | Dilution | Ownership Post |
|-------|----------|----------------|
| Post-Seed/Bridge | — | 15.14% |
| Series A (-20%) | 20% | 12.1% |
| Series B (-20%) | 20% | 9.7% |
| Pre-IPO/Exit (-15%) | 15% | 8.2% |

**Proceeds at exit valuations:**

| Exit Valuation | Ownership | Gross Proceeds | MOIC on $4.3M |
|----------------|-----------|----------------|---------------|
| $300M | 9.1% | $27.2M | 6.3x |
| $750M | 8.3% | $62.5M | 14.5x |
| $2.5B | 7.6% | $189M | 44x |
| $10B | 6.1% | $606M | 141x |

**Source:** [[2026-01-21-SMB-return-scenario-analysis.md]]:100-109

**Hand-waviness level:** LOW for the math. MEDIUM for the dilution assumptions (20% per round is optimistic for biotech, realistic for software/FM).

---

## The Three Unknowns for Your Bay Bridge Conversation

### 1. Does Model Licensing Actually Decouple from Clinical Risk?

**The bet:** If Insilico INS018_055 fails Phase II, does Chai's valuation collapse even though Chai isn't developing drugs?

**Test:** First renewal cycles (2027-2028). If NRR < 100%, SaaS thesis collapses.

### 2. Can Open-Source Sustain Pricing Power?

Boltz and Chai released base models open-source. If pharma can fine-tune internally, "exclusive" model premiums disappear.

**Watch:** Pharma hiring ML talent vs. licensing. Lilly TuneLab is the counter-signal (pharma building + selling, not just buying).

### 3. Is SMB's Capital Efficiency Replicable or Anomalous?

SMB reached inflection on $5M. Noetik required ~$50M. Either:
- SMB is 10x more efficient (Kevin's thesis)
- SMB hasn't truly reached inflection yet (Sanofi must close to prove it)

---

## What to Probe in Your Bay Bridge Conversation

1. **On dilution:** "Your model implies ~20% dilution per round. Biotech actually sees 25-30%. How does this change the MOIC math for FM companies that sit in between?"

2. **On time-to-inflection:** "You show biotech reaching $8-9B in 5 years from Series A, tech in 9 years. FM companies like Noetik and Chai are compressing the biotech timeline while retaining the upside. Is this sustainable or are we seeing a one-time arbitrage?"

3. **On multiples:** "The GSK-Noetik deal is $50M for model licensing, not biobucks. If FM companies command SaaS multiples (10-15x) instead of biotech multiples (3-5x), how does that change your return distribution analysis?"

4. **On the critical assumption:** "Your MOIC analysis depends on exit valuations being comparable across sectors. But biotech has binary outcomes (Phase 2 pass/fail) while software has continuous compounding. FM companies claim platform risk, not clinical risk. Do you buy that?"

---

## Sources

### Vault
- [[SMB Re-investment Memo.md]] — SMB-specific capital efficiency and deal economics
- [[AI Biotech Model Licensing Captures SaaS Multiples—Drug Deals Become Software Deals by 2028.md]] — Thesis on SaaS vs biotech multiples
- [[2026-01-21-SMB-return-scenario-analysis.md]] — SMB return scenarios and ownership waterfall
- [[Standard Model Biomedicine (SMB) - External Investment Memo]] — Original seed investment memo

### Web
- [Carta Q4 2024](https://carta.com/data/state-of-private-markets-q4-2024/) — Dilution by stage
- [Qubit Biotech Valuation Benchmarks](https://qubit.capital/blog/biotech-series-a-b-valuation-benchmarks) — Biotech-specific dilution
- [DCVC on Noetik-GSK](https://www.dcvc.com/news-insights/noetiks-partnership-with-gsk-puts-dollar-signs-on-the-ai-licensing-business-model-in-techbio/) — Model licensing deal structure
- [Finerva BioTech & Genomics 2025](https://finerva.com/report/biotech-genomics-2025-valuation-multiples/) — Biotech revenue multiples
- [SaaS Capital 2025](https://www.saas-capital.com/blog-posts/private-saas-company-valuations-multiples/) — SaaS valuation multiples
- [Endpoints News GSK-Noetik](https://endpoints.news/gsk-noetik-sign-cancer-deal-on-ai-virtual-cell-models/) — Deal terms
- [Tempus Revenue](https://finance.yahoo.com/news/tempus-ai-revenue-mix-2026-144100757.html) — Healthcare AI platform comp

---

*Research completed: 2026-01-22*
*For Bay Bridge Bio conversation prep*
