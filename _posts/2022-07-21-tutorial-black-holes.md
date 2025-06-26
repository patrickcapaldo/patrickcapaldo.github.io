---
layout: distill
title: Black Holes, Quasars, and Blazars
description: Some of the simplest and most powerful objects in the cosmos.
tags: cosmology
categories: tutorials
date: 2022-07-21
featured: true
thumbnail: assets/img/tutorials/black_holes_quasars_blazars/thumb_blazar.jpg

authors:
  - name: Patrick Capaldo
    url: "https://patrickcapaldo.github.io/"
    affiliations:
      name: None

bibliography: 2022-07-21-tutorial-black-holes.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Mass
    subsections:
      - name: Quasars
      - name: Blazars
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Spin
  - name: Charge
  - name: Spin vs. Charge

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }

---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/black_holes_quasars_blazars/thumb_blazar.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Blazar<d-footnote>https://www.wired.com/story/whats-a-blazar-a-galactic-bakery-for-cosmic-rays/</d-footnote>.
</div>

Black holes are some of the simplest objects in the universe with only three properties: mass, spin, and charge. Mass generally divides the very small (stellar) from the very large (supermassive), spin divides the rotating (likely ubiquitous) from the non-rotating (likely purely hypothetical), and charge divides those that have accreted more protons (positive) from those that have accreted more electrons (negative). Quasars and blazars result from black holes depending on their mass and level of activity.

## Mass
It is generally believed that there are two main types of black holes when categorised by their mass: stellar and supermassive. Stellar black holes are remnants of large stars (3-10 solar masses) that go supernova and then proceed to collapse into a singularity under their own weight. Whilst stellar black holes are difficult to detect (due to them not emitting light and occassionally forming visible accretion disks), there is an estimated ten million to one billion of them in the Milky Way (compared to the estimation of about 100 billion stars in the Milky Way) <d-footnote>Bolles, D., 2022. Black Holes | Science Mission Directorate. [online] Science.nasa.gov. Available at: [Accessed 20 July 2022].
</d-footnote>.

Supermassive blackholes have masses ranging from millions to billions of solar masses and they exist in the centre of the vast majortiy of galaxies <d-footnote>Bolles, D., 2022. Black Holes | Science Mission Directorate. [online] Science.nasa.gov. Available at: [Accessed 20 July 2022].
</d-footnote>. The method of their formation is not yet known perfectly. Some theories suggest that supermassive black holes are seeded from supermassive stars which become extremely large stellar black holes, which then proceeds to grow as it feeds on an abundance of primordial galactical gas. Other theories suggest that they form as a result of many stellar black holes combining or that some black holes exhibit faster rates of growth than others. The Event Horizon Telescope (a network of telescopes spread over the Earth's surface) has successfully "photographed" two supermassive blackholes: the first being that within the galaxy Messier 81 (M81) which is active and readily observable, the second being that within our own galaxy, the Milky Way, known as Sagittarius A* (pronounded "Sagittarius A star") (Figures 1 and 2).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/black_holes_quasars_blazars/m87_Sastar.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Images from the Event Horizont Telescope of the black holes within galaxies Messier 81 (left) and the Milky Way (Sagittarius A*) (right)<d-footnote>Boumann, K., Akiyama, K., Gómez, J.L., 2022. Spot the difference: Imaging Sagittarius A* and M87*. Available at: [Accessed 21 July 2022].</d-footnote>.
</div>

### Quasars

A quasar (short for quasi-stellar radio source) is a term used to describe active galactic nuclei - that is, supermassive black holes at the centre of galaxies that are feeding on matter and therefore emitting a significant amount of radiation. These luminous structures include an accretion disk emitting visible and ultraviolet light, jets of radio light all the way through to X-ray light are aligned with the axis of rotation of the black hole, and the gas and dust surrounding the black hole shine in infrared light (Figure 2)<d-footnote>Young, M., 2021. What Is a Quasar?. [online] Sky & Telescope. Available at: [Accessed 20 July 2022].</d-footnote>. The jet of a quasar also contains matter such as protons, electrons, and neutrinos (uncharged and very low mass particles) which are accelerated to near luminal velocities from magnetic fields concentrated on the poles of the host black hole.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/black_holes_quasars_blazars/quasar.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: The structure of a quasar<d-footnote>Antonucci, R., 2022. The glowing dusty heart of a hidden quasar. Nature 602, 390-391 (2022). doi: https://doi.org/10.1038/d41586-022-00380-4</d-footnote>.
</div>

### Blazars

A blazar is simply a quasar that happens to have its jets pointed towards Earth (Figure 3). Whilst quasars can still be slightly difficult to observe, blazars are much easier to identify as they are some of the most luminous objects in the universe due to their special orientation. As aforementioned, the jets of active galactic nuclei also contain matter such as electrons, protons, and neutrinos moving at near luminal velocities. When considering a blazar, these particles are incident on the Earth, and some experiments such as the IceCube Neutrino Observatory in Antarctica are designed to detect the incident neutrinos from blazars.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/black_holes_quasars_blazars/quasar_vs_blazar.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3: Comparison of active galactic nuclei that point their jets away from Earth (quasar) (left) or towards the Earth (blazar) (right)<d-footnote>Carlson, E., 2018. Blazars explained. [online] Astronomy.com. Available at: [Accessed 20 July 2022].</d-footnote>.
</div>

## Spin

Black holes form by the collapse of matter to a singularity, and since almost all gravitationally bound objects exhibit some angular momentum, it is highly likely that a black hole will also exhibit angular momentum. Furthermore, since black holes form from objects that were once much bigger (e.g., large stars), their rate of rotation also increases as the radius of the object decreases before the black hole is formed (in the same way that an ice skaters rate of rotation increases as they pull their arms towards their body - conservation of angular momentum). Due to this, black holes can spin at rates approaching the speed of light. For example, the black hole Cygnus X-1 (in constellation Cygnus) was measured to have a rate of rotation of about 800 times per second, and with a radius of only 44km<d-footnote>Today's Science. 2022. Cygnus X-1 mass and spin determined. [online] Available at: [Accessed 21 July 2022].</d-footnote> would have points on its event horizon moving at about 74% the speed of light.

In such conditions, the effects of frame dragging - when a massive body (which naturally distorts the fabric of spacetime as General Relativity states) moves through or rotates within spacetime, causing the fabric to be dragged with the object. In 2012 and 2022, the Italian Space Agency launched the Laser Relativity Satellite (LARES) 1 and 2, respectively, with the intention of measuring frame dragging caused by Earth.

## Charge

As mentioned at the start of this page, black holes can become charged by accreting more positively charged matter than negatively charged matter, or vice versa. However, charged black holes are unlikely to occur in nature as once the black hole becomes slightly positively or negatively charged, it will more strongly attract matter of the opposite charge, accrete it, and become more neutral. Thus, neutrally charged black holes are expected to be much more common than charged black holes.

## Spin vs. Charge

A summary of the types of black holes according to their spin and charge properties is hown in the table below.

|              | Not Charged | Charged            |
|--------------|-------------|--------------------|
| Not Rotating | Swarzchild  | Reissner–Nordström |
| Rotating     | Kerr        | Kerr–Newman        |