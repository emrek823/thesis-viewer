---
source_pdf: "https://drive.google.com/file/d/1S9gRwJkD5HfsFWQOyO5h6iohomUCwUTJ/view?usp=drivesdk"
drive_folder: "Research/Expert-Calls"
type: research

ingested: 2025-12-22
original_filename: "Former VP of Technology Strategy and Innovation at The Cigna Group _ Cotiviti Holdings, Inc. _ Tegus.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1S9gRwJkD5HfsFWQOyO5h6iohomUCwUTJ/view?usp=drivesdk)

# Edifecs - Former VP of Technology Strategy and Innovation at The Cigna Group

**Interview conducted on August 29, 2025**

## Topics
- Payment Integrity
- CAPS Platform
- Claims Processing
- EDI Layer
- Provider Contracts
- Contract Management
- Payer Tech Stack
- Medicare

## Summary
The conversation between the Tegus Client and the expert delved into the evolution of the tech stack on the payment integrity side, focusing on the flow of data through the system, the role of various vendors, and the challenges of accessing medical record data. They also discussed the importance of tight integration with the underlying claim system, the potential for vendors to move upstream in the process, and the need for provider-payer contracts to enable access to EMR data at the EDI layer. Additionally, they explored the accessibility of EMR data in the healthcare industry, the challenges of integrating clinical and administrative data, and the concept of a third-party entity to streamline claims adjudication.

## Expert Details
**Former VP of Technology Strategy and Innovation (Claim, Enrollment, Billing, Fulfillment, EDI &#x26; Production Support) at The Cigna Group, leaving April 2025.**

The expert focused on Claim, Enrollment, Billing, Fulfillment, EDI &#x26; Production Support. The expert optimized technological infrastructure, drove innovation, and catalyzed organizational growth through strategic technology solutions.

**Sean Doolan**
**DO NOT COPY**
**sd@virtuevc.com**

Before that role, the expert served as VP of Technology (Claim, Enrollment, Billing, Fulfillment, EDI &#x26; Production Support) at The Cigna Group. The expert was responsible for overseeing the technological infrastructure and operations related to claims processing, enrollment, billing systems, fulfillment services, Electronic Data Interchange (EDI), and production support.

### Q&#x26;A

**Q: Describe your role and responsibilities as it relates to the Payment Integrity space.**
**A:** I led technology strategy and solutions for all cost containment and payment integrity for a MA plan.

**Q: Approximately how many FTEs do you have?**
**A:** MA has 6K employees across ops/tech.

**Q: What Payment Integrity technology tools or platforms do you have experience working with?**
**A:** Cotiviti, Zelis, Claims extend, Change /Optum, Evicore, Conduent, HMS.

**Q: Do you have experience dealing with clearinghouses? If so, which?**
**A:** Availity, Optum, Zirmed, Office Ally, Waystar, PNT data, Smart Data Solutions.

**Q: To what extent do you have experience dealing with the payment integrity stack?**
**A:** Had responsibility for both technology and operations in this space.

----

**THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.**

----

**tegus    Page 1 of 9**
**byAlphaSense**
**Doc ID: U:1AWR-T:39OL**


---


# Document Content

## Q&#x26;A Session

### Q: To what extent do you have experience with the grievances and appeals department?
### A: Had responsibility for both technology and operations in this space.

**Client**
Would love to start with your background, have some questions about the payer side tech stack, and then float some new ideas for you for your reactions to the questions. Maybe we can start with your background. That'd be great.

**Expert**
Yeah, absolutely. I got in the payer space about 15+ years experience heavily on the Medicare side, some Medicaid, a little bit of ASO, heavily on core claim platforms as both technology and operations executive across the board.

**Client**
Got you. Can you talk a little bit about your experience on the payment integrity side of the world?

**Expert**
Yeah. I led both vendor oversight and management of those services, as well as the underlying core claims platform as both the technology executive, vetting the solutions, implementing the solutions, but also managing the deliverables from these partners, from either vendor oversight and management, operating reviews. When I was a COO, obviously, finding the solution partners to fill those gaps and needs for us and implementing them.

**Client**
Got it. Did you do that on behalf of one plan, or were you doing that for several plans?

**Expert**
While I was at Cigna, but then a period of time I was a COO for another MA plan, etc., so I got experience through the years in this domain.

**Client**
Great. Maybe first we start with, if you could walk us just through the rough evolution of the tech stack on the payment integrity side. What I mean by that is starting from the moment data leaves the provider, how that flows through the system. I think we have a general sense of it, so maybe more focus on how things have changed over the last few years. Is there part of the tech stack that's growing relative to others? That would be helpful.

**Expert**
You're talking about from the time the provider submits the claim?

**Client**
Yes.

**Expert**
Okay. You're familiar, go through the practice management system to the clearinghouse, clearinghouse sends it to the plan's gateway, receives it, process sends it to the underlying CAPS platform. CAPS platform then processes the claims and for the most part, it's either going to auto adjudicate or if it requires some auto adjudicate, deny, or pend. If it's pending it for repricing, for example, as part of the payment integrity solution set, it's going to queue it up. Depending on if you're doing a prepay or postpay. What pathway do you want to go?

----

### Footer
THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

### Page Information
- tegus    Page 2 of 9
- byAlphaSense


---


# Document Content

## Conversation Transcript

**Client**
No, that's helpful. Actually, I'd be curious, what does CAPS stand for?

**Expert**
Core administrative processing system. CAPS is your underlying claim system.

**Client**
Who provides that? What vendors provide that right now?

**Expert**
You got HealthEdge, you got Cognizant with their Facets and TriZetto, etc.

**Client**
Got it. That sits before things go to a Lyric or a ClaimsXten?

**Expert**
Yes, because it's got to go to the claim system first, and then once it's in the claim system, if it's a prepayment, like ClaimsXten is, it'll then go into the ClaimsXten workflow based off one of those pended queues up there or something like Cotiviti, and some of these others that are prepay because they're part of the workflow in trying to get the claims worked.

Now, if it's out of network and you send it out that, typically, is like a batch file exchange. To your question earlier, more and more are being driven via APIs. As they occur, they're being queued up and being transacted by the vendors and sending the results back for adjustments on the underlying claim system, but that's like prepay. If it's postpay, it's a different data cycle in process.

**Client**
I see. I'm curious why there are so many vendors. For example, if you had the CAPS and you provided that, what precludes you from being also the prepay vendor?
**DO NOT COPY**
sd@virtuevc.com

**Expert**
There's nothing that per se, like if you're postpay. Ideally, a lot of these vendors want to move upstream to be in it. A lot of it is those vendors have more direct and tighter integration with the underlying CAPS platform.

**Client**
I see. You're saying a Lyric or any of the payment integrity players, they would be already tight with the CAPS.

**Expert**
Yeah, exactly. Like your example of ClaimsXten. ClaimsXten is very tightly integrated into Facets and QNXT. For that case, it's just a very easy activity to go after.

**Client**
I see. Why wouldn't Facets or HealthEdge decide to say, "You know what, why are we passing this? All data comes from us."

**Expert**
Great question. You're starting to see some of that in the marketplace today. Are you familiar with Cotiviti?

**Client**
Yes.

----

## Footer

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

**Page 3 of 9**
**by AlphaSense**


---


# Document Content

## Expert Discussion

**Expert:** Cotiviti, for example, just acquired Edifecs. They're going after those transactional because they receive it from EDI in and out. They're using that to build a broader solution to make it of more value. The underlying CAPS platforms have abilities to do these claim edits. The problem is a lot of these are tied to the ability to effectuate configurations within the underlying claims platform, if that makes sense.

**Client:** Okay. Edifecs then, in that case, are they the CAPS provider or no?

**Expert:** No, Edifecs is an EDI gateway solution.

**Client:** Got it. If they're the EDI gateway solution, that sits before the CAPS then?

**Expert:** Correct. Before and after. It's like all the claims coming in, eligibility coming in, claims coming in, institutional, professional, dental, whatever it is, then on the back end, you're sending out eligibility sometimes to partners, but you're also more importantly doing payments. You're sending out the EOPs and the payments A35s to the provider.

If you know what came in, what it was billed at, and what it was paid for, then you can start reconciling as you start looking at price transparency and some of those things, and then start calibrating your claims configuration if that makes sense.

**Client:** Okay. Cotiviti, in my mind, sits largely in postpay complex things. All of a sudden, they're making this move to go really upstream. Are they trying to essentially catch things before they even leave into the CAPS system?

**Expert:** They're trying to get to before it even comes in to the CAPS system.

**Client:** Yeah, before it even comes into the CAPS system. Do you think they'll be successful in that? How does the data architecture and the data piping work here?

**Expert:** Can they be successful? Absolutely. There's something called the SNIP level edits one through seven on the upfront. SNIP seven is your custom rules. Very similar to some rules you can put in the claim system while it's not as detailed because you've got to put it in the contracts and all that stuff you're not putting on the EDI gateway. You can do some things up there that can help.

Moving it upstream is easier because ultimately, you're excluding it before it gets to the CAPS system. Once it gets to the CAPS system, you're either going to configure it within the business rules and configurations on the claim system to get the prepay edits, or you're going to have to build the integrations to these third parties like ClaimsXten, etc., where you're pending the claim, sending it to them. They send it back the API to update the underlying CAPS platform with the adjustments to the claim, and then be processed and cycled through the normal workflow.

Yeah, the more upstream, the better. Ideally at some point, you would think they would make it a lot easier, especially with AI/ML as they're mining all the claims, they should be learning from those things, or even if they use a third-party downstream, they should be effectuating those changes and insights that are being provided so they can reduce future payouts and leakage. The biggest challenge is just capacity. They just...

----

## Footer

**THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.**

----

**Page 4 of 9**
**by AlphaSense**


---


```markdown
# Document Content

## Conversation Transcript

**Client**
I see. In the business model from Cotiviti, for one, I understand they're contingency based. If they go this upstream, can they carry on contingency still or are they cannibalizing themselves if they do a lot of work up front? I'm just trying to figure that out.

**Expert**
Cotiviti, yes. By acquiring, for example, what they've done with Edifecs. For them, by moving upstream, they're just moving their revenue model from the right to the left, right where Cotiviti was joining but now they're moving it upstream to Edifecs, which they could probably charge a little more because it saves them time and money.

**Client**
I see. Would it be fair to say that the rich activity that Cotiviti does, applies their policies, etc., could they move all those policy insights up into the Edifecs layer that sits upstream? Are they able to do that? I'm curious do they have the same baseline data that they would have at Cotiviti level and that they could make judgments upon there?
Could they move that same level of richness to the Edifecs level? For some reason, I'm under this impression that the further down to postpay you get, the more access to medical record and richer data you get in order to make those kind of things, and the more upstream you are, the less data you have. Correct me if I'm wrong.

**Expert**
Yeah, you're talking about because of the nature of working the claim. For example, if it gets pended and they do like "Hey, I need more medical information." They're going to queue that up, but most prepay vendors don't have that information either because that's further enriching it. At point of interaction, for example, for prepay, they're just going to be working with what they have on that initial claim.
If they need something to refine to say, they're making a request to the physician for additional data to validate their claim, that's going to be pended in a different queue and wait for them. It may go down to read back into the prepay after they get that data. Likely probably not but it would probably be caught up in the postpay universe when they send that out as a retrospective look.

**Client**
Okay. If I had to summarize that, at the Edifecs layer, like EDI layer, you're only getting the claim, you're not getting the medical record attached to the claim. Hence, you can only do a certain set of rules decisions, and maybe there's some silly mistakes here and there, but they're not medical record-driven mistakes, and if they catch issues there, then they go downstream and they can ask for that data. I'm curious, why doesn't the EDI Edifecs layer get access to the EMR record rather than wait?

**Expert**
Yeah, eventually it could for sure.

**Client**
Why haven't they had that yet?

**Expert**
They have some of it in place where they have, for example, clinical data exchange. It's all predicated on their ability to build up for each provider depending where that provider is coming from. Their ability to get that provider paired up and contracted with the plan.

----

## Proprietary Notice

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

**Page 5 of 9**
**by AlphaSense**
```


---


# Document Content

----

**Client:** I see. You're saying they need a provider and a payer to somehow be in contract with each other before they can go ahead and get to EMR level data at the point of that upstream position.

**Expert:** Correct. Yep. They could onboard it.

**Client:** Right now, if you were to look at most of the business in this upstream position of Edifecs EDI before it gets to CAPS, would you say most of those relationships have direct EMR accessibility or no?

**Expert:** Say that one more time.

**Client:** As it stands today, would you say that most of these upstream layers, so the Edifecs EDI layer, before things go to CAPS, does that layer right now have access to provider EMR data or not? Let's say they have a provider-payer contract.

**Expert:** Not necessarily they, but the plan typically would probably do.

**Client:** Got it. The question is why don't they just do a very robust EMR scrub right from the get-go rather than wait until you go through all these layers?

**Expert:** There's two things. Your EMR is going to give you your clinical case note and documentation, but it's designed from a case management perspective whereas the claim is the administrative side where you're trying to seek reimbursement for it. They both go together because they're both needed for HCC coding and risk adjustment, but the administrative side is divorced from the clinical side.

Most plans have been working on how do they build an aggregated data warehouse to pull those things together. For example, you wouldn't necessarily need to do additional chart submissions or requests to work a claim because you're getting the clinical data feed. There's two issues. One, the data is siloed. Two, most health plans still do not have 100% connectivity for EMR data for their membership. At best, there's 60%, 70%. It's the timing of those things.

**Client:** Interesting. There are efforts now underway. Payers want to marry both the administrative data silo and the clinical data silo.

**Expert:** Correct.

**Client:** Do you have any examples of really good payers or provider combos that have done that well?

**Expert:** To some degree, Optum is probably one of the better industry leading. The best ones obviously are the, what I call the IDNs. The clinically integrated networks like Geisinger and stuff like that because they have the clinical data and all the claim data.

----

**Footer:**
THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

**Page:** 6 of 9
**by:** AlphaSense


---


# Document Content

## Client
Yes. I got that. This is helpful. Now, if we could change gears a little bit, I want to get your reaction questions or just general reaction to this idea. It's going to sound not necessarily all that revolutionary, but it is novel in some ways, and you'll understand it coming from me. I am primarily an AI investor. I do healthcare, but it's primarily AI that relates to healthcare.

## Expert
No, you're AI as well.

## Client
Good. The concept is basically, can you create a new third-party entity that essentially sits like a Switzerland, that is built upon direct integration to the EMR from the provider side and immutable interpretation of policy from the payer side. Both sides agree to give data that otherwise, they usually try to guard into a model. Data goes into a data lake from which next-generation AI model can essentially begin to adjudicate as an arbiter of what is in policy or not. The goal here is to try to break this idea that it's a zero-sum game that if a provider wins, payer loses.

If you essentially view this as a fast lane to your usual provider RCM or your payer payment integrity cycle, you use this as a fast lane where you can go ahead and do certain things. Start with certain service lines which are non-controversial and essentially, obviate the need for a provider to do a bunch of billing work and for a payer to do a bunch of claims reviews that are very expensive and onerous.

Hoping that there is so much burden that you can cut down that both sides would be willing to almost give the adjudication power to a third-party entity. I went really quick on it. I'm curious to your thoughts about that. What would be the first questions that come up to mind, etc.?

## Expert
For example, you've got a few underlying claim platforms like HealthEdge, which is cloud-based, where you're trying to get them to do the adjudication and all this. The problem is though, the contracts are local, so claims adjudication is just one aspect. The secret sauce that drives the underpinning, all of that is the contracting. Especially with validated contracts, the incentives are what dictate how you pay, where you have a counterbalance to that is stuff that's coming out recently with some of the CMS price transparency stuff.

You can download price transparency files from CMS, and then you can also look at the claims files which is just the more robust claim data sets that are submitted. You can use that for aggregation pricing, stewards high low in the markets and provider networks, and then use that to hone how you pay and adjudicate claims and go to contract with them.

Just having an arbiter do in there for pricing of claim is not really going to help anything or do anything of material value because the secret sauce which is close to every health plan ultimately is how they've contracted, negotiated for the payment of those claims.

## Client
Got it. Imagine if the payer did give that contract logic into this system, the goal is to almost industrialize gold carding in some ways.

## Expert
The problem with plans is plans consider that some very sensitive information because that's going to dictate their MLR. At the end of the day, how they contract it has a direct impact to provider robustness in that space, but then also how they effectuate outcomes that impact MLR, risk adjustments, and all these things. Your provider net contracting piece is one of the heartbeats of a health plan. It is your heart. A good example is it's one of the reasons all the other health plans moved off Change Healthcare when Optum bought them.

----

### Footer
THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

### Page Information
tegus    Page 7 of 9
byAlphaSense


---


# Document Content

## Client
That makes sense. That is sensitive information to them. I'm curious then, is there enough administrative cost on appealing from the provider side and obviously, claim review for there to be room for something like this, how I described where ideally, if both sides agree to a certain set of rules or certain rules of engagement that then both sides could also drop their AI arms race that is underway now? That's what we're trying to avoid.

## Expert
You actually got a few companies out there who do some of that. That's really a lot of the reference-based pricing companies who are trying to solve that because what they do is, I'm going to use this at a network example. Claim comes in, gets sent to them, they're going to say, "Okay, the provider bill day reference-based pricing says this," and there's a range on the reference-based pricing.

What those companies do is look at, for example, market rate, and then also look at what's the lowest some of those claims could go before it causes friction with the provider that would trigger or generate appeal or a grievance. Does that make sense? That new price is appended to the claim and sent in. You got companies like Relient Health, which is owned as part of the Point C umbrella that does very similar type thing and activity as well.

## Client
I see. In my mind, they're focused on helping guide the plan of how to price certain things so it doesn't cause provider abrasion. I'm trying to build potentially an entity that would essentially reduce the need or potentially completely eliminate in certain service lines the need to do claims review from payer side or provider billing.

## Expert
It has become like a brokerage, a data brokerage in a little bit of ways. Again, I think that challenge, it wouldn't be a bad thing. At the end of the day, what you're trying to do is do a reconciliation between what the providers are charging in hospitals, their charge masters, and all that to what the payers have contracted for. Payers are trying to use all their data and all the other claims data from other plans to effectuate an effective contract agreement with these providers to minimize costs.

Providers aren't intentionally trying to submit claims incorrectly. The challenge and why some of these other things, you would have to think through second and third-order effects, by that I mean, for example, if you have somebody doing this, how are you ensuring that the claims are complete, not just trying to satisfy, "Hey, we'll come to an agreement and pay and process it."

Each of those claims that come in have to be worked and detailed enough to substantiate a submission for risk adjustment because that is a huge revenue on the payer side and the providers because if there's in a risk share arrangement.

You would have to walk through that process to deconflict and construction. Now, what I could see very easily is in that solution, if you also had it where they were managing the contracts by providers, and then you're able to integrate that into the transaction, think about it this way, one of your account holders is the payer, one is the provider. The business rules engine is the contract.

That becomes the business rule set that governs the submission and completeness of the claim. You could more easily do it because then you're making sure what's coming in is tied to the contract and being paid, and they're incentivized to do that then obviously, you would get all the claim data you need paired up with the clinical stuff downstream to make your HEDIS and risk submission more complete.

## Client
Exactly. I think you described it way better than I did. That's the proposal. That's the idea we're trying to test.

## Expert
Interesting concept for sure.

----

### Footer
THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

### Page Information
tegus                                                                              Page 8 of 9
byAlphaSense


---


# Transcript

## Client
Okay. You think providers and payers would be willing to try this out?

## Expert
Yeah. If you think about, take a step back ecosystem-wise, every single payer has got a contract management solution that is divorced from the underlying CAPS platform. They have two or three layers of prepay postpay edits. If it goes to postpay, out of $100, best recoupment, if everything worked well, it's $0.70 to, but out of that $0.70 to $1, you're still cutting off 30% of that. There's a fee for that postpay vendor. The health plan, the best can get $0.40 of $1.

## Client
I see. Actually, could you say that one more time? I think that's really critical. I want to make sure I get that right.

## Expert
On the postpay side of the house because a lot of them are going to be out-of-network claims or whatever, but if you go in after them, out of say $1, you're only going to get probably at best $0.70 to $1 because you can either go after them to pay you back or deduct it from future claim payments. Depending on how much they do with your plan, you may not have any of that. You're already constrained artificially by that $0.70 to $1 but then most postpaid vendors charge 25%-35%, so let's say 30%, then you chop off another 30% off that 70%, you're down to 40%.

## Client
Got it. The idea is to try to move that all upstream and avoid all of that. Hopefully, that's a spread that one could build a business around or an improvement over the existing thing. Thank you so much. I know we went over time. I really appreciate it. I may come back to you. This was really helpful, if that's all right with you.

----

### Sean Doolan
**DO NOT COPY**
AlphaSense is not a registered investment advisor or broker-dealer, and is not licensed nor qualified to provide investment advice. The information published in this transcript ("Content") is for information purposes only and should not be used as the sole basis for making any investment decision. AlphaSense, Inc. ("AlphaSense") makes no representations and accepts no liability for the Content or for any errors, omissions, or inaccuracies will in no way be held liable for any potential or actual violations of United States laws, including without limitation any securities laws, based on Information sent to you by AlphaSense. The views of the advisor expressed in the Content are those of the advisor and they are not endorsed by, nor do they represent the opinion of, AlphaSense. AlphaSense reserves all copyright, intellectual and other property rights in the Content. The Content is protected by the Copyright Laws of the United States and may not be copied, reproduced, sold, published, modified or exploited in any way without the express written consent of AlphaSense.

----

**THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.**

----

**tegus    Page 9 of 9**
**byAlphaSense**