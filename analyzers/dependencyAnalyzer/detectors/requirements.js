export default function requirementsDetector(files) {

    const dependencies = [];

    for (const [path, content] of Object.entries(files)) {

        if (!path.endsWith("requirements.txt")) {
            continue;
        }

        const lines = content.split("\n");

        for (const line of lines) {

            const dependency = line.trim();

            if (
                dependency &&
                !dependency.startsWith("#")
            ) {

                dependencies.push({

                    name: dependency.split(/[><=]/)[0],

                    source: path,

                    confidence: 1

                });

            }

        }

    }

    return dependencies;

}