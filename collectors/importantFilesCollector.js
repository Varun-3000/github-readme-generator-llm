export function collectImportantFiles(structure) {

    const files = [
        ...structure.entryPoints,
        ...structure.dependencyFiles,

       // "README.md",
        "backend/config/config.py",

        "backend/prompts/Classify_Category.md",
        "backend/prompts/Classify_DataJob.md",

        "backend/scrapers/workday.py",
        "backend/scrapers/eightfold.py",

        "backend/utils/save_output.py",
        "backend/utils/cache.py",

        "vercel.json"
    ];

    return [...new Set(files)];
}