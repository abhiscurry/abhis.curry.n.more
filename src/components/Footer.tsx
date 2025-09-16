import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./Footer.module.scss";
import logo from "/images/logo.png";
const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-5`}>
      <Container className="pt-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src={logo} height={75} width={75}></Image>
              <h4 style={{ margin: 0 }} className={` ${styles.brandName}`}>
                Abhis Curry N More
              </h4>
            </div>
            <h5 className="mt-2" style={{ fontWeight: "normal" }}>
              Bite into Happiness
            </h5>
            <div className="locationMap">
              <img
                src="https://via.placeholder.com/200x150"
                alt="Map"
                style={{ maxWidth: "100%", borderRadius: "5px" }}
              />
            </div>
            <div className="mt-2 socialMediaIcons"></div>
          </Col>
          <Col md={6} className="text-center mb-3 mb-md-0">
            <p>
              <strong>Opening hours:</strong>
              <br />
              Mon - Thu: 11:00 AM - 9:00 PM
              <br />
              Fri - Sat: 11:00 AM - 10:00 PM
              <br />
              Sun: 12:00 PM - 8:00 PM
            </p>
            <p>
              <strong>Phone:</strong> (902)123-CURRY
            </p>
            <p>
              <strong>Location:</strong>
              <br />
              123 Spring Garden Road
              <br />
              Halifax, NS B3H 3X5
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
