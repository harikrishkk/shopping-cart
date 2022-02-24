import React, { useState, useEffect } from 'react';

const SearchBar = ({ onMovieFilter }) => {
  const [search, setSearch] = useState('');
  const onSearch = (val) => {
    setSearch(val);
  };
  useEffect(() => {
    onMovieFilter(search);
  }, [search, onMovieFilter]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Filter Movies"
        className="input input-bordered input-primary w-full max-w-xs mb-8"
      ></input>
    </div>
  );
};

export default SearchBar;
