import { ProductsProps } from "@/types";
import style from "./OnitsukaWoman.module.scss";
import Image from "next/image";
import OnitsukaImage from "../../../../assets/images/popularBrand/onitsuka-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const OnitsukaWomanView = ({ onitsukaWoman }: { onitsukaWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.onitsukaWoman__title}>
        <Image src={OnitsukaImage} alt="Onitsuka Logo" width={300} height={300} className={style.onitsukaWoman__title__image} priority />
        <h1 className={style.onitsukaWoman__title__h1}>Onitsuka For Woman</h1>
      </div>
      <div className={style.onitsukaWoman}>
        <div className={style.onitsukaWoman__grid}>
          {onitsukaWoman?.length > 0 ? (
            <>
              {onitsukaWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/onitsuka/${product.id}`} product={product} key={product.id} />
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

export default OnitsukaWomanView;
