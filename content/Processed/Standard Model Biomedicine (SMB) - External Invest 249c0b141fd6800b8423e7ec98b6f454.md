# Standard Model Biomedicine (SMB) - External Investment Memo

### **Company / Deal Overview**

**Company Overview:**

- **Name**: Standard Model Biomedicine (SMB)
- **Overview**: Standard Model Bio (SMB) builds multi-modal foundational models for biopharma companies and owners of biomedical data (health systems, biobanks).
- **Team**: Kevin Brown (CEO), Arda, Shaun, Zekai
- **HQ**: Philadelphia, PA
- **Website**: [https://www.standardmodel.bio/](https://www.standardmodel.bio/)
- **Founding Year:** 2024

**Deal Terms:**

- **Round Size:**  $1.8M
- **Post-Money:** $22.5M
- **Virtue Investment Amount & Ownership (% on fully diluted basis): 8**%
- **Financing Instrument (equity, SAFE, convertible note, etc.)**: SAFE
- **Co-investors.** *N/A*

### **Executive Summary**

Standard Model Bio (SMB) builds multi-modal foundational models (FMs) for biopharma and owners of biomedical data (health systems, biobanks, etc). SMB abstracts away compute, infrastructure, and raw data, and delivers a few lines of code for pharma to access a complex universal patient representation (embeddings of multi-modal data for each individual patient). Pharma can then use this universal patient representation to answer *“what is likely course/outcome of disease for this individual patient”*? for multiple down stream use cases across the pharma value chain. SMB is the only company we’ve seen in market to-date that is leveraging multi-modal FM for biopharma that specifically focus on patient-level (vs. cell-level) representations and is selling pharma a customized model (vs. services or SaaS). 

[Kevin Brown (CEO)](https://www.linkedin.com/in/kevin-brown-6b15a1167/) and [his team of 5](https://www.standardmodel.bio/) have the experience fine-tuning/training large AI models at scale that pharma can’t hire and the biology/clinical experience and access to data that OpenAI and Anthropic currently lack. By positioning itself as a neutral infrastructure provider that can be the “silent backbone” for all players in the data ecosystem, SMB can aggregate broad, multi-modal datasets across institutions and modalities, creating a defensible moat that scales with each deployment. 

Biopharma is facing declining R&D productivity and intensifying commercial pressures, forcing a shift beyond “low-hanging fruit” opportunities to more precise and specific approaches. Multi-modal foundation models (FMs) offer multiple advantages over current approaches (higher predictive accuracy, adaptability across use cases/instituions), but pharma doesn’t have the internal talent or infrastructure to leverage FMs in their organization today. 

SMB’s core advantage lies in its universal patient model infrastructure, which is a secure, multimodal backbone capable of ingesting any biomedical modality (genomics, radiology, pathology, EHRs, ECG, MRI) and mapping it into a shared representation. This architecture uses modular “connector” encoders and a large concept model for biology, enabling arbitrary modality fusion without retraining and delivering state-of-the-art performance across complex, high-value clinical tasks. SMB has already outperformed leading benchmarks, including exceeding Memorial Sloan Kettering’s MSK-CHORD results across multiple cancer prognostic tasks, demonstrating superior predictive accuracy and generalizability. 

SMB’s GTM strategy is really a go-to-data strategy guided by 3 observations

- **Domain experts must own biomedical AI applications.** SMB delivers code and in some cases a GUI, but customers own the last 10% of deployment
- **Data scale and quality drive AI performance.** SOTA ****foundation models have significant delta in performance that enable SMB to tackle more complex use cases
- **Biomedical data is siloed.** SMB monetizes with pharma, but gives models for free or at cost to AMCs or biobanks for data access and learnings from model weights.

To-date, SMB has signed a $1M contract with BMS ($750k for model delivery, $250K for compute) to predict line of therapy transfer based on inclusion / exclusion criteria for their trials. A multi-million dollar contract for Sanofi across multiple similar use cases is expected to be signed in September/October. SMB is working with or in discussions with multiple health systems (MD Anderson, UCSD, Mt. Sinai, Mayo/Dana Farber collaboration) and biobanks (Nash Bio, UK Biobank) to access data and improve its model weights. 

***We are excited to invest $1.8M at a $22.5M post-money valuation to support SMB’s pharma BD (2 signed customers EOY, 2 more in advanced pipeline) and data acquisition (5+ AMC/biobank partners) to raise a $10M-$20M round in 6-12 months to further expand SMB’s go-to-data strategy.*** 

### Team

The SMB team is one of the strongest and most well-rounded technical teams in the portfolio across Fund I and Fund II at this stage of the business (<$3M raised). The team was planning on raising $10M in September (which they could’ve easily raised), but we have been working with them and selling Virtue to convince them of the value to raise a smaller amount now to raise an even larger round ($20M) in January at JPM. 

[**Kevin Brown (CEO)**](https://www.linkedin.com/in/kevin-brown-6b15a1167/) - Kevin previously led oncology foundation model development at Bristol Myers Squibb and federated learning R&D at Siemens Healthineers. His publications span computational neuroscience, state-of-the-art medical imaging foundation models, and the use of LLM's for clinical outcome prediction in top-tier machine learning venues.

[**Zekai Chen](https://www.linkedin.com/in/zekaichen/) (Multimodal/Time-series ML)** - Zekai previously built foundation models at JPMorganChase and Bristol Myers Squibb, where he worked with Kevin. Zekai’s academic works on graph learning, adaptive sharing, and drift-aware Transformers provide the basis of SMB’s foundation-model stack, turning heterogeneous biomedical data into a cohesive, privacy-preserving universal patient language that pharma and health-systems can query for any outcome. 

[**Arda Pekis](https://www.linkedin.com/in/ardapekis/) (Medical imaging & VLMs) -** Arda focuses on high-resolution medical vision, from 3-D breast MRI segmentation validated across institutions to visualization tools that support surgical planning. Prior to joining SMB, he worked with Kevin at SimBioSys. 

[**Shaun Porwal](https://www.linkedin.com/in/shaunporwal/) (Clinical utility & stats tooling).** Shaun started building stats/ML pipelines at *Memorial Sloan Kettering* (MSK) and open-sourcing the dcurves library that biostatisticians now use to turn raw model scores into Decision Curve Analysis (DCA) plots (>32 k downloads). 

[**David Laub](https://www.linkedin.com/in/dlaub/) (Genomics systems**). David is a UC San Diego bioinformatics PhD who specializes in turning raw variant data into model-ready tensors. He co-developed EUGENe, a FAIR deep-learning toolkit for regulatory genomics; built GRIEVOUS for cross-dataset GWAS harmonization; and created GenVarLoader, a memory-mapped dataloader that massively accelerates personalized-genome training/inference. 

[**David Laprade](https://www.linkedin.com/in/davidlaprade/) (Distributed Systems at Scale).** David is a biologist and software engineer who has been the technical co-founder of multiple startups. David did bench science for 4 years and published peer reviewed work in genetics. He was a software engineer at Stripe, where he invented a distributed computing algorithm which (as far as he knows) is still on the critical path of a system that moves >$1B/mo.

### Market Overview

We’ve sized the pharma data & analytics market from multiple previous investments (Integral, Tuva, Ryght, Prudentia) at $20B+, and SMB is taking a novel approach to unlock more spend in this market as they tackle more complex use cases across the pharma value chain from preclinical to clinical research to commercial. 

![Screen Shot 2025-08-16 at 12.12.17 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_12.12.17_PM.png)

**Applications.** Benevolent AI scrapes publications to find new targets. Owkin analyzes lab and real-world data to identify drug targets (TYK2, PD-1/PD-L1) that biopharma should target. Faro designs clinical trial protocols. Unlearn AI uses synthetic data to reduce the size of control arms. Atropos Health uses RWE to understand disease progression to inform clinical recruitment / design. [Viz.ai](http://Viz.ai) sells software to health systems that diagnose more patients to grow top of funnel for pharma’s patient populations. Tempus sells a genomics test that drives biomarker-driven therapy. There are all companies that sell SaaS or services to biopharma end customers. SMB’s model (just like you call an OpenAI API today) could theoretically be a component of their offerings. Today, SMB has not pursued this option because of smaller contract sizes compared to biopharma and the openness to pharma’s biostats or clinical trial team to own the last 10% of deployment. More importantly for our internally thinking, this positioning for SMB highlights the breadth of use cases SMB can tackle. 

**Data Sources.** Text from the web is called out because this is mostly what the larger model companies like OpenAI and Anthropic train their models on, but SMB is focused on access to rich data types (clinical, ‘omics, imaging, pathology, etc) that are typically siloed within and between institutions. SMB provides value directly to these data sources for the right and privilege of accessing that data to train model weights or bring the data source into a deal with pharma. For example, SMB provides MD Anderson access to a model that predicts cardiotoxicity for different chemo regimens, and, in return, gets access to MD Anderson data, trains model weights, and can use this to engage MD Anderson in pharma deals. For NashBio, Nash and SMB would jointly produce a foundation model that NashBio could go offer in an AI-augmented tier to upsell pharma. 

**Models.** The large labs (OpenAI, Anthropic, Meta) are just starting to acquire medical imaging data and partnering with smaller biotechs (Genmab, Madrigal) on much simpler internal tasks focused document generation and review. There are also a number of uni-modal foundation models trained on ‘omics data (Evo2), pathology data (Virchow), medical imaging data (MedImageInsight; Microsoft), and clinical data (Ethos). More importantly, 

### **Problem / Why Now?**

Biopharma is moving beyond low-hanging fruit of single modality approach (e.g., point mutation for lung cancer) to improve declining R&D productivity in the face of loss-of-exclusivity (LOE) for blockbuster drugs. Foundation models can drive the performance necessary to drive these precision medicine approaches, but biopharma can’t build these foundation models internally. 

![Screen Shot 2025-08-11 at 7.21.59 AM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-11_at_7.21.59_AM.png)

**Pharma moving beyond low-hanging fruit**. Pharma R&D productivity has declined over the past 2 decades ([# of new drugs approved per $B in R&D halves every 9 years](https://lukemuehlhauser.com/wp-content/uploads/Scannell-Diagnosing-hte-decline-in-pharmaceutical-RD-efficiency.pdf)) while [$230B+](https://www.thepharmaletter.com/pharmaceutical/big-pharma-faces-new-patent-cliff-as-top-sellers-near-end-of-exclusivity?utm_source=chatgpt.com) in pharma blockbuster revenues are going off patent over the next 5 years. To address the declining ROI of drug development, pharma is moving towards precision medicine (targeted therapies, adaptive trial designs). The first-wave of low-hanging fruit in oncology (EGFR mutations in lung cancer) were successful, but future growth requires other modalities and moving this approach into other therapeutic areas outside of oncology (immunology, neurology, cardiometabolic, etc) 

**Multi-modal foundation models can now address this precision medicine goal.** Multi-modal FMs have the potential to drive a step change over current approaches. By embedding genomics, imaging, clinical notes, and time-series data into a unified patient representation, FMs can deliver higher [predictive accuracy,](https://arxiv.org/pdf/2412.02621) greater robustness to [site variation](https://arxiv.org/abs/2311.11483?utm_source=chatgpt.com), and [rapid adaptability](https://arxiv.org/pdf/2503.17564) through lightweight fine-tuning. This allows a single backbone to flex across enrichment, safety, and response prediction tasks without retraining from scratch to impact the entire biopharma value chain. FMs can break down silos across data types and the specific tasks (indication prioritization, trial design, CDS for commercialization). Tackling complex biology in immunology, cardiometabolic disease, and neurology requires cross-modal context integration that traditional approaches cannot provide. SMB provides pharma these capabilities. 

**Pharma doesn’t have internal talent to fine-tune / train FMs.** Despite the potential, pharma simply doesn’t have the in-house talent or infrastructure to build these models. Kevin and team lived this inside of BMS when it took them >1 year to even adopt a simple tools like Weights & Biases, and we’ve heard it multiple times talking to the engineering leaders in pharma who are struggling to hire ([Amir Emadezeh](https://www.linkedin.com/in/amiremadzadeh), [Thomas Fuchs)](https://www.linkedin.com/in/fuchsthomas/). Biomedical data is siloed across institutions and modalities, compute is prohibitively expensive, and, because of talent/cultural issues mentioned above, pharma is not on the cutting edge of new techniques or recipes for training AI models. Standard Model Bio is explicitly designed to solve this gap: by handling the first 90% of biomedical AI in a reusable, multi-modal foundation, they abstract away the cost and complexity while allowing domain experts to own the last-mile applications. This positioning makes SMB the natural infrastructure layer for the next wave of precision medicine.  

### Current Use Cases

SMB monetizes with pharma but serves models to both pharma companies and health systems or biobanks. SMB delivers a few lines of code that abstracts away the complexity (shown below) and hands that off to biostats, data scientists, or SMEs (clinical, research, etc) at the customer to deploy the last 10%. 

![Screen Shot 2025-08-16 at 11.07.54 AM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_11.07.54_AM.png)

Most of SMB’s use cases are based in prognostics (predicting the likely course or outcome of disease) based on a universal patient representation (think: embeddings of multi-modal data for each individual patient). Specific examples include 

**BMS: Prognosis for line of therapy transfer (Signed $1M contract; $750K for model and $250K for compute)** 

Historically, BMS has used RWD to inform inclusion/exclusion criteria. For nivolumab, they might look at treatment patterns (e.g., proportion of NSCLC patients receiving FOLFOX or other chemo backbones before moving to second-line immunotherapy) to structure trial arms. With SMB, BMS can go a level deeper: instead of just knowing *what* regimens patients receive, they can predict *when* those patients will become trial-eligible. For example, SMB could show that X% of patients at major academic centers shift from first-line chemo to second-line immunotherapy within 4–5 months, compared to 7–8 months in community settings. 

**MD Anderson:** SMB is collaborating with MD Anderson to develop models that can predict cardiotoxicity risk in oncology patients, a critical adverse event for many chemo- and immunotherapy regimens. The initial phase is structured as a research project, with the goal of publishing peer-reviewed evidence demonstrating that SMB’s multi-modal foundation model (integrating EHR, imaging, and treatment history) can anticipate which patients are most likely to develop cardiac complications. Once validated, the team plans to deploy the model in MD Anderson’s clinical environment with a front-end GUI that clinicians can use at the point of care. 

SMB wants to provide research and operational value to AMCs initially for the right and privilege to access AMC’s data and distribution for pharma monetization. Too many companies promise monetization with biopharma 3+ years down the road to the innovation team and lose buy in from clinicans on the ground

**Nash Bio:** SMB is currently in conversation with NashBio for 3 use cases. SMB brings the technical depth to build and train multi-modal FMs at scale to enable Nash to monetize its data through insights rather than raw access. AI Synthetic Control-Arm Accelerator can deliver patient cohorts 10× faster by matching across notes, imaging, and genomics, with full provenance that reduces sponsor queries and analyst burden. The Clinical Decision Support toolkit enables Vanderbilt researchers and hospital clients to generate real-time risk scores inside Epic. SMB’s Genomic Foundation Model predicts gene expression patterns in oncogenes and tumor suppressors, expanding NashBio’s offering into cbiomarker discovery and validation

![Screen Shot 2025-08-16 at 12.07.21 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_12.07.21_PM.png)

![Screen Shot 2025-08-16 at 12.07.25 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_12.07.25_PM.png)

![Screen Shot 2025-08-16 at 12.07.30 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_12.07.30_PM.png)

### Infra

SMB isn’t just training a single model but end-to-end infrastructure. At the core is a modular connector architecture: encoders for text, imaging, genomics, time-series, and pathology that all map into a shared patient embedding space. 

![Screen Shot 2025-08-16 at 12.19.42 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_12.19.42_PM.png)

SMB doesn’t rely on highly structured or normalized datasets but relies on raw data as much as possible to preserve subtle clinical signal. For example, [MSK-CHORD](https://www.nature.com/articles/s41586-024-08167-5) cleaned, normalized, and structured data prior to modeling with curated feature tables. SMB wants to convert data back to text where possible to scale across modalaties and drive performance gains (more below). For images, SMB also maps images to language space using a vision encoder (*connector in diagram)* so that the foundation model can process all modalities at once. SMB can even incorporate best-in-class unimodal models, like EVo2 for genomics. These models features are treated as another model and the model sees tokens that are output from the SOTA model that SMB can now incorporate. For each prediction task, you can fine-tune the multi-layer perceptron (MLP) head to map the patient embedding to whatever target SMB is focused on (survival, risk score, trial eligibility). 

SMB is not simply focused on the latest techniques and architectures, but results. In the pathology VQA benchmark (image 1), SMB’s model with Optimus 8B hits 67.1% accuracy, outperforming widely used open multimodal models like LLaVA (v1.6–34B) and HuatuoGPT-Vision-34B, despite those being ~5× larger. These are notjust incremental improvements and shows SMB’s architecture is more data efficient than general purpose vision-language models. A 0.05 AUROC gain in prognostic enrichment can reduce the sample size required for adequate statistical power by ~15–20%. 

![Screen Shot 2025-08-16 at 12.20.11 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_12.20.11_PM.png)

In cancer prognosis (image 2), SMB’s Standard Model consistently outperforms MSK’s CHORD, the gold-standard multimodal survival model released in late 2024. CHORD is widely regarded as the best-in-class benchmark in academic oncology AI, combining painstakingly curated multimodal datasets and years of work at Memorial Sloan Kettering. SMB surpasses it across multiple tumor types: Stage I–III prostate AUROC improves from 0.80 → 0.86, and colorectal cancer from 0.77 → 0.81. While these gains may look modest on paper, in survival modeling even 0.02–0.03 lifts are considered state-of-the-art and SMB is doing that across multiple cancer types. Translating this to practice, a 0.05 AUROC gain can sharpen survival curve separation by 2–3 months in enriched cohorts, which is often the difference between a failed and a positive Phase II. Unlike CHORD, which is cancer-specific, SMB’s backbone is generalizable across therapeutic areas, underscoring the strength of their infrastructure rather than one-off dataset optimization.

![Screen Shot 2025-08-16 at 12.20.21 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-16_at_12.20.21_PM.png)

### Commercial / GTM

SMB’s GTM strategy is really a go-to-data strategy guided by 3 observations:

- **Domain experts must own biomedical AI applications.** SMB delivers code and in some cases a GUI, but customers own the last 10% of deployment
- **Data scale and quality drive AI performance.** SOTA ****foundation models have significant delta in performance that enable SMB to tackle more complex use cases
- **Biomedical data is siloed.** SMB monetizes with pharma, but gives models for free or at cost to AMCs or biobanks for data access and learnings from model weights.

SMB is taking advantage of their novel model infrastructure to sell pharma a model, which is an evolution of business models in selling to pharma (see below).  This GTM approach is similar to MosaicML, although MosaicML had a different technical infrastructure. [MosaicML did not want to send another LLMOPs tool (e.g., orchestration) but solve their problem and give customers what they want: a trained model.](https://www.unusual.vc/post/mosaicmls-product-market-fit-journey?utm_source=chatgpt.com)  SMB is doing similar. 

![Screen Shot 2025-08-11 at 8.26.59 PM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-11_at_8.26.59_PM.png)

SMB has shown they can command 7-figure contracts from biopharma. SMB views this revenue as getting paid to collect data and train model weights today. Going forward, we are focused on: 

- **Pharma Monetization.** Expanding throughout innovation and operational budgets, and data science/RWD and brand / trial specific budgets. Because of SMB’s positioning as infrastructure and a framework for multiple use cases, it is important to ensure that SMB isn’t seen as too broad and gets stuck in innovation bucket, nor too narrow and compared to other uni-modal models. SMB’s early positioning has been effective here given Kevin’s knowledge and relationships in the space (e.g., Sanofi would be from innovation and operational budget)
- **Data Access.** Pharma may drive access to more AMCs and biobanks, but SMB is focused on building those relationships and data access itself. We are focused on a broad array of customer types (MD Andeson, Cedars, Kaiser, UK Biobank) across diverse therapeutic areas (starting with oncology and immunology). The GTM pitch is focused on tapping into their unsued data assets to not get left behind in the FM era.

### Competition

The closest competition to SMB is Bioptimus, which is focused on biology-level foundation models. Other companies like Tempus are trying to build their own models and drug discovery companies will continue to incorporate clinical data. The larger model companies have focused to-date on document generation review tasks, and are more likely to partner over the next few years (especially for data access) 

**BioOptimus ($76M Raised, Owkin Owns 51%):** BioOptimis, an Owkin spinout, is built off the Mosaic consortium, which aggregates 7,000 patients across 7 cancers and 5 data modalities (DNA, protein, transcriptome, histology, clinical. This entire data foundation is through Owkin and their federated network built up over ~10 years. They are initially focused on histology and transcriptomics, and long-term focused on gene-level to patient-level biology. 

![*2023 Pitch Deck*](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-11_at_9.41.29_PM.png)

*2023 Pitch Deck*

Rather than focusing primarily on “bottom-up” molecular and omics data, SMB is starting from the patient record as the anchor modality (notes, labs, tables, imaging, genomics) and building a generalizable patient embedding space. This allows SMB to tackle clinically actionable tasks today (trial design, synthetic control arms, CDS) while also being extensible to drug discovery. Where BioOptimis is strongest in omics-heavy, research-first applications, SMB is strongest in clinical, trial, and real-world deployment.

**Data Owners:** There’s a wide range of data owners from health systems to biobanks that would be interested in better leveraging their data for clinical care or monetizing with biopharma. While it’s easier to understand why Cedars won’t train their own FM, a better example to highlight is Tempus. Tempus has 1M imaging records, 900K matched clinical-genomic records, and 200K+ transcriptomic profiles. They have been attempting to build an oncology foundation model, but just recently started looking for a vendor to help them because they cannot build it internally (Matt Stergiou leading). 

**Drug Discovery Companies:** Valo had access to data from Israeli health system to run cohort analyses or better target patients for clinical trials. Even VCs like Foresite Capital have an internal Foresite labs platform with RWD capabilities to support indication expansion and other tasks. These are used in a one-off fashion across single use cases all across industry. 

![Screen Shot 2025-08-18 at 7.16.22 AM.png](Standard%20Model%20Biomedicine%20(SMB)%20-%20External%20Invest/Screen_Shot_2025-08-18_at_7.16.22_AM.png)

### Financing / Milestones

The positioning of this round is a sprint towards a larger $10-$20M in January at the JPM Healthcare Conference in January. To raise that round, we need to accomplish 3 things: 

- **Pharma BD.** Close 2 pharma BD deals for 7-figures (BMS one, Sanofi imminent) and have 2 more in the pipeline (J&J and Novartis current frontrunners).
- **Data access.** While there is value to diversity of data types and quality is most important, we set a goal to engage 5 more tier-1 data partners of the prestige of MD Anderson and UK Biobank.
- **Hiring.** On the AI and engineering side, SMB is always looking for great talent but more of the near-tern hiring focus is delivering on these deals for biopharma and strategic sales for data partners. SMB is looking to bring on 1 VP, AI and Product Strategy in the near-term to help with these.

### Opportunities / Risks

**Opportunities** 

- **Capital efficient, highly technical team:** SMB built SOTA biomedical foundation models with a team of 5 with $1M raised. This capital efficiency will continue even with a larger raise because of SMB data access strategy and how and who they hire on the engineering team.
- **Novel approach with compounding data network.** Every new partner that connects contributes more raw, multimodal patient data, which improves embeddings across tasks and makes the system more defensible over time. This creates a virtuous cycle where SMB’s models get more powerful, while competitors without similar access fall further behind. There is a moment in time over the next 2-3 years to win with this type of strategy.
- **GTM Optionality.** The same backbone can be monetized through multiple channels: synthetic control arms for biopharma, clinical decision support for providers, or risk stratification tools for payers. This diversity of entry points reduces dependency on any one customer segment and broadens the company’s surface area for partnerships and revenue.

**Risks**

- **Model performance gap degrades.** If the performance gap relative to open-source foundation models narrows too quickly, SMB may lose differentiation. Continued innovation on data access, connectors, federated training, and regulatory-grade provenance is essential to stay ahead.
- **Data access tougher than planned.** While SMB has demonstrated traction with early partners, expanding access at scale will require navigating complex IRB processes, privacy regulations, and competitive dynamics with entrenched data owners. Delays here could slow model improvement and customer adoption.
- **Last 10% Problem.** SMB is deliberately not optimizing for the last 10% of accuracy required for direct clinician-facing tools, instead focusing on empowering SMEs and researchers who can tolerate some imperfection in exchange for speed and breadth. However, customers may push back and demand the full 100% solution for high-stakes clinical workflows. In that scenario, SMB’s flexibility and ability to pursue many use cases could be constrained.