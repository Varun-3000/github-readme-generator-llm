export function analyzeArchitecture(structure) {

    const architecture = [];

    if (structure.folders.includes("backend")) 
    {
        architecture.push({
            name: "Backend Layer",
            evidence: "backend folder"
        });
    }

    if (structure.folders.includes("frontend")) 
    {
        architecture.push({
            name: "Frontend Layer",
            evidence: "frontend folder"
        });
    }

    if (structure.folders.includes("backend/scrapers")) 
    {
        architecture.push({
            name: "Scraper Engine",
            evidence: "backend/scrapers folder"
        });
    }

    if (structure.folders.includes("backend/prompts")) 
    {
        architecture.push({
            name: "LLM Prompt Layer",
            evidence: "backend/prompts folder"
        });
    }

    return architecture;
}