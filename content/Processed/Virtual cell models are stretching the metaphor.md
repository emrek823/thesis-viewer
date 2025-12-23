---
title: "(15) Virtual cell models are stretching the metaphor | LinkedIn"
source: "https://www.linkedin.com/pulse/virtual-cell-models-stretching-metaphor-kim-branson-nvwac/"
published: 2001-09-19
created: 2025-12-20
description:
tags:
  - "clippings"
---
It was fun to listen to a panel on virtual cells last night and catch up with old friends [Bo Wang](https://www.linkedin.com/in/bo-wang-a6065240/) and [Yusuf Roohani](https://www.linkedin.com/in/yusuf-roohani-bb195231/)

While I think virtual cell models are interesting, I feel people are focusing on what they can model (transformer arch) with what data they have RNA seq / single cell data, and CRISPR perturbation etc rather than what they want to solve and what data they need

There was a alot of talk about predicting tox, or higher level properties like systems or patients. Its really stretching the virtual cell metaphor when we start talking about using them to simulate patients “a clinical trial is really virtual cells representing patients”.

Well no. We do actually have a branch of sciences that looks at organs and whole systems (Physiology, QSP etc). If we want to start to solve challenges like tox, or really modeling disease you need to start working on higher order systems, organoids, perfused organs and we need to start to generate the data at scale in the most important model organism we care about, people.

When I hear people telling me about a virtual cell trained on EHR data, I think we are stretching the metaphor a bit far, Using all the data collected in clinical care, and billing has great potential, (I spent alot time looking at this at Lumiata) but its not a virtual cell.

I think the community needs to take a step back and work out what problems it wants to solve, and start to collect the data it needs to solve that. One of the advantages large pharmaceutical companies like GSK have is we can and do collect data in people. This is why we have quietly doing organoid studies such as with my good friend [Tony Ng](https://www.linkedin.com/in/tony-ng-5b766420/), or scaled data generation with companies like [Ochre Bio](https://www.linkedin.com/company/ochre-bio/) (Shout out to [Quin Wills](https://www.linkedin.com/in/quinwills/)) and team. This is the data we need for the problems we need to solve. I gave a great talk on this at an excellent event organized by [Mihaela van der Schaar](https://www.linkedin.com/in/mihaela-van-der-schaar/). I’ll post it on [GSK.ai](http://gsk.ai/) for those interested.

Don’t get me wrong, I do think single cell and peturbation data is useful. We created some great datasets in that in primary cells, and interestingly did scaled time courses, so applying RNA, imaging, functional readouts and samples for targeted proteomics. Perturbing up or down in a gradient fashion the top 2000 differential expressed genes. This data reveals interesting dynamics of transient coupled expression in systems we didn’t think were linked. Some things rise for 2 days, then fall to baseline. Other might be repressed for 5 day, others are increased or repressed for as long as we measure.

A single 48 hour (pick your timepoints) would miss this. There is so much more information in time series for modelling biology. I think this is the data the virtual cell community needs to generate. Yes it’s more expensive, but hey sequencing got cheaper, so now you can do the right experiments, rather the wrong experiments at scale.

I think a really interesting area of research is using neural ode or other methods to extract structural or other models) from sparse noisy time series data. Hit me up if you are interested in this, I'm keen on data and collaboration.

Peturbation prediction is perhaps useful, provided it’s fast and accurate enough that we dont’ need to do the experiment. Something I’ve learned over years of doing this work is experimental data generation tends get better and better. So your model needs to beat the lab in the loop answer than might turn it around in 2 days. Do you need the answer in 2 minutes? Probably the most important use case might be to design maximally informative experiments. If you can wait the robot will probably just 'get you the answer'. Scale and cost are limits naturally.

I am really interested in the higher level control of gene expression. We know cells make all sorts of long non coding RNA that have functions in controlling phase separation in the nucleus, and the zeroth order of gene expression chromatin state. I hope that the perturbation focused virtual cell models start to learn that in an interpretable manner. That would be really transformative, particular with the focus on cellular reprogramming for aging and disease, which companies like [Altos Labs](https://www.linkedin.com/company/altoslabs/) and [NewLimit](https://www.linkedin.com/company/newlimit/) are pioneering.

But hey, it’s just nice to have data with a decent N size in biology for once.;)