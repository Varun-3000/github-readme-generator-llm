export function collectImportantFiles(structure) {

    const files = [
        ...structure.entryPoints,
        ...structure.dependencyFiles,
        ...structure.documentationFiles
    ].filter(
        file =>
            !file.includes("/prompts/")
    );

    if (
        structure.configFiles.includes(
            "vercel.json"
        )
    ) {
        files.push("vercel.json");
    }

    return [...new Set(files)];
}