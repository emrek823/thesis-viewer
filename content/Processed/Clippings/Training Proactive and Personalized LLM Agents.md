---
title: "Training Proactive and Personalized LLM Agents"
source: "https://arxiv.org/html/2511.02208v1"
author:
published:
created: 2025-12-17
description:
tags:
  - "clippings"
---
arXiv:2511.02208v1 \[cs.AI\] 04 Nov 2025

Weiwei Sun <sup>1</sup>  Xuhui Zhou <sup>1</sup>  Weihua Du <sup>1</sup>  Xingyao Wang <sup>2</sup>  
Sean Welleck <sup><span>1</span></sup>   Graham Neubig <sup><span>1,2</span></sup>   Maarten Sap <sup><span>1</span></sup>   Yiming Yang <sup><span>1</span></sup>  
<sup><span>1</span></sup> Carnegie Mellon University   <sup><span>2</span></sup> OpenHands  
sunnweiwei@gmail.com [PPP-Agent](https://github.com/sunnweiwei/PPP-Agent)

###### Abstract

While existing work on developing AI agents focuses primarily on improving task success rates, we argue that effective real-world agents require optimizing three dimensions: productivity (task completion), proactivity (asking essential questions), and personalization (adapting to diverse user preferences). We introduce UserVille, an interactive environment with LLM-based user simulators enabling diverse, configurable user preferences. Leveraging UserVille, we introduce PPP, a multi-objective reinforcement learning approach that jointly optimizes all three dimensions: P roductivity, P roactivity, and P ersonalization. Experiments on software engineering and deep research tasks show that agents trained with PPP achieve substantial improvements over strong baselines such as GPT-5 (+21.6 on average), demonstrating the ability to ask strategic clarifying questions, adapt to unseen user preferences, and improve task success through better interaction. This work demonstrates that explicitly optimizing for user-centered interaction is critical for building practical and effective AI agents.

Training Proactive and Personalized LLM Agents

Weiwei Sun <sup><span>1</span></sup>   Xuhui Zhou <sup><span>1</span></sup>   Weihua Du <sup><span>1</span></sup>   Xingyao Wang <sup><span>2</span></sup> Sean Welleck <sup><span>1</span></sup>   Graham Neubig <sup><span>1,2</span></sup>   Maarten Sap <sup><span>1</span></sup>   Yiming Yang <sup><span>1</span></sup> <sup><span>1</span></sup> Carnegie Mellon University   <sup><span>2</span></sup> OpenHands sunnweiwei@gmail.com [PPP-Agent](https://github.com/sunnweiwei/PPP-Agent)

## 1 Introduction

In real-world applications of AI agents, users with diverse backgrounds, preferences, and intentions often provide underspecified instructions, requiring agents to seek clarification before producing a solution [^28]. For example, a user may ask the agent to fix a bug but omit crucial details about the system setup, which the agent must obtain via clarification to reproduce the issue. Moreover, some users may prefer to answer all questions upfront before the agent takes action, requiring the agent to adjust its interaction style accordingly. Thus, effective interaction is central to the success of language model (LM) agents.

![Refer to caption](https://arxiv.org/html/x1.png)

Figure 1: Comparison of average Productivity, Proactivity, and Personalization scores on the SWE-bench 8 and BrowseComp+ 3 datasets, where evaluation is conducted with vague user prompts rather than the original precise ones. Our proposed PPP optimization framework incentivizes high-quality agent-user interaction, achieving substantial improvements in all measured aspects. In contrast, existing LLMs (e.g., GPT-5) typically overlook interaction quality, resulting in high productivity but limited proactivity and personalization.

What makes agent–user interaction effective? We argue that to acheive truely effective agents that achieve high user satisfaction, they must not just complete tasks (be productive). They must also be proactive, skillfully asking essential clarifying questions when a user’s request is underspecified while avoiding unnecessary queries that could cause frustration, and be personalized, adapting their communication style to individual user preferences by adjusting factors like brevity, question format, tone, etc.

However, existing work on LLM agents [^8] has primarily optimized for task success alone, often neglecting the systematic optimization of agent-user interaction quality. For example, Figure [1](https://arxiv.org/html/2511.02208v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Training Proactive and Personalized LLM Agents") shows that frontier LLMs like GPT-5 achieve high productivity scores but exhibit clear limitations in proactivity and personalization. This narrow focus can lead to agents that fail to interact when necessary, causing task failure; ask unnecessary or inappropriate questions that frustrate users; or violate user preferences and personas.

One bottleneck of advancing effective agent-user interaction is that lack of a scalable training environment as collecting supervision signal with human users is usualy time consuming and infeasible. We address this by developing UserVille, an interactive environment populated with user simulators of different preferences.UserVille is instantiated on two tasks (SWE and Deep-Research) and operates through three stages: (i) transforming precise task specifications into vague user prompts that simulate real-world ambiguity [^24], (ii) implementing user simulators with diverse interaction preferences (e.g., brevity, response style, query timing, language constraints) [^15], and (iii) providing user-centric evaluation metrics that assess both proactivity (whether questions target “true” blockers and are easy to answer) and personalization (whether agent behavior aligns with corresponding user preferences).

Building on UserVille, we introduce the PPP (P roductive, P roactive, and P ersonalized) optimization framework to explicitly optimize LLM agents for effective human interaction. In this framework, the agent interacts with both task-related tools and our diverse user simulators. We employ a multi-objective reinforcement learning (RL) algorithm that trains the agent using a composite reward signal derived from three sources: task success (productivity), interaction quality (proactivity), and alignment with user preferences (personalization). Unlike prior work that relies solely on task completion rewards, our approach grounds the learning signal in diverse simulated users, enabling agents to learn interaction strategies that balance problem-solving with effective, user-adapted communication.

![Refer to caption](https://arxiv.org/html/x2.png)

Figure 2: Example of the agent interacting with the user to better understand the issue—identifying blockers and making it easy for the user to respond.

We evaluate our method across two representative agent domains: software engineering tasks from SWE-Bench [^8] and deep research tasks from BrowseComp-Plus [^26]. Our experiments demonstrate four key findings:(1) Interaction is essential, when users provide vague instructions, agent-user interaction dramatically improves task success (F1 44.11 → 64.50), while agents without proper interaction training fail to leverage clarifications effectively (see Section [7.1](https://arxiv.org/html/2511.02208v1#S7.SS1 "7.1 RQ1: Effectiveness of Agent–User Interaction ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"));(2) PPP improves all dimensions, our method achieves +16.72 average score improvement over strong baselines including GPT-5 across productivity, proactivity, and personalization, with ablations confirming each objective’s necessity (see Section [7.2](https://arxiv.org/html/2511.02208v1#S7.SS2 "7.2 RQ2: Productivity, Proactivity, and Personalization Evaluation Results ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"));(3) Agents learn strategic interaction, PPP-trained agents distinguish between precise and vague prompts, asking only when necessary, and exhibit improved question quality through an increase-then-decrease learning dynamic (see Section [7.3](https://arxiv.org/html/2511.02208v1#S7.SS3 "7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"));(4) PPP provides strong generalization, our approach transfers successfully to unseen user preferences, different user simulators, and more complex downstream tasks (see Section [7.4](https://arxiv.org/html/2511.02208v1#S7.SS4 "7.4 RQ 4: Generalization on New User Simulators, Personas, and Tasks ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents")). Together, these results demonstrate that multi-objective RL for interaction quality is critical for building practical and user-friendly LM agents.

In summary, this paper makes the following contributions: (1) We introduce UserVille, an automatic framework that converts existing agent benchmarks into interactive training environments with realistic and diverse user simulators, enabling systematic evaluation of agent–user interaction quality through proactivity and personalization metrics. (2) We propose PPP, a multi-objective reinforcement learning framework that jointly optimizes agents for productivity, proactivity, and personalization, going beyond task success to improve communication effectiveness and user adaptation. (3) We conduct comprehensive experiments across software engineering and deep research tasks, demonstrating that our approach significantly improves interaction quality, generalizes to unseen preferences and tasks, and achieves substantial gains in task success through better agent-user collaboration.

## 2 Related Work

### 2.1 User-Agent Interaction

Recently, researchers have used LLM-simulated users in multi-turn settings to study how agents understand and adapt to users’ feedback, goals, and evolving needs [^16]. When incorporated into an RL training environment, these simulated users can provide valuable learning signals that help LLM agents improve their ability to collaborate with real humans, supported by real-human studies [^27]. However, most works that incorporate simulated users into training environments overlook the diversity of user personas and the interaction costs involved, such as the effort users spend in answering agents’ questions in real-world collaborations [^27]. As [^12] point out, user simulators often pursue multiple objectives beyond mere task completion. A key insight is that users tend to focus on the aspects that uniquely require their input, such as designing the core idea or conveying the main intent, while delegating the more time-consuming and complex work, like understanding the environment’s intricacies, to the agent [^1].

![Refer to caption](https://arxiv.org/html/x3.png)

Figure 3: UserVille simulates users with different preferences and provides feedback on interaction quality.

### 2.2 Agent RL

Reinforcement Learning (RL) has emerged as a key paradigm for agent optimization [^18]. While most of this work has focused on task success alone, recent studies have begun to explore RL for optimizing agents involved in user interaction. For example, SWEER-RL [^34] trains a multi-turn LLM to collaborate with a human simulator on code generation; CollabLLM [^27] introduces intrinsic rewards to enhance interaction efficiency and engagement; and UserRL [^17] develops multiple gym environments to study various reward shaping techniques. Despite these advances, existing work typically treats the user merely as an information provider and is trained with task-oriented objective. This approach largely neglects crucial user-centric objective, such as user interaction satisfaction and personalization. Our proposed framework employs multi-objective RL to balance task completion with the quality of user interaction, specifically optimizing for interaction efficiency and personalization.

## 3 Problem Formulation

We formulate the interaction between agent and user as an ask\_user tool, and thereby the task can be modeled as a multi-turn tool call agent. Specifically, given a user prompt $q$ , an agent generates a multi-turn interaction trajectory denoted as

|  | $$ \tau:=(a_{1},o_{1},a_{2},o_{2},\ldots,a_{T},o_{T}), $$ |  |
| --- | --- | --- |

where $a_{i}$ is the LLM output at step $i$ (including reasoning and tool call), which can be either calling task-oriented tools, or call ask\_user tool to interact with user simulator; and $o_{i}$ is the corresponding observation of tool-call. We follow a ReAct-style agent [^29] to model the interaction as following,

|  | $$ p_{\theta}(\tau\mid q)=\prod_{i\in[T]}\pi_{\theta}\big(a_{i}\mid q,(a_{1},o_{1},\ldots,a_{i-1},o_{i-1})\big), $$ |  |
| --- | --- | --- |

## 4 UserVille: An Interactive Environment with Preference-Aware User Simulation

To study agents that interact with users exhibiting diverse personas, we design UserVille, an interactive environment that simulates users with different preferences and provides feedback on interaction quality. Specifically, as illustrated in Figure [3](https://arxiv.org/html/2511.02208v1#S2.F3 "Figure 3 ‣ 2.1 User-Agent Interaction ‣ 2 Related Work ‣ Training Proactive and Personalized LLM Agents") the construction of UserVille involves three stages:

1. Prompt Vaguenization: Given a precise user prompt in the original task, we transform it into an under-specified (vague) version to simulate realistic user uncertainty.
2. Preference-Aware User Simulation: We design an LLM-based user simulator whose behavior is driven by diverse configurable user preferences, enabling personalized interactions and reward calculation.
3. User-Centric Evaluation: After task completion, the user simulator produces user-centric feedback metrics, including evaluations of proactivity and personalization, to quantify the quality of the agent–user interaction.

#### Task Selection.

For task selection, although our framework is generalizable across different tasks, this paper mainly focuses on two representative agentic tasks: the SWE task from SWE-Bench [^8] and the Deep-Research task from BrowseComp [^26].

### 4.1 Prompt Vaguenization

The user prompt in existing datasets are deliberately designed to be self-contained and highly precise, ensuring that the task is solvable solely based on the initial user prompt [^8]. However, user prompts in real-world applications often present underspecified or vague instructions [^31].

To simulate this setting, the Prompt Vaguenization stage uses an LLM to rewrite the prompt into a vague form. The vaguenization follows two principles: (1) the vague prompt should preserve the same intent as the original precise prompt; and (2) the vague prompt should contain only partial information and generalize specific details.

Figure [3](https://arxiv.org/html/2511.02208v1#S2.F3 "Figure 3 ‣ 2.1 User-Agent Interaction ‣ 2 Related Work ‣ Training Proactive and Personalized LLM Agents") illustrates examples of precise prompt and their corresponding vague versions, and the table provides additional examples of vague prompt. Given the information gap between precise and vague prompts, we can establish information asymmetry between the user simulator and the agent, allowing the user simulator to clarify the agent’s queries based on the precise prompt.

|  | Tool-Use | User-Simulator | Productive | Proactive | Persona | RL | Task Types |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tau-Bench [^28] | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | TOD |
| LD-Agent [^10] | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | Chat |
| ClarifyGPT [^13] | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | Code |
| SWEET-RL [^34] | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | SWE |
| CollabLLM [^27] | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | Math / Code / Edit |
| UserRL [^17] | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | Chat / TOD / Search |
| UserVille (Ours) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | SWE / Search |

Table 1: Compare UserVille with related works. UserVille provides an interactive environment for preference-aware user simulation and multi-aspect reward calculation to support RL training.

### 4.2 Preference-Aware User Simulation

In real-world applications, users can have diverse backgrounds and personas, leading to distinct preferences for how agents should interact with them. For example, some users may be professionals capable of answering technical questions, while others are amateurs; some may prefer multiple interactions, while others may not. To simulate this diversity, we design a preference-aware user simulator: each simulated user is parameterized by predefined interaction preferences. In our experiments, we define 20 preferences that describe how users prefer to interact with agents (see Table [4](https://arxiv.org/html/2511.02208v1#A1.T4 "Table 4 ‣ Appendix A Preference Pool ‣ Training Proactive and Personalized LLM Agents") for full descriptions):

<svg xmlns="http://www.w3.org/2000/svg" class="ltx_picture" height="498.22" id="S4.SS2.p2.pic1" overflow="visible" version="1.1" viewBox="0 0 600 498.22" width="600"><g fill="#000000" stroke="#000000" stroke-width="0.4pt" style="--ltx-stroke-color:#000000;--ltx-fill-color:#000000;" transform="translate(0,498.22) matrix(1 0 0 -1 0 0)"><g fill="#000000" fill-opacity="1.0" style="--ltx-fill-color:#000000;"><path d="M 0 3.32 L 0 494.9 C 0 496.73 1.49 498.22 3.32 498.22 L 596.68 498.22 C 598.51 498.22 600 496.73 600 494.9 L 600 3.32 C 600 1.49 598.51 0 596.68 0 L 3.32 0 C 1.49 0 0 1.49 0 3.32 Z" style="stroke:none"></path></g><g fill="#F6F6F6" fill-opacity="1.0" style="--ltx-fill-color:#F6F6F6;"><path d="M 0.55 3.32 L 0.55 147.23 L 599.45 147.23 L 599.45 3.32 C 599.45 1.79 598.21 0.55 596.68 0.55 L 3.32 0.55 C 1.79 0.55 0.55 1.79 0.55 3.32 Z" style="stroke:none"></path></g><g fill="#F0F0F0" fill-opacity="1.0" style="--ltx-fill-color:#F0F0F0;"><path d="M 0.55 147.78 L 0.55 494.9 C 0.55 496.42 1.79 497.66 3.32 497.66 L 596.68 497.66 C 598.21 497.66 599.45 496.42 599.45 494.9 L 599.45 147.78 Z" style="stroke:none"></path></g><g fill-opacity="1.0" transform="matrix(1.0 0.0 0.0 1.0 10.24 484.02)"><foreignObject color="#000000" height="341.58" overflow="visible" style="--ltx-fg-color:#000000;--fo_width :41.88em;--fo_height:0.69em;--fo_depth :24em;" transform="matrix(1 0 0 -1 0 9.49)" width="579.52"><span xmlns="http://www.w3.org/1999/xhtml"><span><span><span><span>User Preferences Pool</span></span></span></span></span></foreignObject></g> <g fill-opacity="1.0" transform="matrix(1.0 0.0 0.0 1.0 10.24 12.31)"><foreignObject color="#000000" height="130.07" overflow="visible" style="--ltx-fg-color:#000000;--fo_width :41.88em;--fo_height:9.15em;--fo_depth :0.25em;" transform="matrix(1 0 0 -1 0 126.61)" width="579.52"><span xmlns="http://www.w3.org/1999/xhtml"><span><span><span>(1) no specific preference; (2) very short questions; (3) detailed, contextual questions; (4) expects <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline" data-latex="\geq"><semantics><mo>≥</mo> <annotation>\geq</annotation></semantics></math> 3 questions; (5) answers only at the beginning; (6) no questions; (7) answers only multiple-choice (A/B/C); (8) can answer expert-level questions; (9) only simple/common-sense; (10) all questions in one turn; (11) one question per turn; (12) agent tries first, asks only on real blockers; (13) question must be in Italian only; (14) uses at least five different languages in one message; (15) English only and <span>all caps</span>; (16) contains no commas anywhere; (17) wrapped entirely as valid JSON (no extra text); (18) includes a clearly humorous joke with the question; (19) includes code/doc snippets with explicit file/URL references; (20) exactly three sentences.</span></span></span></span></foreignObject></g></g></svg>

We use preferences (1)–(12) for model training and reserve the remaining 8 as unseen preferences for evaluation.

### 4.3 User-Centric Evaluation

Existing work mainly focuses on task-oriented feedback, i.e., whether the task is successful. However, in agent–user interaction systems, user satisfaction goes beyond task success. It also involves user-centric metrics such as whether the interaction is effective and efficient, and whether the agent follows user preferences. In UserVille, we develop a user-centric evaluation framework for comprehensive assessment of user satisfaction in interactions, focusing on two aspects:

#### Proactivity

An effective agent should proactively engage with the user while balancing the need for clarification against the risk of causing annoyance. We evaluate the agent’s proactivity using a user effort estimation approach. Each time the user simulator answers an agent’s question, it classifies the user-effort required for that answer into one of three categories:

1. Low-effort: This applies when the agent’s question can be answered directly using information from the original, precise user prompt. We consider this low-effort because the information is already part of the user’s initial (but unstated) intention.
2. Medium-effort: This applies when the user simulator cannot or refuses to answer the question (e.g., replying, “ I don’t know ”). This represents an unnecessary or poorly-posed query, forcing the user to expend cognitive effort without advancing the task.
3. High-effort: This applies when the user simulator provides an answer using information that exists beyond the original precise user prompt. This simulates a scenario where the user must perform additional work, such as reading external documentation or exploring a codebase, which requires significant effort. We design task-specific criteria to identify these high-effort questions to ensure effort classification accuracy.

We aggregate the turn-level evaluations to determine the overall session-level user effort, which we define as the maximum effort recorded in any single turn within that session. Furthermore, a session is also classified as high-effort if the initial user prompt was vague and the agent produced an incorrect solution without asking any clarifying questions. This classification is used because it forces the user to expend significant effort to verify and correct the agent’s flawed solution.

#### Personalization

An effective agent should adapt its interaction style to align with the user’s preferences. To evaluate this, we design a reward function for each preference defined in Section [4.2](https://arxiv.org/html/2511.02208v1#S4.SS2 "4.2 Preference-Aware User Simulation ‣ 4 UserVille: An Interactive Environment with Preference-Aware User Simulation ‣ Training Proactive and Personalized LLM Agents"), assessing whether the agent’s behavior adheres to that specific preference. Table  [4](https://arxiv.org/html/2511.02208v1#A1.T4 "Table 4 ‣ Appendix A Preference Pool ‣ Training Proactive and Personalized LLM Agents") lists the detailed reward criteria, and Table  [5](https://arxiv.org/html/2511.02208v1#A1.T5 "Table 5 ‣ Appendix A Preference Pool ‣ Training Proactive and Personalized LLM Agents") presents the corresponding reward functions. The assessment is conducted either through hard-coded, rule-based rewards (e.g., based on the number or position of queries) or by prompting the user simulator to act as an LLM-as-a-judge using a preference-specific evaluation rubric. Based on the reward function’s output, we classify each agent-user interaction trajectory as either (i) Follow-preference, when the interaction aligns with user preferences, or (ii) Not-follow-preference, when it does not.

## 5 PPP: RL for Productive, Proactive, and Personalized Agents

To optimize LLM agents for productivity, proactivity, and personalization, we develop an end-to-end multi-objective reinforcement learning (RL) framework. In this setup, the agent receives a user prompt (vague or precise) and interacts with both task-oriented tools and the user simulator constructed in UserVille. The objective is to maximize both task-oriented metrics (e.g., task success rate) and user-centric metrics (e.g., proactivity and personalization).

### 5.1 Designing Task and User Rewards

1. Productivity Reward $R_{\text{Prod}}$ .The productivity reward $R_{\text{Prod}}$ is a task-oriented, verifiable reward that measures whether the agent successfully completes the underlying task (e.g., producing the correct answer).
2. Proactivity Reward $R_{\text{Proact}}$ .The proactivity reward $R_{\text{Proact}}$ is derived from the user-centric evaluations in Section [4.3](https://arxiv.org/html/2511.02208v1#S4.SS3 "4.3 User-Centric Evaluation ‣ 4 UserVille: An Interactive Environment with Preference-Aware User Simulation ‣ Training Proactive and Personalized LLM Agents"). It consists of two components: (a) a bonus for good interaction, which adds $+0.05$ if all queries are low-effort; and (b) a penalty for bad interaction, applying $-0.1$ for each medium-effort query and $-0.5$ for each high-effort query. The overall $R_{\text{Proact}}$ is the sum of the bonus (a) and the accumulated penalties (b).
3. Personalization Reward $R_{\text{Pers}}$ .The personalization reward $R_{\text{Pers}}$ is based on personalization evaluations in Section [4.3](https://arxiv.org/html/2511.02208v1#S4.SS3 "4.3 User-Centric Evaluation ‣ 4 UserVille: An Interactive Environment with Preference-Aware User Simulation ‣ Training Proactive and Personalized LLM Agents"). It consists of two components: (a) a bonus for good interaction, which adds $+0.05$ if the agent fully complies with the user’s stated preference; and (b) a penalty for preference violations, based on the preference-specific reward function, which yields a non-positive scalar value for each violation. The final $R_{\text{Pers}}$ is the sum of the bonus (a) and the accumulated penalties (b).

The overall reward for trajectory $\tau$ is:

<table><tbody><tr><td></td><td><math><semantics><mrow><mrow><mi>R</mi> <mo>=</mo> <mrow><msub><mi>R</mi> <mtext>Prod</mtext></msub> <mo>+</mo> <msub><mi>R</mi> <mtext>Proact</mtext></msub> <mo>+</mo> <msub><mi>R</mi> <mtext>Pers</mtext></msub></mrow></mrow><mo>.</mo></mrow><annotation>R=R_{\text{Prod}}+R_{\text{Proact}}+R_{\text{Pers}}.</annotation></semantics></math></td><td></td><td rowspan="1"><span>(1)</span></td></tr></tbody></table>

### 5.2 RL Algorithm

We employ a GRPO-based reinforcement learning algorithm [^4] for model training and adopt the Clip-Higher strategy and Token-Level Policy Gradient Loss from DAPO [^30]. Specifically, for a question $q$ from the training dataset $\mathcal{D}$ , $G$ trajectories $(\tau_{1},\tau_{2},\cdots,\tau_{G})$ are sampled from the old policy $\pi_{\text{old}}$ . Each complete trajectory, e.g., $\tau_{i}=(a_{i,1},o_{i,1},\cdots,a_{i,T},o_{i,T})$ , is represented as a sequence of tokens defined by $\tau_{i}=[\tau_{i,1},\cdots,\tau_{i,|\tau_{i}|}]$ . Then, the learning objective is defined as:

|  | $\displaystyle\mathcal{J}$ | $\displaystyle=\mathbb{E}_{q\sim\mathcal{D},\{\tau_{i}\}_{i=1}^{G}\sim\pi_{\text{old}}(\cdot\mid q)}\frac{1}{\sum_{i=1}^{G}\|\tau_{i}\|}\sum_{i=1}^{G}\sum_{t=1}^{\|\tau_{i}\|}$ |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | $\displaystyle\min\!\left\{r_{i,t}(\theta)\,\hat{A}_{i,t},\ \operatorname{clip}\!\big(r_{i,t}(\theta),\,1-\epsilon,\,1+\epsilon\big)\,\hat{A}_{i,t}\right\}$ |  |

where the importance sampling ratio and the group relative advantage estimator [^19] are given by

|  | $\displaystyle r_{i,t}(\theta)$ | $\displaystyle=\frac{\pi_{\theta}({\tau}_{i,t}\mid q,{\tau}_{i,<t})}{\pi_{\theta_{\text{old}}}({\tau}_{i,t}\mid q,{\tau}_{i,<t})}\cdot\mathbf{1}_{\tau_{i,t}},\,\,$ |  |
| --- | --- | --- | --- |
|  | $\displaystyle\hat{A}_{i,t}$ | $\displaystyle=\frac{\mathrm{clip}(R_{i},0,1)-\mathrm{mean}(\{R_{i}\}_{i=1}^{G})}{\mathrm{std}(\{R_{i}\}_{i=1}^{G})}.$ |  |

Here $\mathbf{1}_{\tau_{i,t}}$ ensures that only those LLM-generated tokens are optimized.

## 6 Experimental Design

In summary, our experiments address the following research questions:

1. Does agent–user interaction improve task success? We answer this in Section [7.1](https://arxiv.org/html/2511.02208v1#S7.SS1 "7.1 RQ1: Effectiveness of Agent–User Interaction ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") and Figure  [4](https://arxiv.org/html/2511.02208v1#S6.F4 "Figure 4 ‣ 6.2 Implementation ‣ 6 Experimental Design ‣ Training Proactive and Personalized LLM Agents"), where we observe that interaction is crucial to complete the task when the user’s initial prompt is vague.
2. How do different methods perform across the three evaluation dimensions? We answer this in Section [7.2](https://arxiv.org/html/2511.02208v1#S7.SS2 "7.2 RQ2: Productivity, Proactivity, and Personalization Evaluation Results ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") and Table  [2](https://arxiv.org/html/2511.02208v1#S6.T2 "Table 2 ‣ 6.2 Implementation ‣ 6 Experimental Design ‣ Training Proactive and Personalized LLM Agents"), where we observe significant improvements with our proposed learning framework across evaluation dimensions and datasets.
3. How does our PPP reinforcement learning framework enhance the agent’s interaction ability? We answer this in Section [7.3](https://arxiv.org/html/2511.02208v1#S7.SS3 "7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") and Figures  [6](https://arxiv.org/html/2511.02208v1#S7.F6 "Figure 6 ‣ 7.1 RQ1: Effectiveness of Agent–User Interaction ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") and  [7](https://arxiv.org/html/2511.02208v1#S7.F7 "Figure 7 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"), where we find that RL training incentivizes the identification of user ambiguity and promotes high-quality interaction.
4. How well does our model generalize to new user simulators, personas, and tasks? We answer this in Section [7.4](https://arxiv.org/html/2511.02208v1#S7.SS4 "7.4 RQ 4: Generalization on New User Simulators, Personas, and Tasks ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"), Table  [3](https://arxiv.org/html/2511.02208v1#S7.T3 "Table 3 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"), and Figures  [8](https://arxiv.org/html/2511.02208v1#S7.F8 "Figure 8 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") and  [9](https://arxiv.org/html/2511.02208v1#S7.F9 "Figure 9 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"), where we show the strong generalization ability of the model.

### 6.1 Datasets

We conduct experiments on two tasks: Software Engineering (SWE) and Deep-Research.

1. For SWE, we use SWE-Gym [^14] as the training data and SWE-Bench Verified [^8] as the test data. Since the SWE-Bench task is resource-intensive for training, we train the model only on the SWE-Func-Loc task, where the model localizes the issue as a list of function names that need to be edited [^2]. During evaluation, we filter out instances where all ground-truth edited functions are non-Python, resulting in 488 test instances. We also evaluate on the SWE-Full task, where the agent makes real edits to the repository and is evaluated by running unit tests.
2. For Deep-Research, we use BrowseComp-Plus [^3], splitting the data into 450 training instances and 100 test instances. We use Qwen3-Embed-8B as the retriever.

### 6.2 Implementation

We conduct experiments using Seed-OSS-36B-Instruct as the base model. To construct training data, we uniformly sample 12 user preferences with vague initial prompts plus 1 with a precise prompt, resulting in a 13× data repetition (12 + 1). During training, we use GPT-5-Nano as the user simulator. Our training environment is implemented with Verl, using a learning rate of 1e-6, batch size of 64, group size of 8, and 200 training steps. We set the maximum output length to 32K for SWE-Func-Loc, 65K for SWE-Full, and 41K for the Deep-Research task. For SWE tasks, we implement our scaffold based on OpenHands [^25]. For SWE-Func-Loc, we implement a lightweight simulated environment that allows only read-only actions, and for the SWE-Bench full task, we use the official Docker environment. For Deep-Research, we implement our scaffold based on the original paper, where the agent is equipped with a search tool and an open\_page tool.

![Refer to caption](https://arxiv.org/html/x4.png)

Figure 4: F1 score on SWE-Bench-Verified (SWE-Func-Loc), comparing precise vs. vague initial user prompts and agents with vs. without user interaction.

<table><tbody><tr><th></th><th></th><td colspan="3"><span>SWE-Bench-Verified (Func-Loc)</span></td><td colspan="3"><span>BrowseComp-Plus</span></td></tr><tr><th><span>Method</span></th><th><span>Avg</span></th><td>Productivity</td><td>Proactivity</td><td>Personalization</td><td>Productivity</td><td>Proactivity</td><td>Personalization</td></tr><tr><th><span>Base Models</span></th><th></th><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th>GPT-5</th><th><span>40.40</span></th><td><span>55.83</span></td><td><span>36.60</span></td><td><span>12.96</span></td><td><span>22.50</span></td><td><span>43.15</span></td><td><span>71.36</span></td></tr><tr><th>GPT-5-Mini</th><th><span>35.82</span></th><td><span>35.00</span></td><td><span>15.90</span></td><td><span>24.82</span></td><td><span>22.75</span></td><td><span>45.50</span></td><td><span>70.97</span></td></tr><tr><th>GPT-5-Nano</th><th><span>30.09</span></th><td><span>24.30</span></td><td><span>11.10</span></td><td><span>16.92</span></td><td><span>24.15</span></td><td><span>41.75</span></td><td><span>62.34</span></td></tr><tr><th>GPT-4.1</th><th><span>38.86</span></th><td><span>25.08</span></td><td><span>11.35</span></td><td><span>53.04</span></td><td><span>22.50</span></td><td><span>41.40</span></td><td><span>79.77</span></td></tr><tr><th>Seed-OSS-36B-Inst</th><th><span>45.32</span></th><td><span>38.59</span></td><td><span>43.70</span></td><td><span>69.07</span></td><td><span>18.20</span></td><td><span>37.60</span></td><td><span>64.76</span></td></tr><tr><th colspan="3"><span>RL-ed Models (based on Seed-OSS-36B)</span></th><td></td><td></td><td></td><td></td><td></td></tr><tr><th><span>PPP (Ours)</span></th><th><span>62.04</span></th><td><span>56.26 <span>(+17.67)</span></span></td><td><span>75.55 <span>(+31.85)</span></span></td><td><span>89.26 <span>(+20.19)</span></span></td><td><span>26.63 <span>(+8.43)</span></span></td><td><span>47.69 <span>(+10.09)</span></span></td><td><span>76.85 <span>(+12.09)</span></span></td></tr><tr><th>w/o Proact.</th><th><span>55.05</span></th><td><span>53.35 <span>(+14.76)</span></span></td><td><span>37.75 <span>(-5.95)</span></span></td><td><span>94.21 <span>(+25.14)</span></span></td><td><span>23.00 <span>(+4.80)</span></span></td><td><span>44.79 <span>(+7.19)</span></span></td><td><span>77.18 <span>(+12.42)</span></span></td></tr><tr><th>w/o Pers.</th><th><span>53.23</span></th><td><span>55.48 <span>(+16.89)</span></span></td><td><span>87.15 <span>(+43.45)</span></span></td><td><span>47.25 <span>(-21.82)</span></span></td><td><span>26.60 <span>(+8.40)</span></span></td><td><span>47.42 <span>(+9.82)</span></span></td><td><span>55.48 <span>(-9.28)</span></span></td></tr><tr><th>w/o Proact. &amp; Pers.</th><th><span>44.98</span></th><td><span>56.77 <span>(+18.18)</span></span></td><td><span>42.45 <span>(-1.25)</span></span></td><td><span>57.43 <span>(-11.64)</span></span></td><td><span>25.45 <span>(+7.25)</span></span></td><td><span>39.60 <span>(+2.00)</span></span></td><td><span>48.21 <span>(-16.55)</span></span></td></tr></tbody></table>

Table 2: Performance on SWE-Bench-Verified (Func-Loc) (N=488) [^8] and [^3] with vague user prompts, evaluated across three dimensions: Productivity, Proactivity, and Personalization. Scores are averaged over 20 user preferences (12 seen and 8 unseen). Numbers in parentheses indicate improvements or reductions relative to Seed-OSS-36B-Inst (before RL). The Productivity score on SWE-Func-Loc is defined as the F1 score between the model’s prediction and the ground-truth patch, while the Productivity score on BrowseComp-Plus is defined as the EM score between the model’s prediction and the ground-truth answer. Proactivity and Personalization scores are defined as described in Section  [6.3](https://arxiv.org/html/2511.02208v1#S6.SS3 "6.3 Evaluation Metrics ‣ 6 Experimental Design ‣ Training Proactive and Personalized LLM Agents"). “Avg” denotes the average score across the three dimensions and two datasets.

### 6.3 Evaluation Metrics

Our evaluation considers the following metrics:(1) Productivity Score measures task performance. For SWE-Func-Loc, we compute the F1 score between the model-predicted function list and the ground-truth list. For Deep-Research, we use the official answer judger to calculate the EM score. For the full SWE-Bench task, we use the official unit tests to calculate the task success rate.(2) Proactivity Score measures interaction quality. Based on the user effort estimation described in Section  [4.3](https://arxiv.org/html/2511.02208v1#S4.SS3 "4.3 User-Centric Evaluation ‣ 4 UserVille: An Interactive Environment with Preference-Aware User Simulation ‣ Training Proactive and Personalized LLM Agents"), for each test instance we define score = 1 if the session-level user effort is classified as low-effort, and score = 0 otherwise.(3) Personalization Score measures user preference alignment. Following the agent preference evaluation in Section  [4.3](https://arxiv.org/html/2511.02208v1#S4.SS3 "4.3 User-Centric Evaluation ‣ 4 UserVille: An Interactive Environment with Preference-Aware User Simulation ‣ Training Proactive and Personalized LLM Agents"), for each test instance we define score = 1 if the agent follows the preference, and score = 0 otherwise. We compute the average personalization score only over instances where the agent asks at least one question.

## 7 Experimental Results

### 7.1 RQ1: Effectiveness of Agent–User Interaction

To demonstrate the effectiveness of agent–user interaction in addressing underspecified initial user prompts, we conduct RL training on the SWE-Func-Loc task under three settings: (1) precise user prompts with no agent–user interaction, trained with the task score; (2) vague user prompts with no agent–user interaction, trained with the task score; and (3) vague user prompts with agent–user interaction, trained with the PPP objectives (i.e., our method). Figure  [4](https://arxiv.org/html/2511.02208v1#S6.F4 "Figure 4 ‣ 6.2 Implementation ‣ 6 Experimental Design ‣ Training Proactive and Personalized LLM Agents") shows the F1 scores of the model before and after RL training; when evaluating our method, we fix the user preference to prefer detailed question.

We observe that: (i) there is a clear performance drop when the user prompt is vague compared to precise (F1 score 44.11 vs. 64.50) under the no-interaction setting; (ii) when agent-user interaction is allowed (i.e., the agent can ask clarification questions), the base model does not show improvement, likely due to a poor interaction strategy, while RL training significantly enhances it; (iii) the RL improvement in the vague-prompt + interaction setting is much more pronounced than in the other two settings.

![Refer to caption](https://arxiv.org/html/x5.png)

Figure 5: RL curve. We can see that our method improves the agent’s proactivity and personalization, while the baseline that uses only task success rewards shows a decrease in these aspects.

![Refer to caption](https://arxiv.org/html/x6.png)

Figure 6: Task Score (F1 on SWE-Func-Loc and EM on BrowseComp-Plus ) and Ask Ratio (the percentage of instances where the model asks any question), evaluated when the user’s initial prompt is precise or vague.

### 7.2 RQ2: Productivity, Proactivity, and Personalization Evaluation Results

Table [2](https://arxiv.org/html/2511.02208v1#S6.T2 "Table 2 ‣ 6.2 Implementation ‣ 6 Experimental Design ‣ Training Proactive and Personalized LLM Agents") shows the main evaluation results on agent productivity, proactivity, and personalization metrics, comparing our method with GPT-series baselines and several ablation variants of RL training. Note that in this evaluation, the user’s initial prompt is vague, and we average performance over all 20 user preferences.

We have the following observations: (i) Despite strong productivity scores, frontier LLMs like GPT-5 still perform poorly on proactivity and personalization. Moreover, the personalization score does not align with productivity rankings: for example, GPT-4.1 shows a higher score than more recent GPT-5-series models. (ii) Our Productive, Proactive, and Personalized (PPP) RL framework significantly enhances model performance across all dimensions, with a +16.72 average score improvement. (iii) From the ablation baselines, we clearly see that removing any dimension from the RL objective leads to performance degradation on the removed dimension, indicating that optimizing the agent only for task-oriented goals harms interaction ability. Figure  [5](https://arxiv.org/html/2511.02208v1#S7.F5 "Figure 5 ‣ 7.1 RQ1: Effectiveness of Agent–User Interaction ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") further shows the model evaluation results during RL for our method and the baseline that uses only the task success reward (i.e., $R_{\text{Prod}}$ ). We observe that the baseline exhibits notable degradation in proactivity and personalization metrics as training progresses.

Moreover, given the three dimensions, a natural question is: How does optimizing one dimension influence the others?In this regard, we first observe that for the Proactivity and Personalization scores, our model (which optimizes for both dimensions) usually achieves slightly lower scores compared to the variant that optimizes only one corresponding score, indicating a trade-off when optimizing multiple objectives. Second, for the Productivity score (task score), our model usually achieves a better score than the ablations. We further observe that the quality of agent interactions can explain this: models without the proactivity reward tend to ask many high-effort queries instead of targeting real blockers, which potentially leads to lower task scores.

### 7.3 RQ3: Analyzing Agent Interaction Quality

In addition to performance improvement, how does RL training change the model’s interaction behavior? Figure [6](https://arxiv.org/html/2511.02208v1#S7.F6 "Figure 6 ‣ 7.1 RQ1: Effectiveness of Agent–User Interaction ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") shows the model’s task score and ask ratio (i.e., the percentage of test instances where the agent asks at least one question). From the task score, we observe that our model achieves improvements on both precise and vague user prompts, with larger gains on vague ones, where it outperforms GPT-5 on both datasets. The PPP-trained model asks questions in more instances: on SWE-Func-Loc, the ask ratio increases from 50% to 100%; on Deep-Research, it increases from 51% to 85%.More importantly, our model can distinguish between precise and vague prompts, exhibiting a high ask ratio on vague prompts but a low ask ratio on precise prompts. This ensures that our agent follows the principle of being minimally disruptive —asking only when necessary.

Figure [7](https://arxiv.org/html/2511.02208v1#S7.F7 "Figure 7 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") illustrates the average number of interactions (i.e., questions asked by the agent) during RL training, comparing our method with an ablation where the proactivity reward (which penalizes high-effort questions) is removed. We observe that in our method, the average number of interactions increases from approximately 0.5 to 1.2, with a consistent rise in low-effort questions. Medium-effort questions first increase and then decrease, while high-effort questions remain very low throughout. This increase-then-decrease pattern may indicate that the model’s learning dynamics first encourage asking more questions, and later focus on asking better questions that are targeted, easy for the user to answer, and directly address missing information. This leads to more efficient agent–user interaction. In contrast, the ablation model exhibits increasingly more medium- and high-effort questions, indicating that the model becomes less focused and lazy, relying more on the user to provide information—thereby annoying the user and reducing autonomy.

![Refer to caption](https://arxiv.org/html/x7.png)

Figure 7: Average number of interactions between user and agent per session, comparing our method with a baseline trained without the proactivity reward ( R Proact R\_{\\text{Proact}} ). We also report interaction quality: low-effort interactions are easy for the user to answer and directly address missing information; medium-effort interactions are those that the user cannot answer; high-effort interactions are cases where the agent asks questions that are difficult for the user to answer. For medium- and high-effort interactions, fewer is better.

| User Simulator | Productivity | Proactivity | Personalization |
| --- | --- | --- | --- |
| GPT-5-Nano | 56.26 | 75.55 | 89.26 |
| GPT-5 | 58.06 | 89.45 | 83.25 |
| GPT-5-Mini | 56.66 | 85.55 | 83.73 |
| GPT-4.1 | 56.65 | 86.90 | 95.88 |
| GPT-4o | 54.66 | 74.85 | 92.12 |

Table 3: Evaluating the model trained with GPT-5-Nano with other LLM-based user simulators on SWE-Func-Loc task.

![Refer to caption](https://arxiv.org/html/x8.png)

Figure 8: Personalization Score (whether agents’ behavior follows user-preference instructions) on 8 unseen preference types during RL training, comparing our model versus a baseline trained without the personalization reward.

![Refer to caption](https://arxiv.org/html/x9.png)

Figure 9: Evaluation on SWE-Bench Verified Full task (N=100, first 100 instances) with vague prompt input. Model is trained on SWE-Func-Loc task. Left: task success rate; Right: interaction count and effort. The ability learned on the issue localization task transfers to the full task.

### 7.4 RQ 4: Generalization on New User Simulators, Personas, and Tasks

Table [3](https://arxiv.org/html/2511.02208v1#S7.T3 "Table 3 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") lists the results of our model (trained with GPT-5-Nano user simulator) with different LLM-based user simulators on SWE-Func-Loc test set. Note that the evaluations are conducted the same as in Table  [2](https://arxiv.org/html/2511.02208v1#S6.T2 "Table 2 ‣ 6.2 Implementation ‣ 6 Experimental Design ‣ Training Proactive and Personalized LLM Agents") with only LLM replacement. We find that the performance only slightly varies with different LLMs, with a stronger LLM (e.g., GPT-5) as the user simulator exhibiting a slightly higher score. This may be because a stronger LLM can better understand the coding problem and provide more helpful responses. The small variance demonstrates the robustness of our trained model.

Figure [8](https://arxiv.org/html/2511.02208v1#S7.F8 "Figure 8 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") shows the personalization scores of our model on 8 unseen user preferences during RL training, compared to an ablation model with the personalization reward $R_{\text{Pers}}$ removed. We observe that the scores of our method consistently improve across all 8 preference types as RL training progresses, verifying the preference generalization ability of our approach. In contrast, the ablation model without the personalization reward exhibits the opposite trend: scores initially increase for some types, but after approximately 100 steps, the model begins to disregard user preferences, resulting in a significant decline in personalization performance. A notable degradation occurs for the relatively simple preference JSON\_Format, where the model score decreases from 1.00 to only 0.30 after training. These results suggest that optimizing the agent solely for task-oriented goals can compromise its personalization capabilities.

Finally, in Figure [9](https://arxiv.org/html/2511.02208v1#S7.F9 "Figure 9 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents"), we evaluate the SWE-Func-Loc trained model on the SWE-Full task and report the task success rate and interaction effort metrics during RL training with vague initial user prompts. Note that issue localization can be considered a subtask within the SWE-Full task. We observe that the full-task success rate improves with RL training on the localization task, increasing from 0.29 to around 0.36.<sup>1</sup> <sup>1</sup> 1 We also evaluate the model on precise user prompts (i.e., the original SWE-Bench task) and the success rate decreases from 0.558 to around 0.530 (See Figure [11](https://arxiv.org/html/2511.02208v1#A1.F11 "Figure 11 ‣ Appendix A Preference Pool ‣ Training Proactive and Personalized LLM Agents")).From Figure [9](https://arxiv.org/html/2511.02208v1#S7.F9 "Figure 9 ‣ 7.3 RQ3: Analyzing Agent Interaction Quality ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") (Right), we can see that the average number of interactions increases more than tenfold, from around 0.10 to 1.8, and is higher than that observed on the localization task (1.2), demonstrating the transferability of the model’s question-asking behavior. Moreover, we observe that the trends for medium- and high-effort questions follow the same increase-then-decrease pattern as in the localization task, with the ratio of low-effort questions even higher than in the localization setting.

### 7.5 Case Study

Figure [10](https://arxiv.org/html/2511.02208v1#S7.F10 "Figure 10 ‣ 7.5 Case Study ‣ 7 Experimental Results ‣ Training Proactive and Personalized LLM Agents") illustrates an example on the SWE-Bench full task.

![Refer to caption](https://arxiv.org/html/x10.png)

Figure 10: An example from SWE-Full task, showing the original precise prompt (red), a vague prompt (green), and the agent trajectory. (Tool call parameters and results are omitted for brevity.) We see the agent make multiple attempts to reproduce the issue, but fail due to the user’s ambiguous prompt. The agent then asks a question to address the blockers, which is judged as low-effort and follows user preferences. It then understands the issue and implements the correct fix. See Figure 12 for full trajectory.

## 8 Conclusion

Effective human–agent interaction is essential for deploying LLM agents in real-world applications, but has remained underexplored compared to task-solving capabilities. This work demonstrates that agents must be optimized not only for productivity but also for proactivity and personalization to achieve satisfying user experiences. We introduce UserVille, an interactive environment that simulates users with vague queries and different preferences, and PPP, a multi-objective reinforcement learning approach that jointly optimizes all three interaction dimensions. Our experiments show that PPP-trained agents significantly outperform strong baselines, learn to interact strategically with users, and generalize robustly to unseen preferences and tasks. Although we focus on software engineering and research tasks, our environment generation framework is generalizable to other domains. Future work could incorporate real human feedback, explore additional interaction objectives, and scale to more diverse task types. We believe that optimizing agents for user-centered interaction, not just task completion, represents a critical step toward building LLM agents that are practical, considerate, and truly useful in real-world deployment.

### Limitations

Our work has several limitations. First, user simulators are LLM-based rather than real humans; validation with actual user studies would strengthen our findings. Second, our 20 user preferences are manually designed; future work could learn preferences from real interaction data.

### Ethical Considerations

Optimizing agents for personalized interaction raises ethical concerns. Agents must avoid manipulative behavior and maintain transparency in how they adapt to users. Collecting and modeling user preferences involves privacy considerations requiring secure data practices and user control. Over-optimization for efficiency could reduce user agency or create over-reliance; maintaining human oversight is essential. Finally, agents should generalize fairly across diverse populations; real-world deployment requires careful testing to avoid biases against certain user groups or communication styles.

## References

[^1]: Valerie Chen, Ameet Talwalkar, Robert Brennan, and Graham Neubig. 2025a.Code with me or for me? how increasing ai automation transforms developer workflows.*ArXiv*, abs/2507.08149.

[^2]: Zhaoling Chen, Xiangru Tang, Gangda Deng, Fang Wu, Jialong Wu, Zhiwei Jiang, Viktor Prasanna, Arman Cohan, and Xingyao Wang. 2025b.Locagent: Graph-guided llm agents for code localization.In *Annual Meeting of the Association for Computational Linguistics*.

[^3]: Zijian Chen, Xueguang Ma, Shengyao Zhuang, Ping Nie, Kai Zou, Andrew Liu, Joshua Green, Kshama Patel, Ruoxi Meng, Mingyi Su, Sahel Sharifymoghaddam, Yanxi Li, Haoran Hong, Xinyu Shi, Xuye Liu, Nandan Thakur, Crystina Zhang, Luyu Gao, Wenhu Chen, and Jimmy Lin. 2025c.Browsecomp-plus: A more fair and transparent evaluation benchmark of deep-research agent.*ArXiv*, abs/2508.06600.

[^4]: DeepSeek-AI, Daya Guo, Dejian Yang, Haowei Zhang, Jun-Mei Song, Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma, Peiyi Wang, Xiaoling Bi, Xiaokang Zhang, Xingkai Yu, Yu Wu, Z. F. Wu, Zhibin Gou, Zhihong Shao, Zhuoshu Li, Ziyi Gao, and 179 others. 2025.Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning.*ArXiv*, abs/2501.12948.

[^5]: Guanting Dong, Hangyu Mao, Kai Ma, Licheng Bao, Yifei Chen, Zhongyuan Wang, Zhongxia Chen, Jiazhen Du, Huiyang Wang, Fuzheng Zhang, Guorui Zhou, Yutao Zhu, Ji-Rong Wen, and Zhicheng Dou. 2025.Agentic reinforced policy optimization.*ArXiv*, abs/2507.19849.

[^6]: Jiazhan Feng, Shijue Huang, Xingwei Qu, Ge Zhang, Yujia Qin, Baoquan Zhong, Chengquan Jiang, Jinxin Chi, and Wanjun Zhong. 2025.Retool: Reinforcement learning for strategic tool use in llms.*ArXiv*, abs/2504.11536.

[^7]: Patrick Hemmer, Monika Westphal, Max Schemmer, Sebastian Vetter, Michael Vössing, and Gerhard Satzger. 2023.Human-ai collaboration: The effect of ai delegation on human task performance and task satisfaction.In *Proceedings of the 28th International Conference on Intelligent User Interfaces*, IUI ’23, page 453–463. ACM.

[^8]: Carlos E. Jimenez, John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, and Karthik Narasimhan. 2023.Swe-bench: Can language models resolve real-world github issues?*ArXiv*, abs/2310.06770.

[^9]: Bowen Jin, Hansi Zeng, Zhenrui Yue, Dong Wang, Hamed Zamani, and Jiawei Han. 2025.Search-r1: Training llms to reason and leverage search engines with reinforcement learning.*ArXiv*, abs/2503.09516.

[^10]: Hao Li, Chenghao Yang, An Zhang, Yang Deng, Xiang Wang, and Tat-Seng Chua. 2024.Hello again! llm-powered personalized agent for long-term dialogue.In *North American Chapter of the Association for Computational Linguistics*.

[^11]: Shuyue Stella Li, Jimin Mun, Faeze Brahman, Jonathan Ilgen, Yulia Tsvetkov, and Maarten Sap. 2025.Alfa: Aligning llms to ask good questions a case study in clinical reasoning.

[^12]: Jessy Lin and Nick Tomlin.What does it take to build a human-like user simulator?

[^13]: Fangwen Mu, Lin Shi, Song Wang, Zhuohao Yu, Binquan Zhang, ChenXue Wang, Shichao Liu, and Qing Wang. 2023.Clarifygpt: Empowering llm-based code generation with intention clarification.*ArXiv*, abs/2310.10996.

[^14]: Jiayi Pan, Xingyao Wang, Graham Neubig, Navdeep Jaitly, Heng Ji, Alane Suhr, and Yizhe Zhang. 2024.Training software engineering agents and verifiers with swe-gym.*ArXiv*, abs/2412.21139.

[^15]: Lu Peng, Dailin Li, Zhaotong Zhang, Tingru Zhang, Anqi Huang, Shaohui Yang, and Yu Hu. 2024.Human-ai collaboration: Unraveling the effects of user proficiency and ai agent capability in intelligent decision support systems.*International Journal of Industrial Ergonomics*, 103:103629.

[^16]: Cheng Qian, Zuxin Liu, Akshara Prabhakar, Zhiwei Liu, Jianguo Zhang, Haolin Chen, Heng Ji, Weiran Yao, Shelby Heinecke, Silvio Savarese, Caiming Xiong, and Huan Wang. 2025a.Userbench: An interactive gym environment for user-centric agents.*ArXiv*, abs/2507.22034.

[^17]: Cheng Qian, Zuxin Liu, Akshara Prabhakar, Jielin Qiu, Zhiwei Liu, Haolin Chen, Shirley Kokane, Heng Ji, Weiran Yao, Shelby Heinecke, Silvio Savarese, Caiming Xiong, and Huan Wang. 2025b.Userrl: Training interactive user-centric agent via reinforcement learning.

[^18]: John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov. 2017.Proximal policy optimization algorithms.*ArXiv*, abs/1707.06347.

[^19]: Zhihong Shao, Peiyi Wang, Qihao Zhu, Runxin Xu, Jun-Mei Song, Mingchuan Zhang, Y. K. Li, Yu Wu, and Daya Guo. 2024.Deepseekmath: Pushing the limits of mathematical reasoning in open language models.*ArXiv*, abs/2402.03300.

[^20]: Pradyumna Shome, Sashreek Krishnan, and Sauvik Das. 2025.Why johnny can’t use agents: Industry aspirations vs. user realities with ai agent software.*ArXiv*, abs/2509.14528.

[^21]: Philipp Spitzer, Joshua Holstein, Patrick Hemmer, Michael Vossing, Niklas Kuhl, Dominik Martin, and Gerhard Satzger. 2024.Human delegation behavior in human-ai collaboration: The effect of contextual information.*Proceedings of the ACM on Human-Computer Interaction*, 9:1 – 28.

[^22]: Weiwei Sun, Hengyi Cai, Hongshen Chen, Pengjie Ren, Zhumin Chen, Maarten de Rijke, and Zhaochun Ren. 2023.Answering ambiguous questions via iterative prompting.In *Annual Meeting of the Association for Computational Linguistics*.

[^23]: Weiwei Sun, Miao Lu, Zhan Ling, Kang Liu, Xuesong Yao, Yiming Yang, and Jiecao Chen. 2025.Scaling long-horizon llm agent via context-folding.

[^24]: Sanidhya Vijayvargiya, Xuhui Zhou, Akhila Yerukola, Maarten Sap, and Graham Neubig. 2025.Interactive agents to overcome ambiguity in software engineering.*ArXiv*, abs/2502.13069.

[^25]: Xingyao Wang, Boxuan Li, Yufan Song, Frank F. Xu, Xiangru Tang, Mingchen Zhuge, Jiayi Pan, Yueqi Song, Bowen Li, Jaskirat Singh, Hoang H. Tran, Fuqiang Li, Ren Ma, Mingzhang Zheng, Bill Qian, Yanjun Shao, Niklas Muennighoff, Yizhe Zhang, Binyuan Hui, and 5 others. 2024.Openhands: An open platform for ai software developers as generalist agents.In *International Conference on Learning Representations*.

[^26]: Jason Wei, Zhiqing Sun, Spencer Papay, Scott McKinney, Jeffrey Han, Isa Fulford, Hyung Won Chung, Alexandre Passos, William Fedus, and Amelia Glaese. 2025.Browsecomp: A simple yet challenging benchmark for browsing agents.*ArXiv*, abs/2504.12516.

[^27]: Shirley Wu, Michel Galley, Baolin Peng, Hao Cheng, Gavin Li, Yao Dou, Weixin Cai, James Zou, Jure Leskovec, and Jianfeng Gao. 2025.Collabllm: From passive responders to active collaborators.*ArXiv*, abs/2502.00640.

[^28]: Shunyu Yao, Noah Shinn, Pedram Razavi, and Karthik Narasimhan. 2024.$\tau$ -bench: A benchmark for tool-agent-user interaction in real-world domains.*ArXiv*, abs/2406.12045.

[^29]: Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, and Yuan Cao. 2022.React: Synergizing reasoning and acting in language models.*ArXiv*, abs/2210.03629.

[^30]: Qiying Yu, Zheng Zhang, Ruofei Zhu, Yufeng Yuan, Xiaochen Zuo, Yu Yue, Tiantian Fan, Gaohong Liu, Lingjun Liu, Xin Liu, Haibin Lin, Zhiqi Lin, Bole Ma, Guangming Sheng, Yuxuan Tong, Chi Zhang, Mofan Zhang, Wang Zhang, Hang Zhu, and 16 others. 2025.Dapo: An open-source llm reinforcement learning system at scale.*ArXiv*, abs/2503.14476.

[^31]: Wenting Zhao, Xiang Ren, John Frederick Hessel, Claire Cardie, Yejin Choi, and Yuntian Deng. 2024.Wildchat: 1m chatgpt interaction logs in the wild.*ArXiv*, abs/2405.01470.

[^32]: Xuhui Zhou, Valerie Chen, Zora Zhiruo Wang, Graham Neubig, Maarten Sap, and Xingyao Wang. 2025a.Tom-swe: User mental modeling for software engineering agents.*ArXiv*, abs/2510.21903.

[^33]: Xuhui Zhou, Hyunwoo Kim, Faeze Brahman, Liwei Jiang, Hao Zhu, Ximing Lu, Frank F. Xu, Bill Yuchen Lin, Yejin Choi, Niloofar Mireshghallah, Ronan Le Bras, and Maarten Sap. 2025b.HAICOSYSTEM: An ecosystem for sandboxing safety risks in interactive AI agents.In *Second Conference on Language Modeling*.

[^34]: Yifei Zhou, Song Jiang, Yuandong Tian, Jason E. Weston, Sergey Levine, Sainbayar Sukhbaatar, and Xian Li. 2025c.Sweet-rl: Training multi-turn llm agents on collaborative reasoning tasks.*ArXiv*, abs/2503.15478.