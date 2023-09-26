import Image from "next/image";
import searchIcon from "@/assets/images/navbar/search.svg";
import { useRouter } from "next/router";
import { RefObject, useEffect, useRef, useState } from "react";
import styles from "./search.module.scss";
import Link from "next/link";
import { ProductsProps } from "@/types";

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
  const [searchResults, setSearchResults] = useState([]);
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

  const handleSearch = async (e: any) => {
    // e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    // router.push(`/product?q=${searchQuery}`);
    // router.push(`/product/${searchQuery}`);
    // router.push(`/product?keyword=${searchQuery}`);
    const pathSegments = router.asPath.split("/");
    const brandSegment = pathSegments[pathSegments.length - 1];

    try {
      // const response = await fetch(`/api/search?keyword=${searchQuery}`);
      let response;
      let apiPath;

      if (brandSegment === "nike") {
        apiPath = `/api/men/nike?keyword=${query}`;
      } else if (brandSegment === "adidas") {
        apiPath = `/api/adidas?keyword=${query}`;
      } else {
        apiPath = `/api/product?keyword=${query}`;
      }

      response = await fetch(apiPath);

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.data);
      } else {
        console.error("Gagal mengambil data dari API");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data:", error);
    }
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
              <input type="text" id="searchDropdown" name="searchDropdown" placeholder="Type any products here" className={styles.dropdownSearch__input} value={searchQuery} onChange={handleSearch} />

              {/* <button type="submit" className={styles.dropdownSearch__button__search}>
                Search
              </button> */}
              <button className={styles.dropdownSearch__button} onClick={handleCloseSearch}>
                Cancel
              </button>
            </div>
            <div className={styles.dropdownSearch__products}>
              {searchResults.map((product: ProductsProps) => (
                <div key={product.id} className={styles.dropdownSearch__products__product}>
                  <Link href={`/product/${product.id}`} className={styles.dropdownSearch__products__product__link}>
                    <Image src={product.image} alt={product.name} width={200} height={200} className={styles.dropdownSearch__products__product__image} />
                  </Link>
                  <h3 className={styles.dropdownSearch__products__product__name}>{product.name.slice(0, 30)}...</h3>
                </div>
              ))}
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
