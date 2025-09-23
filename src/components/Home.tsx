import Overview from "./Hero";
import SocialMedia from "./SocialMedia";
import FoodItemCarousel from "./FoodItemCarousel";
import CateringForm from "./CateringForm";
import AdditionalServices from "./AdditionalServices";

const Home = () => {
  return (
    <div>
      <Overview></Overview>
      <SocialMedia></SocialMedia>
      <FoodItemCarousel></FoodItemCarousel>
      <CateringForm></CateringForm>
      <AdditionalServices></AdditionalServices>
    </div>
  );
};

export default Home;
