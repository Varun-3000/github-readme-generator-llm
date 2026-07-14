export function detectProjectType(
    repository,
    dependencies
) {

    if (dependencies.some(dep => dep.name === "langchain")) {
            return {
                    type: "LLM Application",
                    confidence: 0.8,
                    evidence: ["langchain dependency"]
                };
    }

    if (dependencies.some(dep => dep.name === "fastapi")) {
            return {
                    type: "API Service",
                    confidence: 0.8,
                    evidence: ["fastapi dependency"]
                };
    }

    return {
        type: "Software Project",
        confidence: 0.5,
        evidence: []
    };
}