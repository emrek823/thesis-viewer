---
source_pdf: "https://drive.google.com/file/d/1q3_UR43nZK-gabLksBm3Df_7Monskvsa/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "tegus_sartorius-ag_82226_Director-Vaccine-Manufacturing-Commercialisations-at-Merck.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1q3_UR43nZK-gabLksBm3Df_7Monskvsa/view)

# Sartorius AG - Director, Vaccine Manufacturing & Commercialisations, at Merck

## Interview conducted on February 19, 2024

### Topics
*   Biomanufacturing
*   Software Tools
*   Process Optimization
*   Automation
*   Data Monitoring
*   Tech Transfer
*   Innovation
*   Biopharma

### Summary
The Tegus Client had a conversation with the Director of Vaccine Manufacturing & Commercializations at Merck about their experience in pharmaceutical manufacturing, including the use of automation systems and continuous commercial manufacturing. They discussed the use of SBOL software for data monitoring and analysis, noting that it requires custom models and has an upfront cost. The Director expressed the need for a solution that covers end-to-end biomanufacturing but acknowledged the time and resources required. They also discussed the desire for improved customization, automation, and data analysis in biomanufacturing processes. The conversation touched on the scalability of biopharma and the adoption of SBOL within the industry. The Director mentioned that companies are open to innovative start-ups if there is a business case for streamlining processes. They also provided information on the usage and cost of SBOL within their organization.

### Expert Details
Director, Vaccine Manufacturing & Commercialisations, at Merck & Company, Inc. Expert can speak to several software programs in the biomanufacturing industry along with the strengths and weaknesses of the players in this market.
Director, Vaccine Manufacturing & Commercialization, at Merck & Company, Inc. The expert's responsibilities include building a technology transfer organization to start up a 225,000 sq. ft. drug substance facility; Unit Operations, Validation Scope, and Analytical Scope.
The expert has spent the last 10 years at Merck. The expert worked their way through the Viral Vaccine Technology & Engineering speciality from 2012 - 2018. The expert then left the Directing seat to become the Director of End-to-End Engineering (2018-2019), and now the expert is the Director of the Manufacturing and Commercialization of Vaccines.
The expert can speak to biotech/pharma trends, supply chains, digital platforms for pharma, contract manufacturing, biologics, gene therapy, and cell therapy.

### Q&A

**Q: Incumbent Competitors: Can you talk about the market for biomanufacturing and specifically the software used (or not used) to manage, analyze and optimize bioprocesses?**
**A:** yes, there are a number of software programs used to do various things. DeltaV is an automated control system used to open/close valves, transfer product from tank to tank and run an automated process. Manufacturing Execution System (MES) is used as an electronic batch record that interacts with operators to document the batch and ensure compliance...several MES systems exist, including versions from Emerson, Werum, etc. The other major category of software is process monitoring software like PI Vision and Simca SBOL. PI Vision tracks individual process parameters real time while SBOL is a multivariate tool that works off of a built model.

**Q: Incumbent Competitors: What does the competitive market look for software related to biomanufacturing?**
**A:** the competitive market is crowded as many bio manufacturing companies look to digitize their operations.

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 1 of 9*

**Q: Incumbent Competitors: Can you name the strengths/ weaknesses of these players?**
**A:** yes, I can go through different vendors and explain how they operate, what sort of customer service they provide and the pros/cons of their products.

**Tegus Client**
Thank you for taking the time to speak with me today about Sartorius. To start off, could you please give us a quick overview of your background and experience in this space?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
I've been working for a large multinational pharmaceutical company for the last 12 years in vaccine and biologics manufacturing. So in that time, I've worked in the automation space with manufacturing execution system as well as distributed control systems. I've done tech transfer for new products, tech transfer in terms of site-to-site tech transfers and then as well as continuous commercial manufacturing.

So I use a lot of these systems every single day for the last 10-plus years, everything from helping to configure the systems to looking at ways to upgrade them and then also evaluating other systems to see what we could do. We use these systems in general from like a data monitoring perspective, process monitoring perspective, continued process verification as well as for control systems and other types of data analysis.

**Tegus Client**
All right, fantastic. Do you mind just letting us know exactly what kind of manufacturing you look after? Are you strictly in vaccine? Do you look at biologics as well? We're trying to understand what kind of manufacturing you look after?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
We do biologics and vaccines, so that would be monoclonal antibodies, recombinant proteins and then vaccines.

**Tegus Client**
Fantastic. Can you talk to us more about the process and what it looks like. So are you using bioreactors, what kind of user interfaces are there? And just talk more about the tech stack that sits within that process.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Sure. So most of the processes follow one large platform, the biologics processes are just on a larger scale. So for example, they may use more like 20,000 liter bioreactors and use more mammalian cells. Whereas with the vaccines, we do a lot of fermentation around 5,000 to 6,000 liters so that could use yeast or a co-live platform. So essentially, most processes have the same basic framework.

You have an upstream drug substance process, like I said, either bioreactors or fermenters. And then you have a downstream process, which will have a series of different filtration tangential flow filtration, chromatography steps in order to help purify the actual product, which could be either a monoclonal antibody or in combinant protein or a virus-like particle for vaccines.

And then as we go down into the formulation and filling process, that's more standard and then it just depends if you're doing bio [optimization] or liquid filling. The -- I think your other question was what do we actually use in terms of the different systems. Is that correct?

**Tegus Client**
No. Do you mind talking more about how you're tracking all of this? So you obviously have a lot of outputs from a lot of different machines. Is this output exported into Excel? How do you go about analytics when it comes to the bio.

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 2 of 9*

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes. So we have a few different platforms. So like one is actually using OSI PI Vision. That's one of the systems that we'll use. It's a data historian. So basically, PI, which is stands for Plant Information, you can create dashboards that look at various parameters. So let's say, in a bioreactor, you're looking to see pressure, temperature, dissolved oxygen, metabolite depending on how many probes you have in your actual system.

So the actual hardware will contain a bioreactor with a probe for dissolved oxygen or various different parameters. And then that actually goes back into the data historian and then you can actually look at things through either the data historian or through the distributed control systems, which we use DeltaV for. So basically, that's how you would get the data out. One thing we're also working on right now is called SBOL, S-B-O-L.

So that's a SIMCA product, S-I-M-C-A. And that's basically very similar to PI in that PI is various different parameters that you can look at on your computer screen, whereas with SBOL, you create a multivariate model that takes all those parameters into one score and one graph and you can actually track the progress of your batch.

So a lot of these are looked at there's like an operator machine interface on the shop floor, so an actual screen where you can look at it through DeltaV and then the engineers who are either on the shop floor or off the shop floor can sign in to either PI or SBOL and look at the progress of the batch as it's going. So that's how we would look at.

**Tegus Client**
Sorry, that's a really important point we'd like to understand a bit more. So SBOL, does that cover multiple machines, multiple hardware elements? Or is that something can you talk more about how it collates the data? And is it manual collation or is the collection process automatic?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes. The collection process is automatic. The thing about SBOL is that you need to create the model prior. So you, as a team, a cross-functional team prior to even using SBOL, you would come up with what are the parameters that are important to us. And then you would collectively create a multivariate model, saying that the score for pressure is this, the score for temperature is this, the score for dissolved oxygen is this.

It'll calculate that into one composite score. And then you as a team can then look at that particular parameter like once it's actually created. And you can look at it either together or individually on your computer. So essentially, the way that it's collating all that is through the data that's coming through the hardware itself in the bioreactor. So you'll have a probe that will send a signal from the bioreactor to the distributor control system then that data gets correlated into SBOL.

So it's basically all automatic, nothing is manual. You're getting that data as like a feedback loop, and then you can change course or do something if you see that there's some sort of deviation happening. So if the pressure goes up, while the batch is happening and it should not be going up, you can take action in order to relieve that pressure or to stop the process.

**Tegus Client**
And that's hardware agnostic. It plugs into all the different machines that you have?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
It will plug into like some of the standard ones, so the distributed control system like DeltaV. That's a very standard plug-in for SBOL. You can have that connection between DeltaV, which is usually what we use and what most other pharmaceutical companies use to connect. It will essentially take the data from DeltaV and it will aggregate that data, collate that data and then display it in the way that you configure it to display.

**Tegus Client**
Understood. And can you talk to us a bit more about SBOL. -- it sounds like a really great device. How do you

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 3 of 9*

-- what's the kind of contract looking like with SBOL? Is it a standalone platform? Do you pay a subscription for it? Can you talk to us more about the commercial terms around it?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes, sure. So you have like a certain number of licenses, each license, I believe, is about $1,000. So do you have to have people who understand how to use it, understand how to build those models and we get several licenses in order for our engineers to be able to have access to it. And so what were some of the first questions you asked, sorry?

**Tegus Client**
No, that's great. So trying to understand. So it's a usage-based license model? Or is it, do you have upfront costs associated with it? Is there an annual fee? We're just trying to understand the value of this.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes, yes. It's an upfront cost for a license for a fixed period of time. So let's say you want a license for a two-year period, you'd pay for that license and you pay for a number of licenses for that two-year period. What that comes with is that it will come with any particular patches or upgrades that SBOL provides in their software.

And so you would have that number of people be able to access SBOL. There is different types of access levels. There's an engineer type access. There's only like a reader access. There is no so it could be varying levels, but we would get a variety of those types and make sure that we have the right number of author or engineer access levels in order to be able to make changes as we need to.

**Tegus Client**
And just to clarify, SBOL is not an in-house application. It's an external software.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
It's an external software. It's from a company called SIMCA. I think it might be from Sartorius.

**Tegus Client**
We can validate that. And just to understand about other applications or other software that you use, do you use any other thing in tandem with SBOL or is SBOL sufficient for your bio-manufacturing needs?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
SBOL is sufficient, the only issue with SBOL is that for something like a fermentation or bioreactor process, it's very ideal. I think for something like a purification process, you might want to have something like PI, planting information because you can look at each of the individual parameters more readily.

So for our upstream processes, we use SBOL for our downstream processes, we tend to use we tend to use PI because then we'd have to create a multivariant model for every single piece of equipment that we have, and there's just a lot more in the downstream process. So we use the.

**Tegus Client**
Understood. Is there an appetite to have a solution that can cover end-to-end biomanufacturing both upstream and downstream? Or is there no value in something like that?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
No, there's value in that. I think it's really more about the amount of time. Like we could use SBOL for everything. It just requires us to put in the time, the effort and dedicate the resources to building those models. So that's why we've only done it for the upstream process. But we could, in theory, do it for every single unit operation. It's just something that takes time. So it already exists, you can use PI or you can use SBOL for both end-to-end.

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 4 of 9*

**Tegus Client**
And SBOL is more custom models that you build yourself is like -- there's no off-the-shelf model that you can use.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
No, because it's very dependent on the specific type of cells you have, the media you have, the process you run. So it really has to be -- like that's actually the selling point for SBOL is that it's not something that's just off the shelf. It really contextualizes the information in a way where you build that model.

And then if you make a process change, you can update the multivariant model to reflect that. So it's very specific. The platform anyone can use, but the multivariant model is going to be specific to your process.

**Tegus Client**
I have a quick question here, sorry, on the model. Do they provide any recommendation on what could be a good model? Or do you have to know that like any analysis that they would provide or recommendation on what could be a good model look like?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
They'll provide some very high-level recommendations. But once you get the hang of like what actually are the parameters and how they are weighted, then you, as a process engineer can really help to build that model yourself. It's fairly simple to use. And then essentially, like you'll see a graph with like a line, and that line ends up being your model.

As the process runs, you'll have the model line and then you'll have the actual line. And if the actual line and the model line deviate, then you know that something is off with one of the parameters. So it's something that they'll provide some high-level guidance, but really the whole idea is that it's supposed to be the friend of the process engineer to be able to say our model is working as it should. And if something is deviating then we need to look deeper into the root cause of that.

**Tegus Client**
And is there an analytics layer that sits above it. So you kind of touched on that there's potentially no machine learning, but do we have other AI features like can I do statistical analysis on top of it or other forms of analysis?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes. I mean there's some aspects of that. Typically, we would take all that data, and we'd actually put it into a different software, either jump from SAS or we would use something called Mantis or Datalynx, D-A-T-A-L-Y-N-X and those are basically softwares that we would use that can look at not just the in batch data, but it could take multiple batches, let's say, 100 batches, the last 100 batches and it can actually start to look at different type of statistical trends.

Like upward trends, downward trends, upward shifts, downward shifts, outliers, all that stuff, you can configure that differently. So that's another aspect of it that we tend to look at from like a batch to batch versus SBOL is more inside your one batch. It's looking at the in-batch data versus the batch-to-batch data, if that make sense?

**Tegus Client**
It does. And with SBOL, sorry, to take you back a second, does it also do real-time monitoring and time series.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes. That's kind of the idea that you're looking at it real time, and you can even have like a display or a screen on the shop floor and the operators can see if the batch is running as it should be running. So it's supposed to be part of like a visual factory concept.

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 5 of 9*

**Tegus Client**
Is there appetite for an end-to-end automated process and biomanufacturing, a closed loop one, if you like? Or is there a demand for -- or a need perhaps for process engineers to be involved? Just talking more about the dynamics of biopharma manufacturing and the comfort and the adoption, for example.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Can you maybe elaborate more on what you mean by end-to-end? How is it different than what we would have right now with SBOL?

**Tegus Client**
With the idea of removing the need for human intervention, a closed-loop system that could monitor a bat all the way through provide recommendations, activate the next machine with minimum human intervention. Is that a trend that we're seeing in biomanufacturing?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Oh, yes, definitely. I mean if there's an opportunity to have less human like interactions and having the operators be able to get recommendations when, let's say there's a deviation from the model line. And so it will provide the operator with a recommendation on what to do next without having to call someone up at three a.m. in the morning, that would be ideal.

**Tegus Client**
Understood. So you've explained it really well. I just wanted to understand a bit more about some of the pain points that you have with the current system. Where can it improve?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
I think in the model building process, it could improve in that maybe having a little bit more customization when we're talking about or recommendation to the previous person's point for something like a fermentation process with these types of cells for cell line.

Is there a way where SIMCA or SBOL can provide, maybe some information without giving up or giving away where they're getting that information from other customers, like what do other customers use in order to build the models better. So being able to kind of use the number of customers they have in order to kind of inform the other individual customers on how to build the best models.

**Tegus Client**
Can I just jump in quickly? I think at as an interesting distinction that you did you have your kind of data that's from a specific that's live, et cetera. But then when you look at your historical data, you do that in a separate system and look kind of for historical trends.

I think one of it that we see an opportunity in is actually combining those. So you have your in batch data and also historical data. So you can actually run that kind of recommendation and forecast line, if that makes sense.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes. I mean that would be great, too, because a lot of times like some of these process monitoring, like systems like PI and ESP, they have limited statistical process control functionality. So it will be great, honestly. We also do something like continued process verification like where we need to generate reports on the batch-to-batch data over the last 30 batches.

Can it just generate something from SIMCA SBOL without us having to write documents? Or if there's a deviation like can it just write like a deviation report and pop out the root cause, that would also reduce the need for process engineers and investigation authors. So I think like something end-to-end, like you're saying that has the functionality of the in-batch versus batch to batch with the statistical process control capabilities, I think, would be the ideal solution for all of these things.

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 6 of 9*

**Tegus Client**
Makes sense. And can we now touch on something really interesting, which is the tech transfer element of your job. Can you talk to us more about how you procure software, what you look for? And how long would your contract with SBOL be? Would you be open to new opportunities or new software? Just talk to us about how that tech-transfer piece looks like in biomanufacturing.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes, sure. I mean, so from a tech transfer perspective, we would contract with an equipment manufacturer when we would select that just based on several bids and quotes in order to build the actual equipment. And then we would then look to kind of overlay with the equipment, the distributed control system functionality. Typically, we'd go with like DeltaV. And then from there, we would then select like what type of process monitoring or data analytics tools like SBOL or PI that we would then want to implement.

Typically, for any new tech transfer or new product, we'd probably use the tools that we already have at our particular manufacturing site. So like PI is used everywhere, regardless if it's upstream, downstream, filling, operations, vaccines, biologics. So we would typically already have PI. But for certain things like fermentation and bioreactors, we would then also want to bring in a multivariate model like SBOL.

So it's kind of -- it's pretty standard. There's not really a lot of decision-making associated with that. You always want some like one of these systems. It's really a matter of whether you want to implement SBOL or not. And like I mentioned before, sometimes it makes more sense than others. So you'd also see what -- from a tech transfer perspective, what's the sending site doing?

So that could be from research and development. It could also be a site-to-site tech transfer. So you could see what the current site is actually using and try and implement that if you make sense or increase the capabilities if that's what we need to do if it's an old process.

**Tegus Client**
So if a software company wants to sell into the biopharma stack, how would they go about it? Would they have to do to individual sites? Is there a main site? How does that hierarchy look like?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes. They can go to the procurement departments at the different companies that are looking at those things. Another like avenue that they can go to because that's a little bit more difficult to kind of identify the procurement professionals. If you can go to individual sites, a lot of times, we have companies who will want to come to us and do like a lunch and learn.

And so they'll kind of display what they can do. They'll bring information, bring representatives, sales representatives and technical representatives to our site, just interact with us, contact us on LinkedIn or just via e-mail. Another big way to go is to go to different conferences. So I think that's a pretty big way to get as many people as possible.

So the International Society of Pharmaceutical engineers as well as various pharmaceutical expos around the country that would look at these types of things. And so you can get a lot of exposure there. So I think that, that would be -- and then like, once you get into a company with like one or two sites, it makes it a lot easier because then it kind of grows like wildfire, especially if there's a lot of success with it.

**Tegus Client**
So are these sites stand-alone then in their procurement, there's no kind of -- it's difficult to scale vertically in a way.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
It's not difficult to scale. It's just that people in pharmaceutical manufacturing, they tend to be a little bit hesitant to change because a lot of these things may require us to update our license documents and get approval. We can use it as a business tool, but if we wanted to use it in order to make decisions on a particular batch, then it would require us to put it in our pharmaceutical like our biologics license application,

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 7 of 9*

which then would require more work.

So it's not that -- I think it's you need to kind of get in through like a gateway. And then once you get in there and you can show and prove your concept, then I think it can actually start spreading pretty quickly.

**Tegus Client**
Do you have any samples of companies that are actually managed to do that journey within biopharma? Any software that actually managed to scale?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Any companies that have software that has managed to stay, you said?

**Tegus Client**
Sorry, scale within biopharma because you said it can scale like wildfire if you get it right? Have you seen any examples of that?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
Yes. I mean like PI is something that is used throughout Merck, I have colleagues who are at Pfizer or Novartis and some of these other companies, and they all use the same things. We have people that come from different companies or we have people that leave our company and go to other companies, and they're all using the same types of systems.

SBOL is no exception, PI is no exception. So I mean, like these are becoming very standard tools. PI is certainly very standard. I think the multivariate model is something that's a little bit newer and people are starting to see the benefits of it. And so it's spreading quite a bit. For example, our company has four to six sites in the United States and one or two started using it and now all of them are using SBOL.

So it's something that has happened over the last five to seven years. So it's not something that's a huge hindrance or difficult to do. It just you kind of have to get that exposure to it and it will start to catch on.

**Tegus Client**
Got it. What sort of new and innovative SBOL is sort of when they were founded, but how often are you to like new innovations like start-ups coming in. I guess, like I'm not mentioning any specific, I'm just curious whether the biopharma manufacturers are open to bringing in like a newly started innovative companies.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
I mean I think that a lot of times, we just have to make the business case. If there's a business case that's truly going to transform the business to the previous person's point, if it allows you to have -- have people that can we don't need to use as many process engineers or we have less deviations or we have less discards of product.

If there's a way to prove out that concept, I think leaders at different sites and different companies are willing to look at anything if it can kind of streamline things and make things more efficient. So it's really a matter of.

**Tegus Client**
And then maybe just like going on the usage of SBOL. So how many people are using that or how many licenses do you have to be able to do?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
At our site, there's about 30, 30 people that use it. Probably 20 to 25 of those people use it on a daily basis for like every single batch. And then there's probably about five people to 10 people who like are experienced in building out models. So there's people who look at it and use it in order to react to an issue, then there's people who are more versed in the model building of it.

*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 8 of 9*

**Tegus Client**
And do you also use a digital note book like Benchling?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
We use the ELN electronic lab notebook, but that's more from like a documentation point of view in our process development lab, but not really from a GMP, good manufacturing process perspective?

**Tegus Client**
Does that data come into SBOL in a way? Or are there processes and data that is not required to have in SBOL.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
No there's no requirement for that.

**Tegus Client**
How much do you paid for SBOL?

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
It's about $1,000 per license. So we have about 30 licenses over two years. So it's about $30,000.

**Tegus Client**
I think my last question would just be around these 30 people that are in SBOL then. If I would put that in relation to the size of your operations, what metric would be helpful to understand the relationship we have about the people and maybe how many runs you're doing per day or how many bioreactors you have.

**Director, Vaccine Manufacturing & Commercialisations, at Merck**
So we have six bioreactors/fermenters at our site. We have about 1,200 people, but not everyone works on like an upstream biologics or vaccine process. A lot of people work on downstream or they work on formulation and filling.

So you need probably about like within an organization of about 200 people, you probably need four to six people there who are well versed in it, and then you need probably the 10 to 20 people in that particular operation for fermentation or bioreactors who can at least understand what the data is telling them. So I don't know if that helps you, but like.

**Tegus Client**
Perfect. Thank you for your time. This was very helpful.

*Tegus is not a registered investment advisor or broker-dealer, and is not licensed nor qualified to provide investment advice. The information published in this transcript ("Content") is for information purposes only and should not be used as the sole basis for making any investment decision. Tegus, Inc. ("Tegus") makes no representations and accepts no liability for the Content or for any errors, omissions, or inaccuracies will in no way be held liable for any potential or actual violations of United States laws, including without limitation any securities laws, based on Information sent to you by Tegus. The views of the advisor expressed in the Content are those of the advisor and they are not endorsed by, nor do they represent the opinion of, Tegus. Tegus reserves all copyright, intellectual and other property rights in the Content. The Content is protected by the Copyright Laws of the United States and may not be copied, reproduced, sold, published, modified or exploited in any way without the express written consent of Tegus.*
*THIS DOCUMENT MAY NOT BE REPRODUCED, DISTRIBUTED, OR TRANSMITTED IN ANY FORM OR BY ANY MEANS INCLUDING RESALE OF ANY PART, UNAUTHORIZED DISTRIBUTION TO A THIRD PARTY OR OTHER METHODS, WITHOUT THE PRIOR WRITTEN PERMISSION OF TEGUS INC.*
*Tegus*
*Page 9 of 9*