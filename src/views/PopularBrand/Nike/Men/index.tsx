import style from "./BrandNikeMen.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowProps } from "@/types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import nikeLogo from "../../../../assets/images/popularBrand/nike-logo.svg";
import nbLogo from "../../../../assets/images/popularBrand/nb-logo.svg";
import adidasLogo from "../../../../assets/images/popularBrand/adidas-logo..svg";
import asicsLogo from "../../../../assets/images/popularBrand/asics-logo.svg";
import jordanLogo from "../../../../assets/images/popularBrand/jordan-logo.svg";
import pumaLogo from "../../../../assets/images/popularBrand/puma-logo.svg";
import vansLogo from "../../../../assets/images/popularBrand/vans-logo.svg";
import converseLogo from "../../../../assets/images/popularBrand/converse-logo.svg";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";

const BrandNikeMen = () => {
  const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button className={style.prev} onClick={onClick}>
        <FaAngleLeft />
      </button>
    );
  };

  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button className={style.next} onClick={onClick}>
        <FaAngleRight />
      </button>
    );
  };

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow onClick={() => NextArrow} />,
    prevArrow: <PrevArrow onClick={() => PrevArrow} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={style.popularBrand}>
        <h1>Nike</h1>
        <div className={style.popular}>
          <Slider {...settings} className={style.slider}>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={nikeLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={jordanLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={adidasLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={asicsLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={nbLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={pumaLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={vansLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
            <div className={style.slider__item}>
              <Card className={style.slider__card}>
                <Image src={converseLogo} alt="" className={style.slider__image} />
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BrandNikeMen;
