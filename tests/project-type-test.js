import { detectProjectType } from "../analyzers/projectTypeAnalyzer/index.js";

const repository = {
    topics: []
};

const frameworks = [
    {
        name: "React"
    },
    {
        name: "Next.js"
    }
];

const runtime = {
    name: "Node.js"
};

const structure = {};

console.log(
    detectProjectType(
        repository,
        frameworks,
        runtime,
        structure
    )
);