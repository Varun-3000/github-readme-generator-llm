export function analyzeEnvironmentVariables(files) {

    const variables = [];

    for (const [path, content] of Object.entries(files)) {

        if (!content) continue;

        const patterns = [
            /os\.getenv\(["']([^"']+)["']\)/g,
            /process\.env\.([A-Z0-9_]+)/g,
            /process\.env\[['"]([^'"]+)['"]\]/g
        ];

        for (const pattern of patterns) {

            const matches =
                content.matchAll(pattern);

            for (const match of matches) {

                variables.push({
                    name: match[1],
                    file: path,
                    confidence: 1.0
                });
            }
        }
    }

    return [
        ...new Map(
            variables.map(
                v => [v.name, v]
            )
        ).values()
    ];
}