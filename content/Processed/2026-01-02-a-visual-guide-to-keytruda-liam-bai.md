---
url: https://t.co/XjVh9pmvQa
title: "A visual guide to Keytruda | Liam Bai"
clipped: 2026-01-02 15:14
source: browser-history
---

# A visual guide to Keytruda | Liam Bai

> Source: [https://t.co/XjVh9pmvQa](https://t.co/XjVh9pmvQa)

Rarely in the history of medicine has a single drug created a seismic shift as profound as Keytruda, the cancer drug developed by Merck. Since its approval in 2014, Keytruda has rewritten the survival statistic of over 15 cancer types and become the best-selling drug in the world, reaching $30 billion in sales last year alone.

Keytruda's story is a circuitous one of setbacks and breakthroughs, serendipity and resilience. You can read about it in this [excellent article](https://www.forbes.com/sites/davidshaywitz/2017/07/26/the-startling-history-behind-mercks-new-cancer-blockbuster/). In this blog post, I'll focus on the science of how it works, grounded in visualizations of the key molecular players. My goal is to share, through this example, a sense of wonder at the intricate inner structures of life – and how extraordinary it is that we’ve learned to influence them.

## Checks & balances in our immune system

[T cells](https://en.wikipedia.org/wiki/T_cell) detect and destroy cancer cells. They are tightly regulated to prevent misdirected attacks on healthy cells. For example, **PD-1** (programmed cell death protein 1) is a protein on the surface of T cells that acts like an "off-switch". When PD-1 binds to its partner protein, **PD-L1** (programmed death-ligand 1), it signals the T cell to halt its attack.

Loading PD-1/PD-L1 complex...

Here's a close-up of PD-L1 binding PD-1. Try the toggles for a few ways of visualizing the interface interactions. Notice how the two proteins fit together: molecular recognition is governed by shape complementarity and hydrogen bonding at the interface.

Above are just the extracellular portions of PD-1 and PD-L1. Both are transmembrane proteins anchored in cell membranes, with flexible tails extending into the cell's interior.

![](/static/PD1_PDL1_with_membranes-b8ce6a6487ef9c462eefa79d17a2771e.png)

PD-1 binding to PD-L1. Grey vertical regions represent the cell membranes.
Adapted from
<https://pdb101.rcsb.org/motm/204>.

Though these disordered tails elude our experimental methods of structure determination, we can guess at their structure using computational tools. Here's the [AlphaFold2 prediction](https://alphafold.ebi.ac.uk/entry/Q15116) of the full PD-1 sequence, colored by confidence (pLDDT). Use the toggles to overlay the experimental structure of the extracellular domain.

Loading AlphaFold PD-1 structure...

The extracellular binding domain and the [transmembrane helix](https://en.wikipedia.org/wiki/Transmembrane_domain) are predicted with high confidence, while the intracellular tail appears disordered with low confidence. When PD-L1 binds to PD-1, PD-1's intracellular tail triggers a cascade of events leading to the T cell's inactivation .

## Exploit & counter

It is perhaps unsurprising that **a common strategy cancer cells use to evade our immune system is by overexpressing PD-L1**. By doing so, they engage PD-1 on T cells and effectively disarm them.

![](/static/tumor_tcell_interactions-ea73f04b9427ea9dda1612de46af3835.jpg)

Left: A tumor cell expressing PD-L1 can activate PD-1 and evade the T cell's
attack. Right: By blocking PD-L1 or PD-1 with another molecule, we can disrupt
the tumor's evasion strategy. Keytruda blocks PD-1 (shown as the red
triangle). Diagram from
<https://visualsonline.cancer.gov/details.cfm?imageid=10396>.

If we can block cancer cells from activating PD-1, then we can unleash the T cell's ability to kill the cancer cells. That's the key insight behind Keytruda.

## Keytruda: the PD-1 blocker

Keytruda, also known as **pembrolizumab**, is an antibody that also binds to PD-1.

Loading PD-1/Keytruda complex...

Compared to PD-L1, Keytruda binds a shifted surface of PD-1 and therefore does not trigger any downstream signaling. **Crucially, with Keytruda bound, PD-1 is blocked from interacting with PD-L1.**

Here's a comparison of the binding poses of PD-L1 vs. Keytruda. Use the toggles to switch between the two.

Loading PD-L1 vs. Keytruda binding comparison...

The Keytruda structure above shows only the **variable fragment**, the antigen-binding tip of the Y-shaped antibody. This region is called "variable" because its sequence differs between antibodies, which in this case enables Keytruda to specifically recognize PD-1. The rest of the antibody is the **constant region**, largely identical across antibodies of a given class.

Loading full Keytruda structure...

Because the antibody has two arms, each Keytruda molecule can, in principle, bind to two PD-1 molecules.

## From molecule to market

With the molecular mechanisms in mind, we can better understand how Keytruda reshaped cancer therapy and continues to drive key trends in the pharma industry.

1. Keytruda is the defining success story in the emerging field of **immuno-oncology**, leveraging the power of our immune system to attack cancer.
2. Keytruda pioneered **biomarker-driven clinical development**, accelerating the industry’s shift toward targeted therapies. During development, Merck focused on patients with high levels of PD-L1 expression – evidence of the tumor exploiting the PD-1 pathway. Although this narrowed the set of eligible patients, it delivered ground-breaking efficacy.
3. Keytruda drove major regulatory innovation as the first **tissue-agnostic** cancer approval. The FDA authorized Keytruda *regardless of cancer type*, a significant departure from the traditional model where approvals are limited to, say, only melanoma or lung cancer .

As successful as Keytruda is, cancer's story is far from simple. Not all patients respond to Keytruda. Some tumors lack meaningful T cell infiltration and are often called "immunologically cold," while others deploy alternative evasion strategies beyond PD-L1. When effective, Keytruda isn’t without cost: unleashing T cells risks collateral damage to healthy tissues – the very sort of misdirected attack the PD-1 pathway evolved to prevent. Tinkering with the delicate balance of biology is never easy.

In the end, so much of life (and life-saving medicines!) comes down to these molecular dances of shape fitting. Messy, elegant, beautiful – like the dance between PD-1 and PD-L1, evolved over millions of years, hijacked by cancer, and now outmaneuvered by human ingenuity.

To help me get better at writing, please consider filling out this feedback form.

▼

## Acknowledgements

Thank you to Ameya Harmalkar and Samuel Maffa for reading a draft and giving feedback.

1. This is a misnomer because when PD-1 was first discovered, it was thought to cause T cell death. Later experiments revealed more nuanced behavior that inhibits T cell activity instead of causing death.
2. For more on how this works, check out [ITIM (immunoreceptor tyrosine-based inhibitory motif)](https://en.wikipedia.org/wiki/Immunoreceptor_tyrosine-based_inhibitory_motif), the key motif in the intracellular tail of PD-1 that triggers the downstream signaling.
3. The generic name follows WHO naming conventions: "-mab" indicates a monoclonal antibody, "-zu-" means humanized (derived from human sequences), and "-li-" indicates an immunomodulator.
4. The tissue-agnostic approval of Keytruda was based on another biomarker called [MSI-H/dMMR](https://www.mskcc.org/cancer-care/diagnosis-treatment/cancer-treatments/immunotherapy/mmrd-msi-h-and-tmb-h-tumors). Tumors with these genetic markers are more visible to the immune system and therefore more responsive to Keytruda.

---

---