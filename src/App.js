import './App.css';
import MovieCard from '@components/MovieCard';
import Navbar from '@shared/Navbar';
import NotificationBar from '@shared/NotificationBar';
import Footer from '@shared/Footer';
import LuckyDraw from '@components/LuckyDraw';
import FeedbackForm from '@components/FeedbackForm';
import AppUsers from '@components/users/AppUsers';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };
  const handleClose = () => {
    setSelectedMovie(null);
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
    <Fragment>
      <div className="bg-slate-100 min-h-screen flex grow flex-col">
        <Navbar />
        <div className="container mx-auto grow">
          {selectedMovie && (
            <NotificationBar
              onClose={handleClose}
              message={`You selected → ${selectedMovie.title}`}
            />
          )}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
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
            </div>
          </section>
          <h2 className="text-2xl mb-6 font-bold"> Contests </h2>
          <LuckyDraw userName="John Doe" />
          <FeedbackForm />
          <h2 className="text-2xl mb-6 font-bold"> Users </h2>
          <AppUsers />
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
