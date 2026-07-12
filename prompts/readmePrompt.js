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
- Do not invent technologies.
- Use proper markdown.
- Use code blocks when necessary.
- Be concise but detailed.
`;
}