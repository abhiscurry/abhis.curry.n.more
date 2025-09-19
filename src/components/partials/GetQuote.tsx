import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    numberOfGuests: "",
    eventType: "",
    typeOfBooking: "",
    additionalDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Container>
      <h2>Get a Quote</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-6 mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </Form.Group>
          </Col>
          <Col className="col-md-6 mb-3">
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(902) 123-4567"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="formEventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                placeholder="yyyy-mm-dd"
              />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group controlId="formNumberOfGuests">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Select
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
              >
                <option>Select guest count</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="formEventType">
              <Form.Label>Event Type</Form.Label>
              <Form.Select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option>Select event type</option>
                <option>Wedding</option>
                <option>Party</option>
                <option>Corporate</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group controlId="formTypeOfBooking">
              <Form.Label>Type of Booking</Form.Label>
              <Form.Select
                name="typeOfBooking"
                value={formData.typeOfBooking}
                onChange={handleChange}
              >
                <option>Select type of booking</option>
                <option>Food Truck</option>
                <option>Ala Carte</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formAdditionalDetails">
          <Form.Label>Additional Details</Form.Label>
          <Form.Control
            as="textarea"
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder="Tell us about your event, dietary requirements, special requests..."
            rows={3}
          />
        </Form.Group>

        <Button className="custom-secondary-btn" type="submit">
          Request Quote
        </Button>
      </Form>
    </Container>
  );
};

export default GetQuote;
