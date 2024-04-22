import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="border-2 border-cyan-500 rounded-md p-6 bg-white shadow-tealBlue mb-9">
      <h2 className="text-3xl font-bold text-teal-500">{repo.name}</h2>
      <p className="text-gray-600 text-sm py-3">{repo.description}</p>
      <a href={repo.html_url} className="text-blue-600 mt-2 block" target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;
