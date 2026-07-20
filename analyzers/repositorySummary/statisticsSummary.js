export function summarizeStatistics(context) {

    return {

        languages:
            context.structure.languages.length,

        frameworks:
            context.project.frameworks.length,

        dependencies:
            context.project.dependencies.length,

        folders:
            context.structure.folders.length

    };

}