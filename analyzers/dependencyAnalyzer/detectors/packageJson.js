export default function packageJsonDetector(files) {

    const dependencies = [];

    for (const [path, content] of Object.entries(files)) {

        if (!path.endsWith("package.json")) {
            continue;
        }

        try {

            const pkg = JSON.parse(content);

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
                        source: path,
                        confidence: 1

                    });

                }

            }

        } catch {
            continue;
        }

    }

    return dependencies;
}