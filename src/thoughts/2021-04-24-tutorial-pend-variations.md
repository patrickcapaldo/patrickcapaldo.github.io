---
layout: layouts/post.njk
title: Simple Pendulum Variations
date: 2021-04-24
tags:
  - tutorial
excerpt: Observing the effects of parameters on the swing of a simple pendulum.
thumbnail: /assets/img/tutorials/simple-pendulum-derivation/pendulum_1.png
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

![](/assets/video/projects/simple_pendulum/simple-pendulum-animation-short.mp4)

*Figure 1: Harmonic motion of a simple pendulum with shorter length.*

![](/assets/video/projects/simple_pendulum/simple-pendulum-animation-long.mp4)

*Figure 2: Harmonic motion of a simple pendulum with longer length.*

## Gravity

Equation 1 also implies that the natural frequency of the simple pendulum system is proportional to the square root of the gravitational acceleration on the system. Therefore, if the gravitational acceleration increases, the natural frequency also increases, and hence the period of oscillation decreases. This characteristic can be observed in Figures 3 and 4. Figure 4 displays a pendulum subject to a larger gravitational acceleration than that in Figure 3. It is clear that the pendulum in Figure 4 has a smaller period than the pendulum in Figure 3.

![](/assets/video/projects/simple_pendulum/simple-pendulum-animation-small-grav.mp4)

*Figure 3: Harmonic motion of a simple pendulum swith smaller gravitational acceleration.*

![](/assets/video/projects/simple_pendulum/simple-pendulum-animation-large-grav.mp4)

*Figure 4: Harmonic motion of a simple pendulum with larger gravitational acceleration.*
