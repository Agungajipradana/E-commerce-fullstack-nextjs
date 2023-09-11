import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imageShoes1 from "../../../assets/images/hero/onitsuka-shoes.jpg";
import imageShoes2 from "../../../assets/images/hero/nike-shoes.jpg";
import imageShoes3 from "../../../assets/images/hero/adidas-shoes.jpg";
import imageShoes4 from "../../../assets/images/hero/nb-shoes.jpg";
import style from "./Hero.module.scss";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroPage = () => {
  function DiscountCarousel() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 2500,
      cssEase: "linear",
    };
    return (
      <div className={style.carouselDiscount}>
        <Slider {...settings}>
          <div>
            <h6>Hello Sneakers App</h6>
            <p>
              Download the app to access everything Sneakers. <a href="">Get Your Great</a>
            </p>
          </div>
          <div>
            <h6>New Styles on Sale: Up to 40% Off </h6>
            <a href="">Shop All Our New Markdowns</a>
          </div>
          <div>
            <h6>Free Delivery</h6>
            <p>
              Applies to orders of Rp3.000.000 or more. <a href="">View details</a>
            </p>
          </div>
          <div>
            <h6> Students Now Get 10% Off </h6>
            <a href="">Learn More</a>
          </div>
        </Slider>
      </div>
    );
  }

  function ImageCarousel() {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: any) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className={style.carousel}>
        <Carousel.Item className={style.carousel__item}>
          <Image src={imageShoes3} alt="" className={style.carousel__item__image} priority />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={imageShoes2} alt="" className={style.carousel__item__image} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={imageShoes1} alt="" className={style.carousel__item__image} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={imageShoes4} alt="" className={style.carousel__item__image} />
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <>
      <DiscountCarousel />
      <ImageCarousel />
    </>
  );
};

export default HeroPage;
