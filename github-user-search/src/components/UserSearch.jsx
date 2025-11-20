import React, { useState } from 'react';
import { fetchGitHubUser } from '../services/githubService';

const UserSearch = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setError('');
        try {
            const data = await fetchGitHubUser(username);
            setUserData(data);
        } catch (err) {
            setError('User not found or an error occurred.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a GitHub user..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default UserSearch;
