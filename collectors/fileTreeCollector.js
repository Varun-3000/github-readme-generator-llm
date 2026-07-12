import axios from "axios";
import { config } from "../config/config.js";

export async function fetchFileTree(
    owner,
    repo,
    branch
) {

const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`,
    {
        headers: {
            Authorization: `Bearer ${config.githubToken}`
        }
    }
);

console.log("Git tree response keys:", Object.keys(response.data));
console.log("Tree size:", response.data.tree?.length);
    return response.data.tree;
}