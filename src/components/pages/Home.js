import React, { useState, useEffect } from 'react';
import NotificationBar from '@shared/NotificationBar';
import FilterMovieDisplay from '@components/FilterMovieDisplay';
import Banner from '@shared/Banner';
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

  // For current movie selection
  useEffect(() => {
    dispatch(setCurrentMovieId(movieId));
  }, [movieId, dispatch]);

  // For loading all movies
  useEffect(() => {
    if (!isInitialLoad) {
      return;
    }
    dispatch(loadAllMovies());
  }, [dispatch, isInitialLoad]);

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

          <FilterMovieDisplay
            movies={movies}
            handleMovieSelect={handleMovieSelect}
          />
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
