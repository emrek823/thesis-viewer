---
url: https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic
title: "How AI Is Transforming Work at Anthropic \ Anthropic"
clipped: 2026-01-02 12:07
source: browser-history
---

# How AI Is Transforming Work at Anthropic \ Anthropic

> Source: [https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic)

Societal Impacts

# How AI is transforming work at Anthropic

Dec 2, 2025

![](https://www-cdn.anthropic.com/images/4zrzovbb/website/83d7d2fe412ceb4dfe627f0d5f3d64aff1a3f5db-1000x1000.svg)

How is AI changing the way we work? Our [previous research](https://www.anthropic.com/economic-index) on AI’s economic impacts looked at the labor market as a whole, covering a variety of different jobs. But what if we studied some of the earliest adopters of AI technology in more detail—namely, us?

Turning the lens inward, in August 2025 we surveyed 132 Anthropic engineers and researchers, conducted 53 in-depth qualitative interviews, and studied internal [Claude Code](https://www.anthropic.com/claude-code) usage data to find out how AI use is changing things at Anthropic. We find that AI use is radically changing the nature of work for software developers, generating both hope and concern.

Our research reveals a workplace facing significant transformations: Engineers are getting a lot more done, becoming more “full-stack” (able to succeed at tasks beyond their normal expertise), accelerating their learning and iteration speed, and tackling previously-neglected tasks. This expansion in breadth also has people wondering about the trade-offs—some worry that this could mean losing deeper technical competence, or becoming less able to effectively supervise Claude’s outputs, while others embrace the opportunity to think more expansively and at a higher level. Some found that more AI collaboration meant they collaborated less with colleagues; some wondered if they might eventually automate themselves out of a job.

We recognize that studying AI’s impact at a company building AI means representing a privileged position—our engineers have early access to cutting-edge tools, work in a relatively stable field, and are themselves contributing to the AI transformation affecting other industries. Despite this, we felt it was on balance useful to research and publish these findings, because what’s happening inside Anthropic for engineers may still be an instructive harbinger of broader societal transformation. Our findings imply some challenges and considerations that may warrant early attention across sectors (though see the Limitations section in the [Appendix](https://anthropic.com/research/how-ai-is-transforming-work-at-anthropic#appendix) for caveats). At the time this data was collected, Claude Sonnet 4 and Claude Opus 4 were the most capable models available, and capabilities have continued to advance.

More capable AI brings productivity benefits, but it also raises questions about maintaining technical expertise, preserving meaningful collaboration, and preparing for an uncertain future that may require new approaches to learning, mentorship, and career development in an AI-augmented workplace. We discuss some initial steps we’re taking to explore these questions internally in the Looking Forward section below. We also explored potential policy responses in our recent blog post on [ideas for AI-related economic policy](https://www.anthropic.com/research/economic-policy-responses).

## Key findings

In this section, we briefly summarize the findings from our survey, interviews, and Claude Code data. We provide detailed findings, methods, and caveats in the subsequent sections below.

**Survey data**

1. **Anthropic engineers and researchers use Claude most often for fixing code errors and learning about the codebase**. Debugging and code understanding are the most common uses (Figure 1).
2. **People report increasing Claude usage and productivity gains.** Employees self-report using Claude in 60% of their work and achieving a 50% productivity boost, a 2-3x increase from this time last year. This productivity looks like slightly less time per task category, but considerably more output volume (Figure 2).
3. **27% of Claude-assisted work consists of tasks that wouldn't have been done otherwise**, such as scaling projects, making nice-to-have tools (e.g. interactive data dashboards), and exploratory work that wouldn't be cost-effective if done manually.
4. **Most employees use Claude frequently while reporting they can “fully delegate” 0-20% of their work to it.** Claude is a constant collaborator but using it generally involves active supervision and validation, especially in high-stakes work—versus handing off tasks requiring no verification at all.

**Qualitative interviews**

1. **Employees are developing intuitions for AI delegation**. Engineers tend to delegate tasks that are easily verifiable, where they “can relatively easily sniff-check on correctness”, low-stakes (e.g. “throwaway debug or research code”), or boring (“The more excited I am to do the task, the more likely I am to not use Claude”). Many describe a trust progression, starting with simple tasks and gradually delegating more complex work—and while they’re currently keeping most design or “taste” tasks, this boundary is being renegotiated as models improve.
2. **Skillsets are broadening into more areas, but some are getting less practice.** Claude enables people to broaden their skills into more areas (of software engineering (“I can very capably work on front-end, or transactional databases... where previously I would've been scared to touch stuff”), but some employees are also concerned, paradoxically, about the atrophy of deeper skillsets required for both writing and critiquing code—“When producing output is so easy and fast, it gets harder and harder to actually take the time to learn something.”
3. **Changing relationship to coding craft.** Some engineers embrace AI assistance and focus on outcomes (“I thought that I really enjoyed writing code, and I think instead I actually just enjoy what I get out of writing code”); others say that “there are certainly some parts of [writing code] that I miss.”
4. **Workplace social dynamics may be changing.** Claude is now the first stop for questions that used to go to colleagues—some report fewer mentorship and collaboration opportunities as a result. (“I like working with people and it's sad that I ‘need’ them less now… More junior people don't come to me with questions as often.”)
5. **Career evolution and uncertainty.** Engineers report shifting toward higher-level work managing AI systems and report significant productivity gains. However, these changes also raise questions about the long-term trajectory of software engineering as a profession. Some express conflicting feelings about the future: “I feel optimistic in the short term but in the long term I think AI will end up doing everything and make me and many others irrelevant.” Others emphasize genuine uncertainty, saying only that it was “hard to say” what their roles might look like in a few years’ time.

**Claude Code usage trends**

1. **Claude is handling increasingly complex tasks more autonomously**. Six months ago, Claude Code would complete about 10 actions on its own before needing human input. Now, it generally handles around 20, needing less frequent human steering to complete more complex workflows (Figure 3). Engineers increasingly use Claude for complex tasks like code design/planning (1% to 10% of usage) and implementing new features (14% to 37%) (Figure 4).
2. **Claude fixes a lot of “papercuts”.** 8.6% of Claude Code tasks involve fixing minor issues that improve quality of life, like refactoring code for maintainability (that is, “fixing papercuts”) that people say would typically be deprioritized. These small fixes could add up to larger productivity and efficiency gains.
3. **Everyone is becoming more “full-stack”.** Different teams use Claude in different ways, often to augment their core expertise—Security uses it to analyze unfamiliar code, Alignment & Safety use it to build front-end visualizations of their data, and so on (Figure 5).

## Survey data

We surveyed 132 Anthropic engineers and researchers from across the organization about their Claude use, to better understand how exactly they were using it day-to-day. We distributed our survey through internal communication channels and direct outreach to employees across diverse teams representing both research and product functions. We have included a Limitations section in the Appendix with more methodological details, and we are sharing [our survey questions](https://assets.anthropic.com/m/6cd21f7d4f82afcb/original/Claude-at-Work-Survey.pdf) so others can evaluate our approach and adapt it for their own research.

### What coding tasks are people using Claude for?

We asked the surveyed engineers and researchers to rate how often they used Claude for various types of coding tasks, such as “debugging” (using Claude to help fix errors in code), “code understanding” (having Claude explain existing code to help the human user understand the codebase), “refactoring” (using Claude to help restructure existing code), and “data science” (e.g. having Claude analyze datasets and make bar charts).

Below are the most common daily tasks. Most employees (55%) used Claude for debugging on a daily basis. 42% used Claude everyday for code understanding, and 37% used Claude everyday for implementing new features. The less-frequent tasks were high level design/planning (likely because these are tasks people tend to keep in human hands), as well as data science and front-end development (likely because they are overall less common tasks). This roughly aligns with the Claude Code usage data distribution reported in the “Claude Code usage trends” section.

![Figure 1: Proportion of daily users (x-axis) for various coding tasks (y-axis).](/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F64a18b1756d8954a93e1356f1330ec11075fbe54-3840x2160.png&w=3840&q=75)

*Figure 1: Proportion of daily users (x-axis) for various coding tasks (y-axis).*

### Usage and productivity

Employees self-reported that 12 months ago, they used Claude in 28% of their daily work and got a +20% productivity boost from it, whereas now, they use Claude in 59% of their work and achieve +50% productivity gains from it on average. (This roughly corroborates the 67% increase in merged pull requests—i.e. successfully incorporated changes to code—per engineer per day we saw when we adopted Claude Code [across our Engineering org](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built).) The year-on-year comparison is quite dramatic—this suggests a more than 2x increase in both metrics in one year. Usage and productivity are also strongly correlated, and at the extreme end of the distribution, 14% of respondents are increasing their productivity by more than 100% by using Claude—these are our internal “power users.”

To caveat this finding (and other self-reported productivity findings below), productivity is difficult to precisely measure (see [Appendix](https://anthropic.com/research/how-ai-is-transforming-work-at-anthropic#appendix) for more limitations). There is [recent work from METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an AI research nonprofit, showing that experienced developers working with AI on highly familiar codebases overestimated their productivity boost from AI. That being said, the factors that METR identified as contributing to lower productivity than expected (e.g. AI performing worse in large, complex environments, or where there’s a lot of tacit knowledge/context necessary) closely correspond to the types of tasks our employees said they *don’t* delegate to Claude (see [AI delegation approaches](https://anthropic.com/research/how-ai-is-transforming-work-at-anthropic#ai-delegation-approaches), below). Our productivity gains, self-reported *across* tasks, might reflect employees developing strategic AI delegation skills—something not accounted for in the METR study.

An interesting productivity pattern emerges when asking employees, for task categories where they currently use Claude, how it affects their overall time spent and work output volume in that task category. Across almost all task categories, we see a net decrease in time spent, and a larger net increase in output volume:

![Figure 2: Impact on time spent (left panel) and output volume (right panel) by task (y-axis). The x-axis on each plot corresponds to either a self-reported decrease (negative values), increase (positive values) or no change (vertical dashed line) in time spent or output volume for categories of Claude-assisted tasks, compared to not using Claude. Error bars show 95% confidence intervals. Circle area is proportional to the number of responses at each rating point. Only respondents who reported using Claude for each task category are included.](/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F9449bf9393743105a414e17324f30970208ce14b-3840x2160.png&w=3840&q=75)

*Figure 2: Impact on time spent (left panel) and output volume (right panel) by task (y-axis). The x-axis on each plot corresponds to either a self-reported decrease (negative values), increase (positive values) or no change (vertical dashed line) in time spent or output volume for categories of Claude-assisted tasks, compared to not using Claude. Error bars show 95% confidence intervals. Circle area is proportional to the number of responses at each rating point. Only respondents who reported using Claude for each task category are included.*

However, when we dig deeper into the raw data, we see that the time saving responses cluster at opposite ends—some people spend significantly *more* time on tasks that are Claude-assisted.

Why is that? People generally explained that they had to do more debugging and cleanup of Claude’s code (e.g. “when I vibe code myself into a corner”), and shoulder more cognitive overhead for understanding Claude’s code since they didn’t write it themselves. Some mentioned spending more time on tasks in an enabling sense—one said that using Claude helps them “persist on tasks that I previously would've given up on immediately”; another said it helps them do more thorough testing and also more learning and exploration in new codebases. It seems that generally, engineers experiencing time savings may be those who are scoping quickly-verifiable tasks for Claude, while those spending more time might be debugging AI-generated code or working in domains where Claude needs more guidance.

It is also not clear from our data where reported time savings are being reinvested—whether into additional engineering tasks, non-engineering tasks, interacting with Claude or reviewing its output, or activities outside of work. Our task categorization framework does not capture all the ways engineers might allocate their time. Additionally, the time savings may reflect perception biases in self-reporting. Further research is needed to disentangle these effects.

Output volume increases are more straightforward and substantial; there is a larger net increase 

[... truncated ...]