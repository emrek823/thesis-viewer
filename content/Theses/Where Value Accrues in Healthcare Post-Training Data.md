---
source: notion
synced: 2026-05-11 10:34
status: Drafts
notion_id: 351c0b14-1fd6-81c8-95cb-fabb31b77f4a
---

# Where Value Accrues in Healthcare Post-Training Data

<empty-block/>
*Selling raw healthcare data to frontier labs is becoming a commodity loser's game. Value accrues to whoever owns a workflow surface that generates messy real-world traces by default, has the domain expertise to convert that exhaust, and prices against model improvement rather than labor hours.*
## Overview
Post-training has matured. Frontier model improvement isn't coming from more Q&A pairs — it's coming from <span color="blue" underline="true">[complex environments](https://techcrunch.com/2025/09/21/silicon-valley-bets-big-on-environments-to-train-ai-agents/)</span> where models attempt long-running tasks and are graded on the results. Sid Potdar's recent <span color="blue" underline="true">[Data Labeling and Other Euphemisms](https://www.linkedin.com/pulse/data-labeling-other-euphemisms-sid-potdar-txdsc/)</span> lays out the canonical typology: post-training data falls into three buckets, and the market is migrating toward the third.
Healthcare is where this migration matters most, and where it's hardest. The category-defining environments aren't customer-service transcripts or coding repos. They're encounters, prior auths, denials, and DME orders — workflows that produce irreducibly messy traces and require domain expertise no horizontal labeler can fake.
The image below maps Potdar's typology to healthcare:
<table header-row="true" header-column="false">
<tr>
<td>Bucket</td>
<td>What it is</td>
<td>Healthcare example</td>
</tr>
<tr>
<td>1</td>
<td>Annotations on live model output</td>
<td>Clinician edits to a <span color="blue" underline="true">[Hyperscribe](https://github.com/canvas-medical/hyperscribe)</span> draft note; biller accept/reject on coding suggestions</td>
</tr>
<tr>
<td>2</td>
<td>From-scratch collections & synthetic environments</td>
<td><span color="blue" underline="true">[HealthAdminBench](https://som-shahlab.github.io/health-admin-bench-website/)</span> — 135 prior-auth / DME / appeals tasks in portal clones, graded by 1,177 deterministic state checks + 521 LLM judges</td>
</tr>
<tr>
<td>3</td>
<td>Raw real-world workflow exhaust</td>
<td><span color="blue" underline="true">[Canvas Medical](https://www.canvasmedical.com/)</span> — encounter transcripts, chart entries, claim submissions, and plugin-mediated workflow traces inside a live specialty EMR</td>
</tr>
</table>
Most healthcare AI training data today comes from buckets 1 and 2. Bucket 3 is where the most defensible positions live. There are two paths to get there: (1) start there by owning the workflow product yourself (<span color="blue" underline="true">[Canvas Medical](https://www.canvasmedical.com/)</span>), or (2) use a bucket-2 wedge to earn deployed access inside an incumbent's workflow (<span color="blue" underline="true">[Kinetic Systems](https://www.kineticsystems.ai/)</span> is building this play on top of HealthAdminBench — Wornow et al. published the benchmark and spun out the company to sell computer-use agents into payers, providers, and RCM vendors who run the real prior-auth / DME / appeals workflows). The synthetic environment is the credibility wedge; once deployed inside an incumbent, Kinetic gets real workflow data and graduates to bucket 3.
The investment question is which path a company is on, and how durable the path actually is.
---
## What This Means Going Forward
Going forward, we believe:
- **Bucket 1 is fragile in healthcare even more than horizontal AI.** Edit-rate on a Hyperscribe draft decays as the underlying model improves — the training signal evaporates exactly when you'd want to monetize it. Clinician annotation labor is \~\$200/hr loaded, breaking the cost structure that makes Scale-style labeling work for general data. And Epic's free native ambient (shipping 2026) collapses the moat for any vendor whose only asset is "we have a scribe with edit telemetry." Bucket-1 vendors don't compound; the workflow + retrieval design does.
- **Bucket 2 is the wedge AI-native challengers use to graduate into bucket 3.** <span color="blue" underline="true">[HealthAdminBench](https://som-shahlab.github.io/health-admin-bench-website/)</span> is the artifact — 135 tasks across synthetic EHR, payer portal, and fax environments, graded by 1,177 deterministic state checks plus 521 LLM judges. <span color="blue" underline="true">[Kinetic Systems](https://www.kineticsystems.ai/)</span> is the company. The synthetic environment isn't the moat; it's the *capability proof + sales asset + eval anchor* that gets an AI-native challenger into an incumbent's procurement process when they don't yet have real data access. Once deployed, the company graduates to bucket 3 — real submissions, real denials, real workflow exhaust — inside the incumbent. Healthcare's procurement structure is what makes this path viable; Cotiviti, Optum CES, and Veeva all built billion-dollar businesses sitting inside someone else's workflow. The diligence question on a bucket-2 play is **how credible the path from synthetic benchmark to deployed bucket-3 access actually is** — design partner quality, switching cost once embedded, and whether the incumbent will eventually run the play in-house.
- **Bucket 3 wins in healthcare for reasons that don't generalize to horizontal AI.** Real prior auths fail in 200 ways no synthetic portal captures — the <span color="blue" underline="true">[best computer-use agent on HealthAdminBench scores 36.3%](https://arxiv.org/abs/2604.09937)</span> not because the model is dumb, but because real payer behavior has a long tail synthetic environments can't reproduce. The domain expertise to convert raw workflow traces into usable training data is co-located with the workflow owner; Canvas knows what makes a plugin-mediated note correction or a claim submission useful as RL signal, and a horizontal labeler can't hire its way there fast enough. And the regulatory permissioning compounds — HIPAA-compliant pipes, BAAs, OMOP vocabulary extensions for non-NDC drugs, FDA data-partner status all take years to qualify and multiply in value as they stack. The companies that own bucket 3 by default own a moat horizontal AI doesn't have an analog for.
This has four direct implications for how healthcare AI startups should think about strategy:
- **Product — start with a workflow, not a dataset.** The data has to be a by-product of something operators actually use. Canvas Medical built an EMR and got encounter exhaust as a by-product. SmarterDx built a CDI tool and got coding signal as a by-product. Founders who try to "collect data first, find use later" lose to founders who picked a workflow and treat the exhaust as the compounding asset.
- **GTM — pick the wedge that fits, but always tie it back to a real workflow.** All three buckets are viable, and the failure mode is picking a bucket strategy without a workflow target. Bucket 1 needs your own deployed product to harvest edits from. Bucket 2 needs an incumbent workflow to graduate into — the benchmark is a credibility asset, not the destination. Bucket 3 needs the workflow product itself, hardest to build but most defensible. Competing with Scale or Surge on horizontal labeling is the wrong game — different economics, no path to compounding moat in healthcare.
- **Revenue model — price against yield, not labor.** Healthcare has a structural advantage horizontal AI doesn't: operational outcomes are measurable. Denial avoided, code accepted, prior auth approved. <span color="blue" underline="true">[SmarterDx](https://www.smarterdx.com)</span> prices CDI at 11.6% take of found revenue (\~\$822K ACV anchored to \~\$7M of uplift per hospital). Iodine generates \$1B/yr in additional hospital revenue at \~10% take rate. Labelers can't match that pricing because they don't sit on the operational outcome. The companies that bundle training data + eval + model improvement into outcome-priced contracts capture multiples no horizontal vendor can reach.
- **Defensibility against big labs — the lab playbook won't work in healthcare.** Labs structurally avoid single-vendor concentration (the "another NVIDIA" problem Potdar names) and can't replicate workflow + regulatory permissioning + domain depth at scale. They will partner, license, and acquire — but the durable position is the workflow company they're partnering *with*, not the lab itself. The vertical app + workflow surface is the only structurally defensible position. Labs need the access; vertical companies own the surface that grants it.
---
## Sources
**Primary frameworks:**
- <span color="blue" underline="true">[Sid Potdar — Data Labeling and Other Euphemisms (LinkedIn, 2026)](https://www.linkedin.com/pulse/data-labeling-other-euphemisms-sid-potdar-txdsc/)</span>
- <span color="blue" underline="true">[Silicon Valley Bets Big on Environments to Train AI Agents (TechCrunch, Sept 2025)](https://techcrunch.com/2025/09/21/silicon-valley-bets-big-on-environments-to-train-ai-agents/)</span>
- <span color="blue" underline="true">[Mechanize — Cheap RL Tasks Will Waste Compute](https://www.mechanize.work/blog/cheap-rl-tasks-will-waste-compute/)</span>
**Healthcare bucket-2 evidence:**
- <span color="blue" underline="true">[HealthAdminBench: Evaluating Computer-Use Agents on Healthcare Administration Tasks (Bedi, Welch, Steinberg, Wornow et al., 2026)](https://arxiv.org/abs/2604.09937)</span>
- <span color="blue" underline="true">[HealthAdminBench leaderboard + dataset (Stanford)](https://som-shahlab.github.io/health-admin-bench-website/)</span>
- <span color="blue" underline="true">[MedHELM (Stanford CRFM)](https://crfm.stanford.edu/helm/medhelm/)</span>
- <span color="blue" underline="true">[MedAgentBench (Jiang et al., 2025)](https://arxiv.org/abs/2511.13703)</span>
**Healthcare bucket-3 examples:**
- <span color="blue" underline="true">[Canvas Medical — open API specialty EMR](https://www.canvasmedical.com/)</span>
- <span color="blue" underline="true">[Hyperscribe (Canvas Medical, open-source ambient scribe)](https://github.com/canvas-medical/hyperscribe)</span>
- <span color="blue" underline="true">[Datavant — Aetion acquisition (\$400M, May 2025)](https://www.aetion.com/news/datavant-to-acquire-aetion)</span>
- <span color="blue" underline="true">[Truveta Language Model — 130M patients](https://www.truveta.com/blog/news/truveta-language-model/)</span>
- <span color="blue" underline="true">[Komodo Health — 325M patients, \$3.3B valuation](https://www.komodohealth.com)</span>
**Conversations:**
- Canvas, Michael Wornow 
*Last updated: April 2026*
