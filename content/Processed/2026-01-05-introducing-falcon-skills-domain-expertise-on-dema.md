---
url: https://www.falconhealth.ai/blog/introducing-falcon-skills
title: "Introducing Falcon Skills: Domain Expertise On Demand - Falcon"
clipped: 2026-01-05 10:16
source: browser-history
---

# Introducing Falcon Skills: Domain Expertise On Demand - Falcon

> Source: [https://www.falconhealth.ai/blog/introducing-falcon-skills](https://www.falconhealth.ai/blog/introducing-falcon-skills)

Healthcare data analysis requires more than just good AI. It demands specialized knowledge: intricate SQL logic for specific use cases, understanding of CMS payment models, clinical algorithms validated by research, and the nuanced context that separates meaningful insights from noise.

We've been thinking about how to make this expertise accessible and reusable. Inspired by [Anthropic's work on agent skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), we built something tailored for healthcare workflows: **Falcon Skills**.

## What Are Skills?

Skills are reusable packages of domain knowledge that you can load into your Falcon AI conversations. Each skill contains prompts, SQL templates, analytical frameworks, or contextual documentation that instantly equips the AI with specialized expertise.

Think of it as giving your AI analyst a specialized briefing before diving into a complex task. Instead of explaining the NYU ED algorithm every time you want to analyze avoidable emergency visits, you load the skill once and the AI understands the methodology, has the SQL ready, and knows how to apply it to your data.

![Falcon Skills interface showing available skills](/_next/static/media/skills.56a8d304.png)

## Our First Two Skills

We're launching Skills with two immediately useful packages for ACOs and health plans:

### Avoidable ED Visit Estimation for PCP

Emergency department utilization is a critical quality metric, but calculating "avoidable" visits isn't straightforward. The NYU ED Algorithm classifies emergency visits based on diagnosis codes, distinguishing between visits that truly required emergency care versus those that could have been handled in primary care settings.

This skill packages:

* The complete SQL template implementing the NYU algorithm
* Flexibility to analyze by PCP, by practice, or across your entire ACO
* Configurable parameters for different attribution methodologies
* Context on how to interpret and act on the results

Load this skill, point it at your claims data, and within minutes you have actionable insights on which providers might benefit from care coordination support or extended hours.

### CMS ACCESS Model Overview and Implications

CMS recently announced the ACCESS model, a new payment framework starting in July 2026 that creates opportunities for ACOs to capture revenue from remote patient monitoring and chronic care management services.

![ACCESS model skill detail view](/_next/static/media/skills-example-access-model.a9ad8a7b.png)

This skill provides:

* A comprehensive overview of the ACCESS model structure
* Strategic framework for evaluating participation
* Analysis templates for assessing your ACO's opportunity
* Risk considerations and competitive positioning against RPM/CCM vendors

Rather than spending hours parsing CMS announcements and fact sheets, load this skill and start having an informed conversation about what ACCESS means for your organization.

Top tip

Skills are collaborative. Once you create a skill that works well for your organization, you can share it with colleagues. Your compliance team's FWA detection logic, your finance team's reporting templates, your clinical team's quality measure calculations—all can become shareable skills.

## Why Skills Matter

Healthcare analytics suffers from a knowledge distribution problem. The analyst who deeply understands risk adjustment isn't always available when you need to run a quick HCC analysis. The SQL query that took three days to perfect last quarter lives in someone's personal folder. Institutional knowledge walks out the door when employees leave.

Skills solve this by making expertise:

* **Portable**: Load complex knowledge with one click
* **Shareable**: Your team's best work becomes everyone's baseline
* **Versioned**: Update skills as regulations change or methodologies improve
* **Composable**: Combine multiple skills for sophisticated analyses

## What's Coming Next

We're actively building more skills across critical healthcare domains:

* **FWA Detection Skills**: Pre-built investigative frameworks for common fraud patterns
* **CMS Reporting Skills**: Templates for generating required regulatory reports
* **Risk Adjustment Skills**: HCC calculation and gap analysis workflows
* **Quality Measure Skills**: HEDIS, Stars, and ACO quality metric calculations

We're also exploring ways for customers to contribute skills back to a shared library, creating a growing repository of healthcare analytics expertise.

## Try It Today

Skills are available now in Pulse. Navigate to the Skills section in your dashboard, browse available skills, and click "Load this skill" to bring that expertise into your next AI conversation.

Have a complex workflow you'd like to see as a skill? Reach out to our team. The best skills often come from real problems our customers are solving every day.

## More articles

### Schedule Your AI Tasks: Automated Reports on Your Terms

December 18, 2025

Set up recurring AI-powered reports delivered daily, weekly, or monthly. Turn your one-time data pulls into automated workflows that keep your team informed.

[Read more](/blog/schedule-an-ai-task)

### Your Falcon Health Journey: A Step-by-Step Guide

November 11, 2025

Get started with Falcon Health in three simple steps. From signing in to exploring Sentinel and Pulse, we'll show you the way.

[Read more](/blog/onboarding-step-by-step)

## Ready to put an AI co-analyst to work for your team? Let's talk.

[Contact Us](/contact)

### Our offices

* **Palo Alto, CA**  
  Corporate HQ
* **Atlanta, GA**  
  Technology Branch