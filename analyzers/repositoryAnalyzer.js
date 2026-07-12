export function analyzeRepositoryStructure(tree) {

    const analysis = {
        languages: new Set(),
        configFiles: [],
        entryPoints: [],
        dependencyFiles: [],
        documentationFiles: [],
        folders: new Set()
    };

    for (const file of tree) {

        const path = file.path;

        //------------------------------------------------
        // Folders
        //------------------------------------------------

        if (file.type === "tree") {
            analysis.folders.add(path);
            continue;
        }

        //------------------------------------------------
        // Language detection
        //------------------------------------------------

        if (path.endsWith(".py"))
            analysis.languages.add("Python");

        if (path.endsWith(".js"))
            analysis.languages.add("JavaScript");

        if (path.endsWith(".java"))
            analysis.languages.add("Java");

        if (path.endsWith(".ts"))
            analysis.languages.add("TypeScript");

        //------------------------------------------------
        // Dependencies
        //------------------------------------------------

        if (
            path.endsWith("requirements.txt") ||
            path.endsWith("package.json") ||
            path.endsWith("pom.xml") ||
            path.endsWith("pyproject.toml") ||
            path.endsWith("uv.lock")
        ) {
            analysis.dependencyFiles.push(path);
        }

        //------------------------------------------------
        // Config
        //------------------------------------------------

        if (
            path.includes("config") ||
            path.endsWith(".env.example") ||
            path.endsWith("vercel.json")
        ) {
            analysis.configFiles.push(path);
        }

        //------------------------------------------------
        // Documentation
        //------------------------------------------------

        if (
            path.toLowerCase().includes("readme") ||
            path.endsWith(".md")
        ) {
            analysis.documentationFiles.push(path);
        }

        //------------------------------------------------
        // Entrypoints
        //------------------------------------------------

        if (
            path === "main.py" ||
            path === "app.py" ||
            path === "index.js" ||
            path === "server.js"
        ) {
            analysis.entryPoints.push(path);
        }
    }

    return {
        ...analysis,
        languages: [...analysis.languages],
        folders: [...analysis.folders]
    };
}