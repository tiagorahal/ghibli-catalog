import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MovieInfo = (props) => {
  const {
    displayStatus,
    title,
    image,
    originalTitle,
    originalTitleRomanised,
    description,
    director,
    producer,
    releaseDate,
    runningTime,
    rtScore,
  } = props;

  const display = `MovieInfo ${displayStatus}`;

  // temporarily solution
  const handleClick = () => {
    window.location.reload(false);
  };

  return (
    <div className={display}>
      <Button onClick={handleClick} variant="primary" size="lg">
        Go Back
      </Button>
      <h1>
        {title}
      </h1>
      <img className="img-fluid" src={image} alt={title} />
      <p>
        {originalTitle}
      </p>
      <p>
        {originalTitleRomanised}
      </p>
      <p>
        {description}
      </p>
      <p>
        {director}
      </p>
      <p>
        {producer}
      </p>
      <p>
        {releaseDate}
      </p>
      <p>
        {runningTime}
      </p>
      <p>
        {rtScore}
      </p>
    </div>
  );
};

MovieInfo.propTypes = ({
  displayStatus: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
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
