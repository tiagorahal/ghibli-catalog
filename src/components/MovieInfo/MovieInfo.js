import React from 'react';
import {
  Button,
  Figure,
  Col,
} from 'react-bootstrap';
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
    <Col className={display}>
      <div className="info-content">
        <div className="image-div col-sm-12 col-md-6">
          <Figure className="info-img">
            <Figure.Image
              className="img-fluid"
              alt={title}
              src={image}
            />
          </Figure>
        </div>
        <div className="image-text col-sm-12 col-md-6">
          <div>
            <h1>
              {title}
            </h1>
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
            <Button onClick={handleClick} variant="primary" size="lg">
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Col>
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
