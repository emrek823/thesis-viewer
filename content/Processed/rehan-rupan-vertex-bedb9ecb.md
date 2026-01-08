---
source_pdf: "https://docs.google.com/document/d/17G0BFKO-ForF03wVKlNh605t0l4zm5ee/edit?usp=drivesdk&ouid=115282597639191279335&rtpof=true&sd=true"
drive_folder: "Virtue / ZoomLogi (shared drive)"
type: portfolio
company: ZoomLogi
ingested: 2026-01-06
original_filename: "Rehan Rupan (Vertex).docx"
---

> **Original:** [View in Google Drive](https://docs.google.com/document/d/17G0BFKO-ForF03wVKlNh605t0l4zm5ee/edit?usp=drivesdk&ouid=115282597639191279335&rtpof=true&sd=true)

Virtue Team <> Rehana

Meeting Date: November 21, 2024, 06:00 pm

Overview

In an informational interview between the Virtue Team and Rehana, discussions began with introductions, where Rehana shared her extensive background in chemical engineering and computer science, detailing her eight years at Vertex and her current role as a project manager for supply chain logistics in the T1D program. The meeting focused on the critical transition to cell and gene therapies, highlighting the significance of cold chain logistics, compliance with FDA regulations, and challenges faced with vendors, such as Tive and Cold Chain Technologies. Rehana elaborated on the integration issues within Vertexs Oracle inventory management system, emphasizing the importance of Chain of Identity and Chain of Custody amid stringent regulatory requirements. The conversation also addressed various logistics challenges, including the use of specialized couriers and private jet transport for high-cost therapies. Lastly, the team discussed the slow adoption of new technologies within the industry, the regulatory framework guiding electronic systems, and the potential for innovative solutions targeting early-stage pharmaceutical companies, with action items identified to explore API integration for shipment tracking and relevant EU compliance research.

Notes

Introductions and Background(00:29 - 03:56)

Kunaal introduced his colleagues Sean Doolan and Emre Karatas

Rehana shared her background in chemical engineering and computer science

Rehana has been at Vertex for 8 years, starting in small molecule validation

Currently a project manager for supply chain logistics in T1D program

Pharma Supply Chain and Logistics(03:56 - 07:42)

Shift from small molecule to cell and gene therapies

Cold chain logistics crucial for cell and gene therapies (2-8°C to -165°C)

Compliance with FDA and global regulations is critical

Discussed issues with Tive, a data logger company lacking compliance

Cold Chain Technologies mentioned as a key vendor

Systems and Integration(08:12 - 13:43)

Vertex uses Oracle for inventory management

Lack of integration between systems is a pain point

Manual processes in cell and gene therapy production

Chain of Identity (COI) and Chain of Custody (COC) critical for cell therapies

FDA and global agencies have strict guidelines on COC

Logistics Challenges and Vendors(13:43 - 17:08)

Cryoport mentioned as a major vendor for cold chain shipments

Quick Stat used as a courier service by Vertex

Time Matters (Lufthansa) does specialty couriers

Private jets used for transporting some cell therapies ($500,000 per dose)

Shelf life and customs clearance are major challenges

Technology Adoption and Regulation(17:08 - 25:59)

Industry slow to adopt new technologies like AI

21 CFR Part 11 is the main US guidance for electronic systems

EU has additional privacy concerns due to GDPR

Opportunity for new entrants targeting early-stage pharma companies

Need for compliant, value-added technology solutions in the industry

Transcript

Emre Karatas
Yeah, it'd be, I mean, I guess we can start just for vertex for you and your role. Just quick background on your role within the organization so we can understand kind of the state of play. Just understanding just what the current supply chain looks like and take it from there with some specific questions to probe on. But the first five, ten minutes just to understand the state of your world.

02:39
Rehana Rupan
Yeah, very helpful for us definitely. So yeah, my background is in chemical engineering and comp Sci. I actually have been in Vertex for all of my career. I've been here for eight years. I started out in small molecule as a validation engineer. I did a lot of the work for our FDA filing for our triple combo drug Trikafta for cystic fibrosis. I've been a lot involved with a lot of systems work as well. So I have A lot of familiarity with what the FDA and other agencies want out of digital systems just in terms of like compliance, traceability. ALCOA is always the little abbreviations so attributable, legible, contemporaneous, out like outstanding and just last one at this point. But yeah, so that's a lot of my background. I've been involved with a lot of systems, a lot of operational things here.

03:37
Rehana Rupan
About two years ago I made the jump into supply chain to support logistics for our type 1 diabetes program. Yeah, been there ever since. And right now I am a project manager doing a lot of the tactical work for our supply chain for our type 1 diabetes programs.

03:55
Emre Karatas
Yeah, that's great. And so seems like a bit of a shift from the small molecule days and so huge shift, completely different world. Yeah. So talk and again like talk through some of those considerations as you think about whether clinical research or as you're moving towards commercialization, like key considerations for you right now, whether it's how you manage just the temperature control as you're shipping out, how you understand potential delays, how you work with other people outside of the organization. Right. You live this and we've seen this with some of our work. Like there are clearly many pieces of the chain. And so like what is vertex index on? What do you index on? What tools to use today to try and manage some of that?

04:42
Rehana Rupan
Yeah. So you know, small molecule world, there's not a whole lot of cold chain logistics. A lot of that stuff is really stable. It's shifted ambient conditions. There's not a lot of considerations. Shelf life is typically not a concern for cell and gene therapies. You're looking at always, almost always cold chain. Very frequently it's somewhere between refrigerated 2 to 8C conditions all the way down to Cryo. So like minus 165C. There are lots of considerations for transporting those kinds of goods just due to the hazardous nature of them. I think one of the biggest, so I'll share with you guys. I think one of the companies that's really come in and tried to be an industry disruptor is this company, tive. So they went through, they developed all these data loggers but you could tell that they didn't have a strong product vision.

05:37
Rehana Rupan
They didn't take enough time to get user requirements. And so when they wanted to get into the pharmaceutical industry and our vendor actually adopted their products, we've run into numerous issues with them to the point where they're actually a Boston based company. And I went down to their office to complain. I think too often we see a lot of these companies coming in that want to be disruptors and want to use technology in a way to drive value to these organizations, but they're not doing it in a way that's compliant. And I think that is the name of the game when you're looking at the pharmaceutical industry is yes, we are slow to adopt new technology, but it's largely due to the compliance regulations that we face.

06:25
Emre Karatas
And so.

06:26
Rehana Rupan
Yeah, yeah, go ahead, tie.

06:28
Emre Karatas
For our reference, both has the real time trackers and the passive loggers they do.

06:34
Rehana Rupan
So they, if I was at my desk I usually have a stack of them. But they're essentially trying to be like very nice, like cloud based thumbtails. And the idea of them is very nice, but the execution is not compliant with the regulations that we need. And so I frequently have to write deviations and change controls for their problems. I've actually gone to them a number of times. They actually very funnily ended up offering me a product manager role and I shot them down because I hate them. But they, I think the name of the game, right, is like you need a product strategy, you need a vision.

07:15
Rehana Rupan
But at the end of the day the execution comes down to can you comply with all of the regulations that we face from not only the FDA but other global agencies and those regulations aren't harmonized.

07:29
Emre Karatas
Yeah, yeah. And you said you tithe and another vendor if just for us to help understand that in the state of play, like who is that?

07:38
Rehana Rupan
Other vendors, like another cold chain technologies. So they are in my opinion they seem to be a smaller company, they're a smaller player, they're based out of Massachusetts, which is why I think we work with them a lot and we're able to work very closely with them on custom solutions. But they build a lot of the actual shippers that maintain temperature for cell and gene therapies. They're an interesting company. They are rapidly acquiring other companies to try to gain more of a global footprint.

08:11
Emre Karatas
No, this is all very helpful. And then what do you guys use? Whether it's like an ERP or other solution to bring up. Okay, so you're on Oracle today. Can you tell?

08:24
Rehana Rupan
Most companies are on SAP.

08:26
Emre Karatas
Got it, got it. And so with that, like what are you using Oracle for day to day? Is it pulling in any data from cold chain technology?

08:38
Rehana Rupan
My dream in life is to have these integrations built in. It will probably never happen. But right now Oracle we're using mostly for Inventory management. Yeah.

08:48
Kunaal Patel
And when you touch about. On kind of those integrations for that wish list, what. What kind of integrations would you have? Like, in an ideal world, across different systems and. Or maybe even the different modalities of systems?

09:02
Rehana Rupan
Yeah, I mean, small molecules is a lot more realistic for it to happen. But I actually think the value is really in cell and gene therapies, but having systems that speak to each other. So if you delve into the world of pharmaceutical systems, you'll learn a lot about me. Ask manufacturing, execution systems, scheduling software, automatic controls, things like that. Having those systems speak to each other just removes so much of the manual process. And honestly, the biggest pain point in cell and gene therapy, so much of it is manual. I'm not an operator for the T1D program, but I do write a lot of their batch records. I do review all of them from the technical perspective. And the amount of manual manipulations that need to be done for any cell and gene therapy product are absolutely astonishing in 2024.

09:54
Rehana Rupan
So looking at that and looking at the way the systems work and how you want to see those integrations, there's so much room there for machine learning on these data sets that's not being taken advantage of, again, largely because it's not compliant with what the FDA wants.

10:11
Kunaal Patel
Makes sense. And then. Oh, yeah, go ahead, Emory.

10:14
Emre Karatas
No, no, keep rolling.

10:15
Kunaal Patel
I was just gonna say on kind of that front within is. Does this also apply to. Or maybe this was also included in those. In that topic for, like, kind of the logistics layer for thinking about transport before or are there, like, conditions?

10:29
Rehana Rupan
So for logistics with cell and gene therapy, you're really looking at two things. You're looking at coi, which is chain of identity, and. And that's used for allergenic cell and gene therapy products. So products where you're taking a patient's own cells and turning it into something else. So chain of identity becomes really important because you need to make sure that you are giving a patient back their own cells. But across both products, allogeneic and autologous, you're looking at chain of custody. The fda, the European Medical Association, Japan, they have issued so many guidances on chain of custody recently because it is a problem, to be quite frank, A lot of companies don't have the controls in place that are needed with their logistics vendors to be able to maintain chain of custody to an extent that satisfies the FDA for these products.

11:23
Rehana Rupan
When you look at the risk factor of a cell and gene therapy product over a small molecule product and not having the necessary chain of custody controls, the risk factor is just so exponentially higher. So when we look at those things, those are topics that we talk about a lot in terms of commercialization. But even in the clinical space there are a lot of countries that will not allow you to execute your trials until you can prove that level of control. So that's why I think there's a lot of room for systems to come in and help with that. But I think again it's can those systems become compliant with the regulations, carry those certifications and can they maintain them throughout the life cycle of the product.

12:14
Emre Karatas
And within realizing you're focused on type one and we're talking about logistics and then we compare to the small molecule world. You're actually thinking through the rest of Vertex's pipeline right now. Do you have any other maybe like biologics that might be in the middle where it's like not the same complexity of cell and gene therapy with like that allogenic therapy described, but you know, still some considerations if not the same level of cell engine therapy.

12:44
Rehana Rupan
I mean it really is kind of an all or nothing game. I think small molecule across the board really doesn't have these kind of controls. And it's when you look at the formulation, right, like the formulation of a small molecule like oral dose tablet is in such a way that it's stable at room temperature and has a long shelf life of like three or four years, things like that. And so the logistics concerns are really constrained to like if there's a size issue, like if you're shipping like barrels and barrels of tablets at once to an area and that gets more into like the inventory management piece. And I think again that's a spot where there's a lot of room for machine learning to come in.

13:26
Rehana Rupan
But it's just about the fact that I think people hear machine learning and they hear AI and there's the excitement, but conversely the concern from a regulatory perspective.

13:42
Emre Karatas
Yeah, yeah. And then for you we've touched on a number of like the vendors like a cold chain Technologies or tive, for example. What other groups do you interact with in your day to day? Whether that's like CROs, other logistics service providers, whether they're smaller or some of the big boys like ups, like just like what are all different pieces of the puzzle that you day to day.

14:10
Rehana Rupan
So Cryoport's another big vendor that I would encourage you guys to look into. Cryoport does a lot services for cold chain shipment for like fertility clinics. They do a Lot of medicines. They do a lot of organ transplants. Quick Stat is a courier service is what we personally use. They're a little bit small. They're not super. They're not small by any means, but they're a little bit smaller and a little more niche. Then you have a company, it's called Time Matters. It's actually a wing of Lufthansa that does a lot of these, like, specialty couriers. And that's kind of the difference, too, between small molecule and cell and gene therapy. Cell and gene therapy typically requires something that's a little closer to like, white glove service.

14:58
Rehana Rupan
So to put it in perspective for you, and I don't know, Canal, if Ivy told you this, but I used to be the person that accompanied our drug product on a private jet. Yeah, it used to be the running joke because I'm actually from Germany and we would be going back and forth to Germany so often that I got to be home pretty often.

15:17
Kunaal Patel
That's awesome.

15:18
Rehana Rupan
So. But it is that level of intricacy where were paying 500,000 every single dose for a private jet to ensure that we could get our product there on time, cleared by customs, and dosed to the patient within the shelf life.

15:33
Kunaal Patel
That makes sense. And was that like. Was that a. Okay. The product needs to be. There needs to be some more progress on the product being a little bit more stable or having a longer shelf life or stable life versus. We just don't have the infrastructure for the logistics at this point.

15:53
Rehana Rupan
It's a combination of both, really. So obviously, as product life cycle goes on, you do more to dev. Work on stability. You gain more hours. But for a lot of cell and gene therapies, and this also applies to companies that do, like skin grafts organ transplants or things like that, those logistics have to be so closely managed that you would not believe the market for private jets for this. I actually, I'm a pilot too. I'm like listing all the insane things I do in my free time, but I'm a pilot. And so actually the group that I fly with a lot of them are commercial pilots. And they do this work where people own private jets and they lease them out for medical use and lots of companies.

16:40
Rehana Rupan
Actually, the biggest one, Vista Jet for private charters, is getting more and more into this space.

16:47
Emre Karatas
It's fun. Well, I'm jealous. I'm jealous. Pilot license and the.

16:56
Rehana Rupan
The free flight to Germany is really the best one.

16:58
Kunaal Patel
You'll have to send Ivy a selfie next time you're on, oh, she has.

17:02
Rehana Rupan
Photos of me on the plane of like, me with like cashmere socks, drinking wine.

17:08
Kunaal Patel
She's at. She's at the fda. Help helping the government now.

17:11
Rehana Rupan
How's, you know, she really chose to go for the greater good.

17:15
Emre Karatas
Yeah, this has all been great. Maybe a couple more questions that are coming up from somewhat you're describing. When you think about maybe some of those players you mentioned, like the quick stat or some of those couriers. Are you guys informing or pushing any use of technology down on them? And if not, could you like. I'm just trying to understand some of the dynamics. Let's assume it's the latest and greatest integration data. Lake, other things you're describing and you're like, hey, we want you to use this, whatever logistics, service provider you're using. Do you have that kind of capability and sway.

17:57
Rehana Rupan
So it's interesting because actually one of the projects I was doing when I was more fully in logistics and actually traveling and working with the couriers was I wanted them to build an API so that I could integrate their shipping, their shipment tracking, which is very rudimentary and very ugly, into a dashboard that would just feed up to our senior leadership versus me having to pull that data. And that was something they weren't willing to do because they were concerned about security issues with an API integration. So it's things like the industry is very slow to adapt is what I'll say. I think most people you talk to hear, they hear AI and they're like, oh, that insane dude in California. That's kind of the. I think, again, I'm one of the younger ones in my company.

18:47
Rehana Rupan
I continuously scare people with my use of ChatGPT. I have a background in machine learning too, so it's like I feel a little bit more comfortable with these things versus other people who hear this. You know, hey, feed all this bio sensor data into this computer and it'll tell you know, the optimal conditions for cell culture. People are buying that as quickly as you would hope here. And it's not any different, unfortunately, even at the bigger companies like an AstraZeneca or Pfizer, if anything it's worse because they can't be as agile because I have so many product lines.

19:23
Emre Karatas
Yeah, that's extremely helpful. I think a lot of our work and effort recently has been finding that middle ground. Right. Like there is like just scraping the website. No one will build an API for you. You can figure out some creative ways to get that data in other ways. So it's not as much AI, fancy AI on the front, but you're kind of doing a lot of work on the back end and it looks pretty similar. And again, this has been so helpful. Maybe last question, you talked about compliance and regulation and there's always that like thought or perception. It's a big concern. Are there any like one or two regulations or like effects that really are top of mind for you or Vertex today?

20:08
Rehana Rupan
Yeah. So 21 CFR part 11 is the main US guidance for electronic systems for pharmaceutical companies. Blanking on what the EU one is, but I'm sure you could easily find it if You Google like 21 CFR part 11, EU equivalent. They're pretty similar. I think, as you can imagine in the EU there are a lot more privacy laws. So I think when you look at using these systems, especially for chain of identity, where there's a patient that this is linking back to in the eu, that adds another layer of complexity because of gdpr. So that creates a lot more issues as well.

20:50
Emre Karatas
Well, great. This has been so helpful. Sorry I've been hiding the mic, but this has been great.

20:55
Rehana Rupan
No, I mean, is there anything else I can help you guys with? I mean, I think again, I have a tech background. This is what I love to do. My husband and I live in a smart home where our lights are synced to our calendars. Like, this is the life we lead. This is what I would like to, and I would like to see this industry apply more technology because the amount of waste and the amount of manual inputs that are being done are so detrimental to what we're trying to do and what the speed at which we're trying to do things.

21:26
Sean Doolan
So, so I don't want to put words in your mouth or assume anything, but is it sort of safe and fair to assume that you would. You think there is room for, you know, a new entrant to compete with Tide and Cold Chain Technologies, you know, in this fashion?

21:47
Rehana Rupan
It's a crowded space. I'll say that. I think if the prospective company or startup can target the right clientele and get into a company when they're still in a very, you know, startup stage and they can consider these options. It's more likely, I think, if you're looking at a startup to do this, you really need to get in with a company that is super early on in their development so that you build together. Because the problem is, you know, for a company like Ties, they're just getting started, but the customers they're targeting are established pharmaceutical companies that don't really have time for the growing pains. You know, I can't give them six months to figure out how to become compliant with a regulation because I'm already compliant.

22:41
Rehana Rupan
So if they're the ones bringing me down, I'm going to cut them loose and find somebody else and I'm going to go to like a sense attack or someone who's way more established in the industry. So awesome. I think that's the biggest thing is it's targeting the right clientele and I think there are no shortage of startups, especially in the solen gene therapy space that are trying to do really innovative and really cool things. But for a company like that to come to like a Vertex pharmaceuticals or an AstraZeneca or an Eli Lilly, they're going to get shot down.

23:19
Kunaal Patel
Kind of in that similar vein like thinking about like kind of a little bit more of like a sub focus within that like for. It seems like there is and let me know if I'm like kind off base with any of the assumptions. There seems like there is kind of like a disjointed or fractured landscape from like a data perspective across your existing vendors, across logistics. If there was like something like if there could be like an uber like interface where you were able to have real time tracking across all of your shipments with a modern tech like platform that sits horizontally across that, how would that be perceived? Or would there be. Is there like a current vendor that you guys are using from that like a parkour or is that something that is kind of like a need?

24:10
Rehana Rupan
I think that's a niche that's still pretty open. I think a lot of these vendors don't have competition that's pressuring them in that way. So I always hate and I always make fun of Ty because their whole thing has always been like we want to disrupt the industry but they don't do it well. Like if you want to disrupt the industry and you can find a way to maintain compliance while delivering some really cool like UX and like some really good value added technology, there's a great opportunity there. But I think it all comes down to like can you remain compliant, can you find a way to integrate with existing systems and can you just deliver real actualized value versus going with an established vendor?

25:00
Kunaal Patel
Thanks a ton.

25:03
Emre Karatas
Excuse me.

25:03
Rehana Rupan
Sorry about that.

25:04
Emre Karatas
Thank you. Well, this has been awesome. Maybe we'll keep doing our work and we'll find some great solutions to make your life easier.

25:13
Rehana Rupan
Yeah, no, I mean I'm always happy to talk about tech and pharma. Like I said, this is my background. This is probably what I miss most. My husband and I spend a lot of time doing, like, weird little tech projects just because we miss it so much. He's in product management now. I'm doing this, so. And you miss it a little bit. So amazing.

25:36
Sean Doolan
So much. Really appreciate your time.

25:39
Emre Karatas
Yeah, thanks.

25:40
Kunaal Patel
Yeah, thanks so much. And say. Say hi to Ivy for me. If and when I come up to Boston next time, we should all hang out. For sure.

25:48
Rehana Rupan
Yeah, definitely. I live in the suburbs, but I'm always around here now.

25:52
Kunaal Patel
Amazing. Well, thanks so much for taking time out of your schedule. I really appreciate it.

25:56
Rehana Rupan
Yeah, of course. Take care, guys. Good luck.

25:58
Kunaal Patel
Take care. Bye.