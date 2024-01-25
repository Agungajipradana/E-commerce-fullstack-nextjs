import React from "react";
import style from "./CardProductSkeleton.module.scss";

const CardProductSkeleton = () => {
  return (
    <>
      <div className={style.product__content__skeleton}>
        <div className={style.product__content__skeleton__image} />
        <div className={style.product__content__skeleton__name} />
        <div className={style.product__content__skeleton__category} />
        <div className={style.product__content__skeleton__price} />
      </div>
      <div className={style.product__content__skeleton}>
        <div className={style.product__content__skeleton__image} />
        <div className={style.product__content__skeleton__name} />
        <div className={style.product__content__skeleton__category} />
        <div className={style.product__content__skeleton__price} />
      </div>
      <div className={style.product__content__skeleton}>
        <div className={style.product__content__skeleton__image} />
        <div className={style.product__content__skeleton__name} />
        <div className={style.product__content__skeleton__category} />
        <div className={style.product__content__skeleton__price} />
      </div>
    </>
  );
};

export default CardProductSkeleton;
