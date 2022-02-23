import React, { useState, useEffect, useCallback } from 'react';
import NotificationBar from '@shared/NotificationBar';
import MovieCard from '@components/MovieCard';
import Banner from '@shared/Banner';
import SearchBar from '@shared/SearchBar';
import LuckyDraw from '@components/LuckyDraw';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllMovies,
  selectAllMovies,
  selectMovieLoadingStatus,
  selectAllMoviesLoaded,
  selectMovieById,
  selectInitialLoad,
  paginateMovies,
  setCurrentMovieId,
} from '@state/movies/moviesSlice';

const Home = () => {
  // Local state
  const [movieId, setMovieId] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [likes, setLikes] = useState(458);

  // Selectors
  const movies = useSelector(selectAllMovies);
  const isLoading = useSelector(selectMovieLoadingStatus);
  const allMoviesLoaded = useSelector(selectAllMoviesLoaded);
  const selectedMovie = useSelector(selectMovieById);
  const isInitialLoad = useSelector(selectInitialLoad);

  // Action dispatcher
  const dispatch = useDispatch();

  const handleMovieSelect = (movie) => {
    setMovieId(movie.id);
  };

  const handleClose = () => {
    setMovieId(null);
  };

  const joinContest = () => {
    setLikes((like) => like + 1);
  };

  const loadMore = () => {
    dispatch(paginateMovies());
  };
  const onMovieFilter = (searchVal) => {
    setFilter(searchVal);
  };

  // For current movie selection
  useEffect(() => {
    dispatch(setCurrentMovieId(movieId));
  }, [movieId]);

  useEffect(() => {
    const filtered = movies.filter((m) =>
      m.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, filter]);

  // For loading all movies
  useEffect(() => {
    if (!isInitialLoad) {
      return;
    }
    dispatch(loadAllMovies());
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <Banner />
        <div className="container px-5 py-12 mx-auto">
          <h2 className="text-2xl mb-8 font-bold"> Movies </h2>
          {selectedMovie && (
            <NotificationBar
              onClose={handleClose}
              message={`You selected → ${selectedMovie.title}`}
            />
          )}
          {isLoading && (
            <h1 className="btn bg-transparent text-black border-transparent loading">
              Loading...
            </h1>
          )}
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
          <div className="my-8 flex align-center justify-center">
            <button
              disabled={allMoviesLoaded}
              onClick={loadMore}
              className="btn btn-sm"
            >
              Load More
            </button>
          </div>
          <div className="divider"></div>
          <h2 className="text-2xl mb-3 font-bold"> Contests </h2>
          <p className="mb-3">
            Already we have <strong>{likes}</strong> entries! Join now
          </p>
          <div className="flex justify-start">
            <LuckyDraw userName="John Doe" />
            <button onClick={joinContest} className="ml-4 btn btn-sm">
              Join!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
