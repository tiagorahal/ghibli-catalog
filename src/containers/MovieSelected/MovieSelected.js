import React, { useState } from 'react';
import {
  Row,
  Col,
  Figure,
  Button,
} from 'react-bootstrap';

import MovieInfo from '../../components/MovieInfo/MovieInfo';
import useApi from '../../services/useApi';

const MovieSelected = () => {
  const [movieList] = useApi('https://ghibliapi.herokuapp.com/films/');
  const [movieSelectedInfo, setInfo] = useState({
    displayStatus: 'd-none',
    title: '',
    image: '',
    originalTitle: '',
    originalTitleRomanised: '',
    description: '',
    director: '',
    producer: '',
    releaseDate: '',
    runningTime: '',
    rtScore: '',
  });

  const handleClick = (movie) => {
    setInfo({
      displayStatus: 'd-block',
      title: movie.title,
      image: movie.image,
      originalTitle: movie.original_title,
      originalTitleRomanised: movie.original_title_romanised,
      description: movie.description,
      director: movie.director,
      producer: movie.producer,
      releaseDate: movie.release_date,
      runningTime: movie.running_time,
      rtScore: movie.rt_score,
    });
    return movieSelectedInfo;
  };

  // PASSAR POR PROPS E ONCLICK NO ELEMENTO FORA DO MAP!!!!!!!!!!!!!!!!!!!!111

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
              <Button
                variant="outline-light"
                size="md"
                className="justify-content-end"
                active
                onClick={() => handleClick(movie)}
              >
                Click to see more...
              </Button>
            </div>
            <MovieInfo
              displayStatus={movieSelectedInfo.displayStatus}
              image={movieSelectedInfo.image}
              title={movieSelectedInfo.title}
              originalTitle={movieSelectedInfo.originalTitle}
              originalTitleRomanised={movieSelectedInfo.originalTitleRomanised}
              description={movieSelectedInfo.description}
              director={movieSelectedInfo.director}
              producer={movieSelectedInfo.producer}
              releaseDate={movieSelectedInfo.releaseDate}
              runningTime={movieSelectedInfo.runningTime}
              rtScore={movieSelectedInfo.rtScore}
            />
          </Col>
        )) }
    </Row>
  );
};

export default MovieSelected;
