export function mergeFrameworks(...frameworkLists) {

    const merged = new Map();

    frameworkLists.flat().forEach(framework => {

        if (!merged.has(framework.name)) {

            merged.set(framework.name, {
                name: framework.name,
                confidence: framework.confidence,
                evidence: [framework.evidence]
            });

            return;
        }

        const existing = merged.get(framework.name);

        existing.confidence = Math.max(
            existing.confidence,
            framework.confidence
        );

        existing.evidence.push(framework.evidence);
    });

    return [...merged.values()];
}