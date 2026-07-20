export function collectImportantFiles(structure) {

    const files = [

        ...structure.entryPoints,

        ...structure.dependencyFiles,

        ...structure.configFiles,

        ...structure.documentationFiles

    ];

    return [...new Set(files)];
}