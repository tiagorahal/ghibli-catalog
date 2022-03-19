import React from 'react';
import { Row } from 'react-bootstrap';
import MovieSelected from '../MovieSelected/MovieSelected';

const MoviesContainer = () => {
  const containerText = 'Ghibli Movies';

  return (
    <Row>
      <h2>{containerText}</h2>
      <MovieSelected />
    </Row>
  );
};

export default MoviesContainer;
