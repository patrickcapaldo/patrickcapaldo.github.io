---
layout: layouts/project.njk
title: Critical Infrastructure Vitals Index (CIVI)
date: 2025-09-17
status: paused
tags: [data, policy, visualisation]
excerpt: A composite index that scores and ranks countries on the health of their essential infrastructure across autonomy, resilience, sustainability, and effectiveness.
cover: /assets/img/projects/civi/civi_cover.png
---

![](/assets/img/projects/civi/civi_cover.png)

*Conceptual visualization of interconnected infrastructure networks forming the backbone of national stability.*

[Click to watch a demo!](https://www.youtube.com/watch?v=nSHK4oUn4E4)

## Why CIVI Matters

In an interconnected world, the strength of a nation's critical infrastructure is a primary determinant of its economic stability, national security, and quality of life. CIVI provides a standardised framework for policymakers, researchers, and investors to:
- Benchmark national infrastructure performance.
- Identify strategic vulnerabilities and strengths.
- Guide policy and investment decisions.
- Promote global standards for infrastructure development.

## The Four Pillars

CIVI evaluates infrastructure across four distinct dimensions:

1.  **Autonomy**: A nation's ability to operate its critical systems without dependence on foreign entities. This includes control over resources, technology, and supply chains.
2.  **Resilience**: The capacity of infrastructure to withstand, adapt to, and recover from disruptions, whether natural disasters, cyber-attacks, or economic shocks.
3.  **Sustainability**: The environmental, social, and economic viability of infrastructure. This pillar measures the long-term impact and efficiency of resource use.
4.  **Effectiveness**: The quality, accessibility, and performance of infrastructure services delivered to citizens and businesses.

## Industries Covered

CIVI spans the following 11 critical industries:

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

## Key Features

There are three features of CIVI being Explore, Analyse, and Case Studies.

### Explore

The Explore page serves as the primary entry point for visualising the CIVI data. It features an interactive world map where users can:

- **Visualise Country Scores:** Hover over any country to see its overall CIVI score and a breakdown across the four pillars (Autonomy, Resilience, Sustainability, Effectiveness).
- **Filter by Industry and Pillar:** Use dropdown menus to filter the map display, showing how countries perform in specific industries (e.g., Energy, Healthcare) or within particular pillars.
- **Dynamic Data Display:** The map dynamically updates to reflect the selected filters, providing a quick and intuitive way to understand global critical infrastructure landscapes.
- **Tabular Data Exploration (Full-Featured Mode):** In the full-featured version (requiring a backend), you can explore the raw data in a paginated, filterable table. This allows for granular analysis and data export.

![](/assets/img/projects/civi/civi_explore_choose.png)

*The user can choose between exploring the data in tabular or global formats.*

![](/assets/img/projects/civi/civi_explore_01.png)

*Exploring in the global format.*

![](/assets/img/projects/civi/civi_explore_02.png)

*Exploring the modal data for a specific country in the global format.*

![](/assets/img/projects/civi/civi_explore_tabular_1.png)

*Exploring the data in the tabular format.*

### Analyse

The Analyse page offers a deeper dive into historical trends and comparative analysis. On this page, users can:

- **Historical Data & Comparison:** Select multiple countries, industries, and pillars to compare their historical CIVI scores over time.
- **Customisable Line Colors:** For each selected data series, users can choose a custom line color using an integrated color picker, both before adding to the comparison and after. This allows for personalised and clear visualisation of comparative data.
- **Dynamic Charting:** The page features a dynamic line chart that visualises the selected historical data, making it easy to identify trends and compare performance across different selections.
- **Flexible Timeframe:** Adjust the start and end years to focus on specific periods of interest for historical analysis.

![](/assets/img/projects/civi/civi_analyse_02.png)

*Choosing the data series to plot.*
![](/assets/img/projects/civi/civi_analyse_01.png)

*Viewing a comparison of data series.*

### Case Studies

The Case Studies page allows you to explore in-depth articles and insights drawing from CIVI data to understand key trends and country-specific analyses.

## Methodology

The CIVI score is calculated through a multi-step process:

1.  **Indicator Selection**: A curated set of indicators is chosen for each industry, aligned with the four pillars. Indicators are selected for their relevance, data availability, and global coverage.
2.  **Data Collection**: Data is programmatically fetched from reputable international sources and stored in a PostgreSQL database.
3.  **Normalisation**: All indicator data is normalised to a common scale (0–100) using a min-max scaling method. This allows for meaningful comparison across different metrics.
4.  **Scoring**: For each country, normalised indicator values are weighted and aggregated to produce a score for each of the four pillars within each industry.
5.  **Aggregation**: Pillar scores are aggregated to create an overall CIVI score for each industry, and industry scores are aggregated to produce a final, country-level CIVI index.

## Data Sources

CIVI is built on public data from trusted global organisations, including:

- World Bank
- Food and Agriculture Organisation (FAO) (SDMX API - partially implemented)
- International Energy Agency (IEA)
- World Health Organisation (WHO)
- International Telecommunication Union (ITU)
- International Monetary Fund (IMF)
- Organisation for Economic Co-operation and Development (OECD)
- United Nations (UN)

## Tech Stack

The CIVI project is built using the following technologies:

-   **Database**: PostgreSQL
-   **Backend**: Python, FastAPI
-   **Frontend**: React (JavaScript)
-   **Data Visualisation**: Chart.js, D3.js

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
    - **Why:** Centralizes metadata for all metrics, ensuring consistency and providing essential context (description, source, units, directionality, industry, pillar) for data interpretation and visualization. The `directionality` field is particularly important for correctly normalising and scoring metrics.
- **`normalization_log` and `etl_runs` Tables**
    - **Why:** Emphasizes data governance, transparency, and reproducibility. These tables record how data was processed and when ETL jobs ran, which is critical for a data platform where users need to trust the underlying data and methodology.
- **Food and Agriculture Data Fetching and Visualisation:**
    - **Why:** The issue stemmed from a chart failing to render due to inconsistencies between the frontend and backend. The backend produced incomplete data and used different naming conventions than the frontend, causing data retrieval to fail. This was worsened by the frontend trying to render the chart before the data was fully loaded. The solution involved standardising the backend data structure, aligning the naming conventions, and making the frontend component wait until all necessary data was available before attempting to render.

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
    - **Why:** Organising the frontend into distinct pages (`HomePage`, `ExplorePage`, `AnalysePage`) and reusable components (`NavBar`) promotes code organization, maintainability, and scalability, especially for an application with diverse functionalities.

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
