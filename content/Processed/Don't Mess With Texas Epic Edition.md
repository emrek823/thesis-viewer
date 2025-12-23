---
title: "Don't Mess With Texas: Epic Edition"
source: "https://healthapiguy.substack.com/p/dont-mess-with-texas-epic-edition"
published: 2025-12-12
created: 2025-12-16
description: "Ken Paxton v. Judy Faulkner, gerrymandering, culture wars, and of course, market definition all come to a head in the newest and biggest antitrust case yet."
tags:
  - "clippings"
---
### Ken Paxton v. Judy Faulkner, gerrymandering, culture wars, and of course, market definition all come to a head in the newest and biggest antitrust case yet.

![](https://substackcdn.com/image/fetch/$s_!AzIV!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F52cc6e60-d40f-45d9-9855-b4e96fc45885_1024x1024.png)

As one EHR lawsuit falls to the wayside and turns to ashes, yet another must rise like a phoenix in its place. And boy, we got a doozy. Texas, under Attorney General Ken Paxton, is throwing its Stetson into the ring and [suing Epic for antitrust and other claims](https://www.texasattorneygeneral.gov/sites/default/files/images/press/Petition_4.pdf).

The filing wastes no time setting the tone: Epic, Texas alleges, has become the immovable center of American health IT, exercising “dominant market power” over hospital EHR databases and using that position to extract monopoly rents, punish defectors, wall off competition, and lock providers inside data structures they cannot realistically leave. The introduction spans all the greatest hits: patient data as “the backbone of U.S. healthcare,” Epic controlling systems that house more than 90% of U.S. citizens’ medical records, and the idea that once a hospital’s data is in an Epic database, “it is almost impossible to get out,” with migrations taking up to a decade and costing over one billion dollars.

Texas messages this not just as a technical dispute, but as a statewide economic and consumer harm (hence why they are filing the claims):

- Delayed access to medical records
- Hospitals unable to meaningfully switch vendors
- Start-ups starved of interoperability
- Parents allegedly prevented from directing their children’s health data due to how Epic configures proxy access settings for Texas providers

One of these things does not sound like the other! But in short: Paxton is trying to paint Epic not merely as a dominant EHR, but as a vertically integrated data gatekeeper whose conduct violates Texas antitrust statutes, the DTPA, and the state’s medical records privacy law.

This case is a veritable treasure trove of takes, so let’s dive in.

### Choice of Venue

Something that stuck out to me: Texas could have filed this case in federal court, but chose not to invoke any federal Sherman Act claims. The petition expressly brings claims under the Texas Free Enterprise and Antitrust Act (TFEAA, which is annoyingly close to TEFCA as an acronym) and the Texas Deceptive Trade Practices Act:

> *This case could not be filed in and is not removable to federal court. There is no diversity of citizenship between the parties, as Texas is not a citizen of any State. See Louisiana v. Union Oil Co. of California, 458 F.3d 364, 366 (5th Cir. 2006). And no federal claim is raised in this petition. See American Airlines, Inc. v. Sabre Inc., 694 F.3d 539 (5th Cir. 2013).*

#### Getting to discovery

By avoiding federal claims, Texas prevents Epic from removing the case to federal court. I would surmise that in state court, Texas at least keeps the interpretation of those laws in the hands of elected state judges rather than lifetime-appointed federal judges, which is beneficial.

I am not a lawyer and, even more importantly, I am not a Texan lawyer. So the intricacies of TFEAA in comparison to the Sherman or Clayton acts are a statutory bridge too far for this piece. There’s certainly [some harmonization](https://law.justia.com/codes/texas/business-and-commerce-code/title-2/chapter-15/subchapter-a/section-15-04/?utm_source=chatgpt.com) with federal antitrust jurisprudence, but harmonization is not the same as being bound to federal pleading standards or procedural rigor. This is where I get particularly shaky, but I do wonder if the strategy is to avoid the full weight of federal procedure—especially the strict [Twombly/Iqbal](https://en.wikipedia.org/wiki/Twiqbal) plausibility requirements that have crushed other antitrust cases at the motion-to-dismiss stage.

If Texas antitrust law gives plaintiffs even a slightly softer landing (whether on market definition, plausibility, or the evidentiary burden needed to survive an initial challenge), then filing in state court dramatically increases the odds of getting to discovery, which is where monopolization cases often become dangerous for defendants. And Texas certainly leaves that door open for themselves:

> *This petition is a non-exhaustive list of Epic’s recent anticompetitive acts. Epic may have undertaken additional anticompetitive conduct to be uncovered in discovery and may undertake further anticompetitive conduct in the future in response to technological and regulatory change.*

#### Consolidation

Another critical angle here: filing in Texas court allows the AG to avoid any possibility of coordination or consolidation with the existing federal antitrust cases against Epic. While Particle focuses on “Payer Platforms” and CureIS focuses on “Managed Care Middleware,” all three lawsuits allege the exact same core anticompetitive conduct by Epic:

- Epic’s control over EHR data
- Alleged exclusionary conduct
- Interference with third-party platforms

Epic could have sought transfer or multidistrict litigation (MDL) consolidation based on overlapping factual predicates. Keeping the case grounded solely in Texas statutes eliminates that risk and ensures that Texas can litigate on its own terms: before a local judge, under a favorable legal regime, and on a timeline that the AG controls rather than one shaped by federal multidistrict proceedings.

#### Optics

The optics here also help. In federal court, this would look like a technical antitrust battle. In the Texas court, it can be framed as a big-tech, out-of-state monopolist harming Texas patients and providers, which is a far more advantageous story for an elected attorney general to tell. A Texas state court is the most favorable venue to litigate a specific question of Texas state statutory interpretation, especially when that is a politically charged one, as we see here: the violation of the Texas Health and Safety Code regarding parental access to minors’ medical records. It helps to have a sympathetic jury pool.

The result is a case that is legally cleaner for Texas, strategically insulated from federal influence, and narratively freer.

### Ken Paxton

![Gabriel Aponte/Getty Images for Concordia Summit](https://substackcdn.com/image/fetch/$s_!VoQ4!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d9a3145-b2c0-48f5-928f-30034d27feca_2048x1246.jpeg)

No meme here. This guy incites enough emotion for people as is.

[Ken Paxton](https://en.wikipedia.org/wiki/Ken_Paxton) is a unique character worth noting in all this. As mentioned, he’s the Attorney General of Texas and a (highly visible) conservative political figure known for using the state’s legal apparatus to take on powerful institutions ranging from the federal government in prior administrations to Big Tech. First elected in 2014, Paxton has built his career on high-profile litigation, frequently leading multistate lawsuits challenging federal regulations, social media companies, and corporate practices he frames as harmful to consumers or state sovereignty.

Paxton’s tenure has been marked by both ambition and controversy. He has faced his own legal battles, including state securities-fraud charges and [an impeachment by the Texas House in 2023](https://en.wikipedia.org/wiki/Ken_Paxton#Texas_House_investigation_and_impeachment) (followed by acquittal in the Texas Senate). At the same time, he has staked out cultural and political ground on issues like Trump’s 2020 election fraud claims, parental rights, immigration, and consumer protection that often dovetail with broader national conservative themes.

Now, Paxton is also [running for the U.S. Senate](https://www.kxan.com/news/texas-politics/meet-the-candidates-running-to-be-the-next-u-s-senator-from-texas-ken-paxton/), seeking to elevate his political profile beyond Texas. That campaign context matters: bringing a high-impact antitrust and consumer-protection lawsuit against a major tech vendor like Epic fits neatly into both his legal posture as AG and his broader political narrative. It gives him a platform to cast himself as a fighter against concentrated corporate power and a defender of Texans’ rights (messages that resonate well with the Republican primary electorate he’s courting).

Given few themes animate that base more reliably than parental rights, that framing is not incidental. By embedding a parental-rights storyline into an antitrust action, Paxton transforms what might otherwise be a complex, technical dispute about EHR data flows into a values-aligned narrative that resonates emotionally with Republican primary voters.

In that sense, the lawsuit functions on two levels: legally, it targets Epic’s market power in healthcare data infrastructure, but politically, it gives Paxton a marquee fight in which he can claim to be protecting Texas families against an out-of-state corporation. For a Senate campaign that depends on energizing a parental-rights constituency as part of the cultural war debates about transgender youth, medical decision-making, and state authority. That narrative is not a helpful accident. It’s the point.

### Market Definition

![](https://substackcdn.com/image/fetch/$s_!ev75!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32317f48-78cd-454b-bcce-fc5c41630105_640x947.jpeg)

While I’m actually sympathetic to many of the claims Texas posits, that’s immaterial to start. If I’ve said it once, I’ve said it a thousand times: [Antitrust is all about market definition](https://healthapiguy.substack.com/p/particle-v-epic-the-fight-over-market). Here’s what Texas laid out for us:

> *35\. Courts define relevant product and geographic markets to reflect “commercial realities” and identify affected lines of commerce. See Brown Shoe Co. v. United States, 370 U.S. 294, 336- 37 (1962). There can be multiple relevant markets covering the same or similar products and services, and markets need not have precise metes and bounds. As shown by practical indicia, the structure of the industry, the behavior of market participants, Epic’s testimony and internal documents, and economic analysis, there are at least three relevant markets: EHR Database Software for Acute Care Hospitals, EHR Database Software for Academic Medical Centers, and Epic-EHR Applications. Epic dominates the first two Database Software markets and uses its dominance in those markets to monopolize the third: to access to patient data stored in hospital databases architected by Epic-EHR Database Software, Application developers must deal with Epic-not even other EHR Database Software providers are available substitutes. The costs for hospitals of switching to another EHR Database Software provider are prohibitive.*

I find this case to be much cleaner than Particle or CureIS. Both defined and focused on hyper-narrow aftermarkets (”Payer Platforms” and “Managed Care Middleware”) that courts have and will view skeptically. Texas, whatever its flaws, at least starts from something resembling the actual purchasing decision: hospitals buying EHR systems. And the three-market structure tells a leveraging story that maps onto existing antitrust frameworks. The problems are real, but the scaffolding is sturdier.

However, these definitions are still problematic for Texas’ chances on multiple fronts.

#### Commercial Realities

The first problem is fundamental: the commercial reality (Brown Shoe’s lodestar for market definition) is that there is no standalone database market to segment in the first place. Maybe I am dramatically out of the loop with certain hospital buying trends, but “EHR Database Software” is not a product anyone actually purchases! Hospitals don’t buy a standalone database engine - they buy a full-stack EHR system with clinical, billing, documentation, workflow, and data layers bundled together.

Texas concedes this point and frames it as a bundle:

> *Epic does not allow its customers to buy its EHR Database Software databases as standalone products but instead requires Epic customers to buy Epic EHR Database Software databases together as a bundle*

Wait? Isn’t this [what we talked a few months ago](https://healthapiguy.substack.com/p/the-system-of-record-on-trial) in regards to Teradata v. SAP? It sure feels like the changes to the tying precedent might be useful to Texas here.

Not quite. In Teradata, the “tie” was obvious because there was a “before” and “after.” SAP customers originally used SAP’s ERP with Teradata’s database (separate products). Then, SAP forced them to migrate to SAP’s HANA database (the tie). The history proved the products were distinct.

With Epic, there is no “before.” Epic’s database (Chronicles) and its applications have effectively always been sold as a single, integrated “monolith.” Hospitals have never bought Epic’s clinical apps with an Oracle database backend.

Texas unintentionally hurts itself a bit here. The petition explicitly attempts to separate the “Database” from the “Applications” to create two distinct antitrust markets. While doing so, Texas attempts to show what “EHR Database Software” looks like. However, the visual evidence they provide undermines that distinction entirely:

![](https://substackcdn.com/image/fetch/$s_!V59K!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0f8f789f-2ac3-4f63-b4af-f25a629c9411_1306x732.png)

Texas explicitly categorizes that exact same software functionality as an Application, not the Database, clarifying that nurses use “Epic Inpatient” (the app) to enter vitals (the exact type of “Flowsheet” data shown in the screenshot they earlier claimed was the “Database” interface). By using a screenshot of the application to illustrate the database, Texas might have inadvertently suggested that the two are experienced by the user as a single, unified product.

If the customer must buy the full system, then the “commercial reality” is probably a systems market, not a component market.

#### Market Gerrymandering

![](https://substackcdn.com/image/fetch/$s_!XjLU!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F114ccbb3-57f0-44ae-b26e-5d64249914e0_500x756.jpeg)

Courts are extraordinarily skeptical of hyper-segmented markets unless there is overwhelming evidence of distinct pricing, customers, and competitive dynamics. In this [Neo-Brandeisian](https://en.wikipedia.org/wiki/New_Brandeis_movement) era, things are changing, but it’s still an uphill climb. This highlights the central problem with antitrust against systems of record: you need a narrow enough market to show meaningful market power, but since U.S. v. Oracle, courts have been deeply hostile to anything that looks like gerrymandering a market definition just to manufacture dominance.

![](https://substackcdn.com/image/fetch/$s_!OU50!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F96b28b0d-621d-4639-aef8-f8e475cc4139_1206x652.png)

This is a work of art

I’ve been waiting eagerly to see how the first pure-play antitrust case against Epic would attack this. Alas! They went a little too far, in my opinion. Carving the EHR universe into two separate “Database Software” markets (Acute Care Hospitals vs. Academic Medical Centers) is going to raise eyebrows. Nothing in Texas’s petition demonstrates that academic medical centers face materially different substitution patterns or competitive constraints than other large health systems. If anything, the commercial reality runs the other direction: Epic and Oracle bid against each other across *both* segments, and hospitals view those systems as broadly interchangeable (even if imperfect substitutes).

#### Market Measures

The whole point of narrowing the market is to get to the point that you have a convincing narrative of market power that actually constrains buyers’ choices.

“Lives covered” (patient records), while optically a good choice for being high, is the wrong metric for a B2B software monopoly claim because it relies on a faulty assumption of exclusivity. A single patient does not belong to a single hospital. Over a year, a patient might visit five different health systems running five different EHRs (e.g., an Epic hospital for surgery, an Oracle Health clinic for primary care, and a MEDITECH ER for an emergency in a rural setting). In this reality, the “total addressable market” of patient records isn’t 100% of the US population, but some much higher number.

Perhaps it would strengthen things to understand what other EHRs have relative to Epic (i.e. is Oracle Health 70% of the patient population? Is MEDITECH 40%?). But in reality, more traditional metrics like market share by bed count or hospital count in each category are cleaner. That could be the short line that’s redacted on line 54, but I get the sense they’re ducking around it in “EHR Database for Acute Care Hospitals” purposefully. From [DarkDaily](https://www.darkdaily.com/2025/06/04/epic-expands-ehr-market-share-as-rivals-lose-customers/) citing KLAS:

> *Among large health systems—defined as those with more than 10 hospitals—KLAS noted the following market share for EHR vendors:*
> 
> - *Epic—48%.*
> - *Oracle—27%.*
> - *Meditech—15%.*
> - *All other EHR vendors—10%.*

These are challenging metrics in a traditional antitrust sense that could be fatal to that categorization. This is a primary reason I find our antitrust precedent to be ill-suited in litigating systems of record: those markets tend to converge on duopolies and triopolies, even as the solutions (both market leaders and beyond) fail [the SSNIP test](https://en.wikipedia.org/wiki/Small_but_significant_and_non-transitory_increase_in_price).

Meanwhile, the market definition for “EHR Database Software for Academic Medical Centers” is more favorable to Texas’s theory. The petition notes:

> Over \[redacted\] of Academic Medical Centers use Epic’s EHR Database Software, including every health system on U.S. News & World Report’s “Best Hospitals” list and “Best Grad Schools” for “Med Schools Research,” as indicated below
> 
> ![](https://substackcdn.com/image/fetch/$s_!Mubk!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F329701c8-813a-44a6-87aa-b3b17d49b061_1236x610.png)

If Texas had led with this market, the story would be cleaner: a well-defined buyer class with specialized needs, limited substitutes, high switching costs, and a dominant vendor whose share sits closer to true monopoly levels. That’s a very different narrative than the stretched “EHR Database for Acute Care Hospitals” framing. So why muddy the waters with two definitions?

The answer is that Texas needs both markets to make the broader story hang together. The academic medical center segment is where Epic’s dominance is clearest, but it’s too narrow to sustain the full monopolization claim. To allege exclusionary conduct with economy-wide effects (foreclosed developers, constrained data access, statewide harm), Texas must also rope in the much larger acute-care market. The problem is that by stretching the definition to fit the narrative, Texas dilutes its strongest case with weaker ones, giving Epic (and any court) an easy foothold to push back.

#### Aftermarkets

The third market (“Epic-EHR Applications”) is where Texas’s theory is actually strongest, and it’s telling that they buried it rather than led with it. This is a classic platform/aftermarket story: Epic controls the database layer, and any application that needs to access patient data stored in an Epic environment must go through Epic’s APIs, agree to Epic’s terms, and operate at Epic’s discretion. That’s not a monopoly over EHR sales, but a monopoly over access to data already stored in Epic systems. Here, the relevant market isn’t hospitals choosing vendors, but developers who have no choice but to deal with Epic if they want to reach Epic’s installed base.

This framing sidesteps the market share problems that plague the database definitions. You just need to prove that for Epic’s customers, there’s no substitute for Epic’s permission. That’s a gatekeeper theory, not a market share theory, and it’s far more defensible. It’s something that so many can empathize with, as it’s [endemic to not just Epic, but all EHRs and systems of record more broadly](https://healthapiguy.substack.com/p/there-will-be-bundling).

But Texas couldn’t lead with it, because the applications market only matters if Epic’s upstream dominance is established first. The leveraging story requires a monopoly to leverage. So Texas is stuck building a shaky foundation (the database markets) to support a sturdier structure (the applications market).

### The Claims

We can more fully examine the claims about the behaviors of Epic in a subsequent post. This post is long already and they’re not immediately important, in that without a sustainable market definition to ground the monopoly power claims, the specific conduct allegations are legally irrelevant. Thus, the motion to dismiss will focus on market definition, Twombly or not, and that’s the critical next step of the case.

The claims are also heavily redacted in order to protect commercial details and obfuscate apps and/or health systems that may have aided the state with evidence. I respect that, but it’s hard to have takes when it’s all ivory tower hypotheticals, void of the ground truths and fun details that fuel the best takes.

However, two claims have clear, big-impact narrative implications that I wanted to detail here.

#### Parental rights

![](https://substackcdn.com/image/fetch/$s_!8giY!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2bada81a-2076-4cad-9b39-1ee84fb81b93_700x689.jpeg)

As mentioned above, there’s one claim that sticks out like a sore thumb in the complaint: Texas devotes a surprising amount of attention to parental access to minors’ medical records. Specifically, Texas alleges that Epic’s default proxy-access configurations impede parents’ ability to see their children’s health information. From an antitrust standpoint, this is an odd detour! Parental proxy flows have nothing to do with monopoly power, market foreclosure, or exclusionary conduct. But from a *political* standpoint (especially for an Attorney General now running for the U.S. Senate), it’s an unmistakable signal.

“What are parental rights, and why are they politically charged, Brendan? They seem fairly benign” is a decent question, so I’m glad you asked. In 2025, “parental rights” is not a neutral phrase. It has become a defining organizing principle of conservative politics, encompassing fights over school curricula, gender identity, pronoun policies, adolescent consent, reproductive health, and (critically for this case) access to minors’ medical information. The core political narrative is that parents are being cut out of decisions about their children by opaque institutions: schools, hospitals, tech companies, and government regulators.

Health tech is overwhelmingly bipartisan historically, with initiatives continuing across administrations. But in recent years we’ve seen that start to fray. The Biden Administration inserted or proposed a number of provisions into certification criteria that had culture wars implications:

- Requiring certified EHRs to support “sex assigned at birth” and “gender identity” as distinct data fields in USCDI
- Mandating support for preferred names and pronoun documentation
- The “Protecting Care Access” information blocking exception to allow reproductive healthcare to be shielded from state law enforcement in the wake of Dobbs

There’s a reason [Mike Pence came out of the woodwork last year just to comment on HTI-2](https://www.linkedin.com/posts/brendan-keeler_with-all-the-private-action-and-cases-lately-activity-7258915737950461952-ks8x). As mentioned in “ [The Culture War Comes for EHRs](https://healthapiguy.substack.com/p/the-culture-war-comes-for-ehrs) ”, conservative think tanks have been lobbying for government intervention here:

> *[Do No Harm](https://donoharmmedicine.org/), a conservative activist group focused on gender ideology issues that previously targeted DEI policies and gender-affirming care in hospitals, now seems to be turning its sights on EHRs (specifically targeting **[Epic](https://www.linkedin.com/feed/update/urn:li:activity:7389280536898416640/#)** and **[Oracle](https://www.linkedin.com/feed/update/urn:li:activity:7389280536898416640/#)**).*
> 
> *They released [a report about proxy access](https://donoharmmedicine.org/2025/10/28/electronic-health-records-parental-access/) that argues EHRs have enabled hospitals to restrict parental access to adolescent medical records beyond what state and federal law requires, particularly in areas related to gender identity, sexual health, and behavioral care. Their claims are that EHR vendors are not “neutral platforms” in that hospitals are implementing vendor defaults, not laws.*

Underneath the hood, it’s all about trans kids. The political energy around “parental rights” today is overwhelmingly concentrated on questions of adolescent gender identity, especially who can access information about gender-affirming care, mental health treatment, or exploratory conversations documented in the clinical record. Proxy-access defaults (honestly the most boring, arcane settings in the EHR) become a flashpoint when portrayed as shielding minors from parental oversight.

Groups like Do No Harm have tapped into that sentiment and are now repositioning EHR vendors as quasi-regulators who must be confronted. Their argument is straightforward: hospitals are not misinterpreting the law; they are allegedly following Epic’s and Oracle’s default configurations, which these groups claim improperly restrict parental access to sensitive information.

Putting politics aside, it rests on flimsy argument: that hospitals “aren’t resourced” to configure their own systems. Every hospital running Epic or Oracle has administrative staff. These teams routinely configure thousands of settings: order sets, note templates, billing rules, access controls, proxy flows, sensitive-information flags, you name it. Suggesting that hospitals *can’t* configure adolescent proxy access is absurd when they configure everything else in the system every single day.

So why is this in here? Beyond the optics for Paxton, the Trump administration has not been shy about putting pressure on institutions to achieve its social and ideological policy goals. Culture-war lawsuits are polarizing, but antitrust lawsuits? They’re bipartisan catnip in this era.

I don’t buy the “ [why is this the headline grabber?](https://www.linkedin.com/posts/matthewsegar_%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%85%F0%9D%97%AE%F0%9D%98%80-%F0%9D%97%B7%F0%9D%98%82%F0%9D%98%80%F0%9D%98%81-%F0%9D%97%B3%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B2%F0%9D%97%B1-%F0%9D%97%AE%F0%9D%97%BB-%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%B6%F0%9D%98%81%F0%9D%97%BF%F0%9D%98%82%F0%9D%98%80%F0%9D%98%81-activity-7405155268788924417-TTJl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAPkL9sB4lo5Yq0uDubv8utDDC3_gQq7qQY)” argument. It is completely divergent and unrelated to the core claims about competitive markets. It’s the legal sugar that helps the political medicine go down. Given how orthogonal it is to the other content, the moment Texas chose to include it, it was guaranteed to *become* the headline.

So wrapping it in antitrust makes it more palatable across the board. Everyone, from progressives worried about corporate power to conservatives skeptical of Big Tech, can nod along to the idea that a dominant software vendor might be overreaching. By embedding a parental-rights grievance inside a monopolization framework, Paxton transforms a socially divisive claim into something that looks like neutral economic enforcement. It gives legislators, donors, and media outlets a policy-safe justification (“we’re protecting competition!”) for what is, at its core, yet another cultural intervention.

#### Non-Competes

![](https://substackcdn.com/image/fetch/$s_!mm0m!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2b856d6b-53f5-4ee8-9cf2-2fda5e2ea387_680x855.jpeg)

The petition alleges that Epic suppresses competition by conscripting employees, customers, and third-party developers into restrictive “no-hire” and non-compete agreements. Epic requires its employees to sign “Epic Employee Commitments” containing non-compete periods of at least one year and extending to two years if the employee receives stock.

Texas argues these restrictions are unreasonable because they are not limited to companies the employee actually worked with, have no geographic boundaries, and effectively lock skilled workers out of the entire healthcare IT industry for years. Epic enforces these agreements not through litigation but by threatening to revoke software access credentials, rendering former employees “unemployable” at hospitals and healthcare organizations that depend on Epic systems. The lawsuit names ten Texas-based firms on Epic’s restricted list and characterizes these practices as illegal restraints of trade.

I’m sympathetic to these arguments, but less because of seeing them as evil functions of monopolies and moreso because I think non-competes in almost all cases are categorically anticompetitive. They are innovation-limiting barriers that distort labor markets, suppress talent mobility, and slow down the natural diffusion of expertise. As a tool, they are blunt objects aiming to achieve policy goals (ostensibly safeguarding trade secrets and recouping human capital investments) that are much more easily obtainable through more surgical tools like trade secret law, NDAs, and confidentiality agreements. The best way to retain talent is to be an employer worth staying at.

My dogmatic antipathy is not a view that Texas shares! Just months before filing this lawsuit, a federal court in Texas served as the primary venue for killing the proposed nationwide ban of Lina Khan’s FTC on non-competes. In [Ryan LLC v. FTC](https://www.courtlistener.com/docket/68463428/ryan-llc-v-federal-trade-commission/), a Northern District of Texas judge set aside the rule, holding the FTC lacked authority to issue it. Texas business groups intervened to defend companies’ rights to use these agreements, arguing they are essential for protecting trade secrets and business investments. On the federal stage, Texas positioned itself as the savior of the non-compete.

Yet in state court against Epic, the Attorney General argues that Epic’s specific use of non-competes constitutes an illegal restraint of trade. The distinction the AG would likely draw is between “standard” non-competes (which Texas law enforces if reasonable in scope and designed to protect legitimate interests) and “monopolistic” non-competes, which the AG characterizes as weapons to lock up a specialized labor pool and starve competitors of talent rather than to protect genuine trade secrets.

Texas sprinkles in pro-labor rhetoric (quoting aggrieved workers, invoking ‘golden handcuffs’) but make no mistake - the legal theory is pure competition. Workers aren’t protected because their freedom matters; they’re protected because their captivity distorts markets. Workers are cogs and mere inputs to a competitive market, not as rights-holders whose freedom of movement matters in itself.

### Conclusion

This lawsuit is a strange beast: legally fragile in many ways, but politically potent. It is certainly the strongest legal challenge Epic has faced thus far and has real merits. While the antitrust theories regarding “Database Software” may crumble under judicial scrutiny, the “Aftermarket” and exclusionary conduct claims touch on real frustrations felt by developers and health systems nationwide. But make no mistake: this is not a pure attempt to fix healthcare interoperability. It is a weaponized regulatory action designed to blend consumer protection with culture-war campaigning.

Ken Paxton has decided that the best way to run for the US Senate is to run against Epic. Whether the case survives the docket or not, the message is clear: the era of Epic’s unquestioned dominance is over, and the era of the EHR as a political football has just begun.