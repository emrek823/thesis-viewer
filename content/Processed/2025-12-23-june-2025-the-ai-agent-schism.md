---
url: https://writing.kunle.app/p/june-2025-the-ai-agent-schism
title: "June 2025: The AI agent schism"
clipped: 2025-12-23 13:00
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# June 2025: The AI agent schism

> Source: [https://writing.kunle.app/p/june-2025-the-ai-agent-schism](https://writing.kunle.app/p/june-2025-the-ai-agent-schism)

# June 2025: The AI agent schism

### How AI agents are being used is different from how people \*think\* they're being used (particularly in enterprise)

[![Kunle's avatar](https://substackcdn.com/image/fetch/$s_!UvCZ!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe984aba6-fa3d-4aa0-bc7b-f0dc8264e91e_800x800.jpeg)](https://substack.com/@ayokunle)

[Kunle](https://substack.com/@ayokunle)

Jun 25, 2025

14

4

4

Share

There’s a schism forming in the world of AI Agents. The best words I have for it are deterministic and non deterministic. Before Substrate, I personally came into this world thinking AI agents, because they would often replace human tasks, would work like humans: where they would be able to cheaply apply “reasoning” in each step of a task being completed, and be able to decide autonomously to loop in other tasks and workflows in order to complete a step.

### Deterministic vs. non-deterministic

In this context, the level of determinism is driven by how likely it is that the inputs, the steps in the execution path, or the outputs in a particular workflow will be different in substance between workflow runs. On the fully deterministic end of the spectrum is effectively an API: the payload (input), endpoint (path), and response (output) are the same every time. On the non-deterministic end of the spectrum is something like a deep research agent: the prompt + context (input), calls (path) and the output are different every single time. For the moment I’m focused on how deterministic the execution path is because LLMs already do a great job extracting structure from unstructured data, and on the input and output side responses are (relatively) instant, making them easy to verify (vs. a task execution which can take several minutes)

Language models can help make the portion of the web built for humans (most of it) very legible to machines - this drives a lot of the boom in AI agents. Initially, when we started [Substrate](http://www.substrate.cc/) to deploy browser based AI agents in healthcare RCM, I thought the use cases would require much more nondeterministic approaches because we were targeting tasks that semantically were the same, but occurred on different surfaces, and utilized different data and context. 

For example, a very common task that basically a high percentage of healthcare claims (>40%) that are billed to insurance go through is getting a claim status checked. Often, after a claim has been successfully submitted, the practice or biller has to do subsequent actions to get the claim paid, or it just takes a long time for the payer to respond at all (these are called “no response” claims). These actions might include changing the coding information on the claim, adding more information like authorization or licensing data to the claim, or submitting medical records to the payer. In order to understand what actions need to be done, the biller needs to check the status of the claim. There are multiple ways this is a highly variable process, including:

1. Payers have many transmission mechanisms for telling the practice that something is wrong, including mail (typically called “correspondences), fax (rarely), email, portals, ERAs, and EDI (ERAs & EDI being the most automated ways to do it). Of ~3k payers in the US, ~450 are EDI capable.
2. The specific codes and descriptions payers use differ (the substance of the message), and also different *payers often use* similar language and codes to mean different things
3. In order to actually respond and make the changes required, even though semantically what the biller is doing is the same (appealing a claim), the portals are different and the changes are often different.

For example, all of these denial codes mean the exact same thing (that the practice needs to submit a (combination of) medical record documents to the payer):

[![](https://substackcdn.com/image/fetch/$s_!A9X5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F91d102f1-5c44-49ab-8066-e643324e097f_898x345.png)](https://substackcdn.com/image/fetch/$s_!A9X5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F91d102f1-5c44-49ab-8066-e643324e097f_898x345.png)

And this is just 4 payers. The exact combination of clinical documents that will satisfy this type of request are more a combination of tribal knowledge and trial and error, than any context you can explicitly extract from the claim status itself (or from any other source that’s consistently available)

A single human can easily manage this variety - particularly the high diversity of ways to find out a claim requires more information, or the high diversity of steps to fix a claim, or just navigating to a portal to figure out what’s going on. As a result when we started Substrate I had the impression that we’d have a single “agent” with a massive prompt that allowed it to encounter a new portal for the first time and do the right thing. In hindsight that wasn’t correct.

For example, in the browser a VLM like Operator allows you to specify an objective and ask the model to complete it, but the path it takes isn’t typically defined by you. I consider this the non deterministic approach. The alternative is treating the browser like an API and utilizing models to handle the long tail of edge cases that exist, hence making human accessible workflows available to machines, and making them permissionless. Zi has a good write up on the technical tradeoffs [here](https://yzdong.substack.com/p/useful-browser-automation-why-operator). I’m mostly focused on the commercial/experiential ones. 

This included input data about denials that came in lots of different, nonstandard formats, many different payers and plans with different policies and preferences, and a wide range of choices about how to fix a claim.

But the entire time I’ve had this deterministic/nondeterministic tension in my head - ultimately the non-deterministic approach allows you to handle many many more unexpected cases that the agent might encounter, but the amount of context required to handle them consistently and *deliver a deterministic output*, which is ultimately what  enterprise use cases value, is insanely high. The more I see and the more I dig in, the clearer it is that the deterministic approach utilizing models for edge cases and self healing/auto healing beats the pure nondeterministic at enterprise scale.

### Enterprise context = enterprise constraints

In enterprise context (which to me means massive scale, often in “sensitive” environments - eg healthcare or financial services where I’m familiar), what users and developers really want is an API. Agents are a means to that end. In these environments, entities have lots of rules and regulations to remain compliant with, and high exception rates often lead to bad real world outcomes, and audits. Historically, enterprises haven’t needed to re-specify their objective when running millions or billions of transactions per day. Why opt into that now?

Nondeterministic approaches can help when there’s a high amount of variability in outcomes. At any real scale, you can’t really tolerate this - even a .0001% exception rate is 100 exceptions on 1m transactions. A staggering number of enterprises execute many millions of “transactions” a day. For read only transactions you have some tolerance bc you can check the output is formatted correctly and re-try the read, and the only system harm is load risk. But if there’s a model free alternative that is completely deterministic and the customer/end user expects a deterministic result, enterprise customers would choose that 10 times out of 10. In that scenario it’s not clear why an agent choosing its path would be better than an API that works the same way 100% of the time with clearly defined edge cases/exception handling that are well understood in advance, and self healing/auto healing for cases where the agent encounters a surprise along the way.

For write actions, a non deterministic to probabilistic approach is literally intolerable - deploying exceptions into a system of record would create meaningful financial and operational (and clinical in the case of healthcare) repercussions. No one wants that.

As an example, Substrate’s customers include specialties like oncology, orthopedic care, urgent care, and behavioral health. Our system helps them check claim statuses, appeal denials using medical records, evaluate medical records for medical necessity, and more. These customers want a) something that works the same every time and b) is correct every time regardless of volume. While it’s possible that a nondeterministic approach can be correct every time, it’s insanely hard to evaluate it as such if its execution path differs each time. Right now to achieve this we use a hybrid approach as different contexts require different levels of sophistication; scripting/pure RPA for environments that are extremely static, the code-gen approach Adrian describes [here at Cloudcruise](https://www.cloudcruise.com/blog/genesis) (big fans) for browser environments that are more dynamic, and a VLM based approach in desktop environments.

### Where a 100% nondeterministic approach works

There are at least two contexts where a 100% nondeterministic approach works. The first is consumer products. In these cases, you’re rarely doing that many transactions per customer and you want each transaction to be very high-quality and totally personalized to the consumer. In leisure use cases “exceptions” (or deviation from the path) can be kind of a feature because they surprise and delight the consumer, and with high quality personalization can help them discover choices that satisfy unspecified (or poorly articulated preferences).

The second context where a completely nondeterministic approach works is in the world of voice agents. In this world, even though the outcomes are also deterministic, the path can be so nondeterministic that maintaining a script that can manage all the cases becomes ruinously expensive. The person the agent is talking to might be having a super bad day, or for many other reasons the things they can say diverge wildly from the “happy path, that having a conversational agent that can reason in every interaction step  and introspect on the best next words to get back on script can actually be a huge step function improvement.

In the voice agent context you can think of the human as the equivalent of a “website” in a browser agent. A website in a single interaction has a fixed amount of information and a fixed number of available actions. A human, on the other hand, is persuadable - the information an agent can extract is effectively bottomless, and the actions the human can take in partnership with or in response to a conversation are effectively boundless.

### Why this matters

Browser based agents extend the surface area of problems that are accessible to software because the vast majority of workflows that happen in the browser actually are deterministic and the hard work was maintaining scripts and handling cases where minute changes to the UI resulted in a broken workflow. Now models can auto heal and handle minor changes without a human in the loop. I’m still developing a framework to decide when to choose either path. If you’re building in any of these domains and you have a strong point of view, I’d love your take.

14

4

4

Share

PreviousNext