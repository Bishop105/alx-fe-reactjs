import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch user data
export const fetchGitHubUser = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/${username}`, {
            headers: {
                Authorization: `token ${apiKey}`, // Use the API key if necessary
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error for further handling
    }
};
