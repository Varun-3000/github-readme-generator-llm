export function detectProjectType(
    repository,
    dependencies
) {

    if (
        dependencies.includes(
            "langchain"
        )
    ) {
        return "LLM Application";
    }

    if (
        dependencies.includes(
            "fastapi"
        )
    ) {
        return "API Service";
    }

    return "Software Project";
}