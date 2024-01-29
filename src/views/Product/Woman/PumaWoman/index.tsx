import { ProductsProps } from "@/types";
import style from "./PumaWoman.module.scss";
import Image from "next/image";
import PumaImage from "../../../../assets/images/popularBrand/puma-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const PumaWomanView = ({ pumaWoman }: { pumaWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.pumaWoman__title}>
        <Image src={PumaImage} alt="Puma Logo" width={300} height={300} className={style.pumaWoman__title__image} priority />
        <h1 className={style.pumaWoman__title__h1}>Puma For Woman</h1>
      </div>
      <div className={style.pumaWoman}>
        <div className={style.pumaWoman__grid}>
          {pumaWoman?.length > 0 ? (
            <>
              {pumaWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/puma/${product.id}`} product={product} key={product.id} />
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

export default PumaWomanView;
