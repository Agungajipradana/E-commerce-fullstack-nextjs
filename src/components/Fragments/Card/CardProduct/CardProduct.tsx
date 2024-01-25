import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./CardProduct.module.scss";

interface CardProductProps {
  href: string;
  product: {
    id: string;
    name: string;
    image: string;
    category: string;
    price: number;
  };
}

const CardProduct = ({ href, product }: CardProductProps) => {
  return (
    <>
      <Link href={href} key={product.id} className={style.product__content__item}>
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
    </>
  );
};

export default CardProduct;
