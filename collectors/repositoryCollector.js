import { getRepository }
from "../services/githubService.js";

export async function fetchRepository(
    owner,
    repo
) {

    const metadata =
        await getRepository(owner, repo);

    return {
        name: metadata.name,
        owner: metadata.owner.login,
        description: metadata.description,
        language: metadata.language,
        stars: metadata.stargazers_count,
        forks: metadata.forks_count,
        license: metadata.license?.name,
        topics: metadata.topics || [],
        defaultBranch:
            metadata.default_branch
    };
}