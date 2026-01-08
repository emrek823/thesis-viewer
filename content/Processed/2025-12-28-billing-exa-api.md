---
url: https://dashboard.exa.ai/billing
title: "Billing | Exa API"
clipped: 2025-12-28 21:46
source: browser-history
---

# Billing | Exa API

> Source: [https://dashboard.exa.ai/billing](https://dashboard.exa.ai/billing)

# Get started with Exa

Continue with Google

OR

[Sign in with SSO](/sso-login)

If you are part of a team, please contact your team's administrator for an invite link.

Copied!

```
results = exa.search_and_contents (
  "latest developments in ML",
  category="papers"
)
```

```
{
    "data": {
      "requestId": "f9483e744d48bdf89bdff25f4bb3af3a",
      "autopromptString": "latest developments in ML",
      "autoDate": "2025-03-26T00:00:00.000Z",
      "resolvedSearchType": "neural",
      "results": [
        {
          "id": "https://www.news-medical.net/news/20250422/Machine-learning-unlocks-millions-of-safer-CRISPR-enzymes-for-gene-editing.aspx",
          "title": "Machine learning unlocks millions of safer CRISPR enzymes for gene editing",
          "url": "https://www.news-medical.net/news/20250422/Machine-learning-unlocks-millions-of-safer-CRISPR-enzymes-for-gene-editing.aspx",
          "publishedDate": "2025-04-23T01:24:00.000Z",
          "author": "Mass General BrighamApr 22 2025",
          "score": 0.3799804747104645,
          "text": "
 
 Genome editing has advanced at a rapid pace with promising results for treating genetic conditions-but there is always room for improvement. A new paper by investigators from Mass General Brigham published in Nature showcases the power of scalable protein engineering combined with machine learning to boost progress in the field of gene and cell therapy. In their study, authors developed a machine learning algorithm-known as PAMmla-that can predict the properties of about 64 million genome editing enzymes. The work could help reduce off-target effects and improve editing safety, enhance editing efficiency, and enable researchers to predict customized enzymes for new therapeutic targets. Their results are published in Nature. 
 "Our study is a first step in dramatically expanding our repertoire of effective and safe CRISPR-Cas9 enzymes. In our manuscript we demonstrate the utility of these PAMmla-predicted enzymes to precisely edit disease-causing sequences in primary human cells and in mice," said corresponding author Ben Kleinstiver, PhD, Kayden-Lambert MGH Research Scholar associate investigator at Massachusetts General Hospital (MGH), a founding member of the Mass General Brigham healthcare system. "Building on these findings, we are excited to have these tools utilized by the community and also apply this framework to other properties and enzymes in the genome editing repertoire." 
 CRISPR-Cas9 enzymes can be used to edit genes at locations throughout the genomes, but there are limitations to this technology. Traditional CRISPR-Cas9 enzymes can have off-target effects, cleaving or otherwise modifying DNA at unintended sites in the genome. The newly published study aims to improve this by using machine learning to better predict and tailor enzymes to hit their targets with greater specificity. The approach also offers a scalable solution-other attempts at engineering enzymes have had a lower throughput and typically yielded orders of magnitude fewer enzymes. 
 One of the key elements of utilizing CRISPR-Cas9 technologies is that the enzymes must locate and bind to a short DNA sequence called a protospacer adjacent motif (PAM). Researchers used machine learning to predict the PAMs of millions of Cas9 enzymes, identifying a set of novel engineered Cas9 enzymes that would have the best on-target activity and specificity. The researchers conducted proof-of-concept experiments in human cells and a mouse model of retinitis pigmentosa, finding that the bespoke enzymes had greater specificity. 
 
 A major outcome of this work is the creation of this PAMmla model that can now be used by researchers to predict customized enzymes that are uniquely tuned for their specific use cases. The result of this model is that we now have an enormous toolbox of safe and precise Cas9 proteins that can be utilized for a variety of research and therapeutic applications." 
 Rachel A. Silverstein, lead author, PhD candidate, NSERC postgraduate scholar and 2024 Albert J. Ryan Fellow in the Kleinstiver lab at MGH 
 
 The researchers have made a web tool to allow others to use the PAMmla model, which is available at https://pammla.streamlit.app/ 
 Source: Journal reference: Silverstein, R. A., et al. (2025). Custom CRISPR—Cas9 PAM variants via scalable engineering and machine learning.  Nature. doi.org/10.1038/s41586-025-09021-y. 
 
 
 Suggested Reading 
 
 
 
 
 Terms 
 
While we only use edited and approved content for Azthena
answers, it may on occasions provide incorrect responses.
Please confirm any data provided with the related suppliers or
authors. We do not provide medical advice, if you search for
medical information you must always consult a medical
professional before acting on any information provided.
 
 
Your questions, but not your email details will be shared with
OpenAI and retained for 30 days in accordance with their
privacy principles.
 
 
Please do not ask questions that use sensitive or confidential
information.
 
 Read the full Terms & Conditions. 
",
          "image": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Gene-620x480.jpg",
          "favicon": "https://www.news-medical.net/favicon-32x32.png"
        },
        {
          "id": "https://www.marktechpost.com/2025/04/22/llms-can-now-learn-without-labels-researchers-from-tsinghua-university-and-shanghai-ai-lab-introduce-test-time-reinforcement-learning-ttrl-to-enable-self-evolving-language-models-using-unlabeled-da/",
          "title": "LLMs Can Now Learn without Labels: Researchers from Tsinghua University and Shanghai AI Lab Introduce Test-Time Reinforcement Learning (TTRL) to Enable Self-Evolving Language Models Using Unlabeled Data",
          "url": "https://www.marktechpost.com/2025/04/22/llms-can-now-learn-without-labels-researchers-from-tsinghua-university-and-shanghai-ai-lab-introduce-test-time-reinforcement-learning-ttrl-to-enable-self-evolving-language-models-using-unlabeled-da/",
          "publishedDate": "2025-04-22T00:00:00.000Z",
          "author": "Sana Hassan",
          "score": 0.3811531364917755,
          "text": "
 Despite significant advances in reasoning capabilities through reinforcement learning (RL), most large language models (LLMs) remain fundamentally dependent on supervised data pipelines. RL frameworks such as RLHF have pushed model alignment and instruction-following performance but rely heavily on human feedback and labeled datasets. As LLMs are increasingly applied in dynamic environments—ranging from educational settings to scientific workflows—they are required to generalize beyond curated training data. 
 However, existing models often exhibit performance gaps when confronted with distribution shifts or novel reasoning tasks. While techniques like Test-Time Scaling (TTS) and Test-Time Training (TTT) have been proposed to mitigate this, the absence of reliable reward signals during inference poses a core challenge for deploying RL in unsupervised settings. 
 Test-Time Reinforcement Learning (TTRL): Leveraging Model Priors for Self-Adaptation 
 Researchers from Tsinghua University and Shanghai AI Lab introduced Test-Time Reinforcement Learning (TTRL). TTRL is a training framework that applies RL during inference, using only unlabeled test data. It leverages the intrinsic priors of pre-trained language models to estimate pseudo-rewards through majority voting across sampled outputs. 
 Instead of relying on explicit labels, TTRL constructs reward functions by aggregating multiple model-generated responses to a given query. A consensus answer, obtained via majority voting, is treated as a pseudo-label. Model responses that align with this pseudo-label are positively reinforced. This formulation transforms test-time inference into an adaptive, self-supervised learning process, allowing LLMs to improve over time without additional supervision. 
 
 
 TTRL has a two-stage approach: 
 
 Label Estimation via Majority Voting: For each prompt, the model samples multiple outputs. The most frequent prediction is treated as the estimated label. 
 Reward Assignment and Policy Optimization: A binary reward is assigned based on whether each sampled response matches the estimated label. The model is updated using gradient-based RL algorithms (e.g., PPO or GRPO) to maximize agreement with the pseudo-labels. 
 
 This approach is notable for its simplicity and compatibility with standard RL methods. The reward function, though approximate, provides sufficient learning signal when aggregated over multiple samples. Experimental setups used temperature-controlled sampling (typically temperature = 1.0), with 64 samples for voting and 16 subsampled responses for training updates. No ground-truth labels are involved at any stage. 
 
 
 Empirical Findings across Mathematical Reasoning Tasks 
 TTRL was evaluated on three mathematical benchmarks: AIME 2024, AMC, and MATH-500. The results are consistent across both smaller and larger models: 
 
 For Qwen2.5-Math-7B, performance on AIME 2024 increased from 16.7% to 43.3% (pass@1), an improvement of 159.3% without any labeled data. 
 On average, across the three benchmarks, the same model achieved a relative gain of 84.1%. 
 Notably, even a smaller model, Qwen2.5-Math-1.5B, improved from 33.0% to 80.0% on MATH-500. 
 
 These gains demonstrate that TTRL supports model improvement even in the absence of supervised training signals. Moreover, TTRL often outperforms the upper bound implied by its own training signal—i.e., the accuracy of the majority-voted predictions. This suggests a self-reinforcing learning loop that can extract richer supervision from noisy consensus signals. 
 Additional analyses showed that TTRL generalizes beyond the dataset it was applied to. When trained on one benchmark and evaluated on others, performance improvements persisted. This cross-task transfer indicates that TTRL does not lead to narrow overfitting but supports broader generalization. 
 
 
 Conclusion: Toward Self-Adaptive and Label-Free Learning 
 TTRL represents a novel shift in how reinforcement learning can be applied to LLMs in real-world settings. By reusing the model's own generations as a proxy for supervision, it removes the need for expensive human annotations while enabling continual adaptation. The approach scales naturally with model size, is compatible with different RL algorithms, and shows promising robustness across tasks of varying difficulty. 
 While this study focuses on mathematical reasoning, the underlying ideas—self-estimated supervision, test-time adaptation, and reinforcement learning without labels—may generalize to other domains. As language models increasingly encounter tasks beyond their pre-training distribution, frameworks like TTRL offer a scalable path forward. 
 Further exploration is needed to understand the theoretical convergence properties of TTRL and to evaluate its applicability in interactive or multi-agent scenarios. Nonetheless, TTRL provides a technically sound and computationally efficient foundation for enabling LLMs to evolve continuously from their own outputs. 
 
 Check out the Paper and GitHub Page. Also, don't forget to follow us on  Twitter  and join our  Telegram Channel  and  LinkedIn Gr oup. Don't Forget to join our  90k+ ML SubReddit. 
 🔥 [Register Now] miniCON Virtual Conference on AGENTIC AI: FREE REGISTRATION + Certificate of Attendance + 4 Hour Short Event (May 21, 9 am- 1 pm PST) + Hands on Workshop 
 Sana Hassan Sana Hassan, a consulting intern at Marktechpost and dual-degree student at IIT Madras, is passionate about applying technology and AI to address real-world challenges. With a keen interest in solving practical problems, he brings a fresh perspective to the intersection of AI and real-life solutions. 
 
",
          "image": "http://www.marktechpost.com/wp-content/uploads/2025/04/Screenshot-2025-04-22-at-10.37.35 PM.png",
          "favicon": "https://www.marktechpost.com/wp-content/uploads/2022/04/cropped-Favicon-512-x-512-1-1-32x32.png"
        },
      ]
    }
  }
```