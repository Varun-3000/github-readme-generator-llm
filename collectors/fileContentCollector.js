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

            contents[file] =
                content
                    .split("\n")
                    .slice(0, 100)
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