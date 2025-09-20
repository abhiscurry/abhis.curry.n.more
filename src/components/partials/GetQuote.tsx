import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import styles from "./GetQuote.module.scss";

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
  const [status, setStatus] = useState<string | null>(null);

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 2);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        "service_qhrfbeo", // Replace with your EmailJS Service ID (e.g., service_abc123)
        "template_a5latvb", // Replace with your EmailJS Template ID (e.g., template_xyz789)
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.eventDate,
          eventType: formData.eventType,
          numberOfGuest: formData.numberOfGuests,
          typeOfBooking: formData.typeOfBooking,
          message: formData.additionalDetails,
        },
        "FNaajbOs50HQtbe7T" // Replace with your EmailJS Public Key (from Account settings)
      )
      .then(
        (result) => {
          setStatus("Email sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            eventDate: "",
            numberOfGuests: "",
            eventType: "",
            typeOfBooking: "",
            additionalDetails: "",
          });
        },
        (error) => {
          setStatus(`Failed to send email: ${error.text}`);
        }
      );
  };
  return (
    <Container>
      <h2>Get a Quote</h2>
      {status && (
        <Alert variant={status.includes("success") ? "success" : "danger"}>
          {status}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="formFullName">
              <Form.Label className={styles.customFormLabel}>
                Full Name
              </Form.Label>
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
          <Col className="mb-3" xs={12}>
            <Form.Group controlId="formEmail">
              <Form.Label className={styles.customFormLabel}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12} md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label className={styles.customFormLabel}>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(902) 123-4567"
              />
            </Form.Group>
          </Col>{" "}
          <Col className="mb-3" xs={12} md={6}>
            <Form.Group controlId="formEventDate">
              <Form.Label className={styles.customFormLabel}>
                Event Date
              </Form.Label>
              <Form.Control
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                placeholder="yyyy-mm-dd"
                min={formatDate(minDate)}
                style={{ color: "#808080" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12} md={6}>
            <Form.Group controlId="formNumberOfGuests">
              <Form.Label className={styles.customFormLabel}>
                Number of Guests
              </Form.Label>
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
          <Col className="mb-3" xs={12} md={6}>
            <Form.Group controlId="formEventType">
              <Form.Label className={styles.customFormLabel}>
                Event Type
              </Form.Label>
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
        </Row>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="formTypeOfBooking">
              <Form.Label className={styles.customFormLabel}>
                Type of Booking
              </Form.Label>
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
        <Row>
          <Form.Group className="mb-3" controlId="formAdditionalDetails">
            <Form.Label className={styles.customFormLabel}>
              Additional Details
            </Form.Label>
            <Form.Control
              as="textarea"
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Tell us about your event, dietary requirements, special requests..."
              rows={3}
            />
          </Form.Group>
        </Row>

        <Button className="custom-secondary-btn" type="submit">
          Request Quote
        </Button>
      </Form>
    </Container>
  );
};

export default GetQuote;
