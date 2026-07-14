export function analyzeFunctions(files) {

    const functions = [];

    const regex =
        /def\s+([a-zA-Z0-9_]+)\s*\(/g;

    for (const [path, content]
        of Object.entries(files)) {

        let match;

        while (
            (match = regex.exec(content))
            !== null
        ) {
            functions.push({
                name: match[1],
                file: path
            });
        }
    }

    return functions;
}