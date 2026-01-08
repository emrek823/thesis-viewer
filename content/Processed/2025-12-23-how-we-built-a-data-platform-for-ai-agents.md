---
url: https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/
title: "How We Built a Data Platform for AI Agents"
clipped: 2025-12-23 13:01
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# How We Built a Data Platform for AI Agents

> Source: [https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/](https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/)

Oct 13, 2025

# How We Built a Data Platform for AI Agents

[Daniel Tian](/author/daniel/)

![How We Built a Data Platform for AI Agents](/content/images/size/w30/2025/10/4d90656206cb7fa0a4e6d36784a6b853.jpg)

When Zingage first launched, our data infrastructure looked like many early-stage systems: cron-driven ETLs, periodic syncs, and a warehouse where truth converged slowly. It worked — until we stopped *reporting* on care and started *orchestrating* it. Once we began making calls, scheduling visits, and updating records, the abstraction broke. Our software entered the physical world, and the physical world doesn’t wait for nightly jobs.

We saw the failures immediately: Voice AI calling caregivers about visits that were already closed. Operators overwriting each other’s edits. Automations racing humans across time zones on inconsistent state. None of these were application bugs—they were contradictions born from stale or conflicting data. We had treated consistency as a global property. In practice, it’s **actor-specific**. We rebuilt our data layer not just to scale operations, but to give AI agents a consistent and reliable view of the world they operate in.

---

## **From Batch to Proxy**

We realized a shift was needed: stop asking “how fresh is our data?” and start asking **“how coherent must it be for this actor, right now?”** The answer changes by use case. The Voice interface needs near-instant coherence. The scheduling dashboard needs read-your-own-writes. The payroll export can live with delay.

The only architecture that could express those guarantees cleanly was a **proxy layer**. Every read and write now flows through Zephyr, our data plane. It doesn’t blindly fetch data—it reasons about *which* data to serve, how stale it can be, and what level of consistency each actor requires. Each request includes *Consumer Directives*: latency budgets, staleness tolerance, and consistency guarantees.x

```
type ConsumerDirectives = {
  maxStalenessMs: number;
  requireReadYourOwnWrites: boolean; // RYOW guarantee
};
```

When the proxy sees a read, it asks: “Given this actor’s contract, what’s the most coherent view I can safely return?” That framing—**no single master, only policy-governed caches behind a proxy**—reshaped everything.

---

## **Defining Correctness in a World Without a Master**

Once we abandoned a central datastore, we faced a deeper question: *when there’s no monolithic database, what does correctness even mean?* Traditional databases give you consistency for free through ACID transactions. Zephyr doesn’t have that luxury. EMRs, HR systems, and operator dashboards all modify overlapping slices of reality. We had to invent our own invariants—rules that make a decentralized system behave predictably.

The first rule: **explicit ownership.** Every field in our merged graph is annotated with a single physical writer; everything else is derived. That map underpins merges, conflict detection, and write routing.

```
const OWNERSHIP: Record<string, "EMR" | "HRIS" | "ZINGAGE"> = {
  "visit.scheduledStart": "EMR",
  "visit.scheduledEnd":   "EMR",
  "visit.timeEntries":    "EMR",
  "practitioner.language":"HRIS",
  "assignment.status":    "ZINGAGE",
};
```

At read time, Zephyr uses this ownership map to deterministically merge records. When external IDs align, identity is clear. When they don’t, we fall back to a learned policy that defines what counts as “the same visit”—matching patient, caregiver, and service day within an adaptive epsilon (ε). The epsilon adjusts per integration, based on observed rounding and clock-in drift.

```
/* Fallback identity predicate for read-time reconciliation.
   ε (epsilon) is per-integration tolerance to account for drift. */
SELECT
  external_id_a IS NULL AND external_id_b IS NULL
  AND caregiver_a = caregiver_b
  AND patient_a = patient_b
  AND date_trunc('day', start_a AT TIME ZONE biz_tz)
      = date_trunc('day', start_b AT TIME ZONE biz_tz)
  AND tstzrange(start_a, end_a)
      && (tstzrange(start_b, end_b) + make_interval(mins => :epsilon_minutes))
AS is_same_visit;
```

Writes enforce the same invariants in reverse. Every update carries an **ETag** (Entity Tag) so the proxy can detect concurrent edits and preserve read-your-own-writes. If two writers race, we return a deterministic 409 Conflict with a structured diff—never a silent overwrite.

```
async function updateVisit(id: VisitId, patch: Partial<Visit>, ifMatch: string) {
  const current = await loadNormalized(id);
  if (current.etag !== ifMatch) {
    return {
      status: 409,
      body: {
        code: "ETAG_MISMATCH",
        current,
        diff: computeDiff(current, patch),
        hint: "Rebase and retry with new ETag",
      },
    };
  }

  for (const field of Object.keys(patch)) {
    if (OWNERSHIP[`visit.${field}`] !== "ZINGAGE") {
      throw new Error(`Cannot edit non-owned field: ${field}`);
    }
  }

  await sagaWriteToOwners(id, patch);
  const next = await loadNormalized(id);
  return { status: 200, body: next, headers: { ETag: next.etag } };
}
```

Together, explicit ownership, adaptive identity, and conditional writes form Zephyr’s version of a transaction. And because Zephyr doesn’t maintain a canonical datastore, the system effectively operates as **multi-master**. AxisCare writes clock-ins, HRIS manages caregiver metadata, Zingage orchestrates assignments. Zephyr reconciles them all at read time. In practice, it behaves like a business-logic CRDT *-* conflict-free not by algebra, but by policy.

---

## **The Zephyr Data Plane**

With correctness defined, we built the plane to enforce it in real time. Zephyr has four layers: **Source Translators** (one per EMR), the **Proxy Layer** (decision engine), a lightweight **FHIR-inspired model** (shared vocabulary), and **Per-Actor Caches** (snapshots governed by freshness policies).

The diagram below shows how Zephyr reads from an EMR, normalizes data into a unified schema, and streams it into the cache and event topics for consumption.

![](https://engineering.zingage.com/content/images/2025/10/Screenshot-2025-10-13-at-12.16.29---AM.png)

Each request is a policy invocation. Actors—voice, UI, or batch—define how fresh data must be, how much latency they can tolerate, and what consistency semantics they require.

```
type ConsumerDirectives = {
  maxStalenessMs: number;
  requireReadYourOwnWrites: boolean; // RYOW guarantee
  latencyBudgetMs: number;
};
```

When a read lands:

```
async function getVisit(id: VisitId, policy: ConsumerDirectives) {
  const cached = await cache.get(id);
  if (cached && !isStale(cached, policy)) return cached;
  if (cached) revalidateInBackground(id);
  return await fetchFromSource(id);
}
```

This yields **bounded staleness** per actor, not a single global metric. Voice AI trades detail for speed. Dashboards require stronger coherence. Batch jobs prioritize throughput. Each interaction is negotiated.

Writes follow the same pattern—conditional, versioned, and deterministic.

![](https://engineering.zingage.com/content/images/2025/10/Screenshot-2025-10-13-at-12.16.38---AM.png)

When failures happen, we aim for **predictable degradation**, not brittle coupling. If an EMR is unreachable, the proxy fails fast on those fields but continues serving Zephyr-owned state flagged as “pending-sync.” Schema drift is quarantined, not guessed. We track per-actor coherence: p95 latency, stale ratio, invalidation lag. The key question isn’t “is the system up?” but “is each actor seeing a coherent world within the bounds it was promised?”

---

## **What’s Next with AI: Self-Healing Data at the Edges**

With Zephyr’s consistency layer in place — ownership, merging, conflict logic — there’s still plenty left to build. But LLMs today has opened a new set of possibilities. We’re beginning to explore how AI might help Zephyr repair itself: flagging drift, suggesting schema patches, or even filling gaps when systems fail. Below are a few directions that feel especially promising.

### **Schema Drift**

EMRs often change schema: drop, rename, or mutate fields. Those changes propagate silently unless caught. We’re building monitors that detect drift in incoming payloads, propose patches (e.g. remapping fields or migration logic), or issue alerts. We're particularly excited about the research in [*LLM-Powered Proactive Data Systems* (Zeighami et al., 2025)](https://arxiv.org/abs/2502.13016?ref=engineering.zingage.com), which argues systems should be *proactive* — rewriting user inputs, inputs’ structure, and query logic.

### **Data Anomaly & Correction**

Data is messy. Records get duplicated, conflict, or violate implicit rules. We plan validator models that flag suspect cases and suggest corrections. Examples: negative durations, timestamp mismatches, out-of-range values. We might output something like:

```
{
  "verdict": "anomaly",
  "field": "visit.duration",
  "reason": "duration = 0; clock-out missing or wrong",
  "suggestedFix": { "duration": "derive from timeEntries" },
  "confidence": 0.87
}
```

Depending on policy, we may block writes, stage reviews, or auto-correct high-confidence cases.

### **Web Agents for UI Remediation**

Sometimes APIs break, scrapers drift, or data hides behind UIs. In those cases, a headless browser agent controlled by an AI may log into the EMR portal, navigate UI flows, extract or patch data, and feed it through Zephyr’s same invariants. We treat this as fallback repair, not the primary path.

```
const uiResult = await runAgent(directive);
if (!uiResult.visitTime) {
  // Use LLM to infer missing field from existing context
  const fix = await callLLM({
    prompt: `Given these time entries: ${record.timeEntries}, infer missing visitTime.`,
  });
  uiResult.visitTime = fix.visitTime;
}
// Feed the result back through Zephyr’s merge + ownership logic
normalized.visitTime = uiResult.visitTime;
```

---

If any of this sounds interesting? We’re currently hiring for Senior Engineer to join us and lead our Data Platform. Reach out to Daniel at [daniel@zingage.com](mailto:daniel@zingage.com) or [visit our job board here](https://app.dover.com/apply/Zingage/94e780a5-ef3e-47d9-aee6-010ff5f18d5b/?rs=76643084&ref=engineering.zingage.com).

---

Share
[Share](https://twitter.com/share?text=How%20We%20Built%20a%20Data%20Platform%20for%20AI%20Agents&url=https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/ "Share on X")
[Share](https://bsky.app/intent/compose?text=How%20We%20Built%20a%20Data%20Platform%20for%20AI%20Agents%20https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/ "Share on Bluesky")
[Share](https://www.facebook.com/sharer.php?u=https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/ "Share on Facebook")
[Share](https://www.linkedin.com/shareArticle?mini=true&url=https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/&title=How%20We%20Built%20a%20Data%20Platform%20for%20AI%20Agents&summary=How%20We%20Built%20a%20Data%20Platform%20for%20AI%20Agents "Share on Linkedin")
[Email](mailto:?subject=How%20We%20Built%20a%20Data%20Platform%20for%20AI%20Agents&body=https://engineering.zingage.com/how-we-built-a-data-platform-for-ai-agents/ How%20We%20Built%20a%20Data%20Platform%20for%20AI%20Agents "Share by email")

 Copy