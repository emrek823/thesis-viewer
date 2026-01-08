---
url: https://www.moonfire.com/stories/972-billion-portfolios-how-to-design-the-optimal-venture-portfolio/
title: "972 billion portfolios: How to design the optimal venture portfolio | Moonfire"
clipped: 2026-01-05 00:33
source: browser-history
---

# 972 billion portfolios: How to design the optimal venture portfolio | Moonfire

> Source: [https://www.moonfire.com/stories/972-billion-portfolios-how-to-design-the-optimal-venture-portfolio/](https://www.moonfire.com/stories/972-billion-portfolios-how-to-design-the-optimal-venture-portfolio/)

01

[Portfolio](/portfolio/)

02

[Thesis](/thesis/)

03

[People](/people/)

04

[Technology](/technology/)

05

[Stories](/stories/)

06

[Positions](/positions/)

[opportunities@moonfire.com](mailto:opportunities@moonfire.com)[LinkedIn](https://www.linkedin.com/company/moonfire/)[@Moonfire\_VC](https://x.com/Moonfire_VC)

Tech-07/02/2023

# 972 billion portfolios: How to design the optimal venture portfolio

We ran nearly a trillion portfolio simulations to determine the optimal portfolio construction. Here's what we found.

![Hero image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2F8b22b3bcb53076a9caaee0dc5bccfade4605c1ed-1920x1280.webp&w=3840&q=80)

Determining the optimal size and strategy of an early-stage VC portfolio is an art, with as many answers as there are firms.

That said, there are two main camps: 1) a small, concentrated portfolio, betting on the best companies you can find, or 2) as large a portfolio as possible, acting like a sort of index of the market. And there are plenty of successful examples from both ends of the spectrum.

But it’s hard to find a general formula because the optimal portfolio is a function of many factors, and it largely depends on your goal. What do you want to prioritise? No losses? 2x returns? 10x returns?

We decided to dig into the question and math it out.

We ran nearly a trillion portfolio simulations to determine the optimal mathematical portfolio construction calibrated for real-world success, and found that portfolio performance is largely controlled by five variables:

![Content image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fd5fd408ff0ed0667710b58ce8fd513cccf568984-2000x2000.jpg&w=3840&q=80)

1. Decision quality
2. Portfolio size
3. Ticket sizing
4. Whether or not, and how much, you follow-on.
5. Upper bound on ROI (of a single investment)

Let’s go through them one by one, picking out key findings and seeing how they affect portfolio performance – and check out our [Portfolio Simulator](https://www.moonfire.com/playgrounds/portfolio-simulator/) if you want to run some experiments yourself.

## Decision quality

![Content image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2F933a55a53b11c1076ad05d6341ddf7f2537f5c3b-2000x2008.jpg&w=3840&q=80)

It all starts with the quality of your decision making.

If you’re better at picking winners than the average VC, the probability of returning a multiple of the fund is much higher. Doubling the fund is almost a certainty for portfolios larger than 200 companies, regardless of the expected maximum bound on return (we’ll come back to this in a minute), and the probability of losing money decreases more rapidly as the size of your portfolio increases.

If you’re bad at picking winners…well, other than considering another line of work, you could eliminate the effect of your decision quality by indexing the market and allocating capital randomly. But, again, it depends on your goal. If you want to just achieve 1x and avoid losses, create a large portfolio. If you want to achieve 2, 3, 5x, you either need to [improve your decision quality](https://pulse.moonfire.com/more-needles-bigger-haystacks-what-we-mean-when-we-talk-about-data-driven-vc/) or invest in fewer companies and hope for the best.

## Portfolio size

![Content image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fcfea8b10705b615a5cdd5cf540ea62b68c6a9d2a-2000x2008.jpg&w=3840&q=80)

The probability of returning less than 1x the fund decreases as the size of your portfolio grows, and gets close to zero when your portfolio exceeds 200 companies. On the other hand, increasing the size of your portfolio limits your potential return, because the impact of any big wins will be diluted. If your decision-making quality is average, and the maximum possible return of any one investment is less than 1000x, it’s almost impossible to 10x a fund with more than 110 companies in your portfolio.

## Ticket size

![Content image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2F28aeb0a1cb0993aed4ca8b8965fd57672939494f-960x966.jpg&w=1920&q=80)

If you can accurately assign capital in proportion to the quality of the deal, you will outperform the average VC. But, all other things being equal, the best strategy is a uniform ticket size – investing equal amounts in every company in the portfolio.

## Follow-ons

![Content image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fc7fa995bcd0b68b07f8237193a7bcc8b434dbefd-751x750.jpg&w=1920&q=80)

From a fund’s perspective, the short answer is: don’t. Longer answer: follow-ons only make sense when the return of the follow-on investment alone is greater than the average return of a new initial investment. In other words, you shouldn’t follow on unless it’s absolutely the best way for you to deploy that capital.

Of course, from a founder’s perspective, follow-ons are vital, both as a vote of confidence and an extension of their runway. They also act as a positive signal to other investors, which could counteract the potentially sub-optimal deployment of that capital.

## Bounded ROI

![Content image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2F1bbc88e3d1c7b0b58ad793f7c8d21ae9b5fb33fe-1200x1200.jpg&w=3840&q=80)

We found that this has the biggest impact on the construction and performance of a portfolio.

If, unrealistically, you have unbounded returns (ie you think that the return potential is unlimited) then you would be best having a large portfolio. But as soon as you lower that upper return potential to a level you think is reasonable, your portfolio should be much more concentrated, otherwise you’re diluting the effects of the best returns.

For example, if the maximum possible return on a single investment is 50x, then the probability of returning 2x the fund increases until a portfolio size of 40 companies, and then it starts to decrease. If the bound is 100x, the probability of a 2x return on the fund increases until a portfolio size of 100 and then it stays constant, while the probability of doing more than 3x starts to decrease after a portfolio of 40 companies.

## Just like the simulations

The factor we want to explore next in these simulations is time.

By adding a time horizon to the model, we can ask more nuanced questions about strategy; the optimal strategy for achieving 10x in two years is going to look very different to the strategy for achieving 10x in five years. And by further building on this model, we can use these simulations to better inform our own portfolio strategy, and leverage it to maximise the value we provide to our companies.

* Now go design your own early-stage portfolio strategy with our [Portfolio Simulator](https://www.moonfire.com/playgrounds/portfolio-simulator/).
* You can also [read the full report of our simulations](https://arxiv.org/abs/2303.11013), which dives into how we modelled and ran these simulations, and provides a deeper analysis of the findings.

Authors

![Author image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fbdfc60b8bbfc1b48945185071979e93ab1969452-1280x1280.webp&w=256&q=80)

Moonfire Team

In this article

Authors

[![Author image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fbdfc60b8bbfc1b48945185071979e93ab1969452-1280x1280.webp&w=256&q=80)

Moonfire Team](/people/?member=moonfire-team)

Sign up for more like this

Stay ahead of trends, get a roundup of high-quality content in your inbox every month.

![Newsletter Image](/_next/image/?url=%2Fimages%2Fnewsletter.png&w=1080&q=80)

[![Ascii art](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2F95a7ba7df999d2751dc3fc0044acdb15e431a99a-3388x1892.png&w=3840&q=80)![Article image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fa54ec60e52fc9d58e108737f21e9f68ab8ac2f8b-1024x559.png&w=3840&q=80)

Engineering

17/12/2025

The Shape of Intelligence

By Jonas Vetterle](/stories/the-shape-of-intelligence/)[![Ascii art](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2F6d8f5008b97d4893330e6f054ceebaa7870a689b-1515x919.png&w=3840&q=80)![Article image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fb9288a4541c0ea72ea1b24e4556c85336df6bade-3336x1950.png&w=3840&q=80)

Newsletter

27/11/2025

🌗🔥 Plumbers of the AI Revolution

By Moonfire Team](/stories/plumbers-of-the-ai-revolution/)[![Ascii art](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Fa146adf0cbd11fa912d5257cbfca8d921c4df4f1-2870x1950.png&w=3840&q=80)![Article image](/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Foxw4sk4g%2Fproduction%2Ffd47224375fb5bf2341d552d13579c093c9bdfbb-4836x2716.png&w=3840&q=80)

Portfolio

29/10/2025

Kernel: Plumbers of the AI revolution

By Akshat Goenka](/stories/kernel-plumbers-of-the-ai-revolution/)