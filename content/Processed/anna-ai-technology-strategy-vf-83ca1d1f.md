---
source_pdf: "https://drive.google.com/file/d/1owx0yWfwY8F_Oh5pOHZWMoqjZoAPRZVc/view"
drive_folder: "Portfolio/Anna Autism Care"
type: portfolio
company: Anna Autism Care
ingested: 2025-12-27
original_filename: "ANNA AI Technology Strategy vF.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1owx0yWfwY8F_Oh5pOHZWMoqjZoAPRZVc/view)

## Slide 1: ANNA AI Technology Strategy
ANNA AI Technology Strategy
Three fundamental shifts have transformed how we build technology at ANNA: the advancement of generative AI, the declining cost of development, and the compression of MVP cycles. These changes have enabled us to reimagine what's possible in clinical care delivery both within ANNA and across specialties.

## Slide 2: The Platform Shift - Three Forces Reshaping Healthcare Technology
The Platform Shift
Three Forces Reshaping Healthcare Technology

### Generative AI Advancement
The proliferation of accelerated computing (NVIDIA GPUs, Google TPUs) enabled companies like OpenAI, Google, and Anthropic to train increasingly powerful foundation models — Transformer-based architectures with larger context windows and parameter counts. Technology has transitioned from software that accelerates human work to agentic AI capable of completing entire workflows with minimal human intervention.

### Declining Development Cost
AI has proliferated inside the development stack itself, compressing time, labor, and coordination required to ship product. Code-generation models (copilots, agentic IDEs, autonomous test tools) sit alongside engineers as real-time collaborators. A single developer can now draft scaffolding, implement features, generate tests, debug, migrate codebases, and produce documentation in a fraction of historical time, effectively multiplying capacity without increasing headcount.

### MVP Compression
AI-enabled coding tools have collapsed the distance between idea and functional product. Small teams or even single builders can ship production-grade MVPs in days. The "spec phase" becomes a live prototype, and the prototype becomes the spec. Product management shifts from a gating function to a market-sensing function—the fastest way to discover what users want is no longer planning, it's shipping.

## Slide 3: Our Strategy - ANNA Product Roadmap
Our Strategy
ANNA Product Roadmap

*   **Margin Efficiency**
    Automating non-billable activities to drive disproportionate returns to the bottom line
*   **Scalability**
    Removing friction from growth processes to enable infinite expansion
*   **Quality at Scale**
    Augmenting clinicians with AI to deliver unprecedented service quality

At ANNA our AI roadmap is focused on three key variables: 1) Margin Efficiency, 2) Scalability, and 3) Quality at Scale. Each of these variables reinforces the others, creating a compounding effect. We embed into clinician workflows to understand where we can create the most leverage.

## Slide 4: Building with Velocity and Capital Efficiency
Building with Velocity and Capital Efficiency

*   **2 Engineers**
    One full-stack founding AI engineer and one AI/ML engineer
*   **1 Product Leader**
    Focused product work driving strategic direction
*   **1 Design Partner**
    Outsourced design firm for user experience

This has historically never been possible with such a lean team. The three vectors of AI advancement, declining development costs, and MVP compression have fundamentally changed how technology gets built.

## Slide 5: Our Current Technology Stack
Our Current Technology Stack
ANNA's clinical truth spans SharePoint, Hi Rasmus, and Lumary/Salesforce, and we consolidate it in S3 then index it with Bedrock, Titan Embeddings, and OpenSearch vectors, enabling production-grade semantic retrieval and RAG leveraging longitudinal clinical data.

1.  **Systems of Record**
    SharePoint, Hi Rasmus, Lumary/Salesforce
2.  **Amazon S3**
    Raw document storage
3.  **Processing & Extraction**
    Document parsing and structured extraction
4.  **Titan Embeddings**
    Semantic embeddings for search
5.  **OpenSearch Vector Store**
    Indexed vectors for retrieval
6.  **Amazon Bedrock KB**
    RAG-powered clinical reasoning

This architecture provides a production-grade RAG capability that's fast enough for point-of-care use, modular for future evolution, and secure for clinical deployment. It forms the foundation for extending with structured data and ontology grounding via Neptune.

## Slide 6: Early Wins - Implementation of AI in the Operational Workflow
Early Wins
Implementation of AI in the Operational Workflow

*   **Silna Partnership**
    AI revenue cycle management automating eligibility checks, benefit verification, and prior authorizations. Immediate impact: substantial accuracy improvements with lower costs, plus infinite scalability as friction was removed from growth.
*   **Automated Scheduling**
    Optimizing schedules for clinicians and clients to enable greater throughput and utilization, driving economics to the business and to our providers, enabling improved clinician value proposition.

## Slide 7: Implementation of AI in the Clinical Workflow
Implementation of AI in the Clinical Workflow
Clinicians grapple with extensive non-billable administrative tasks, diverting their valuable time from direct patient care and hindering both their clinical capacity and organizational margin. ANNA's product roadmap strategically addresses this challenge by integrating advanced AI solutions designed to free clinicians from this burden.

*   **AI Scribe: Automated Documentation**
    Our AI Scribe automates the meticulous note-taking process, capturing clinical interactions in real-time. This eliminates hours of administrative burden, freeing up BCBAs and BTs to spend more time with clients
*   **Blueprint: Treatment Plan Generation**
    Blueprint synthesizes client data and ANNA clinical protocols to create individualized treatment plans, transforming a complex, time-consuming task into an efficient, data-driven process.
*   **Lucent: Clinical Decision Support**
    Lucent provides instant, client-specific recommendations and guidance, acting as an always-available senior supervisor with perfect recall. This augments clinicians with unparalleled support, reducing variability and enhancing care quality.
*   **Guideline: AI Fidelity Monitoring (Prototype)**
    Guideline uses AI to monitor treatment fidelity, ensuring clinicians adhere to evidence-based protocols. By providing immediate feedback and identifying areas for improvement, it maintains quality standards across all sessions and supports continuous professional development.

By leveraging these AI tools, we enable clinicians to reclaim their time, liberate them from administrative tasks, and empower them to practice at the highest level of their license, ensuring better outcomes for both patients and providers.

## Slide 8: Blueprint: AI Treatment Plan Generation
Blueprint: AI Treatment Plan Generation
Blueprint integrates ANNA's comprehensive clinical protocols with extensive client data well beyond human capacity, enabling precision and quality in treatment plan development.

*   **Deep Data Ingestion**
    Blueprint processes comprehensive client data, including medical history, patient interviews, developmental assessments, and NDBI clinical model training.
*   **Precise Treatment Plans**
    The copilot produces treatment plans with unparalleled quality, fidelity, and precision, a level previously unattainable.
*   **Enhanced Service Value**
    This superior service quality reinforces our value to payors, strengthening our position in the market.
*   **Reinvestment & Growth**
    Increased margin is reinvested directly into our clinical team and technology, ensuring continuous innovation and improvement.

This self-reinforcing cycle drives our service quality, creates financial margin, and allows us to further invest in both our clinical expertise and technological advancements.

## Slide 9: Lucent: AI Clinical Decision Support
Lucent: AI Clinical Decision Support
Lucent is an always-available clinical decision support copilot for BCBAs and BTs/RBTs. Leveraging ANNA's NDBI model and client records, it acts as a senior supervisor with perfect knowledge, providing client-specific answers instantly.

### For BCBAs: Strategic Guidance
Lucent supports higher-order clinical reasoning in and between visits:
*   Interpret behavior patterns & adjust prompting
*   Select and sequence treatment targets
*   Translate data into plan updates
*   Get continuous oversight on complex decisions

### For BTs/RBTs: In-Session Implementation Support
Lucent helps therapists prep, execute, and reflect:
*   Prep for visits & understand target rationale
*   Walk through program steps
*   Calibrate reinforcement strategies
*   Get post-session guidance and adjustments

Lucent retrieves and synthesizes relevant client history and ANNA's protocols, providing clear, role-appropriate recommendations with explicit reasoning. This collapses the time between uncertainty and high-quality action, reducing variability across staff and raising fidelity at scale.

As Lucent captures feedback, it becomes increasingly personalized and precise. This turns everyday clinical work into a compounding learning loop, scaling ANNA's best practices across every client.

## Slide 10: Guideline: AI Fidelity
Guideline: AI Fidelity
We have a fully functional prototype of the Guideline AI fidelity product that is pushing the very boundaries of what technology is capable of.

*   **Video Ingestion**
    Guideline ingests video data from our staff sessions
*   **Multi-Modal Analysis**
    Layers AI vision model with AI speech-to-text, combining them into one specific timeline
*   **Clinical Evaluation**
    Analyzes using our clinical fidelity evaluation scoring to give recommendations for improvement
*   **Real-Time Feedback Loop**
    Creates infinite feedback loop enabling clinicians to continuously grow service quality

This has the potential to completely transform the way that ANNA delivers clinical services.

## Slide 11: Secure-by-Default AI Foundation
Secure-by-Default AI Foundation
ANNA currently operates on a secure, HIPAA-eligible AWS baseline, ensuring all data remains protected within our Virtual Private Cloud (VPC).

This foundation includes comprehensive encryption for data in transit and at rest via KMS, tightly permissioned access to clinical artifacts at the application layer, and all inference running through HIPAA-eligible Bedrock services. Guardrails and retrieval grounding actively constrain outputs to ANNA protocols and client context.

Our current RAG environment (SharePoint + Hi Rasmus + Lumary → S3 → Bedrock Knowledge Base → OpenSearch/Titan) is already within this protected perimeter. We maintain standard AWS logging (CloudWatch/CloudTrail) to ensure auditable access and system behavior, solidifying ANNA's "secure-by-default" clinical AI posture.

## Slide 12: Building the Next-Generation AI Infrastructure
Building the Next-Generation AI Infrastructure
As we finalize the fundraise, we're moving from point integrations and manual oversight into a fully productionized, multi-source data backbone. This foundation includes curated lakehouse layers, an ontology-grounded semantic graph, and in-product human-in-the-loop feedback capture that continuously generates labeled training data.

With these pieces in place, we can stand up governed SageMaker retraining and prompt/model registry pipelines, turning everyday clinical use into a controlled, continuous-learning system that improves quality, scalability, and margin and setup the foundation for when ANNA scales across Blueprint OpCo's.

## Slide 13: Productionizing Multi-Source Ingestion
Productionizing Multi-Source Ingestion

01. **Senior Data Engineer**
    Bring on expertise to transform point ingestion into a real ingestion fabric using modern AWS tools and orchestration.
02. **Integration Layer**
    Deploy Airbyte for SaaS connectors, AWS Glue for ETL, Step Functions for orchestration, and Kinesis for event streaming.
03. **Medallion Lakehouse**
    Implement raw → curated → analytics-ready layers on S3, enabling structured and unstructured data in one governed environment.

This infrastructure creates the foundation for real-time data ingestion and reinforcement, allowing structured and semi-structured data to sit beside unstructured clinical documents in the same governed environment.

## Slide 14: Graph-Enhanced RAG with Amazon Neptune
Graph-Enhanced RAG with Amazon Neptune

### Semantic Layer Integration
Once curated datasets stabilize, ANNA will adopt Blueprint's semantic layer by deploying Amazon Neptune and populating it from the lakehouse via Glue semantic mapping jobs.

Our existing Bedrock + OpenSearch + Titan Embeddings RAG layer becomes significantly more powerful when retrieval is grounded not only in unstructured text but also in graph-level clinical context.

Clinician edits and feedback can be captured as structured signals to improve models over time, creating a continuous improvement cycle.

## Slide 15: Operationalizing Human-in-the-Loop Feedback
Operationalizing Human-in-the-Loop Feedback
The next major evolution transforms ANNA from "clinician-supervised AI" into a true closed-loop learning system, where every product interaction yields structured feedback that continuously improves model performance.

*   **Blueprint Plans**
    Draft-to-final transitions capture what clinicians keep, change, and override in care plans.
*   **Lucent Recommendations**
    Conversation-supervised decision records track question → context → recommendation → correction flows.
*   **Guideline Fidelity**
    Clinician review of rubric-level scores provides structured correction signals for model improvement.

This shift turns routine clinical work into a scalable labeling engine, creating reinforcement data as a byproduct of natural product use rather than requiring separate annotation efforts.

## Slide 16: Building Proprietary Training Datasets
Building Proprietary Training Datasets
We're adding a dedicated HITL instrumentation layer across products to structure and version feedback artifacts as training data. Each interaction becomes a governed, versioned artifact in the lakehouse.

1.  **Blueprint Feedback**
    Draft-to-final plan pairs with structured deltas: section-level edits, additions, removals, and clinician confidence scores.
2.  **Lucent Decision Records**
    Question → retrieved context snapshot → model recommendation → clinician correction → final decision chains.
3.  **Guideline Corrections**
    AI score → clinician override → corrected rubric output, with evidence timestamps and rationale.

These feedback objects are tagged to model/prompt versions and client context, creating a protocol-anchored, clinician-validated corpus that compounds in value with volume and tenure → a highly valuable proprietary dataset that underpins quality care delivery at scale.

## Slide 17: Automated Reinforcement with SageMaker
Automated Reinforcement with SageMaker
Once feedback is systematically captured, we move from manual improvement to automated reinforcement pipelines. We'll keep Bedrock + RAG as the grounding and safety core while adding a SageMaker-hosted ML layer that learns directly from HITL outcomes.

*   **Periodic Retraining**
    SageMaker Pipelines retrain task-specific models on lakehouse feedback assets for continuous improvement.
*   **Specialized Models**
    Preference models for Lucent, generation refiners for Blueprint, and scoring models for Guideline fidelity.
*   **Safety Controls**
    Models redeploy only when improvements clear predefined safety and fidelity thresholds with drift monitoring.

## Slide 18: Controlled Iteration with Model Registries
Controlled Iteration with Model Registries

*   **SageMaker Model Registry**
    Versions training data, parameters, and deployments with full lineage tracking and rollback capabilities.
*   **LangChain + DynamoDB Prompt Registry**
    Manages Bedrock prompt templates with version control and automated evaluation.
*   **Safety Framework**
    Paired with automated evaluators and Guardrails telemetry to evolve reasoning systematically while preserving reproducibility.

These registries enable us to improve model and prompt behavior systematically while maintaining full lineage and the ability to roll back changes when needed.

## Slide 19: The Compounding Flywheel
The Compounding Flywheel

*   **Better Tools**
    AI products save clinicians time and improve care quality
*   **More Usage**
    Clinicians adopt and rely on improved tools daily
*   **More Feedback**
    Every interaction generates structured training data
*   **Continuous Improvement**
    Models learn and performance compounds over time

This reinforcement layer transforms ANNA's AI products from copilots into learning systems. Every week of clinician use improves the next week's outputs. Every new client and specialty expands the domain where models perform safely and precisely. Quality at scale becomes self-reinforcing.

## Slide 20: Scaling from ANNA to Blueprint: Chassis-First
Scaling from ANNA to Blueprint: Chassis-First
Blueprint HoldCo maintains a centralized platform that every OpCo builds on top of: the AI Operational Data Layer, Unified Lakehouse, Unified Data Ontology, AI & Intelligence Stack, and shared governance rails.

ANNA is the first real-world instantiation of that chassis. The strategy is not to rebuild this stack for each new OpCo, but to standardize it once at HoldCo and replicate it everywhere. Every specialty starts at the same level of technical maturity on day one.

## Slide 21: The Forward-Deployed Engineer Model
The Forward-Deployed Engineer Model
Blueprint's Forward-Deployed Engineer (FDE) model is key to scaling operations, embedding specialized technical talent directly into each Operating Company (OpCo).

*   **Connect Ingestion Fabric**
    Integrate local systems directly into our common data ingestion fabric for seamless data flow.
*   **Extend Neptune Semantics**
    Tailor and expand Amazon Neptune's knowledge graph with specialty-specific clinical semantics.
*   **Implement Local RAG & Prompts**
    Customize Retrieval-Augmented Generation (RAG) and prompt templates for localized clinical contexts.
*   **SageMaker Training**
    Deploy domain-specific SageMaker training environments for targeted model refinement as required.

This approach provides a repeatable deployment playbook, ensuring new OpCos leverage ANNA's full maturity from day one, focusing only on the final customizations needed for clinical specificity.

## Slide 22: A Federated Learning Flywheel Across Specialties
A Federated Learning Flywheel Across Specialties
Blueprint is designed so every OpCo's human-in-the-loop signals are logged into the shared ontology with lineage, then aggregated at HoldCo to drive SageMaker retraining and Bedrock prompt evolution.

Improvements discovered locally propagate back through shared registries and CI/CD pipelines so all OpCos level up together. Each OpCo gets smarter from its own data, and all OpCos get smarter from each other's data.

With a centralized chassis and FDE-led localization, launching a new OpCo becomes a matter of mapping data sources, extending semantics, and tuning workflows—not rebuilding platforms. Blueprint becomes a system where every new specialty inherits the full maturity of the network while contributing new clinical intelligence back into the shared stack.

## Slide 23: Blueprint's Target State: Full Spectrum Governance
Blueprint's Target State: Full Spectrum Governance

1.  **Data-Layer PHI Control**
    Leverage Lake Formation for fine-grained, row/column-level permissions. Automated PHI detection and redaction using NLP (e.g., Comprehend Medical) during ingestion ensures safe analytics and model training. Human-in-the-loop feedback becomes regulated clinical data, versioned and access-controlled.
2.  **Model Lifecycle Governance**
    Implement Prompt and SageMaker Model Registries for versioned templates, retrieval configurations, training data, and model artifacts. Automated evaluators and Bedrock Guardrails act as pre-deployment gates for fidelity, safety, and bias thresholds. OpenLineage provides end-to-end traceability.
3.  **Network-Scale Safe Learning**
    This progression establishes a "Blueprint-ready" security path. It scales ANNA's secure HIPAA baseline into a multi-OpCo, closed-loop learning network where continuous improvement is regulatorily defensible and operationally low-risk, compounding learning without safety debt.