# ReadmeForge

<p align="center">
  <strong>Generate professional, architecture-aware README files for any GitHub repository using AI.</strong>
</p>

<p align="center">
  Analyze a repository, understand its architecture, detect frameworks and dependencies, and generate high-quality README documentation automatically.
</p>

---

## ✨ Features

- 🔍 **Repository Analysis**
  - Fetches repository metadata from GitHub.
  - Traverses the complete repository tree.
  - Identifies important source files automatically.

- 🧠 **Architecture Understanding**
  - Detects project type.
  - Identifies architectural layers.
  - Discovers entry points.
  - Understands project structure.

- ⚙️ **Technology Detection**
  - Framework detection
  - Dependency analysis
  - Deployment platform detection
  - Database detection
  - Environment variable discovery

- 📂 **Code Understanding**
  - Extracts important functions.
  - Collects representative source files.
  - Builds structured repository context.

- 🤖 **AI-Powered README Generation**
  - Generates professional README files using an LLM.
  - Produces repository summaries instead of simply restating code.
  - Creates clean project structures.
  - Generates installation, usage, workflow, and architecture sections.

- 📊 **Confidence Reporting**
  - Generates a confidence report for detected technologies.
  - Makes repository analysis transparent.

---

# Architecture

```text
                    GitHub Repository
                           │
                           ▼
                Repository Collector
                           │
                           ▼
                  File Tree Collector
                           │
                           ▼
               Repository Structure Analyzer
                           │
                           ▼
             Important Files Identification
                           │
                           ▼
               File Content Collection
                           │
                           ▼
                Repository Context Builder
                           │
        ┌──────────────────┼────────────────────┐
        ▼                  ▼                    ▼
 Framework Analyzer   Dependency Analyzer   Architecture Analyzer
        ▼                  ▼                    ▼
 Project Type        Database Analyzer    Deployment Analyzer
        ▼
 Environment Analyzer
        ▼
 Function Analyzer
                           │
                           ▼
               AI README Generator (LLM)
                           │
                           ▼
                    README.generated.md
```

---

# Project Structure

```text
ReadmeForge
│
├── analyzers/
│   ├── architectureAnalyzer.js
│   ├── contextBuilder.js
│   ├── databaseAnalyzer.js
│   ├── dependencyAnalyzer.js
│   ├── deploymentAnalyzer.js
│   ├── environmentAnalyzer.js
│   ├── frameworkAnalyzer.js
│   ├── functionAnalyzer.js
│   ├── projectTypeAnalyzer.js
│   └── repositoryAnalyzer.js
│
├── collectors/
│   ├── fileContentCollector.js
│   ├── fileTreeCollector.js
│   ├── importantFilesCollector.js
│   └── repositoryCollector.js
│
├── generators/
│   └── readmeGenerator.js
│
├── prompts/
│   └── readmePrompt.js
│
├── services/
│   ├── githubService.js
│   └── openaiService.js
│
├── output/
│   ├── README.generated.md
│   ├── repository-context.json
│   └── confidence-report.json
│
├── index.js
├── package.json
└── .env
```

---

# How It Works

ReadmeForge follows a multi-stage analysis pipeline:

1. Fetch repository metadata.
2. Retrieve the entire Git tree.
3. Analyze repository structure.
4. Identify important files.
5. Download representative source files.
6. Analyze:
   - Frameworks
   - Dependencies
   - Architecture
   - Deployment
   - Databases
   - Functions
   - Environment variables
7. Build a structured repository context.
8. Send the context to the LLM.
9. Generate a professional README.
10. Save analysis artifacts.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Varun-3000/ReadmeForge.git

cd ReadmeForge
```

Install dependencies:

```bash
npm install
```

---

# Configuration

Create a `.env` file.

Example:

```env
GITHUB_TOKEN=your_github_token

OPENAI_API_KEY=your_openai_api_key
```

A GitHub Personal Access Token is recommended to avoid GitHub API rate limits.

---

# Usage

Generate documentation for any public GitHub repository.

```bash
node index.js <owner> <repository>
```

Example:

```bash
node index.js facebook react

node index.js microsoft vscode

node index.js KalyanM45 CareerCrawl
```

---

# Output

Each execution generates an `output/` directory containing:

```text
output/
├── README.generated.md
├── repository-context.json
└── confidence-report.json
```

### README.generated.md

The AI-generated project documentation.

### repository-context.json

Contains structured repository analysis including:

- repository metadata
- architecture
- dependencies
- frameworks
- functions
- deployment
- project type

### confidence-report.json

Contains:

- detected frameworks
- detected architecture
- deployment
- databases
- confidence scores

---

# Supported Analysis

Currently ReadmeForge detects:

| Category | Supported |
|----------|-----------|
| Repository metadata | ✅ |
| Frameworks | ✅ |
| Dependencies | ✅ |
| Architecture | ✅ |
| Deployment | ✅ |
| Functions | ✅ |
| Environment Variables | ✅ |
| Databases | ✅ |
| Project Type | ✅ |
| README Generation | ✅ |

---

# Current Limitations

- Optimized for public GitHub repositories.
- Large repositories are summarized rather than fully indexed.
- Only representative files are analyzed to balance cost and quality.
- Accuracy depends on repository structure and code organization.

---

# Roadmap

## Version 1.1

- Better architecture detection
- Language-specific analyzers
- Improved prompt engineering
- Better confidence scoring

## Version 1.2

- Automatic diagram generation
- API documentation generation
- Class and module relationship extraction
- Better project structure visualization

## Version 2.0

- Interactive CLI
- Multiple README templates
- README quality scoring
- Incremental repository analysis
- Pull Request documentation generation

---

# Contributing

Contributions are welcome!

If you'd like to improve ReadmeForge:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

# License

This project is licensed under the MIT License.

---

<p align="center">
Built with ❤️ to automate high-quality GitHub documentation.
</p>
