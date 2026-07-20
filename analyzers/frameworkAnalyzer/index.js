import { detectFromDependencies } from "./dependencyDetector.js";
import { detectRuntime } from "./runtime.js";
import { mergeFrameworks } from "./utils.js";

export function analyzeFrameworks(project) {

    const dependencyFrameworks =
        detectFromDependencies(project.dependencies);

    const runtime =
        detectRuntime(project.structure);

    return {

        frameworks: mergeFrameworks(
            dependencyFrameworks
        ),

        runtime
    };
}