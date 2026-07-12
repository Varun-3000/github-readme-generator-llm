import {
    repositoryPrompt
}
from "../prompts/repositoryPrompt.js";

import {
    askLLM
}
from "../services/llmService.js";

export async function llmAnalyzer(
    context
) {

    const prompt =
        repositoryPrompt(context);

    const response =
        await askLLM(prompt);

    return JSON.parse(response);
}