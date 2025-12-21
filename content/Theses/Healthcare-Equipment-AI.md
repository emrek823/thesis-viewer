# Thesis: Healthcare Equipment AI

**Type:** Market Segment (Who buys? What are the economics?)

## The Take

Hospital equipment maintenance is a $22B market running on 1990s tools while 40% of the technician workforce retires. AI-native predictive maintenance isn't optional—it's the only path through a structural labor shortage. Industrial IoT has proven 99.9% failure detection; healthcare is 5 years behind. The wedge is cybersecurity mandates (FDA Section 524B) that force hospitals to track devices. Once you're tracking, predictive maintenance is a natural upsell. First mover to aggregate cross-OEM equipment fault data builds the Tempus of medical devices.

**How this evolved:** Initial source deeply researched (267 lines), validated through 12/2025 web research. TRIMEDX-AIQ launch (Dec 15, 2025) confirms incumbent awakening but also validates market. BMET shortage accelerating: 30 programs closed in 5 years, 23 states without training pathway. OEM data access improving: GE Edison Marketplace actively working with third-parties, Philips achieved 30% downtime reduction via predictive maintenance. The mechanism is clear: structural workforce shortage + regulatory mandate + proven industrial AI = inevitable market restructuring.

**Key quantitative findings:**
- BMET shortage: 7,300 openings/year vs 400 graduates/year (18:1 gap)
- Workforce aging: ~1/3 of HTM professionals over 55
- Program closures: 30 BMET programs closed in 5 years; 23 states with no training pathway
- OEM predictive impact: 28% downtime reduction (industry average), 35% fewer on-site service calls
- Philips: 1M events + 200K sensor readings/day per MRI → 30% downtime reduction
- TRIMEDX dataset: 6.1M device records, 90-95% visibility into US active medical equipment
- Market multiples: Armis $4.2B at 21x ARR, Claroty ~$2B at 20x ARR

**Market size:** Global medical equipment maintenance: $60.68B (2025) → $101.52B (2030), CAGR 10.8%. US HTM market: $22B growing to $47.9B by 2034. Hospitals spend 3-8% of operating budgets on equipment maintenance—$25M+/year for a $500M revenue hospital. $7.5M average annual cost from poor maintenance (68% hidden from standard budgets).

## Maturity: Hypothesis

---

## How The Market Works

**The current structure:**
```
SEGMENT                 SHARE      PLAYERS                    VULNERABILITY
─────────────────────────────────────────────────────────────────────────────
OEM service contracts   40-50%     GE, Siemens, Philips       Single-vendor only
Third-party ISOs        30-40%     TRIMEDX (1.7M+ devices)    Labor-intensive model
In-house                20-30%     Hospital clinical eng.      Retiring workforce
```

**The workforce crisis:**
- 40% of biomedical equipment technicians (BMETs) aged 55+
- 400 graduates/year entering field that needs 7,300 annually
- 72 minutes per shift spent searching for equipment
- 10-20% of mobile assets lost during useful life

**Why AI wins:**

Industrial IoT comparables have proven the model:
- **Augury** ($1B+ valuation): 99.9% failure detection using vibration/sound analysis. Munich RE backs diagnostics with insurance guarantees.
- **Samsara** ($25.9B market cap): Demonstrates public market appetite for IoT platforms
- **GE OnWatch**: 60% reduction in unplanned downtime, 35% reduction in customer-initiated service requests

Healthcare is 5 years behind. Same physics, same ML, different regulatory wrapper.

**The math:**
```
BEFORE AI                           AFTER AI
────────────────────────────────────────────────────────────
Reactive maintenance                Predictive maintenance
8-12% equipment downtime            2-3% downtime (60%+ reduction)
$7.5M annual hidden costs           $4-5M annual costs
Manual asset tracking               Real-time location (RTLS)
Technician-dependent                AI-augmented workforce
```

---

## Competitive Landscape

**Landscape structure:**
```
PLAYER TYPE          EXAMPLES                    STRENGTH                 VULNERABILITY
─────────────────────────────────────────────────────────────────────────────────────────────
Large ISOs           TRIMEDX, Agiliti           Scale, data, contracts   Labor model, PE pressure
OEMs                 GE, Siemens, Philips       Equipment access         Single-vendor only
Cybersecurity        Armis, Claroty, Cynerio    Compliance, valuation    Not predictive-native
SMB Platforms        UptimeHealth, PartsSource  Faster sales cycles      Lower ACV, fragmented
Industrial IoT       Augury, Samsara            Proven AI, scale         Healthcare learning curve
```

---

### Independent Service Organizations (ISOs)

**TRIMEDX (Largest incumbent)**
- Scale: 1.7M+ devices, 6,000 sites, 3,200 associates
- Data asset: 6.1M device records, 25+ years longitudinal data, 90-95% visibility into US medical equipment
- New CEO (Neil de Crescenzo, ex-Optum Insight $19B)
- $200M+ tech investment: TRIMEDX-AIQ (launched Dec 15, 2025), RSQ (CMMS), Vigilor (cyber)
- **Vulnerability:** PE ownership pressure (TowerBrook $800M continuation fund), labor-intensive model, legacy architecture despite investments

**Agiliti (Public, NYSE: AGTI)**
- Equipment services + rental fleet
- $850M+ revenue, 1M+ devices under management
- Asset optimization platform, end-to-end medical equipment management
- **Vulnerability:** Diversified focus, less pure-play HTM

**Other ISOs:** Paradigm, Sodexo Healthcare, Aramark Healthcare+

---

### OEMs (Partial Competition)

**GE Healthcare (NYSE: GEHC)**
- 72 FDA-cleared AI apps
- Edison platform: cloud + edge computing ecosystem, AI marketplace for third-party developers
- OnWatch Predict: 500+ parameters on MRI, 60% reduction in unplanned downtime
- D3 strategy: Embed AI in every device over 8 years
- **Limitation:** Only services GE equipment. Multi-vendor opportunity remains.

**Siemens Healthineers (FWB: SHL)**
- 47 FDA AI clearances
- Teamplay digital platform: fleet management, performance analytics
- Remote monitoring infrastructure
- **Limitation:** Siemens-only

**Philips (NYSE: PHG)**
- 38 FDA AI clearances
- Achieved 30% downtime reduction via predictive maintenance
- Processes 1M events + 200K sensor readings/day per MRI
- "Aiming for Zero" unplanned downtime initiative
- Open Data Pledge, IHE/HL7/DICOM/Continua member
- **Limitation:** Philips-only, but most open to third-party integration

---

### Cybersecurity Players (Valuation Benchmarks)

| Company | Valuation | ARR | Multiple | Notes |
|---------|-----------|-----|----------|-------|
| Armis | $4.2B (Oct 2024) | $200M+ | 21x | Agentless device security platform |
| Claroty/Medigate | ~$2B | ~$100M | 20x | Healthcare IoT security, asset discovery |
| Cynerio | $100-180M (Axonius acq) | ~$50M raised | — | Clinical device security |
| ORDR | Private | $25-50M est. | — | Device inventory + threat detection |

These 15-21x ARR multiples establish premium for AI-native healthcare infrastructure. Cyber is the wedge; predictive maintenance is the upsell.

---

### SMB/Ambulatory Platforms

**UptimeHealth**
- Target: Dental, urgent care, ambulatory surgery centers
- $6M revenue, 40%+ YoY growth
- Acquired Dental Whale
- Model: SaaS + service marketplace
- **Wedge:** Faster sales cycles, less integration complexity

**PartsSource**
- Parts procurement + repair services
- PE-backed, $100M+ revenue
- Expanding into predictive analytics

---

### Industrial IoT Comparables (Proving the Model)

**Augury ($1B+ valuation)**
- 99.9% failure detection using vibration/sound analysis
- 100M+ machine recordings
- Munich RE backs diagnostics with insurance guarantees
- **Healthcare gap:** Not HIPAA-native, manufacturing focus

**Samsara ($25.9B market cap)**
- IoT platform for fleet and industrial assets
- Demonstrates public market appetite for IoT platforms
- **Healthcare gap:** No medical device expertise

---

## Why This Matters Now

1. **Cybersecurity mandates.** FDA Section 524B and HIPAA updates force device tracking. Change Healthcare ($2.9B losses) and Ascension ($1.1B impact) elevated device security to board-level priority.

2. **Labor crisis acute.** 40% retirement wave happening NOW. Can't hire replacement; must automate.

3. **AI proven at industrial scale.** Augury's 99.9% detection accuracy with 100M+ machine recordings. Technology risk is low.

4. **Margin pressure.** Hospitals seeking 12-16% savings on equipment spend. CFO is buyer (56% of healthcare IT purchases involve CFO).

5. **Device proliferation.** 10-15 connected devices per patient bed. 50B+ IoMT devices by 2030.

---

## The Bull Case

1. **Structural labor shortage.** Not cyclical—demographic. 400 grads vs 7,300 needed. AI is the only solution.

2. **Regulatory tailwind.** FDA/HIPAA mandates force tracking. Once tracking, predictive is obvious upsell.

3. **Data moat mechanics.** First to aggregate cross-OEM equipment fault data builds defensible asset:
   - Phase 1: Deploy sensors, normalize data across OEM formats
   - Phase 2: Aggregate anonymized data across health systems for benchmarks
   - Phase 3: AI models improve with more customers (network effects)

4. **Premium valuations proven.** Armis at 21x ARR, Claroty at 20x. Healthcare IoT/security commands premiums.

5. **Multiple exit paths.** PE consolidation (TRIMEDX, Agiliti), OEM strategic (GE, Siemens, Philips), cybersecurity platforms (Claroty, Armis), healthcare IT (Oracle/Cerner, Epic), industrial giants (Rockwell, Honeywell, Danaher).

---

## The Bear Case

1. **OEM competition.** GE/Siemens/Philips investing heavily in digital services. Could bundle AI with equipment sales.

2. **Long sales cycles.** 6-18 months, 9 stakeholders average. Requires patience and capital.

3. **TRIMEDX $200M+ investment.** Incumbent not asleep. TRIMEDX-AIQ launched Dec 2025.

4. **Data access fragmentation.** OEMs provide proprietary gateways, not open APIs. Integration is painful.

5. **Customer concentration risk.** Health systems consolidating. Large customer = large churn risk.

---

## Startup Opportunities

**1. Multi-Vendor Predictive Maintenance Platform**
- Target gap: OEMs only service own equipment, TRIMEDX is labor-intensive
- Tech: Time-series ML on sensor data, anomaly detection, digital twins
- Wedge: Start with cybersecurity/SBOM compliance (regulatory mandate)
- Expand to: Predictive maintenance → asset tracking → workforce optimization
- Revenue: Per-device ($5-15/month) + per-user ($50-100/month) + outcome-based
- Validation: GE OnWatch proves 60% downtime reduction possible
- Risk: Need to integrate with OEM gateways; partnership-dependent

**2. SMB Healthcare Equipment Platform (UptimeHealth model)**
- Target: Dental practices, urgent care, ambulatory surgery centers
- Wedge: Underserved segment, faster sales cycles, less integration complexity
- Validation: UptimeHealth $6M revenue, 40%+ YoY growth. Acquired Dental Whale.
- Revenue: SaaS + service marketplace
- Risk: Lower ACV, need high volume

**3. Edge-to-Cloud AI Infrastructure**
- Technical architecture: Edge (real-time <100ms) → Fog (hospital data center) → Cloud (ML training)
- HIPAA compliance by keeping PHI on-premise
- 70% latency reduction, 30% energy improvement, 60% bandwidth reduction vs pure cloud
- Could be horizontal infrastructure for multiple healthcare AI verticals

---

## GTM Considerations

**Market Segmentation by Customer Type:**

| Segment | Beds | Annual Maint Spend | Decision Speed | Entry Point | ACV Target |
|---------|------|-------------------|----------------|-------------|------------|
| Academic Medical Centers | 500+ | $25M+ | Slow (12-24 mo) | VP Clinical Eng | $500K-1M |
| Large Community | 300-500 | $15-25M | Medium (9-18 mo) | Dir Clinical Eng | $200-400K |
| Mid-size Community | 200-300 | $8-15M | Faster (6-12 mo) | Facilities/CE | $100-200K |
| Critical Access/Rural | <100 | $2-5M | Variable | Administrator | $25-75K |
| Ambulatory/ASC | N/A | $500K-2M | Fast (3-6 mo) | Owner/Manager | $15-50K |

**Recommended wedge:** Mid-size community hospitals (200-500 beds). Fast enough to close, large enough to matter, references for larger deals.

---

### Champion Identification

| Role | Priority | Why | Sales Message |
|------|----------|-----|---------------|
| Clinical Engineering Director | #1 | Owns equipment budget, feels workforce pain | "Extend your team's capacity 40% without hiring" |
| VP Facilities | #2 | Budget authority, operational KPIs | "Reduce unplanned downtime 28%, recover $2M+ annually" |
| CFO | #3 | 56% of healthcare IT purchases involve CFO | "Equipment ROI visibility, predictable maintenance spend" |
| CIO/CISO | #4 | Rising importance post-Change Healthcare | "FDA 524B compliance, device inventory, cyber posture" |
| CMO/CNO | Influence | Patient safety angle | "Reduce equipment-related care delays" |

---

### Timing Triggers

**Buying signals (prospect-level):**
- New CFO/CIO within 18 months (mandate to modernize)
- ISO contract renewal window (TRIMEDX contracts typically 5-7 years)
- Post-M&A integration (rationalizing device fleets)
- Recent cyber incident or near-miss (Change Healthcare, Ascension)
- Failed Joint Commission audit (equipment documentation)
- Major capital equipment purchase (MRI, CT) with service decision

**Market-level catalysts:**
- FDA Section 524B enforcement ramping up (cybersecurity mandates)
- HIPAA updates addressing connected devices
- Joint Commission equipment tracking requirements
- CMS reimbursement pressure → margin optimization

---

### Wedge Strategy

**Cyber-first approach (recommended):**
1. Enter via FDA 524B compliance pain (regulatory mandate = urgency)
2. Deploy device inventory + security posture (immediate ROI: audit-ready)
3. Expand to asset tracking + RTLS (operational efficiency)
4. Upsell to predictive maintenance (long-term value)

**Why this wedge works:**
- Regulatory mandate creates urgency (can't ignore)
- Cyber budget growing faster than operational budget
- CISO is increasingly influential buyer
- Device inventory is prerequisite for predictive maintenance anyway

---

### GPO Dynamics

| GPO | Market Share | Notes |
|-----|--------------|-------|
| Vizient | 30%+ | Strongest in large IDNs |
| Premier | 20%+ | Analytics-forward, GPO + data |
| HealthTrust | 15%+ | HCA-affiliated |

**Strategy:**
- 28% of purchases happen off-GPO when motivated
- Build 20+ direct customers with proven ROI before pursuing GPO relationships
- GPO adds 6-12 months to sales cycle but opens doors to enterprise deals

---

### Competitive Positioning

**Against TRIMEDX:**
- "TRIMEDX-AIQ is impressive, but it's bolted onto a labor-intensive model. We're AI-native from day one."
- "Their 6.1M device dataset is locked inside their service contracts. We aggregate across all customers."
- Show: Time-to-value (weeks vs months), cost per device, upgrade path

**Against OEMs (GE, Siemens, Philips):**
- "OEMs only service their own equipment. Hospitals have multi-vendor fleets."
- "We're Switzerland—vendor-neutral analytics across your entire device portfolio."
- Show: Multi-OEM dashboard, cross-vendor benchmarking

**Against Cybersecurity-Only (Armis, Claroty):**
- "Cyber is necessary but not sufficient. What happens after you find the device?"
- "We do compliance AND predict failures. One platform, one contract."
- Show: Integration from inventory → monitoring → prediction → action

---

## Path to $1B+

**Scenario 1: Pure Software Platform (Armis Model)**
```
Target: $80-100M ARR at 15-20x = $1.2B-$2B
Timeline: 6-8 years

Stage           ARR         Customer Count    Avg ACV    Gross Margin
─────────────────────────────────────────────────────────────────────────
Seed-Series A   $0-3M       15-30            $100K      65%
Series B        $3-15M      50-100           $150K      70%
Series C        $15-40M     150-250          $160K      75%
Series D+       $40-100M    400-500          $200K      80%

Revenue model: Per-device SaaS ($5-15/device/month) + per-user ($50-100/user/month)
Key metric: Devices under management (target: 500K at $100M ARR)
NRR target: 120%+ (device expansion, module upsell)
Comparables: Armis ($4.2B at ~20x), Claroty (~$2B at 20x)
```

**Scenario 2: Platform + Managed Services (ServiceTitan Model)**
```
Target: $100-150M ARR at 8-10x = $800M-$1.5B
Timeline: 5-7 years

Stage           ARR         Mix (SW/Services)    Gross Margin
─────────────────────────────────────────────────────────────────────────
0-$5M           $5M         40% / 60%            45%
$5-25M          $25M        55% / 45%            55%
$25-75M         $75M        70% / 30%            65%
$75M+           $150M       80% / 20%            72%

Revenue model: Software subscription + implementation + ongoing optimization
Why services: Hospitals want outcomes, not tools. Managed service accelerates adoption.
Margin path: Productize services (playbooks, automation) → margin expansion
Comparables: ServiceTitan ($9B, 70% subscription), Veeva ($40B, services→platform)
```

**Scenario 3: Vertical Rollup + Technology (TRIMEDX Disruption)**
```
Target: $200-300M revenue at 5-7x = $1B-$2B
Timeline: 7-10 years

Stage           Revenue     Strategy                     EBITDA Margin
─────────────────────────────────────────────────────────────────────────
0-$20M          $20M        Organic: SaaS + services     5-10%
$20-75M         $75M        Acquire 2-3 regional ISOs    10-15%
$75-200M        $200M       Integrate, automate, expand  15-20%
$200M+          $300M       National scale, AI-native    20-25%

Why rollup: ISOs trade at 5-7x EBITDA. Acquire, add AI, revalue at 10-12x.
Risk: Integration complexity, culture clash, cash intensive
Comparables: TRIMEDX (~$500M+ revenue), Agiliti ($850M revenue, NYSE: AGTI)
```

---

### Unit Economics Targets

| Metric | Early (Seed-A) | Growth (B-C) | Scale (D+) |
|--------|----------------|--------------|------------|
| ACV | $75-150K | $150-250K | $200-400K |
| CAC | $100-150K | $150-200K | $200-300K |
| CAC Payback | 12-18 months | 10-15 months | 8-12 months |
| LTV/CAC | 3-4x | 4-5x | 5-7x |
| NRR | 100-110% | 110-120% | 120-130% |
| Gross Margin | 55-65% | 65-75% | 75-82% |
| Magic Number | 0.5-0.7 | 0.7-1.0 | 1.0-1.2 |

**Rule of 40 Path:**
- Year 3: 80% growth + (-10%) margin = 70
- Year 5: 50% growth + 5% margin = 55
- Year 7: 30% growth + 15% margin = 45

---

### Critical Scaling Milestones

| ARR | Milestone | What Proves |
|-----|-----------|-------------|
| $3M | 20+ hospital customers, 2+ health systems | Product-market fit |
| $10M | NRR > 115%, 100K devices under management | Expansion model works |
| $25M | GPO relationship signed, 3+ enterprise deals | Enterprise viable |
| $50M | 40%+ gross margin expansion since Series A | Unit economics sustainable |
| $100M | National footprint, 500K+ devices | Market leadership

---

## Open Questions

### Is the OEM data access problem solvable?

**Priority:** P0 (investment-blocking)

**Investment Gate:** If you can't get OEM data, you can't build cross-vendor predictive models. No data = no moat.

**What Would Change My Mind:**
- If OEM partnerships achievable at reasonable cost (<$50K/year per OEM) → Green light. Look for teams with OEM relationships or standards expertise.
- If OEMs opening APIs broadly (Edison Marketplace model expands) → Even better. First-mover to aggregate wins.
- If OEMs blocking access AND edge sensors can't replicate OEM telemetry → Major risk. Would need to acquire ISO to get data access.
- If only 2/3 OEMs accessible (e.g., Philips + Siemens but not GE) → Partial opportunity. Focus on those vendor fleets.

**How to Find Out:**
- Interview GE Edison partner developers on integration reality (cost, time, data quality)
- Talk to PartsSource, TRIMEDX about their OEM data access arrangements
- Map device types: which have accessible data vs proprietary lockdown (imaging vs infusion vs monitors)
- Price out edge sensor deployment for devices without OEM data access

**PROGRESS (2025-12-20):** OEMs are opening up. GE Edison Marketplace actively working with third-party AI developers. Philips signed Open Data Pledge, member of IHE/HL7/DICOM/Continua standards. ISOs now capture 40% of maintenance market, growing 12% annually. **Status: VALIDATING** — need to confirm partnership costs and data quality.

---

### Can startups compete with TRIMEDX's $200M tech investment?

**Priority:** P1 (thesis-changing)

**Investment Gate:** TRIMEDX-AIQ launched Dec 15, 2025 with 6.1M device records. Is the window closing?

**What Would Change My Mind:**
- If TRIMEDX-AIQ demonstrably better than industrial IoT approaches (99% failure detection, sub-10-min prediction) → Incumbent wins. Pass on pure-play startups.
- If TRIMEDX-AIQ is "good enough" enterprise software but not AI-native → Startup wedge exists. Look for teams with Augury/Samsara DNA who can out-innovate.
- If TRIMEDX-AIQ struggles with integration/adoption (enterprise software execution) → Window open. Focus on time-to-value.
- If TowerBrook PE pressure forces short-term focus → Window extended. Incumbents often under-invest when under PE pressure.

**How to Find Out:**
- Interview 3-5 TRIMEDX customers about TRIMEDX-AIQ experience (ease of deployment, actual results)
- Track TowerBrook $800M continuation fund dynamics (dividend vs growth investment)
- Interview 2-3 ex-TRIMEDX employees about actual tech capabilities vs marketing
- Compare TRIMEDX-AIQ accuracy claims to Augury benchmarks (99.9% failure detection)

---

### What's the right wedge: cybersecurity vs predictive vs asset tracking?

**Priority:** P1 (opportunity-defining)

**Investment Gate:** Determines GTM strategy, founding team profile, and Series A positioning

**What Would Change My Mind:**
- If cybersecurity mandates creating 3-6 month sales cycles → Cyber wedge. Look for security + healthcare teams. Wedge fast, upsell predictive.
- If downtime costs ($7.5M hidden annually) resonating with CFO buyers → Predictive wedge. Look for industrial IoT backgrounds. ROI-led sale.
- If equipment utilization (72 min/shift searching) the top pain → Asset tracking wedge. Look for RTLS/operational excellence teams.
- If all three have similar sales velocity → Platform wedge. Start with whoever has budget, expand to other modules.

**How to Find Out:**
- Survey 20 hospital clinical engineering leaders on buying priorities (rank order: compliance, downtime, utilization)
- Interview 3-5 recent buyers of Armis/Claroty: What was buying trigger? How long was cycle?
- Track which category seeing fastest RFP volume (talk to GPO category managers)
- Map which problem has clearest, fastest ROI demonstration (<6 months to prove value)

---

### Is the BMET shortage creating urgency or just awareness?

**Priority:** P2 (timing-defining)

**Investment Gate:** Shortage is real (18:1 gap), but are hospitals actually buying faster because of it?

**What Would Change My Mind:**
- If BMET shortage driving emergency purchases (6-month cycles) → Market timing perfect. Aggressive GTM.
- If shortage recognized but budgets unchanged (still 12-18 month cycles) → Market aware but not urgent. Patience required.
- If hospitals solving via ISO outsourcing rather than technology → Different opportunity (enable ISOs, not hospitals).
- If AI automation seen as threat by CE leadership → Adoption friction. Need to position as augmentation, not replacement.

**How to Find Out:**
- Interview 5+ Clinical Engineering Directors on 2025 priorities and budget changes
- Track TRIMEDX/Agiliti contract growth (are hospitals outsourcing faster?)
- Survey AAMI membership on AI adoption attitudes (threat vs opportunity)
- Analyze time-to-hire for BMET roles (Indeed, LinkedIn data)

---

### What's the realistic competitive moat: data or distribution?

**Priority:** P2 (strategy-defining)

**Investment Gate:** Determines whether to optimize for device count (data) or customer count (distribution)

**What Would Change My Mind:**
- If cross-hospital benchmarking is killer feature → Data moat. Optimize for devices under management, even at lower ACV.
- If models work well with single-hospital data → Distribution moat. Optimize for customer count, land-and-expand.
- If OEM-specific models outperform cross-OEM → Vertical moat. Pick one OEM ecosystem (GE or Philips) and go deep.
- If TRIMEDX data monopoly (90-95% US visibility) unassailable → Avoid data race. Compete on UX, time-to-value, cost.

**How to Find Out:**
- Technical: Train models on 1 hospital vs 10 hospitals vs 100 hospitals. Measure accuracy improvement curve.
- Interview ML leads at Augury/Samsara on data network effects (how much data needed for 95%+ accuracy?)
- Map TRIMEDX contract exclusivity terms (can customers share data with third parties?)
- Test whether hospital-specific models (trained on own history) outperform cross-hospital models

---

## Appendix

### Supporting Evidence

| Date | Source | Key Insight |
|------|--------|-------------|
| 2025-12-20 | [[claude compass_artifact_wf-47eb8b48-df83-488d-a269-b71800dd5639_text_markdown]] | $22B market, 40% BMET retirement, 72 min/shift searching. Armis $4.2B at 21x ARR. GE OnWatch 60% downtime reduction. TRIMEDX $200M+ investment but PE pressure. Path to $1B+ at $80-100M ARR. |
| 2025-12-20 | Web Research (TRIMEDX-AIQ launch) | TRIMEDX-AIQ launched Dec 15, 2025. 6.1M device records, 25+ years longitudinal data, 90-95% visibility into US medical equipment. Validates market, confirms incumbent awakening. |
| 2025-12-20 | Web Research (BMET shortage) | 7,300 openings/year vs 400 graduates/year (18:1 gap). 30 BMET programs closed in 5 years. 23 states without training pathway. ~1/3 of HTM professionals over 55. Shortage accelerating. |
| 2025-12-20 | Web Research (OEM predictive maintenance) | Philips: 1M events + 200K sensor readings/day per MRI → 30% downtime reduction. Industry average: 28% downtime reduction, 35% fewer on-site service calls. |
| 2025-12-20 | Web Research (Market sizing) | Global medical equipment maintenance: $60.68B (2025) → $101.52B (2030), CAGR 10.8%. HTM ranked 22nd in US News & World Report 100 best jobs 2025. 18% job growth 2023-2033. |

---

### Quantitative Data

**BMET Workforce Crisis:**
```
METRIC                          VALUE           SOURCE
───────────────────────────────────────────────────────────────────
Annual openings needed          7,300           BLS
Annual graduates                400             AAMI
Gap ratio                       18:1            Calculated
Programs closed (5 years)       30              24x7 Magazine
States without program          23              24x7 Magazine
Workers over 55                 ~33%            AAMI survey
Projected shortage by 2026      27,000          BLS
```

**Market Multiples Comparison:**
```
COMPANY         VALUATION    ARR        MULTIPLE    SEGMENT
───────────────────────────────────────────────────────────────────
Armis           $4.2B        $200M+     21x         Healthcare IoT security
Claroty         ~$2B         ~$100M     20x         Industrial + healthcare
Samsara         $25.9B       ~$1B       26x         Fleet + industrial IoT
ServiceTitan    $9B          $685M      13x         Vertical SaaS (trades)
Agiliti         $2.5B        $850M      3x          Equipment services
```

**OEM AI Clearances:**
```
OEM             FDA AI CLEARANCES    KEY PLATFORM
───────────────────────────────────────────────────────────────────
GE Healthcare   72                   Edison Marketplace
Siemens         47                   Teamplay
Philips         38                   HealthSuite
```

---

### Related Theses

- [[Healthcare-AI-Architecture]] — Hybrid architecture applies to equipment AI (edge + fog + cloud)
- [[Lab-Automation-Infrastructure]] — Similar pattern: automation solving labor shortage
- [[Systems-of-Record-AI-Era]] — Equipment data as canonical data model
- [[Policy-Regulatory-Catalysts]] — FDA 524B cybersecurity mandates creating buying urgency
- [[Vertical-AI-Moats]] — Data aggregation as moat applies to cross-OEM equipment data

---

### Founder Profile (Ideal)

**Background:**
- Industrial IoT experience (Augury, Samsara, Uptake, C3.ai) — knows predictive maintenance ML
- OR healthcare infrastructure (TRIMEDX, Agiliti, PartsSource) — knows buyer, workflow, contracts
- OR cybersecurity + healthcare (Armis, Claroty, Cynerio) — knows compliance wedge

**Red flags:**
- Pure enterprise SaaS without domain expertise
- Pure clinical/hospital operations without technical depth
- No experience with long sales cycles (6-18 months)

**Green lights:**
- Prior OEM partnerships (GE, Philips, Siemens relationships)
- Experience navigating GPO/IDN procurement
- Technical credibility in ML + systems integration
- Former Clinical Engineering Director as co-founder or advisor

---

### Exit Paths

| Acquirer Type | Examples | Why | Likely Valuation |
|---------------|----------|-----|------------------|
| PE Roll-up | TowerBrook (TRIMEDX), Warburg Pincus | Consolidate fragmented ISOs | 8-12x EBITDA |
| OEM Strategic | GE, Siemens, Philips | Multi-vendor capability gap | 10-15x ARR |
| Cybersecurity | Armis, Claroty, Palo Alto | Expand healthcare vertical | 15-20x ARR |
| Healthcare IT | Oracle/Cerner, Epic | Equipment data into EHR | 10-12x ARR |
| Industrial | Honeywell, Rockwell, Danaher | Healthcare vertical entry | 12-18x ARR |

---

### Evolution Log

- 2025-12-20: Created from strong take. Core insight: structural labor shortage + regulatory mandates + proven industrial AI = inevitable market restructuring.
- 2025-12-20: Upgraded to gold standard (252 → 530+ lines). Added: Key quantitative findings, expanded competitive landscape (5 categories), detailed GTM (segmentation, champions, timing, positioning), 3 Path to $1B scenarios with unit economics, 5 Open Questions with full structure, quantitative appendix, founder profile, exit paths. Web research validated BMET shortage accelerating, TRIMEDX-AIQ launched, OEMs opening data access.
