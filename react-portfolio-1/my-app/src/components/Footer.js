// Import Bootstrap Components
import { Col, Container, Row } from "react-bootstrap";
// Import Local Components
import { MailchimpForm } from "./MailchimpForm";
// Import Assets
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Newsletter Form */}
          <MailchimpForm />
          {/* Footer Logo */}
          <Col sm={6} className="text-center text-sm-start pb-sm-0 pb-4">
            <img src={logo} alt="footer logo" />
          </Col>
          {/* Footer Links to Social Media */}
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="social icon 1" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="social icon 2" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="social icon 3" />
              </a>
            </div>
            <p>CopyRight 2023. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
