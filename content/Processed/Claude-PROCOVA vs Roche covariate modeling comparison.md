# PROCOVA vs Roche covariate modeling comparison

**Created:** 12/19/2025 19:13:36  
**Updated:** 12/19/2025 19:21:27  
**Exported:** 12/19/2025 19:34:32  
**Link:** [https://claude.ai/chat/bd6f6448-e369-40bc-9f8f-b49520a8d3d2](https://claude.ai/chat/bd6f6448-e369-40bc-9f8f-b49520a8d3d2)  

## Response:
12/19/2025, 7:14:14 PM

````plaintext
Thought process: Examined images and prepared to synthesize covariate modeling comparison.

The user is asking me to compare PROCOVA to work Roche/Genentech did with covariate modeling, referencing the uploaded images and a Substack article. Let me first fetch the Substack article to understand what PROCOVA is, then I can compare it to what's shown in the Roche/Genentech slides.

The images show:
1. A retrospective use case of lampalizumab - showing how a Phase 2 trial (Mahalo) showed a false-positive treatment effect (~20%, p<0.2), but the Phase 3 trials (Chroma and Spectri) showed no effect. The slide notes that this Ph3 data enabled development of an AI model that predicts GA (geographic atrophy) growth rate over time.

2. A slide about "Super Covariate Adjustment" - explaining how AI prediction removes explained variability in outcomes to more precisely estimate treatment effect. It shows the concept of using Y_observed - Y_predicted as the outcome variable to reduce variance and correct for imbalances.

Let me fetch the Substack article to understand PROCOVA better.
````

I'll fetch that Substack article to understand the PROCOVA methodology, then compare it to what Roche/Genentech is showing in these slides.

````plaintext
Web Fetch: Fetched: Practical Considerations for Integrating AI/ML in Clinical Trials
````

````plaintext
Thought process: Synthesized two AI-driven covariate adjustment methodologies for clinical trials.

Now I have a good understanding of both approaches. Let me compare them:

1. **Roche/Genentech's approach (from the slides)**:
   - They developed an AI model to predict GA (geographic atrophy) growth rate over time
   - They use "Super Covariate Adjustment" - using Y_observed - Y_predicted as the outcome
   - This removes explained variability and corrects for baseline imbalances
   - They learned from the lampalizumab failure (Ph2 false positive → Ph3 failure)
   - The model was trained on the lampalizumab Ph3 data

2. **PROCOVA (Unlearn.AI)**:
   - Uses AI-derived prognostic scores as covariates to enhance treatment effect estimation
   - EMA qualified, FDA acknowledged
   - Has a variant called PROCOVA-MMRM for longitudinal outcomes
   - External data can be used for model development
   - Key is that it can maintain validity even when external data differs from trial setting

Both are essentially using AI/ML to create prognostic covariates that reduce outcome variance and improve precision of treatment effect estimates. The core statistical principle is the same - covariate adjustment using a predicted outcome.

Let me provide a comparison that's useful for a healthcare VC.
````

This is a great comparison to understand. Both approaches are tackling the same core problem but with different paths to market. Here's the breakdown:

**The Core Insight (Same for Both)**

Both Roche/Genentech and Unlearn's PROCOVA use the same statistical principle: if you can accurately predict a patient's outcome using baseline characteristics, you can subtract that prediction from the observed outcome to dramatically reduce noise. The residual (Y_observed - Y_predicted) becomes your new endpoint, which has much tighter variance and makes detecting true treatment effects easier.

**Key Differences**

| Dimension | Roche/Genentech Approach | Unlearn PROCOVA |
|-----------|-------------------------|-----------------|
| **Model source** | Trained on their own failed Ph3 data (lampalizumab) | Trained on external/historical data, then applied to new trials |
| **Regulatory path** | Internal tool for their own programs | EMA-qualified, FDA-acknowledged as a general methodology |
| **Business model** | Proprietary advantage for Roche pipelines | Platform play—partners with sponsors to reduce sample sizes |
| **Disease focus shown** | Geographic atrophy (AMD) | Alzheimer's, Parkinson's, and expanding |

**The "So What" for Investment**

The Roche slides actually validate Unlearn's thesis. Roche shows that their lampalizumab Ph2 generated a false positive (~20% effect, p<0.2) that collapsed in Ph3. The reason? Patient-level heterogeneity in disease progression created noise that mimicked a treatment effect. Their solution—building a prognostic AI model—is exactly what PROCOVA does, just arrived at independently.

The investment question becomes: is prognostic covariate adjustment a **feature** (something every pharma builds internally, like Roche did) or a **platform** (something you outsource to a specialist like Unlearn)? Unlearn's regulatory qualifications suggest they're trying to establish the latter, but Roche's internal work shows large pharma can and will build this capability in-house for high-priority indications.

Want me to dig into Unlearn's commercial traction or the regulatory nuances of how FDA is treating these AI-adjusted endpoints?



## Response:
12/19/2025, 7:18:55 PM

````plaintext
Thought process: Synthesized three AI approaches across pharma stack layers.

This is a great question. The user wants me to synthesize across:
1. Roche/Genentech's internal AI covariate adjustment work (from the slides)
2. Unlearn's PROCOVA methodology (from the Substack article)
3. Standard Model Bio's multimodal foundation model approach (from the NashBio deck)

And provide a framework for thinking about this space as a healthcare VC.

Let me break down what each is doing:

**Roche/Genentech:**
- Built a prognostic AI model using their failed lampalizumab Ph3 data
- Purpose: predict GA (geographic atrophy) growth rate to use as covariate adjustment
- This reduces variance in the endpoint, helping detect true treatment effects
- Internal tool, disease-specific (ophthalmology/AMD)

**Unlearn PROCOVA:**
- Similar concept - use AI-derived prognostic scores for covariate adjustment
- But positioned as a platform/methodology that can be applied across diseases
- EMA-qualified, FDA-acknowledged
- Business model: partner with sponsors, help reduce sample sizes
- Started in Alzheimer's, Parkinson's, expanding

**Standard Model Bio (with NashBio):**
- Building a multimodal foundation model (EHR + imaging + genomics + pathology)
- Pretrained on "tens of millions of patient records"
- Use cases include:
  - Synthetic control arms (patient matching)
  - Clinical decision support
  - Digital twins
  - Patient screening
  - Novel endpoints
- Different value prop: they're not just doing covariate adjustment, they're building a general-purpose patient representation layer

The key insight for the VC is that these represent different layers of the stack:

1. **Disease-specific internal tools** (Roche) - pharma builds for competitive advantage in specific indications
2. **Methodology platforms** (Unlearn PROCOVA) - provide a validated statistical approach that can be applied with sponsor data


3. **Foundation model platforms** (Standard Model) - provide a pretrained representation layer that can be fine-tuned for multiple downstream tasks

I see these approaches creating a nuanced value landscape in healthcare AI. Foundation models offer the most generalized potential, creating a flexible patient representation that can adapt across multiple clinical contexts. The multimodal approach allows for rich, comprehensive patient insights that go beyond traditional single-data-type models. Regulatory positioning and data partnership strategies will be critical for monetization and widespread adoption.

Synthetic control arm strategies face complex regulatory challenges. Different organizations are positioning themselves uniquely - from internal use to external qualification. The key differentiators emerge through data access, regulatory positioning, and model generalizability.

Key investment considerations center on model flexibility, regulatory acceptance, and intellectual property ownership. The fundamental questions revolve around whether covariate adjustment becomes a core feature or a standalone platform, and how generalizable AI models can be across diverse disease domains.

The competitive landscape suggests that data partnerships, regulatory strategy, and model versatility will determine long-term success in this emerging healthcare AI market.
````

This is a rich comparison. Let me pull together a framework for thinking about AI in clinical trial optimization, because these three players represent distinct strategic bets on where value will accrue.

**The Emerging Stack**

| Layer | What It Does | Example | Regulatory Status |
|-------|-------------|---------|-------------------|
| **Infrastructure** | Pretrained patient representations from multimodal data | Standard Model Bio | Unproven at scale |
| **Methodology** | Validated statistical approach for using AI predictions | Unlearn PROCOVA | EMA-qualified, FDA-acknowledged |
| **Application** | Disease-specific prognostic models | Roche/Genentech GA model | Internal validation only |

**Standard Model Bio's Bet vs. PROCOVA/Roche**

Standard Model is playing a different game. They're not building a covariate adjustment methodology—they're building the *substrate* that makes multiple downstream applications possible. Their NashBio deck lists synthetic control arms as just one use case alongside target ID, patient screening, digital twins, and CDS.

The architectural difference matters: PROCOVA and Roche build task-specific models (predict disease progression → use as covariate). Standard Model builds a general patient embedding space where similarity queries, prognosis, and treatment selection all become "fine-tuning tasks" on the same pretrained weights.

**The "So What" Framework for Evaluating This Space**

When I look at AI-for-trials companies, I now think about four dimensions:

**(1) Data Strategy: Own vs. Partner vs. Borrow**

Roche owns proprietary trial data they'll never share. Standard Model partners with data holders (NashBio/Vanderbilt) and provides model architecture in exchange. PROCOVA borrows external data to train, then applies to sponsor trials. The partnership model (Standard Model) may scale better, but creates dependency on data partners who could eventually build their own models.

**(2) Regulatory Positioning: Covariate Adjustment vs. Synthetic Controls**

This is crucial. PROCOVA is smart because covariate adjustment doesn't change the trial—it's a statistical analysis choice. FDA is comfortable with ANCOVA; PROCOVA just uses a fancier covariate. Synthetic control arms (what Standard Model pitches for NashBio) are far more controversial because they replace randomization. The FDA's 2023 draft guidance on externally controlled trials is skeptical—they call out immortal time bias, endpoint drift, and selection effects. Standard Model's "regulatory defensibility" slide (provenance scores per patient) is attempting to address this, but it's an uphill battle compared to PROCOVA's cleaner regulatory story.

**(3) Value Capture: Feature vs. Platform**

The Roche example is the bear case for platform companies. A well-resourced pharma with trial data can build disease-specific models internally. The bull case for PROCOVA/Standard Model is that most biotechs lack this capability and need external partners. The question is whether covariate adjustment becomes table stakes (everyone does it, no pricing power) or remains differentiated.

**(4) Multimodality: Nice-to-Have or Essential?**

Standard Model's pitch hinges on fusing EHR + imaging + genomics + pathology into one representation. PROCOVA typically works with structured clinical data. The question: does multimodal fusion actually improve prognostic accuracy enough to justify the complexity? The NashBio deck shows gene expression prediction on PAM50 subtypes, but those Pearson correlations (0.2-0.4 range for Luminal A) aren't overwhelming. The promise is that richer data → better predictions → larger sample size reductions, but this needs validation.

**Investment Implications**

If I'm building a thesis here, I'd segment the market:

For **large pharma** with deep trial archives: expect them to build internally (Roche model). The competitive moat of proprietary prognostic models is too valuable to outsource.

For **mid-size biotech** running pivotal trials: PROCOVA's methodology play is compelling. Regulatory qualification de-risks adoption, and 10-15% sample size reduction has real dollar value.

For **data-rich health systems** (like Vanderbilt/NashBio): the Standard Model partnership model is interesting because it lets them monetize data assets through "data + insight" bundles rather than raw data sales.

The riskiest bet is synthetic control arms replacing randomization—regulatory acceptance remains the gating factor, and I'd want to see FDA Type B meeting minutes before getting bullish.

Want me to dig into any of these dimensions further, or look at specific competitive dynamics?



## Response:
12/19/2025, 7:21:27 PM

````plaintext
Thought process: Synthesized Standard Model Bio's infrastructure strategy and competitive moat.

The user is asking me to incorporate additional context from Standard Model Bio's internal document (appears to be a pitch/strategy doc) into the framework I built earlier. Let me analyze what's new here and what it adds to the investment thesis.

Key new information from this document:

1. **Performance claims**: They show a chart that "goes up and to the right" - the rightmost being their latest model. But this is vague - no specific metrics shown in the text.

2. **Strategic positioning**: They explicitly say they are NOT trying to be an application layer company. They want to be the infrastructure/foundation model that everyone else builds on top of.

3. **Data strategy**: "data-for-model-access" exchange - partners contribute data, get model access. If you don't contribute, you get cut out.

4. **Why incumbents can't do this**:
- Big pharma: bureaucracy (took 1 year to install Weights & Biases at BMS), siloed data, talent leaves frustrated
- RWD companies (like Tempus): would have to cannibalize their existing RWD sales business
- Academic labs: resource and data limited
- Other startups: can't justify building a general foundation model while also running their core business

5. **Team background**: 
- Kevin Brown was at BMS doing oncology foundation models
- Erik Reinertsen led AI/Engineering at Prometheus (acquired by Merck for $10B)
- Claims of rapid paper production (3 papers in a month)

6. **Business model evolution**:
- Short term: pilots with pharma
- Medium term: supply companies that supply pharma (B2B2B)
- Long term: slice of every drug development decision

7. **Technical approach**: JEPA-style world model (Yann LeCun's preferred approach), multimodal (genomics, CT, EHR, ECG, pathology)

8. **Key insight on why performance matters in biomedicine**: The Opdivo vs Keytruda example - minor performance differences lead to billions in revenue difference. This is different from consumer AI where "good enough" often wins.
 
I see critical investment considerations emerging from their strategic positioning. Their infrastructure-first approach creates a compelling moat - by becoming the foundational model, they're positioning themselves as a critical platform rather than a single-use solution. The data exchange mechanism is particularly intriguing, creating network effects that could rapidly accelerate their model's capabilities. Their team's deep pharma and AI backgrounds suggest they understand both the technical and commercial complexities of healthcare innovation.

The potential to capture value across drug development stages - from early research to clinical decision-making - presents a massive addressable market. Their multimodal approach across different medical data types could be a significant differentiator, allowing more comprehensive insights than siloed solutions.

However, key diligence questions remain: Can they demonstrate tangible performance improvements? How quickly can they build the data network? What's their defensibility against potential large tech or pharma competitors?
````

This internal doc adds important color. Let me update the framework with what's new and flag the key diligence questions.

**What the Doc Clarifies About Standard Model's Thesis**

Their core bet is that biomedical AI will follow the same trajectory as general AI: foundation models trained on massive diverse data will outperform narrow task-specific models, and the winner will be whoever aggregates the most data first. The "artificial bottleneck" of patient privacy creates a land-grab opportunity—once someone trains on a plurality of data, they become the default infrastructure layer.

The Opdivo/Keytruda example is the crux of their commercial thesis: in biopharma, marginal performance gains translate to billions in revenue because you either beat standard of care or you don't get approved. There's no "good enough" pricing tier. This is genuinely different from consumer AI where adequate performance often wins on distribution.

**What's Missing (Diligence Flags)**

The document references a chart showing performance "going up and to the right" but doesn't show actual metrics. For a company claiming to build the best foundation model in biomedicine, I'd want to see specific benchmarks against alternatives like Med-PaLM, GatorTron, or domain-specific models from Tempus/Flatiron.

The NashBio deck (slide 7) shows per-gene Pearson correlations in the 0.2-0.5 range for PAM50 breast cancer subtypes. That's... fine, but not obviously superior to existing approaches. The validation set sizes are small (7-43 samples). For a "generational talent" team producing "SoTA models," I'd expect more compelling proof points.

**Updated Competitive Framework**

| Dimension | Standard Model Bio | Unlearn PROCOVA | Roche Internal |
|-----------|-------------------|-----------------|----------------|
| **Core thesis** | Win infrastructure layer via data aggregation | Win methodology layer via regulatory qualification | Win application layer via proprietary trial data |
| **Moat source** | Network effects (more data → better model → more partners → more data) | Regulatory moat (EMA/FDA acceptance) | Proprietary data moat |
| **Performance evidence** | Claims SoTA, limited public benchmarks | Published trial simulations showing power gains | Retrospective lampalizumab analysis |
| **Go-to-market** | Data-for-model-access partnerships | Direct-to-sponsor licensing | Internal consumption |
| **Regulatory strategy** | Unclear from docs | Covariate adjustment (lower bar) | Internal validation |

**The "So What" for Investment**

Standard Model's thesis is intellectually coherent but execution-dependent. Three key questions:

**(1) Is the data flywheel actually spinning?** They claim "10s of academic medical centers" as collaborators, up from 1 at start of year, targeting 100 next year. That's aggressive. Who specifically, and what data modalities are they actually getting access to? The NashBio partnership looks real (Vanderbilt BioVU is a legitimate biobank), but one partnership doesn't make a flywheel.

**(2) Does multimodal fusion actually improve clinical predictions enough to matter?** The JEPA architecture is technically interesting, but the burden of proof is showing that fusing EHR + imaging + genomics outperforms simpler approaches on clinically meaningful endpoints. The PAM50 results don't obviously clear that bar.

**(3) What's the regulatory path?** PROCOVA got EMA qualification by positioning as "just ANCOVA with a fancier covariate." Standard Model's synthetic control arm use case (NashBio slide 5) faces much higher regulatory scrutiny. The doc doesn't address this—it's mostly about commercial strategy and data aggregation, not regulatory strategy.

**Team Assessment**

The backgrounds are strong for this type of company: BMS oncology AI, Prometheus (Merck's $10.8B acquisition was partially about their biobank), Siemens federated learning. The claim about rapid paper production is verifiable—I'd want to see the actual publications and their venues.

The internal culture quotes about humility and mission-focus read as genuine founder energy, though the "some of us have had big enough exits that we don't need to work" line is a bit heavy-handed for a pitch doc.

**Bottom Line**

Standard Model is making the right intellectual bet (foundation models will win in bio), but they're earlier than PROCOVA on the validation curve. PROCOVA has regulatory qualification and published trial simulations; Standard Model has a compelling thesis and early partnerships. For a healthcare VC, the question is whether you're buying the thesis at Series A prices or waiting for clinical validation at Series B prices.

Want me to dig into any of these threads further—the team's publication record, the Tempus/Flatiron competitive positioning, or the regulatory pathway differences?





---
Powered by [Claude Exporter](https://www.claudexporter.com)