export function detectFrameworks(structure, files) {

    const frameworks = [];

    const pyproject = files["pyproject.toml"] || "";

    if (pyproject.includes("fastapi"))
        frameworks.push({
                name: "FastAPI",
                evidence: "fastapi dependency",
            confidence: 1.0
    });

    if (pyproject.includes("flask"))
        frameworks.push({
            name: "Flask",
            evidence: "flask dependency",
            confidence: 1.0
        });

    if (pyproject.includes("django"))
        frameworks.push({
            name: "Django",
            evidence: "django dependency",
            confidence: 1.0
        });

    if (pyproject.includes("langchain")){
        frameworks.push({
            name: "LangChain",
            evidence: "langchain dependency",
            confidence: 1.0
        });
    }

    if (structure.configFiles.includes("vercel.json")) {
        frameworks.push({
            name: "Vercel",
            evidence: "vercel.json",
            confidence: 1.0
        });
    }

    return frameworks;
}