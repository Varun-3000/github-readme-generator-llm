export function removeDuplicateDependencies(dependencies) {

    const seen = new Set();

    return dependencies.filter(dependency => {

        if (seen.has(dependency.name)) {

            return false;

        }

        seen.add(dependency.name);

        return true;

    });

}