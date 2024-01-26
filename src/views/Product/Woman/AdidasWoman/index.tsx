import { ProductsProps } from "@/types";
import style from "./AdidasWoman.module.scss";
import Image from "next/image";
import AdidasImage from "../../../../assets/images/popularBrand/adidas-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const AdidasWomanView = ({ adidasWoman }: { adidasWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.adidasWoman__title}>
        <Image src={AdidasImage} alt="Adidas Logo" width={300} height={300} className={style.adidasWoman__title__image} priority />
        <h1 className={style.adidasWoman__title__h1}>Adidas For Woman</h1>
      </div>
      <div className={style.adidasWoman}>
        <div className={style.adidasWoman__grid}>
          {adidasWoman?.length > 0 ? (
            <>
              {adidasWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/adidas/${product.id}`} product={product} key={product.id} />
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

export default AdidasWomanView;
