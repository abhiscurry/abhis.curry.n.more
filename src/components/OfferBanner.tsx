// src/components/OfferBanner.jsx
import { Button } from "react-bootstrap";
import styles from "./OfferBanner.module.scss"; // ✅ Import SCSS Module

interface Props {
  message: String;
}

const OfferBanner = ({ message }: Props) => {
  if (!message) return null; // Don't render if no message

  return (
    <div className={styles.offerBanner}>
      <h3>
        {message}
        <a href="https://form.jotform.com/252667321890058" target="_blank">
          <Button className="custom-secondary-btn m-1">Pre-Order Now</Button>
        </a>
      </h3>
    </div>
  );
};

export default OfferBanner;
