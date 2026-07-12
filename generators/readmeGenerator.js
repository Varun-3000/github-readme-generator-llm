import { generateCompletion }
from "../services/llmService.js";

import { buildReadmePrompt }
from "../prompts/readmePrompt.js";

export async function generateReadme(
    repositoryContext
) {

    const prompt =
        buildReadmePrompt(
            repositoryContext
        );

    return await generateCompletion(
        prompt
    );
}