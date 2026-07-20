import { detectFromDependencies } from "../analyzers/frameworkAnalyzer/dependencyDetector.js";

const dependencies = [
    { name: "react" },
    { name: "next" },
    { name: "openai" },
    { name: "langchain" }
];

console.log(detectFromDependencies(dependencies));