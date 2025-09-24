// src/components/OfferBanner.jsx
import { Button } from "react-bootstrap";
import styles from "./OfferBanner.module.scss"; // ✅ Import SCSS Module

interface Props {
  message: String;
}

const OfferBanner = ({ message }: Props) => {
  if (!message) return null; // Don't render if no message
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.offerBanner}>
      <h3>
        {message}
        <Button
          className="custom-secondary-btn m-1"
          onClick={() => scrollToSection("cateringForm")}
        >
          Order Catering
        </Button>
      </h3>
    </div>
  );
};

export default OfferBanner;
