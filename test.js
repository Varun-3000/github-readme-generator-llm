import { generateCompletion }
from "./services/llmService.js";

const response = await generateCompletion(
    "Explain LangChain in 3 sentences."
);

console.log(response);