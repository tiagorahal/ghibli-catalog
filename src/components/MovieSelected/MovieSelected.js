/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  console.log(movieList);

  return (
    <div>
      { movieList.map((movie) => <button type="button" key={movie.id}>{movie.title}</button>) }
    </div>
  );
};

export default MovieSelected;
