export function analyzeDeployment(
    structure
) {

    const deployment = [];

    if (
        structure.configFiles.includes(
            "vercel.json"
        )
    ) {

        deployment.push({
            platform: "Vercel",
            evidence: "vercel.json"
        });
    }

    if (
        structure.configFiles.includes(
            "Dockerfile"
        )
    ) {

        deployment.push({
            platform: "Docker",
            evidence: "Dockerfile"
        });
    }

    if (
        structure.folders.includes(
            ".github/workflows"
        )
    ) {

        deployment.push({
            platform: "GitHub Actions",
            evidence: ".github/workflows"
        });
    }

    return deployment;
}