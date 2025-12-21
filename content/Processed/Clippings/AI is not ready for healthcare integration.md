---
title: "AI is not ready for healthcare integration"
source: "https://fbradleymeyers.substack.com/p/ai-is-not-ready-for-healthcare-integration"
published: 2025-12-15
created: 2025-12-16
description: "Why incentives are outrunning operational reality"
tags:
  - "clippings"
processed: 2025-12-16
themes:
  - healthcare-ai
  - determinism
  - systems-of-record
---
### Why incentives are outrunning operational reality

I was not planning to write about AI yet. I wanted to let the noise settle and see what actually changed in production systems. But the volume of claims has crossed a line. When every integration problem gets framed as an AI problem, clarity disappears. This is about healthcare data integration, not policy and not clinical decision making. It is also not a critique of AI inside controlled clinical applications. It is about where AI sits in distributed integration workflows. That is when I feel an obligation to say something.

I run an owner operated company. When an integration fails, I own the fallout. There is no deck to hide behind. There is no next raise to reset the story. Systems either work or they do not. That reality shapes how I think about AI in healthcare integration.

Lately, many vendors talk about AI as the solution to integration complexity. Mapping pain goes away. Interfaces become self healing. Data quality fixes itself. Operations scale without staff. The message is consistent. AI will solve what teams struggled with for years.

That message fits sales cycles and deck driven narratives. It does not fit integration work.

Healthcare integration depends on determinism. The same input must produce the same output every time. Messages must map the same way today and next month. Identity rules must hold under audit. Errors must surface clearly. Retries must behave predictably. Silent failures are unacceptable.

AI systems do not operate that way today. They produce probabilistic output. They change behavior over time. They fail in ways that look confident. That mismatch matters. In integration, one wrong decision scales across every downstream system.

The hardest parts of integration remain unchanged. Source data arrives incomplete. Codes drift. Patient identity conflicts. Edge cases dominate volume. Downstream systems enforce strict rules. Public health reporting adds deadlines, penalties, and audit risk. None of that disappears with a model in the loop.

AI has a role today. It helps propose mappings. It helps summarize messages. It helps flag anomalies. It helps operators triage work faster. In each case, a human reviews the result. Deterministic pipelines stay in control. That is the safe pattern.

What worries me is the suggestion that AI belongs in the primary execution path. That it should decide mappings. That it should write records. That it should move clinical data without guardrails. That move shifts risk onto operators and the people they serve.

Cost rarely gets discussed honestly. Model usage is only the start. You add evaluation. Monitoring. Incident response. Governance. Legal review. Audit support. Those costs persist. They grow with volume. They do not trend toward zero.

Ownership matters here. Teams who run owner operated companies speak differently because failure lands differently. When you own the system long term, you avoid promises you cannot support. You avoid automation you cannot explain. You avoid dependencies you cannot unwind.

This is not an anti AI position. AI will matter in healthcare integration. It will become cheaper. It will become more predictable. Standards will mature. Governance will catch up. That takes time.

Right now, AI belongs as an assistant, not an authority. It belongs behind deterministic systems, not in place of them. Pretending otherwise serves narratives tied to capital and growth. It does not serve integration teams, public health systems, or patients.

I am writing this now because the noise is getting louder. Someone needs to separate what sounds exciting from what works in production. I would rather be early and honest than late and apologetic.