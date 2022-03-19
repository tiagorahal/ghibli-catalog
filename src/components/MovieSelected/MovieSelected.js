import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSelected = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const fetchMovies = async (query = '') => {
      try {
        const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${query}`);
        const info = await response.data;
        console.log(info[0].title);
        setMovieInfo({ title: info[0].title });
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>{movieInfo.title}</h1>
    </div>
  );
};

export default MovieSelected;
