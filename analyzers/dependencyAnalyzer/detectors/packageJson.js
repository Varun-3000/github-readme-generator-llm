export default function packageJsonDetector(files) {

    const dependencies = [];

    if (!files["package.json"]) {
        return dependencies;
    }

    try {

        const pkg =
            JSON.parse(files["package.json"]);

        const sections = [

            pkg.dependencies,

            pkg.devDependencies,

            pkg.peerDependencies,

            pkg.optionalDependencies

        ];

        for (const section of sections) {

            if (!section) continue;

            for (const dependency of Object.keys(section)) {

                dependencies.push({

                    name: dependency,

                    source: "package.json",

                    confidence: 1

                });

            }

        }

    }

    catch {

        return [];

    }

    return dependencies;

}