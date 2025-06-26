---
layout: distill
title: Simple Pendulum Variations
description: Observing the effects of parameters on the swing of a simple pendulum.
tags: dynamics
categories: tutorials
date: 2021-04-24
featured: false

authors:
  - name: Patrick Capaldo
    url: "https://patrickcapaldo.github.io/"
    affiliations:
      name: None

bibliography: 2021-04-24-simple-pendulum-variations.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Introduction
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Mass
  - name: Length
  - name: Gravity

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

Find below an analysis of a parameter variations on the motion of a simple pendulum.

## Introduction

The motion of the simple pendulum is defined by Equation \eqref{eq:1}. This equation was derived on [this page](https://patrickcapaldo.github.io/blog/2021/simple-pendulum-derivation/).

\begin{equation}
\label{eq:1}
\theta (t) = {\theta}_0 \bullet cos \left( \sqrt{g/L} \bullet t \right) , \omega = \sqrt{g/L}
\end{equation}

## Mass

Note that the equation in Figure 1 does not contain the mass of the bob - implying that the motion of the simple pendulum does not depend on the bob mass. Essentially, changing the mass of the bob will not change any factor related to the pendulum's motion (e.g. period, amplitude).

## Length

According to Equation 1, the square root of the length of the pendulum, L, is inversely proportional to the natural frequency of the pendulum. Therefore, if the length of the pendulum is increased, the natural frequency decreases, and hence the period of the pendulum's oscillation increases. This characteristic can be observed in Figures 1 and 2. Figure 2 displays a pendulum with a larger length than that in Figure 2, and it is clear that the pendulum in Figure 2 has a greater period than that in Figure 1, as expected.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/projects/simple_pendulum/simple-pendulum-animation-short.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Figure 1: Harmonic motion of a simple pendulum with shorter length.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/projects/simple_pendulum/simple-pendulum-animation-long.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Figure 2: Harmonic motion of a simple pendulum with longer length.
</div>

## Gravity

Equation 1 also implies that the natural frequency of the simple pendulum system is proportional to the square root of the gravitational acceleration on the system. Therefore, if the gravitational acceleration increases, the natural frequency also increases, and hence the period of oscillation decreases. This characteristic can be observed in Figures 3 and 4. Figure 4 displays a pendulum subject to a larger gravitational acceleration than that in Figure 3. It is clear that the pendulum in Figure 4 has a smaller period than the pendulum in Figure 3.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/projects/simple_pendulum/simple-pendulum-animation-small-grav.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Figure 3: Harmonic motion of a simple pendulum swith smaller gravitational acceleration.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/projects/simple_pendulum/simple-pendulum-animation-large-grav.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Figure 4: Harmonic motion of a simple pendulum with larger gravitational acceleration.
</div>