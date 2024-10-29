---
layout: distill
title: Python Puzzle 001 - Scope
description: Execution order, operator precedence, and scope.
tags: python
categories: tutorials
date: 2024-10-29
featured: false
thumbnail: assets/img/tutorials/python_puzzles/python_puzzle_01.png
authors:
  - name: Patrick Capaldo
    url: "https://patrickcap.github.io/"
    affiliations:
      name: None

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).

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

Today's Python Puzzle will test your knowledge of order of execution, operator precedence, and scope.

- Execution Order: Tracking the order of statements and the effect of function calls.
- Operator Precedence: Understanding how `x=x+y` works when `x` is global.
- Variable Scope: Understanding `global`, `nonlocal`, and local scopes.

Feel free to use an online Python compiler and interpreter like [this] (https://www.online-python.com/) to try running the code yourself.

```python
# Python Execution Puzzle!
# Can you predict the output of this code?

x = 5

def puzzle():
    global x
    y = 10
    x = x + y

    def inner():
        nonlocal y
        y = 20
        print("Inside inner:", x, y)

    inner()
    print("Inside puzzle:", x, y)

puzzle()
print("Outside puzzle:", x)

```
