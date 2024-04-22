import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ErrorBoundary';
import { fetchUserRepos } from '../utils/api';
import RepoCard from '../components/RepoCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const data = await fetchUserRepos('JacintaO');
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

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
      <h1 className="text-2xl font-bold my-4">User Repositories</h1>
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
