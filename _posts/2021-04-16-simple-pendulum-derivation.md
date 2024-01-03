---
layout: distill
title: Simple Pendulum Derivation
description: Finding the equation of motion for a simple pendulum.
tags: dynamics
categories: tutorials
date: 2021-04-16
featured: false

authors:
  - name: Patrick Capaldo
    url: "https://patrickcap.github.io/"
    affiliations:
      name: None

bibliography: 2021-04-16-simple-pendulum-derivation.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Background
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Energy Method Background
  - name: Energy Method/NIIL Process

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

Find below an analysis and derivation of the equation of motion of a simple pendulum using the Energy Method and Newton's Second Law.

## Background
A simple pendulum is a system consisting of a mass (bob), m, connected to a fixed point, P, with a length of material, L. The static equilibrium point is when the bob is located vertically downwards from P (i.e. when angle theta is zero) (refer to Figure 1).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/simple-pendulum-derivation/pendulum_1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Figure 1: Simple pendulum free body diagram.
</div>

To define the motion of a simple pendulum we first make three key assumptions: the mass of the beam/wire is negligible, the bob's diameter is approximately zero (i.e. point mass, m), and the damping of the system is negligible.

## Energy Method Background

By raising the bob along the arc formed by the circle of radius L from P (i.e. increasing the magnitude of theta), the bob gains gravitational potential energy. If the bob is then released, the gravitational potential energy (GPE) will gradually be converted into kinetic energy (KE) as the bob accelerates due to gravity, g. When the bob reaches the static equilibrium point again (theta = 0), it will have maximum KE and zero GPE. The bob will move past the static equilibrium point and rise back to the same magnitude of theta where it was released from. In this location, the GPE is maximised and the KE is zero. This pattern of energy transfer continues indefinitely as the pendulum oscillates harmonically (refer to Figure 2).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/projects/simple_pendulum/simple-pendulum-animation-large-grav.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Figure 2: Harmonic motion of a simple pendulum and the energy exchange between GPE and KE.
</div>

The animation shown in Figure 1 was created using Python and the Pygame library. Refer to [this page](https://patrickcap.github.io/projects/project_simple_pendulum/) to find the Python code used to create the animation.

## Energy Method/NIIL Process

The following will explain how the Energy Method can be used to find the equation that governs the dynamics of the simple pendulum system. The method is implemented by equating two identical values of GPE and KE, then solving for the desired variable. In our case, the desired variable is the angle theta. We will find the GPE (U) at its maximum (highest point of bob) and call this point 1; then we will find the KE (T) at its maximum (lowest point of bob) and call this point 2. By equating U1 to T2, the angle theta can be solved and hence the natural frequency of the system is found. After this, Newton's Second Law (NIIL) can be used to find the temporal solution of the motion of the pendulum. Then, incorporating the result from NIIL with the found natural frequency, a final temporal equation of motion can be deduced (refer to Equation \eqref{eq:1}).

\begin{equation}
\label{eq:1}
\theta (t) = {\theta}_0 \bullet cos \left( \sqrt{g/L} \bullet t \right)
\end{equation}

The working to find the result shown in Figure 2 is displayed below in Figure 3. Note that in the working, the torque in the moment equation is negative since it acts in a direction opposite to the angular displacement. Additionally, the mass moment of inertia of a simple pendulum is given by the mass of the bob multiplied by the square of the bob from the centre of rotation.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/simple-pendulum-derivation/pendulum_2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Figure 3.1: Finding the temporal solution for the motion of a simple pendulum.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/simple-pendulum-derivation/pendulum_3.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Figure 3.2: Finding the temporal solution for the motion of a simple pendulum.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/simple-pendulum-derivation/pendulum_4.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Figure 3.3: Finding the temporal solution for the motion of a simple pendulum.
</div>

To observe how the variation of the derivation parameters affect the motion of the pendulum, refer to [this page](https://patrickcap.github.io/blog/2021/simple-pendulum-variations/).
