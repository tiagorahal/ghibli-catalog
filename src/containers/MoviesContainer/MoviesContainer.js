import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieSelected from '../MovieSelected/MovieSelected';

const MoviesContainer = () => {
  const containerText = 'Ghibli Movies';

  return (
    <Row>
      <Col>
        <h2>{containerText}</h2>
        <MovieSelected />
      </Col>
    </Row>
  );
};

export default MoviesContainer;
