export function buildRepositoryContext(
    repository,
    structure,
    frameworks,
    runtime,
    dependencies,
    architecture,
    projectType,
    summary,
    functions,
    environmentVariables,
    databases,
    deployment
) {

    return {

        repository: {
            name: repository.name,
            owner: repository.owner,
            description: repository.description,
            language: repository.language,
            stars: repository.stars,
            forks: repository.forks,
            license: repository.license,
            topics: repository.topics
        },

        project: {
            type: projectType.type,
            runtime,
            frameworks,
            dependencies,
            architecture,
            functions,
            environmentVariables,
            databases,
            deployment,
            confidence: projectType.confidence,
            evidence: projectType.evidence
        },

        structure: {
            languages: structure.languages,
            entryPoints: structure.entryPoints,
            configFiles: structure.configFiles,
            dependencyFiles: structure.dependencyFiles,
            documentationFiles: structure.documentationFiles,
            folders: structure.folders
        },
        summary
    };
}