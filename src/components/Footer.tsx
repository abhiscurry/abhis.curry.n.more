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

            <div className="mt-2 socialMediaIcons"></div>
          </Col>
          <Col md={6} className="text-center mb-3 mb-md-0">
            <p>
              <strong>Opening hours:</strong>
              Everyday 10-7
            </p>

            <p>
              <a href="https://www.google.com/maps/place/1536+Granville+St,+Halifax,+NS+B3J+1W8/@44.6450573,-63.5750447,16z/data=!3m1!4b1!4m6!3m5!1s0x4b5a2234a7da98a7:0x54b76b5f0c194fb2!8m2!3d44.6450535!4d-63.5724698!16s%2Fg%2F11r_m6nxcx?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D">
                <strong>Location:</strong>
                <br />
                1536 Granville St,
                <br />
                Halifax, NS. B3J 1W8, Canada
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
