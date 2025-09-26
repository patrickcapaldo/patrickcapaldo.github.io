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

[Checkout the CIVI GitHub repository here!](https://github.com/patrickcapaldo/civi)

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

# Whys

The following section is a living list of reasons for why certain decisions were made along the development journey for CIVI.

## 1. Core Architecture & Languages

- **Python (Backend Language)**
    - **Why:** Selected for its robust ecosystem in data science (`pandas`, `numpy`, `scikit-learn`), web scraping (`beautifulsoup4`, `requests`), and efficient web development (`FastAPI`, `SQLAlchemy`). This makes it ideal for a data-intensive application requiring complex data processing, analysis, and API services.
- **JavaScript/TypeScript (Frontend Language)**
    - **Why:** Standard choice for modern web development. TypeScript specifically enhances code quality, maintainability, and developer experience by adding static type checking, which is beneficial for larger, more complex frontend applications.

## 2. Backend Frameworks & Data Management

- **FastAPI (Backend Web Framework)**
    - **Why:** Chosen for its high performance, modern Python type hint support, and ease of building APIs. Its automatic data validation (via Pydantic), interactive API documentation, and dependency injection system streamline API development and maintenance, crucial for serving complex data efficiently.
- **PostgreSQL (Database)**
    - **Why:** A powerful, open-source relational database known for its reliability, extensibility, and strong support for advanced features. Its robust relational capabilities and data integrity features (e.g., foreign keys, unique constraints) are essential for storing and aggregating complex time-series data and metadata.
- **SQLAlchemy ORM (Database Interaction)**
    - **Why:** Provides an object-relational mapping layer, allowing developers to interact with the PostgreSQL database using Python objects instead of raw SQL. This improves code readability, maintainability, and reduces the risk of SQL injection vulnerabilities.
- **Relational Schema Design (Multiple Tables for Raw, Normalized, Scored Data)**
    - **Why:** This structured design facilitates a clear, auditable, and reproducible data pipeline. It separates raw, immutable data from processed, normalized, and aggregated results, allowing for easier debugging, re-processing, and understanding of how final scores are derived. It also optimizes for different query patterns at each stage.
- **`metrics_catalog` Table**
    - **Why:** Centralizes metadata for all metrics, ensuring consistency and providing essential context (description, source, units, directionality, industry, pillar) for data interpretation and visualization. The `directionality` field is particularly important for correctly normalizing and scoring metrics.
- **`normalization_log` and `etl_runs` Tables**
    - **Why:** Emphasizes data governance, transparency, and reproducibility. These tables record how data was processed and when ETL jobs ran, which is critical for a data platform where users need to trust the underlying data and methodology.

## 3. Frontend Frameworks & UI/UX

- **React (Frontend Library)**
    - **Why:** The core library for building the user interface. Its component-based architecture and declarative nature are well-suited for developing complex, interactive data visualization applications with multiple views and dynamic content.
- **React Router (Client-Side Routing)**
    - **Why:** Enables a Single-Page Application (SPA) experience by managing navigation between different views without full page reloads. This provides a smoother and faster user experience for data exploration.
- **Material-UI (MUI) (UI Component Library)**
    - **Why:** Chosen for its comprehensive set of pre-built, customizable React components that adhere to Material Design principles. This accelerates UI development, ensures a consistent and modern look and feel, and provides a good user experience out-of-the-box. The dark theme suggests a focus on user comfort during prolonged data analysis sessions.
- **D3.js (Data Visualization Library)**
    - **Why:** Selected for its unparalleled flexibility and power in creating custom, dynamic, and interactive data visualizations, allowing for sophisticated representation of the CIVI data.
- **Modular Frontend Structure (Pages and Components)**
    - **Why:** Organizing the frontend into distinct pages (`HomePage`, `ExplorePage`, `AnalysePage`) and reusable components (`NavBar`) promotes code organization, maintainability, and scalability, especially for an application with diverse functionalities.

## 4. Data Acquisition & Processing

- **Multiple Data Fetching Scripts (`src/etl/fetch_*.py`)**
    - **Why:** To integrate data from a diverse range of authoritative international organizations (e.g., FAO, ITU, WHO, World Bank, OECD, UN agencies). This broad data collection strategy aims to provide a comprehensive and multi-faceted view of critical infrastructure and related societal indicators, enabling a holistic "Civi" index.
- **`data/raw` directory (Git-ignored)**
    - **Why:** To store the raw, unprocessed data fetched from external sources. Git-ignoring these files is a standard practice to keep the repository lean, avoid committing large binary files, and ensure that raw data can be refreshed or re-fetched without polluting the version control history. It also implies that the raw data is considered an intermediate artifact of the ETL process.
- **`update_data.py` script**
    - **Why:** To automate the process of refreshing and updating the raw data from various sources. This ensures that the CIVI index remains current and reflects the latest available information, which is crucial for the relevance and accuracy of any data-driven analysis.
- **Min-Max Scaling for Normalization**
    - **Why:** Chosen to standardize diverse metrics onto a common 0-100 scale. This allows for direct comparison and aggregation of metrics that originally had different units, ranges, and interpretations, which is fundamental for creating a composite index like CIVI.
- **Handling Metric Directionality (POS/NEG)**
    - **Why:** Crucial for ensuring that all metrics contribute correctly to the overall score. By inverting 'NEG' metrics, the system consistently interprets higher normalized values as "better," preventing misinterpretation and ensuring the index accurately reflects performance.
- **Pandas for Data Transformation**
    - **Why:** Utilized for its powerful and efficient DataFrame operations, enabling complex data manipulations like grouping, aggregation, and element-wise calculations (e.g., min-max scaling) to be performed quickly and concisely in Python. This is a key reason for Python's selection in a data-intensive project.
- **Logging Normalization Parameters**
    - **Why:** To maintain transparency and reproducibility of the data processing pipeline. By recording the exact parameters (min/max, method, window) used for each normalization run, future audits or re-calculations can be performed with confidence, and the methodology can be clearly understood.
- **Idempotent Data Processing**
    - **Why:** Designing the normalization process to be idempotent (clearing and re-inserting data) simplifies data management and ensures consistency. It prevents data duplication and makes it safe to re-run the processing script multiple times without adverse effects, which is valuable in ETL workflows.

## 5. Development & Deployment

- **GitHub Actions (CI/CD Platform)**
    - **Why:** Chosen for automated testing, building, and deployment. Its native integration with GitHub repositories simplifies the CI/CD pipeline setup and management, ensuring code quality and efficient delivery of updates.
- **`pytest` (Backend Testing Framework)**
    - **Why:** A popular and powerful testing framework for Python, known for its simplicity, extensibility, and ability to write clear and concise tests. Its inclusion in the CI pipeline ensures the reliability and correctness of the backend logic.
- **Deployment to GitHub Pages (Frontend)**
    - **Why:** A cost-effective and straightforward solution for hosting static frontend applications. It leverages GitHub's infrastructure for reliable content delivery, making the frontend publicly accessible without requiring a dedicated server.
- **Serving Frontend Static Files via FastAPI (Backend)**
    - **Why:** Simplifies deployment architecture by allowing a single FastAPI server to handle both API requests and serve the static assets of the React frontend. This can reduce operational overhead compared to managing separate web servers for the frontend and backend.
