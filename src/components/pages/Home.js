import React, { useState, useEffect, useCallback } from 'react';
import NotificationBar from '@shared/NotificationBar';
import MovieCard from '@components/MovieCard';
import Banner from '@shared/Banner';
import LuckyDraw from '@components/LuckyDraw';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [likes, setLikes] = useState(458);

  const handleMovieSelect = useCallback(
    (movie) => {
      setSelectedMovie(movie);
    },
    [selectedMovie]
  );
  const handleClose = () => {
    setSelectedMovie(null);
  };

  const joinContest = () => {
    setLikes((like) => like + 1);
  };

  const loadMore = () => {
    setPages((p) => p + 1);
  };

  useEffect(() => {
    axios
      .get('https://api.sampleapis.com/movies/animation')
      .then((response) => {
        console.log(response);
        const data = response.data.slice(
          pages === 1 ? 0 : pages * 10 + 1,
          pages === 1 ? 10 : pages * 10 + 10
        );
        setMovies([...movies, ...data]);
        if (pages >= Math.floor(response.data.length / 10)) {
          setIsDisabled(true);
        }
      });
  }, [pages]);

  return (
    <div>
      {selectedMovie && (
        <NotificationBar
          onClose={handleClose}
          message={`You selected → ${selectedMovie.title}`}
        />
      )}
      <section className="text-gray-600 body-font">
        <Banner />
        <div className="container px-5 py-12 mx-auto">
          <h2 className="text-2xl mb-8 font-bold"> Movies </h2>
          {movies.length === 0 && (
            <h1 className="btn bg-transparent text-black border-transparent loading">
              Loading...
            </h1>
          )}
          <div className="flex flex-wrap -m-4">
            {movies.length > 0 &&
              movies.map((movie) => {
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
              disabled={isDisabled}
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
