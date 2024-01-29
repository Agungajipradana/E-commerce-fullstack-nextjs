import { ProductsProps } from "@/types";
import style from "./VansWoman.module.scss";
import Image from "next/image";
import VansImage from "../../../../assets/images/popularBrand/vans-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const VansWomanView = ({ vansWoman }: { vansWoman: ProductsProps[] }) => {
  return (
    <>
      <div className={style.vansWoman__title}>
        <Image src={VansImage} alt="Vans Logo" width={300} height={300} className={style.vansWoman__title__image} priority />
        <h1 className={style.vansWoman__title__h1}>Vans For Woman</h1>
      </div>
      <div className={style.vansWoman}>
        <div className={style.vansWoman__grid}>
          {vansWoman?.length > 0 ? (
            <>
              {vansWoman.map((product: ProductsProps) => (
                <CardProduct href={`/product/woman/vans/${product.id}`} product={product} key={product.id} />
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

export default VansWomanView;
