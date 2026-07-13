import OpenAI from "openai";
import { config } from "../config/config.js";

const client = new OpenAI({
    apiKey: config.llmApiKey,
    baseURL: config.llmBaseUrl
});

export async function generateCompletion(prompt) {

    const response =
        await client.chat.completions.create({
            model: config.model,
            messages: [
                {
                    role: "system",
                    content: "You are an expert software architect and technical writer."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.3,
            max_tokens: 6000
        });
    const content = response.choices[0].message.content;

    console.log("Generated tokens:", content.length);

    return content;

    //return response.choices[0].message.content;
}