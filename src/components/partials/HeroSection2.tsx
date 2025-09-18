import { Carousel, Image } from "react-bootstrap";
import styles from "./HeroSection2.module.scss";
const HeroSection2 = () => {
  const images = [
    {
      id: 1,
      imagePath: "../images/hero-silder-images/1.png",
    },
    {
      id: 2,
      imagePath: "../images/hero-silder-images/2.png",
    },
    {
      id: 3,
      imagePath: "../images/hero-silder-images/3.png",
    },
    {
      id: 4,
      imagePath: "../images/hero-silder-images/4.png",
    },
    {
      id: 5,
      imagePath: "../images/hero-silder-images/5.png",
    },
    {
      id: 6,
      imagePath: "../images/hero-silder-images/6.png",
    },
  ];

  return (
    <Carousel className={styles.carouselContainer}>
      {images.map((image) => (
        <Carousel.Item key={image.id} interval={1500}>
          <Image src={image.imagePath} height={500} width={600}></Image>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection2;
