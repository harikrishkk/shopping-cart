import React, { useEffect, useState } from 'react';
import MovieCard from '@components/MovieCard';
import SearchBar from '@shared/SearchBar';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

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

      <TransitionGroup className="flex flex-wrap -m-4">
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie) => {
            return (
              <CSSTransition key={movie.id} classNames="fade" timeout={300}>
                <MovieCard movie={movie} onMovieSelect={handleMovieSelect} />
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </>
  );
};

export default FilterMovieDisplay;
