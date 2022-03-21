import React from 'react';
import {
  Row,
  Col,
  Figure,
  Button,
} from 'react-bootstrap';

import MovieInfo from '../../components/MovieInfo/MovieInfo';
import useApi from '../../services/useApi';

const MovieSelected = () => {
  const urlGhibli = 'https://ghibliapi.herokuapp.com/films/';
  const [movieList] = useApi(urlGhibli);

  return (
    <Row className="m-auto mt-5">
      {movieList // first movieList is to check if is true before loading
        && movieList.map((movie) => (
          <Col sm={12} md={6} xl={4} key={movie.title} className="mb-5">
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
            <MovieInfo
              title={movie.title}
              originalTitle={movie.original_title}
              originalTitleRomanised={movie.original_title_romanised}
              description={movie.description}
              director={movie.director}
              producer={movie.producer}
              releaseDate={movie.release_date}
              runningTime={movie.running_time}
              rtScore={movie.rt_score}
            />
          </Col>
        )) }
    </Row>
  );
};

export default MovieSelected;
