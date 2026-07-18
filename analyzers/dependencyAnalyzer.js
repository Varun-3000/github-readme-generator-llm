// export function analyzeDependencies(files) {

//     const pyproject =
//         files["pyproject.toml"] || "";

//     const dependencies = [];

//     const dependencySection =
//         pyproject.match(
//             /dependencies\s*=\s*\[(.*?)\]/s
//         );

//     if (!dependencySection) {
//         return dependencies;
//     }

//     const matches =
//         dependencySection[1]
//             .match(/"([^"]+)"/g) || [];

//     for (const dependency of matches) {

//         const cleanName =
//             dependency
//                 .replace(/"/g, "")
//                 .replace(/[<>=!~].*/, "")
//                 .trim();

//         dependencies.push({
//             name: cleanName,
//             source: "pyproject.toml",
//             confidence: 1.0
//         });
//     }

//     return dependencies;
// }