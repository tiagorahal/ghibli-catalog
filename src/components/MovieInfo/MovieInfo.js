/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = (props) => {
  const movieInfo = {
    title: props.title,
    original_title: props.original_title,
    original_title_romanised: props.original_title_romanised,
    description: props.description,
    director: props.director,
    producer: props.producer,
    release_date: props.release_date,
    running_time: props.running_time,
    rt_score: props.rt_score,
  };

  return (
    <div className="MovieInfo">
      <h1>
        {movieInfo.title}
      </h1>
      <p>
        {movieInfo.original_title}
      </p>
      <p>
        {movieInfo.original_title_romanised}
      </p>
      <p>
        {movieInfo.description}
      </p>
      <p>
        {movieInfo.director}
      </p>
      <p>
        {movieInfo.producer}
      </p>
      <p>
        {movieInfo.release_date}
      </p>
      <p>
        {movieInfo.running_time}
      </p>
      <p>
        {movieInfo.rt_score}
      </p>
    </div>
  );
};

MovieInfo.propTypes = ({
  title: PropTypes.string,
  original_title: PropTypes.string,
  original_title_romanised: PropTypes.string,
  description: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  release_date: PropTypes.string,
  running_time: PropTypes.string,
  rt_score: PropTypes.string,
}).isRequired;

export default MovieInfo;
