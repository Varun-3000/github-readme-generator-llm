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
    catch {
        try {

            const jsonMatch = response.match(/\{[\s\S]*\}/);
            if (
                jsonMatch
            ) {
                return JSON.parse(jsonMatch[0]);
            }

        } catch {}

        return {};
    }
}