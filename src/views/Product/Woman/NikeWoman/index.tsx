import { ProductsProps } from "@/types";
import style from "./NikeWoman.module.scss";
import Image from "next/image";
import NikeImage from "../../../../assets/images/popularBrand/nike-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const NikeWomanView = ({ nikeWoman }: { nikeWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.nikeWoman__title}>
        <Image src={NikeImage} alt="Nike Logo" width={300} height={300} className={style.nikeWoman__title__image} priority />
        <h1 className={style.nikeWoman__title__h1}>Nike For Woman</h1>
      </div>
      <div className={style.nikeWoman}>
        <div className={style.nikeWoman__grid}>
          {nikeWoman?.length > 0 ? (
            <>
              {nikeWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/nike/${product.id}`} product={product} key={product.id} />
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

export default NikeWomanView;
