---
layout: distill
title: Cherenkov Radiation
description: Linking supersonic booms to glowing nuclear facilities.
tags: nuclear-physics
categories: tutorials
date: 2022-07-20
featured: false
thumbnail: assets/img/tutorials/cherenkov_radiation/thumb_cherenkov.png

authors:
  - name: Patrick Capaldo
    url: "https://patrickcap.github.io/"
    affiliations:
      name: None

bibliography: 2022-07-20-cherenkov-radiation.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Physics
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Example

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
        {% include figure.html path="assets/img/tutorials/cherenkov_radiation/thumb_cherenkov.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visible Cherenkov radiation inside the Advanced Test Reactor at Idaho National Laboratory.<d-footnote>https://www.energy.gov/ne/articles/cherenkov-radiation-explained</d-footnote>.
</div>

Similarly to the "boom" heard as an aircraft moves at supersonic speeds through air, Cherenkov radiation occurs due to charged paricles moving at, not supersonic, but superluminal (faster than the speed of light) speeds through a dielectric (poor electrical insulator, can be polarised electrically) medium.

## Physics
Firstly, we note that the universal speed limit set by light is strictly true of light moving through a vacuum, however, within a medium it is entirely possible for matter to travel faster than light. As the charged particle moves through the dielectric medium, it excites the electrons in the nearby particles of that medium. When those electrons of nearby medium particles return to their ground state, they emit a photon wavefront in all directions. If the particle is moving through the medium faster than the speed of light in that medium, then these wavefronts will concentrate into a conical shape. Many particles doing this at any given time will give the appearance of a "glow" from their source within the medium. This is analagous to the sonic boom produced by something moving through air at supersonic speeds, as shown in Figure 1.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/cherenkov_radiation/sboom.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Sonic boom produced by a supersonic object in air<d-footnote>Courses.lumenlearning.com. 2022. 17.8 Shock Waves | University Physics Volume 1. [online] Available at: [Accessed 16 July 2022].</d-footnote>.
</div>

## Example

The most ubiquitous example of Cherenkov radiation is that as a result of operational nuclear reactors housed within an open pool of liquid water. In such cases, high velocity electrons are released as products of nuclear fission which can move faster than the speed of light in water (0.75*c). Escaping the confides of the reactor, these electrons interact with the electrons of the water molecules to produce optical light (bluish in colour) - refer to Figure 2.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/cherenkov_radiation/reactor.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: Cherenkov radiation due to electrons moving through water within an open pool nuclear reactor<d-footnote>Nature.com. 2019. How a particle racing through a vacuum leaves a trail of blue light. [online] Available at: [Accessed 16 July 2022].</d-footnote>.
</div>