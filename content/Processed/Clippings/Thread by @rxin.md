---
title: "Thread by @rxin"
source: "https://x.com/rxin/status/2001122758730899659"
published: 2025-12-16
created: 2025-12-18
description:
tags:
  - "clippings"
---
**Reynold Xin** @rxin [2025-12-17](https://x.com/rxin/status/2001122758730899659/history)

We disclosed today as part of our Series L that our 4-yr old data warehousing business is now >$1B revenue run rate. This is to the best of my knowledge the fastest to $1B DW product in the industry. How did we do it, and what’s next?

The conventional wisdom is that it would take 5+ years to build a new database (just to release one).

Four years ago, the linked blog announced that Databricks had won the official TPC-DS 100TB benchmark with DBSQL, which was in preview back then. It had the best perf and the best price/perf, and notably beating Snowflake by 12x in price/perf in that benchmark. (Note: we are still the top place on the official TPC-DS benchmark today.)

That blog post launched a contentious "benchmarking war" with a lot of back and forth between vendors, but more importantly it marked the very beginning of our data warehousing business.

To build this business, we assembled the best engineering team and established a new infrastructure product category called Lakehouse that inherits the flexibility and openness of data lakes and performance of data warehouses. Lakehouse is now the standard for data infrastructure, and organizations are migrating from legacy data warehouses to the Lakehouse.

The result so far is a testament to the team and their execution. We have a lot of ideas on how to take performance and usability to the next level, and the team is working hard to make that happen. Expect some big announcements next year. We want to lay the foundation for growing the data warehousing product to a $10B business.

Databricks had operated largely in the “analytics” side of data in the past, and we believe the “operational” side of data (aka “OLTP”) is also ready for a “Lakehouse” style disruption. A huge chunk of the founding team’s time is now focusing on “Lakebase”, a new category of OLTP databases that separates storage (in the lake) from compute. That architecture enables features that have been virtually impossible for databases in the past: instant provisioning, elastic scaling (down to zero), branching, high throughput scan directly from Spark, …

I won’t go into too much detail about Lakebase here, but we expect a similar trend to happen in the next few years: Lakebase will transform the industry and other OLTP systems will re-architect or position towards it.

The best data warehouse is a lakehouse, and the best database is a lakebase!

---

**Jamin Ball** @jaminball [2025-12-17](https://x.com/jaminball/status/2001135437130391827)

💪

---

**Ram Parameswaran** @\_ram\_ [2025-12-18](https://x.com/_ram_/status/2001671544683344379)

Branding pivot to LakeBricks @rxin ? :)

---

**Banghua Zhu** @BanghuaZ [2025-12-17](https://x.com/BanghuaZ/status/2001142382138679528)

Congrats Reynold and Databricks team!

---

**Sherwood** @realshcallaway [2025-12-18](https://x.com/realshcallaway/status/2001448560106099134)

Question. Does this mean you're coming for PostgreSQL?

---

**talkspace** @talkspace

Talkspace online therapy is provided by deeply experienced human therapists using evidence-based methods proven to achieve positive results.

---

**Chris Madden** @chrismadden\_ [2025-12-17](https://x.com/chrismadden_/status/2001340406223802581)

Congrats on the milestone!

---

**Conor McCarter** @ConorMcCarter [2025-12-17](https://x.com/ConorMcCarter/status/2001135967894217205)

I remember writing docs for our Databricks integration 3.5 years ago and wondering if this was going to become a “thing”. your team delivered on meaningful enhancements like unity catalog, volumes, improved auth options, which made a real difference in usability. congrats!

---

**Yatharth** @y99 [2025-12-17](https://x.com/y99/status/2001311601165562344)

🚀🚀

---

**Sam Bessalah** @samklr [2025-12-17](https://x.com/samklr/status/2001370607406178649)

Congrats Reynolds. Well deserved