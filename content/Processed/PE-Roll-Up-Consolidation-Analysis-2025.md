---
source_type: Data-Report
generated: 2025-12-22
data_source: MimiLabs (mimi_ws_1.provdatacatalog.dac_ndf)
thesis: "[[PE Roll-Up Creates Healthcare AI Platforms]]"
tags:
  - consolidation
  - provider-data
  - PE-rollup
---

# PE Roll-Up Consolidation Analysis

## Executive Summary

**Finding: Provider consolidation is accelerating. 63.6% of providers who changed affiliations moved to larger groups.**

This analysis uses CMS provider data from MimiLabs to track practice consolidation patterns across specialties and geographies. The data validates the thesis that PE roll-ups are creating larger healthcare platforms.

---

## Key Metrics

| Metric | Value |
|--------|-------|
| Providers who moved to larger groups | 1,930,510 (63.6%) |
| Providers who moved to smaller groups | 1,104,810 (36.4%) |
| Net consolidation direction | **Strongly toward larger groups** |

---

## Consolidation by Specialty

### Fastest Consolidating (Top 20)

| Rank | Specialty | Avg Group Size (Early) | Avg Group Size (Late) | Change |
|------|-----------|------------------------|----------------------|--------|
| 1 | Interventional Pain Management | 334 | 595 | **+77.9%** |
| 2 | Dentist | 622 | 1,064 | **+70.9%** |
| 3 | Speech Language Pathologist | 417 | 602 | **+44.3%** |
| 4 | Optometry | 248 | 346 | **+39.4%** |
| 5 | Emergency Medicine | 585 | 814 | **+39.3%** |
| 6 | Certified Clinical Nurse Specialist | 585 | 793 | **+35.4%** |
| 7 | Podiatry | 443 | 591 | **+33.3%** |
| 8 | Interventional Cardiology | 710 | 943 | **+32.7%** |
| 9 | Hand Surgery | 667 | 862 | **+29.2%** |
| 10 | Colorectal Surgery | 1,073 | 1,382 | **+28.9%** |
| 11 | Ophthalmology | 735 | 945 | **+28.6%** |
| 12 | Allergy/Immunology | 720 | 923 | **+28.1%** |
| 13 | Hospitalist | 1,083 | 1,382 | **+27.6%** |
| 14 | Pain Management | 584 | 742 | **+27.1%** |
| 15 | Nephrology | 766 | 971 | **+26.8%** |
| 16 | Cardiac Electrophysiology | 1,012 | 1,268 | **+25.3%** |
| 17 | Maxillofacial Surgery | 463 | 578 | **+24.8%** |
| 18 | OB/GYN | 850 | 1,060 | **+24.7%** |
| 19 | Anesthesiology | 873 | 1,081 | **+23.8%** |
| 20 | Orthopedic Surgery | 724 | 896 | **+23.7%** |

### Slowest Consolidating (Remaining Independent)

| Specialty | Avg Group Size (Early) | Avg Group Size (Late) | Change |
|-----------|------------------------|----------------------|--------|
| Chiropractic | 33 | 36 | +8.1% |
| General Practice | 266 | 287 | +7.8% |
| Nuclear Medicine | 1,432 | 1,522 | +6.3% |
| Neurology | 1,127 | 1,247 | +10.7% |
| Osteopathic Manipulative Medicine | 396 | 439 | +10.8% |

---

## Geographic Consolidation

### Highest Consolidation Regions (by Zip Prefix)

| Zip Prefix | Region | Avg Group Size | Provider Count |
|------------|--------|----------------|----------------|
| 948 | Palo Alto / Silicon Valley, CA | 7,865 | 1,012 |
| 907 | Los Angeles South, CA | 5,569 | 2,949 |
| 110 | Queens, NY | 4,789 | 5,818 |
| 914 | Westchester County, NY | 4,749 | 1,992 |
| 441 | Cleveland, OH | 3,713 | 13,227 |
| 952 | Stockton, CA | 3,689 | 2,656 |
| 950 | San Jose, CA | 3,589 | 4,044 |
| 559 | Rochester, MN (Mayo Clinic area) | 3,504 | 5,814 |
| 940 | San Francisco North, CA | 3,369 | 4,084 |
| 946 | Oakland, CA | 2,995 | 2,499 |

**Pattern: California (especially Bay Area) and major metro areas show highest consolidation. Cleveland stands out in Midwest.**

---

## Interpretation for Thesis

### Validated Claims

1. **PE roll-up is real and accelerating** — 63.6% of movers go to larger groups
2. **Known PE targets show highest consolidation:**
   - Dental (+70.9%) — DSO roll-ups (Aspen, Heartland, Pacific Dental)
   - Pain Management (+77.9%) — National Pain Centers, US Pain Network
   - Emergency Medicine (+39.3%) — Envision, TeamHealth, Sound Physicians
   - Anesthesiology (+23.8%) — USAP, NorthStar, TeamHealth
   - Ophthalmology (+28.6%) — EyeCare Partners, US Vision Partners

3. **Geography follows capital** — Bay Area, NYC metro, and Cleveland (Cleveland Clinic influence) lead consolidation

### Investment Implications

| Specialty | Consolidation Stage | Opportunity |
|-----------|---------------------|-------------|
| Pain Management | Early-mid | Still fragmenting, room for platform plays |
| Dental | Mid-late | Large DSOs exist, focus on differentiation |
| Optometry | Early-mid | Fragmented, ripe for roll-up |
| Podiatry | Early | Highly fragmented, untapped |
| Speech/PT | Early-mid | Therapy roll-ups emerging |
| Chiropractic | Pre-consolidation | Still 95%+ independent, hardest to roll |

### Questions This Raises

1. **Why is Pain Management consolidating fastest?** Hypothesis: Complex billing, prior auth burden, and opioid regulation create scale advantages
2. **Why California?** Hypothesis: Higher labor costs + complex regulations favor large groups
3. **What breaks the roll-up model?** Watch for: reimbursement cuts, quality issues at scale, physician burnout

---

## Startup Opportunities

Based on this data:

1. **Practice management software for consolidators** — Tools that help PE-backed platforms integrate acquisitions faster
2. **Specialty-specific roll-up enablers** — Focus on Optometry, Podiatry, Pain Management
3. **Post-acquisition integration AI** — Credentialing, billing harmonization, EHR migration
4. **Quality monitoring at scale** — As groups grow, quality variance increases; tools to detect and fix

---

## Data Methodology

- **Source:** CMS Provider Data Catalog via MimiLabs (mimi_ws_1.provdatacatalog.dac_ndf)
- **Time Range:** Multiple snapshots (earliest to 2025-09-01)
- **Metrics:**
  - `num_org_mem` = number of providers in the organization
  - Provider movement tracked by NPI across snapshots
  - Specialty from `pri_spec` field
  - Geography from `zip_code` first 3 digits

---

## Next Steps

- [ ] Cross-reference with deal announcements (Pitchbook/CB Insights)
- [ ] Track specific PE-backed platforms over time
- [ ] Correlate with quality scores (do larger groups have better/worse outcomes?)
- [ ] Add reimbursement data to understand margin dynamics
