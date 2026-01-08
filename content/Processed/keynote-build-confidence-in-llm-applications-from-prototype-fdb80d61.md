---
source_pdf: "https://drive.google.com/file/d/1FAmvlUAswnqqKrekK1ULHVrwRGSpDixFqSvZLXhXn54/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "[Keynote] Build Confidence in LLM Applications, from Prototype to Production Tues Dec 5th @ Snowflake Build Conference"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1FAmvlUAswnqqKrekK1ULHVrwRGSpDixFqSvZLXhXn54/view)

## Slide 1: [Keynote] Build Confidence in LLM Applications, from Prototype to Production

Tues Dec 5th @ Snowflake Build Conference
Link: https://www.snowflake.com/build/americas/agenda/

As organizations increasingly adopt large language models (LLMs) for various applications, building confidence in their outputs is crucial. Developers require unprecedented levels of control, transparency, and flexibility to ensure this trust.

In this session, we'll talk through how you can achieve this control, at any stage of your app development. You'll learn advanced techniques to collect user feedback, recognize biases, and enhance LLM apps for rapid iteration and production-readiness. We'll break down the overall architecture of a production-ready LLM app, showing step-by-step how to reinforce confidence in your LLM application.

You'll learn:
* Architecture of an production-ready LLM app, and where orchestration fits in.
* How to use Streamlit and LangSmith to streamline the development, feedback, and evaluation process for LLM applications.
* Understand best practices for collecting feedback, evaluating results, and improving outputs for LLM applications.
* Real-world examples and best practices to apply to your own workflow.

## Slide 2: Four methods for making applications "context-aware"

*   **Instruction prompting**
*   **Few-shot Examples**
*   **RAG**
    *   Retrieval
    *   Augmented
    *   Generation
*   **Fine-tuning**

© 2023 Snowflake Inc. All Rights Reserved

## Slide 3: LangChain - Control over LLM applications

| | | Decide Output of Step | Decide Which Steps to Take | Determine What Sequences of Steps are Available |
|---|---|-----------------------|-------------------------|-------------------------------------------------|
| 1 | Code | 👩‍💻 | 👩‍💻 | 👩‍💻 |
| 2 | LLM Call to single model | 💡 | 👩‍💻 | one step only |
| 3 | Chain together multiple LLM calls | 💡 | 👩‍💻 | multiple steps |
| 4 | Router | 💡 | 👩‍💻 | no cycles |
| 5 | State Machine | 💡 | 👩‍💻 | cycles |
| 6 | Agent | 💡 | 👩‍💻 | 🧑‍💻 autonomous |

**Side notes:**
*   code
*   LLMs
*   LangChain (logo)