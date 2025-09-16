import styles from "./CateringForm.module.scss";
import CateringContactDetails from "./partials/CateringContactDetails";
import GetQuote from "./partials/GetQuote";
const CateringForm = () => {
  return (
    <div>
      <div className={`${styles.title}`}>
        <div className="heading">
          <h1>Catering & Contact</h1>
        </div>
        <div className="subHeading">
          <h5>
            Bring authentic Gujarati flavors to your next event. From intimate
            office gatherings to large celebrations, we will make your event
            memorable.
          </h5>
        </div>
      </div>
      <div className={styles.splitContainer}>
        <div className={styles.section1}>
          <GetQuote></GetQuote>
        </div>
        <div className={styles.section2}>
          <CateringContactDetails></CateringContactDetails>
        </div>
      </div>
    </div>
  );
};

export default CateringForm;
