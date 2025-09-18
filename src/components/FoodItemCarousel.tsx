// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import styles from "./FoodItemCarousel.module.scss";
import { Container } from "react-bootstrap";
const MenuCarousel = () => {
  const images = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DOBFZmODgIf/?igsh=MWNrZGtvajl3MmVrdQ==",
      imagePath: "../images/reels/deepakbhaiFafda.png",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DB3yeivpSq7/?igsh=anMwY2E0Z3Z5bnBw",
      imagePath: "../images/reels/deepakbhaiJaleebi.png",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DL_H0JJpYm6/?igsh=MTdubzQ5aHN2ODN5cw==",
      imagePath: "../images/reels/foodTuck.png",
    },
    {
      id: 4,
      url: "https://www.instagram.com/reel/DJ7VPSdJvC_/?igsh=MXMzMjIweXNoanN2YQ==",
      imagePath: "../images/reels/burgar.png",
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
                    height={600}
                    width={390}
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
