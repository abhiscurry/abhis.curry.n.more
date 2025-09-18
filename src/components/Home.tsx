import Overview from "./Hero";
import SocialMedia from "./SocialMedia";
import FoodItemCarousel from "./FoodItemCarousel";
import CateringForm from "./CateringForm";
import AdditionalServices from "./AdditionalServices";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Overview></Overview>
      <SocialMedia></SocialMedia>
      <FoodItemCarousel></FoodItemCarousel>
      <CateringForm></CateringForm>
      <AdditionalServices></AdditionalServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
