---
granola_id: 7692e0d5-9d09-4999-a358-611da0ba0ea7
title: "Virtue (Sean / Emre) <> Scott Fleming"
type: note
created: 2025-12-17T17:36:08.601Z
updated: 2025-12-17T18:08:38.086Z
attendees:
  - scott.fleming.phd@gmail.com
  - sd@virtuevc.com
---
### Scott’s OpenAI and Model Performance Insights

- Scott and Karan Singhal discussions at NeurIPS - uses multiple providers
- GPT-4 to GPT-5 model performance analysis
	- Diagnostic performance and coding tasks showed significant improvement
	- GPT-5 performed really well overall
	- GPT-5 Mini delivered surprising performance per unit cost - potentially biggest bang for buck
	- GPT-5 Nano showed mixed results
- Karan’s team started August/September 2024 - about a year adding medical data to pre-training and fine-tuning
	- Significant influence on GPT-5 direction relative to GPT-4
- ICD-10 coding performance gaps remain critical
	- ICD-10 CM (diagnosis hierarchy) saw substantial improvement
	- ICD-10 PCS (procedure coding) performance still terrible
	- Constructed differently from ICD-10 CM
- OpenAI’s strategic focus: “We’re not interested in improving models for operational healthcare within the US”
	- Building models good at health and medicine, not healthcare operations
	- Oracle-OpenAI partnership with Cerner creates potential future connection
- Citation support and evidence linking mission-critical for healthcare work
	- Standard off-the-shelf retrieval models fail for medical use cases
	- Best-in-class retriever models nowhere near acceptable for medical applications
- Pieces Technology’s SafeRead product
	- Automatically detects and flags potential hallucinated content in every submitted note
	- Human review process for intervention when time permits
- Hallucination evolution: blatant errors (empty string → cardiac arrest diagnosis) nearly eliminated
	- Current errors more subtle: diagnostic overreach connecting unrelated events
	- IV fluids example: model incorrectly attributed sepsis treatment when given for different reason

### Technical Strategy and Business Model Insights

- SmarterDX technical approach
	- Move fast: LLM + prompt engineering initially
	- Build conviction: collect data flywheel capturing inputs, outputs, user feedback
	- Fine-tuned models deliver substantial gains: 30-40% performance improvement for ICD-10 PCS vs frontier models
	- 30-40% gain transforms rejection rate: from rejecting 2 out of 3 to accepting 2 out of 3 recommendations
- Mixed perspective on reinforcement fine-tuning
	- Healthcare operational problems not frontier-level math
	- Correlations and associations sufficient for value extraction
	- Cost and latency benefits from avoiding reasoning tokens
	- Frontier model companies need flashy results for novel capabilities
	- SmarterDX focus: replicate human processes safely, not create novel approaches
- Products outside core pre-bill now possible
	- Appeal letter generator: previous attempts were garbage without current base intelligence
- Core success factors beyond technology
	- Founders deeply understanding business context most critical
	- Pricing model and business model: near-zero integration costs
	- Standalone app, doesn’t sit in Epic
	- Client data dumps via scheduled cron job
	- Started with SQL queries and Jupyter notebooks from hospital AI innovation team
- Healthcare’s fundamental challenge: “who pays who and why”
	- No patient pays for their own healthcare
	- Misaligned incentives between care recipients and decision makers
	- Business model must align with actual purchasing authority
- Recommended approach for new healthcare startups: spend 6 months understanding system changes
	- Legislative changes creating new arbitrage opportunities
	- Regulatory shifts affecting digital health product financing

### Market Dynamics and Strategic Considerations

- Payer-provider negotiation tensions increasing
	- Better SmarterDX performance correlates with UnitedHealth earnings call complaints about “aggressive provider billing practices”
	- Negotiation processes remain black box - hard to access information
	- 10% negotiation improvement opportunity with significant value capture potential
- Execution speed advantage in current environment
	- Quick iteration from business opportunity identification to functional product with user feedback
	- Categorically different from 3-4 years ago in speed, not fundamental approach
- Technical vs domain expertise founder considerations
	- Healthcare domain expertise increasingly valuable
	- Workflow mapping to product deployment becoming more accessible
	- Foundational infrastructure reducing technical barriers
- Future monitoring areas
	- Google Gemini and Claude performance on same healthcare tasks (currently lacks good information)
	- Payer-provider negotiation optimization opportunities
	- Contract negotiation timing: couple contracts, couple payers, couple times per year

### Connections and Next Steps

- Ben Gong introduction offered
	- VP of Product at Evisit (telehealth company)
	- Long-time healthcare industry experience
	- Curious about next steps in the space
- Scott available for intro facilitation

Chat with meeting transcript: https://notes.granola.ai/t/fab1da40-4a80-4938-a997-8f2b1e553759
