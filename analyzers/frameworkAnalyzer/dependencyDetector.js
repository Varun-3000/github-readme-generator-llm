import { FRAMEWORKS } from "./registry.js";

export function detectFromDependencies(dependencies = []) {

    const dependencySet = new Set(
        dependencies.map(d => d.name.toLowerCase())
    );

    const detected = [];

    for (const framework of FRAMEWORKS) {

        const matched = framework.dependencies?.find(dep =>
            dependencySet.has(dep.toLowerCase())
        );

        if (!matched)
            continue;

        detected.push({
            name: framework.name,
            confidence: 1,
            evidence: `${matched} dependency`
        });
    }

    return detected;
}