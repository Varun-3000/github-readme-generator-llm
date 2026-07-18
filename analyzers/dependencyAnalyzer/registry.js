import packageJsonDetector from "./detectors/packageJson.js";
import pyprojectDetector from "./detectors/pyproject.js";
import requirementsDetector from "./detectors/requirements.js";
import pomDetector from "./detectors/pom.js";
import cargoDetector from "./detectors/cargo.js";
import composerDetector from "./detectors/composer.js";
import csprojDetector from "./detectors/csproj.js";
import gemfileDetector from "./detectors/gemfile.js";
import goDetector from "./detectors/go.js";
import gradleDetector from "./detectors/gradle.js";

export default [

    packageJsonDetector,

    pyprojectDetector,

    requirementsDetector,

    pomDetector,

    cargoDetector,

    composerDetector,

    csprojDetector,

    gemfileDetector,

    goDetector,

    gradleDetector

];