---
layout: page
title: Critical Infrastructure Vitals Index (CIVI)
description: A composite index that scores and ranks countries on the health of their essential infrastructure across autonomy, resilience, sustainability, and effectiveness.
img: assets/img/projects/civi/civi_cover.png
importance: 1
category: current
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/civi/civi_cover.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Conceptual visualization of interconnected infrastructure networks forming the backbone of national stability.
</div>

# Purpose

The Critical Infrastructure Vitals Index (CIVI) is designed to provide a **comprehensive snapshot of a nation’s infrastructure health**. It measures a country’s performance across four key pillars - Autonomy, Resilience, Sustainability, and Effectiveness - giving policymakers, researchers, and investors a standardized framework to understand and compare infrastructure readiness globally.

CIVI ultimately seeks to highlight strengths, reveal vulnerabilities, and guide future policy and investment decisions in a data-driven way.

# Why It Matters

In today’s interconnected world, the strength of a country’s infrastructure is inseparable from its **economic stability, national security, and quality of life**. CIVI is valuable because it:

- Benchmarks national infrastructure performance.
- Identifies critical strengths and vulnerabilities.
- Guides evidence-based policy and investment.
- Promotes consistent global standards for infrastructure development.

# The Four Pillars

CIVI evaluates infrastructure across four distinct dimensions:

1. **Autonomy** – Independence in operating critical systems, including control of resources, technology, and supply chains.  
2. **Resilience** – Capacity to withstand, adapt to, and recover from disruptions such as natural disasters, cyber-attacks, or economic shocks.  
3. **Sustainability** – Long-term viability of infrastructure considering environmental, social, and economic impacts.  
4. **Effectiveness** – The quality, accessibility, and performance of infrastructure services delivered to citizens and businesses.  

# Industries Covered

CIVI spans **11 critical industries** that form the backbone of modern society:

- Communications  
- Defence  
- Energy  
- Finance  
- Food & Agriculture  
- Healthcare  
- Transport  
- Water  
- Waste Management  
- Emergency Services  
- Information Technology  

# Methodology

CIVI’s scoring process is transparent and systematic:

1. **Indicator Selection** – Relevant, globally available indicators are chosen for each industry.  
2. **Data Collection** – Data is programmatically fetched from reputable international sources.  
3. **Normalization** – Indicators are rescaled (0–100) to enable cross-comparison.  
4. **Scoring** – Countries are scored for each pillar across industries.  
5. **Aggregation** – Pillar scores roll up into industry scores, which combine into a final country-level CIVI score.  

# Data Sources

CIVI leverages **trusted global datasets** from institutions such as:  

- World Bank  
- International Monetary Fund (IMF)  
- Food and Agriculture Organization (FAO)  
- International Energy Agency (IEA)  
- World Health Organization (WHO)  
- International Telecommunication Union (ITU)  
- Organisation for Economic Co-operation and Development (OECD)  
- United Nations (UN)  

# Usage

## Rebuilding the Database

To refresh the CIVI dataset from source, install dependencies and run the update script:

```bash
pip install -r requirements.txt
python src/update_data.py
```

This regenerates the full dataset into /data/civi.json.

## Running Calculations

The pipeline can also be executed step by step for debugging or targeted updates:

- `python src/fetch_data.py` – Download raw data
- `python src/clean_data.py` – Standardize raw data
- `python src/process_data.py` – Normalize and process data
- `python src/score_data.py` – Calculate scores
- `python src/build_json.py` – Assemble the final civi.json

## Serving the Frontend

The CIVI frontend is an interactive React application, designed for visualization and exploration.

To run locally:

```bash
cd frontend
npm install
npm start
```

To build for deployment:

```bash
cd frontend
npm run build
```

## GitHub

Click <a href='https://github.com/patrickcapaldo/civi'>here</a> to find the source code on GitHub.