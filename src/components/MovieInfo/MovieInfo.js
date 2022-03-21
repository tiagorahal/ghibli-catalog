/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = (props) => (
  <div className="MovieInfo">
    <h1>
      {props.title}
    </h1>
    <p>
      {props.originalTitle}
    </p>
    <p>
      {props.originalTitleRomanised}
    </p>
    <p>
      {props.description}
    </p>
    <p>
      {props.director}
    </p>
    <p>
      {props.producer}
    </p>
    <p>
      {props.releaseDate}
    </p>
    <p>
      {props.runningTime}
    </p>
    <p>
      {props.rtScore}
    </p>
  </div>
);

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
