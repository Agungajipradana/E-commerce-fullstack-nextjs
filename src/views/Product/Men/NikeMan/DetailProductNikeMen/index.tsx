import { ProductsProps } from "@/types";
import styles from "./DetailProductNikeMen.module.scss";
import Image from "next/image";

const DetailProductNikeMenView = ({ nikeMen }: { nikeMen: ProductsProps }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div key={nikeMen?.id} className={styles.productDetail}>
        <div>
          <Image src={nikeMen?.image && nikeMen.image} alt={nikeMen?.name} width={300} height={300} priority className={styles.productDetail__image} />
        </div>
        <div className={styles.productDetail__desc}>
          <h4 className={styles.productDetail__name}>{nikeMen?.name}</h4>
          <p className={styles.productDetail__category}>{nikeMen?.category}</p>
          <p className={styles.productDetail__price}>
            {nikeMen?.price &&
              nikeMen.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
          </p>
          <div>
            <div className={styles.selectSize}>
              <p>Select Size</p>
              <p>Size Guid</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductNikeMenView;
