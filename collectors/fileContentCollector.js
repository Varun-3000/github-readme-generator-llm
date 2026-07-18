import { getFileContent }
from "../services/githubService.js";

export async function collectFileContents(
    owner,
    repo,
    files
) {

    const contents = {};

    for (const file of files) {

        try {
            if (file.endsWith(".lock")) {
                continue;
            }
            const content =
                await getFileContent(
                    owner,
                    repo,
                    file
                );
            const limit =
                file.endsWith("main.py") ||
                file.endsWith("app.py") ||
                file.endsWith("server.py") ||
                file.endsWith("index.js") ||
                file.endsWith("main.js")
                ? 400
                : file.includes("/prompts/")
                ? 500
                : file.includes("/scrapers/")
                ? 250
                : file.includes("/utils/")
                ? 200
                : 100;
            contents[file] =
                content
                    .split("\n")
                    .slice(0, limit)
                    .join("\n");

            console.log(
                "Fetched:",
                file
            );

        }

        catch(error) {

            console.log(
                "Skipping:",
                file
            );
        }
    }

    return contents;
}