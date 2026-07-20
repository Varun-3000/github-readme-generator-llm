// export function detectFrameworks(
//     dependencies,
//     structure
// ) {

//     const frameworks = [];

//     const addFramework = (
//         dependencyName,
//         frameworkName
//     ) => {

//         if (
//             dependencies.some(
//                 dep =>
//                     dep.name.toLowerCase() ===
//                     dependencyName.toLowerCase()
//             )
//         ) {
//             frameworks.push({
//                 name: frameworkName,
//                 evidence:
//                     `${dependencyName} dependency`,
//                 confidence: 1.0
//             });
//         }
//     };

//     addFramework(
//         "fastapi",
//         "FastAPI"
//     );

//     addFramework(
//         "flask",
//         "Flask"
//     );

//     addFramework(
//         "django",
//         "Django"
//     );

//     addFramework(
//         "langchain",
//         "LangChain"
//     );

//     if (
//         structure.configFiles.includes(
//             "vercel.json"
//         )
//     ) {
//         frameworks.push({
//             name: "Vercel",
//             evidence: "vercel.json",
//             confidence: 1.0
//         });
//     }

//     return frameworks;
// }