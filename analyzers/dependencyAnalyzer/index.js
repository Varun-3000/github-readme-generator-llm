import detectors from "./registry.js";

import { removeDuplicateDependencies} from "./utils.js";

export function analyzeDependencies(files) {

    let dependencies = [];

    for (const detector of detectors) {

        dependencies.push(

            ...detector(files)

        );

    }

    return removeDuplicateDependencies(
        dependencies
    );

}