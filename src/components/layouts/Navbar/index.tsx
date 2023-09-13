import { signIn, useSession, signOut } from "next-auth/react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import searchIcon from "@/assets/images/navbar/search.svg";
import Link from "next/link";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FaBars, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const navLink = [
  { label: "New Arrivals", path: "/product/newarrivals" },
  { label: "Men", path: "/product/men" },
  { label: "Woman", path: "/product/woman" },
  { label: "Kids", path: "/product/kids" },
];

const Navbar = () => {
  const { data }: any = useSession();

  function OffCanvasExample({ name, ...props }: any) {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const handleOpenSidebar = () => setOpenSideBar(true);
    const handleClose = () => setOpenSideBar(false);
    return (
      <>
        <>
          <Button onClick={handleOpenSidebar} className={styles.Offcanvas__button}>
            <FaBars size={24} color="black" />
          </Button>
          <Offcanvas show={openSideBar} onHide={handleClose} {...props} className={styles.Offcanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.Offcanvas__body}>
              {navLink.map((item) => (
                <Link href={item.path} key={item.path} className={styles.Offcanvas__body__link}>
                  {item.label}
                  <FaAngleRight size={24} className={styles.Offcanvas__body__link__icon} />
                </Link>
              ))}

              <div>
                {data?.user?.image && <Image className={styles.avatar} src={data.user.image} alt={data.user.fullname} width={30} height={30} />}
                {data && data.user.fullname}
                {data ? (
                  <button className={styles.Offcanvas__body__button} onClick={() => signOut()}>
                    Sign out
                  </button>
                ) : (
                  <button className={styles.Offcanvas__body__button} onClick={() => signIn()}>
                    Sign In
                  </button>
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </>
    );
  }

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
      <div className={styles.carouselDiscount}>
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

  return (
    <>
      {/* Desktop View */}
      <div className={styles.navbar}>
        <div>
          <form>
            <div className={styles.navbar__search}>
              <Image src={searchIcon} alt="" className={styles.navbar__search__image} />
              <input type="text" id="search" name="search" placeholder="Type any products here" className={styles.navbar__search__input} />
            </div>
          </form>
        </div>
        <div className={styles.navbar__navlink}>
          {navLink.map((item) => (
            <Link href={item.path} key={item.path} className={styles.navbar__navlink__link}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles.profile}>
          {data?.user?.image && <Image className={styles.avatar} src={data.user.image} alt={data.user.fullname} width={30} height={30} />}
          {data && data.user.fullname}
          {data ? (
            <button className={styles.button} onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <button className={styles.button} onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className={styles.navbar__mobile}>
        <form>
          <div className={styles.navbar__search}>
            <Image src={searchIcon} alt="" className={styles.navbar__mobile__search__image} />
            <input type="text" id="search" name="search" placeholder="Type any products here" className={styles.navbar__mobile__search__input} />
          </div>
        </form>
        {["end"].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </div>
      <DiscountCarousel />
    </>
  );
};

export default Navbar;
