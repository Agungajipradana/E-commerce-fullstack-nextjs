import Image from "next/image";
import style from "./Nike.module.scss";
import NikeImage from "../../../assets/images/popularBrand/nike-logo.svg";
import { ProductsProps } from "@/types";
import Link from "next/link";

const NikeBrandViews = ({ nikeMen }: { nikeMen: ProductsProps[] }) => {
  return (
    <>
      <>
        <div className={style.nikeMan__title}>
          <Image src={NikeImage} alt="Nike Logo" width={300} height={300} className={style.nikeMan__title__image} />
          <h1 className={style.nikeMan__title__h1}>Nike For Man</h1>
        </div>
        <div className={style.nikeMen}>
          <div className={style.nikeMan__grid}>
            {nikeMen?.length > 0 ? (
              <>
                {nikeMen.map((product: ProductsProps) => (
                  <Link href={`/product/men/nike/${product.id}`} key={product.id} className={style.product__content__item}>
                    <div className={style.product__content__item__image}>
                      <Image src={product.image} alt={product.name} width={300} height={300} priority className={style.slider__image} />
                    </div>
                    <h4 className={style.product__content__item__name}>{product.name}</h4>
                    <p className={style.product__content__item__category}>{product.category}</p>
                    <p className={style.product__content__item__price}>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </Link>
                ))}
              </>
            ) : (
              <div className={style.product__content__skeleton}>
                <div className={style.product__content__skeleton__image} />
                <div className={style.product__content__skeleton__name} />
                <div className={style.product__content__skeleton__category} />
                <div className={style.product__content__skeleton__price} />
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default NikeBrandViews;
