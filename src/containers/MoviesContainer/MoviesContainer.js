import React from 'react';
import { Row } from 'react-bootstrap';
import MovieSelected from '../MovieSelected/MovieSelected';

const MoviesContainer = () => {
  const containerText = 'Studio Ghibli’s films are undeniably works of art.';

  return (
    <Row>
      <h2>{containerText}</h2>
      <MovieSelected />
    </Row>
  );
};

export default MoviesContainer;
