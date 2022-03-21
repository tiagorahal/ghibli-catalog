import React from 'react';
import {
  Row,
  Col,
  Figure,
  Button,
} from 'react-bootstrap';
import useApi from '../../services/useApi';

const MovieSelected = () => {
  const [movieList] = useApi('https://ghibliapi.herokuapp.com/films/');

  return (
    <Row className="m-auto mt-5">
      {movieList && movieList.map((movie) => (
        <Col sm={12} md={6} xl={4} key={movie.id} className="mb-5">
          <div className="MovieSelected">
            <Figure>
              <Figure.Image
                fluid
                alt="Movie Poster"
                src={movie.image}
              />
              <Figure.Caption className="text-light">
                Original title:
                &nbsp;
                {movie.original_title}
              </Figure.Caption>
            </Figure>
            <h4>{movie.title}</h4>
            <p className="moviedescription">{`${movie.description.slice(0, 106)}...`}</p>
            <Button variant="outline-light" size="md" className="justify-content-end" active>
              Click to see more...
            </Button>
          </div>
        </Col>
      )) }
    </Row>
  );
};

export default MovieSelected;
