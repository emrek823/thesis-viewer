---
title: "When the Speedboats Hit the Wake"
source: "https://healthapiguy.substack.com/p/when-the-speedboats-hit-the-wake"
author:
  - "[[Brendan Keeler]]"
published: 2025-12-17
created: 2025-12-17
description: "Appointments, unrealized revenue, and the uncomfortable edge of interoperability beyond TEFCA"
tags:
  - "clippings"
---
### Appointments, unrealized revenue, and the uncomfortable edge of interoperability beyond TEFCA

![](https://substackcdn.com/image/fetch/$s_!Eu1O!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1eac418-4edb-4881-9cab-dbcabf87dd97_1024x1024.jpeg)

Steve asked for this and when the ASTP says “jump”, I say “how high”.

Yesterday was a fairly active interoperability day we’ll have to spend a few posts unpacking, with TEFCA’s monthly call, new ASTP blog posts, and a variety of other fun updates. For starters, [Steve Posnack](https://www.linkedin.com/in/steven-posnack-6960b71/) kept [his promise](https://www.linkedin.com/posts/steven-posnack-6960b71_why-tefcas-hardest-problem-isnt-tech-it-activity-7401613443016847361-ovcS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAPkL9sB4lo5Yq0uDubv8utDDC3_gQq7qQY) of continuing to write somethings and dropped “ [The Tide and the Speedboats](https://www.linkedin.com/posts/steven-posnack-6960b71_the-tide-and-the-speedboats-tefca-and-cms-aligned-activity-7406700583522545664-Ldzh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAPkL9sB4lo5Yq0uDubv8utDDC3_gQq7qQY) ”, an open letter about how the CMS Health Tech Ecosystem and TEFCA interact.

It’s a topic that has had the industry dialogue firing at all cylinders since the summer. Are they competing? Will TEFCA be sunset? The answer seems to be no, at least according to Steve:

> *To start, both TEFCA and CMS-Aligned Networks are built around the same objective – supporting patients, providers, and other authorized entities in securely accessing and exchanging the electronic health information needed to improve care and reduce burden. Building on this shared purpose, CMS created the CMS-Aligned Network pledge criteria to give any network – including new entrants and networks with different business models – a pathway to accelerate interoperability capabilities. Participation is open and voluntary, and it complements TEFCA rather than replacing it. In fact, all the organizations who have become Qualified Health Information Networks™ (QHINs™) under TEFCA have also pledged to be a CMS-Aligned Network. That’s why the combination of these two initiatives is so powerful.*

His metaphor from the blog title will likely be remembered:

> *Where TEFCA looks to be a rising tide that lifts all boats, networks that have pledged to be a CMS-Aligned Network are more like speedboats shooting out ahead to achieve specific milestones.  
> …  
> The main difference is the pace and structure. TEFCA progresses through a formal, stepwise governance process, while CMS-Aligned Networks evolve through an ongoing connect-a-thon style model that encourages rapid testing, learning, and refinement. The two approaches are complementary – one provides stability, the other accelerates innovation.*

It’s a fun mental picture. Circling back to the analysis in “ [CMS’s Health Tech Bombshell](https://healthapiguy.substack.com/p/cmss-health-tech-bombshell) ”, it certainly fits with earlier predictions:

> *No, instead, the choice by the CMS was to also set the bar well beyond where TEFCA or any network is. The choice was to create competition between networks to rise to the occasion and allow for a meritocracy rather than an anointing.*
> 
> *…*
> 
> *In short: TEFCA isn’t being replaced (unless we hear the ASTP say something to that extent). It’s being dared to keep up.*

In any case, the message was clear: CMS Health Tech Ecosystem is raising the ceiling while TEFCA shores up the floor. I appreciate Steve’s clarity!

The only place that had me confused was this passage:

> *Similarly, the CMS Interoperability Framework spotlights “patient appointment and encounter details” for accelerated effort by each individual CMS-Aligned Network, whereas this use case does not necessarily fit TEFCA’s focus on cross-network exchange.*

What’s so special about encounters and appointments that does fit well in cross-network exchange? Looking at the criteria around appointment and encounter details (framework criterions 12 and 15), we see:

> 1. *Patient appointment and encounter details (e.g., date, time, provider, location, type) may be shared, in accordance with existing law. Although networks may initially support non-FHIR standardized formats that are already live today, they must be committed to supporting and implementing FHIR APIs.*
> 
> …
> 
> 1. *Appointment and encounter notifications will be provided for outpatient, telehealth, ED, and inpatient encounters using FHIR subscriptions, where such notifications are permitted by existing law.*

I understand his point regarding 15, as notifications aren’t facilitated today in TEFCA’s SOPs and decentralized subscription and notification [had been attempted](https://carequality.org/IG/push-notifications/toc.html) by prior networks with limited adoption. However, for criterion 12, I’m confused: encounter details are already part of USCDI, so they should be accessible via TEFCA as part of the already defined dataset. Appointments are not, but that feels addressable. Certain very intelligent and handsome individuals have been advocating that we should just add them to USCDI [for years](https://www.healthit.gov/isp/united-states-core-data-interoperability-uscdi):

![](https://substackcdn.com/image/fetch/$s_!ZZnF!,w_424,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F333bed74-1c77-4c62-ab3a-83eb99e79f21_2540x1506.png)

Our collective reticence here is perhaps that appointments have more of a cross-provider competitive element than historic clinical data. Appointments represent unrealized revenue. Once appointment data crosses the boundary from within a network to across competing networks, it stops being inert coordination metadata and starts behaving like a demand signal. Open prescriptions, open orders, and especially pending appointments all fall into this bucket of clinical information that also acts as a demand signal. Once you can see it, you can route and capture it (at the expense of others, in a zero-sum game).

Exchanging historic data was the easy part! TEFCA (and other existing networks), as it stands today, is optimized for post-hoc clinical truth exchange across networks: what happened, to whom, where, and when. That’s all win-win for the most part. It was a comparatively straightforward exchange insofar as it largely avoided reallocating future economic value - sharing history rarely directly changed who got paid next, as it was tightly yoked to actual care. As we’ve slowly eroded rules and allowed population health, that’s changed: it's now possible to look at clinical signals and infer the trajectory of care, but that inference is indirect, probabilistic, and temporally delayed (aka nothing like the immediacy or determinism of a scheduled appointment).

The benefits clearly outweigh the costs in my mind, as evidenced by my USCDI comments from a few years ago. Competition to steer patients to better, faster, and cheaper care hypothetically rewards responsiveness and efficiency rather than incumbency and lock-in. But there are tensions here that will come to a boil.

> **The PillPack Example**
> 
> We’ve seen this movie before. Surescripts (an analogous ubiquitous data retrieval network) had historically prevented pharmacies from using their medication history capabilities, primarily to prevent prescription poaching - the use of visibility into active or refillable medications to intercept demand and redirect it away from the originating pharmacy relationship.
> 
> The concern was never that medication history lacked clinical value for pharmacies. It was that, in the wrong hands, it could become a routing primitive. If a pharmacy can see which prescriptions are open, unfilled, or nearing refill, it can proactively reach out, steer the patient, and capture downstream revenue. At that point, medication history stops serving as a retrospective clinical context for drug-drug interactions and becomes a forward-looking demand signal.
> 
> That tension came to a head during Amazon PillPack’s early expansion, when access to comprehensive medication history via an intermediary (ReMy Health) became [the subject of contractual restrictions and public disputes](https://www.fiercehealthcare.com/tech/surescripts-terminates-contract-remy-health-hindering-pillpack-s-access-to-patient). The stated rationale focused on network integrity and appropriate use, but the underlying fear was economic: that unfettered visibility into medication demand would allow new entrants to siphon volume from incumbents at scale.
> 
> It’s the same reason the RxTransfer messages in the NCPDP specification hasn’t been widely adopted for [transferring medications between pharmacies](https://www.healthit.gov/isp/allows-a-pharmacy-request-respond-or-confirm-a-prescription-transfer): once transfer becomes frictionless, loyalty becomes contestable.
> 
> Appointments, open orders, and pending referrals sit in the same category. They are clinically relevant artifacts that also reveal where care (and thus revenue) is scheduled to occur. Once exposed across competitors, they enable steering, interception, and capture. The resistance is not to interoperability per se, but to the redistribution of unrealized value that interoperability makes possible.