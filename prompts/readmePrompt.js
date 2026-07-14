export function buildReadmePrompt(context) {
    return `
You are a senior software architect.

Generate a professional GitHub README.md.

Repository Context:
${JSON.stringify(context, null, 2)}

The README must contain:

# Project Title

# Overview
Explain what the project does.

# Features
List major capabilities.

# Architecture
Explain backend/frontend/modules.

# Tech Stack
Mention all technologies detected.

# Project Structure
Explain important folders.

# Installation

# Configuration

# Usage

# Workflow
Explain how data flows through the system.

# Future Improvements

Rules:
- Use ONLY information explicitly present in the repository context.
- Never infer features from folder names.
- Never assume scalability, performance, security, AI agents, parallel processing, or production readiness unless directly supported by code.
- If evidence is missing, omit the statement.
- Every architecture section must reference actual files or folders.
- Mention technologies only if present in dependencies or source files.
- Prefer under-reporting over hallucinating.

CRITICAL RULES:
- Every claim must be supported by repository context.
- Never invent features.
- Never invent scalability characteristics.
- Never invent security properties.
- Never invent performance claims.
- If information is unavailable, omit it.
- Use only evidence present in repository context.
`;
}