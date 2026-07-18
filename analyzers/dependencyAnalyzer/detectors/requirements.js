export default function requirementsDetector(files) {

    const dependencies = [];

    const content =
        files["requirements.txt"];

    if (!content) {

        return dependencies;

    }

    const lines =
        content.split("\n");

    for (const line of lines) {

        const dependency =
            line.trim();

        if (
            dependency &&
            !dependency.startsWith("#")
        ) {

            dependencies.push({

                name:
                    dependency.split(/[><=]/)[0],

                source:
                    "requirements.txt",

                confidence: 1

            });

        }

    }

    return dependencies;

}