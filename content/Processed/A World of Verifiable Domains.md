---
title: "A World of Verifiable Domains"
source: "https://www.seancai.com/philosophy/verifiable_domains"
published:
created: 2025-12-16
description: "Read my thoughts on A World of Verifiable Domains"
tags:
  - "clippings"
processed: 2025-12-16
themes:
  - evaluators
  - rl-environments
  - moats
---
[Back to philosophy](https://www.seancai.com/philosophy)

## Historical Context: Data Labelling from Scale AI days

In the mid-2010s, Scale AI pioneered the third-party data labeling market at a time when most enterprises were unsophisticated buyers of AI data. Back then, few companies had in-house machine learning (ML) expertise or applied ML teams, so they relied on external services to curate and annotate training datasets. Scale AI's initial focus was on labeling "hard tech" data (like images for computer vision in self-driving cars) and other straightforward annotation tasks. Cutting-edge ML was largely academic and not yet powerful enough for most commercial use cases, which meant early enterprise demand for data was limited and naive.

This began to change with the transformer revolution (circa 2018–2020) and the rise of foundation models. As models like GPT-3 demonstrated astonishing capabilities from large-scale training, the need for ever-increasing "frontier" data surged. The most sophisticated early buyers of such data were Mag7 labs like OpenAI, DeepMind, and Anthropic who suddenly needed massive, high-quality datasets and human feedback to push their models' performance. Scale AI's success foreshadowed a new ecosystem of AI data providers, serving hungry labs whose only bottlenecks for improving frontier performance was the quality of data itself, represented in many ways like task complexity, horizons, tool calls, and modalities.

This set the stage for an evolution from simple one-off annotation jobs to more complex, long-horizon training tasks, culminating today in rich reinforcement learning (RL) environments that can mimic sophisticated workflows. We've gone from outsourcing basic labeling (e.g. drawing boxes around stop signs) to outsourcing the creation of entire simulated work environments where AI agents can learn by doing.

The trend that we've seen over the last three years is that models need less data, but the data became harder to get as it had to simulate enterprise workflows whose documentation was both rare and locked up in domain experts.

## The Setup

[Pretraining as we know it is ending](https://vintagedata.org/blog/posts/realistic-ai-timeline) and becoming less differentiating - this has been known for a year + now.

Moreover, pretraining is insufficient for tasks like planning, tool use, and long reasoning chains.

Implicitly, pretraining base models is already mostly done, and [mid-training](https://vintagedata.org/blog/posts/what-is-mid-training), rl, environment work, will drive model improvements in the next two years. Post training will serve the purpose of improving deployment, safety, alignment, etc.

RL envs are the hottest new buzzword (for about 2 months now at this point). Maybe its world models and VLMs elsewhere (soon tm). Important to remember - RL and RL envs will just be one component of a rich ecosystem for model learning, especially in context of what gets done at the broader level in mid/post training (human data/rubrics/evals and more).

A first wave of AI startups saw pre-training as a way to create best in class ai products for verticals. Outputs of their products are now strikingly similar to base foundation model efforts - maybe with a bit more engineering work with basic RAG and a document vault with embeddings. As labs' models increasingly generalize better across anything, startups building bespoke model infra are unable to catch up.

At a generalized higher level, key questions that are being answered today include: what infrastructure can we build in the mid/post training layer to better simulate and improve model performance on more complex real world tasks? What can we improve in model architecture itself to expand and consider more modalities? How can we build around interweaved data specifically to swap between modalities effectively?

I'm not a researcher so I won't go into depth on the above, but I recommend reading more of [Doria's](https://vintagedata.org/blog/) work which introduces some key research questions. I'll focus here on RL env companies as they relate to early stage investing.

## Staging

The democratization of the recipe for good RL + reasoning agents that have passed the critical threshold of being good enough for most white collar tasks has passed. Sequoia calls it the bottom 5% rule. Pleias researcher calls it the democratization of the recipe for good RL + reasoning. Simply put, labs aren't going to be the only hyperspenders for data infra. The meteoric rise of frontier data and eval companies like Mercor is only a prototype of what is quietly being unleashed.

In the days where Scale was the only data provider, everybody was an unsophisticated buyer, and cutting-edge ML remained both academic and not good enough for commercial cases. Scale found its first markets in vision and hard-tech data. With the explosion of AI talent investment in the transformer model, and the need for ever-increasing frontier data to train ever-frontier capabilities in foundation models, the first enterprise customers that grew sophisticated enough to buy data at venture scale reified - labs.

Today, I'm hearing whispers of how the diffusion of ML knowledge for good RL + reasoning agents is being arbitraged in startup land. The hipster early teams here have been very quiet about this - forward deployed teams like [Forge](https://withforge.com/). Soon (or maybe already!), a winning strategy for picking a large market to just build in will be to gather a bunch of cracked MLEs with connections to decacorn hyperspenders to shore up their lack of MLE expertise (who doesn't have a lack of great engineers nowadays!) and build high value white collar automations.

Incubation and roll-up first platforms with the ability to hire substantial AI talent have seized on this opportunity. General Catalyst's pivot to this strategy was first evident when they [acquired a hospital chain](https://www.generalcatalyst.com/stories/our-acquisition-of-summa-health) in late 2023. Jared Kushner and Elad Gil's Thrive's new company [brain.co](http://brain.co/) is a flagrant reiteration of this in an incubation form. It seems that megacaps have come to the conclusion that building AI-native products is an endeavor best undertaken for brand new organizations with draconian top-down control rather than trying to introduce AI to existing fortune 500 orgs.

So far, I've backed two companies in this space with exactly this formula and will be surprised if this doesn't become a major theme this year. For teams following this formula without institutional connections, the question is about how you enter the enterprise spend stack in the first place to get the observability needed to build these solutions.

But everyone will train models. When Scale came to market - enterprises generally didn't have the expertise to train, buy and curate quality training data. They were unsophisticated, and the applied ML teams didn't exist. Today, they do. ML infrastructure is becoming more accessible ([openpipe](https://techcrunch.com/2025/09/03/coreweave-acquires-agent-training-startup-openpipe/)). Data is getting commoditized. RL environments as well. The labs are no longer the key holders of knowledge and are actively trying to productize. I have it on good authority that all of the major labs are training general purpose finance models with strong browser use capabilities. Though the industry has long known this, OAI's push towards contracting ex-bankers to produce reasoning traces/data for automating finance tasks has just been [outed to the public](https://www.entrepreneur.com/business-news/openai-is-paying-ex-investment-bankers-to-train-its-ai/498585). Tomorrow, it'll be healthcare, then law, then any high value white collar industry that your average college grad ten years ago would have heard from their parents that this was a great career path.

Already, some fortune 500 companies and applied MLE teams at decacorn startups with great hiring practices (e.g. Ramp, Airbnb) have applied ML teams in house whose spend patterns are starting to resemble that of labs. While it's likely 1/100th of the spend of an Anthropic or OAI today, what's key is that there are hundreds of more enterprises with more available white space than labs - whose efforts to expand into the product layer are now obvious. To name a few without violating NDAs, these are well-resourced companies like the BB banks, as well as fortune 500 insurance and health companies and other more surprising names.

Half of the RL environments companies nowadays are just fronts to have a reason to sell forward deployed MLE solutions to large enterprises without MLE expertise. Its AI talent service arbitrage. It's RL as a service.

## The Evolution to Complex RL Environments

Over the past couple years, the market has shifted toward dynamic, continuous learning approaches like [RL](https://x.com/pranavmistry/status/1888081410315243804) to train AI systems. Instead of static datasets alone, companies are now using simulated environments and feedback loops to teach AI agents how to perform complicated sequences of actions. All of this is in attempt to create learning paradigms that make AI as good as learning as us - which Karpathy said in a [recent interview](https://x.com/karpathy/status/1979644538185752935) is most certainly not RL in the short term.

In reinforcement learning, an AI agent improves by interacting with an environment, observing outcomes, and receiving reward or penalty signals. Early examples like DeepMind's AlphaGo or OpenAI's gaming agents showed the potential of RL in structured domains (games with clear rules). Today's frontier extends this to unstructured, open-ended tasks in white collar work like writing code, processing forms, or doing research. The latest RL environments are essentially simulated knowledge work playgrounds: agents practice using software, the internet, and other tools, receiving feedback on how well they complete multi-step objectives. This is taken to an incredibly obvious degree with recent raises from [Goodstart Labs](https://goodstartlabs.com/) and [General Intuition](https://www.generalintuition.com/).

We've effectively moved up the value chain: from labeling individual data points → to orchestrating interactive training scenarios. This evolution addresses a key limitation of static models (which, once trained, cannot easily adapt). An RL-trained agent, by contrast, can continually improve by running again and again in these sims. As Felicis [put it recently](https://www.felicis.com/insight/reinforcement-learning#:~:text=For%20the%20AI%20platform%20shift%2C,learning%20is%20the%20rocket%20fuel), reinforcement learning has become the "rocket fuel" for the AI platform shift, enabling AI systems to move "beyond static training into dynamic, continuous improvement.

As RL environments relate to the pre/mid/post training steps some of us are familiar with:

- **During Pre-training:**
	Environments play a minimal role. Pretraining is mostly unsupervised/self-supervised learning on raw data (text, web, code, etc.). RL environments aren't typically involved here, except maybe in mixed settings where some tasks are added already in "foundation model" training (but that's more rare). The environment startups are less relevant at pure pretraining stage.
- **During Mid-training:**
	This is where RL environments become especially valuable. As labs try to inject specialized capabilities (reasoning, tool use, planning, longer context, domain knowledge, etc.), they need tasks/environments that simulate realistic complexity and provide feedback (reward). These RL environments are the scaffolding to do curriculum learning, synthetic tasks, tool integrations, investigating behavior under more realistic constraints. Startups that build environments, provide evaluation suites, create "toy but rich" domains, etc., are directly enabling progress here.
- **During Post-training / Alignment & Final Polishing:**
	RL environments are crucial for evaluation, alignment, fine-tuning with human feedback. They help test agents, measure safety, robustness, and reward modeling. Environments that mimic intended deployment contexts (software UIs, business tools, etc.) let labs test whether an agent will misbehave, hallucinate, "cheat the reward", or otherwise diverge from user expectations. Also helpful in RLHF (or more general "reinforcement fine tuning") where you need reward signals from realistic tasks.

## Data Marketplaces 2.0: From Annotation to AI Training Services

Alongside this shift, a new breed of data marketplace and service companies has exploded onto the scene, epitomized by firms like Mercor and Surge AI. These companies initially made their name providing high-quality data labeling and evaluation services to AI labs, but they are quickly expanding into full-fledged AI training infrastructure providers.

Take Mercor as an example. Founded in 2022, Mercor connects top AI labs (OpenAI, Google, Meta, etc.) with domain experts who were humans with specific expertise like doctors, lawyers, or coders, acting mostly to label data or provide feedback to train models. In essence, Mercor built a marketplace for skilled AI annotators and raters, tapping into the insatiable demand for "frontier" data. The growth numbers have been staggering: by early 2025 Mercor was reportedly past a $100M annual run-rate, and as of September 2025 it's nearing a $450M–$500M revenue run-rate (with some sources saying even higher). Mercor is raising a Series C at over $10 billion valuation, although people still have qualms about Mercor's GMV versus ARR (what constitutes actual contracted, sticky revenue)?

Surge AI is Mercor's lesser known, more successful older brother. Initially known for high-quality data labeling and model evaluation services, Surge has become another essential vendor to AI labs. Reports in mid-2025 suggest Surge AI is in talks to raise about $1 billion in funding at a $25 billion valuation and is known for having always produced and sold completed datasets earlier than Mercor (and powered all of Anthropic's stack). More impressive - they did 1B+ of net income last year and are on track to more than double this year - all while taking much less equity capital than everyone else.

Mercor and Surge's trajectory mirrors the "meteoric rise" of these frontier data companies that observers see as "only a prototype of what is quietly being unleashed" in this market. They may evolve from just selling data/workers into providing the platform enterprises use to train their models (i.e. moving "up the stack" to more of an infrastructure play) - some RLaaS companies even contract with them to sell to labs.

Even Scale AI itself, the elder statesman here, has been repositioning as pure labeling "loses steam." Scale is seeking enterprise and government contracts and integrating more model training and RLHF (RL from human feedback) services on top of its labeling platform. Notably, the intense competition has led to friction - Scale AI recently [sued](https://www.axios.com/2025/09/03/scale-ai-lawsuit-mercor) Mercor for alleged trade secret misappropriation, accusing a former employee of taking confidential strategy docs to Mercor. Given buyer concentration in this space, there is similar animosity behind employee spinoffs for those companies. It's a sign that this market is now big enough and strategic enough that the major players are fiercely protective of their turf.

The data labeling market has matured and commoditized to an extent. Raw annotation work is now integrated data+training solutions. Companies like Mercor and Surge have opportunities to morph into quasi-infrastructure providers for AI labs, offering everything from curated data, to human feedback management, to RL environment support. This not only serves the big labs, but also lays the groundwork for serving enterprise clients who are becoming more sophisticated in their AI needs.

## Enterprise ML becomes sophisticated

A few years ago, Fortune 500 firms and even tech unicorns were far behind the AI labs in sophistication as very few had dedicated ML engineering teams or significant budgets for data. Today that picture is changing dramatically. AI application layer companies with talent aggregation capabilities are clearly sophisticated:

![As seen from Cursor's new announcement of their own internal models for their own application layer use cases, RL is a non-negotiable to product performance](https://www.seancai.com/images/philosophy/Screenshot_2025-10-29_at_3.10.02_PM.png)

*As seen from Cursor's new announcement of their own internal models for their own application layer use cases, RL is a non-negotiable to product performance*

Many large enterprises have built in-house applied ML teams that, while smaller in scale, increasingly mimic AI lab behavior in their buying and R&D patterns. In 2025, companies like Goldman Sachs (finance), Progressive (insurance), Ramp and Airbnb (tech/fintech startups) all created internal AI task forces or research groups. These teams are now increasingly sophisticated enough to buy parts of the post training and model deployment stack rather than rely on complete end to end AI deployments.

Their budgets still trail the likes of an OpenAI or Anthropic by orders of magnitude (perhaps on the order of 1% of a top lab's spend), but there are hundreds of such enterprise teams forming, greatly expanding the addressable market for advanced AI data and training services beyond just a handful of labs. Their AI spend is growing in areas directly tied to business workflows (customer service, underwriting, auditing, etc.), not just generic research.

We're seeing anecdotal evidence of this new sophistication. At Wall Street banks, for instance, AI is now being used to draft financial documents and analyze data. Goldman Sachs' CEO even noted that an AI system is doing "95% of the work" on [drafting certain IPO prospectuses](https://www.businessinsider.com/wall-street-goldman-jpmorgan-bridgewater-using-ai-2023-12#:~:text=,83). Goldman's CIO has described the firm assembling a ["growing arsenal"](https://www.businessinsider.com/wall-street-goldman-jpmorgan-bridgewater-using-ai-2023-12#:~:text=Goldman%20Sachs%27%20chief%20information%20officer%2C,IPO%20filings%20and%20analyst%20research) of AI tools and internal "AI sidekicks" for employees. In insurance, carriers have long used machine learning for pricing and claims, but now are exploring on policy RL solutions to handle more complex customer interactions and risk assessments.

Enterprise AI teams are also starting to purchase data and evaluations externally the way labs do. A Fortune 500 insurance company might contract a vendor to generate specialized training data for an underwriting model, or a big bank might hire an external service to create a simulated environment for an AI that assists with compliance checks. This is a notable change in favor of enterprise sophistication as a few years ago, these buyers wouldn't even know how to value or integrate such data. Some well-resourced companies are quietly testing data and RL environment vendors with pilot budgets of $1–2M per contract. Those budgets are starting to loosen up as successes roll in, meaning enterprise spend on advanced AI training is poised to rapidly increase.

The best enterprise AI teams now know about post-training techniques, human feedback loops, etc., and they are starting to allocate trial spend in those areas. These include companies like Ramp, [Cursor](https://cursor.com/blog/composer), AirBnB, and Coinbase, who all have talent pipelines that can somewhat rival labs themselves as well. The world isn't sophisticated yet for your typical mom and pop shop to buy a [Veris](https://veris.ai/) type platform, or consider a [CloudCruise](https://www.cloudcruise.com/) type platform as critical devtool infra spend, but they are sophisticated enough to contract services-based approaches and promise ARR conversion if they hit benchmarks.

## The Rise of RL Environments: "Virtual Work" Training Grounds

An RL environment is essentially a sandbox or virtual world where an AI agent can perform tasks and learn from feedback. Classic RL environments were things like video games or simple physics simulations (e.g. OpenAI Gym's Atari games, or controlling a robotic arm). What's different now is that startups are building environments that mimic enterprise software and workflows from interacting with a web browser and internal databases, to writing code in an IDE, to filling forms in a CRM system. In the context of pre/mid/post training, RL environments squarely are used in the mid/post training layer, used for injecting specialized capabilities to simulate realistic complexity.

We can describe these environments as the "training grounds" for the next generation of AI workers (or [gyms](https://www.fleetai.com/about), as many have likened them). For example, an environment might simulate a full Salesforce CRM interface with dummy customer data, and an agent practices logging calls or updating records. Or a coding environment might give an agent a fake codebase and a specification for a new feature, and the agent must write and debug code with the environment automatically checking if the new feature works (this is precisely what Mechanize enables with what they call " [replication training](https://www.mechanize.work/blog/the-upcoming-gpt-3-moment-for-rl/) ").

Building high-fidelity environments is non-trivial: they need to capture the complexity of real software (including all the UI elements, states, and possible actions) and also provide automated reward signals (so the agent knows when it did something right or wrong). However, progress in this area has been swift. A number of new platforms now offer libraries of realistic "enterprise" tasks and simulation frameworks. As Chemistry [noted](https://www.chemistry.vc/post/rl-reigns-supreme#:~:text=Companies%20are%20building%20application%20replicas,becomes%20the%20definitive%20evaluation%20metric), *"companies are building application replicas that capture every UI interaction and state transition, ensuring precise grading of agent performance"*. These replicas have to keep up with real software (weekly SaaS updates, etc.), but they provide a deterministic sandbox where AI agents can be safely trained and evaluated.

The start of 2025 brought an obsession to generate verifiable rewards for quite complex tasks. If you can generate verifiable rewards for something, you can train models to be good at it, hence Mercor's early declaration that we are in a [world of evals](https://mercor.com/blog/welcome-to-the-era-of-evals/). Verifiable rewards were largely seen as a manual engineering problem in initial text-based use cases, but with the advent of multimodality and better simulation softwares (as well as improved techniques for tool calling accuracy), being able to engineer verifiable rewards for anything meant making them ripe for model usage. The impending buzzword for these simulated environments are VLMs and [World Models](https://www.worldlabs.ai/), extensions into what we can apply model reasoning to.

## Infrastructure by Service

All this means RL environments and associated post-training tooling are evolving into a form of basic infrastructure for AI deployment.

From an open source perspective - projects like OpenAI's Gym (now Gymnasium), RLlib from Ray, and Prime Intellect have democratized the low-level infrastructure for RL experiments. That means a wider community of developers can build custom environments and share benchmarks.

Just as cloud computing made it trivial to spin up servers, startups are trying to make it trivial to "spin up a training environment" for any business process. Instead of every company collecting its own data or building bespoke simulators, one can leverage an RL environment platform that already simulates, say, an Excel-like spreadsheet with formula tasks, or an email inbox for an AI secretary to manage, etc. Early companies attempting to platformize this for enterprises include [Osmosis](https://osmosis.ai/) and [Veris](https://veris.ai/).

The other trend is the advent of "RL-as-a-Service" (RLaaS) providers which are cloud platforms that handle the heavy lifting of running RL training jobs (massive parallel simulations, orchestration, etc.) for customers. If RL environments are the new "datasets," RLaaS providers are the new "model training cloud." They allow teams without deep researcher expertise to plug in an environment, define some reward structure, and train agents at scale. For instance, startups like Applied Compute, Veris, and Osmosis have launched managed platforms where an enterprise can upload its data/process and train a custom agent with feedback loops, without building an RL system from scratch. These services are often pitched for use cases like back-office finance ops but many are in the process of [discovering](https://www.seancai.com/philosophy/pre-seed_I_like) the right vertical use cases to tackle.

## New Players: Startups Selling RL Environments & Solutions

Unsurprisingly, there's been a boom of startups in the past 1–2 years aiming to capitalize on this trend. Many of them are U.S.-based and fresh out of stealth or early accelerators, quietly building the pieces of this "AI training" ecosystem. Some focus on the environment platforms themselves, others on providing forward-deployed solutions (i.e. custom RL projects) for enterprises, and quite a few blur the line between product and consulting.

This forward-deployed model that many RL environment companies take is significant. A recent quote I heard from a founder was: "Half of the RL environment companies nowadays are just fronts" - mostly a pretext to engage with enterprises and sell them AI-powered automation solutions that look like UiPath automations on steroids ([culprit #1](https://www.luminai.com/)). These startups often advertise an RL product, but their revenue looks more like a consultancy or "ML engineering as a service". They essentially arbitrage the shortage of AI talent: companies without top-tier ML teams will pay a startup to implement AI solutions for them, as will labs who want research eng firepower to be focus more on model training.

The economic logic is compelling given the demand as many enterprises know they need to automate tasks X, Y, Z, but they don't have the in-house experts to do it. A company like Forge can parachute a team of crack ML engineers (often ex-Big Tech or ex-research lab folks) to build a tailored RL agent for that task, using any and all available tools (custom environment, human-in-loop training, etc.). The startup can reuse some of this tech for multiple clients, gradually productizing it, but in early stages it's very services-heavy.

## What a winner can look like (vanilla)

While realistic RL environments are needed to push performance today, the high cost of building & maintaining environments: realistic, high-fidelity simulations or replicas are expensive to develop and keep up to date. To my knowledge, no RL env companies sell their products in an annual SaaS-like contract yet. This is expected, as revenue here cannot be contracted via annualized contracts as RL environments demand hasn't even been a year yet, and some other paradigm around model improvement may emerge in less the timeframe.

A default conclusion is that successful RL environment startups will move building systems that reduce cost, increase reusability, and, through building 100s of RL environments, figure out automation in RL environment creation or some new insight about building verifiers more easily for strictly non-verifiable outputs. Look for startups with unique takes and breakthroughs about doing this, and whose COGS are clearly decreasing over time.

Look for startups actively driving towards productized AI infra, with the understanding that RL environments and data packs may not always be around. This may be a startup that envisions building a "crowdstrike" type suite for mid and post training needs, and who is actively pushing the boundaries for what labs are and aren't willing to outsource today.

## What a winner will realistically look like

A drive to the bottom, as more miners flock to the data mines, should be expected. Currently, one can reasonably expect to sell an RL environment and plenty of in-line tasks to an lab for about 100-400k, depending on the complexity. At face value, RL environments testing real world domains that are oft tested, that current frontier models score poorly on, are what researchers look for in procurement. Better if the environments require more reasoning steps that have well defined deterministic evaluation tasks built around them, and are in high value white collar domains.

A note on definition - RL environments themselves are not commodity, but rather the knowledge for building RL envs is. Each RL env, if well crafted and beyond web browsing/computer OS, encode incredibly bespoke tooling, constraints, rubrics carefully crafted to be dynamically deterministic, etc. as seen in this tweet from [Alex Ratner](https://x.com/ajratner/status/1962677409754583523). The technical aspect won't change unless someone creates an engine for generalized high quality RL env creation - synthetic data?

When Anthropic churned some contracts from Surge due to cost (and players like Mercor moved up the stack to fulfill them, albeit at lower cost), some took this as thesis reinforcement. Look for startups that treat commoditization as opportunity to build other parts of the stack by capturing spend volume and interaction time with procurement teams.

Web 2.0 comparisons are apt. Where else have we seen businesses selling extremely commoditized services, sometimes non-recurring, to hyper-spenders, and then building durable businesses with talent dense, adaptable teams?

- When early AWS (EC2, S3) seemed like commodity hosting, but once inside dev workflows, db/analytics/ML infra/security could be sold. Maybe we see this with eval suites/monitoring/alignment tooling on the rl env side
- When Stripe began as a simple payment API (PayPal, Adyen, many competitors), and this got them into every startup's financial stack to do fraud detection/corporate cards/billing/treasury. RL envs can be simple one-off environments today but can upsell into model safety, reward design, pipeline interaction, etc. especially with greater vendor trust.
- When Datadog started with log monitoring, but grew to upsell tracing, infra monitoring, and APM. This is more general, but RL envs can do the same thing with full post/mid-training infra with whichever novel papers release in the next few months on innovation there.
- When Twilio started with SMS API, but grew to own entire developer comms budgets (Uber, Airbnb, Whatsapp), owning video, auth, email and becoming the default vendor. RL env startups can own earmarked "evaluation budgets" and then expand into broader budget categories on a lab by lab basis.
- Recently, when Mercor started as an AI recruiting company when GC did their seed in 2023, labs started hyper-spending on data in a way that went beyond Scale levels of sophistication. Early Mercor's data collection was more white collar talent arbitrage via their site, heavily indexed on pHD domain GPQA question set creation, but constant feedback loop and vendor trust with labs have enabled them to move into the data stack for mid/post training even though they started pre GRPO.

Adjacent to RL envs, multiple companies have popped up recently whose sole purpose is to acquire reasoning trace data from niche consumer applications - like games, consumer apps, and frontend browser interaction data. Echoes back to when barriers to accessing decentralized compute were going down, and a common tarpit idea was to build systems accessing excess compute consumers had at scale and selling to compute users, high fidelity data now is seeing the same thing.

## Today

First, there's a trend toward labs developing vertical-specific AI agents or models in secrecy. For example, it's been reported (off the record) that virtually all the major labs are currently training general-purpose financial agents/models that are adept at tasks like financial analysis, using tools like web browsers to retrieve information. This will likely extend into other white collar domains by market size.

In September 2025, OpenAI [announced "Grove",](https://openai.com/index/openai-grove/#:~:text=Today%2C%20we%E2%80%99re%20announcing%20the%20OpenAI,with%20peers%20in%20OpenAI%20Grove) a new program for nurturing AI startups at the earliest stage. While Grove is framed as a talent network and support program (not exactly an accelerator in the traditional sense), it signals OpenAI's intent to foster companies building on its tech – effectively seeding the product layer that OpenAI itself might not directly build. By providing mentorship, early access to models, and even a bit of funding or credits, OpenAI can guide founders to create applications in verticals like finance, healthcare, etc. and possibly prime domain expert teams for acquisitions later, as [predicted](https://vintagedata.org/blog/posts/model-is-the-product) by Doria.

RL env, human data, and RLaaS startups are starting to raise Series A/Bs and mature (Datacurve, David AI, Prime Intellect, others unannounced). The evolution of these companies, and the initial data vendor/RL env companies, will probably look something like this:

![A lot of different moving parts, entry points, and endgames!](https://www.seancai.com/images/philosophy/Evolution_of_RL_Data_Cos_(2).png)

*A lot of different moving parts, entry points, and endgames!*

The TAM is all of human labor, RL is hot today (but look into [continuous learning](https://cameronrwolfe.substack.com/p/direct-preference-optimization) / [RL for sparser domains](https://www.interconnects.ai/p/what-comes-next-with-reinforcement) with synthetic data generation next?) The maturation of human data markets and models reaching enterprise adoption maturity means that we need domain expertise, strong MLE talent, and inquisitive market selection more than ever.

RL as a service is becoming a reality with enterprise maturation. The [vertical approach](https://a16z.com/vertical-saas-now-with-ai-inside/) works, given the domain expertise. The [horizontal approach](https://www.seancai.com/philosophy/pre-seed_I_like) works, given excellent execution of FDE services-based discovery. The [diagonal approach](https://x.com/james406/status/1922654091269861610) works, given raw talent.

I'm generally excited by any incredibly AI-native team with strong MLE expertise and hiring networks building for large market verticals ([more here](https://www.seancai.com/philosophy/pre-seed_I_like)). I'm also excited by new enterprise applications for continuous training and synthetic data as it relates to IRL model performance - I invest at all check sizes pre-seed to A and my ethos is maximizing check size to helpfulness ratio. Read more on my [personal site](https://www.seancai.com/) or shoot me an email at [cr4sean@gmail.com](https://www.seancai.com/philosophy/) to chat more!

## Helpful additional reading:

1. Mary Meeker's 340 page report on trends in AI ([https://www.bondcap.com/reports/tai](https://www.bondcap.com/reports/tai))
2. Redpoint ai64 ([https://www.redpoint.com/ai64/](https://www.redpoint.com/ai64/))
3. Coatue deep dive into whether we're in an AI bubble (https://drive.google.com/file/d/1Y2CLckBIjfjGClkNikvfOnZ0WyLZhkrT/view)
4. Why AI is not a bubble ([https://www.derekthompson.org/p/why-ai-is-not-a-bubble](https://www.derekthompson.org/p/why-ai-is-not-a-bubble))
5. Mechanize Blog on RL ([https://www.mechanize.work/announcing-mechanize-inc/](https://www.mechanize.work/announcing-mechanize-inc/))
6. **Vintage Data / Alexander Doria - *The Model is the product*** ([https://vintagedata.org/blog/posts/model-is-the-product](https://vintagedata.org/blog/posts/model-is-the-product))
7. **Chemistry VC – *"RL Reigns Supreme"*** ([https://www.chemistry.vc/post/rl-reigns-supreme](https://www.chemistry.vc/post/rl-reigns-supreme))
8. **Felicis – *"Rocket Fuel for AI: Why Reinforcement Learning Is Having Its Moment"*** ([https://www.felicis.com/insight/reinforcement-learning](https://www.felicis.com/insight/reinforcement-learning))
9. Personal list of all notable human data/RL env companies I've seen ([https://www.notion.so/RL-Envs-Dump-29545bdf028180c4ae84f3be65973d10?source=copy\_link](https://www.notion.so/RL-Envs-Dump-29545bdf028180c4ae84f3be65973d10?pvs=21))