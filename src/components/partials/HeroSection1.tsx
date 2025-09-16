import { Alert, Button } from "react-bootstrap";
import style from "./HeroSection1.module.scss";
const OverviewSection1 = () => {
  return (
    <div>
      <div className={`${style.heading}`}>
        <h1 className="heading-style">
          From food truck to
          <b className={`${style.subHeading}`}> your neighbourhood. </b>
        </h1>
      </div>
      <div className="content">
        <h5>
          Experience authentic Gujarati breakfast and snacks that started on
          Halifax street and now has a permanent home. Fresh, favourful and made
          with love
        </h5>
      </div>
      <div className="location">
        <span>
          <i className="fa-solid fa-location-dot m-1"></i> 123 Spring Garden,
          Halifax
        </span>
      </div>
      <div className="m-3">
        <Button variant="danger m-1">View Menu</Button>
        <Button variant="outline-success m-1">Order Catering</Button>
      </div>
      <div className="alertLocation">
        <Alert variant={"success"}>
          <div className="foodTruck">
            <b>Food Truck Today</b>
          </div>
          <div className="foodTruckLocation">
            Dalhousie University - 11:30 AM to 3:00 PM
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default OverviewSection1;
