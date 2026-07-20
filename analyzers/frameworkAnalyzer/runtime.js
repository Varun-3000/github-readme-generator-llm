export function detectRuntime(structure = {}) {

    const dependencyFiles = structure.dependencyFiles || [];

    if (dependencyFiles.some(f => f.endsWith("package.json"))) {
        return {
            name: "Node.js",
            confidence: 1,
            evidence: "package.json"
        };
    }

    if (
        dependencyFiles.some(f => f.endsWith("pyproject.toml")) ||
        dependencyFiles.some(f => f.endsWith("requirements.txt"))
    ) {
        return {
            name: "Python",
            confidence: 1,
            evidence: "Python dependency file"
        };
    }

    if (dependencyFiles.some(f => f.endsWith("pom.xml"))) {
        return {
            name: "Java",
            confidence: 1,
            evidence: "pom.xml"
        };
    }

    if (dependencyFiles.some(f => f.endsWith("Cargo.toml"))) {
        return {
            name: "Rust",
            confidence: 1,
            evidence: "Cargo.toml"
        };
    }

    return null;
}