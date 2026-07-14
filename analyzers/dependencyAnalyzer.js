export function analyzeDependencies(files) {

    const pyproject =
        files["pyproject.toml"] || "";

    const dependencies = [];

    const regex = /"([^"]+)"/g;

    let match;

    while ((match = regex.exec(pyproject)) !== null) {

        dependencies.push({
            name: match[1],
            source: "pyproject.toml",
            confidence: 1.0
        });
    }

    return dependencies;
}