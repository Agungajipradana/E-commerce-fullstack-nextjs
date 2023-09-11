import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../../assets/images/hero/shoe.png";
import style from "./Hero.module.scss";
import Image from "next/image";

const HeroPage = () => {
  function ControlledCarousel() {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: any) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className={`bg-secondary ${style.carousel}`}>
        <Carousel.Item className={style.carousel__item}>
          <Image src={ExampleCarouselImage} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ExampleCarouselImage} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ExampleCarouselImage} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <>
      <ControlledCarousel />
    </>
  );
};

export default HeroPage;
