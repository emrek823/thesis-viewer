---
type: research
topic: "Model Licensing vs Drug Asset Economics - Deep Math"
date: 2026-01-09
relevance: SMB, foundation model business models, pharma AI deals
---

# The Math: Drug Assets vs Model Licensing

## Setup: Same AI Platform, Two Deal Structures

**Assumptions:**
- AI company has a validated foundation model for oncology
- 10 top-20 pharma companies want access
- Each pharma runs ~50 oncology programs where the model could help
- Drug development timelines: 10-15 years from discovery to approval
- Historical drug success rate: ~5% (discovery to approval)
- Cost of capital: 10% (for NPV calculations)

---

## Structure 1: Traditional Drug Asset Deal

### Deal Terms (Based on Recursion/Isomorphic benchmarks)

```
Per Pharma:
┌─────────────────────────────────────────────────────────────┐
│ Component              │ Amount      │ Timing               │
├────────────────────────┼─────────────┼──────────────────────┤
│ Upfront payment        │ $50M        │ Year 0               │
│ Research milestones    │ $25M        │ Years 1-2            │
│ IND filing             │ $25M        │ Year 3               │
│ Phase 1 completion     │ $50M        │ Year 5               │
│ Phase 2 completion     │ $75M        │ Year 7               │
│ Phase 3 completion     │ $100M       │ Year 10              │
│ FDA approval           │ $150M       │ Year 12              │
│ Commercial milestones  │ $200M       │ Years 13-15          │
├────────────────────────┼─────────────┼──────────────────────┤
│ TOTAL POTENTIAL        │ $675M       │ Per program          │
│ Royalties              │ 3-5% of     │ Years 13+            │
│                        │ net sales   │                      │
└─────────────────────────────────────────────────────────────┘
```

### Probability Waterfall (Industry Benchmarks)

```
Stage               Success Rate    Cumulative    Expected Value
                    (per stage)     Probability   (of $675M)
─────────────────────────────────────────────────────────────────
Discovery → IND        30%            30%           $202M
IND → Phase 1          75%            22.5%         $152M
Phase 1 → Phase 2      50%            11.25%        $76M
Phase 2 → Phase 3      30%            3.4%          $23M
Phase 3 → Approval     60%            2.0%          $14M
─────────────────────────────────────────────────────────────────
NET PROBABILITY                       ~2-5%

Using 5% overall success rate for simplicity
```

### Expected Value Calculation (Single Pharma, Single Program)

```
                        Probability    Payment    Expected Value
─────────────────────────────────────────────────────────────────
Upfront                    100%         $50M         $50.0M
Research milestones         80%         $25M         $20.0M
IND filing                  30%         $25M          $7.5M
Phase 1 completion          22%         $50M         $11.0M
Phase 2 completion          11%         $75M          $8.3M
Phase 3 completion           3%        $100M          $3.0M
FDA approval                 2%        $150M          $3.0M
Commercial milestones        2%        $200M          $4.0M
─────────────────────────────────────────────────────────────────
EXPECTED VALUE (nominal)                            $106.8M
```

### But Wait: Time Value of Money

```
                        Probability   Payment   Year   PV Factor   Expected PV
                                                       (10% disc)
────────────────────────────────────────────────────────────────────────────────
Upfront                    100%        $50M      0      1.000        $50.0M
Research milestones         80%        $25M      1.5    0.859        $17.2M
IND filing                  30%        $25M      3      0.751         $5.6M
Phase 1 completion          22%        $50M      5      0.621         $6.8M
Phase 2 completion          11%        $75M      7      0.513         $4.2M
Phase 3 completion           3%       $100M     10      0.386         $1.2M
FDA approval                 2%       $150M     12      0.319         $1.0M
Commercial milestones        2%       $200M     14      0.263         $1.1M
────────────────────────────────────────────────────────────────────────────────
NPV OF EXPECTED VALUE                                               $87.1M
```

### Scaling to 10 Pharmas, Multiple Programs

```
Scenario A: Conservative (1 program per pharma)
──────────────────────────────────────────────
10 pharmas × 1 program × $87M NPV = $870M expected NPV

Scenario B: Moderate (3 programs per pharma)
──────────────────────────────────────────────
10 pharmas × 3 programs × $87M NPV = $2.6B expected NPV

Scenario C: Aggressive (10 programs per pharma)
───────────────────────────────────────────────
10 pharmas × 10 programs × $87M NPV = $8.7B expected NPV
```

### The Variance Problem

```
DISTRIBUTION OF OUTCOMES (10 pharmas × 3 programs = 30 programs)

Expected successes: 30 × 5% = 1.5 drugs approved

But actual outcomes follow binomial distribution:

P(0 approvals)  = 21%   →  Revenue: ~$1.5B (upfronts + early milestones only)
P(1 approval)   = 34%   →  Revenue: ~$2.2B
P(2 approvals)  = 26%   →  Revenue: ~$2.9B
P(3 approvals)  = 13%   →  Revenue: ~$3.6B
P(4+ approvals) =  6%   →  Revenue: ~$4.3B+

VARIANCE IS MASSIVE:
- 21% chance you get only ~$1.5B (mostly upfronts)
- 6% chance you get $4B+ (multiple blockbusters)
- Expected value ~$2.6B but huge uncertainty
```

---

## Structure 2: Model Licensing Deal

### Deal Terms (Based on Noetik-GSK)

```
Per Pharma:
┌─────────────────────────────────────────────────────────────┐
│ Component              │ Amount      │ Timing               │
├────────────────────────┼─────────────┼──────────────────────┤
│ Upfront license fee    │ $30M        │ Year 0               │
│ Implementation fee     │ $5M         │ Year 0               │
│ Annual subscription    │ $10M/year   │ Years 1-5            │
│ Usage/compute fees     │ $2M/year    │ Years 1-5            │
│ Renewal (years 6-10)   │ $8M/year    │ Years 6-10           │
├────────────────────────┼─────────────┼──────────────────────┤
│ TOTAL (10 years)       │ $135M       │ Guaranteed           │
│ Expansion potential    │ +$50M       │ Additional TAs       │
└─────────────────────────────────────────────────────────────┘
```

### Expected Value Calculation (Single Pharma)

```
                           Probability   Payment   Year   PV Factor   Expected PV
                                                          (10% disc)
─────────────────────────────────────────────────────────────────────────────────
Upfront license               100%        $30M      0      1.000        $30.0M
Implementation                100%         $5M      0      1.000         $5.0M
Year 1 subscription           95%         $10M      1      0.909         $8.6M
Year 2 subscription           90%         $10M      2      0.826         $7.4M
Year 3 subscription           85%         $10M      3      0.751         $6.4M
Year 4 subscription           80%         $10M      4      0.683         $5.5M
Year 5 subscription           75%         $10M      5      0.621         $4.7M
Usage fees (Y1-5)             90%         $10M    2.5      0.784         $7.1M
Renewal (Y6-10, discounted)   60%         $40M      8      0.467        $11.2M
─────────────────────────────────────────────────────────────────────────────────
NPV OF EXPECTED VALUE                                                   $85.9M
```

**Note:** I'm applying modest churn rates (5-10% per year) because pharma switches vendors slowly. Even with churn, the NPV is comparable to traditional deals.

### Scaling to 10 Pharmas

```
10 pharmas × $86M NPV = $860M expected NPV

But here's the key difference:
─────────────────────────────────────────

VARIANCE IS MINIMAL:
- Worst case (high churn): $650M
- Expected case: $860M
- Best case (low churn + expansion): $1.1B

Compare to traditional:
- Worst case: $1.5B (but took 15 years)
- Expected case: $2.6B (but took 15 years)
- Best case: $4B+ (but took 15 years)
```

---

## Head-to-Head Comparison

### NPV Comparison (10 Pharmas, 10-Year Horizon)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           TRADITIONAL          MODEL LICENSING          │
│                           (Drug Assets)        (Subscriptions)          │
├─────────────────────────────────────────────────────────────────────────┤
│ Year 0                      $500M                 $350M                 │
│ Year 1                      $160M                 $120M                 │
│ Year 2                      $120M                 $115M                 │
│ Year 3                       $75M                 $110M                 │
│ Year 4                       $50M                 $105M                 │
│ Year 5                      $110M                 $100M                 │
│ Year 6                       $40M                  $80M                 │
│ Year 7                       $83M                  $75M                 │
│ Year 8                       $30M                  $70M                 │
│ Year 9                       $20M                  $65M                 │
│ Year 10                      $30M                  $60M                 │
├─────────────────────────────────────────────────────────────────────────┤
│ CUMULATIVE (nominal)      $1,218M               $1,250M                 │
│ NPV (10% discount)          $870M                 $860M                 │
├─────────────────────────────────────────────────────────────────────────┤
│ YEARS 11-15 (traditional)  +$400M                  $0                   │
│ (late milestones if drugs  (highly                                      │
│  succeed)                   uncertain)                                  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Visualized: Cumulative Revenue Over Time

```
CUMULATIVE REVENUE ($M)

1400 │                                              ┌── Model Licensing
     │                                         ────/
1200 │                                    ────/
     │                               ────/     ·····  Traditional
1000 │                          ────/     ·····      (expected)
     │                     ────/    ·····
 800 │                ────/   ·····
     │           ────/  ·····
 600 │      ────/ ·····
     │  ────/····
 400 │ /···
     │/·
 200 │
     │
   0 └────────────────────────────────────────────────────────────────
        0    1    2    3    4    5    6    7    8    9   10   11   12
                                  YEARS

     ──── Model Licensing (predictable)
     ···· Traditional (expected value, but high variance)
```

### The Variance Difference (Visual)

```
RANGE OF OUTCOMES AT YEAR 10

Traditional Deal:
├──────────────────────────────────────────────────────────────────────┤
$500M                    $870M                              $1,800M
(0 drugs approved)       (expected)                    (3+ drugs approved)
     ◄────────────────────────────────────────────────────────────────►
                        HUGE UNCERTAINTY


Model Licensing:
                    ├────────────────────┤
                  $700M    $860M      $1,000M
                  (churn)  (expected)  (expansion)
                         NARROW RANGE
```

---

## The Real Insight: Risk-Adjusted Multiples

### What Investors Pay For

```
VALUATION = REVENUE × MULTIPLE

The multiple depends on:
1. Predictability of revenue
2. Recurring vs one-time
3. Growth rate
4. Margin profile
```

### Comparable Multiples

```
┌────────────────────────────────────────────────────────────────────┐
│ Business Type              │ Revenue Multiple │ Why                │
├────────────────────────────┼──────────────────┼────────────────────┤
│ Biotech (drug assets)      │ 2-4x revenue     │ High risk, binary  │
│ Biotech (platform + drugs) │ 4-6x revenue     │ Some recurring     │
│ Healthcare SaaS            │ 6-10x revenue    │ Recurring, sticky  │
│ Enterprise SaaS            │ 8-15x revenue    │ Highly predictable │
│ AI/ML SaaS (hot)           │ 15-25x revenue   │ Growth + stickiness│
└────────────────────────────────────────────────────────────────────┘
```

### Same Revenue, Different Valuations

```
AI Company at $100M Annual Revenue:

┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  TRADITIONAL (Drug Assets)           MODEL LICENSING                 │
│                                                                      │
│  Revenue: $100M                      Revenue: $100M                  │
│  (upfronts + milestones)             (subscriptions)                 │
│                                                                      │
│  Multiple: 3-5x                      Multiple: 10-15x                │
│  (biotech)                           (SaaS)                          │
│                                                                      │
│  ┌─────────────────┐                 ┌─────────────────┐             │
│  │                 │                 │                 │             │
│  │   VALUATION     │                 │   VALUATION     │             │
│  │                 │                 │                 │             │
│  │   $300-500M     │                 │   $1.0-1.5B     │             │
│  │                 │                 │                 │             │
│  └─────────────────┘                 └─────────────────┘             │
│                                                                      │
│            ◄──────────  3x DIFFERENCE  ──────────►                   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Scenario Analysis: $50M ARR Company

### Traditional Structure

```
Revenue composition:
- Upfronts: $30M (60%)
- Milestones: $15M (30%) — dependent on drug progress
- Services: $5M (10%)

Investor view:
- "Lumpy, unpredictable"
- "What happens when current deals end?"
- "Milestone risk — do the drugs work?"
- Multiple: 4x

Valuation: $50M × 4 = $200M
```

### Model Licensing Structure

```
Revenue composition:
- Subscription: $35M (70%) — recurring
- Usage fees: $10M (20%) — recurring
- Implementation: $5M (10%) — one-time

Investor view:
- "Predictable, recurring"
- "Net revenue retention?"
- "Can you expand within accounts?"
- Multiple: 12x

Valuation: $50M × 12 = $600M
```

### The Arbitrage

```
SAME UNDERLYING TECHNOLOGY
SAME CUSTOMER BASE
SAME TEAM

Different structure → 3x valuation difference

$200M vs $600M
```

---

## Cash Flow Timing (Why This Matters for Startups)

### Traditional Deal: Cash Flow Profile

```
ANNUAL CASH FLOW ($M) — SINGLE $500M DEAL

     │
 150 │  █
     │  █
 100 │  █
     │  █  █
  50 │  █  █  █                          █
     │  █  █  █  █  █     █     █  █     █     █
   0 │──█──█──█──█──█──░──█──░──█──█──░──█──░──█──░───────
     │           ░  ░  ░     ░        ░     ░     ░
 -50 │
     └────────────────────────────────────────────────────
        0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
                           YEARS

     █ = Cash received
     ░ = R&D spend to support programs

PROBLEM: Big upfront, then uncertainty for 10+ years
         You might wait 12 years for FDA approval milestone
```

### Model Licensing: Cash Flow Profile


```
ANNUAL CASH FLOW ($M) — 10 CUSTOMERS × $10M/YEAR

     │
 150 │
     │
 100 │  █████████████████████████████████████████████
     │  █████████████████████████████████████████████
  50 │  █████████████████████████████████████████████
     │  █████████████████████████████████████████████
   0 │──█████████████████████████████████████████████────
     │
 -50 │
     └────────────────────────────────────────────────────
        0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
                           YEARS

BENEFIT: Predictable, steady, bankable
         Can plan hiring, R&D, expansion with confidence
```

---

## What This Means for SMB

### Current SMB Structure (Sanofi Deal)

```
┌─────────────────────────────────────────────────────────────┐
│ Component              │ Amount      │ Type                 │
├────────────────────────┼─────────────┼──────────────────────┤
│ POC                    │ $360K       │ One-time             │
│ Per-TA deployment      │ $800K × 6   │ Project-based        │
│ Total                  │ $5.16M      │ Mostly one-time      │
└─────────────────────────────────────────────────────────────┘

Investor view: "Consulting-like, project-based"
Multiple: 3-5x (if revenue scales)
```

### Potential SMB Structure (Model Licensing)

```
┌─────────────────────────────────────────────────────────────┐
│ Component              │ Amount      │ Type                 │
├────────────────────────┼─────────────┼──────────────────────┤
│ Upfront license        │ $2M         │ One-time             │
│ Annual platform fee    │ $1.5M/year  │ Recurring            │
│ Per-TA access          │ $300K/TA    │ Recurring            │
│ Usage/compute          │ $200K/year  │ Usage-based          │
│ Total Year 1           │ $5.5M       │ 75% recurring        │
│ Total Year 2+          │ $3.5M/year  │ 95% recurring        │
└─────────────────────────────────────────────────────────────┘

Investor view: "Platform with expansion revenue"
Multiple: 8-12x
```

### The Math for SMB at Scale

```
Scenario: 5 Pharma Customers

CURRENT STRUCTURE (Project-based):
─────────────────────────────────
Year 1: 5 × $5M = $25M (one-time heavy)
Year 2: 2 × $5M = $10M (need new deals)
Year 3: 2 × $5M = $10M (need new deals)

Cumulative Y1-3: $45M
Valuation at 4x: $100M (on ~$15M run-rate)


MODEL LICENSING STRUCTURE:
──────────────────────────
Year 1: 5 × $5M = $25M (license + subscription)
Year 2: 5 × $3.5M + 2 × $5M = $27.5M (renewals + new)
Year 3: 7 × $3.5M + 2 × $5M = $34.5M (renewals + new)

Cumulative Y1-3: $87M
Valuation at 10x: $345M (on $35M run-rate)

SAME CUSTOMERS, SAME TECHNOLOGY
3.5x HIGHER VALUATION
```

---

## The Strategic Question

### For SMB's Series A Pitch

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  OPTION A: "We deliver custom models to pharma"                     │
│                                                                     │
│  - Revenue: $5M Sanofi + pipeline                                   │
│  - Structure: Per-TA project fees                                   │
│  - Investor lens: Consulting/services                               │
│  - Multiple: 4-6x                                                   │
│  - At $20M revenue → $80-120M valuation                             │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  OPTION B: "We license foundation model infrastructure"             │
│                                                                     │
│  - Revenue: Same $5M, but structured as license + subscription      │
│  - Structure: Platform access fees                                  │
│  - Investor lens: Vertical SaaS / AI infrastructure                 │
│  - Multiple: 10-15x                                                 │
│  - At $20M revenue → $200-300M valuation                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

THE UNDERLYING TECHNOLOGY IS IDENTICAL
THE CUSTOMER VALUE IS IDENTICAL
THE VALUATION IS 2-3x DIFFERENT
```

---

## Key Takeaways

1. **NPV is similar** — at 10-year horizon, both structures generate ~$850-900M NPV from 10 pharma customers

2. **Variance is massively different** — traditional has 4x range of outcomes; licensing has 1.5x range

3. **Timing is different** — licensing front-loads cash; traditional back-loads to years 10-15

4. **Multiples are different** — SaaS gets 10-15x; biotech gets 3-5x on same revenue

5. **The arbitrage is real** — same technology, same customers, 2-3x valuation difference based on structure

6. **Noetik just proved it works** — GSK paid $50M for model access, not drug assets

---

## Questions for Further Analysis

1. **Will pharma accept subscription pricing?** Noetik got GSK to sign. Can SMB get Sanofi to restructure?

2. **What's the right price point?** $10M/year subscription? $5M/year? Depends on value delivered.

3. **Non-exclusive = commoditization?** If you license to 10 pharmas, do they all get the same model? How do you maintain differentiation?

4. **Switching costs?** SaaS multiples assume stickiness. Is a foundation model sticky once deployed?

5. **Hybrid model?** Could SMB do license + subscription + success milestones? Capture upside while ensuring base revenue?

---

*Deep dive completed 2026-01-09*
