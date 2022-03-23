import React from 'react';
import {
  Row,
  Col,
  Figure,
} from 'react-bootstrap';
import HeaderLogo from '../../assets/images/header-logo.png';

const Header = () => {
  const headerLink = 'https://ghibli.fandom.com/wiki/Ghibli_Wiki';

  return (
    <Row>
      <Col sx={12} className="Header">
        <a href={headerLink} target="_blank" rel="noreferrer" className="tablet-header-link">
          Check out the Ghibli Wiki
        </a>
        <a href={headerLink} target="_blank" rel="noreferrer" className="mobile-header-link px-4">
          Wiki
        </a>
        <Figure>
          <Figure.Image
            fluid
            width={171}
            height={180}
            alt="171x180"
            src={HeaderLogo}
          />
        </Figure>
      </Col>
    </Row>
  );
};

export default Header;
