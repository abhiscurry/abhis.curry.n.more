import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import styles from "./FoodItemCarousel.module.scss";
import { Container } from "react-bootstrap";
const MenuCarousel = () => {
  const images = [
    "https://picsum.photos/id/1/397/500",
    "https://picsum.photos/id/2/397/500",
    "https://picsum.photos/id/3/397/500",
    "https://picsum.photos/id/4/397/500",
    "https://picsum.photos/id/5/397/500",
    "https://picsum.photos/id/6/397/500",
  ];

  return (
    <>
      <div className={`${styles.foodItemCarouselContainer}`}>
        <Container className="p-5">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
              gap: "1rem",
              autoplay: false,
              pauseOnHover: true,
              breakpoints: {
                768: { perPage: 3 },
                480: { perPage: 1.2 },
              },
            }}
            className={styles.carousel}
          >
            {images.map((src, i) => (
              <SplideSlide key={i}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  // className={`${styles.foodItemCarouselImage}`}
                />
              </SplideSlide>
            ))}
          </Splide>
        </Container>
      </div>
    </>
  );
};

export default MenuCarousel;
