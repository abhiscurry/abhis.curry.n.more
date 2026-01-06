import Overview from "./Hero";
import SocialMedia from "./SocialMedia";
import FoodItemCarousel from "./FoodItemCarousel";
import CateringForm from "./CateringForm";
import AdditionalServices from "./AdditionalServices";
import OfferBanner from "./OfferBanner";

const Home = () => {
  const offerMessage = "Uttarayan Special Coming Soon!";

  return (
    <div>
      <Overview></Overview>
      <OfferBanner
        message={offerMessage}
        isOfferButtonEnabled={false}
      ></OfferBanner>
      <SocialMedia></SocialMedia>
      <FoodItemCarousel></FoodItemCarousel>
      <CateringForm></CateringForm>
      <AdditionalServices></AdditionalServices>
    </div>
  );
};

export default Home;
