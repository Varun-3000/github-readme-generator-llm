export function summarizeArchitecture(architecture) {

    return {
        components: architecture.map(a => a.name),
        count: architecture.length
    };

}