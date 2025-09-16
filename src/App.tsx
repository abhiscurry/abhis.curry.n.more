import "./App.css";
import Banner from "./components/Banner";
import SocialMedia from "./components/SocialMedia";
import Navbar from "./components/Navbar";
import OfferBanner from "./components/OfferBanner";
import Overview from "./components/Hero";
import FoodItemCarousel from "./components/FoodItemCarousel";
import CateringForm from "./components/CateringForm";
import AdditionalServices from "./components/AdditionalServices";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="root">
        <OfferBanner
          message="20% OFF all order this weekend. Use code WALL20 "
          pillText="Grand Opening"
        />
        <Navbar />
        <Banner
          message="Today : Dalhousie University - 11:30AM "
          pillText="(902)123-CURRY"
        />
        <Overview></Overview>
        <SocialMedia></SocialMedia>
        <FoodItemCarousel></FoodItemCarousel>
        <CateringForm></CateringForm>
        <AdditionalServices></AdditionalServices>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
