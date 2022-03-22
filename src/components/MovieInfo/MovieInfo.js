/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = (props) => {
  const classProps = `MovieInfo ${props.displayStatus}`;

  return (
    <div className={classProps}>
      <div className="movie-info-inner">
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
    </div>
  );
};

MovieInfo.propTypes = ({
  displayStatus: PropTypes.string,
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
