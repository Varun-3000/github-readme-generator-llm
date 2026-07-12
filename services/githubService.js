import axios from "axios";
import { config } from "../config/config.js";

const github = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `Bearer ${config.githubToken}`
    }
});

export async function getRepository(owner, repo) {

    const response = await github.get(
        `/repos/${owner}/${repo}`
    );

    return response.data;
}

export async function getFileTree(owner, repo, branch) {

    const response = await github.get(
        `/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
    );

    return response.data.tree;
}

export async function getFileContent(
    owner,
    repo,
    path
) {

    const response = await github.get(
        `/repos/${owner}/${repo}/contents/${path}`
    );

    return Buffer.from(
        response.data.content,
        "base64"
    ).toString("utf8");
}