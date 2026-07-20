export function summarizeDocumentation(structure) {

    return {

        readmePresent:
            structure.documentationFiles.some(f =>
                f.toLowerCase().includes("readme")
            ),

        documentationFiles:
            structure.documentationFiles.length

    };

}