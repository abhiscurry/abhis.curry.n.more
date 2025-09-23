// src/components/OfferBanner.jsx
import styles from "./OfferBanner.module.scss"; // ✅ Import SCSS Module

interface Props {
  message: String;
}

const OfferBanner = ({ message }: Props) => {
  if (!message) return null; // Don't render if no message

  return (
    <div className={styles.offerBanner}>
      <h2>{message}</h2>
    </div>
  );
};

export default OfferBanner;
