import { ProductsProps } from "@/types";
import style from "./NikeMan.module.scss";
import Link from "next/link";
import Image from "next/image";
import NikeImage from "../../../../assets/images/popularBrand/nike-logo.svg";

const NikeManView = ({ nikeMan }: { nikeMan: ProductsProps[] }) => {
  return (
    <>
      <div className={style.nikeMan__title}>
        <Image src={NikeImage} alt="Nike Logo" width={300} height={300} className={style.nikeMan__title__image} />
        <h1 className={style.nikeMan__title__h1}>Nike For Man</h1>
      </div>
      <div className={style.nikeMan}>
        <div className={style.nikeMan__grid}>
          {nikeMan?.length > 0 ? (
            <>
              {nikeMan.map((product: ProductsProps) => (
                <Link href={`/product/${product.id}`} key={product.id} className={style.product__content__item}>
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
  );
};

export default NikeManView;
