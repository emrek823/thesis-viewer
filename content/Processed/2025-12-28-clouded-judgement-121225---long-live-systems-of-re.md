---
url: https://cloudedjudgement.substack.com/p/clouded-judgement-121225-long-live
title: "Clouded Judgement 12.12.25 - Long Live Systems of Record"
clipped: 2025-12-28 13:09
source: browser-history
---

# Clouded Judgement 12.12.25 - Long Live Systems of Record

> Source: [https://cloudedjudgement.substack.com/p/clouded-judgement-121225-long-live](https://cloudedjudgement.substack.com/p/clouded-judgement-121225-long-live)

# Clouded Judgement 12.12.25 - Long Live Systems of Record

[![Jamin Ball's avatar](https://substackcdn.com/image/fetch/$s_!ZGNt!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F94fea488-4be3-4043-9fdc-62e3018a3163_297x297.jpeg)](https://substack.com/@cloudedjudgement)

[Jamin Ball](https://substack.com/@cloudedjudgement)

Dec 12, 2025

144

9

10

Share

Every week I’ll provide updates on the latest trends in cloud software companies. Follow along to stay up to date!

**Systems of Record are Dead. Long Live Systems of Record**

Every few weeks I see some version of the same claim: “The new system of record is the agent,” or “Workflows swallow systems of record,” or “Data is the system of record, apps are just thin views.” There is a grain of truth in each of those, but I think it is also easy to over-rotate and accidentally throw out the thing enterprises still need most, which is not a “system of record” as much as a reliable source of truth.

When I think about systems of record, I do not actually think in product categories. I think in the much more boring lens of “where does the truth live.” In other words, if an enterprise workflow needs to know something at a specific step, where is the one place that answer is considered canonical. Because as workflows get more automated and more agent driven, the fragility point often has nothing to do with the model and everything to do with whether the agent pulled the right value from the right system at the right time. If an early step in a quote to cash flow grabs the wrong price list, or the wrong contract term, or a stale ARR number, the rest of the workflow is now confidently automating the wrong thing.

Anyone who has spent time inside a large company knows how messy this gets in practice. Take something as simple as “what is our ARR.” Ask the sales org and you will get one number. Ask finance and you get another, with a different set of exclusions and adjustments. Ask accounting, now you are talking revenue recognition, not bookings. Ask legal, and they will correctly remind you that half the “ARR” in a fast growing business is backed by contracts that look nothing like the neat recurring subscription you want it to be. Even the definition is slippery. For a consumption business, is ARR the annualized run rate from last month’s usage, is it contracted commit, is it contracted commit net of discounts and credits, or is it a lagging twelve month billing number dressed up to sound like a recurring metric.

Now imagine you tell an agent, “Go calculate ARR by segment and send a deck to the board.” Which ARR should it use. Which table is canonical. If sales and finance disagree, who wins. If the billing system and the warehouse have drifted by a few percent, which one does the agent treat as truth. This is the part of the “systems of record are dead” argument that feels off to me. The more we automate, the more important it becomes that someone has done the unglamorous work of deciding what the correct answer is and where it lives.

Historically, systems of record solved this in a fairly straightforward way. You had a CRM system of record for customers and opportunities, an ERP for financials, an HRIS for people, a billing system for invoices, and so on. They were not perfect, but each domain had a primary home. Then the last decade arrived and everyone tried to centralize that reality into the warehouse or lakehouse. The pitch was that if you poured all the data into one place and layered semantic models and metrics definitions on top, you would finally get a single source of truth that analytics, dashboards and downstream tools could all agree on.

In practice, that vision got part of the way there. Warehouses and lakehouses absolutely became the gravitational center for analytical truth in many companies. Teams built careful dbt models, they put governance around “official” metrics, they curated gold tables that fed BI tools. The problem is that most of this lived downstream of the operational world. The sales team still lived in Salesforce, the finance team still closed the books in NetSuite, the support team still worked tickets in Zendesk. The warehouse or lakehouse was the retrospective mirror, not the transactional front door.

Agents change that equation in two important ways. First, they are inherently cross system. When you tell an agent to “run a quote to cash workflow,” you are asking it to dance across CRM, CPQ, billing, collections, and maybe a few internal tools that live in random corners of the org. Second, they are inherently action oriented. This is not just about running a report or producing a dashboard, it is about taking actions that change state in those underlying systems. That combination means agents are only as good as their understanding of which system owns which truth, and what the contract is between those truths. This is the bull thesis on a company like Databricks - they become the center of gravity for AI Agents, and start to build these agents themselves.

Said another way, agents are forcing us to separate the UX of work from the source of truth for work. The UX can now be a chat window, a natural language interface, or a specialized agent UI that looks nothing like the old enterprise applications. Under the hood, though, something still has to say “this is the canonical customer record” or “this is the legally binding contract term” or “this number is the one we report to Wall Street.” That “something” might be a traditional system of record, it might be a warehouse-backed semantic layer, or it might be a new class of “data control plane” product, but it is absolutely not going away.

This is where I think data warehouses and lakehouses start to look like the natural substrate for many agentic workflows. They already try to centralize data across domains. They already carry the semantic layer that defines metrics and business entities. They already sit at the intersection of governance, lineage, and access control. If you squint a bit, the warehouse plus the metrics layer plus the governance tooling starts to look less like a reporting system and more like a “truth registry” that the rest of the company can rely on.

The missing piece is that most of these stacks were designed for humans running queries, not agents orchestrating workflows. Humans can hold nuance in their heads. If finance and sales disagree on ARR, they can talk it out and decide which number to use for the board deck. Agents cannot. They need explicit rules. They need conflict resolution baked into the data model. They need to know that “official\_arr” is the metric we use for external reporting, “sales\_arr” is the metric we use for comp plans, and “product\_arr” is the metric we use for feature level analysis. They need the warehouse to not only store the data but also encode the precedence and meaning of that data.

There is a similar story on the operational side. I do not think CRM or ERP or billing systems disappear. Instead, they quietly evolve into something closer to “state machines with APIs” that are optimized for programmatic access rather than human UI. The agent initiates the quote, computes the pricing, assembles the contract, negotiates redlines, and then, at the right moment, writes the final state into the downstream system of record through a well defined boundary. The human might still see that state in a web interface, but the primary consumer is an agent. The system of record becomes less of a place you click around in and more of a durable storage and constraint engine that machines talk to.

If you believe that world, then the question “are systems of record dying” starts to feel a bit like asking “is the database dying” when people moved from client server apps to web apps. The form factor is changing. The power center may migrate from monolithic SaaS fronts to shared data layers and workflows. But the need for a contract that says “this is the truth, and here is how you are allowed to change it” only increases.

You can already see this shift in how people talk about “AI native” apps. The most interesting ones rarely start by building yet another end user UI. They start by sitting next to the warehouse, or next to the CRM, or next to the ERP, and then building opinionated agents that orchestrate work across those systems. Their edge is usually a combination of workflow design, semantic modeling, and tight integration with the customer’s existing sources of truth. Underneath the marketing, they are basically wrapping the messy reality of enterprise data in a cleaner contract so agents can operate safely.

There is also a valuation angle hiding in here. Investors love to debate whether “systems of record” get higher multiples than “systems of engagement,” and where pure workflow tools land in that spectrum. Agents complicate that framing. An agent that sits on top of someone else’s data and can be easily unplugged probably does not deserve system of record type durability. An agent platform that becomes the place where metric definitions live, where entity schemas are defined, and where policies about who can do what are enforced, starts to look much more like a source of truth, even if the underlying bits are stored in Snowflake or Databricks or some operational database. The multiple will follow the stickiness of the truth, not the buzzword on the slide.

So where do I land. I do not think systems of record are dying. I think they are getting unbundled and rewired. The “record” part, the actual truth, will increasingly live in a combination of warehouses, lakehouses, and still important operational systems. On top of that, we will get a new layer of semantic contracts and control planes that tell agents how to safely read and write that truth. The familiar SaaS front ends that used to sit on top of those systems of record will matter less over time. Agents and workflow UIs will become the primary way humans interact with work. But the underlying need for a well defined source of truth, with clear ownership and constraints, will only grow.

Said another way, agents are not replacing systems of record. They are raising the standards for what a good one looks like. The companies that win this cycle will be the ones that build amazing agentic experiences on top of boring, rock solid sources of truth, rather than pretending those sources no longer matter.

**Quarterly Reports Summary**

[![](https://substackcdn.com/image/fetch/$s_!XY8Q!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F902e89fe-bc02-4066-b0b3-53c805e0d336_1003x184.png)](https://substackcdn.com/image/fetch/$s_!XY8Q!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F902e89fe-bc02-4066-b0b3-53c805e0d336_1003x184.png)

**Top 10 EV / NTM Revenue Multiples**

[![](https://substackcdn.com/image/fetch/$s_!teun!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8bb95891-5e80-4511-bd47-e4d654168f5e_1494x682.png)](https://substackcdn.com/image/fetch/$s_!teun!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8bb95891-5e80-4511-bd47-e4d654168f5e_1494x682.png)

**Top 10 Weekly Share Price Movement**

[![](https://substackcdn.com/image/fetch/$s_!0KRb!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9bb7688b-a1ba-4e1a-9085-277b8c2e0072_1003x634.png)](https://substackcdn.com/image/fetch/$s_!0KRb!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9bb7688b-a1ba-4e1a-9085-277b8c2e0072_1003x634.png)

**Update on Multiples**

SaaS businesses are generally valued on a multiple of their revenue - in most cases the projected revenue for the next 12 months. Revenue multiples are a shorthand valuation framework. Given most software companies are not profitable, or not generating meaningful FCF, it’s the only metric to compare the entire industry against. Even a DCF is riddled with long term assumptions. The promise of SaaS is that growth in the early years leads to profits in the mature years. Multiples shown below are calculated by taking the Enterprise Value (market cap + debt - cash) / NTM revenue.

Overall Stats:

* Overall Median: 4.9x
* Top 5 Median: 22.7x
* 10Y: 4.2%

[![](https://substackcdn.com/image/fetch/$s_!MNoe!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8418b7c-1aa2-414e-ae01-9018d4897b2d_1231x664.png)](https://substackcdn.com/image/fetch/$s_!MNoe!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8418b7c-1aa2-414e-ae01-9018d4897b2d_1231x664.png)

[![](https://substackcdn.com/image/fetch/$s_!zy8Q!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06ff92ef-f8aa-427f-bee5-6a575d3b3ced_1222x666.png)](https://substackcdn.com/image/fetch/$s_!zy8Q!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06ff92ef-f8aa-427f-bee5-6a575d3b3ced_1222x666.png)

Bucketed by Growth. In the buckets below I consider high growth >22% projected NTM growth, mid growth 15%-22% and low growth <15%. I had to adjusted the cut off for “high growth.” If 22% feels a bit arbitrary, it’s because it is…I just picked a cutoff where there were ~10 companies that fit into the high growth bucket so the sample size was more statistically significant

* High Growth Median: 14.5x
* Mid Growth Median: 7.5x
* Low Growth Median: 3.7x

[![](https://substackcdn.com/image/fetch/$s_!JP2S!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba278cf9-5bc2-4680-a023-e84bac39feeb_1237x664.png)](https://substackcdn.com/image/fetch/$s_!JP2S!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba278cf9-5bc2-4680-a023-e84bac39feeb_1237x664.png)

[![](https://substackcdn.com/image/fetch/$s_!EXBg!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46336d6f-a515-47dc-91f3-f0c0856f3621_3022x1305.png)](https://substackcdn.com/image/fetch/$s_!EXBg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46336d6f-a515-47dc-91f3-f0c0856f3621_3022x1305.png)

**EV / NTM Rev / NTM Growth**

The below chart shows the EV / NTM revenue multiple divided by NTM consensus growth expectations. So a company tradin

[... truncated ...]