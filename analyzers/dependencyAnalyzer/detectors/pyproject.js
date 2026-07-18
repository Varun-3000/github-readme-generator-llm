export default function pyprojectDetector(files) {

    const dependencies = [];

    const content =
        files["pyproject.toml"];

    if (!content) {

        return dependencies;

    }

    const matches =
        content.matchAll(/"([^"]+)>=?/g);

    for (const match of matches) {

        dependencies.push({

            name: match[1],

            source: "pyproject.toml",

            confidence: 1

        });

    }

    return dependencies;

}