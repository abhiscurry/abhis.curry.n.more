import { Col, Container, Row } from "react-bootstrap";

const AdditionalServices = () => {
  return (
    <Container
      className="py-4 mt-5"
      style={{ backgroundColor: "#e6f3f0", borderRadius: "10px" }}
    >
      <Row className="mb-4">
        <Col className="text-center">
          <h2>Additional Services</h2>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md={4} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-2">
            <span
              style={{
                backgroundColor: "#e6f3f0",
                borderRadius: "50%",
                padding: "10px",
                border: "2px solid #28a745",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
              }}
            >
              <span style={{ fontSize: "24px", color: "#28a745" }}>🍽️</span>
            </span>
          </div>
          <h4 className="fw-bold">Custom Menus</h4>
          <p className="text-muted">
            Tailored menus for dietary restrictions and preferences
          </p>
        </Col>
        <Col md={4} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-2">
            <span
              style={{
                backgroundColor: "#e6f3f0",
                borderRadius: "50%",
                padding: "10px",
                border: "2px solid #28a745",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
              }}
            >
              <span style={{ fontSize: "24px", color: "#28a745" }}>👥</span>
            </span>
          </div>
          <h4 className="fw-bold">Full Service</h4>
          <p className="text-muted">
            Complete setup, service, and cleanup included
          </p>
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-center mb-2">
            <span
              style={{
                backgroundColor: "#e6f3f0",
                borderRadius: "50%",
                padding: "10px",
                border: "2px solid #28a745",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
              }}
            >
              <span style={{ fontSize: "24px", color: "#28a745" }}>📅</span>
            </span>
          </div>
          <h4 className="fw-bold">Flexible Scheduling</h4>
          <p className="text-muted">
            Available for morning, lunch, and evening events
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdditionalServices;
