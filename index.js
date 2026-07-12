import { fetchRepository }
from "./collectors/repositoryCollector.js";

import { fetchFileTree }
from "./collectors/fileTreeCollector.js";

import { analyzeRepositoryStructure }
from "./analyzers/repositoryAnalyzer.js";

import { collectImportantFiles }
from "./collectors/importantFilesCollector.js";

import { collectFileContents }
from "./collectors/fileContentCollector.js";

import { buildRepositoryContext }
from "./analyzers/contextBuilder.js";

import { generateReadme }
from "./generators/readmeGenerator.js";

import { detectFrameworks }
from "./analyzers/frameworkAnalyzer.js";

import { analyzeDependencies }
from "./analyzers/dependencyAnalyzer.js";

import { analyzeArchitecture }
from "./analyzers/architectureAnalyzer.js";

import { detectProjectType }
from "./analyzers/projectTypeAnalyzer.js";

async function main() {

    const owner = "KalyanM45";
    const repo = "CareerCrawl";

    const repository =
        await fetchRepository(
            owner,
            repo
        );

    const tree =
        await fetchFileTree(
            owner,
            repo,
            repository.defaultBranch
        );

    const structure =
        analyzeRepositoryStructure(
            tree
        );

    const importantFiles =
        collectImportantFiles(
            structure
        );

    const fileContents =
        await collectFileContents(
            owner,
            repo,
            importantFiles
        );

    const frameworks =  detectFrameworks( structure, fileContents);

    const dependencies = analyzeDependencies(fileContents);

    const architecture = analyzeArchitecture(
        structure
    );

    const projectType = detectProjectType(
        repository,
        dependencies
    );

    const context = buildRepositoryContext(
        repository,
        structure,
        frameworks,
        dependencies,
        architecture,
        projectType,
        fileContents
    );

    console.log(
        JSON.stringify(
            context,
            null,
            2
        )
    );


    const readme =
        await generateReadme(
            context
        );

    console.log(readme);
}

main();