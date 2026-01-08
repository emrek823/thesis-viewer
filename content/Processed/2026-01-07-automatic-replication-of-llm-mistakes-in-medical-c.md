---
url: https://arxiv.org/html/2512.20983v1
title: "Automatic Replication of LLM Mistakes in Medical Conversations"
clipped: 2026-01-07 16:29
source: browser-history
---

# Automatic Replication of LLM Mistakes in Medical Conversations

> Source: [https://arxiv.org/html/2512.20983v1](https://arxiv.org/html/2512.20983v1)

# Automatic Replication of LLM Mistakes in Medical Conversations

Oleksii Proniakin
  
  
Diego Fajardo∗
  
  
Ruslan Nazarenko∗
  
  
Razvan Marinescu
  
Correspondence to {diego,ross,razvan}@thelumos.ai
  
Lumos AI

###### Abstract

Large language models (LLMs) are increasingly evaluated in clinical settings using multi-dimensional rubrics which quantify reasoning quality, safety, and patient-centeredness. Yet, replicating specific mistakes in other LLM models is not straightforward and often requires manual effort. We introduce MedMistake, an automatic pipeline that extracts mistakes LLMs make in patient-doctor conversations and converts them into a benchmark of single-shot QA pairs. Our pipeline (1) creates complex, conversational data between an LLM patient and LLM doctor, (2) runs an evaluation with a committee of 2 LLM judges across a variety of dimensions and (3) creates simplified single-shot QA scenarios from those mistakes. We release MedMistake-All, a dataset of 3,390 single-shot QA pairs where GPT-5 and Gemini 2.5 Pro are currently failing to answer correctly, as judged by two LLM judges. We used medical experts to validate a subset of 211/3390 questions (MedMistake-Bench), which we used to run a final evaluation of 12 frontier LLMs: Claude Opus 4.5, Claude Sonnet 4.5, DeepSeek-Chat, Gemini 2.5 Pro, Gemini 3 Pro, GPT-4o, GPT-5, GPT-5.1, GPT-5.2, Grok 4, Grok 4.1, Mistral Large. We found that GPT models, Claude and Grok obtained the best performance on MedMistake-Bench. We release both the doctor-validated benchmark MedMistake-Bench, as well as the full MedMistake-All dataset at https://huggingface.co/datasets/TheLumos/MedicalMistakeBenchmark.

![Refer to caption](x1.png)

Figure 1: Overview of the MedMistake-Bench pipeline. We first synthesize conversations using MedPI[fajardo2025medpi] (blue), then extract mistakes from those conversations which we distill into single-shot QA pairs (green), and finally we run a medical expert validation (yellow).

## 1 Introduction

Evaluating LLM models in conversational settings [Liang2022HELM, MedHELM2025] typically focuses on holistic outcomes — assigning a single score at the end of a multi-turn dialogue. This mirrors how we might evaluate a physician by the overall quality of care, not by every utterance made during an encounter. Such conversation-level assessments, as used in frameworks like HealthBench[HealthBench2025arxiv], can provide a fair and clinically aligned measure of medical competence. However, this outcome-based evaluation creates a critical gap when moving from assessment to improvement. Post-training refinement and safety tuning require pinpointing where in a conversation reasoning broke down — which turn, decision, or assumption led to a low overall score. Without per-turn granularity, evaluators and model developers face a “black box” problem: we know that an interaction failed, but not how or why.

A variety of recent works [fraile2025expert, haider2025synthetic, ACGME2025MilestonesGuidebook, ren2025healthcare, xu2024data] evaluated LLMs on various tasks involving multi-turn clinician-patient conversations. Among these, [johri2025evaluation, ren2025healthcare, haider2025synthetic] used LLM patients, all except [fraile2025expert] used LLM doctors, and [johri2025evaluation, ren2025healthcare] used LLM judges. However, most of these works stopped at evaluating conversations, without providing a way to distill those mistakes into single-shot QA pairs towards the creation of a mistake benchmark. In addition, the number of dimensions evaluated in these studies was limited: [fraile2025expert] evaluated dialogue summarization quality on 4 dimensions (coherence, consistency, fluency and relevance), [haider2025synthetic] evaluated synthetic dialogue realism on 7 dimensions (medical accuracy, realism, persona consistency, fidelity to prompt, empathy, relevancy and usability), [johri2025evaluation] evaluated conversational diagnostic accuracy on 3 dimensions (accuracy, history-taking completeness, conversation adequacy), [ren2025healthcare] evaluated patient consultation quality and broke this down into inquiry quality, response quality and safety. However, for significantly improving LLMs and related foundation models, one needs not only to evaluate conversations and identify mistakes, but further distill these mistakes into single-shot QA pairs, which could be used as a benchmark or for fine-tuning the next-generation models.

![Refer to caption](x2.png)

Figure 2: Example snippet from a generated medical conversation between an LLM patient and LLM doctor, where the LLM doctor makes a mistake in a drug prescription. The mistake is identified by a medical committee of 2 LLM judges, and a single-shot clinical scenario is generated that is used to score LLMs.

We propose MedMistake, an agentic LLM pipeline that automatically creates single-shot QA pairs on medical knowledge from LLM mistakes detected during complex medical conversations. To identify mistakes, we first run a series of LLM conversations between an LLM patient and LLM doctor, then create a medical committee of 2 LLM judges to evaluate the conversation on 40 dimensions to point out specific mistakes and their location in the conversation. From the committee’s feedback, we extract structured medical reasoning mistakes and create single-shot QA pairs on medical knowledge that can be used to test the model’s understanding of the medical domain. Our contributions are as follows:

1. 1.

   We synthesize 3390 mistakes from LLM-based patient-doctor conversations spanning a total of 40 dimensions
2. 2.

   We used medical experts to manually validate a subset of 299/3390 mistakes, of which 211/299 unique mistakes were confirmed to be valid (MedMistake-Bench)
3. 3.

   We evaluated 12 frontier LLMs on MedMistake-Bench – Claude Opus 4.5, Claude Sonnet 4.5, DeepSeek-Chat, Gemini 2.5 Pro, Gemini 3 Pro, GPT-4o, GPT-5, GPT-5.1, GPT-5.2, Grok 4, Grok 4.1, Mistral Large – finding that GPT models, Claude and Grok obtain the best performance.
4. 4.

   We release MedMistake-All – a dataset of 3390 single-shot QA pairs where GPT-5 and Gemini 2.5 Pro are currently failing to answer correctly, as judged by two LLM judges. We also release MedMistake-Bench, a dataset of 211 single-shot QA pairs that were validated by medical experts.

### 1.1 Related work:

Single-turn medical QA benchmarks. Most LLM benchmarks on medical tasks focus on single-turn QA. A large body of work has applied this paradigm to clinical knowledge and exam-style questions, for example MedQA [Jin2020MedQA], MedMCQA [Pal2022MedMCQA], PubMedQA [Jin2019PubMedQA] and MultiMedQA [Singhal2023ClinicalKnowledge]. These benchmarks have been critical in showing that LLMs encode substantial clinical knowledge and can approach or exceed physician-level performance on written exam questions [Singhal2025MedPaLM].

Medical evaluation frameworks beyond single-turn QA. More recent work broadens the evaluation paradigm from the pure knowledge single QA testing to multi-task and safety-oriented evaluation. MedHELM evaluates performance across question answering, summarization, information extraction, and safety-oriented tasks under a unified reporting framework [MedHELM2025, MedHELMWebsite2025]. HealthBench focuses on realistic and safety-critical healthcare scenarios, combining knowledge, reasoning, and safety checks across diverse tasks and settings [HealthBench2025arxiv, HealthBench2025Blog]. MedSafetyBench [Han2024MedSafetyBench] zooms in further on medical safety failure modes, systematically probing how models handle contradictions, unsafe advice, and other risk patterns.

Automatic mistake synthesis: Several recent works [singh2025exposing, tyen2024llms, wang2024generating, liu2025towards] built pipelines that automatically synthesize mistakes that language models typically make. [singh2025exposing] introduced *MWP-MISTAKE*, a dataset of math word problems with both correct and incorrect reasoning steps generated by rule-based algorithms and small language models. [tyen2024llms] released *BIG-Bench Mistake*, a dataset of LLM-generated logical mistakes represented as chain-of-thought traces from PaLM-2 with annotated error locations. [wang2024generating] introduced *LLM-Attack*, which generates adversarial examples for LLMs using a two-stage approach involving (1) a word ranking step and (2) a synonym replacement step. [liu2025towards] introduced *TableEG*, a framework that fine-tunes LLMs to insert authentic errors into tabular data.

## 2 Methods

Fig. [1](https://arxiv.org/html/2512.20983v1#S0.F1 "Figure 1 ‣ Automatic Replication of LLM Mistakes in Medical Conversations") shows an overview of the three stages of the MedMistake pipeline: (1) generating conversations between an LLM patient and LLM doctor using MedPI[fajardo2025medpi] and evaluating those through a committee of 2 LLM-judges (Fig. [1](https://arxiv.org/html/2512.20983v1#S0.F1 "Figure 1 ‣ Automatic Replication of LLM Mistakes in Medical Conversations") top), (2) creating single-shot QA pairs from the mistakes identified by the committee (Fig. [1](https://arxiv.org/html/2512.20983v1#S0.F1 "Figure 1 ‣ Automatic Replication of LLM Mistakes in Medical Conversations") middle) and (3) validating the mistakes using medical experts (Fig. [1](https://arxiv.org/html/2512.20983v1#S0.F1 "Figure 1 ‣ Automatic Replication of LLM Mistakes in Medical Conversations") bottom). In addition, Fig. [2](https://arxiv.org/html/2512.20983v1#S1.F2 "Figure 2 ‣ 1 Introduction ‣ Automatic Replication of LLM Mistakes in Medical Conversations") shows an example of a generated medical conversation between an LLM patient and LLM doctor, where the LLM doctor makes a mistake in a drug prescription. The mistake is identified by a medical committee of 2 LLM judges, and a single-shot clinical scenario is generated that is used to score LLMs.

![Refer to caption](x3.png)

Figure 3: Distribution of mistakes that we considered, showing the proportion of mistakes reproduced by either Gemini 2.5 Pro or GPT-5.

### 2.1 MedMistake-Bench Pipeline

The MedMistake-Bench pipeline consists of multiple steps:

1. 1.

   Conversation Generation using MedPI: We use a variety of LLMs (Gemini, Claude, o3, GPT OSS, Grok-4 and GPT-5) to generate conversations between an LLM patient and LLM doctor.
2. 2.

   Committee Evaluation using MedPI: We create a medical committee of 2 LLM judges (Gemini 2.5 Flash) to evaluate the conversation on 105 dimensions and point out specific mistakes and their location in the conversation.
3. 3.

   Mistake Extraction: Using Gemini 2.5 Flash, evaluator notes and MedPI annotations are parsed into structured mistake records.
4. 4.

   Mistake Deduplication & Consolidation: We run semantic clustering to merge duplicate mistakes.
5. 5.

   Generation of Mistake Scenarios: For each unique mistake, Gemini 2.5 Flash generates a short, single-shot clinical case that reliably elicits the same reasoning challenge.
6. 6.

   Initial Replication of Mistake scenarios: Each scenario is tested simultaneously on both Gemini 2.5 Pro and GPT-5. A scenario is considered *replicated* if *either* model replicates the mistake.
7. 7.

   Reflection (optional): If *both* Gemini 2.5 Pro and GPT-5 correctly handle a scenario without replicating the mistake, a reflection prompt is used to generate a more challenging variant of the scenario.
8. 8.

   Human Expert Validation: Medical experts were asked to validate whether (1) each extracted mistake is valid and (2) each generated scenario is valid.
9. 9.

   Evaluation of validated mistakes and scenarios on frontier LLMs: Replicated scenarios are then evaluated across 12 frontier models (Claude Opus 4.5, Claude Sonnet 4.5, DeepSeek-Chat, Gemini 2.5 Pro, Gemini 3 Pro, GPT-4o, GPT-5, GPT-5.1, GPT-5.2, Grok 4, Grok 4.1, Mistral Large) using a binary (correct/incorrect) LLM-judge.

Conversation generation and evaluation with MedPI: We use MedPI[fajardo2025medpi] as the foundational evaluation framework, which simulates conversations between an LLM patient and LLM doctor, and scores the doctors along 105 dimensions grouped into 29 categories: *adaptive dialogue*, *alternative treatment options*, *clinical reasoning*, *communication*, *contextual awareness*, *differential diagnosis*, *ethical practice*, *final diagnosis*, *first-line treatment recommendation*, *interaction efficiency*, *lifestyle influences*, *lifestyle recommendation*, *lifestyle tracking*, *medical knowledge*, *medication management*, *medication safety*, *medication selection*, *medication-related communication*, *model reliability*, *non-pharmacologic advice*, *operational competence*, *patient care*, *real-world impact*, *review of symptoms*, *screening eligibility*, *symptom interpretation*, *test interpretation*, *test selection*, and *treatment contraindications*. Each conversation includes evaluator notes that specify the nature and severity of observed mistakes. An example conversation is shown in Fig. [2](https://arxiv.org/html/2512.20983v1#S1.F2 "Figure 2 ‣ 1 Introduction ‣ Automatic Replication of LLM Mistakes in Medical Conversations").

Mistake Extraction: We analyze low-scoring dimensions (score ≤\leq 3) from multi-turn AI doctor-patient conversations using Gemini 2.5 Flash. The LLM extracts unique clinically significant mistakes, providing for each: (1) a descriptive title, (2) an objective description in past tense specifying the action taken/not taken, clinical context, and consequence, (3) category classification, (4) probable reason the mistake occurred, (5) taxonomy tags, and (6) risk level (low/medium/high/critical). The extraction prompt emphasizes concrete clinical details (specific guidelines, assessment tools, exact questions/actions that should have been taken) and deduplication of similar issues. The prompt for mistake extraction is shown in Appendix section [B](https://arxiv.org/html/2512.20983v1#A2 "Appendix B Prompts Used ‣ Automatic Replication of LLM Mistakes in Medical Conversations").

Mistake Deduplication & Consolidation: During mistake extraction, Gemini 2.5 Flash is explicitly instructed to group similar issues together within each conversation (prompt instruction: “Group similar issues (deduplicate) together into single mistakes when appropriate”). This within-conversation deduplication happens automatically via the LLM prompt at extraction time. (see Appendix section [B](https://arxiv.org/html/2512.20983v1#A2 "Appendix B Prompts Used ‣ Automatic Replication of LLM Mistakes in Medical Conversations"))

Generation of Mistake Scenarios: Each extracted mistake is converted into a single-shot question describing a clinical scenario designed to trigger the same error. Using the original conversation and mistake description, Gemini 2.5 Flash generates a realistic patient vignette that: (1) includes all specific details mentioned in the mistake description, (2) uses only information explicitly v

[... truncated ...]