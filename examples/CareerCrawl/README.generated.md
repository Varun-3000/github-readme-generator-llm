# CareerCrawl

## Overview
CareerCrawl is a Python-based application designed to automate the discovery and curation of technology-focused job opportunities. The system crawls company career portals, leverages Large Language Models (LLMs) to extract and analyze job descriptions, and automatically filters out non-technical positions. The result is a clean, curated feed of tech roles, specifically targeting AI, Machine Learning, Data Science, and related engineering positions.

## Features
- **Automated Scraping**: Crawls multiple company career portals using a modular scraper engine.
- **LLM-Powered Classification**: Utilizes Large Language Models to analyze job descriptions and department names.
- **Tech-Role Filtering**: Automatically distinguishes between technology-related and non-technology roles based on specific criteria.
- **Data Extraction**: Extracts key job details including job type, work mode, locations, salary range, and posting dates.
- **Dynamic Job Feed**: Generates a curated JSON feed of filtered jobs for frontend consumption.

## Architecture
The application follows a layered architecture consisting of a backend processing engine and a static frontend layer.

- **Backend Layer**: Located in the `backend/` directory, this layer handles the core logic, including configuration management, prompt engineering, and scraping orchestration.
- **Scraper Engine**: Residing in `backend/scrapers/`, this component dynamically loads specific scraper modules based on company configuration. It supports custom scrapers via a dynamic import mechanism.
- **LLM Prompt Layer**: Defined in `backend/prompts/`, this layer contains structured prompt templates (`Classify_Category.md`, `Classify_DataJob.md`) that guide the LLM in classifying departments and specific job roles.
- **Frontend Layer**: Located in the `frontend/` directory, this layer serves the static HTML, CSS, and JavaScript assets, consuming the processed job data.
- **Data Output**: The system generates a `companies.json` file for metadata and updates a combined job list in the `frontend/data/cache/` directory.

## Tech Stack
- **Language**: Python (>=3.11), JavaScript
- **Frameworks & Libraries**:
  - `langchain`: For LLM orchestration.
  - `langchain-core`: Core abstractions for LangChain.
  - `langchain-groq`: Integration with Groq for LLM inference.
  - `requests`: For HTTP requests during scraping.
  - `python-dotenv`: For environment variable management.
- **Deployment**: Vercel (configured via `vercel.json`).
- **Package Management**: `uv` (indicated by `uv.lock` and `pyproject.toml`).

## Project Structure
```text
.
├── backend/
│   ├── config/
│   │   ├── __init__.py
│   │   └── config.py          # Company configurations and scraper mappings
│   ├── prompts/
│   │   ├── Classify_Category.md
│   │   └── Classify_DataJob.md
│   ├── scrapers/
│   │   ├── templates/
│   │   └── [scraper_modules]  # Individual scraper implementations
│   └── utils/
├── frontend/
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── js/
│   ├── data/
│   │   └── cache/             # Output directory for job data
│   └── html/
├── main.py                    # Entry point for the scraping pipeline
├── pyproject.toml             # Project dependencies and metadata
├── vercel.json                # Vercel deployment configuration
└── README.md
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KalyanM45/CareerCrawl.git
   cd CareerCrawl
   ```
2. Install dependencies using `uv` or `pip`:
   ```bash
   uv sync
   # OR
   pip install -e .
   ```

## Configuration
1. Create a `.env` file in the root directory based on `.env.example` (if provided) to store API keys (e.g., Groq API key).
2. Configure target companies in `backend/config/config.py`. Each entry must include:
   - `id`: Unique identifier.
   - `scraper`: The module key for the scraper (e.g., `eightfold` or `custom.module_name`).
   - `company`: Company details including name, domain, and image path.
   - `links`: URLs for job listing and job detail pages.

## Usage
Run the main script to execute the scraping and classification pipeline:
```bash
python main.py
```
The script will:
1. Load company configurations.
2. Dynamically import and execute the specified scraper for each company.
3. Pass job descriptions to the LLM for classification and data extraction.
4. Filter out non-tech roles.
5. Save the curated job data to the frontend cache directory.

## Workflow
1. **Initialization**: `main.py` loads the `COMPANIES` list from `backend/config/config.py`.
2. **Scraper Loading**: The `_load_scraper` function uses `importlib` to dynamically import the specific scraper module defined in the configuration.
3. **Data Extraction**: The scraper fetches job listings and details from the provided URLs.
4. **Classification**:
   - **Department Level**: The `Classify_Category.md` prompt determines if a department is tech-related.
   - **Job Level**: The `Classify_DataJob.md` prompt analyzes the Job Description (JD) to confirm if the role is primarily AI/Data focused.
5. **Aggregation**: Validated jobs are merged into a combined list, replacing stale entries for the same company.
6. **Output**: The final dataset is saved as JSON for the frontend to consume.

## Future Improvements
- Integration of additional scraper modules for more company portals.
- Expansion of classification prompts to cover emerging tech roles.
- Implementation of scheduled execution for periodic job feed updates.