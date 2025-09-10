---
layout: page
title: DEPART
description: Delay Estimation and Prediction for Aircraft Routing and Times — an end-to-end machine learning system for predicting flight delays and serving results through a scalable API.
img: assets/img/projects/depart/depart_cover.png
importance: 1
category: research
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/projects/depart/depart_cover.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Conceptual illustration of flight scheduling and delay prediction powered by machine learning.
</div>

# Purpose

**DEPART** (Delay Estimation and Prediction for Aircraft Routing and Times) is a machine learning project built to **predict the probability of flight delays** for departures from **Arturo Merino Benitez International Airport (SCL)**.  

The project takes real-world airline data and applies the full machine learning pipeline:  
- **Exploration** of flight and scheduling data.  
- **Training and evaluation** of candidate models.  
- **Selection of the most effective predictor**.  
- **Deployment** via a production-grade, scalable API.  

The end result is a tool that helps airlines, airports, and passengers anticipate disruptions and plan accordingly.

# Prerequisites

- **Python 3.10**  
- Install dependencies with:  

```bash
pip install -r requirements.txt
```

It is recommended to use a dedicated virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

# Quick Start

Clone the repository:

```bash
git clone https://github.com/patrickcap/DEPART.git
cd DEPART
```

Navigate to the scripts directory:

```bash
cd scripts
```

Launch the API:

```bash
./launch_api.sh
```

Access the interactive API documentation at:

```bash
http://localhost:8080/docs
```

# Documentation

Full documentation for installation, usage, design, and development can be found here:
DEPART Documentation

Project Structure
- `app` – Production-ready code.
- `briefing` – Project requirements and expectations.
- `data` – Test datasets for unit and integration checks.
- `docs` – Sphinx-based user documentation.
- `research` – Exploratory data analysis in Jupyter notebooks.
- `scripts` – Automated Bash scripts for workflow management.

# GitHub

Click <a href='https://github.com/patrickcapaldo/DEPART'>here</a> to find the source code on GitHub.