---
type: research
topic: "Charles Yang - Autonomous Labs Pre-Call Brief"
date: 2026-01-08
assessment: ANSWERED
confidence: HIGH
rounds: 2
vault_sources: 1
web_sources: 35+
---

# Charles Yang: Autonomous Labs Pre-Call Brief

> **Context**: Charles Yang has written extensively on autonomous/self-driving labs and is now considering starting a company. This brief synthesizes his writings, the market landscape, and strategic options to prepare for a call.

---

## Executive Summary: Strategic Options

### The 5 Company Plays

| Option                                 | Description                                                                                                            | Capital   | Time         | Example                                     | Pros                                                               | Cons                                                                            | Yang Fit                                          |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------- | ------------ | ------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------- |
| **1. Automation-Native Instruments**   | Design mass specs, chromatography, synthesizers from scratch with open APIs, standard formats, robot-friendly hardware | $50-100M+ | 3-5 years    | None yet (the gap)                          | Solves root cause; deep moat; aligns with policy work              | Brutal capex; long cycles; fighting Thermo/Danaher                              | Low — needs hardware co-founder + massive raise   |
| **2. Integration/Orchestration Layer** | Build drivers, APIs, scheduling, data normalization — the "Android for labs"                                           | $5-15M    | 12-18 months | Artificial, Benchling Connect, TetraScience | Software-only; capital efficient; network effects                  | His own critique: "polishing brass on Titanic"; doesn't solve physical transfer | Medium — viable but he's argued against it        |
| **3. Data/Intelligence Layer**         | Natural language to databases; AI designs experiments; CROs execute; closed-loop                                       | $2-5M     | 3-6 months   | BioStack, Tacit Labs                        | Extremely capital efficient; fast launch; wedge through scientists | Doesn't solve physical bottleneck; CRO-dependent; defensibility unclear         | Medium — capital efficient but not differentiated |
| **4. Single-Workflow Vertical SDL**    | Pick ONE workflow (reaction optimization, catalyst screening) and make it fully autonomous                             | $5-15M    | 12-24 months | Telescope Innovations, Radical AI           | Scoped = achievable; prove ROI fast; expand over time              | Narrow market per workflow; must pick right wedge                               | **High — capital efficient proof of thesis**      |
| **5. Mobile Robot + AI**               | General-purpose mobile robots that transfer samples between instruments + AI                                           | $10-30M   | 2-3 years    | Zeon Systems                                | Solves physical transfer bottleneck; hardware-agnostic             | Robotics is unsolved; labs are unstructured; safety                             | Low — not his background                          |

### The 4 "Clever Hacks" (AI Abstracts Hardware)

| Hack | Mechanism | Capital | Who's Doing It | Upside | Downside |
|------|-----------|---------|----------------|--------|----------|
| **1. Data Output Ownership** | Universal parser for proprietary formats → normalize → train models | $5-10M | TetraScience ($120M+) | No vendor cooperation needed | TetraScience exists |
| **2. Telemetry Interception** | Middlebox captures commands/data → reverse-engineer APIs → digital twins | $3-8M | None prominent | Crack proprietary protocols | Instruments increasingly encrypted |
| **3. Scientist Workflow Capture** | Record how scientists use instruments → train models on implicit knowledge | $2-5M | Tacit Labs | Captures "9-18 months writing drivers" knowledge | Doesn't control execution |
| **4. CRO Arbitrage** | AI layer on CRO APIs → route to cheapest/fastest → keep data | $2-5M | BioStack | Zero hardware capex | CROs slow; your margin = their inefficiency |

### Decision Matrix

| If you have... | Best Option | Why |
|----------------|-------------|-----|
| <$5M, prove thesis fast | Option 3 or Hack 4 | Capital efficient, fast, shows closed-loop |
| $5-15M, want moat | Option 4 (Single-Workflow SDL) | Scoped, proves HW+SW integration |
| $15-50M, HW co-founder | Option 2 + start Option 1 | Software layer while developing instrument |
| $100M+ | Option 1 | Go for whole thesis |
| **Policy background, DOE relationships** | **Option 4 + gov contracts** | **Leverage unique distribution** |

### Most Likely Play for Yang

**Option 4 (Single-Workflow SDL)** with government lab as first customer, then expand to commercial pharma. Software wedge, hardware moat later.

---

## 1. Charles Yang: Background

### Current Roles
- **Founder, Center for Industrial Strategy** — bipartisan DC think tank on industrial policy
- **AI for Science Fellow, Renaissance Philanthropy**
- **Angel investor** — bullish on Corridor, Substrate
- **ML4Sci Substack** — primary writing outlet

### Professional History
- **Lawrence Berkeley National Lab** — ML Engineer, built AI models for ARPA-E funded SDL for optical metamaterial optimization
- **DOE Office of Critical and Emerging Technologies** — ORISE fellow, AI policy adviser
- **SambaNova** — AI infrastructure

### Credibility Markers
- Emergent Ventures grantee (#43)
- Interact fellow
- Published in American Affairs, Foreign Policy Magazine
- Founded YIMBY group, ran e-bike lending library
- 60+ publications via his co-founders/collaborators

### Key Relationships
- DOE program managers
- ARPA-E leadership
- National lab researchers
- DC industrial policy community

---

## 2. His Core Thesis on Autonomous Labs

### From [ML4Sci: Self-Driving Labs](https://ml4sci.substack.com/p/self-driving-labs)

**The problem**: "Science is still a labor-intensive process" — grad students doing "laborious experiments semi-blindly."

**The opportunity**: SDLs "significantly improve labor productivity in science," freeing researchers from menial synthesis. Example: Liverpool robot synthesized 688 experiments in 8 days, found catalysts 6x better than baseline.

**The competitive threat**:
- US spending on SDLs: **<$50M, unfocused**
- Canada's Acceleration Consortium: **$200M, concentrated** (largest Canadian research grant ever)

### From [FAS: Research Agenda](https://fas.org/publication/automating-scientific-discovery/)

His policy proposals (which he's now seen funded):
1. **ARPA-E Grand Challenge** ($30M/4 years) — now $40M catalysis program exists
2. **Focused Research Organization** ($18M/5 years) — open-source hardware/firmware
3. **DOE National Lab User Facilities** ($50M/5 years) — now $100M CHIPS R&D program

### From [Antitrust and Science Instruments](https://ml4sci.substack.com/p/antitrust-and-the-science-instrument)

**The "Anduril for Science Instruments" thesis**:

The instrument industry consolidated like defense primes (51 → 5 post-Cold War). Four companies dominate:
- Thermo Fisher ($200B)
- Danaher ($160B)
- Agilent ($40B)
- Bruker ($7B)

**Core critique**: "You pay millions for an instrument and a recurring service contract, then pay again for the privilege of having programmatic control over your instrument."

- 9-18 months to develop homemade drivers
- Non-standard data formats
- Encrypted proprietary data

**His solution**: "Anduril-like disruption to a legacy industry that has not seen a new prime in 40 years."

### The Gap He Identifies

From [Lab Automation Startup Ecosystem](https://ml4sci.substack.com/p/the-lab-automation-startup-ecosystem):

**"Science instruments designed from the ground up for automation"** — current startups layer software on legacy hardware rather than replacing it.

---

## 3. Market Landscape

### Mega-Funded "AI Science Factory" Players

| Company | Funding | Valuation | Founders | Focus |
|---------|---------|-----------|----------|-------|
| **Periodic Labs** | $300M seed | ~$1.5B | Liam Fedus (ex-OpenAI VP Research), Ekin Dogus Cubuk (ex-DeepMind, built GNoME) | Superconductors; AI scientists + robotic labs |
| **Lila Sciences** | $550M total | $1.3B+ | Geoffrey von Maltzahn (Flagship GP), George Church (Chief Scientist) | "Scientific superintelligence"; AI Science Factories |
| **Isomorphic Labs** | $600M | — | Demis Hassabis (2024 Nobel), Colin Murdoch | AlphaFold 3; oncology/immunology drugs |

### Government Programs (Yang's Advocacy → Funding)

| Program | Amount | Focus |
|---------|--------|-------|
| ARPA-E | $40M | Self-driving labs for chemical catalysts |
| CHIPS R&D | $100M | Semiconductor materials discovery |
| Acceleration Consortium (Canada) | $519M | 6 new SDLs at University of Toronto |
| DOE AMP2 | — | World's largest autonomous microbial system (Ginkgo-built) |

### Cloud Lab Failures (Lessons Learned)

| Company | Status | What Happened |
|---------|--------|---------------|
| **Strateos** | Pivoted (Apr 2023) | Stopped centralized cloud labs; now does on-site deployment + LodeStar software |
| **Emerald Cloud Lab** | Operating, expensive | >$250K/year entry; $24K/month baseline; CMU partnership at $40M |

**Why they struggled**:
- Sample handling between instruments requires humans
- Scheduling chaos on shared equipment
- Can't debug failures remotely
- Protocol design complexity (formalizing implicit actions)

---

## 4. Instrument Oligopoly Deep Dive

### Financial Comparison

| Company | Market Cap | 2024 Revenue | Instruments % | Services/Consumables % |
|---------|-----------|--------------|---------------|------------------------|
| **Thermo Fisher** | ~$200B | $42.9B | 17% ($7.5B) | 83% ($35.4B) |
| **Danaher** | ~$160B | $23.5B | ~25-30% | ~70-75% |
| **Agilent** | ~$40B | $6.5B | ~50% | ~50% |

**Key insight**: The oligopoly makes money on **services and consumables** (recurring revenue), not instruments. Instruments are loss leaders.

### Instrument Category Leaders

| Category | Leader | Key Products |
|----------|--------|--------------|
| **High-End Mass Spec** | Thermo Fisher | Orbitrap (crown jewel), Q Exactive |
| **Routine LC-MS/MS** | SCIEX (Danaher) | 6500+, X500R |
| **Liquid Handling** | Beckman Coulter (Danaher) | Biomek, Echo acoustic dispensing |
| **Microscopy** | Leica (Danaher), Thermo (FEI) | Confocal, electron microscopy |
| **Flow Cytometry** | Beckman Coulter | CytoFLEX |

### Software/API Lock-In

All three have same playbook:
- Proprietary data formats
- Closed APIs (charge extra for programmatic access)
- Service contracts (recurring revenue)
- Acquisition integration keeps legacy software stacks

---

## 5. Startup Ecosystem Map

### Discovery-as-a-Service (Wet Lab + AI)

| Company | Funding | Model | Status |
|---------|---------|-------|--------|
| **Recursion** (RXRX) | Public; merged with Exscientia ($565M) | 65 PB phenomics data; BioHive-2 supercomputer | 7 programs in trials 2025 |
| **Insitro** | $700M+ | iPSC disease models + ML | Lilly, BMS partnerships |
| **Ginkgo** (DNA) | Public | Bio-foundry PaaS | Consolidating to Biofab1; >70% gov revenue |

### Lab Software Layer

| Company | Funding | Valuation | Model |
|---------|---------|-----------|-------|
| **Benchling** | $412M | $6.1B | Cloud R&D platform; 1,300+ biotech customers |
| **TetraScience** | $120M+ | — | Scientific data cloud; data harmonization |
| **Artificial** | — | — | Lab orchestration + scheduling; NVIDIA BioNeMo integration |

### Hardware / Liquid Handling

| Company | Funding | Valuation | Model |
|---------|---------|-----------|-------|
| **Opentrons** | $241M | $1.8B | Open-source (was) liquid handling robots |
| **Tecan** | Public | — | Freedom EVO (5,000+ installed); incumbent |

### Materials Discovery SDLs

| Company | Funding | Leadership | Focus |
|---------|---------|------------|-------|
| **Radical AI** | $55M seed | Gerbrand Ceder (A-Lab creator, UC Berkeley) | Foundation model for materials; battery chemistry |
| **Telescope Innovations** | Public (CSE: TELI) | Jason Hein (CTO), Barry Sharpless (Advisor, 2x Nobel) | Chemistry reaction optimization; Pfizer customer |

### Early-Stage / YC

| Company | Stage | Model |
|---------|-------|-------|
| **Zeon Systems** | YC X25 | Natural language → robotic lab automation; Stanford/UCSF pilots |
| **BioStack** | Pre-seed ($2M ask) | Natural language to 60 databases; CRO execution; <$2K spent |
| **Tacit Labs** | Seed | Workflow capture → train LLMs on "how science is done" |

---

## 6. Why Things Take So Long (Root Causes)

| Step | Time | Root Cause |
|------|------|------------|
| **Protocol design** | 9-18 months | Writing drivers to connect instruments; proprietary APIs |
| **Sample transfer** | 40-60% of experiment time | Humans physically walking tubes between machines |
| **Scheduling** | Days of delay | Shared equipment conflicts; manual coordination |
| **Debug failures** | Weeks | Can't observe remotely; implicit knowledge not captured |
| **Data harmonization** | Months | Every instrument outputs different formats |

**The physics isn't slow. The coordination is slow.**

---

## 7. Questions for the Call

### On the Company Thesis

1. **Hardware vs software**: "Your thesis is automation-native instruments. But your background is AI/policy, not hardware. Are you building instruments, or something else?"

2. **The transfer problem**: "Everyone talks about autonomous instruments. But samples still need to move between them. How do you solve that?"

3. **Proof point without $100M**: "Periodic Labs raised $300M. What's the smallest unit of success that proves the thesis?"

### On Market Position

4. **Government vs commercial**: "You got $140M in government programs created. Is there a contracting play — building what those programs need?"

5. **FRO idea**: "Your Focused Research Organization proposal for open-source SDL components — is that the company? Or a nonprofit?"

6. **BioStack comparison**: "BioStack takes a data/AI layer approach — natural language, CRO execution. Where does that model break down?"

### On Timing & Team

7. **Why now for a company**: "You've been effective at policy. Why start a company instead of continuing advocacy?"

8. **Co-founder search**: "For Options 1, 4, or 5, you'd need a hardware co-founder. Who's on your radar?"

9. **First customer**: "National labs (your DOE relationships) or commercial pharma?"

### On Competition

10. **Periodic/Lila defense**: "They have $300-550M war chests. What can a new entrant do that they can't?"

11. **Acquisition vs independence**: "SCIEX was independent, got acquired by Danaher for $1.1B. Is that the outcome, or do you want to stay independent?"

---

## 8. Bull and Bear Cases

### Bull Case (for a Yang-led company)

- **Unique distribution**: DOE/ARPA-E relationships that no other founder has
- **Timing**: Government programs he advocated for now need integrators
- **Policy credibility**: Can win contracts others can't
- **Gap is real**: No one building automation-native instruments
- **Open-source wedge**: His FRO proposal could become the standard

### Bear Case

- **Background mismatch**: AI/policy, not hardware engineering
- **Capital asymmetry**: Periodic Labs has $300M; hard to compete
- **Incumbents can bundle**: Thermo's Ardia platform, Danaher's Life Sciences Platform
- **Cloud lab failures**: Full-stack model harder than it looks
- **Academic competition**: Acceleration Consortium ($519M) may crowd out commercial

---

## Sources

### Charles Yang's Writings
- [Self-Driving Labs (ML4Sci)](https://ml4sci.substack.com/p/self-driving-labs)
- [Lab Automation Startup Ecosystem](https://ml4sci.substack.com/p/the-lab-automation-startup-ecosystem)
- [Antitrust and Science Instruments](https://ml4sci.substack.com/p/antitrust-and-the-science-instrument)
- [CSIS: Self-Driving Labs Policy](https://www.csis.org/blogs/perspectives-innovation/self-driving-labs-ai-and-robotics-accelerating-materials-innovation)
- [IFP: Scaling Materials Discovery](https://ifp.org/scaling-materials-discovery-with-self-driving-labs/)
- [FAS: Research Agenda for SDLs](https://fas.org/publication/automating-scientific-discovery/)
- [Center for Industrial Strategy](https://industrialstrategy.substack.com/)

### Market Context
- [MIT Tech Review: AI Materials Discovery Reality Check](https://www.technologyreview.com/2025/12/15/1129210/ai-materials-science-discovery-startups-investment/)
- [TechCrunch: Periodic Labs $300M](https://techcrunch.com/2025/09/30/former-openai-and-deepmind-researchers-raise-whopping-300m-seed-to-automate-science/)
- [What Happened to Cloud Labs (Golas)](https://stefangolas.substack.com/p/what-happened-to-cloud-labs)
- [SoCI: Autonomous Labs in Biotech](https://www.soci.org/news/2025/12/autonomous-labs-and-ai-boost-biotech-research)

### Company Sources
- [Recursion](https://www.recursion.com/)
- [Lila Sciences](https://www.lila.ai/)
- [Isomorphic Labs](https://www.isomorphiclabs.com/)
- [Telescope Innovations](https://telescopeinnovations.com/)
- [Radical AI](https://www.radical-ai.com/)
- [Zeon Systems (YC)](https://www.ycombinator.com/companies/zeon-systems)
- [BioStack](https://getbiostack.com)
- [Tacit Labs](https://tacitlabs.co/)

---

## 9. Call Notes: Electron Microscopy Pivot

> **Update from call (2026-01-08)**: Charles is NOT pursuing the "Anduril for instruments" thesis. He's targeting **electron microscopy data/compute** — specifically STEM for materials.

### His Actual Thesis

**The wedge**: Electron microscopy generates massive data (10-20 GB/sec, ~1TB/run) but scientists have inadequate compute (old P5000s, RTX 6090s from 2-3 generations ago). Unlike other lab automation plays, EM researchers are "ripe and ready" — they want better compute/AI but lack hardware + knowledge.

**Why EM vs other instruments**: Adoption of new instruments is slow and rate-limited. YC lab automation companies struggle because they have to cross adoption chasms repeatedly across subfields. EM is different — demand exists, supply (compute + expertise) doesn't.

### Cryo-EM vs STEM: The Family Tree

```
                    ELECTRON MICROSCOPY
                           │
           ┌───────────────┼───────────────┐
           │               │               │
          SEM             TEM            STEM
     (surface only)   (broad beam)   (scanning beam)
                          │               │
                      Cryo-EM        4D-STEM
                    (frozen bio)   (materials)
```

| | **Cryo-EM** | **STEM** |
|---|-------------|----------|
| **Sample** | Biological — proteins, viruses, cells | Materials — metals, batteries, semiconductors |
| **Prep** | Freeze sample in ice (preserves structure) | Thin slice, no freezing needed |
| **What you see** | Soft matter, 3-20 Å resolution | Hard matter, true atomic resolution (<1 Å) |
| **Market** | Pharma (drug targets) | Semiconductors, batteries, catalysts |
| **Software** | Mature (cryoSPARC, RELION) | Fragmented, less developed |

**His arbitrage**: Cryo-EM has well-funded software (cryoSPARC, RELION). STEM for materials does NOT have an equivalent. Same AI/compute opportunity, less competition.

### Pharma Use Cases (Cryo-EM)

| Use Case | What They're Doing | Who |
|----------|-------------------|-----|
| **Membrane protein structures** | Solving GPCRs, ion channels (40% of drug targets) | Pfizer, AZ, Merck |
| **Antibody-target complexes** | Visualizing binding for biologics design | Roche, AbbVie, Regeneron |
| **Vaccine antigen design** | Spike proteins, viral capsids | Moderna, BioNTech, Pfizer |
| **Protein aggregation** | Tau tangles, amyloid fibrils (Alzheimer's) | Biogen, Lilly, Roche |

**Market**: $2.2B (2024), 11-15% CAGR. $1.4B pharma capex in 2023.

### Semiconductor Use Cases (STEM)

| Use Case | What They're Doing | Who |
|----------|-------------------|-----|
| **Transistor gate imaging** | Atomic-resolution of 3nm/2nm gates | TSMC, Intel, Samsung |
| **Interface characterization** | Silicon-oxide boundaries (failure points) | All fabs |
| **Dopant mapping** | Locate individual dopant atoms | Intel, GlobalFoundries |
| **Failure analysis** | Root cause on returned parts | Fabs + Apple, NVIDIA |

### Battery/Materials Use Cases (STEM) — Charles's Focus

| Use Case | What They're Doing | Who |
|----------|-------------------|-----|
| **Lithium imaging** | Directly visualize Li atoms during charge/discharge | Toyota, QuantumScape, Solid Power |
| **Solid electrolyte interfaces** | SEI layer = battery degradation | All battery cos |
| **Dendrite formation** | Watch lithium dendrites grow (cause fires) | Solid-state battery cos |
| **Catalyst nanoparticles** | Atomic structure of Pt, Pd catalysts | Toyota, Hyundai, DOE labs |

### Competitive Landscape

**NVIDIA is already here**:
- Dedicated "Shaping the Future of Cryo-EM with GPUs" initiative
- UCSF partnership: 70GB movies in <1 min on Tensor Cores
- Webinars with Merck on cryoSPARC workflows
- Risk: Could bundle into healthcare platform

**Existing software (cryo-EM)**:
- **cryoSPARC** — commercial standard, real-time processing
- **RELION** — open-source, v5 shipped CNN-based denoising (2024)

**STEM software**: Fragmented, no dominant player — the opportunity.

### The EM Data Pipeline (Where AI Helps)

```
Sample → Imaging → Motion Correction → Particle Picking → 2D Class → 3D Reconstruction → Refinement
           ↓              ↓                   ↓                              ↓
        10-20 GB/s     I/O bound          ML opportunity              GPU intensive
```

| Step | Pain Point | AI Opportunity |
|------|------------|----------------|
| **Motion correction** | Needs ~1 GB/s read; labs have slow storage | Infrastructure (not AI) |
| **Particle picking** | Historically manual, hours of time | ML models — cryoSPARC does this |
| **Denoising** | Low SNR, more exposure damages sample | Diffusion models — RELION 5 added CNN |
| **Real-time feedback** | Wait until run ends to know if sample bad | Live QC models |

### Key Questions Answered

1. **Hardware vs software?** — Software/compute, NOT building instruments ("we're definitely not building electron microscopes")

2. **Cryo-EM or STEM?** — STEM for materials (less crowded than pharma cryo-EM)

3. **What's the moat?** — TBD. If compute → commodity. If algorithms → needs proprietary training data (DOE labs?)

4. **Why not incumbents?** — Thermo FEI could build this, but hasn't. NVIDIA could bundle, but focused on pharma cryo-EM.

### Assessment Update

Original thesis (automation-native instruments) → Pivoted to **AI/compute layer for STEM data**

This is closer to **Option 3 (Data/Intelligence Layer)** or **Hack #1 (Data Output Ownership)** from original analysis — which he previously critiqued as "polishing brass on the Titanic." Worth probing why EM is different.
