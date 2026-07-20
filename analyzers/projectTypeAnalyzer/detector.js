import { PROJECT_TYPES } from "./registry.js";

export function detectProjectType(
    repository,
    frameworks,
    runtime,
    structure
) {

    const frameworkNames =
        frameworks.map(f => f.name);

    for (const project of PROJECT_TYPES) {

        //-------------------------------------------------
        // Framework match
        //-------------------------------------------------

        if (project.frameworks) {

            const matched =
                project.frameworks.filter(f =>
                    frameworkNames.includes(f)
                );

            if (matched.length > 0) {

                return {

                    type: project.type,

                    confidence: 0.95,

                    evidence: matched.map(x =>
                        `${x} framework`
                    )

                };
            }

        }

        //-------------------------------------------------
        // Repository topics
        //-------------------------------------------------

        if (project.repoTopics) {

            const matched =
                (repository.topics || []).filter(topic =>
                    project.repoTopics.includes(topic)
                );

            if (matched.length > 0) {

                return {

                    type: project.type,

                    confidence: 0.9,

                    evidence: matched

                };

            }

        }

    }

    //-----------------------------------------------------
    // Runtime fallback
    //-----------------------------------------------------

    if (runtime?.name === "Node.js") {

        return {

            type: "Node.js Project",

            confidence: 0.7,

            evidence: [
                "Node.js runtime"
            ]

        };

    }

    if (runtime?.name === "Python") {

        return {

            type: "Python Application",

            confidence: 0.7,

            evidence: [
                "Python runtime"
            ]

        };

    }

    return {

        type: "Software Project",

        confidence: 0.5,

        evidence: []

    };

}