---
url: https://levelvc.com/ai-data-center-build-out/
title: "AI Data Center Build-Out - Level Ventures"
clipped: 2025-12-23 11:16
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# AI Data Center Build-Out - Level Ventures

> Source: [https://levelvc.com/ai-data-center-build-out/](https://levelvc.com/ai-data-center-build-out/)

* Opinion

# AI Data Center Build-Out

albert, January 19, 2025

I once read: “if it is not a law of nature, it is a shared belief”. In investing, shared beliefs often take the form of narratives which (a) abstract away complexities in their underlying assumptions (i.e. are overly coherent), (b) project out the future in a linear or in a first-order approximation, and/or (c) overestimate time scales associated with the value creation implied. Thus, we find it important to formulate first principles thinking, especially when there could be reflexive market behavior. In thinking about the current AI wave and the implications moving forward, there are a few things that require deeper consideration (i.e. to try and separate the laws of nature from shared beliefs).

Firstly, NVDA’s PE multiples (~50x) imply persistent growth into the future, a proxy for the expectations around an expansive installation phase of AI infrastructure and data centers. Incredibly, in 2024, the Mag-7 reinvested approximately 61% of their operating free cash flow into CapEx and R&D combined, an enormous amount by historical comparison and significantly higher than the broader S&P 500 average, which tracks closer to 20%.

If we look at the physical collocation data center market, the market has doubled in just 4 years with vacancy at just 3%. Occupancy has increased by 30% since 2020, construction has jumped 7x in 2 years, project pre-leasing rates are at 84% and data center asking rents have increased by 13%-37% (source: JPM). In addition, just [today](https://www.whitehouse.gov/briefing-room/statements-releases/2025/01/14/statement-by-president-biden-on-the-executive-order-on-advancing-u-s-leadership-in-artificial-intelligence-infrastructure/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--7GwuMyOTq0h-b_A0rdFHsXNVz9VGRstkJa88GnyP5h7KVXSiPieu-yTV5eZjYjvGe3fFr), the Biden administration signed an executive order to accelerate AI innovation, proposing to lease federal sites owned by the Department of Defense (DOD) and Department of Energy (DOE) to host gigawatt-scale AI data centers to the private sector.

In a [blog post](https://readwise.io/reader/shared/01jhg33fhq3het6kxvjjsy4974?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--7GwuMyOTq0h-b_A0rdFHsXNVz9VGRstkJa88GnyP5h7KVXSiPieu-yTV5eZjYjvGe3fFr), Sequoia did a simple but interesting analysis on the AI revenue expectations given the current state of AI data center build-out, using NVDA data center run-rate revenue as a proxy.

![](https://levelvc.com/wp-content/uploads/2025/01/600B-table-1-1024x333.webp)

The hyperscalers (Google, Meta, Amazon, Microsoft etc) would need to generate at least $400-$500 billion in additional revenues to earn their traditional 50% gross margin on ~$250 billion of annual data center spending (based on current estimated AI revenue run rates).

![](https://levelvc.com/wp-content/uploads/2025/01/Screen-Shot-2025-01-14-at-11.30.18-AM.webp)

Is this achievable? In what time frame? On one hand there is downward pressure on end-customer revenue due to the fact that the market structure in AI likely implies diminishing returns (due to commoditization and cost pressures on GPU hardware as well as pressure from open source solutions). On the other hand, end-customer post-training and inference time complexity  (in the future personalization, advanced RAG, etc) is increasing and will require significant compute.

Enterprise adoption for today’s traditional one-shot LLM is still in early days and has a lot of room to grow. There are many applications and use cases in enterprise infrastructure where these LLMs can automate workflows especially with unstructured data sources and we are just scratching the surface. However, the long-term value for enterprises will likely be derived from agents that can solve reasoning problems with varying levels of complexity (and where startups will be able to drive [business model innovation](https://www.nfx.com/post/stackable-business-models?utm_campaign=NFX%20Newsletter&_hsmi=341783199&utm_content=341783199&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--7GwuMyOTq0h-b_A0rdFHsXNVz9VGRstkJa88GnyP5h7KVXSiPieu-yTV5eZjYjvGe3fFr) in various verticals).

Specifically, inference-time reasoning will be required for LLMs to reach full potential in enterprise deployments. The former (post-training) enables fine-tuning on specific applications/domains and the latter (inference time) enables [System-2-like](https://readwise.io/reader/shared/01jhg505j9c4j8en9g4shyygv3?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--7GwuMyOTq0h-b_A0rdFHsXNVz9VGRstkJa88GnyP5h7KVXSiPieu-yTV5eZjYjvGe3fFr) thinking and reasoning (models or systems take time and compute to deliberate to solve more complex problems). Each phase (pre-training, post-training, and inference) has varying scaling laws.

However, LLMs that can reason successfully and consistently presents a large technical challenge. The challenge exists not only in terms of LLM capabilities (for which we are less concerned in the long-term as we head towards some form of AGI) but because of the all the factors that will limit enterprise adoption of LLM reasoning systems at scale. These factors include: reasoning deficiencies (causal understanding, multi-step logical inference, and common sense reasoning), accuracy and reliability, contextual understanding challenges, data quality and availability, bias and fairness, privacy and security, regulatory compliance, and organizational readiness. These factors will take time to figure out and for standards to be created. Historically, the [trajectory](https://stratechery.com/2021/the-death-and-birth-of-technological-revolutions/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--7GwuMyOTq0h-b_A0rdFHsXNVz9VGRstkJa88GnyP5h7KVXSiPieu-yTV5eZjYjvGe3fFr) of technology revolutions has been speculative financial enthusiasm interlocked with lagged times between the installation and deployment phases. We expect there may certainly be an oversupply of capacity before demand catches up and thus a forthcoming correction may be reasonable.

![](https://levelvc.com/wp-content/uploads/2025/01/Screen-Shot-2025-01-14-at-11.30.58-AM.webp)

While the general consensus is that incumbents will generate most of the value from AI compute and infrastructure in the long run (validating their CapEx spend today), it is nonetheless an exciting time for pre-seed/seed stage startups leveraging AI infrastructure to innovate in verticals and use cases.

AI presents the opportunity to unseat last-generation SaaS companies through business model innovation (e.g. outcome based pricing) and unlocking massive productivity gains through unique UX. These business can also get to scale with less capital and address problems in traditional industries where technology adoption has lagged (increasing the market depth of vertical software generally). Breakout startups will also benefit from the cost-benefits of the potential oversupply of AI compute infrastructure and by exploiting the the innovation cycles of the frontier AI groups, much like mobile app pioneers were coupled to mobile device innovation in the early 2000s.

---

* [LinkedIn](https://www.linkedin.com/company/level-ventures)
* [Twitter](https://twitter.com/LevelVC)

## We recommend

[![Mega Funds at Seed: Existential Risk or Smart Beta Opportunity?](https://levelvc.com/wp-content/uploads/2025/12/image-2.png)

### Mega Funds at Seed: Existential Risk or Smart Beta Opportunity?

December 18, 2025](https://levelvc.com/mega-funds-at-seed-existential-risk-or-smart-beta-opportunity/)

[![Are You Getting the Volatility You Paid For?](https://levelvc.com/wp-content/uploads/2025/11/image-1.png)

### Are You Getting the Volatility You Paid For?

November 18, 2025](https://levelvc.com/are-you-getting-the-volatility-you-paid-for/)

[![Assessing Reflexivity](https://levelvc.com/wp-content/uploads/2025/10/image-5.png)

### Assessing Reflexivity

October 26, 2025](https://levelvc.com/assessing-reflexivity/)