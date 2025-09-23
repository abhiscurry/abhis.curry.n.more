import { Container } from "react-bootstrap";
import styles from "../CateringForm.module.scss";
const CateringContactDetails = () => {
  return (
    <div>
      <Container>
        <h2>Contact Details</h2>
        <div className={`${styles.contactDetails} contactNumber mt-5`}>
          <div className="me-3">
            <i className="fas fa-phone"></i>
          </div>
          <div>
            <h6>(902) 478-4148</h6>
            <small>Call or text anytime</small>
          </div>
        </div>
        <div className={`${styles.contactDetails} email mt-3`}>
          <div className="me-3">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <h6>abhiscurrynmore@gmail.com</h6>
            <small>For catering inquires</small>
          </div>
        </div>
        <div className={`${styles.contactDetails} location mt-3`}>
          <div className="me-3">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h6>1536 Granville St, </h6>
            <small>Halifax, NS. B3J 1W8, Canada</small>
          </div>
        </div>
        <div className={`${styles.contactDetails} responseTime mt-3`}>
          <div className="me-3">
            <i className="fa-solid fa-clock"></i>
          </div>
          <div>
            <h6>Response Time</h6>
            <small>24 hours</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CateringContactDetails;
