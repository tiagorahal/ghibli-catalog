import React from 'react';
import MovieSelected from '../../components/MovieSelected/MovieSelected';

const MoviesContainer = () => {
  const containerText = 'Ghibli Movies';

  return (
    <div>
      <h2>{containerText}</h2>
      <MovieSelected />
    </div>
  );
};

export default MoviesContainer;
