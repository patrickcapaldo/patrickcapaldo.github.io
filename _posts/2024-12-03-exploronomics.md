---
layout: distill
title: Exploronomics
description: Exploring Global Economics.
tags: economics
categories: tutorials
date: 2024-12-03
featured: true
thumbnail: assets/img/projects/exploronomics/exploronomics_globe.png

authors:
  - name: Patrick Capaldo
    url: "https://patrickcapaldo.github.io/"
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

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/exploronomics/exploronomics_globe.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Exploronomics globe.
</div>

I'm making a tool, just for fun, to help get a feel of the economics of the countries of the world.

Check it out [here!](https://patrickcapaldo.github.io/exploronomics/){:target="_blank"}

## Globe Model

I did initially try to create my own 3D model of the Earth using primitive shapes linking this to a downloadable JSON file of the all the borders of every country in the world like [this](https://geojson-maps.kyd.au/).

However, this proved to be quite difficult and buggy and was probably going to take a very long time to get working at a minimum, let alone optimising for performance on client-side. Note that this page contains only a frontend as GitHub Pages can only serve static content, meaning no backend server can run alongside the frontend. So all the computation must be done on client-side.

I stumbled across [this](https://observablehq.com/@michael-keith/draggable-globe-in-d3) draggable globe in D3.js by Michael Keith which was exactly what I was looking for and so I simply linked to this in my code.

## Data Source

The [World Bank's DataBank](https://databank.worldbank.org/) is a no brainer for a source of data. It has just about anything you could possibly want to know about economics - although not all fields are populated for every country, but the most important ones are. I was originally planning on iteratively pulling data from this site as it updated but since this is just a static site, I settled for downloading a static collation of the most important economic factors I am interested in: 
- Gross Domestic Product (GDP)
- GDP growth
- GDP per capita
- GDP per capita growth
- Inflation, consumer prices
- Unemployment, total
- Central government debt
- Human Capital Index (HCI)

