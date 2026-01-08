# Temporal RAG: Embracing Time for Smarter, Reliable Knowledge Graphs

**Source:** YouTube - How AI Is Built
**Guest:** Daniel Davis (TrustGraph)
**Date:** 2025-02-13
**Duration:** 1:33:44
**URL:** https://www.youtube.com/watch?v=VpFVAE3L1nk

---

## Key Concepts

### Three Types of Data

1. **Observations** — Measurable, verifiable recordings (e.g., "the hat reads 'Sunday Running Club'"). Requires supporting evidence. May be updated as new data becomes available.

2. **Assertions** — Subjective interpretations (e.g., "the hat is greenish"). Involves human judgment, comes with confidence levels. May change over time.

3. **Facts** — Immutable, verified information that remains constant ("always was true, always will be true"). Rare in dynamic environments because most data evolves. Serve as the "bedrock" of trust.

> "Once you start thinking about it that way, you realize there aren't a lot of facts. Most things can change. That's why the world of fact, the world of information disinformation is so difficult to understand because there is so little information that is truly etched in stone. Everything else is dynamic."

---

## Core Thesis: Time Is Ignored in AI Systems

Time is one of the most ignored dimensions in RAG and knowledge graphs. Every data point exists in a temporal context that affects its reliability and usefulness.

**Common failures:**
- Cybersecurity: Week-old threat intelligence misses zero-day exploits
- Legal: Outdated contract/regulation references cause costly disputes
- Engineering: Stale API documentation breaks system integrations

**Solution:** Timestamp all data operations (created_at, updated_at, deleted_at) and implement versioning—create new records instead of updating, mark old ones as deleted but retain lineage.

---

## Temporal Metadata in Knowledge Graphs

**The problem:** Large documents (e.g., 200-page PDF) may only have a date on page 1. By page 364, there's no temporal information about topic freshness.

**Current approach limitations:**
- Distribute document metadata manually during ingest
- At minimum, record ingestion timestamp
- "There's only so much we can do with the past. We have to focus on what we can do going forward."

**Post-ingestion capabilities:**
- Track if data is fresh, stale, or static
- Detect conflicting new information
- Monitor update frequency over time
- Calculate data trustworthiness based on change patterns

---

## Bayesian Trust Updates

> "If a source makes an assertion with high confidence, we have to take them at face value. Then as information gets into the system and we get more information, we can begin to revisit—was that correct?"

The first observation must be taken at face value (Bayesian prior). As more data accumulates, the system can:
- Assess whether high-confidence assertions proved accurate
- Establish trends for source reliability
- Track how often information conflicts arise

---

## Dependency Tracking

Key insight: Different system components have different temporal lineages (e.g., code vs. documentation).

> "If the codebase changes but my documentation doesn't, I have a break in the dependency. I can only notice that if I take time as an extra consideration."

Use cases:
- Aircraft maintenance records (sequencing matters, freshness matters)
- Manufacturing documentation (components swapped, documentation not updated)
- Software documentation (the human part is the biggest point of failure)

---

## Knowledge Graph Architecture

**TrustGraph approach:**
- Build "very very simple, very very flat" knowledge graph structure
- Don't use pure graph queries (Cypher, GQL, SPARQL)
- Create matched vector embeddings + semantic similarity search
- Rank potential nodes, then generate subgraphs with standard 8-query permutations

**Why simple beats complex ontologies:**
- Complex ontologies (schema.org, etc.) focus on entity resolution, not time
- Graph database systems don't provide good time-handling tools
- With LLMs, you may not need complex taxonomies—semantic similarity + subgraph extraction suffices

> "Do you really need all these product categories anymore? We now have a tool with LLMs that can help us not need that."

---

## Time as Metadata vs. Relationship

**Metadata (bulk of temporal data):**
- When document was processed
- When updates came in
- Processing timestamps

**Relationships (exceptions):**
- "Document X was published on [date]"
- "Podcast was published on [date]"

> "Metadata is really where the intelligence processing lives. Understanding relationships between metadata and all the insights and analytics that come from that data set."

---

## Practical Implications

**On deduplication:**
> "You can very easily go down the rabbit hole of how to prevent deduplication, spend huge amounts of time and effort, and then go: what did we get out of it?"

Focus on whether duplicates affect outputs, not perfection.

**On schema choices:**
What you put as nodes, relationships, metadata depends on:
- What queries do you actually need to support?
- What are the query patterns of different users?

---

## Quotes on Simplicity

> "I want to create a relatively simple system at least at first that I think people can understand... This piece of information is never going to change. It's etched in stone."

> "From a business perspective, from a system perspective, the goal is to drive the most amount of value at the least amount of cost to the user. That's where the tradeoff is."

> "Part of my core thesis: none of this stuff is black and white. Facts are not black and white until you get something that is rare—those rare statements that always were and always will be."

---

## Links

- **TrustGraph:** https://trustgraph.ai/
- **Cognitive Core (GitHub):** https://github.com/trustgraph-ai/trustgraph
- **YouTube:** https://www.youtube.com/@TrustGraphAI
- **Daniel Davis LinkedIn:** https://www.linkedin.com/in/graphrag/
- **Discord:** https://discord.gg/sQMwkRz5GX

---

## Relevance to Theses

- **[[Canonical Data Models Become Healthcare AI Infrastructure by 2028]]** — Temporal metadata as infrastructure component. "Agents need semantic contracts" extends to needing temporal contracts.
- **[[Verification Infrastructure Becomes Healthcare AI Moat]]** — Observations/assertions/facts framework maps to verification hierarchy. Bayesian trust updates for source reliability.
