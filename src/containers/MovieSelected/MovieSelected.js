import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const MovieSelected = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://ghibliapi.herokuapp.com/films/');
        const info = await response.data;
        setMovieList(info);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Row>
      { movieList.map((movie) => (
        <Col sm={12} md={6} xl={4} key={movie.id} className="MovieSelected">
          <div>
            <button type="button">{movie.title}</button>
            <p>{movie.description}</p>
          </div>
        </Col>
      )) }
    </Row>
  );
};

export default MovieSelected;
