---
source_pdf: "https://drive.google.com/file/d/1Uz9ajfMQengReJYualRqGucDtfcy4oc2/view?usp=drivesdk"
type: expert-calls
ingested: 2025-12-21
original_filename: Co-Founder, President and CTO at Finni Health _ Silna Health _ Tegus.pdf
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1Uz9ajfMQengReJYualRqGucDtfcy4oc2/view?usp=drivesdk)

# Silna Health - Co-Founder, President and CTO at Finni Health

**Interview conducted on May 22, 2025**

## Topics
- Payer Integration
- Eligibility Checks
- Benefits Checks
- Credentialing
- Data Accuracy
- Prior Authorization
- Eligibility Checking
- Medical Services Organization

## Summary
The Tegus Client, a founder of a MSO, discussed their experience with Silna, a prior auth and eligibility solution, highlighting challenges with multiple payers and disjointed processes. While Silna offered a solution to streamline auth submissions, the Tegus Client expressed dissatisfaction with accuracy and is now developing in-house software for data revalidation. They mentioned a usage-based contract with no standard base fee, and expressed concerns about data quality, submission process, delayed API integration, and declining product quality. Considering bringing processes in-house for better quality control, the Tegus Client is evaluating other vendors but leaning towards automation to increase efficiency and reduce costs.

## Expert Details
- **Position**: Co-Founder, President and CTO at Finni Health
- **Role**: A customer of Silna Health. This expert can speak to the selection process, implementation, overseeing and day to day benefits of Silna Health.
- **Background**: The expert is responsible for leading product and technology strategy to transform autism care delivery. Finni Health is backed by General Catalyst, Y Combinator (W23), K Ventures, Greymatter, Wayfinder, and Forum Ventures.

### Previous Experience
- **Head of Data at Swyft** (until November 2021)
- Responsible for building and scaling data infrastructure and analytics capabilities to support business operations and decision-making.

- **Senior Software Engineer at Shopify Plus** (until November 2020)
- Contributed to high-scale commerce solutions.

- **Software Engineer at Redfin** (until September 2019)
- Developed features for Redfin's online real estate platform.

### Expertise
The expert is a subject matter expert in health tech, autism care innovation, startup leadership, data infrastructure, and scalable software engineering.

## Q&#x26;A
- **Q: Are you a paying customer of Silna?**
- **A:** Yes, we are current paying customers.

- **Q: Were you directly involved in the decision to bring on Silna at your organization?**
- **A:** Yes, I was the key decision maker.

- **Q: Do you personally use Silna or oversee the team that does?**
- **A:** Both on this one.

- **Q: What part of your workflow does Silna help with the most?**
- **A:** Prior authorizations, as well as benefit checks.

----

**THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.**

----

**tegus    Page 1 of 8**
**byAlphaSense**
**Doc ID: U:1AWR-T:2VRF**


---


# Document Content

## Q&#x26;A Session

### Q: How long have you been using Silna?
**A:** 7 - 8 months.

### Client
Hi. Thanks for taking the time to talk with me. I am interested in learning more about, not only Silna, but the general kind of landscape of prior auth and eligibility and checking more broadly. Looking forward to this conversation.

I think to start, it would be great to just get a little bit about your background, what led to you procuring a solution like this. Apologies, but I do forget if you mentioned you are a current customer of Silna or if you've just evaluated them, so any clarity around that would be great as well.

### Expert
I'm currently a customer of them. I am a founder of a MSO, if you're familiar with that term. Basically we help providers launch and run their own practice. Prior auth is a big part of the business because the services that we provide do need prior auth.

### Client
Got it. How did you come into contact with Silna or even just the need to procure a solution like theirs?

### Expert
We work with a lot of payers. We're active in around 30 states, and in each one, we have five to six payers that we're working with. In total, we might have like 200, give or take, payers. With working with so many different payers, every payer has a different prior auth process, different eligibility check process, whatever. Not all of them integrate into clearinghouses, and many of them have their own proprietary portal. Submitting auth is a pretty disjointed process if you're trying to submit for like 200 different payers.

I came across them, they actually just reached out to me. I forget if it was LinkedIn or email, whatever. A good friend of ours is a seed investor in them. I think Bain, Accel as well, are co-led, whatever. That's what we heard about them. I was immediately interested because the value prop makes sense for us, at least at the time, because we didn't want to focus on solving that prior auth problem because we wanted to focus on building up our business, we're also a start-up.

### Client
Got it. Correct me if I'm wrong, you're not necessarily the direct user of Silna, but you're more suggesting Silna as a product to the clinics that you're helping stand up?

### Expert
Not exactly. We are direct users of Silna. Our customers use Silna, we also use Silna. Basically the way it works for us is, our customers use Silna to submit auths, and our EHR that we've built in-house, we use our EHR to programmatically kick off eligibility checks, benefits checks, and programmatically pull in auths when they get approved into our EHR so that our providers automatically know when they're approved and can start scheduling.

### Client
Got it. Could you just briefly walk me through how those insurance workloads land on your desk day to day and really what that workflow is?

### Expert
The workflows that specifically Silna would offer?

----

## Footer
**THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.**

----

### Page Information
**Page 2 of 8**
**by AlphaSense**


---


# Document Content

## Conversation Transcript

**Client**: Specifically as it relates to the solution that Silna is providing, like a before and after is a really helpful foundation to base the conversation on, to understand how things were operating ahead of using them, and then the lift that they provided.

**Expert**: Before, for each new payer we onboarded, we would have to investigate, what is the portal that we need to use? What is the auth submission process? What questions we need to answer, documentation we would need to prepare for each different payer?

If we enter into a new state, which happens pretty often for us as we're growing, it means that we have to do a whole new round of investigation, typically. We would have to figure all of that out, and then train our providers on how to use all those different portals or all those different processes. The providers were pretty frustrated too, because it's a lot for them to learn, and they weren't doing it properly and auths were being delayed and whatnot.

We would have to sometimes train our own internal staff to handle it for our providers because they weren't as capable. After Silna, we rely purely on them to handle that work. It doesn't mean that they do it perfectly though, they do it far from perfectly. We can go into that. We're not exactly happy with their work either, but they at least do some work on that front.

**Client**: Got it. Before adopting Silna, what was the single most painful part of getting patients cleared for care?

**Expert**: For us, it's credentialing, so it's not even what they do. They don't solve the most painful part of our providers' workflows. Credentialing is definitely the largest pain point. They might be like number three honestly for our providers.

**Client**: Why is that?
**Sean Doolan**
**DO NOT COPY**
**sd@virtuevc.com**

**Expert**: Just because prior auth submissions, it's a pain while we're growing, because we're just figuring out new payers. Once we establish our payer base and work with them more, then it stops being a pain because we know what the process is, we have all the portal accesses and whatnot. We can build our own integrations with those payers to automate auth submission processes. We can just completely get rid of Silna. Right now, we just want to work on some other internal features before we start moving on replacing Silna.

**Client**: Got it. What goals or KPIs initially convince you and the team to evaluate a new prior auth/benefits tool?

**Expert**: It was just a lot of anecdotal stories. Generally, our providers were not happy with just handling the auth process on their own. Auths were getting delayed. We thought, "All right, might as well give them a shot." Early on, they were pretty cheap too. They're definitely more expensive than if we were to build out a team internally and a solution internally. The benefit is, we can just pay them some cash, and we just don't have to worry about it. That's Silna's problem to solve for us.

**Client**: Got it. What alternative solutions, whether that's manual, in-house, RCM, or another software were on the short list of the solutions you evaluated? What tipped the scales towards Silna?

**Expert**: We actually didn't do any investigation into other competitors of Silna at the time. It was just a personal

----

## Footer

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

**Page 3 of 8**
**byAlphaSense**


---


# Document Content

----

connection that connected us. It was either Silna or bringing it in-house. The math there was just like, I'm just giving ballpark numbers, but let's say we can spend $50,000 a year to do this ourselves, or we can spend $75,000 a year for Silna to do it.

At the time, we were just like, "Okay, let's focus on growth, building our core features more." We had some big product bets that we wanted to make, so we just didn't want to focus on the prior auth process. As we continue to mature, it's just making more and more sense to go in-house.

**Client**
Got it. Anything specifically about Silna that stood out relative to, like that was truly like 10X better than other solutions that you evaluated, or even just what marginally shifted you to selecting them over others that served a similar basic function?

**Expert**
For example, we used another eligibility vendor before, which was purely API-based. Their problem was, they don't provide a guarantee of very high accuracy. A lot of payers don't integrate with clearinghouses, and sometimes don't have electronic eligibility, so you do have to call the payer or email them, whatever, to understand if someone's in network.

Silna, what they promise is a very human-first approach. I don't know how they operate their human team, but they definitely, I'm assuming, have some sort of massive offshore ops team that does all of this work, which to an investor probably doesn't sound good, but to a customer, it's like, "Hell, yeah."

I want humans in the loop to verify everything. I don't want a naive API answer because APIs in healthcare are not very accurate. Healthcare has to be run by ops people, and that's what they do. I think it makes sense. The thing is, right now they're just prioritizing growth over their existing customers, their quality has gone down the drain.

**Client**
Sean Doolan
**Silna has?**
DO NOT COPY
sd@virtuevc.com

**Expert**
Yeah.

**Client**
In what ways?

**Expert**
We're just not happy with their accuracy. The auths that they provide us, for example, will see in the auth letter clearly stating the start and end dates of the auth, or the amount of units available in the auth. Like in the API response, it'll all be wrong when they enter it into their system. We're suffering insurance denials and insurance write-offs because of their mistakes. It's just really simple form filling that they have to do on their end that they can't get accurate.

**Client**
That's really good to know. Maybe this next question flies in the wake of that answer, but roughly how many staff hours or dollars, if you're able to measure it in that, are you saving per week now with Silna on prior auth and benefit check?

**Expert**
Staff hours, definitely a lot. Call it, like 100 hours a week, give or take, maybe 50-100 hours a week that we save. The thing right now is, I don't know what they promise in terms of accuracy, but let's say they promise like 95%, that's five out of 100 that are wrong. Right now we're in the thousands, that's 50 out of 1,000 that are wrong, that's unacceptable.

----

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

tegus                                                                                        Page 4 of 8
byAlphaSense


---


# Document Content

## Conversation Transcript

**Client:**
Got it. Have you noticed changes in denial rates, or at least the first time it takes to move from referral to first visit?

**Expert:**
See, this is the unfortunate part. Because of the inconsistent data we're getting from Silna, we're starting to build software in-house to revalidate the data that they give us. Basically, we ingest data from them, we have humans on our end revalidate what they gave us and soft-run our end to do that. We basically double-check their work for everything.

**Client:**
Which is less than ideal?

**Expert:**
Very much so, less than ideal. If we're going to pay this much for an off vendor, we would expect accuracy.

**Client:**
What is that contract size?

**Expert:**
I don't think I can say.

**Client:**
Even a general range, is it at six figures, is it five figures? You don't have to quote an actual number.

**Expert:**
Five to six figures. It's a sliding scale, depending on usage.

**Client:**
It's usage-based?

**Expert:**
Yes.

**Client:**
Great. Could you actually dive into exactly how they charge?

**Expert:**
I don't think I can say.

**Client:**
Just like business model.

**Expert:**
They just charge per user.

**Client:**
I thought you said it's usage-based.

**Expert:**
No, like per patient. It is usage-based, because as your patient population grows, they charge per patient.

----

## Proprietary Notice

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

## Footer

tegus                                                             Page 5 of 8
byAlphaSense


---


# Client-Expert Conversation Transcript

## Client
Got it. Is there any form of standard base fee though that's associated with Silna?

## Expert
I'm actually not entirely sure. I don't think so. There might be a minimum or something like that, a minimum patient count, but there's no base fee on top of the patient base fee that we pay.

## Client
Okay. What downstream effects, whether it's across scheduling or cash flow or patient satisfaction, if any, have you observed things going live?

## Expert
When we first went live, people really enjoyed it because I think they had the old process to compare it to, so folks were really happy with using Silna. Now though, people take Silna as the status quo and they just see all the mistakes that Silna is making.

Right now, we do get a lot of unsatisfied customers because of, number one, the quality of their work. The quality of the data they provide back is low. They also are now taking longer to submit auths for us. Users are complaining about that. Also, the quality of their submission process is worse, such that more of our prior auths are subject to clinical review than they were before.

## Client
Got it. Which Silna feature delivers or should deliver the most value to you? Besides quality, are there any other parts that still feel rough around the edges?

## Expert
You're basically saying what feature should it be providing that it's not right now?

## Client
Yeah. I'm curious about that as well.

## Expert
Data quality, data accuracy, just speed of execution. Submitting an auth for a payer that we already know how to submit an auth shouldn't take more than one business day, and they're taking much more than one business day for us. Their technology was actually one of the things that really sold me, because they promised a whole API integration.

I'm a very big product guy. I was just imagining, in our EHR, we're going to be able to integrate with Silna's API and abstract away Silna's entire dashboard and create auths within our EHR, retrieve auths within our EHR, and have the whole flow be like a magical black box. They've been really, really slow with rolling all of that out.

They promised by the end of last year to have all of that done, they only had the first part done by the end of March, so by the end of Q1. They were delayed by a whole quarter for only the very first part of the feature set that they promised when we signed. All while their product's quality was just going down.

## Client
Got it. One, how long are you locked into the Silna contract for? Are you considering churning? I can ask a bunch of follow-up questions to that, but curious those answers first.

## Expert
We are thinking about churning. We're not sure when, but it's whenever we can prioritize it with the team amongst our current projects, then we'll go ahead and do that. What was the first part of your question?

----

### Footer
THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

### Page Information
tegus    Page 6 of 8
byAlphaSense


---


# Document Content

## Client
How long are the contract lengths?

## Expert
Given it's usage-based, we can just cut all the patients that we have, and I think maybe there'd be a minimum fee, whatever, but that's that.

## Client
Got it. You're not locked in for a certain period?

## Expert
Unless there's a minimum, which I don't think so. I don't think there's any sort of minimum usage amounts and stuff. I'm assuming their initial term is like one year, but I don't think there's anything stopping us from just keeping one patient in there or something.

## Client
Got it. What would you do if you were to churn? Who would you evaluate?

## Expert
We would just do it ourselves.

## Client
How easy is that to do it yourself? What do you mean by doing it yourself? What exactly would that be doing?

## Expert
We would just do benefits checks, eligibility checks, and authorization submissions fully in-house. We would just bring on some Philippine staff, hire one or two staff based out of the U.S. or Canada to manage the overseas staff and do some work there, and then we would build a little bit of software to try to make that process all super efficient.

We already have a bunch of the software built out. Because we can't trust Silna, so we have to audit a lot of that information that they give us ourselves. It's not a huge lift on the technology side, we just got to prioritize it on the ops front.

## Client
Got it. Are you saying this is not even a big-enough problem to need automation?

## Expert
No. We could do it all with just people. I'm saying we'll do automation still just to make it more efficient. It can be done for less money than what we're paying Silna right now.

## Client
Got it. Where do you see the biggest administrative bottleneck after prior auths that Silna or anyone still needs to solve?

## Expert
For us, it's just got to be credentialing, getting our providers in network is the biggest thing. There's already plenty of vendors for that. No one does a good job, actually, so I think most healthcare start-ups that I know, at least, end up bringing all of that in-house as well.

----

## Footer
THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

### Page Information
tegus                                                                           Page 7 of 8
byAlphaSense


---


# Transcript

## Expert
I can't speak confidently about any other start-ups in the space. There's definitely a lot of competitors. We've looked into briefly a list of them. Coherehealth.com was one of them. I never actually looked into what they were offering. We were thinking like, let's see what other vendors are out there that we could possibly use, and then considering using another vendor or just bringing it in-house.

We're just going to opt to bring it in-house because then at least we have quality control in our hands. I think the thing that kills these kind of start-ups is the founders raise a Series A or Series B and just care about growth, and they just let their product go to shit. We've already seen that a couple of times with some of our vendors. It does feel like Silna is going down this path right now.

## Client
Thank you for taking the time to speak with me. Have a nice day.

----

**Disclaimer:**
AlphaSense is not a registered investment advisor or broker-dealer, and is not licensed nor qualified to provide investment advice. The information published in this transcript ("Content") is for information purposes only and should not be used as the sole basis for making any investment decision. AlphaSense, Inc. ("AlphaSense") makes no representations and accepts no liability for the Content or for any errors, omissions, or inaccuracies will in no way be held liable for any potential or actual violations of United States laws, including without limitation any securities laws, based on Information sent to you by AlphaSense. The views of the advisor expressed in the Content are those of the advisor and they are not endorsed by, nor do they represent the opinion of, AlphaSense. AlphaSense reserves all copyright, intellectual and other property rights in the Content. The Content is protected by the Copyright Laws of the United States and may not be copied, reproduced, sold, published, modified or exploited in any way without the express written consent of AlphaSense.

----

**Contact:**
Sean Doolan
DO NOT COPY
sd@virtuevc.com

----

**Proprietary Notice:**
THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

----

**Page Information:**
tegus    Page 8 of 8
byAlphaSense
