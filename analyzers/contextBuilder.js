export function buildRepositoryContext(
    repository,
    structure,
    frameworks,
    dependencies,
    architecture,
    projectType,
    files
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
            type: projectType,
            frameworks,
            dependencies,
            architecture
        },

        structure: {
            languages: structure.languages,
            entryPoints: structure.entryPoints,
            configFiles: structure.configFiles,
            dependencyFiles: structure.dependencyFiles,
            documentationFiles: structure.documentationFiles,
            folders: structure.folders
        },

        files

    };
}