import { ProductsProps } from "@/types";
import styles from "./DetailProductNikeMen.module.scss";
import Image from "next/image";

const DetailProductNikeMenView = ({ product }: { product: ProductsProps }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div key={product.id} className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <Image src={product.image && product.image} alt={product.name} width={300} height={300} priority />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProductNikeMenView;
