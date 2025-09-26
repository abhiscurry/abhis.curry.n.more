import { Alert, Button, Nav } from "react-bootstrap";
import style from "./HeroSection1.module.scss";
import { NavLink } from "react-router-dom";
const OverviewSection1 = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          Experience authentic Gujarati breakfast, snacks and fusion Indian
          street food that started on Halifax street and now has a permanent
          home. Fresh, favourful and made with love.
        </h6>
      </div>
      <div className="d-flex flex-row my-3">
        <Nav.Link as={NavLink} to="/menu" className="navbar-brand">
          <Button className="custom-primary-btn m-1">View Menu</Button>
        </Nav.Link>

        <Button
          className="custom-secondary-btn m-1"
          onClick={() => scrollToSection("cateringForm")}
        >
          Order Catering
        </Button>
      </div>

      <div className="alertLocation">
        <Alert variant={"success"}>
          <div className="foodTruck">
            <b>Food Truck Location</b>
          </div>
          <div className="foodTruckLocation">
            <a href="https://www.google.com/maps/place/650+Sackville+Dr,+Lower+Sackville,+NS+B4C+2S3/@44.7692283,-63.6913776,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5988ebdb9364bb:0x39c2962b230415dd!8m2!3d44.7692245!4d-63.6888027!16s%2Fg%2F11b8vfh093?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger text-decoration-none">
              650 Sackville Dr, Lower Sackville, NS B4C 2S3
            </a>
            <br /> (Only open on weekends 10AM to 6PM)
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default OverviewSection1;
