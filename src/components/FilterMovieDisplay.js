import React, { useEffect, useState } from 'react';
import MovieCard from '@components/MovieCard';
import SearchBar from '@shared/SearchBar';

const FilterMovieDisplay = ({ movies, handleMovieSelect }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const filtered = movies.filter((m) =>
      m.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, filter]);

  const onMovieFilter = (searchVal) => {
    setFilter(searchVal);
  };
  return (
    <>
      <SearchBar onMovieFilter={onMovieFilter} />
      <div className="flex flex-wrap -m-4">
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieSelect={handleMovieSelect}
              />
            );
          })}
      </div>
    </>
  );
};

export default FilterMovieDisplay;
