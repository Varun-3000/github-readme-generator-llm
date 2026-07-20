export function summarizeDependencies(dependencies) {

    const unique = [...new Set(dependencies.map(d => d.name))];

    return {
        count: unique.length,
        top: unique.slice(0, 25)
    };

}