import { ProductsProps } from "@/types";
import style from "./NbWoman.module.scss";
import Image from "next/image";
import NbImage from "../../../../assets/images/popularBrand/nb-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const NbWomanView = ({ nbWoman }: { nbWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.nbWoman__title}>
        <Image src={NbImage} alt="New Balance Logo" width={300} height={300} className={style.nbWoman__title__image} priority />
        <h1 className={style.nbWoman__title__h1}>New Balance For Woman</h1>
      </div>
      <div className={style.nbWoman}>
        <div className={style.nbWoman__grid}>
          {nbWoman?.length > 0 ? (
            <>
              {nbWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/nb/${product.id}`} product={product} key={product.id} />
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

export default NbWomanView;
