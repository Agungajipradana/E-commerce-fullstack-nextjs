import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imageShoes1 from "../../../assets/images/hero/onitsuka-shoes.jpg";
import imageShoes2 from "../../../assets/images/hero/nike-shoes.jpg";
import imageShoes3 from "../../../assets/images/hero/adidas-shoes.jpg";
import imageShoes4 from "../../../assets/images/hero/nb-shoes.jpg";
import styles from "./Hero.module.scss";
import Image from "next/image";

const HeroPage = () => {
  function ImageCarousel() {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: any) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel}>
        <Carousel.Item className={styles.carousel__item}>
          <Image src={imageShoes3} alt="" className={styles.carousel__item__image} priority />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={imageShoes2} alt="" className={styles.carousel__item__image} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={imageShoes1} alt="" className={styles.carousel__item__image} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={imageShoes4} alt="" className={styles.carousel__item__image} />
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <>
      <ImageCarousel />
    </>
  );
};

export default HeroPage;
