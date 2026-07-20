#!/usr/bin/env node
import fs from "fs";
import path from "path";

import { buildRepositorySummary } from "./analyzers/repositorySummary/index.js";

import { fetchRepository } from "./collectors/repositoryCollector.js";

import { fetchFileTree } from "./collectors/fileTreeCollector.js";

import { analyzeRepositoryStructure } from "./analyzers/repositoryAnalyzer.js";

import { collectImportantFiles } from "./collectors/importantFilesCollector.js";

import { collectFileContents } from "./collectors/fileContentCollector.js";

import { buildRepositoryContext } from "./analyzers/contextBuilder.js";

import { generateReadme } from "./generators/readmeGenerator.js";

import { analyzeFrameworks } from "./analyzers/frameworkAnalyzer/index.js";

import { analyzeDependencies } from "./analyzers/dependencyAnalyzer/index.js";

import { analyzeArchitecture } from "./analyzers/architectureAnalyzer.js";

import { detectProjectType } from "./analyzers/projectTypeAnalyzer/index.js";
import { analyzeFunctions } from "./analyzers/functionAnalyzer.js";

import { analyzeEnvironmentVariables } from "./analyzers/environmentAnalyzer.js";

import { analyzeDatabases } from "./analyzers/databaseAnalyzer.js";

import { analyzeDeployment} from "./analyzers/deploymentAnalyzer.js";

async function main() {

    // const owner = "KalyanM45";
    // const repo = "CareerCrawl";
    const outputDir = "./output";
    if (!fs.existsSync(outputDir)) 
    {
        fs.mkdirSync(outputDir);
    }
    const owner = process.argv[2];
    const repo = process.argv[3];

    if (!owner || !repo) {
        console.log(`
    Usage: 
            node index.js <owner> <repo>"
    Examples:
            node index.js facebook react
            node index.js microsoft vscode
            node index.js vercel next.js
        `);

        process.exit(1);
    }

    console.log(`Analyzing ${owner}/${repo}...`);

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

    console.log(Object.keys(fileContents));

    const dependencies = analyzeDependencies(fileContents);

    const frameworkAnalysis = analyzeFrameworks(dependencies,structure);
    const frameworks = frameworkAnalysis.frameworks;
    const runtime = frameworkAnalysis.runtime;

    const architecture = analyzeArchitecture(structure);

    const projectType = detectProjectType(repository,frameworks,runtime,structure);

    const functions = analyzeFunctions(fileContents);

    const environmentVariables = analyzeEnvironmentVariables(fileContents);

    const databases = analyzeDatabases(dependencies);

    const deployment = analyzeDeployment(structure);

    const repositoryContext = buildRepositoryContext(
        repository,
        structure,
        frameworks,
        runtime,
        dependencies,
        architecture,
        projectType,
        fileContents,
        functions,
        environmentVariables,
        databases,
        deployment
    );

    const repositorySummary = buildRepositorySummary(repositoryContext);
  
    const llmContext = 
    {
        repository: repositoryContext.repository,

        project: repositoryContext.project,

        structure: repositoryContext.structure,

        summary: repositorySummary

    };

    fs.writeFileSync(
        path.join(outputDir,"repository-context.full.json"),
        JSON.stringify(repositoryContext,null,2)
    );

    fs.writeFileSync(
        path.join(outputDir,"repository-context.json"),
        JSON.stringify(llmContext,null,2)
    );

    console.log(
        JSON.stringify(
            repositoryContext,
            null,
            2
        )
    );

    const readme = await generateReadme(llmContext);

    //console.log(readme);
    fs.writeFileSync( path.join(outputDir,"README.generated.md"),readme);

    const confidenceReport = 
    {   projectType,

        runtime,

        frameworks,

        dependencies,

        architecture,

        deployment,

        databases,

        statistics: {

            frameworksDetected:
                frameworks.length,

            dependenciesDetected:
                dependencies.length,

            architectureComponents:
                architecture.length,

            functionsDetected:
                functions.length,

            environmentVariables:
                environmentVariables.length
        }

    };

    fs.writeFileSync(
        path.join(outputDir,"confidence-report.json"),
        JSON.stringify(confidenceReport,null,2)
    );
            
        console.log("\n✅ README generated successfully.\n");
        
        console.log("Generated files:");
        
        console.log("output/README.generated.md");
        
        console.log("output/repository-context.json");
        
        console.log("output/confidence-report.json");
}

main();