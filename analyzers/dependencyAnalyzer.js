export function analyzeDependencies(files) {

    const pyproject = files["pyproject.toml"] || "";

    const dependencies = [];

    const regex =
        /"([^"]+?)>=/g;

    let match;

    while ((match = regex.exec(pyproject)) !== null) {
        dependencies.push(match[1]);
    }

    return dependencies;
}