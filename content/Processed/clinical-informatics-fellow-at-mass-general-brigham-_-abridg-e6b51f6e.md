---
source_pdf: "https://drive.google.com/file/d/1FPK-4psAh2u3-1KwSgjKL9U5K2b8OMRE/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Clinical Informatics Fellow at Mass General Brigham _ Abridge _ Tegus.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1FPK-4psAh2u3-1KwSgjKL9U5K2b8OMRE/view)

# Abridge - Clinical Informatics Fellow at Mass General Brigham

Interview conducted on July 28, 2025

## Topics
Ambient Documentation, Chart Summarization, Medical LLM, Operational Workflows, Healthcare Integration, Clinical Workflows, Clinician Burnout, Health Systems

## Summary
The Tegus Client and expert discussed the decision-making process between building or buying LLM-based solutions for healthcare systems, emphasizing customization for local workflows and the benefits of bundling solutions from one vendor. They also explored the use cases of LLMs in healthcare, including ambient documentation and in-basket messaging, with vendors like Abridge and Nuance being utilized. The expert highlighted challenges with patient data due to HIPAA compliance and uncertainties regarding the future direction of LLM development in the medical field.

## Expert Details
Clinical Informatics Fellow at Mass General Brigham The expert has a deep understanding of this space, explaining that they have worked with Google Med Palm, OpenAl, Meta, and DeepSeek. The expert also explains that the primary use case is ambient documentation. They are also testing chart summarisation, disease phenotyping, and information extraction for research applications.

Current Cardiovascular Medicine Fellow at Brigham and Women's Hospital. The expert specializes in cardiometabolic diseases and the use of data science to improve cardiovascular health.

Former Resident Physician, Internal Medicine at Yale-New Haven Hospital, leaving June 30, 2022. The expert has a background in clinical and translational research on cardiometabolics. The expert is currently exploring large national data to study the real-world utilization of novel cardiometabolic therapies.

The expert received their MD from Tehran University of Medical Sciences and completed a Postdoctoral Research Fellowship at the Mayo Clinic. The expert can speak to GLP-1 accolades, which they are also actively doing research on. Most of the expert's research focuses on metabolic syndrome and has done research on mitochondrial medications as well.

While the expert is not familiar with Rhythm Pharmaceuticals, they are familiar with the obesity space and FDA approved obesity treatments. Most of the expert's research has been on obesity and hypertension, as well as the utilization of novel cardiometabolic therapies.

**Q: Please rate your familiarity of each from 1 to 5 with 5 being most familiar.: Corti, Hippocratic Polaris, Google Med PaLM, OpenAI GPT, Meta Llama, DeepSeek R1, etc, Are you a current customer of any of these solutions? (please specify) If not do you use an inhouse solution?**
A: I have worked with Google Med Palm, OpenAl, Meta, and DeepSeek

**Q: Were you the final decision maker to bring on this solution? If not, were you a part of the evaluation process? When was it you made this decision (year)?**
A: I have not been the main decision maker, but have been involved in those decisions. Our company has been using LLMs for the past two years

**Q: Did you evaluate any others during the selection process? Please specify. What criteria made you choose this solution over the others?**

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 1 of 8

A: We have used a number of these solutions. I can speak about the differences.

**Q: What is the primary use case or product deployment angle for a medical-specific LLM in your business?**
A: The primary use case is ambient documentation. We are also testing chart summarisation, disease phenotyping, and information extraction for research applications.

## Client
Thank you for your time. We're looking to learn a little bit more about the medical LLM landscape, in particular to get a bit of detail on what use cases you guys have for them, as well as your decisions to try out the various players that I think you mentioned to the expert networks, and get your thoughts on each one, both from a usage perspective as well as a setup and deployment perspective.

## Expert
Yeah, that sounds good. I can start at the big picture and then maybe share a little about where things stand right now and at least in the U.S., how health systems are trying to integrate them. Are you thinking mostly about these medical LLM applications, like in the operational workflows in the healthcare, or is it the more broader view that you guys are interested in?

## Client
I think we're basically interested in broadly what are the current use cases for them as well as then what could the potential use cases be. Maybe to start with, it would also be really helpful to understand, you guys mentioned that you're using them for ambient scribing for example, your choice to build your own tool using an LLM versus buying a scribe like Nabla or Abridge or whoever it is.

## Expert
Maybe we can start from there because I feel ambient documentation has been rapidly expanding and it's mind-blowing how at least medical centers started to integrate that in their clinical workflows. It's probably a technology that some of the companies that are taking the lead on that, they have been around for some time, but I feel with around 2023 and with these LLMs becoming more mainstream, they eventually had the toolkit that could allow them to operationalize that.

Abridge is probably a big example of that because I think they started their work back in 2019 and they have been working on that space of clinician burnout. As you can imagine, especially in the U.S. with a lot of the regulations around, the documentation is a big burden on the clinicians. People spend three or four hours a day, depending on their specialty, just to document. With these LLMs, it actually gave them the tool to create that passive listener during the encounter, whereby the end of your clinical encounter, you walk out of the room and you already have notes ready for you.

I feel there are several of these companies out there and they are trying to find their own markets. Abridge is certainly a leader. At least in my health systems, we are using Abridge and we are using Nuance. The health system decided to go with two solutions and other health systems went with different directions.

Some of the big health systems tried to roll out some pilots to actually test these different algorithms because as you can imagine, the exact nature of what models they are using, are they fine-tuning their own data, is it proprietary, or is it just some off-the-shelf large language model that they are integrated in their workflow, that's not always clear. Even if everyone uses the same model depending on the setting, you can imagine that the primary care encounter would be very different than, for example, a palliative care encounter, than a surgical encounter.

You go see a surgeon, the questions are very specific. There is not a lot of social context in there. The notes are fairly shorter but then in psychiatry or a palliative care, or even a primary care encounter, there is a lot more context about people's lifestyle and what they do, what they eat, how much they exercise, their social life, and a lot other stuff. Some of that is more medical, some of that is more social, but has clinical implications.

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 2 of 8

The choice of model would be important but the context is also important because one model could do really well because they are like, "Might be really well structured, but they might be fine-tuned on a certain set of data that, for example, does really well for primary care encounters, but may not do as well for like a cardiology encounter or for a palliative care encounter."

There are a lot of variations and health systems, some of them, the ones that I think actually did it right, decided to just go with the pilot, try six, seven, eight different algorithms and then just create their own benchmark and then just go with whoever comes solution was scoring the best and that benchmark.

You see a lot of variations across the health systems in the U.S., but I think Abridge certainly had the first-mover advantage because they already were working in this space and then they could immediately capitalize on the market and they are run by clinicians so they had a lot of good network and connections and the pain in the market was actually real. For years and years people were looking for ways to mitigate the clinician burden. I can tell you more about how things are going and how the rollout was in our health system.

## Client
That was really helpful. Maybe one quick question just to follow up, you mentioned how some people are buying off-the-shelf models like Abridge, some people are building their own. Can you give me an idea of why it is that you would build your own as a hospital or a health system? I'm sure some of it is to do with scale. Are you basically saying that it's now easy enough for a big hospital to build something versus buying it?

## Expert
It's always a good question for essentially the informatics programs that always are thinking about building versus buying because it depends on the size of the health system. I work in a fairly large health system and there is a lot of infrastructure, but typically, at the end of the day, it's coming down to the maintenance because especially with these AI systems, you really need to stay on top of it and you really need to monitor that in real time.

There are well-known phenomena that's how these models can sometimes lose their performance over time because the sample that you are putting into them are the real-world scenarios change. People may start changing their behavior, the guidelines change, the reimbursement systems change. People start changing their practice.

If you don't modify your AI system over time, then the AI system might do well initially but over time you will see the rapid performance. Always the question is that "If I build a solution myself, who is going to take care of it? Who is going to keep an eye on that, update the model, make sure that it always performs well and then have that 24/7 support?" The short answer is that it's not always easy to pay for the maintenance.

You might be able to build a great model using your own internal data and you know that at least locally it's going to probably do better than many other proprietary systems because it is all fine-tuned on your own data. Here generalizability is not as much important. What really matters is the local performance.

Because you know that in the long run you are going to get into trouble there is a team who is going to build this but that team may switch off and they may not be around or they might just not be able to provide the 24/7 support, then over time, you realize that it's much easier, much less headache to work with a vendor rather than just trying to maintain 100 different softwares internally.

That's one of the big considerations. I don't think the answer is always a yes or no or one way or another for different solutions. I feel when we are talking about ambient occupancy and you're going to roll it out in the whole health system that we have thousands and thousands of users working with vendors would actually be a lot easier to maintain the program.

I'm not connected to Abridge, but from what I know from their publicly shared information, I believe they also have their own proprietary algorithm. I don't know if they have fine-tuned on what data, but at least based on what they have shared with the public, my sense is that it's not just an off-the-shelf LLM. My sense is that they have fine-tuned or at least provided some context to their model to perform better in the health system.

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 3 of 8

## Client
I think that's right for basically all of the big scribe vendors. Abridge, Nabla, Suki, DeepScribe, even Nuance now with their DAX product they're off the shelf but they've also been trained on a corpus of data. Let's say if it is for just scribing, the reason for you to build your own would be if you basically don't want your data being hosted on a cloud server or it has to be on-prem. I'm trying to understand why would you not just buy off the shelf. If it's a scribing use case, why would you build your own? Maybe on the privacy side, I don't know.

## Expert
I feel it might be less about privacy. It might be more about this dichotomy between the customization of the model depending on your local workflows versus harmonization and standardization with other systems. Because that's typically where everything is going to come to the fork. If you are trying to be like everyone else, you are going to follow some standards.

For example, the electronic health record system in the U.S., 80% of the market is going with Epic. Why do they do that? Because if you work with Epic, then it's going to open the door for a lot of other modular solutions that you can plug in and you can just use them instead of going to build every single one of them.

The downside is that, if you go with the same workflow that is universal, then you have less flexibility to modify that based on your local workflow. For example, here, you may say that "My primary care providers encounters are 25 minutes long," and then you might have the average PCP encounter in the U.S. might be 15 minutes long. I'm just making up numbers here, but you can imagine that the summary that you are going to get from a 25-minute long encounter would be different than from the 15-minute long.

How much detail do you want to have in it? What is actually important to you, what patients you see more? Maybe you are in a safety net hospital and you see a lot of people who have very limited social support. What really matters to you is that I'm just going to touch on as many clinically important and relevant issues that I can during my encounter. On the other side, you might have this concierge, private practice clinical care setting.

Yes, the conversations are very different. Of course, if you fine-tune your model on two different data sets, you are going to get two different models that of course you're going to do better on your local sample. It is going to be the question of, "Okay, how much variation I have in my system, what is the pros and cons of going with this vendor or what else I can get from them down the road that if I just build my own, it might become more challenging."

For example, the next probably big LLM application that is going to come to the market will be chart summarization because we are just drowning in a huge corpus of data in our medical records. You want to have a solution that can retrieve the information from the chart and then instead of you going to look for the data, you just ask a question from some LLM-based assistance or agenctic workflow and it will just tell you, "Okay, when was the last time this patient took aspirin and why aspirin was not stopped?"

It will save you time if you can just have a solution to do that for you. If I'm working with Abridge or with Epic or with whoever vendor, and then a year later, they can have this other solution that is not just ambient documentation, but it is also the chart summarization, then it would be a lot easier for me to test it or deploy that or probably get a discount if I'm buying the whole thing in a bundle.

That is essentially what Epic is selling a lot of their products to the health system. Sometimes they just share that for free because you are just going with Epic and you are already so much invested in Epic that it makes sense for you to just use them even if their solution is not the best in class.

## Client
Getting multiple solutions in a bundle from one vendor who is going to take care of all the maintenance and you still open your doors to future solutions that you know they are going to be LLM-based, that is probably going to be the biggest incentive for not building them yourself.

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 4 of 8

Yeah, it makes sense. There's a lot of convenience for it. I'm just conscious of the time here. If we leave that aside for the time being, you've evaluated a number of different LLM vendors. What was your key use case for those?

## Expert
If they're personal use case, there are LLMs, whether medical or non-medical, that I use for my research, coding, literature review, or writing, stuff like that. There are essentially LLM-based solutions that we have in our health systems. It was a major health system. It was the whole process of who are the possible solutions out there, what are the pros and cons, how much this is going to cost us, what kind of scale we are thinking about to deploy, and then what would be the pros and cons of going with either of them.

I can speak to both of them on the personal side. I am testing a lot of different things for many different applications, and I feel the best in class sometimes becomes use-dependent. For example, if I am trying to write code, Claude is probably the best one. If I am trying to summarize a medical note or just use some LLM-based application for medical research, the scale would be one like how much this is going to cost me.

Especially for the local models, can I run them on a GPU and how much that GPU is going to cost me? If I'm using the HIPAA protected data, then I have to be mindful of I can't just put this onto Gemini or ChatGPT or Claude, I need to have this HIPAA compliance instance.

In our health system, we have a GPT-based HIPAA-compliant instance where we can essentially just upload patient data. We know that there is this business agreement between our health system and OpenAl/Microsoft that they are not going to use this information for their model training. Privacy is the consideration. Performance is a consideration. I think cost is one. At the end of the day, especially on the research side, you realize that depending on the use case that you are interested in, sometimes it's like a simple classification task.

I'm trying to classify a bunch of clinical notes for a certain disease phenotype like who has aortic stenosis or who has hypertension. That would be one level of complexity, and then the other side could be an agentic workflow that I want to build this agent that is using these deep learning tools to perform this multi-step command task. Of course, in that case I need to use something that is much stronger and then the domain that I'm interested is the tool use. The short answer is that is very much application-dependent.

On the health system side to a large extent, it depends on organizational considerations. We talked about some of the considerations they have about building versus buying. I feel because this is a big health system, there is a lot about how much I think that this specific vendor is going to be around five years later, 10 years later. That's why that legacy, how big is your practice or your business, what is your performance metric? These are all going to be coming into consideration.

## Client
Makes sense. Specifically, what use cases are you using these LLMs for within the health system, leaving you personally out of the picture?

## Expert
In our health system, ambient documentation is one which is now fairly accessible to almost everyone in our system.

## Client
Did you build that yourself or is that via Abridge?

## Expert
No, this is via Abridge and Nuance. We have two solutions and we can essentially choose one versus the other. They're still trying to roll it. I think now all the departments have access to that. It was a year-long process to expand access to different departments. We started with primary care system because we felt that's where you get the biggest bang for the buck.

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 5 of 8

Over time, we expanded to the emergency room and the department of medicine and then almost all the faculty across the whole health system. That's the biggest one by far. The second one that is still more on the pilot stage is the in-basket messaging. The in-basket is essentially that patient portal that they can send you a message from their home, they can send you a message and you are supposed to respond to that.

The current workflow is that, a lot of the times, you have some triaging nurses that would triage these messages and if there is something that they can respond easily, they will just do that. If that needs some medical expertise, then they have to escalate that to a clinician, a physician, for example. We are testing these in-basket messaging solutions that you can get these LLMs to draft a response for you and then you can decide, "Is this response good enough or not? Do I want to just use it the way that it is or do I need to modify that?"

Of course, how you build guardrails around that that you don't want the LLM to start hallucinating or giving medical recommendations that may or may not be true. That's the critical part. The second part to that solution is that, how much context you can provide to these LLMs because they would be like other use cases. The more that they know of that situation, the better that response would be.

They're going to be less reliant on their internal knowledge and more reliant on the context of, "This is the patient, this is the question, this is the guideline that can answer that." Building that context would be tricky and I don't think we have got that finalized yet. I think we are still in the process of making sure, "Okay, this is good enough, safe enough and actually saving people time."

## Client
What models are you using right now for that messaging reply system?

## Expert
These are GPT-based models and these are essentially still internal solutions. There are pilots that we are working with Epic, which is the electronic health record in our system. Epic is trying to build their own solutions and they haven't finalized that as far as I know, but they are trying to get feedback from the health systems both for the in-basket messaging and for the chart summarization that I think would be the third one.

We don't have anything operational yet for the chart summarization, but there are patchy works that different groups are using LLMs, especially that HIPAA-compliant GPT-four instance that we have to summarize the notes or the clinical documents that they have. Some people are testing that for enrolling patients, finding patients from the electronic health record to enroll them in clinical trials.

There are projects that we have in our system that are trying to enroll people into hospital programs. For example, the home hospital is one program that we have here. It's important for us to be able to go over a certain number of inclusion and exclusion criteria that who would be eligible for this specific clinical trial, who would be eligible for this specific home hospital program.

Epic is another one that as I said, they are building their own solutions and as far as I know they are trying to get feedback from us and I'm sure that they are doing that with other health systems. I would say those are the three major applications that we have. On the health system side, the ambient documentation is already up and running. The other two are still in the development stage.

## Client
Got it. What are you building yourself out of that? Obviously, you're using Nuance for summarization for the order replies. Is that something that your engineering team is building using a GPT model or is that also something you're buying in?

## Expert
What I do on my research side, it's less on the informatics program, it's more as a research project. My specific interest is in creating agent frameworks. Essentially what I'm doing is giving different tools to these large language models for them to be able to do things that are beyond their language context, essentially

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 6 of 8

getting them to do itself rather than just retrieve some part of the language or a clinical note.

My background is more on the cardiology side so I'm trying to build agentic frameworks that can interpret EKGs or interpret echocardiography studies like ultrasounds of the heart and then just try to figure out what is the higher order. As the tasks become more and more complex, how these large language models can reason what tool I need to use to perform what kind of task.

For that, one of my limitations right now is that if I want to use the actual patient data, I need to have a setup where I know if HIPAA-compliant or I need to use a data set that I know does not need HIPAA compliance itself and the data is already de-identified, and that would limit the number of options that I have. I have been testing Gemini and GPT as the core LLM.

I haven't been using Claude as part of the agency frameworks. I think the way that I use it is like everyone else just trying to write code and get the script right. I'm using LLM as the brain of an agency framework, then if the two choices have been Gemini and GPT, and it turns out that you need really powerful LLMs that are good at multi-step reasoning and then sometimes small open-source models are not doing great in those fronts.

## Client
That is helpful. Do you think there's really a future for these medical specific LLMs for the use cases you've described, or do you think the more generalist LLMs will quite quickly catch up to them in terms of what they're able to do? Right now, is the value mostly in terms of the accuracy and the reliability or is it the deployment on private clouds and the fact that they're HIPAA-compliant?

## Expert
This is actually a million-dollar question and it's a great question and I don't know anyone knows the answer to that. I feel what I'm seeing on the research side is that if you decide to fine-tune a very high-performing general-purpose large language model on some medical corpus, you will lose some of these capabilities.

I feel a lot of the best-performing examples so far has been either on the retrieval augmented generation pathways or essentially the agentic pathways, but they're still using the general-purpose LLMs. I started trying some of these more medical fine-tuned open-source models like. but these are small models and I think cost would still be a consideration like how many GPUs you can use on these systems.

I am still not sold on the idea that fine-tuning a large language model on the medical corpus would be absolutely necessary to use these large language models for medical purposes. I feel if you give them context, you can still take advantage of best of the both worlds. They still have great tool use and function calling and then essentially language understanding on one side, but they also have the medical context either through RAG or other forms of process engineering.

I think the jury is still out. Maybe someday Google is working a lot on this. They are trying to fine-tune their own Gemini-based models on a medical corpus. The problem is that the limiting factor is always the type of open-source public data that is available to everyone.

All these companies that they can use to fine-tune their model for medical purposes is always limited and it's very well-biased. You never get the actual patient data at the scale that we have. We take care of millions of patients here. You don't get that amount of data public. All these companies are limited by their lack of access, and a big part of it is because HIPAA just tied their hands. I think that would be a dichotomy that we still need to see where things set up.

## Client
Got it. I think that's all the questions I had for you, so thanks for the time. This has been very helpful.

AlphaSense is not a registered investment advisor or broker-dealer, and is not licensed nor qualified to provide investment advice. The information published in this transcript ("Content") is for information purposes only and should not be used as the sole basis for making any investment decision. AlphaSense, Inc. ("AlphaSense") makes no representations and accepts no liability for the Content or for any errors, omissions, or inaccuracies will in no way be held liable for any potential or actual violations of United States laws.

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 7 of 8

including without limitation any securities laws, based on Information sent to you by AlphaSense. The views of the advisor expressed in the Content are those of the advisor and they are not endorsed by, nor do they represent the opinion of, AlphaSense. AlphaSense reserves all copyright, intellectual and other property rights in the Content. The Content is protected by the Copyright Laws of the United States and may not be copied, reproduced, sold, published, modified or exploited in any way without the express written consent of AlphaSense.

AlphaSense
Sean Doolan
sd@virtuevc.com
DO NOT COPY

THIS DOCUMENT AND ITS CONTENTS ARE PROPRIETARY TO ALPHASENSE, INC. AND IS PROVIDED SUBJECT TO THE TERMS OF ANY APPLICABLE SERVICE AGREEMENT. NO PART OF THIS DOCUMENT MAY BE COPIED, REPRODUCED, REPUBLISHED, UPLOADED, POSTED, TRANSMITTED, DISTRIBUTED, OR DISCLOSED IN ANY FORM OR BY ANY MEANS - INCLUDING BUT NOT LIMITED TO RESALE OR REDISTRIBUTION TO ANY THIRD PARTY - OR USED IN CONNECTION WITH ANY LARGE LANGUAGE MODEL, GENERATIVE ARTIFICIAL INTELLIGENCE TECHNOLOGY, OR OTHER SIMILAR TECHNOLOGIES, WITHOUT THE PRIOR WRITTEN CONSENT OF ALPHASENSE.

Page 8 of 8