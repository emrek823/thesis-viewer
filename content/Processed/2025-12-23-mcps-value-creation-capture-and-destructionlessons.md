---
url: https://leonisnewsletter.substack.com/p/mcps-value-creation-capture-and-destructionlesso
title: "MCPs: Value Creation, Capture, and Destruction—Lessons from the API Era"
clipped: 2025-12-23 13:00
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# MCPs: Value Creation, Capture, and Destruction—Lessons from the API Era

> Source: [https://leonisnewsletter.substack.com/p/mcps-value-creation-capture-and-destructionlesso](https://leonisnewsletter.substack.com/p/mcps-value-creation-capture-and-destructionlesso)

# MCPs: Value Creation, Capture, and Destruction—Lessons from the API Era

### Why Most MCP Startups Will Die (and Who Won’t)

[![Jenny Xiao's avatar](https://substackcdn.com/image/fetch/$s_!XQfC!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc9676ba-b587-4923-b92b-d757cbb483ee_144x144.png)](https://substack.com/@jennyxiao)[![LJW's avatar](https://substackcdn.com/image/fetch/$s_!aea_!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F627f4764-3255-4a25-8852-11c957edc695_1080x1080.png)](https://substack.com/@whattheljw)[![Jay Zhao's avatar](https://substackcdn.com/image/fetch/$s_!8yxE!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7a6a670e-a654-4fd0-ac31-a4d85e636e4b_660x495.jpeg)](https://substack.com/@nexttrillion)

[Jenny Xiao](https://substack.com/@jennyxiao), [LJW](https://substack.com/@whattheljw), and [Jay Zhao](https://substack.com/@nexttrillion)

Jun 24, 2025

275

19

45

Share

## MCPs and the API Parallel

When Anthropic launched the [Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) (MCP) in late 2024, it struck a chord across the developer community. At last, a solution to the spaghetti mess of AI integrations. MCP proposed a clean, standardized way for AI systems to communicate with external services. What APIs were to the web, MCPs are to AI agents.

Developers jumped in fast. Open source MCP servers appeared for databases, productivity tools, and internal developer infrastructure. Founders started pitching agent-native companies built on top of MCPs. As investors, we’re seeing the beginning of a new stack, with a new category of companies pitching agent-first futures unlocked by MCP architectures.

We've seen this before. The API wave of the 2010s promised seamless interoperability across the web. Investors rushed into horizontal API platforms, hoping to own the connective tissue. But most API companies failed. The ones that endured, like Stripe, Twilio, Auth0, Marqeta, Plaid, won because they owned regulatory or domain-specific complexity, not because they exposed endpoints.

That era taught us something fundamental: **once the connection layer is standardized, value doesn't live there.** It moves *upstream* to infrastructure providers who power the system, and *downstream* to vertical specialists who solve hard, domain-specific problems. The middle layer that acts as the glue gets squeezed. The same will happen with MCPs. Standardization creates new opportunities, but it also kills entire categories of shallow integration businesses. Some will mistake protocol adoption for defensibility. They’ll be wrong.

In this essay, we explore what MCPs are, how they differ from past integration approaches, why most API-first startups died, and what that means for the next generation of AI-native infra. We’ll map where value will be created, who is positioned to capture it, and how to avoid repeating the mistakes of the API era.

> ## A Technical Primer: What are MCPs?
>
> MCP defines a standard way for AI agents to talk to services, covering three core components: (1) **tool discovery**, i.e, discovering what a service can do, (2) **command parsing**, i.e., turning natural language into precise commands, and (3) **standardized response formatting**, i.e., formatting responses in a predictable way. On the surface, this might sound like API standardization all over again, but the key difference is that MCPs go deeper than API standards: not only describing syntax, but capturing ***semantic intent as well***. It doesn't just describe endpoints, it lets AI systems actually understand and use them out of the box.
>
> [![](https://substackcdn.com/image/fetch/$s_!Mc9x!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F53cffe63-b1d0-404e-a68a-ec639e9e2e96_7680x4320.png)](https://substackcdn.com/image/fetch/$s_!Mc9x!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F53cffe63-b1d0-404e-a68a-ec639e9e2e96_7680x4320.png)
>
> Figure 1: What APIs did for apps, MCP does for agents—standardizing how LLMs interact with external services.
>
> In the API era, developers had to read long documents to understand what an API could do, then manually build everything around it (auth flows, error handling, retries, health checks). Connecting an AI system to something like HubSpot required writing custom auth flows for the system, translating HubSpot’s unique data formats, and handling its quirks manually, one integration at a time. Tools like Swagger helped describe the endpoints, but they didn’t explain how to use them reliably. Every team reinvented the same wheel.
>
> MCP turns that mess into a plug-and-play standard. It defines how the AI system discovers available actions (tool discovery), understands natural language commands (“find all contacts from last month”), and receives consistent, usable responses, across *any* service. Things like authentication, error handling, and discovery are built into the protocol itself, so developers don’t waste time rebuilding common logic. What’s being protocolized is the entire chaotic process of AI-to-service integration.

## The Rise and Missteps of APIs

To understand where MCPs are going, it helps to study the API wave that came before them and why most API startups failed while a few captured outsized value. **The history of APIs serves as a warning for similar structural traps that are already appearing in the MCP ecosystem.**

### Historical Context: The Dawn of REST APIs

Before 2010, APIs were mostly SOAP-based, cumbersome to integrate, and primarily used by enterprises for B2B integrations. Startups had limited access to external services, forcing them to either build everything in-house or rely on ad hoc partnerships with other companies. VCs paid little attention to "API plays" because there wasn't a clear business model. APIs were seen as technical plumbing rather than standalone products that could generate meaningful revenue.

Then REST/JSON arrived, and everything changed. APIs got lighter, cleaner, and easier to adopt. Twitter’s API (launched in 2006, but widely adopted after 2010) became the archetype: a public JSON endpoint any developer could tap into. Suddenly, solo devs could build on top of powerful external systems without enterprise resources. This unlocked the API-as-product era (2010-2013). Stripe (2011) made payments accessible with just a few lines of code. Twilio (IPO in 2016) turned telephony into a developer tool. Marqeta (founded in 2010, IPO in 2021) transformed card issuance, turning a months-long bank negotiation into a programmable API. These companies demonstrated that APIs could be more than technical infrastructure and serve as the foundation for entirely new business models.

### The Horizontal vs Vertical Split: A Tale of Two Outcomes

As APIs matured into products, two strategic approaches emerged: **horizontal APIs** that offered general-purpose infrastructure (routing, auth, transformation), and **vertical APIs** that embedded deeply into specific domains (payments, fintech, security). Horizontal plays promised ubiquity and scale. Vertical plays promised defensibility and margin.

#### Why Horizontal APIs Looked Like Gold, But Mostly Flopped

Horizontal API startups dominated early VC interest. Their thesis was to become the universal “plumbing” layer for the internet. Every app, from Uber to GitHub, would route through your infrastructure. Capture 0.01% of every transaction and build a massive business.

But reality hit hard.

**First, cloud providers undercut them.** AWS, GCP, and Azure treated API routing and management as loss leaders to drive compute usage. AWS could charge $0.01 per million requests, leaving virtually no margin for independent API gateway companies. When AWS released Lambda integrations and comprehensive call tracking, some API startups found their core functionality replicated by a platform with deeper pockets and tighter integration with existing infrastructure. For example, AWS API Gateway, launched in 2015, directly competed with companies like Apigee and Mashery by offering lower pricing, tighter integration, and better distribution.

**Second, open source destroyed pricing power.** Kong, Postman, Swagger UI, Insomnia, and ReDoc provided free or community-driven alternatives that made it harder for proprietary API platforms to charge for basic functionalities.. These tools created competitive pressure that eroded margins across the API ecosystem.

**Third, horizontal APIs had no moat.** No network effects. No lock-in. No real switching costs. A better, cheaper tool would win every time. Developers could swap out a generic API gateway or routing layer if/when a better alternative emerged. It was a race to the bottom on both features and pricing.

#### Why Vertical APIs Built Real Moats

The few API companies that *did* break out shared one thing: **they owned complexity in a vertical and/or specific domain that couldn’t be easily copied**.

Stripe doesn't just process payments; it handles PCI-DSS compliance, global payouts, disputes, and chargebacks. No competitor could replicate that regulatory and operational complexity overnight. The deeper it went into the payments ecosystem, the more irreplaceable it became.

Auth0 and Okta are embedded deeply into enterprise security stacks. Their products weren’t just APIs; they were also compliance enablers, tied to SOC 2, SAML, audit logs, and legal requirements. That created real switching friction. And the compliance and audit requirements created natural barriers to entry, protecting these companies from commoditization. Plaid and Yodlee succeeded in fintech because they handled not just data aggregation, but also messy bank integrations, licensing, and trust. Their moat wasn’t tech so much as **access** and **credibility**.

[![](https://substackcdn.com/image/fetch/$s_!C13L!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d833e81-d558-4c13-8a94-f4c637bde4d8_7680x4320.png)](https://substackcdn.com/image/fetch/$s_!C13L!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d833e81-d558-4c13-8a94-f4c637bde4d8_7680x4320.png)

Figure 2: Vertical APIs won by owning hard problems; horizontal APIs mostly got commoditized.

This pattern is reflected starkly in the companies’ outcomes. Vertical API outcomes were **orders of magnitude larger,** with Stripe alone reaching a $95B valuation. These companies captured value by owning messy, domain-specific workflows. Horizontal platforms, by contrast, built interchangeable plumbing and saw much smaller exits.

Enjoy our analysis? Share it with your friends and colleagues!

[Share](https://leonisnewsletter.substack.com/p/mcps-value-creation-capture-and-destructionlesso?utm_source=substack&utm_medium=email&utm_content=share&action=share)

### The API Gold Rush: What VCs and Founders Got Right / Wrong

The early breakout success of Stripe, Twilio, and Plaid triggered a gold rush. Suddenly, “API-first” became shorthand for scalability, developer adoption, and high-margin usage-based revenue. Why build a full SaaS product with all the UI, support, and sales complexity when you could offer a clean API and charge per call? The unit economics seemed compelling as well. APIs could reach technical users directly, charge based on actual usage, and scale revenue with customer success.

Investors piled in. Seed and Series A rounds flowed into anything with an endpoint. YC backed a wave of API-first startups. Twilio went public at ~40x forward sales. Stripe became a generational private-market darling. Founders pitched APIs as network-effect businesses with the logic that if you make integration easy, you would become the default layer in every app.

The thesis sounded great on paper, but it missed three core truths.

**First, most APIs are just features, not standalone businesses.** Developers integrate them, but don’t stick around out of loyalty. Most API companies discovered that **their supposed network effects were actually just first-mover advantages** that evaporated once larger players entered the market with superior economics.

**Second, the cloud giants weren’t asleep.** AWS, Microsoft, and Google saw the traction and made the strategic move to play a pricing game that they could afford, that the startups couldn't. Even as an established API company, Twillio [warned](https://www.investing.com/news/stock-market-news/twilio-drops-after-amazon-announces-aws-twoway-texting-533163?utm_source=chatgpt.com) investors about Amazon undercutting its SMS and voice business with AWS Pinpoint. Entrepreneurs and investors underestimated the cloud providers' willingness to lose money on the API battle to win the infrastructure war.

**Third, VCs underestimated how quickly the “infrastructure” layer would commoditize.** The more APIs standardized, the easier it was for developers to switch, and the harder it became to maintain pricing power. Most horizontal API startups either flamed out or ended up being sold for small returns.

The result was predictable in hindsight: the winners in the horizontal layer were infrastructure behemoths rather than the API startups that pioneered the space. AWS, Microsoft, and Google captured the majority of the value that API standardization created, not pure-play horizontal API startups. Meanwhile, the vertical API companies that survived became some of the most valuable software companies of the 2010s, proving that domain expertise created lasting competitive advantages that even cloud giants couldn't easily replicate.

## How Standards Commoditize and Redistribute Value

Standards don’t eliminate value; they **shift it elsewhere in the stack**. When a standard emerges, it flattens the connectivity layer, making integration cheap and interoperability ubiquitous. That just shifts the value **upstream to those who provide scale and reliability, and downstream to those who solve domain-specific problems that the standard doesn’t.** This pattern is the key to understanding why most API companies failed and why most MCP startups will, too.

[![](https://substackcdn.com/image/fetch/$s_!iYk4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feaf14d0f-6319-48a5-b532-c54f1b37de08_7680x4320.png)](https://substackcdn.com/image/fetch/$s_!iYk4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feaf14d0f-6319-48a5-b532-c54f1b37de08_7680x432

[... truncated ...]