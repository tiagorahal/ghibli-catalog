import React from 'react';
import {
  Row,
  Col,
  Figure,
} from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import HeaderLogo from '../../assets/images/header-logo.png';

const Header = () => {
  const headerText = 'Click to know more about Ghibli Studio.';
  const headerLink = 'https://ghibli.fandom.com/wiki/Ghibli_Wiki';

  return (
    <Row>
      <Col sx={12} className="Header">
        <a href={headerLink} target="_blank" className="tablet-header-link" rel="noreferrer">
          {headerText}
        </a>
        <a href="/" className="mobile-header-link">
          <FaBars />
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
