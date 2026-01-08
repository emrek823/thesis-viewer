---
source_pdf: "https://drive.google.com/file/d/1w8xcAk9KvgJVAvZxfYqJbtkVYZ5PXnDlY6fCiOGXa0o/view"
drive_folder: "Portfolio/Standard Model Bio"
type: portfolio
company: Standard Model Bio
ingested: 2026-01-05
original_filename: "2026-01-05-SMB-Followon-Diligence"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1w8xcAk9KvgJVAvZxfYqJbtkVYZ5PXnDlY6fCiOGXa0o/view)

# SMB Follow-On Due Diligence: Technical Validation + Epic Risk

Research Date: 2026-01-05 | Source Mix: 60% Vault / 40% Web | Confidence: HIGH

The Take: SMB has delivered since August 2025—JEPA architecture proved out at MSK (+5.8% AUROC vs LLMs on dynamic tasks), Sanofi POC closing with $4.8M contract expected Q1, and 3 ICLR 2026 papers accepted. The multimodal foundation model thesis is validated by market activity: Tempus-AstraZeneca signed a $200M deal, Bioptimus raised $76M for M-Optimus. The critical question isn't whether SMB is executing—they are. It's whether Epic Curiosity (100B patient events, 90%+ hospital distribution, same world-model architecture) commoditizes the space before SMB builds defensible pharma relationships. The answer depends on GTM focus: Epic targets hospital operations; SMB targets pharma R&D. Different buyers, different data governance. Proceed with follow-on, but watch Epic researcher results (Feb 2026) closely.

## Axis 1: Progress Since August 2025 Seed

### Technical Validation

Why this matters: The JEPA architecture specifically excels on dynamic tasks (treatment response, disease progression) where token-prediction LLMs fail. On static classification, LLMs are competitive. The lift is task-specific—and those tasks are what pharma cares about.

"GPT-4 achieves 30.3% completeness on real oncology treatment decisions... Models pass licensing exams but fail on actual clinical trajectory prediction. Root cause: Language is a lossy proxy for biological complexity."

— SMB Technical Memo

Publications:

3 papers accepted at ICLR 2026: GenVarFormer, KRONOS (graph-LLM), EHR Foundation Model

Model weights public on HuggingFace: standardmodelbio/SMB-v1-1.7B-Structure

### Commercial Traction

"Tempus seeking genomics foundation model partners despite this being their strongest area... Unusual request."

— Nov 2025 Meeting Notes

AMC Partnerships (Data + Validation): MSK (validation complete), MD Anderson (active), Yale, UCSD, Mount Sinai, Mayo Clinic

### Team Evolution

Headcount: 8 people. Heavy concentration in AI/ML + genomics.

### Runway & Fundraising

## Axis 2: The Competitive Landscape

### Direct Comparables

### Deal Benchmarks

What this tells us: Pharma is willing to pay 8-9 figures for foundation model access. SMB's deal sizes are appropriate for stage; the $200M Tempus deal validates the TAM.

The Epic Threat: Epic Curiosity launched Sep 2025 with 100B patient events from 300M patients across 310 health systems. Same world-model concept ("simulates plausible future timelines"). Outperformed 78 single-purpose models without fine-tuning. Researcher access opens Feb 2026.

### Why SMB May Still Win vs Epic

Different buyers: Epic targets hospital operations (length of stay, readmission). SMB targets pharma R&D (drug development, trial optimization).

Data governance: Pharma cannot use Epic's hospital data for proprietary drug development. Data provenance matters.

Architecture edge: JEPA shows +5.8% lift on dynamic tasks where token prediction fails. If Epic matches this, the edge erodes.

First-mover in pharma: SMB has 18+ months of pharma relationship building. Epic is starting from zero in that market.

## Axis 3: Why Multimodal Foundation Models Matter

### Performance Advantage

Vision-language models: Superior zero-shot/few-shot performance vs single-modality in medical imaging

Molecule-text fusion: Significantly improves property prediction over structure-only approaches

EHR + unstructured notes: Enhanced patient representation and treatment effect estimation

"Unlike most other foundation models used in healthcare, M-Optimus is a multimodal, multiscale foundation model that offers a new path toward a unified representation of a patient across tissue, molecular, and clinical levels."

— Bioptimus M-Optimus Announcement

### Market Tailwinds

### Key Bottlenecks

What this means for SMB: Data access is the moat. SMB's AMC partnerships (MSK, MD Anderson, Yale, etc.) are the competitive advantage—not just the architecture.

## Axis 4: Why Big Model Labs (OpenAI, Anthropic, Google) Can't Compete

A common investor question: "Why won't OpenAI/Anthropic/Google just build this?" The answer is structural, not technical.

### The Data Wall

"Any organization with ultimately limited data access will likely fail because they will never scale to the required level. Because biopharma and academic researchers typically collect data in narrow bands for specific questions, the data required for training at scale never amasses within one organization."

— SMB Manifesto

### The Sanofi-OpenAI Deal Proves The Point

In May 2024, Sanofi announced a partnership with OpenAI and Formation Bio. OpenAI didn't go direct—they needed a biotech partner (Formation Bio) to access pharma workflows and data. This validates SMB's thesis:

OpenAI has the models but not the data or domain expertise

Pharma won't hand clinical data to a generalist lab

The value is in the vertical integration, not the base model

### Why Generalist LLMs Fail on Clinical Tasks

### SMB's Response to Big Lab Competition

"We have the data they can't get" — AMC partnerships (MSK, MD Anderson, Yale, Mayo) provide proprietary training data. OpenAI would need to replicate 18+ months of relationship building.

"Our architecture is purpose-built" — JEPA predicts in latent space, not token space. +5.8% AUROC lift on dynamic tasks is architectural, not just data.

"We speak pharma" — Kevin built this at BMS; Irsyad at Genentech. The team knows what pharma actually needs (trial optimization, biomarker discovery), not what looks good in a demo.

"Pharma won't trust their data to OpenAI" — IP concerns, regulatory risk, competitive intelligence. Pharma wants a dedicated partner, not a generalist platform serving competitors.

The Real Threat: Big labs partnering with data aggregators. Google → hospital systems (Ascension deal). Microsoft → Epic integration. OpenAI → Formation Bio. If OpenAI partners with Tempus or Epic, that changes the calculus. SMB's edge is being the only player combining architecture + data + pharma focus.

## Axis 5: Why The AMC Strategy Is The Right Bet

### The Logic

Academic Medical Centers (AMCs) sit at the intersection of three critical resources:

Rich multimodal data — genomics, imaging, pathology, longitudinal EHR, treatment outcomes

Research credibility — publications, clinical validation, regulatory-grade evidence

Pharma relationships — AMCs run clinical trials, publish drug efficacy studies, influence prescribing

### Why AMCs Partner with SMB (Not Big Labs)

### The Flywheel

AMC Strategy = Data Acquisition Strategy

Step 1: Partner with AMCs (MSK, MD Anderson) for validation + data access

Step 2: Use validation to close pharma deals (Sanofi $4.8M)

Step 3: Pharma revenue funds more data partnerships

Step 4: More data → better model → more pharma deals

Step 5: Winner-take-all: "Once we get a plurality, not working with us fundamentally limits their AI performance, which is unacceptable"

### Current AMC Portfolio

### What To Push SMB On (AMC Strategy)

Key Diligence Questions:

Exclusivity: Are any AMC partnerships exclusive? Can MSK also partner with Tempus or Bioptimus?

Data ownership: Who owns the trained model weights? Does SMB retain full IP, or do AMCs have claims?

Renewal risk: What's the term on these partnerships? Can AMCs exit and take data elsewhere?

Competitive lockout: If Epic or OpenAI approaches MSK, what's the defense?

Scaling economics: Does every new AMC require 6+ months of relationship building, or is there a playbook now?

## Axis 6: The $1B Opportunity — What It Actually Looks Like

### Path to $1B Outcome

For SMB to return $1B+, we need to believe one of these scenarios:

### Scenario A: Platform Play ($100M+ ARR → $1B+ Valuation)

### Scenario B: Strategic Acquisition ($500M-$1B+)

Likely acquirers:

Tempus ($11-14B mcap) — Already seeking SMB as genomics FM partner. If they can't build, they buy.

Epic — To extend Curiosity into pharma R&D market they don't currently serve.

Big Pharma (Roche, J&J, Novartis) — Defensive acquisition to own the AI layer rather than rent it.

Big Tech Health (Google, Microsoft, Amazon) — To accelerate healthcare AI ambitions.

Acquisition logic: If SMB has exclusive AMC data partnerships + pharma customer base + proven architecture, they become a "must-have" for any serious healthcare AI strategy. The $200M Tempus-AZ deal shows pharma will pay 9 figures; an acquirer paying $500M-$1B to own the platform makes strategic sense.

### Scenario C: Winner-Take-All ($5B+ Outcome)

The bull case for $5B+ requires believing:

Multimodal clinical AI becomes infrastructure (like AWS for cloud)

SMB achieves data plurality — more AMC partnerships than anyone else

Network effects compound: more data → better model → more customers → more data

Pharma cannot function without SMB (like pharma can't function without CROs today)

SMB captures 5-10% of pharma AI spend ($3B × 5% = $150M ARR at 2025 levels; grows with market)

### Key Metrics to Track for $1B Path

### What Has To Be True for $1B

JEPA advantage holds — Epic/Google don't replicate the +5.8% lift

AMC relationships are sticky — Not just transactional; SMB becomes embedded

Pharma keeps buying — Patent cliff pressure sustains AI investment

No open-source commoditization — Academic models don't catch up

Team scales — Can hire 50+ people while maintaining velocity

What breaks the $1B path:

Epic Curiosity serves pharma directly (not just hospitals)

Tempus builds genomics FM internally (doesn't need SMB)

Big labs (OpenAI, Google) partner with data aggregators and leapfrog

Pharma AI budgets contract (macro risk)

AMC partnerships are non-exclusive and competitors replicate

## Axis 7: Risk Assessment

### Risk Probability Matrix

### What Would Change The Recommendation

Sanofi deal falls through → Reduce to bridge only

Epic Curiosity outperforms on dynamic tasks → Pause investment, reassess JEPA edge

Series A doesn't close by Q2 2026 → Reassess runway risk

Key team departures → Reassess execution capacity

## Questions to Pose in Next Call

### On Big Lab Competition (OpenAI, Anthropic, Google)

What happens when OpenAI partners with Tempus or Epic? The Sanofi-OpenAI-Formation Bio deal shows they're entering healthcare. What's your response if they get serious data access?

Google has the Ascension deal and DeepMind health team. Why can't they replicate your AMC strategy faster with more resources?

If Anthropic or OpenAI approached MSK directly, what would prevent MSK from partnering with them instead? Is there any lock-in?

### On Epic Competition

Epic Curiosity opens to researchers in Feb 2026. What's your plan when they publish benchmarks? If Epic matches JEPA on dynamic tasks, what's the differentiation?

Epic has 90%+ US hospital distribution. Can pharma access that data for proprietary R&D, or is data governance the moat?

Have any of your pharma prospects mentioned Epic as a consideration? What are they saying?

### On AMC Strategy (Push Hard Here)

Are any of your AMC partnerships exclusive? Can MSK also work with Bioptimus, Tempus, or Google?

Who owns the trained model weights? If you train on MSK data, do they have IP claims? Revenue share?

What's the term and renewal structure on AMC partnerships? Can they exit and take data elsewhere?

Does every new AMC require 6+ months of relationship building, or do you have a repeatable playbook now?

If Epic or OpenAI approaches your AMC partners with more money, what's the defense?

### On Commercial Traction

Sanofi $4.8M expected Mar/Apr 2026. What are the gating factors? Is there risk of slip?

IQVIA $44M proposal is massive. What's the decision timeline? Who's the internal champion?

Tempus is seeking you as a genomics FM partner despite genomics being their strength. What's really going on there? Is this validation or a strategic threat?

### On Technical Differentiation

The JEPA lift (+5.8%) is specific to dynamic tasks. What % of pharma use cases are dynamic vs static? Is the addressable market for the lift large enough?

The MSK validation is strong. Are you pursuing additional validation sites? What would replicate the result?

What if Epic or Google adopts JEPA-style architecture? Is the lift from architecture or from data? If data, what's the data moat?

### On $1B Path

What's the path to $100M ARR? Walk me through customer count × ACV assumptions.

The Tempus-AZ deal was $200M. What would a deal of that scale look like for SMB? Who's the customer? What's the timeline?

Is Tempus a potential acquirer? They're already seeking you as a partner. Have M&A conversations happened?

### On Series A

What's the target raise size and valuation? Who's leading the round?

10.9 months runway is tight. What's the backup plan if Series A slips?

JPM meetings are lined up. What's the pitch—is it "we beat LLMs on clinical tasks" or "we have pharma deals"?

### On Data Moat

You acquired 1M oncology CTs from Gradient for $150K. What's the data acquisition strategy for 2026? How do you scale this?

Nash Bio partnership gives you Vanderbilt multimodal data. Is this exclusive? What's the commercialization path?

## Summary Assessment

### What SMB Got Right Since Seed

Technical validation: Proved JEPA lift at MSK with real clinical data (+5.8% AUROC)

Publication velocity: 3 ICLR 2026 papers, model weights public on HuggingFace

Commercial traction: Sanofi closing, $44M IQVIA proposal, diversified pharma pipeline

Team velocity: Irsyad (ICLR + PhD in first month), Zekai (ACL paper in 1 week)

Data partnerships: MSK, MD Anderson, Yale, UCSD, Mount Sinai, Mayo Clinic

Competitive positioning: Tempus seeking SMB as partner validates build vs buy decision

### What Needs Watching

Epic Curiosity: Feb 2026 researcher results will reveal if JEPA edge holds

Big lab partnerships: If OpenAI partners with Tempus/Epic, competitive landscape shifts

AMC exclusivity: Non-exclusive partnerships are vulnerable to being replicated

Runway pressure: 10.9 months is tight; Series A timing is critical

Sanofi execution: $4.8M contract is the proof point—any slip is a red flag

### What To Push Them On

AMC lock-in: What prevents MSK from also working with OpenAI or Google?

Data ownership: Who owns model weights trained on AMC data?

Big lab response: What's the plan when OpenAI gets serious about healthcare?

$1B path: Show me customer × ACV math to $100M ARR

Bull Case: Big labs can't get the data (HIPAA, silos, institutional relationships). The Sanofi-OpenAI-Formation Bio deal proves even OpenAI needs partners—they don't go direct. AMC partnerships create compounding data moat. JEPA architecture is fundamentally superior for trajectory prediction. SMB becomes pharma's "quiet backbone"—not just a model, but the data flywheel. Sanofi $4.8M closes, IQVIA $44M follows, Tempus acquires for $500M+ or SMB scales to $100M ARR independently. $1B+ outcome.

Bear Case: OpenAI or Google partners with Tempus or Epic, getting instant data scale that dwarfs SMB's AMC strategy. Epic Curiosity matches JEPA performance on dynamic tasks—architecture edge was temporary. AMC partnerships are non-exclusive; MSK also partners with Bioptimus and Google, commoditizing SMB's data. Series A slips; runway runs out before Sanofi contract signs. Pharma AI budgets contract in macro downturn. SMB is a $50-100M exit, not $1B.

## Recommendation

PROCEED with $1.25M follow-on.

The technical validation, commercial traction, and team velocity justify continued investment. The primary risk (Epic) is real but mitigated by different GTM focus. Monitor these triggers:

## Appendix: Key Quotes

On why pharma can't build internally (Kevin Brown, ex-BMS):

"Data was scattered across different departments... Data access was weaponized to retain departmental clout... Digital pathology and genomics in research; radiology and trial data in drug development; RWD in another department... Weights & Biases took 1 year to install at BMS vs <5 days at Adobe."

On the JEPA advantage:

"JEPA architecture... Predicts in latent space, not token space... Models state transitions: (Pre-State + Intervention) → Post-State. The lift is specific to dynamic tasks (treatment response, progression). On static classification, LLMs are competitive. On trajectory prediction, JEPA dominates."

On GTM strategy:

"GTM = data acquisition strategy. Revenue comes from pharma. AMCs provide validation + data access. Revenue buys more data access. Flywheel... Once we get a plurality, not working with us fundamentally limits their AI performance, which is unacceptable."

On Tempus seeking SMB:

"Tempus seeking multimodal foundation model partners... Sliding scale pricing: $4M if no IP/model weights retained, 50% discount if Standard Model gets model weights... Unusual request: Tempus seeking genomics foundation model partners despite this being their strongest area."

Research completed: 2026-01-05 | Sources: 15 vault files, 18 web sources