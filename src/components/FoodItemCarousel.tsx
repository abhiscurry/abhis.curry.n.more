// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import styles from "./FoodItemCarousel.module.scss";
import { Container } from "react-bootstrap";
const MenuCarousel = () => {
  const images = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DSVTVneCSbF/?igsh=MW1pMGZ1azdlenYxeQ==",
      imagePath: "../images/reels/Deepakbhai.png",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DSz79LnEYa9/?igsh=MTlkNDZqaWd6Mm10aw==",
      imagePath: "../images/reels/Fooditems.png",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DR5CmRsiRaQ/?igsh=ZHM0Mm80bTZxODVq",
      imagePath: "../images/reels/Fooditems2.png",
    },
    {
      id: 4,
      url: "https://www.instagram.com/reel/DL_H0JJpYm6/?igsh=MTdubzQ5aHN2ODN5cw==",
      imagePath: "../images/reels/foodTuck.png",
      
    },
  ];

  return (
    <>
      <div className={`${styles.foodItemCarouselContainer}`}>
        <Container className="p-5 text-center">
          <Splide
            options={{
              perPage: 3,
              gap: 1,
              type: "loop",
              pauseOnHover: true,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
            }}
            className={styles.carousel}
          >
            {images.map((image, index) => (
              <SplideSlide key={image.id}>
                <a href={image.url}>
                  <img
                    src={image.imagePath}
                    alt={`Slide ${index + 1}`}
                    className={styles.reelsThumbnail}
                  />
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </Container>
      </div>
    </>
  );
};

export default MenuCarousel;
