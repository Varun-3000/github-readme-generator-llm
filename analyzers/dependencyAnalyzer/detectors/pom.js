export default function pomDetector(files) {

    const dependencies = [];

    for (const [path, content] of Object.entries(files)) {

        if (!path.endsWith("pom.xml")) {
            continue;
        }

        const matches = content.matchAll(
            /<artifactId>(.*?)<\/artifactId>/g
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