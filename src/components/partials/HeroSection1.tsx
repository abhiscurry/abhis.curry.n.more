import { Alert, Button } from "react-bootstrap";
import style from "./HeroSection1.module.scss";
const OverviewSection1 = () => {
  return (
    <div>
      <div className={`${style.heading}`}>
        <h1 className="heading-style">
          First Ever
          <br />
        </h1>
        <h2>
          <b className={`${style.subHeading}`}>Authentic Gujarati restaurant</b>
        </h2>
        <h1>in whole Atlantic Canada</h1>
      </div>
      <div className="content">
        <h6>
          Experience authentic Gujarati breakfast and snacks that started on
          Halifax street and now has a permanent home. Fresh, favourful and made
          with love
        </h6>
      </div>
      <div className="my-3">
        <Button className="custom-primary-btn m-1">View Menu</Button>
        <Button className="custom-secondary-btn m-1">Order Catering</Button>
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
