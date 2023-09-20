import { signIn, useSession, signOut } from "next-auth/react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import searchIcon from "@/assets/images/navbar/search.svg";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";
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

const navLinkMen = [
  {
    label: "Nike",
    path: "/product/men/nike",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Adidas",
    path: "/product/men/adidas",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Jordan",
    path: "/product/men/jordan",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Asics",
    path: "/product/men/asics",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "New balance",
    path: "/product/men/newbalance",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Puma",
    path: "/product/men/puma",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Vans",
    path: "/product/men/vans",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Converse",
    path: "/product/men/converse",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
];

const navLinkWoman = [
  {
    label: "Nike",
    path: "/product/woman/nike",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Adidas",
    path: "/product/woman/adidas",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Jordan",
    path: "/product/woman/jordan",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Asics",
    path: "/product/woman/asics",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "New balance",
    path: "/product/woman/newbalance",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Puma",
    path: "/product/woman/puma",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Vans",
    path: "/product/woman/vans",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Converse",
    path: "/product/woman/converse",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
];

const navLinkKids = [
  {
    label: "Nike",
    path: "/product/kids/nike",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Adidas",
    path: "/product/kids/adidas",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Jordan",
    path: "/product/kids/jordan",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Asics",
    path: "/product/kids/asics",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "New balance",
    path: "/product/kids/newbalance",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Puma",
    path: "/product/kids/puma",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Vans",
    path: "/product/kids/vans",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
  {
    label: "Converse",
    path: "/product/kids/converse",
    categories: ["All Shoes", "Lifestyle", "Running", "Basketball", "Football"],
  },
];

const Navbar = () => {
  const { data }: any = useSession();
  const [isDropdownOpenSearch, setIsDropdownSearch] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
        handleCloseSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenSearch = () => {
    setIsDropdownSearch(true);
  };

  const handleCloseSearch = () => {
    setIsDropdownSearch(false);
  };

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
              <Offcanvas.Title>
                {" "}
                {data?.user?.image && <Image className={styles.Offcanvas__body__profile__avatar} src={data.user.image} alt={data.user.fullname} width={30} height={30} />}
                {data && data.user.fullname}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.Offcanvas__body}>
              {navLink.map((item) => (
                <Link href={item.path} key={item.path} className={styles.Offcanvas__body__link}>
                  {item.label}
                  <FaAngleRight size={24} className={styles.Offcanvas__body__link__icon} />
                </Link>
              ))}

              <div className={styles.Offcanvas__body__profile}>
                {/* {data?.user?.image && <Image className={styles.Offcanvas__body__profile__avatar} src={data.user.image} alt={data.user.fullname} width={30} height={30} />}
                {data && data.user.fullname} */}
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

  const NewArrivalsBar = () => {
    const [isDropdownOpenNewArrivals, setIsDropdownOpenNewArrivals] = useState(false);
    return (
      <div className={styles.dropdown} onMouseEnter={() => setIsDropdownOpenNewArrivals(true)} onMouseLeave={() => setIsDropdownOpenNewArrivals(false)}>
        <h5 className={styles.navbar__navlink__link}>New Arrivals</h5>
        <div className={styles.dropdown__dropDownContent}>
          {isDropdownOpenNewArrivals && (
            <div className={styles.dropdown__dropDownContent__link}>
              <div className={styles.gridContainer}>
                {navLinkMen.map((item) => (
                  <div key={item.path} className={styles.dropdownItem}>
                    <Link href={item.path} className={styles.dropdownItem__link}>
                      {item.label}
                    </Link>
                    <div className={styles.categories}>
                      {item.categories.map((category) => (
                        <Link key={category} href={`${item.path}?category=${category}`} className={styles.categories__categoryLink}>
                          <ul>
                            <li className={styles.categories__categoryLink__li}>{category}</li>
                          </ul>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const MenBar = () => {
    const [isDropdownOpenMen, setIsDropdownOpenMen] = useState(false);
    return (
      <div className={styles.dropdown} onMouseEnter={() => setIsDropdownOpenMen(true)} onMouseLeave={() => setIsDropdownOpenMen(false)}>
        <h5 className={styles.navbar__navlink__link}>Men</h5>
        <div className={styles.dropdown__dropDownContent}>
          {isDropdownOpenMen && (
            <div className={styles.dropdown__dropDownContent__link}>
              <div className={styles.gridContainer}>
                {navLinkMen.map((item) => (
                  <div key={item.path} className={styles.dropdownItem}>
                    <Link href={item.path} className={styles.dropdownItem__link}>
                      {item.label}
                    </Link>
                    <div className={styles.categories}>
                      {item.categories.map((category) => (
                        <Link key={category} href={`${item.path}?category=${category}`} className={styles.categories__categoryLink}>
                          <ul>
                            <li className={styles.categories__categoryLink__li}>{category}</li>
                          </ul>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const WomanBar = () => {
    const [isDropdownOpenWoman, setIsDropdownOpenWoman] = useState(false);
    return (
      <div className={styles.dropdown} onMouseEnter={() => setIsDropdownOpenWoman(true)} onMouseLeave={() => setIsDropdownOpenWoman(false)}>
        <h5 className={styles.navbar__navlink__link}>Woman</h5>
        <div className={styles.dropdown__dropDownContent}>
          {isDropdownOpenWoman && (
            <div className={styles.dropdown__dropDownContent__link}>
              <div className={styles.gridContainer}>
                {navLinkWoman.map((item) => (
                  <div key={item.path} className={styles.dropdownItem}>
                    <Link href={item.path} className={styles.dropdownItem__link}>
                      {item.label}
                    </Link>
                    <div className={styles.categories}>
                      {item.categories.map((category) => (
                        <Link key={category} href={`${item.path}?category=${category}`} className={styles.categories__categoryLink}>
                          <ul>
                            <li className={styles.categories__categoryLink__li}>{category}</li>
                          </ul>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const KidsBar = () => {
    const [isDropdownOpenKids, setIsDropdownOpenKids] = useState(false);
    return (
      <div className={styles.dropdown} onMouseEnter={() => setIsDropdownOpenKids(true)} onMouseLeave={() => setIsDropdownOpenKids(false)}>
        <h5 className={styles.navbar__navlink__link}>Kids</h5>
        <div className={styles.dropdown__dropDownContent}>
          {isDropdownOpenKids && (
            <div className={styles.dropdown__dropDownContent__link}>
              <div className={styles.gridContainer}>
                {navLinkKids.map((item) => (
                  <div key={item.path} className={styles.dropdownItem}>
                    <Link href={item.path} className={styles.dropdownItem__link}>
                      {item.label}
                    </Link>
                    <div className={styles.categories}>
                      {item.categories.map((category) => (
                        <Link key={category} href={`${item.path}?category=${category}`} className={styles.categories__categoryLink}>
                          <ul>
                            <li className={styles.categories__categoryLink__li}>{category}</li>
                          </ul>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop View */}
      <div className={styles.navbar}>
        <div>
          <form>
            <div className={styles.navbar__search}>
              <Image src={searchIcon} alt="" className={styles.navbar__search__image} />
              <input type="text" id="search" name="search" placeholder="Type any products here" className={styles.navbar__search__input} onClick={handleOpenSearch} />
            </div>
            {isDropdownOpenSearch && (
              <div ref={dropdownRef} className={styles.dropdownSearch}>
                <div className={styles.dropdownSearch__search}>
                  <Image src={searchIcon} alt="" className={styles.navbar__search__image} />
                  <input type="text" id="searchDropdown" name="searchDropdown" placeholder="Type any products here" className={styles.dropdownSearch__input} />
                  <button className={styles.dropdownSearch__button} onClick={handleCloseSearch}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className={styles.navbar__navlink}>
          {/* New Arrivals Bar */}
          <NewArrivalsBar />

          {/* Men Bar */}
          <MenBar />

          {/* Woman Bar */}
          <WomanBar />

          {/* Kids Bar */}
          <KidsBar />
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
