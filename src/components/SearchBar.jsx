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
      className="border border-yellow-500 rounded py-2 px-10 my-14 bg-black text-white text-base focus:outline-none focus:border-turquoise-500"
    />
  );
};

export default SearchBar;


