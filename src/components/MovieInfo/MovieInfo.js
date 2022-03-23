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
        <div className="image-div col-sm-12 col-md-7 col-lg-6 col-xxl-8">
          <Figure className="info-img">
            <Figure.Image
              alt={title}
              src={image}
            />
          </Figure>
        </div>
        <div className="image-text col-sm-12 col-md-4 gx-md-1 gx-md-0 col-xxl-4">
          <div className="info-text">
            <h1 className="text-white">
              {title}
            </h1>
            <p className="text-white">
              <strong className="section-title">
                Original Title:
              </strong>
              &#160;
              {originalTitle}
              <br />
              &#40;
              {originalTitleRomanised}
              &#41;
              <br />
              <br />
              <strong className="section-title">
                Description:
              </strong>
              &#160;
              {description}
              <br />
              <br />
              <strong className="section-title">
                Director:
              </strong>
              &#160;
              {director}
              .
              <br />
              <br />
              <strong className="section-title">
                Producer:
              </strong>
              &#160;
              {producer}
              .
              <br />
              <br />
              <strong className="section-title">
                Release Date:
              </strong>
              &#160;
              {releaseDate}
              .
              <br />
              <br />
              <strong className="section-title">
                Running Time:
              </strong>
              &#160;
              {runningTime}
              min.
              <br />
              <br />
              <strong className="section-title">
                Score:
              </strong>
              &#160;
              {rtScore}
              %
              .
            </p>
            <Button className="info-button" onClick={handleClick} variant="primary" size="lg" active>
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
