---
url: https://open.substack.com/pub/treyrawles/p/the-new-price-transparency-stack?utm_source=post-email-title&publication_id=3162878&post_id=183308056&utm_campaign=email-post-title&isFreemail=true&r=17kf49&token=eyJ1c2VyX2lkIjo3MzE3NjIwMSwicG9zdF9pZCI6MTgzMzA4MDU2LCJpYXQiOjE3Njc0MDczOTYsImV4cCI6MTc2OTk5OTM5NiwiaXNzIjoicHViLTMxNjI4NzgiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.Y4YmwI_ZXnnB6pxtWxFYU8hsSR4dqP4uFpqBF46fjjg
title: "The New Price Transparency Stack and the Very Investable Plumbing Hiding Inside It"
clipped: 2026-01-03 01:02
source: browser-history
---

# The New Price Transparency Stack and the Very Investable Plumbing Hiding Inside It

> Source: [https://open.substack.com/pub/treyrawles/p/the-new-price-transparency-stack?utm_source=post-email-title&publication_id=3162878&post_id=183308056&utm_campaign=email-post-title&isFreemail=true&r=17kf49&token=eyJ1c2VyX2lkIjo3MzE3NjIwMSwicG9zdF9pZCI6MTgzMzA4MDU2LCJpYXQiOjE3Njc0MDczOTYsImV4cCI6MTc2OTk5OTM5NiwiaXNzIjoicHViLTMxNjI4NzgiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.Y4YmwI_ZXnnB6pxtWxFYU8hsSR4dqP4uFpqBF46fjjg](https://open.substack.com/pub/treyrawles/p/the-new-price-transparency-stack?utm_source=post-email-title&publication_id=3162878&post_id=183308056&utm_campaign=email-post-title&isFreemail=true&r=17kf49&token=eyJ1c2VyX2lkIjo3MzE3NjIwMSwicG9zdF9pZCI6MTgzMzA4MDU2LCJpYXQiOjE3Njc0MDczOTYsImV4cCI6MTc2OTk5OTM5NiwiaXNzIjoicHViLTMxNjI4NzgiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.Y4YmwI_ZXnnB6pxtWxFYU8hsSR4dqP4uFpqBF46fjjg)

# The New Price Transparency Stack and the Very Investable Plumbing Hiding Inside It

Jan 03, 2026

2

Share

## Table of Contents

Why This Rule Exists and Why It Looks the Way It Does

What Actually Changes in the Public Files

The Quiet but Massive Shift to Network Level Truth

Why CMS Is Obsessed With Context All of a Sudden

Utilization Data as the Missing Multiplier

Taxonomy Disclosure and the End of Contracting Theater

Out of Network Data Finally Becomes Usable

Quarterly Cadence and the Death of Panic ETL

Findability as a Regulatory Weapon

The Phone Requirement and the Operational Reckoning

Costs, Burden, and What the Government Is Accidentally Telling Investors

The Market Level Aggregation Gambit

The Percentage of Billed Charges Cleanup

What This Means for Founders

Where Venture Capital Fits Cleanly

Where Private Equity Has the Edge

The Service Provider Play and Why It Matters

The Compliance Software Stack Nobody Sees Coming

Deep Analysis of Investment Opportunities by Vertical

How to Underwrite This Wave Without Getting Burned

Closing Thoughts on What Actually Gets Built

## Abstract

This essay breaks down the latest Transparency in Coverage proposed rule and why it matters far more to investors and operators than most people realize. The rule is not about consumer shopping tools, and it is not about ideology. It is about converting a chaotic flood of pricing disclosures into a structured, contextualized, and operational dataset that can actually be used. The government is forcing plans and issuers to publish network level negotiated rates, utilization context, adjudication logic, and explicit change tracking, while also making the data easier to find and slower to change. This combination quietly unlocks a new generation of infrastructure, analytics, and compliance driven business models. The real opportunity sits with enterprise buyers, not patients, and favors companies that reduce operational cost, create negotiating leverage, and turn regulatory burden into recurring software and services revenue. Venture and private equity both have room to win here, but only if they underwrite the boring parts correctly.

The proposed rule also creates explicit permission structures for third party aggregation at unprecedented scale, legitimizes taxonomy management as a regulated business process, and forces phone based disclosure that will drive massive call center software spend. The government estimates over nine hundred million dollars in one time implementation costs and nearly seventy million in annual ongoing costs. That is not a compliance headache. That is total addressable market spelled out in Federal Register pages.

## Why This Rule Exists and Why It Looks the Way It Does

The easiest way to misunderstand this proposed rule is to think it is a policy statement about transparency as a moral good. It is not. It is a technical correction to a system that technically worked but practically failed. The first wave of Transparency in Coverage did exactly what it was supposed to do in the narrowest sense. It forced the release of negotiated rates, allowed amounts, and drug pricing data that had never been public before. What it also did was create files so large, duplicative, and context free that only a handful of well capitalized data engineering teams could even open them without lighting money on fire.

CMS and the other agencies are not subtle about this in the proposal. They openly acknowledge that the in network rate files in particular became enormous because contracts enumerate every possible item and service for every provider regardless of whether that provider would ever be paid for that service. The result was petabyte scale data that mixed meaningful rates with nonsense combinations. Researchers complained. Engineers complained. Plans complained. Even the people publishing the data complained because storing and serving it was expensive and error prone.

The numbers tell the story. Some issuers are serving multiple terabytes per month for a single coverage entity. Individual files routinely exceed local storage and processing capabilities. The Departments conducted an internal analysis in 2024 sampling in network rate files market wide and found that eighty three percent of issuers were already using table of contents structures to reduce duplication, which means the industry has been screaming for relief through their implementation choices.

So this rule is not a philosophical pivot. It is an engineering intervention. The agencies are trying to shrink file size, reduce duplication, add context that downstream users have been reverse engineering anyway, and align plan disclosures more closely with how hospital price transparency already works. The goal is not prettier files. The goal is to make the data usable enough that market pressure can actually happen.

That framing matters for investors because it tells you what kind of companies win. This is not a moment for glossy front ends and consumer delight decks. This is a moment for plumbing, tooling, and operational software that assumes pricing data exists and focuses on making it reliable, explainable, and actionable.

## What Actually Changes in the Public Files

At a high level, the rule does five big things. It reorganizes in network rates around provider networks instead of duplicating the same rates across every plan that uses them. It requires new contextual machine readable files that explain what changed, what was actually used, and how adjudication logic works. It expands and stabilizes out of network allowed amount data so it is less sparse and more analyzable. It slows the update cadence for most files from monthly to quarterly. And it forces issuers to make the files easy to find by standardizing discovery.

Each of these changes sounds incremental. Together they change what kinds of products can be built without heroic effort.

On top of that, the rule also tightens participant facing disclosure by explicitly requiring that cost sharing estimates be available by phone, not just online or on paper, and clarifies that doing so satisfies the No Surprises Act price comparison tool requirement. That piece is less about data and more about operations, but it is where a lot of real money will move.

## The Quiet but Massive Shift to Network Level Truth

One of the most consequential changes in the rule is also one of the least flashy. In network rate files will now be organized by provider network, not by plan or coverage option. If ten plans all use the same PPO network, the rates for that network get published once, not ten times.

This matters because network is the real unit of negotiation and decision making in commercial health care. Employers choose networks. Brokers sell networks. Consultants benchmark networks. Contracting teams negotiate networks. Plans have historically hidden behind plan proliferation as a way to make comparison harder. This rule strips that away.

By forcing network level files and requiring the common network name to be disclosed, the rule creates a cleaner identity layer for pricing data. It becomes much easier to say this network pays this much for these services, weighted by how often they are used. That is exactly the framing employers and advisors want when they are trying to understand spend.

The technical implementation matters here. Plans and issuers will be required to identify for each provider network every coverage option that uses that network. This maintains the plan to rate connection but removes the duplication. A researcher analyzing a specific network can grab one file instead of dozens. An employer comparing two networks for next year’s renewal can diff two files instead of hunting through hundreds.

There is also a subtle but important pricing representation change. In network rates must be expressed as dollar amounts except in the narrow case where the contract is explicitly a percentage of billed charges and cannot be translated into a dollar amount ahead of time. That pushes the data toward computable reality. Percent of billed charge contracts still exist, but they are increasingly treated as an edge case rather than the default.

The rule text is explicit that plans and issuers should define what constitutes a separate provider network according to their current business practices. The Departments are not imposing a taxonomy of networks. They are forcing disclosure of the taxonomy plans already use internally. That is significant because it means the data will reflect operational reality rather than a regulatory construct.

## Why CMS Is Obsessed With Context All of a Sudden

The biggest conceptual shift in the proposal is the idea that raw rates are not enough. CMS is now explicitly requiring context to travel alongside the numbers. That context comes in three new machine readable files for each in network rate file.

The first is a change log file. This file identifies what changed since the last version of the in network file. From a developer perspective, this is a gift. Instead of re ingesting everything and computing diffs yourself, you get an official record of changes. From a compliance perspective, it creates a trail. Plans cannot quietly change rates without it being obvious. That alone creates a market for monitoring and alerting.

The second is a utilization file. This file documents which covered items and services actually had claims submitted and reimbursed over a defined twelve month period, ending six months before publication. It includes provider identifiers and place of service. This is the bridge between theoretical pricing and real spend. A negotiated rate that never gets used is trivia. A rate attached to high utilization services is a lever.

The third is a taxonomy file. This file discloses the plan or issuer’s internal provider taxonomy used in claims adjudication to decide whether a provider is appropriate for a given service. This is the logic that determines whether a claim gets paid or denied based on specialty. The rule then requires plans to use this same logic to exclude unlikely provider service combinations from the in network rate file.

This is a big deal. Plans already have this logic. It has just never been public. By forcing disclosure, the rule reduces garbage data and also exposes an internal decision layer that has historically been opaque. That creates risk for plans, but it also creates opportunity for vendors who can help manage, version, audit, and defend this logic.

The change log requirement becomes applicable on the first day of the calendar year quarter following the date on which the first in network rate file is required to be posted, and updated and posted quarterly whether or not there are changes. The utilization file is required beginning on the first day of the calendar year quarter following the applicability date and updated annually after the initial posting. The taxonomy file is required beginning on the first day of the calendar year quarter following the applicability date and updated and posted quarterly if changes to the internal provider taxonomy impact the information required in the in network rate file.

## Utilization Data as the Missing Multiplier

If you talk to sophisticated employers or benefits consultants, the complaint about price transparency is always the same. Rates are interesting, but what matters is what people actually use. The utilization file directly addresses that.

By pairing rates with a standardized view of reimbursed services over a meaningful time window, the rule enables spend weighted analysis without stitching together external claims datasets. It does not replace full claims data, but it fills a gap that has forced many analytics vendors to rely on proprietary or licensed data sources.

The utilization file must document for a twelve month period ending six months prior to publication all items and services for which a claim was submitted and reimbursed. It must include each in network provider identified by NPI, TIN, and place of service code who was reimbursed in whole or in part. This is not sample data. This is census data for what actually happened.

For investors, the key point is that utilization context unlocks products that were previously too expensive or fragile to build. Network comparisons become more accurate. Contract optimization becomes less hypothetical. Benefit design modeling becomes more grounded. Even site of service analysis becomes easier when you know both the price and where care actually happened.

The proposal estimates the one time cost to build utilization files at over six hundred thirty eight million dollars across the industry. The annual ongoing cost is estimated at over nine million dollars. Those numbers represent the cost of compliance, but they also represent the pain point that software can address. Any vendor who can reduce the cost of generating, validating, or maintaining utilization files is selling into a market where the baseline cost is known and published.

## Taxonomy Disclosure and the End of Contracting Theater

The taxonomy requirement deserves special attention because it will create friction inside plans and issuers. Internal provider taxonomies are messy. They evolve. They encode business rules that were never designed to be public. By forcing disclosure and alignment between adjudication logic and published rates, the rule collapses a long standing gap between what contracts say and what actually gets paid.

The rule requires plans and issuers to publish a taxonomy file that includes their internal provider taxonomy matching items and services represented by billing codes with provider specialties represented by specialty codes derived from the Health Care Provider Taxonomy code set established by NUCC. This taxonomy is used to determine if the plan or issuer should deny reimbursement for an item or service because it was not furnished by a provider in an appropriate specialty.

This is where a new class of tooling becomes inevitable. Taxonomy management is not something most organizations treat as a product. It lives in spreadsheets, legacy systems, and institutional memory. Once it becomes a compliance artifact that must be published, updated, and defended, it turns into software.

Expect to see products that treat taxonomy like code. Version control. Impact analysis. Testing against claims history. Audit trails. These are not sexy features, but they are the kind of features compliance buyers pay for when regulators start asking questions.

The proposal also requires plans and issuers to exclude from in network rate files any provider rate combination for items or services where the provider is unlikely to be reimbursed given that provider’s area of specialty according to the plan’s or issuer’s internal provider taxonomy. The one time cost estimate for this exclusion logic is over forty two million dollars. T

[... truncated ...]