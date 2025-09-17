import { Container } from "react-bootstrap";
import styles from "./Banner.module.scss";

interface Props {
  message: string;
  pillText: string;
}

const Banner = ({ message, pillText }: Props) => {
  if (!message) return null;

  const time = "3:00 PM";

  return (
    <div className={styles.bannerBg}>
      <Container className={styles.banner}>
        {/* Left side: everything except the pill */}
        <div className={styles.leftContent}>
          <span style={{ display: "flex", alignItems: "baseline" }}>
            <i className="fa-solid fa-location-dot m-1"></i>
            {message}
          </span>

          <span style={{ display: "flex", alignItems: "baseline" }}>
            <i className="fa-solid fa-clock m-1"></i> Open until {time}
          </span>
        </div>

        {/* Right side: ONLY the phone pill */}
        <span className={styles.pill}>
          <i className="fas fa-phone"></i>
          {pillText}
        </span>
      </Container>
    </div>
  );
};

export default Banner;
