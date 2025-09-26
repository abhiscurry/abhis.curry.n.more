import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";
import logo from "/images/logo.png";
const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-5 pb-3`}>
      <Container className="pt-5">
        <Row className="align-items-center justify-content-around">
          <Col xs="auto" className="d-flex align-items-center gap-3">
            <img
              src={logo}
              alt="Abhis Curry N More"
              width={85}
              height={85}
              className="rounded-circle"
            />

            <div>
              <h5 className="mb-0 text-danger">Abhis Curry N More</h5>

              <div className="d-flex gap-3 mt-2">
                <a href="#" className="text-danger">
                  <i className="fa-brands fa-instagram m-1"></i>
                </a>
                <a href="tel:+1234567890" className="text-danger">
                  <i className="fa-solid fa-phone m-1"></i>
                </a>
                <a href="mailto:info@abhiscurry.com" className="text-danger">
                  <i className="fa-solid fa-envelope m-1"></i>
                </a>
              </div>
            </div>
          </Col>

          <Col
            xs="auto"
            className="text-start d-flex justify-content-center justify-content-md-end"
          >
            <div className="text-center text-md-start">
              <div className="text-muted">
                <strong>Opening hours:</strong>
                <div className="mt-2">
                  Monday : 10:00 AM - 8:00 PM
                  <br />
                  Tuesday : Closed
                  <br />
                  Wednesday - Sunday : 10:00 PM - 8:00 PM
                </div>
              </div>

              <div className="mt-3">
                <strong className="text-danger">Location:</strong>
                <div className="mt-1">
                  <a
                    href="https://maps.google.com/?q=1536+Granville+St,+Halifax,+NS,+B3J+1W8,+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger text-decoration-none"
                  >
                    1536 Granville St,
                    <br />
                    Halifax, NS, B3J 1W8, Canada
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
