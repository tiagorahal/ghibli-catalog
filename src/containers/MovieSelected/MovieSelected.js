import React, { useState } from 'react';
import {
  Row,
  Col,
  Figure,
} from 'react-bootstrap';
import ReactiveButton from 'reactive-button';

import MovieInfo from '../../components/MovieInfo/MovieInfo';
import useApi from '../../services/useApi';

const MovieSelected = () => {
  const [movieList] = useApi('https://ghibliapi.herokuapp.com/films/');
  const [state, setState] = useState('idle');
  const [movieSelectedInfo, setInfo] = useState({
    butttonDisable: false,
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
    setState('loading');
    setTimeout(() => {
      setState('success');
      setInfo({
        butttonDisable: true,
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
    }, 1500);
    return movieSelectedInfo;
  };

  // amarrar de algum jeito o handleclick com a key
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
                  src={movie.movie_banner}
                />
                <Figure.Caption className="text-light">
                  Original title:
                  &nbsp;
                  {movie.original_title}
                </Figure.Caption>
              </Figure>
              <h4>{movie.title}</h4>
              <p className="moviedescription">{`${movie.description.slice(0, 106)}...`}</p>
              <ReactiveButton
                buttonState={state}
                loadingText="Loading"
                successText="Ready"
                messageDuration={1500}
                animation={false}
                idleText="Click to know more..."
                disabled={movieSelectedInfo.butttonDisable}
                variant="outline-light"
                size="md"
                className="justify-content-end"
                active
                onClick={() => handleClick(movie)}
              />
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
