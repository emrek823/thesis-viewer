# Solstice Health Contract Reconciliation

**Date:** January 19, 2026
**Purpose:** Reconcile contracted revenue figures across financial model and signed contracts

---

## Executive Summary

We identified discrepancies between three data sources:
1. **Historical P&L** (Jan 2026): $156,300/month
2. **Forecast Model "Contracted Revenue"** (Jan 2026): $221,900/month
3. **Actual Signed Contracts**: ~$129,500/month

**Key finding:** The forecast model overstates contracted revenue by ~$65,600/month vs. the historical P&L, and by ~$92,400/month vs. contract documentation.

---

## Detailed Reconciliation

| Customer     | Historical P&L | Forecast Model | Contract Value  | Contract Status      |
| ------------ | -------------- | -------------- | --------------- | -------------------- |
| Phathom      | $9,000         | $9,000         | $9,000/mo       | ✅ Signed             |
| Ipsen        | $15,000        | $15,000        | $15,000/mo      | ✅ Signed             |
| Nuvation Bio | $25,000        | $25,000        | $25,000/mo      | ✅ Signed (6-mo term) |
| **Alexion**  | **$30,000**    | **$60,000**    | **$29,167/mo**  | ⚠️ Gap               |
| **Sanofi**   | **$17,300**    | **$52,900**    | **~$27,000/mo** | ⚠️ Gap               |
| UCB          | $24,300        | $24,300        | $24,333/mo      | ✅ Signed (3-mo term) |
| Incyte       | $0             | —              | $11k pilot done | ✅ Complete           |
| **Ardelyx**  | **$33,000**    | **$33,000**    | **$0**          | ❌ Not signed         |
| **Pfizer**   | **$2,700**     | **$2,700**     | **$0**          | ❌ No contract        |
| **TOTAL**    | **$156,300**   | **$221,900**   | **~$129,500**   |                      |

---

## Items Requiring Clarification

### 1. Alexion/AstraZeneca: $60k vs $30k

| Source | Monthly Value |
|--------|---------------|
| Forecast Model | $60,000 |
| Historical P&L | $30,000 |
| SOW #2 (2026) | $29,167 ($350k/year) |

**Contract details:** SOW #2 covers ULTOMIRIS (gMG Patient + HCP) and 1720 Marketing Team for $350,000/year total.

**Question:** What justifies the $60,000 figure in the forecast? Is there additional scope, a second SOW, or expected expansion not yet contracted?

---

### 2. Sanofi: $52.9k vs $17.3k

| Source | Monthly Value |
|--------|---------------|
| Forecast Model | $52,900 |
| Historical P&L | $17,300 (Dupixent only) |
| SOW #1 (AICE) | ~$18,000 (€100k/6mo) |
| SOW #2 (Dupixent) | ~$14,000 (€52k/4mo) |
| Combined | ~$32,000 |

**Contract details:**
- SOW #1: Mature brands (Toujeo, Multaq, Jevtana) - 6-month MVP starting Jan 2026
- SOW #2: Dupixent EU/US - 4-month MVP starting Jan 2026

**Question:** The forecast shows Befortus and General Medicines contributing to the $52.9k total, but these show $0 in the historical P&L. Are these contracted or projected?

---

### 3. Ardelyx: $33,000 — Contract Not Signed

| Source | Monthly Value |
|--------|---------------|
| Forecast Model | $33,000 |
| Historical P&L | $33,000 |
| Signed Contract | None |

**Status:** MSA is in negotiation ("In Execution" folder). SOW templates are blank with no pricing.

**Question:** Should Ardelyx be counted as "contracted revenue" or moved to pipeline until signed?

---

### 4. Pfizer: $2,700 — No Contract Found

| Source | Monthly Value |
|--------|---------------|
| Forecast Model | $2,700 |
| Historical P&L | $2,700 |
| Contract on file | None |

**Question:** Where is the Pfizer contract documentation? Is this a verbal/email agreement?

---

## Short-Term Contract Risk

Two customers have contracts ending soon:

| Customer | Monthly Value | Contract End Date | Risk |
|----------|---------------|-------------------|------|
| Nuvation Bio | $25,000 | June 30, 2026 | 6-month term |
| UCB | $24,300 | ~March 2026 | 3-month pilot |

**Combined exposure:** $49,300/month ($591,600 annualized) if not renewed.

---

## Summary of Adjustments Needed

### If using conservative (contract-backed) figures:

| Line Item | Current Forecast | Suggested Adjustment | Variance |
|-----------|------------------|---------------------|----------|
| Alexion | $60,000 | $29,167 | -$30,833 |
| Sanofi | $52,900 | $32,000 | -$20,900 |
| Ardelyx | $33,000 | $0 (until signed) | -$33,000 |
| Pfizer | $2,700 | $0 (until documented) | -$2,700 |
| **Total Adjustment** | | | **-$87,433** |

**Conservative contracted revenue:** $134,467/month (~$1.6M ARR)

### If forecast figures are correct:

Please provide documentation for:
1. Alexion expanded scope ($60k vs $29k contract)
2. Sanofi Befortus and General Medicines contracts
3. Ardelyx signed SOW with pricing
4. Pfizer contract or agreement

---

## Recommended Actions

1. **Confirm Alexion scope** — Is there a second SOW or expansion agreement beyond the $350k/year contract?

2. **Clarify Sanofi breakdown** — Which brands are actually under contract vs. projected?

3. **Get Ardelyx signed** — If expecting $33k/month, need signed SOW with pricing

4. **Locate Pfizer documentation** — Even for a pilot, should have something on file

5. **Align Historical P&L with Forecast** — The two sheets show different numbers for the same customers (Jan 2026). Which is the source of truth?

---

## Appendix: Contract Details

### Signed Contracts

| Customer | Contract Value | Term | Brands |
|----------|---------------|------|--------|
| Phathom | $118k/year | 1 year (Sept 2025) | VOQUEZNA |
| Ipsen | $180k/year | 12 months (2026) | ONIVYDE (3 use cases) |
| Nuvation Bio | $150k | 6 months (Jan-Jun 2026) | IBTROZI |
| Alexion | $350k/year | 12 months (2026) | ULTOMIRIS, 1720 |
| Sanofi SOW 1 | €100k | 6 months MVP | Toujeo, Multaq, Jevtana |
| Sanofi SOW 2 | €52k | 4 months MVP | Dupixent EU/US |
| UCB | $73k | 3 months | Bimzelx |
| Incyte | $11k | Project-based | Opzelura (completed) |

### Pending/Missing

| Customer | Claimed Value | Status |
|----------|--------------|--------|
| Ardelyx | $395k/year | MSA in negotiation |
| Pfizer | $32.4k/year | No contract on file |

---

*Report generated from contract review on January 19, 2026*
