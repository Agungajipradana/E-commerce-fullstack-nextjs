import { ProductsProps } from "@/types";
import style from "./JordanWoman.module.scss";
import Image from "next/image";
import JordanImage from "../../../../assets/images/popularBrand/jordan-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const JordanWomanView = ({ jordanWoman }: { jordanWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.jordanWoman__title}>
        <Image src={JordanImage} alt="Jordan Logo" width={300} height={300} className={style.jordanWoman__title__image} priority />
        <h1 className={style.jordanWoman__title__h1}>Jordan For Woman</h1>
      </div>
      <div className={style.jordanWoman}>
        <div className={style.jordanWoman__grid}>
          {jordanWoman?.length > 0 ? (
            <>
              {jordanWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/jordan/${product.id}`} product={product} key={product.id} />
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

export default JordanWomanView;
