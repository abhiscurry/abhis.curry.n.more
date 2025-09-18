// import Carousel from "./partials/Carousel";
import styles from "./Hero.module.scss";
import Carousel from "./partials/Carousel";
import OverviewSection1 from "./partials/HeroSection1";
const Overview = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.splitContainer}>
          <div className={styles.section}>
            <OverviewSection1></OverviewSection1>
          </div>
          <div className={styles.section}>
            <Carousel></Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
