import { ProductsProps } from "@/types";
import style from "./Men.module.scss";
import Link from "next/link";
import Image from "next/image";

const MenView = ({ nikeMan }: { nikeMan: ProductsProps[] }) => {
  return (
    <>
      <div className={style.men}>Men</div>
      <div className={style.product}>
        <h1 className={style.product__title}>Product</h1>
        <div className={style.product__content}>
          {nikeMan?.length > 0 ? (
            <>
              {nikeMan.map((product: ProductsProps) => (
                <Link href={`/product/${product.id}`} key={product.id} className={style.product__content__item}>
                  <div className={style.product__content__item__image}>
                    <Image src={product.image} alt={product.name} width={500} height={500} priority />
                  </div>
                  <h4 className={style.product__content__item__name}>{product.name}</h4>
                  <p className={style.product__content__item__category}>{product.category}</p>
                  <p className={style.product__content__item__price}>
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
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

export default MenView;
