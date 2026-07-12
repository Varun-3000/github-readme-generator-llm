import dotenv from "dotenv";

dotenv.config();

export const config = {
    githubToken: process.env.GITHUB_TOKEN,
    llmApiKey: process.env.LLM_API_KEY,
    llmBaseUrl: process.env.LLM_BASE_URL,
    model: process.env.MODEL
};