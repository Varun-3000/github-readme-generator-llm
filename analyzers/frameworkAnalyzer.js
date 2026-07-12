export function detectFrameworks(structure, files) {

    const frameworks = [];

    const pyproject = files["pyproject.toml"] || "";

    if (pyproject.includes("fastapi"))
        frameworks.push("FastAPI");

    if (pyproject.includes("flask"))
        frameworks.push("Flask");

    if (pyproject.includes("django"))
        frameworks.push("Django");

    if (pyproject.includes("langchain"))
        frameworks.push("LangChain");

    if (structure.configFiles.includes("vercel.json"))
        frameworks.push("Vercel");

    return frameworks;
}