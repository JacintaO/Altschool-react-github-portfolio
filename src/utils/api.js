const BASE_URL = 'https://api.github.com';
const AUTH_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchUserRepos = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`, {
    headers: {
      Authorization: `token ${AUTH_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  return data;
};

export const fetchSingleRepo = async (owner, repoName) => {
  const response = await fetch(`${BASE_URL}/repos/${owner}/${repoName}`, {
    headers: {
      Authorization: `token ${AUTH_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch repository details');
  }
  const data = await response.json();
  return data;
};
