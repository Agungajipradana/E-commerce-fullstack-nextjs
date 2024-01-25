import Image from "next/image";
import searchIcon from "@/assets/images/navbar/search.svg";
import { useRouter } from "next/router";
import { RefObject, useEffect, useRef, useState } from "react";
import styles from "./search.module.scss";
import Link from "next/link";
import { ProductsProps } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { GetProductRequest, GetProductSuccess, GetProductFailed } from "@/utils/redux/action/productAction";
import productApi from "../api/axios/Product";

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
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.productState);
  const [isDropdownOpenSearch, setIsDropdownSearch] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductsProps[]>([]);
  const router = useRouter();

  // console.log(searchQuery);
  // console.log(searchResults);

  useEffect(() => {
    dispatch(GetProductRequest());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await productApi.getAllProducts();
        dispatch(GetProductSuccess(result));
      } catch (error) {
        dispatch(GetProductFailed(error));
      }
    };

    fetchData();
  }, [dispatch]);

  // console.log(products);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults([]);
    } else {
      if (products) {
        const filteredProducts = products.filter((product: ProductsProps) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchResults(filteredProducts);
      }
    }
  }, [searchQuery, products]);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
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

              {/* <button type="submit" className={styles.dropdownSearch__button__search}>
                Search
              </button> */}
              <button className={styles.dropdownSearch__button} onClick={handleCloseSearch}>
                Cancel
              </button>
            </div>
            {searchResults.length > 0 && (
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
            )}
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
