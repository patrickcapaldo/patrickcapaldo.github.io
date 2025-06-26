---
layout: distill
title: Universal Measuring Sticks
description: How distances are measured in the vast, unreachable space around us.
tags: astronomy
categories: tutorials
date: 2022-05-17
featured: false
thumbnail: assets/img/tutorials/universal_measuring_sticks/thumb_cepheid.jpg

authors:
  - name: Patrick Capaldo
    url: "https://patrickcapaldo.github.io/"
    affiliations:
      name: None

bibliography: 2022-05-17-tutorial-universal-measuring-sticks.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Cepheid Variables
    subsections:
      - name: Apparent Brightness vs. Absolute Brightness
      - name: Period-Luminosity Relationship
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Type 1A Supernovae

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
        {% include figure.html path="assets/img/tutorials/universal_measuring_sticks/thumb_cepheid.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Cepheid variable, RS Pupis, one of the brightest in the Milky Way galaxy<d-footnote>https://simple.wikipedia.org/wiki/Cepheid_variable</d-footnote>.
</div>

## Cepheid Variables

### Apparent Brightness vs. Absolute Brightness
If all stars in the universe were the same, then could easily deduce their distance from Earth similarly to how we humans can gauge distances to a common candle - we know how bright it should be near us, so anything less than that must be due to its distance away from us. The brightness of a star from a set distance (10 parsecs or 32.6 light-years) is known as its absolute brightness<d-footnote>Howell, E. (2017) Brightest Stars: Luminosity & Magnitude Oct 12, 2017. Available at: https://www.space.com/21640-star-luminosity-and-magnitude.html (Accessed: Jan 15, 2022).
</d-footnote>; conversely, how bright the star is to us from Earth's perspective (i.e., possibly more or less than 10 parsecs) is its apparent brightness. We always know a star's apparent brightness by simply observing it, yet its absolute brightness is more difficult to deduce - once both are known, the distance to the star can be found.

### Period-Luminosity Relationship
Some stars, known as Cepheid variables, exhibit regular oscillations in their absolute brightness - the period of which reveals the star's absolute brightness. This phenomenon was discovered between 1900-1910 by Henrietta Leavitt, an American astronomer (CSIRO, 2022) (Figure 1). By finding such stars, the distances to them, and hence the galaxy they may reside within, can also be deduced.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/universal_measuring_sticks/period_luminosity.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Period-luminosity relationship of Cepheid variables<d-footnote>CSIRO (2022) Cepheid Variable Stars & Distance Determination Available at: https://www.atnf.csiro.au/outreach/education/senior/astrophysics/variable_cepheids.html (Accessed: Jan 15, 2022).</d-footnote>.
</div>

## Type 1A Supernovae
Somewhat similarly, particular types of supernova, known as Type IA Supernovae (SNIa), exhibit time-related relationships with the decay of their brightness which can then be used to determine their absolute brightness. SNIa are dissimilar to traditional supernovae in that they do not occur due to the collapse of a massive star. Instead, SNIa are believed to occur as a result of a white dwarf star stealing plasma from a co-orbiting star within its binary system until the white dwarf crosses the Chandrasekhar limit (Cosmos, 2022). The Chandrasekhar limit is definted as the mass of a star that is 1.44 times that of our Sun - a limit, which if exceeded, will cause a star to collapse (including existing white dwarfs)<d-footnote>Encyclopedia Britannica (2021) Subrahmanyan Chandrasekhar Dec 22, 2021. Available at: https://www.britannica.com/biography/Subrahmanyan-Chandrasekhar (Accessed: Jan 15, 2022).</d-footnote>. SNIa are the brightest type of supernovae - able to outshine their entire host galaxy during their short existence (Figure 2). The decay of the SNIa's brightness is measured over a period of 15 days from the maximuim light in the B band (445 nm wavelength midpoint).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/universal_measuring_sticks/snia.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: An SNIa (SN 1994D) in a spiral galaxy about 55 million light-years from the Solar System in the Virgo constellation (NGC 4526)<d-footnote>Cosmos - The SAO Encyclopedia of Astronomy (2022) Type Ia Supernova Available at: https://astronomy.swin.edu.au/cosmos/t/Type+Ia+Supernova (Accessed: Jan 15, 2022).</d-footnote>.
</div>
