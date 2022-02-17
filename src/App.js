import './App.css';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';
import Footer from './components/Footer';
import LuckyDraw from './components/LuckyDraw';
import FeedbackForm from './components/FeedbackForm';
import { Fragment, useState } from 'react';

const MOVIES = [
  {
    id: 1,
    title: 'Inside Out',
    posterURL:
      'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg',
    imdbId: 'tt2096673',
    isNewRelease: true,
  },
  {
    id: 2,
    title: 'Coco',
    posterURL:
      'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg',
    imdbId: 'tt2380307',
    isNewRelease: false,
  },
  {
    id: 3,
    title: 'Incredibles 2',
    posterURL:
      'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg',
    imdbId: 'tt3606756',
    isNewRelease: true,
  },
];
function App() {
  const [movies, setMovies] = useState(MOVIES);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };
  const handleClose = () => {
    setSelectedMovie(null);
  };

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
              <div className="flex flex-wrap -m-4">
                {movies.map((movie) => {
                  return (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onMovieSelect={handleMovieSelect}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <h2 className="text-2xl mb-6 font-bold"> Contests </h2>
          <LuckyDraw userName="John Doe" />
          <FeedbackForm />
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
