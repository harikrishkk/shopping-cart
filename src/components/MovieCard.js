import React from 'react';
import LinkButton from './LinkButton';

const MovieCard = ({ movie, onMovieSelect }) => {
  const { title, posterURL, imdbId, isNewRelease } = movie;

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={posterURL}
          alt={title}
        />
        <div className="p-6 bg-white">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title} {isNewRelease && <span className="ml-3 badge">New!</span>}
          </h1>
          <p className="leading-relaxed mb-3">IMDB id: {imdbId}</p>
          <div className="flex items-center flex-wrap ">
            <LinkButton handleClick={() => onMovieSelect(movie)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
