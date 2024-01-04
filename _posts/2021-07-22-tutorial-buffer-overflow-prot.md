---
layout: distill
title: Buffer Overflow Protection
description: How to protect programs written in C from buffer overflow.
tags: cybersecurity
categories: tutorials
date: 2021-07-22
featured: false

authors:
  - name: Patrick Capaldo
    url: "https://patrickcap.github.io/"
    affiliations:
      name: None

bibliography: 2021-07-22-buffer-overflow-prot.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Avoid Unsafe Functions
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Bound Checking
  - name: Canaries

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

Below is a list of various methods to avoid buffer overflows from occurring - more specifically using C language.

## Avoid Unsafe Functions

Functions such as gets(), sprintf(), strcpy(), and strcat() are unsafe because they all encourage some form of stack frame overwrite that can induce a buffer overflow. For example, strcpy() will copy a string into a buffer until the null character is found - regardless of the declared size of the buffer - easily inducing overflow if the user is not conscious of their buffer and input size.

Users should avoid these functions if possible and look for alternatives such as their corresponding 'n' versions: fgets(), snprinft(), strncpy, and strncat(). These alternatives require an extra argument being the number of characters (or bytes) that the user wishes to be interacted with - rather than simply relying on the presence of a null character or not. This forces the user to know the bounds in which they are working.

## Bound Checking

In addition to the practices mentioned previously, users should also be aware of the bounds of their program and the limitations of the functions they are using. For example, while the 'n' functions listed above require more information, if the user supplies incorrect information, they will do nothing to prevent a buffer overflow (e.g. giving the wrong number of characters). Due to this, it is imperative that the user is aware of how these functions work and what the limitations of their buffers are to prevent an overflow. I can tell you from experience that the most overlooked source of overflow is the null character. It is very often not accounted for in expected buffer sizes and hence is often the cause of 1-byte overflows which are equally as dangerous as a full stack overflow.

## Canaries

Just as canaries were kept in coal mines to warn for the presence of toxic gases, the same method can be used in computer memory to warn for the presence of a buffer overflow. The concept is quite simple - place a known value in between the buffer (what can cause overflow) and the stack frame metadata (what we want to protect) (refer to Figure 1).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/buffer_overflow_prot/canary.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Canary location to identify stack buffer overflow.
</div>

Since the value is known to the machine and not to the attacker, the machine can simply check if the value has been modified after the callee function finishes and if it has, the program exits safely (overflow), and if not, it continues as normal (no overflow). The security of this defence depends on the value of the canary chosen. If the value is easy to guess or can be created naturally as a memory location - this defence is weakened. The value of the canary should be changed for each function call (to avoid it being brute-forced) and should be difficult to guess for an attacker.
