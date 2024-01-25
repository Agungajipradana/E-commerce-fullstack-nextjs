import { ProductsProps } from "@/types";
import styles from "./CardProductDetail.module.scss";
import Image from "next/image";
import { useState } from "react";
import ButtonViewProductDetails from "@/components/Elements/Button/ButtonViewProductDetails/ButtonViewProductDetails";

interface CardProductDetailProps {
  detailProduct: {
    id: string;
    name: string;
    image: string;
    description: string;
    sole: string;
    color: string;
    style: string;
    country: string;
    titleOrigins: string;
    origins: string;
    category: string;
    price: number;
    size: number[];
  };
}

const CardProductDetail = ({ detailProduct }: CardProductDetailProps) => {
  const [activeSize, setActiveSize] = useState<string | null>(null);

  const toggleSize = (size: string) => {
    if (activeSize === size) {
      setActiveSize(null);
    } else {
      setActiveSize(size);
    }
  };

  return (
    <div key={detailProduct?.id} className={styles.productDetail}>
      <div className={styles.productDetail__between}>
        <div>
          <Image src={detailProduct?.image && detailProduct.image} alt={detailProduct?.name} width={300} height={300} priority className={styles.productDetail__image} />
        </div>
        <div className={styles.productDetail__desc}>
          <h4 className={styles.productDetail__name}>{detailProduct?.name}</h4>
          <p className={styles.productDetail__category}>{detailProduct?.category}</p>
          <p className={styles.productDetail__price}>
            {detailProduct?.price &&
              detailProduct.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
          </p>
          <div className={styles.productDetail__selectSize}>
            <p className={styles.productDetail__selectSize__p}>Select Size</p>
            <p>Size Guide</p>
          </div>
          <div className={styles.productDetail__size}>
            {detailProduct.size?.map((size) => (
              <div key={size}>
                <button className={`${styles.productDetail__size__button} ${activeSize === size.toString() ? styles.activeSizeButton : ""}`} onClick={() => toggleSize(size.toString())}>
                  EU {size}
                </button>
              </div>
            ))}
          </div>
          <div className={styles.productDetail__button}>
            <button className={styles.productDetail__button__addToCart}>Add to Cart</button>
            <button className={styles.productDetail__button__buyNow}>Buy Now</button>
          </div>
          <div className={styles.productDetail__button__view}>
            <ButtonViewProductDetails detailProduct={detailProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
