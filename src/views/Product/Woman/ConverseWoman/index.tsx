import { ProductsProps } from "@/types";
import style from "./ConverseWoman.module.scss";
import Image from "next/image";
import ConverseImage from "../../../../assets/images/popularBrand/converse-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const ConverseWomanView = ({ converseWoman }: { converseWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.converseWoman__title}>
        <Image src={ConverseImage} alt="Converse Logo" width={300} height={300} className={style.converseWoman__title__image} priority />
        <h1 className={style.converseWoman__title__h1}>Converse For Woman</h1>
      </div>
      <div className={style.converseWoman}>
        <div className={style.converseWoman__grid}>
          {converseWoman?.length > 0 ? (
            <>
              {converseWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/converse/${product.id}`} product={product} key={product.id} />
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

export default ConverseWomanView;
