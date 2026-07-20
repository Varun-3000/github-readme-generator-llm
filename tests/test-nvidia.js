import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.LLM_API_KEY,
    baseURL: process.env.LLM_BASE_URL
});

async function main() {

    console.log("Testing...");

    const response = await client.chat.completions.create({
        model: process.env.MODEL,
        messages: [
            {
                role: "user",
                content: "Say hello."
            }
        ],
        max_tokens: 20
    });

    console.log(response.choices[0].message.content);
}

main().catch(console.error);