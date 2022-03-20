import React from 'react';
import {
  Row,
  Col,
  Figure,
} from 'react-bootstrap';
import FooterLogo from '../../assets/images/footer-logo.png';

const Footer = () => {
  const footerText = 'Tiago Rahal';
  const footerLink = 'https://github.com/tiagorahal';

  return (
    <Row>
      <Col sx={12} className="Footer">
        <a href={footerLink} target="_blank" rel="noreferrer" className="desktop-footer-link">
          &#169;
          &#160;
          {footerText}
        </a>
        <Figure>
          <Figure.Image
            fluid
            width={171}
            height={180}
            alt="171x180"
            src={FooterLogo}
          />
        </Figure>
      </Col>
    </Row>
  );
};

export default Footer;
