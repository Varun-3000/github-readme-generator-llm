export default function pomDetector(files) {

    const dependencies = [];

    const content =
        files["pom.xml"];

    if (!content) {

        return dependencies;

    }

    const matches =
        content.matchAll(
            /<artifactId>(.*?)<\/artifactId>/g
        );

    for (const match of matches) {

        dependencies.push({

            name: match[1],

            source: "pom.xml",

            confidence: 1

        });

    }

    return dependencies;

}