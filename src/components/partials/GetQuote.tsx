import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import styles from "./GetQuote.module.scss";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { DatePicker } from "react-datepicker";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: Date;
  numberOfGuests: string;
  eventType: string;
  typeOfBooking: string;
  additionalDetails: string;
}

const GetQuote = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [status, setStatus] = useState<string | null>(null);
  // const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    // Simulate API call

    emailjs
      .send(
        "service_qhrfbeo", // Replace with your EmailJS Service ID (e.g., service_abc123)
        "template_a5latvb", // Replace with your EmailJS Template ID (e.g., template_xyz789)
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          eventDate: formatDate(formData.eventDate),
          eventType: formData.eventType,
          numberOfGuest: formData.numberOfGuests,
          typeOfBooking: formData.typeOfBooking,
          message: formData.additionalDetails,
        },
        "FNaajbOs50HQtbe7T" // Replace with your EmailJS Public Key (from Account settings)
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          reset();
        },
        (error) => {
          setStatus(`Failed to send email: ${error.text}`);
        }
      );
    // setSubmitSuccess(true);
  };

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 2);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // EmailJS send function
  //   emailjs
  //     .send(
  //       "service_qhrfbeo", // Replace with your EmailJS Service ID (e.g., service_abc123)
  //       "template_a5latvb", // Replace with your EmailJS Template ID (e.g., template_xyz789)
  //       {
  //         name: formData.fullName,
  //         email: formData.email,
  //         phone: formData.phone,
  //         eventDate: formData.eventDate,
  //         eventType: formData.eventType,
  //         numberOfGuest: formData.numberOfGuests,
  //         typeOfBooking: formData.typeOfBooking,
  //         message: formData.additionalDetails,
  //       },
  //       "FNaajbOs50HQtbe7T" // Replace with your EmailJS Public Key (from Account settings)
  //     )
  //     .then(
  //       (result) => {
  //         setStatus("Email sent successfully!");
  //         setFormData({
  //           fullName: "",
  //           email: "",
  //           phone: "",
  //           eventDate: "",
  //           numberOfGuests: "",
  //           eventType: "",
  //           typeOfBooking: "",
  //           additionalDetails: "",
  //         });
  //       },
  //       (error) => {
  //         setStatus(`Failed to send email: ${error.text}`);
  //       }
  //     );
  // };
  return (
    <Container>
      <h2>Get a Quote</h2>
      {status && (
        <Alert variant={status.includes("success") ? "success" : "danger"}>
          {status}
        </Alert>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="formFullName">
              <Form.Label className={styles.customFormLabel}>
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                {...register("fullName", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12}>
            <Form.Group controlId="formEmail">
              <Form.Label className={styles.customFormLabel}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs={12} md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label className={styles.customFormLabel}>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(902) 123-4567"
                {...register("phone", {
                  required: "Contact number is required",
                  pattern: {
                    value:
                      /^(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
                    message:
                      "Please enter a valid phone number (e.g., (902) 123-4567)",
                  },
                })}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>{" "}
          <Col className="mb-3" xs={12} md={6}>
            <Form.Group controlId="formEventDate">
              {/* <Form.Label className={styles.customFormLabel}>
                Event Date
              </Form.Label> */}

              <Controller
                name="eventDate"
                control={control}
                rules={{ required: "Please select an event date" }}
                render={({ field, fieldState }) => (
                  <div className="mb-3">
                    <label className={`${styles.customFormLabel} form-label`}>
                      Event Date
                    </label>
                    <div className="input-group">
                      {/* @ts-ignore */}
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        minDate={minDate}
                        placeholderText="Select a date"
                        className={`form-control ${
                          fieldState.error ? "is-invalid" : ""
                        }`}
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                    {fieldState.error && (
                      <div className="text-danger small mt-1">
                        {fieldState.error.message}
                      </div>
                    )}
                  </div>
                )}
              />
              {/* <Form.Control.Feedback type="invalid">
                {errors.eventDate?.message}
              </Form.Control.Feedback> */}

              {/* <DatePicker
                selected={selectedDate}
                onChange={(date) => date && setSelectedDate(date)}
                minDate={formatDate(minDate)}
                className="form-control"
                placeholderText="Select Event Date"
              /> */}

              {/* <Form.Control
                type="date"
                {...register("eventDate", {
                  required: "Please select an event date",
                })}
                min={"2025-09-22"}
                placeholder="yyyy-mm-dd"
                isInvalid={!!errors.eventDate}
                style={{ color: watch("eventDate") ? "#212529" : "#aaa" }}
              />
              {!watch("eventDate") && (
                <span className="date-placeholder">e.g. 2025-06-15</span>
              )} */}
              {/* <Form.Control.Feedback type="invalid">
                {errors.eventDate?.message}
              </Form.Control.Feedback> */}
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
                // name="numberOfGuests"
                {...register("numberOfGuests", {
                  required: "Please select number of guests",
                })}
                isInvalid={!!errors.numberOfGuests}
              >
                <option value="">Select guest count</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.numberOfGuests?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="mb-3" xs={12} md={6}>
            <Form.Group controlId="formEventType">
              <Form.Label className={styles.customFormLabel}>
                Event Type
              </Form.Label>
              <Form.Select
                {...register("eventType", {
                  required: "Please select event type",
                })}
                isInvalid={!!errors.eventType}
              >
                <option value="">Select event type</option>
                <option value={"Wedding"}>Wedding</option>
                <option value={"Party"}>Party</option>
                <option value={"Corporate"}>Corporate</option>
                <option value={"Other"}>Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.eventType?.message}
              </Form.Control.Feedback>
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
                {...register("typeOfBooking", {
                  required: "Please select booking type",
                })}
                isInvalid={!!errors.typeOfBooking}
              >
                <option value={""}>Select type of booking</option>
                <option value={"Food Truck"}>Food Truck</option>
                <option value={"Ala Carte"}>Ala Carte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.typeOfBooking?.message}
              </Form.Control.Feedback>
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
              //    name="additionalDetails"
              {...register("additionalDetails")}
              placeholder="Tell us about your event, dietary requirements, special requests..."
              rows={3}
            />
          </Form.Group>
        </Row>

        <Button
          className="custom-secondary-btn"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending Inquiry..." : "Request Quote"}
        </Button>
      </Form>
    </Container>
  );
};

export default GetQuote;
