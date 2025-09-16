// src/components/OfferBanner.jsx
import styles from "./OfferBanner.module.scss"; // ✅ Import SCSS Module

interface Props {
  message: String;
  pillText: String;
}

const OfferBanner = ({ message, pillText }: Props) => {
  if (!message) return null; // Don't render if no message

  return (
    <div className={styles.offerBanner}>
      <span className={styles.pill}>⭐ {pillText}</span>
      {message}
    </div>
  );
};

export default OfferBanner;
