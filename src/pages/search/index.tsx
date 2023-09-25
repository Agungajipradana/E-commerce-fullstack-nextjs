import Image from "next/image";
import searchIcon from "@/assets/images/navbar/search.svg";
import { useRouter } from "next/router";
import { RefObject, useEffect, useRef, useState } from "react";
import styles from "./search.module.scss";
import Link from "next/link";

const navLinkSearch = [
  {
    label: "Browse All",
    path: "/product",
  },
  {
    label: "Nike",
    path: "/product/kids/nike",
  },
  {
    label: "Adidas",
    path: "/product/kids/adidas",
  },
  {
    label: "Jordan",
    path: "/product/kids/jordan",
  },
  {
    label: "Asics",
    path: "/product/kids/asics",
  },
  {
    label: "New balance",
    path: "/product/kids/newbalance",
  },
  {
    label: "Puma",
    path: "/product/kids/puma",
  },
  {
    label: "Vans",
    path: "/product/kids/vans",
  },
  {
    label: "Converse",
    path: "/product/kids/converse",
  },
];

const Search = () => {
  const [isDropdownOpenSearch, setIsDropdownSearch] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

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

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    // router.push(`/product?q=${searchQuery}`);
    // router.push(`/product/${searchQuery}`);
    router.push(`/product?keyword=${searchQuery}`);
  };

  const handleOpenSearch = () => {
    setIsDropdownSearch(true);
  };

  const handleCloseSearch = () => {
    setIsDropdownSearch(false);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className={styles.search}>
          <Image src={searchIcon} alt="" className={styles.search__image} />
          <input type="text" id="search" name="search" placeholder="Type any products here" className={styles.search__input} onClick={handleOpenSearch} />
        </div>
        {isDropdownOpenSearch && (
          <div ref={dropdownRef} className={styles.dropdownSearch}>
            <div className={styles.dropdownSearch__search}>
              <Image src={searchIcon} alt="" className={styles.search__image} />
              <input type="text" id="searchDropdown" name="searchDropdown" placeholder="Type any products here" className={styles.dropdownSearch__input} value={searchQuery} onChange={handleSearchChange} />

              <button type="submit" className={styles.dropdownSearch__button__search}>
                Search
              </button>
              <button className={styles.dropdownSearch__button} onClick={handleCloseSearch}>
                Cancel
              </button>
            </div>
            <div className={styles.dropdownSearch__brand}>
              {navLinkSearch.map((item, index) => (
                <div key={item.path} className={styles.dropdownSearch__brand__product}>
                  <Link href={item.path} className={`${styles.dropdownSearch__brand__product__link} ${index === 0 ? styles.boldLink : ""}`}>
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
