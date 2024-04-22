import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserRepos } from '../utils/api';
import RepoCard from '../components/RepoCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const githubUsername = import.meta.env.VITE_GITHUB_USER;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const data = await fetchUserRepos(`${githubUsername}`);
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [`${githubUsername}`]);

  // Get current repositories
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repositories
    .filter((repo) => repo.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstRepo, indexOfLastRepo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search repositories
  const searchRepos = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1); // Reset pagination when searching
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center">
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
          <img src="path/to/github-logo.jpg" alt="GitHub Logo" className="w-8 h-8 mr-2" />
        </a>
        <h1 className="text-2xl font-bold my-4">User Repositories - {githubUsername}</h1>
      </div>

      <SearchBar searchRepos={searchRepos} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentRepos.map((repo) => (
          <Link key={repo.name} to={`/repos/${repo.owner.login}/${repo.name}`}>
            <RepoCard repo={repo} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(repositories.length / reposPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
};

export default Home;
