---
source_pdf: "https://drive.google.com/file/d/1p29A1ELPsuDXI8Rv0jmUrfGZbGkY4mJd/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Iris Health Deck.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1p29A1ELPsuDXI8Rv0jmUrfGZbGkY4mJd/view)

## Slide 1: Iris Health - Mechanistic Interpretability

@ Iris Health
Mechanistic interpretability for medical AI to understand,
edit, and steer models to think like clinicians.

## Slide 2: Clinician-led with deep, academic, technical roots

### Mudith Jayasekara
Rhodes Scholar. MD. Doctor with 4 years of real-world clinical experience in Aus, US and UK. PhD candidate in Engineering (Oxford) focusing on multimodal ML for clinical risk prediction. Applied digital health MSc (Oxford).
**Previously:** Operations at Eucalyptus (global telehealth provider). Treasurer of Rhodes Incubator. Australian education charity co-founder generating $70,000+ USD of value. Elite pole vaulter for Australia.
mudithjayasekara@me.com

### Charles O'Neill
Likely 1 of around 50 people in the world who has background in both mech interp and medical. John Monash Scholar. PhD candidate in computer science (Oxford). Mechanistic interpretability researcher (Stanford, Johns Hopkins, MATS). 8 publications focusing on mechanistic interpretability and LLM steering (presented at ICLR, NeuRIPS).
**Previously:** ML engineer (NASA, Macuject). Quant trading at IMC. Developer of Mercury, one of the first automated trading bots for market-making on Betfair. Co-founder of Rake and covidvolunteering(.org).

### Max Kirkby
Rhodes Scholar. PhD candidate in computational neuroscience (Oxford) studying reasoning in natural intelligence. Extensive life science research experience (150+ citations, 10 papers).
**Previously:** Co-founder of Rake (news AI startup), sold the RAG platform to enterprise in Aus/US. Co-founder of covidvolunteering(.org) which optimized volunteer matching during pandemic (1000 volunteers to 20 organizations).

## Slide 3: Explainable AI eras

A timeline illustrating the evolution of AI interpretability.

*   **1960s:** Rule-based expert systems
*   **1990s:** Statistical & ML approaches
*   **2010:** Deep learning black box era
*   **2015:** 'Explainable AI' attempts
*   **Now:** ?

## Slide 4: Current State of Healthcare AI

Currently, healthcare foundation models are black boxes.
The biggest blockers to healthcare AI adoption are a lack of *transparency* and *safety monitoring*.
Medical AI companies *need* a solution whether they are using open source, closed source, or in-house models.

## Slide 5: Mechanistic interpretability could transform healthcare AI

1.  **Traceability of every AI output**
    *   Clients, clinicians and regulators can pinpoint exactly which input signals led to a summary, diagnosis or decision

2.  **Rational clinical reasoning through model steering**
    *   Uncover the reasoning of AI models to check alignment with clinical reasoning
    *   Precisely steer models to get models 'thinking' like clinicians and eliminate critical errors

3.  **Seamless regulation and compliance**
    *   All failure modes are discovered and vulnerabilities are eliminated
    *   Clear attribution of each model outcome to meet strict safety standards, reducing liability and enabling global standardization of medical AI.

## Slide 6: The gap in the market - Transparency

A Venn diagram showing a single circle for "GOODFIRE" indicating its focus on "Transparency" using "SAEs (sparse autoencoders) for novel mech interp".

*   **GOODFIRE**: Transparency, Using SAEs (sparse autoencoders) for novel mech interp

## Slide 7: The gap in the market - Safety

A Venn diagram showing two overlapping circles:
1.  Faded circle for "GOODFIRE" (Transparency).
2.  Prominent circle for "Haize Labs" indicating its focus on "Safety" to "Evaluate all system failure modes".

*   **GOODFIRE**: (Faded) Transparency
*   **Haize Labs**: Safety, Evaluate all system failure modes

## Slide 8: The gap in the market - Clinical reasoning

A Venn diagram showing three overlapping circles:
1.  Faded circle for "GOODFIRE" (Transparency).
2.  Faded circle for "Haize Labs" (Safety).
3.  Prominent circle for "Hippocratic AI" indicating its focus on "Clinical reasoning" and "Trying to make models think like doctors".

*   **GOODFIRE**: (Faded) Transparency
*   **Haize Labs**: (Faded) Safety
*   **Hippocratic AI**: Clinical reasoning, Trying to make models think like doctors

## Slide 9: The gap in the market - Iris Health Solution

A Venn diagram showing three overlapping circles:
1.  Circle for "Transparency".
2.  Circle for "Safety".
3.  Circle for "Clinical reasoning".
The central overlapping area is labeled "Iris".

*   **Unifying the 3 =** Interpretability to understand, edit, and steer medical AI to make models think like clinicians.

## Slide 10: The New Era of Interpretability

The current options for explainability and safety monitoring are manual, shallow, unreliable post hoc attempts.
Mechanistic interpretability (using SAEs) is a new era for transparency and steering models. It is the *first principles approach* for lifting the black box between input and output and 'internally' updating the model.

## Slide 11: How we transform medical AI companies

### 1: Turn the black box between input and output into interpretable features/ processes using SAEs to take their product across the chasm into true clinical applicability
*   **What:** Provide feature attribution and CoT (chain of thought) causal graphs for LLMs and vision language models.
*   **Value:** Enables companies incorporating models to expose the 'thinking' between input and output internally for their dev/product/clinical team or to their end user.

### 2: Provide an automated trust engine to stress test, continuously monitor outputs, and dynamically update models to let companies ship faster with 10x smaller risk resourcing
*   **What:** Using the interpretable features and causal graphs, automate the process of safety monitoring. Alerts are raised when the reasoning is not clinically relevant and models are precisely updated through steering.
*   **Value:** Automate the risk team to have 10x fewer humans in the loop and ship faster.

## Slide 12: Building Safe, Verifiable Clinical AI Agents

We use our trust engines to verify positive reward reasoning traces and then own the highest resolution RL dataset for clinical med.
Training on these traces is the only true way to build safe, verifiable, clinical AI agents and become the indispensable operating system for automated clinical labour.

## Slide 13: We have built novel tech

1.  **Sparse Autoencoders (SAEs) + Chain-of-Thought**
    *   **Linearization:** Our custom approach merges deep neural embeddings with neuroscience-inspired sparse coding, making each latent feature fully traceable.
    *   This is model architecture agnostic.
2.  **Causal Graphs & Feature-Attribution**
    *   Every step of the AI's reasoning — be it a clinical note summarization or clinical decision support — is mapped onto a transparent, discrete, visual chain-of-thought.
3.  **Verifiable, zero-hallucination RAG**
    *   Custom multi-hop verifiable retrieval system enabling trustworthy information synthesis
    *   Built-in fact verification

Before this, we built RAG at *web scale* for news with @ Rake and generalized the pipeline for enterprise customers.
18 months of research and technical development is the foundation of our tech for Iris Health

## Slide 14: We are raising $2M of pre-seed funding

A timeline illustrating the evolution of AI interpretability, highlighting Iris Health's position.

*   **1960s:** Rule-based expert systems
*   **1990s:** Statistical & ML approaches
*   **2010:** Deep learning black box era
*   **2015:** 'Explainable AI' attempts
*   **Now:** Mechanistic interpretability for healthcare with Iris Health