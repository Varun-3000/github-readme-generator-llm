export function analyzeArchitecture(structure) {

    const architecture = [];

    if (structure.folders.includes("backend")) 
    {
        architecture.push({
            name: "Backend Layer",
            evidence: "backend/",
            confidence: 1.0
        });
    }

    if (structure.folders.includes("frontend")) 
    {
        architecture.push({
            name: "Frontend Layer",
            evidence: "frontend/",
            confidence: 1.0
        });
    }

    if (structure.folders.includes("backend/scrapers")) 
    {
        architecture.push({
            name: "Scraper Engine",
            evidence: "backend/scrapers/",
            confidence: 1.0
        });
    }

    if (structure.folders.includes("backend/prompts")) 
    {
        architecture.push({
            name: "LLM Prompt Layer",
            evidence: [
                "backend/prompts/Classify_Category.md",
                "backend/prompts/Classify_DataJob.md"
            ] ,            
            confidence: 1.0
        });
    }

    return architecture;
}