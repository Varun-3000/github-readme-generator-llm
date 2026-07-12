export function analyzeArchitecture(structure) {

    const architecture = [];

    if (
        structure.folders.includes(
            "backend"
        )
    ) {
        architecture.push(
            "Backend Layer"
        );
    }

    if (
        structure.folders.includes(
            "frontend"
        )
    ) {
        architecture.push(
            "Frontend Layer"
        );
    }

    if (
        structure.folders.includes(
            "backend/scrapers"
        )
    ) {
        architecture.push(
            "Scraper Engine"
        );
    }

    if (
        structure.folders.includes(
            "backend/prompts"
        )
    ) {
        architecture.push(
            "LLM Prompt Layer"
        );
    }

    return architecture;
}