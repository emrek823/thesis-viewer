---
source_pdf: "https://drive.google.com/file/d/1GIUf_ICqnS7jg1aEC-t7gDbHNWw07_uw/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Mar 03 2025 tegus_optum_122675_Former-EVP-Products-at-HealthEdge.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1GIUf_ICqnS7jg1aEC-t7gDbHNWw07_uw/view)

# Optum - Former EVP Products at HealthEdge
Interview conducted on March 03, 2025

## Topics
*   Fraud Detection, Payment Integrity, Risk Adjustment, Claims Editing, Product Development, Care Management, Member Engagement, Burgess Acquisition

## Summary
The conversation between the Tegus Client and the expert delved into the intricacies of the healthcare industry's payment integrity process, focusing on the life cycle of claims, the role of claims editing software, and the various vendors involved. The expert emphasized the importance of eligibility checks, diagnosis and procedure code verification, pricing, and different levels of editing, highlighting the distinct roles of core admin systems and first pass editors. Additionally, the discussion touched on the challenges of data use rights, the evolving nature of fraud detection, and the potential impact of value-based payments on the payment integrity process.

## Expert Details
Former EVP Products at HealthEdge, leaving May 2022. Expert can speak to all solutions listed.

Chief Technology Officer at mPulse Mobile. Responsible for content creation. software development, SAAS, and product management. Expert also leads the Al initiative.

Expertise lies in business focus and extensive product development experience in SaaS, software, systems integration and electronic controls. Experience in healthcare, financial services, telecom, defense and other reliability and safety critical markets.

Specialties: software development, project management, product lifecycle management, team building, healthcare technology, speech recognition, call center, defense software, control systems, systems integration, real-time systems, embedded systems, agile, lean, devops, product management, technical sales, evangelism
Sean Doolan Alp Se LONDO

Q: Please rate your familiarity with the following solutions on a scale of 1-10(10 being the highest) Optum, Lyric (ClaimsXten), HealthEdge, Zelis, Conduent, EXL, ClaimShark, Apixio, Coverself, Virtual Examiner by PCG, Edifecs, CleanClaim, Netsmart
A: Between 6 and 10 for all.

Q: To what extent are you familiar with the competitive dynamics of the medical claims software space?
A: I am very familiar with the space. Rate at 9-10.

## Client
Thank you for taking the time to speak with me today about claims editing softwares. To start off, could you please give us a quick overview of your background and experience in this space?

## Expert
Sure. My experience with claims editing comes primarily from my time at HealthEdge. I spent just under six years there from 2016 to 2022, and I was responsible for product development for their core administration, platform, and care management product, and subsequently integrating the acquisitions of Source and

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 1 of 9

GuidingCare and Wellframe. Currently, I'm at mPulse where I lead the product development and technology for member engagement.

## Client
Nice. Source for HealthEdge, that was Burgess acquisition?

## Expert
That's right. That was the Burgess acquisition.

## Client
Got it. To start, I'd love to describe to you our rough understanding of the life cycle of a claim and where our understanding is or where these solutions fit in. I'd love for you to give me feedback on where I'm not characterizing correctly or could use some clarification.

My real understanding is a patient or a member has an encounter with a physician. That physician then made some notes in an electronic health record. The notes in that record get translated into a billing encounter that could be by a coder within the physician organization or some revenue cycle department. Ultimately, that billing encounter gets submitted to a clearinghouse.

The clearinghouse checks to see very basic checks about, is all the information filled out on the claim, etc. The clearinghouse routes it to the appropriate payer. Typically, I call it 80%-90% that's getting routed via some type of EDI transaction. There's probably some minority still, that's either paper or fax or something like that.

## Expert
e sid
Yes, most commonly, there's an EDI gateway on the payer side, and the clearinghouse has one and it comes through EDI. There is a small amount of paper and fax as you said.
as
sevo elan

## Client
That EDI transaction takes the claim and gets it into the payer's core claim system or their core admin system, which HealthEdge is obviously one of the leaders. The claim gets into the core admin system. The core admin system itself may then check for some standard things to make sure that the claim is correctly formatted, has the correct information.
ean the@virtus
about the various ne
It goes to the primary editor. We can talk vendors in a second, but there's the primary editor vendor checks the claim for NCCI edits, AMA edits, Milliman, etc. It goes to pricing. They'll go to a pricer like a Burgess in Medicare World or one of the other ones for commercial contracts, etc. After pricing, then it may go to a secondary editor to look for other anomalous things like, "Hey, that flu shot shouldn't cost $10,000," kind of thing.

After the secondary editor, my understanding gets a little bit more murky. What I'm starting to piece together is that there can be further review as long as you're still before the prompt pay deadline. That further review could include an audit of some claims, like selecting a sample claims to audit and review manually by a person or something in more detail. It could include some type of itemized bill review, modifier review, things like that. Ultimately, once it goes through all those different reviews or doesn't need to be reviewed, then the claim pays at the end of the process.

## Expert
That's perfect.

## Client
This is where my follow-up questions come in. First things first, on the core admin system itself, how do I think about what things the core admin system, without a primary or secondary editor, is checking for versus what the editor does?

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 2 of 9

## Expert
You took that core admin claims process in one bracket. Let me double click on that a little bit. When the claim arrives at the EDI gateway, the EDI gateway will check for completeness of the claim. The EDI information is there, everything is well-formatted and all that stuff. It comes into the claim system, and the claim system, what it essentially does first, is it checks for the member.

It's going to go and see, "Is this member eligible for benefits?" At first, we'll do an eligibility check. It could be a member, it could be a subscriber, which is like a member is like a dependent of a subscriber. Subscriber is the person who's paying. It could be any dependent of the member.

Once they determine eligibility, then they will go and look at what the diagnosis codes are, the procedure codes are, and then it will pull the benefit plan for that particular member. It will check if the benefits cover the procedures that were in the claim.

When the benefits are determined, like all those things are. Is the deductible met, is this procedure covered, what's the copay, what's the coinsurance, who's liable for what? Once that is determined, it will go into the provider side of it. It'll look up the provider contract and see, "What is our provider contract?" Typically, the editing that happens, it's like we used to refer to it as multiple pass editing.

Going back to your audit thing, even before editing, sometimes inside the claim system itself, there are some basic rules that can trigger these claims going into a work queue for manual review or manual adjusting. I'll give you a simple rule. Like most payers will have a rule for high-value claims that say that "We don't want to pay any high-value claims automatically."

They will say, "Any claim over $100,000, this automatically goes to a person," and that happens in the claim system, and there's a Ul for that and everything. If the basic rules in the claim system are not triggered, then it goes to the first pass editing, as you say. In first pass editing, it looks at a lot of rules. Many of them are fraud, waste, and abuse rules.

ns
They look at this claim not just in isolation, but in the proximal history of that member, the proximal history of that provider, and see if they can find any of the patterns that trigger those rules. If any of those rules are triggered, they could be automatically modified. The claim could be automatically modified by the claim editor, or it could again be kicked into the work queue for modificatio
for modification in the claim system.
C
Once the modification is done, then it goes to pricing. ing. Pricing, again, you go to the price, or you look at the contract, you figure out what you owe the provider, whether the provider is in network, out-of-network, and all this pricing stuff happens only for in-network stuff. Out-of-network pricing is a different path. There's a price put on the claim.
sa
Based on the benefit plan, as we talked about earlier, you determine what the provider payment is and what the member liability is, and then you put an entry for the provider payment in. You send a bill out to your member, then the claim is sent out to be finalized.

## Client
One of the things that I've been asking myself is, for example, is that first pass editor technology redoing or double checking some of the same edits that the core admin system already checked for or that the EDI gateway already checked for?

## Expert
No. The EDI gateway only checks for the syntax of the EDI message. It doesn't look inside what the claim is. It just makes sure that the claim is well-formed, and then the claim system will actually check whether it has all the information that's required for that particular claim. Does it have diagnosis codes? Does it have procedure codes? Is there any other bundling information that's required? Those checks are different.

You could build those same rules in the first pass editor, but there would be no point in doing that because you'd just be doing double the work. The first pass editor will just do all the other rules that you just mentioned, like fraud, waste, and abuse rules, AMA rules, all those kind of things. Those are more sophisticated rules that depend on clinical knowledge. The claim system doesn't have any clinical

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 3 of 9

knowledge.

## Client
Got it. In your experience, is there a lot of variance between plan to plan, vendor to vendor on what is getting checked for by a secondary editor, or is it the same list of stuff? It's just maybe there's a different methodology.

## Expert
No, it's not a different methodology. What is different is the cornucopia of rules, the standard rules that you get with the editor. There are two things. When editors have been around for a long time, they just keep accumulating different rules because as they build rules for their customers and their customers say, "Hey, these things are escaping, and they're not giving us accurate claim statements." They're building up a portfolio of rules that they're selling to all customers at a future date. Really, the reason why payers would use two different claim editors is to have a larger set of rules that give them broader coverage.

## Client
Got it. My understanding is that the claim being dropped at the clearinghouse, going through the EDI gateway, then going into the core admin system, going to the first pass editor, getting priced, going to the secondary editor, all of these things are happening very quickly, like in seconds. Is that correct or incorrect? How should I think about the timeline for these steps?

## Expert
What you just said is possible, but in reality, what happens is all payers operate on a batch mode. On some cadence, they will collect up all the claims that they have received in the past hour, two hours, six hours, whatever timeline they want to pick, and they will send these in batch mode to the claim system.

The claim system is running them one by one in batch mode. As we said before, thereafter, everything is running in real time. These things that are caught in this web are putting in the work queue for manual review, if that is required, or being automatically adjudicated. At the end of the day, the work queues are being worked by people, and when they modify them and they finalize them, then they go into the finalized mode and the payment.
an Doo
Vevc.cop
COP
These automated claims that are adjudicated and the claims that are adjudicated by people, they're all database entries. They have the provider payment and payment and the member obligation noted. Member billing is done mostly once a month on a batch, all the bills goes out. The bills go out once a month. Provider payments are done typically once every two weeks. While the system can be real time, that's not how payer work processes operate.
DO

## Client
Got it. After the secondary editor, maybe there were some claims that were flagged by the secondary editor or the primary editor and pended for further review. My understanding is there's also some plans or some payers will use an audit tool to evaluate claims and try to flag more claims that should be reviewed for manual review. Is that your experience as well that there's potentially an audit tool that comes in post-secondary review?

## Expert
I'm not familiar with audit tools that are products, but the work process that happens typically is that every payer has a payment integrity department. There are people there who know how these claims are supposed to pay, and they are sampling random claims based on some criteria they pick out of that, and they're always checking those.

The reason they're checking those is because they want to make sure that the claim editing rules are catching the right things, and they use it to improve the claim editing rules. They also might use that data to talk to post-payment payment integrity vendors. Many payers, what they do, in addition to prepayment payment integrity, will also, in a batch mode, once every two weeks or once a month, send all their finalized

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 4 of 9

claims for which payments have already been made to the provider.

They'll send them over to a payment integrity vendor that will run those in batch mode and run their set of rules on them. If they find anything that was paid inaccurately, and payers are overpaid, they will send a report to the payer. The payer will claw back that money from the providers. That is also a step that is taken many times.

## Client
Got it. In terms of the vendors in the landscape, my understanding is that on the primary first pass editor side, there's Optum CES, as a tool ClaimsXten which used to be a part of Change and McKesson, but now it's owned standalone by Lyric, and then there's HealthEdge Source. Those three are the primary big players in the space. Is that right or are there other players in the first pass editor space that you've come across?

## Expert
No, those are the ones that are the big ones, and those are the ones that I'm aware of. It's not been in this business for the last couple years, but I've heard Cotiviti has brought a product to market in the same space, but I'm not familiar with it at all.

## Client
Got it. My understanding is that Cotiviti is strongest in the secondary editor space. Is that fair?

## Expert
The post payment. I think primary and secondary is a little misleading because you can stack them up both prepayment or post-payment. Cotiviti and Zelis are the two big ones in the post-payment payment integrity. That's the one where you've already paid the provider, and you're going and asking for money back. That's what the post payment is.

## Client
haens You're
Got it. When does that post-payment review typically happe
Doore from a workflow perspective?

## Expert
evc.com
It's not an inline workflow. The post-payment thing is the OP month payme integrity department will take all the claims that have been paid, let's say, in the last, they'll send them off to the vendor. The vendor will take a week or 10 days to crunch them through all their rules base and figure out, "Hey, you sent us 100,000 claims. We think these 8,000, you overpaid. You overpaid by so much for so many reasons, so you need to go to these providers and bring that money back." It's a cadence that is determined by the payment integrity department in the payer, and it's a completely batch process that is.

## Client
Got it. I've heard of a few other vendors. I'm curious, based on your experience, where they fit in all of this? A couple of the bigger ones I heard about are EXL, which I think maybe is on the post-payment side as well. Apixio, which is doing some medical record review. Conduent, which I think may also be on the post-payment side. Have you come across any of those three?

## Expert
I've come across them, but I don't consider them as payment integrity vendors. Conduent is a very large company with a large portfolio of products, but in the healthcare space, they're mostly in the enrollment on the payer side. I think they do some revenue cycle management as well, but I'm not very familiar with their entire product portfolio. Apixio is a risk analysis tool, so I don't think it's payment integrity. EXL, I've heard the name, but I can't recall right now what their products are. It's been a while.

## Client
Got it. I've come across three smaller players, which I think are in the claim edit space, but much, much

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 5 of 9

smaller than the names we talked about so far. The first one I've heard about was Coverself. Have you come across Coverself?

## Expert
I've not heard that name.

## Client
Okay. Have you come across Rialtic?

## Expert
No.

## Client
Okay. Their product is called Virtual Examiner, and it's by PCG Software.

## Expert
No.

## Client
All right. Some of these companies have only been around for four or five years. The last one was ClaimShark. Have you heard of them?

## Expert
No.

## Client
ense
No problem at all. Another question for you then is, as as you think about the bucket of vendors that do primary or secondary prepay reviews, maybe we can go through them one by one and just public information. Between Optum, Lyric, and then HealthEdge, how do you think about where each one is stronger versus weaker? If you could just go through each of them, that Alp Sean sd@virtue ould be helpful to give a sense for where they play in the marketplace.

## Expert
Yes. The first thing is on the product side, CES and ClaimsXten are both editor products, and Source combines pricing and editing into one product. Optum has a different pricing product, which is purchased separately from CES. ClaimsXten does not have an associated pricing product. Source bundles both of them in one product. That's one difference.

The second thing is Optum and ClaimsXten, I believe, is the oldest product in Optum, and they both have rule sets that they have the core overlapping rule sets, but they cover a lot of specialty areas for the rule sets. That's where they're differentiating. Source, being the newest of those three entrants, their rule base is still not as mature as the other two.

## Client
Got it. Built out the rule base, is that just a matter of contracting with a Milliman, or I think there's one called ICORE Health or these vendors that come up with the content and then building it into the software. I'm trying to get a sense for, is it hard to add more rules, or is it relatively straightforward?

## Expert
Designing the rules is a skill. It needs clinical information as well as information of bundling, grouping, and all of those kind of things. The one differentiator that Source has is that they have a UI for their product that makes it really easy to build those rules once you've designed them. That's a differentiator. That's why Source is preferred by many payment integrity departments that have that skill of designing rules and want

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 6 of 9

to build their own rules.

That makes the business users empowered to build those rules as opposed to going to a vendor and say, "Hey, we want these five rules added to our rule set." What you said is designing and building those rules, many a times what happens is you build them in partnership with your customers, payment integrity department, and then you have some IP sharing arrangement.

## Client
Got it. You mentioned Source, one of its strengths is the pricer and the edit solution are bundled together, integrated. From a customer perspective, how does that manifest itself in terms of the value that the customer gets from that?

## Expert
You get two products in one, so you have one integration and one vendor to deal with.

## Client
Got it. Because you have the pricer and the editor together, does it make the edits more accurate, or does it define more money? What's the benefit of having those two things? From ROI perspective, how does the customer think about it?

## Expert
My layperson's opinion is no, there's no such benefit, but I'm not an expert on writing these rules. What I will say is that the benefit is the deal making is easier.

## Client
Got it. Across healthcare, so much vendor proliferation, so r person to talk to you makes sense.
so reducing the number of vendors and having one

## Expert
Alo Ser se
Yes, especially if you have the pre-integrated with your co Doolan for that. You can hold them accountable for claim accum Cor your core administration system, and you have one vendor cy end
OT COPY
Sean

## Client
Super helpful. As you think about the future of claim@virtuerc.com edits, you mentioned Cotiviti, for example, coming up into the prepayment space. How do you think it plays out? Do you think that the pre and post-pay vendors start to compete more against each other, or do you think it makes sense that they're separated? Should there be consolidation? How do you think about that?

## Expert
They definitely compete with each other, but in this payment integrity space, it's an Al arms race. They're all looking to build Al algorithms that are going to catch more stuff and provide more coverage. That's the name of the game.

## Client
That makes sense. One of the things I've heard, there's a mix in terms of deployment models. My understanding is that HealthEdge Source is true multi-tenant cloud-based software, whereas Optum CES, for example, is either on-premise, or it may be hosted, but it's still single tenant. It seems to me that someone like HealthEdge, who has a multi-tenant solution, it would be much easier to have Al build, refine a model, and learn from data across lots of clients versus CES where you have different databases. Does that resonate with you, or do you think about it differently?

## Expert
I think about it differently. While you are correct that the mechanics become easier, the key part is data use

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 7 of 9

rights in that. Many payers will not grant data use rights for vendors to improve products across their community because every vendor thinks their data is proprietary.

At least when I was doing this, it was impossible to get data use rights if you made a proposition that your data would be coming over other payers data. Let's say that problem is solved. Once that problem is solved, I will answer your question by saying it's very little effort, even if it's single tenant data, to put all that data together if you wanted to do this. There's not a big advantage in that.

## Client
Got it. As you think about this, broadly speaking, claims editing phase, payment integrity more broadly, basically I'm trying to understand how all these vendors play together. Is there anything that we didn't talk about that you think I should be focused on or trying to better understand more?

## Expert
Yes. I think one dimension that we didn't talk about is this whole thing about value-based payments and capitated payments and risk adjustment and all of those things. All of these payment integrity things, right now, they're geared towards the fee-for-service market. They're based on an encounter, they measure the encounter, and they track the member and provider journey. I don't know, two years back, two, three years back, something like that.

When you get into the value-based thing, and you want to look for fraud, waste and abuse, or if you want to look for efficiency and accuracy of payments, accuracy of payments is less important because the payments are all standardly fixed. The fraud, waste, and abuse takes on a different character.

## Client
Why is that within the value-based context?

## Expert
You probably heard that the DOJ is investigating Unit ense United for their Medicare Advantage plans. In Medicare Advantage, the value-based care is that if you have patients that have a higher risk profile, you get paid more. What United is accused of doing, allegedly, is putting in diagnosis codes on patients that didn't exist or putting them on without the patient's knowledge so that they could bump up the risk profile and get paid more. That fraud, waste, and abuse detection does not evic exist in the fee-for-service rule systems today.
There's a lot of work to be done on that.
Sea

## Client
Back to the rules piece, I imagine the Lyric, the Optum CES, the HealthEdge, are they working or on that to get some more value-based care specific or tailored rules into the systems? Because value-based care penetration is still relatively low, they're not as focused on that?

## Expert
I would think they're working on it, but I have no knowledge.

## Client
Got it. Do these solutions have a place to integrate or interface with the risk adjustment vendors, or is that totally separate and not a relevant integration?

## Expert
Risk adjustment has even a longer life cycle because the risk adjustment happens once a year for all practical purposes because you reprice your plans once a year. They're using the same data. They're using the same member data to figure out the risk and all that, but I don't see a direct connection.

## Client
Got it. Thank you again for taking the time to speak with me today. Enjoy the rest of your day.

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
by AlphaSense
Page 8 of 9

by AlphaSense
AlphaSense is not a registered investment advisor or broker-dealer, and is not licensed nor qualified to provide investment advice. The information published in this transcript ("Content") is for information purposes only and should not be used as the sole basis for making any investment decision. AlphaSense, Inc. ("AlphaSense") makes no representations and accepts no liability for the Content or for any errors, omissions, or inaccuracies will in no way be held liable for any potential or actual violations of United States laws, including without limitation any securities laws, based on Information sent to you by AlphaSense. The views of the advisor expressed in the Content are those of the advisor and they are not endorsed by, nor do they represent the opinion of, AlphaSense. AlphaSense reserves all copyright, intellectual and other property rights in the Content. The Content is protected by the Copyright Laws of the United States and may not be copied, reproduced, sold, published, modified or exploited in any way without the express written Consent of AlphaSense.

AlphaSense
Sean Doolan
sd@virtuevc.com
DO NOT COPY

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.
tegus
Page 9 of 9