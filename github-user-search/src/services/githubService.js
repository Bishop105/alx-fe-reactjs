const axios = require('axios');

const githubService = {
  searchUsers: async ({ username, location, minRepos }) => {
    let query = `type:user`;
    
    if (username) {
      query += `+${username}`;
    }
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data;
  },
};

export default githubService;
