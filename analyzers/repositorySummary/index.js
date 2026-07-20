import { summarizeDependencies } from "./dependencySummary.js";
import { summarizeArchitecture } from "./architectureSummary.js";
import { summarizeDocumentation } from "./documentationSummary.js";
import { summarizeStatistics } from "./statisticsSummary.js";

export function buildRepositorySummary(context) {

    return {

        dependencies:
            summarizeDependencies(
                context.project.dependencies
            ),

        architecture:
            summarizeArchitecture(
                context.project.architecture
            ),

        documentation:
            summarizeDocumentation(
                context.structure
            ),

        statistics:
            summarizeStatistics(
                context
            )

    };

}