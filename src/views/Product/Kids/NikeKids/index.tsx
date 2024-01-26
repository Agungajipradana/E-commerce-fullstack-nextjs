import { ProductsProps } from "@/types";
import style from "./NikeKids.module.scss";
import Image from "next/image";
import NikeImage from "../../../../assets/images/popularBrand/nike-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const NikeKidsView = ({ nikeKids }: { nikeKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.nikeKids__title}>
        <Image src={NikeImage} alt="Nike Logo" width={300} height={300} className={style.nikeKids__title__image} priority />
        <h1 className={style.nikeKids__title__h1}>Nike For Kids</h1>
      </div>
      <div className={style.nikeKids}>
        <div className={style.nikeKids__grid}>
          {nikeKids?.length > 0 ? (
            <>
              {nikeKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/nike/${product.id}`} product={product} key={product.id} />
              ))}
            </>
          ) : (
            <CardProductSkeleton />
          )}
        </div>
      </div>
    </>
  );
};

export default NikeKidsView;
