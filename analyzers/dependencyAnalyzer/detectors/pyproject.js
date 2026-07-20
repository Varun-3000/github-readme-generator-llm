export default function pyprojectDetector(files) {

    const dependencies = [];

    for (const [path, content] of Object.entries(files)) {

        if (!path.endsWith("pyproject.toml")) {
            continue;
        }

        const matches = content.matchAll(
            /"([^"]+)>=?/g
        );

        for (const match of matches) {

            dependencies.push({

                name: match[1],

                source: path,

                confidence: 1

            });

        }

    }

    return dependencies;

}