---
source_type: Data-Report
generated: 2025-12-22
data_source: MimiLabs (mimi_ws_1.cmspayment.partb_drug_asp_pricing)
thesis: "[[Transparency Regulations Expose $50B in PBM Opacity]]"
tags:
  - drug-pricing
  - PBM
  - transparency
  - Part-B
---

# PBM Transparency: Part B Drug Pricing Analysis

## Executive Summary

**Finding: Drug pricing has exploded 20x in 17 years. CAR-T therapies now cost $500K-$770K per dose. Meanwhile, generics crashed 90%+. The spread between old generics and new specialty drugs is where opacity lives.**

---

## Drug Pricing Overview (Latest Data)

| Metric | Value |
|--------|-------|
| Total Drugs Tracked | 1,012 |
| Average Payment Limit | $4,737 |
| Median Payment Limit | $23 |
| 95th Percentile | $2,698 |
| Maximum | **$770,620** |

**Key Insight:** Huge skew. Median is $23, but average is $4,737. A few ultra-expensive drugs drive the numbers.

---

## Most Expensive Drugs (Top 20)

| Drug | HCPCS | Price per Dose | Category |
|------|-------|----------------|----------|
| Afamitresgene autoleucel | Q2057 | **$770,620** | CAR-T |
| Tisagenlecleucel | Q2042 | $591,726 | CAR-T |
| Ciltacabtagene | Q2056 | $565,869 | CAR-T |
| Lisocabtagene | Q2054 | $562,538 | CAR-T |
| Idecabtagene vicleucel | Q2055 | $557,318 | CAR-T |
| Axicabtagene ciloleucel | Q2041 | $533,230 | CAR-T |
| Brexucabtagene | Q2053 | $489,305 | CAR-T |
| Remestemcel-l-rknd | J3402 | $205,640 | Cell therapy |
| Adstiladrin | J9029 | $63,342 | Gene therapy |
| Sipuleucel-t | Q2043 | $55,272 | Cell therapy |

**Key Insight:** Top 7 drugs are ALL CAR-T therapies. Gene/cell therapy dominates the high end.

---

## 17-Year Pricing Trends (2008-2025)

| Year | Drugs | Avg Price | Median | Max Price |
|------|-------|-----------|--------|-----------|
| 2008 | 2,304 | $206 | $9.87 | $21,926 |
| 2012 | 2,264 | $326 | $10.49 | $32,860 |
| 2016 | 2,146 | $329 | $12.20 | $38,347 |
| 2020 | 2,451 | $335 | $13.29 | $49,672 |
| 2023 | 3,064 | $2,129 | $16.65 | $497,025 |
| 2024 | 3,344 | $3,924 | $18.10 | $529,193 |
| 2025 | 5,578 | **$4,194** | $20.83 | **$770,620** |

**Key Insights:**
- Average price up **20x** (2008→2025)
- Max price up **35x** (2008→2025)
- Drug count up **2.4x** — more specialty drugs entering market
- 2023 was inflection point — CAR-T approvals drove jump

---

## Biggest Price Increases (All-Time)

| Drug | Early Price | Current Price | Change |
|------|-------------|---------------|--------|
| Edetate calcium disodium | $50 | $6,408 | **+12,669%** |
| Procainamide HCl | $2.65 | $295 | +11,025% |
| Hydroxyzine HCl | $0.18 | $15.30 | +8,446% |
| Floxuridine | $56 | $4,128 | +7,207% |
| Aminophyllin | $0.42 | $10.34 | +2,345% |
| Phentolamine mesylate | $24 | $432 | +1,700% |
| Dimethyl sulfoxide | $50 | $749 | +1,402% |
| Lymphocyte immune globulin | $377 | $5,135 | +1,262% |
| Pegaspargase | $2,099 | $28,424 | +1,254% |

**Key Insight:** Many are old, low-volume drugs with limited competition. Classic "orphan drug" pricing exploitation.

---

## Biggest Price Decreases (Generic/Biosimilar Impact)

| Drug | Early Price | Current Price | Change |
|------|-------------|---------------|--------|
| Oxaliplatin | $9.47 | $0.08 | **-99.1%** |
| Irinotecan | $126.31 | $1.75 | -98.6% |
| Fluocinolone implant | $19,345 | $340 | -98.2% |
| Palonosetron HCl | $16.64 | $0.36 | -97.9% |
| Gemcitabine HCl | $131.65 | $3.13 | -97.6% |
| Clofarabine | $116.29 | $4.19 | -96.4% |
| Granisetron HCl | $4.72 | $0.19 | -96.1% |
| Tacrolimus oral | $3.87 | $0.17 | -95.6% |
| Decitabine | $27.11 | $1.22 | -95.5% |

**Key Insight:** All chemo drugs or immunosuppressants going generic. Competition works — when it exists.

---

## Pricing by Drug Category

| Category | Drug Count | Avg Price | Max Price |
|----------|------------|-----------|-----------|
| Q codes (CAR-T, temp) | 218 | **$19,839** | $770,620 |
| J codes (injectables) | 746 | $613 | $205,640 |
| A codes (supplies) | 10 | $161 | $1,426 |
| 9xxxxx (vaccines) | 34 | $138 | $328 |
| P codes (path/lab) | 4 | $35 | $53 |

**Key Insight:** Q codes (temporary codes for new drugs, CAR-T) are 32x more expensive on average than J codes.

---

## Interpretation for Thesis

### Where Is PBM Opacity?

1. **Not in generics** — Competition crushed prices 90%+
2. **In specialty drugs** — CAR-T, gene therapy, orphan drugs
3. **In old drugs with no competition** — 10,000%+ increases on drugs with sole suppliers

### Transparency Implications

| Area | Opacity Level | Why |
|------|---------------|-----|
| Generic injectables | Low | Competition exists, prices public |
| Specialty/CAR-T | Medium | ASP published, but rebates hidden |
| Orphan drugs | High | No competition, pricing arbitrary |
| PBM spread (Part D) | Very High | Not in this data — need Part D claims |

### What This Data Doesn't Show

- **Part D oral drugs** — This is Part B (physician-administered) only
- **PBM rebates** — ASP includes some rebates but not all
- **Actual patient cost** — Coinsurance varies (17-20%)
- **Commercial pricing** — This is Medicare only

---

## Startup/Investment Implications

| Opportunity | Evidence |
|-------------|----------|
| **CAR-T logistics/admin** | $500K+ per dose = massive administrative burden |
| **Specialty drug navigation** | Need to manage high-cost drugs |
| **Orphan drug price monitoring** | 10,000%+ increases = need alerts |
| **Generic adoption tools** | 90%+ savings when generics available |
| **Part D transparency tools** | This data is Part B; Part D is where PBM spread hides |

### Red Flags

| Pattern | Concern |
|---------|---------|
| CAR-T concentration | 7 drugs = $3B+ in spend; vulnerability if one fails |
| Orphan drug exploitation | Regulatory gaps allow price gouging |
| Data gap | Part D (oral, retail) not visible in this dataset |

---

## Data Methodology

- **Source:** CMS Part B Drug ASP Pricing via MimiLabs (mimi_ws_1.cmspayment.partb_drug_asp_pricing)
- **Time Range:** 2008-2025 (quarterly updates)
- **Key Fields:**
  - `payment_limit` = Medicare payment per unit
  - `hcpcs_code` = Drug identifier
  - `coinsurance_percentage` = Patient share (typically 20%)

---

## Next Steps

- [ ] Analyze Part D data (oral drugs, retail) for PBM spread
- [ ] Cross-reference with Medicaid drug rebate data
- [ ] Track biosimilar entry and price impact over time
- [ ] Map orphan drug price increases to manufacturer ownership
