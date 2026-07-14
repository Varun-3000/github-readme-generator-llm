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

    try {
            return JSON.parse(response);
        }
    catch (error) {
            console.error("Failed to parse LLM response",error);
            return {};
    }
}