export function buildReadmePrompt(
    context
) {

    return `
You are a senior software architect.

Generate a professional GitHub README.md.

Repository Context:

${JSON.stringify(
    context,
    null,
    2
)}

README Sections:

# Project Title

# Overview

# Features

# Architecture

# Tech Stack

# Project Structure

# Installation

# Configuration

# Usage

# Workflow

# Future Improvements

Rules:

- Use ONLY information explicitly present in repository context.
- Never infer features from folder names.
- Never infer scalability characteristics.
- Never infer performance optimizations.
- Never infer security properties.
- Never infer production readiness.
- Never invent AI agents.
- Never invent distributed systems.
- Never invent parallel processing.
- Never invent databases.
- Never invent cloud infrastructure.
- Mention technologies only if present in dependencies or files.
- Every architecture statement must reference actual files or folders.
- If evidence is missing, omit the statement entirely.
- Prefer under-reporting over hallucinating.
- Do not write placeholders such as:
  - TBD
  - Unknown
  - Not Available
- If a section cannot be generated from repository evidence, omit the section.
- Never explain assumptions.
- Every claim must be traceable to repository context.

Generate markdown only.
`;
}