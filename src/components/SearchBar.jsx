import React, { useState } from 'react';

const SearchBar = ({ searchRepos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    searchRepos(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search repositories..."
      value={searchTerm}
      onChange={handleChange}
      className="border border-gray-300 rounded px-3 py-1 bg-white text-black text-base focus:outline-none focus:border-turquoise-500"
    />
  );
};

export default SearchBar;


