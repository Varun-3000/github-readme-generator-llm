import axios from "axios";
import { config } from "../config/config.js";

export async function fetchRepository(owner, repo) {

    const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}`,
        {
            headers: {
                Authorization: `Bearer ${config.githubToken}`
            }
        }
    );

    return response.data;
}