import './App.css';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import NotificationBar from './components/NotificationBar';
import { useState } from 'react';

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
    <div className="bg-slate-100">
      <Navbar />
      <div className="container mx-auto min-h-screen">
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
      </div>
    </div>
  );
}

export default App;
