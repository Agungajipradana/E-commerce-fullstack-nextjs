import { ProductsProps } from "@/types";
import style from "./AdidasKids.module.scss";
import Image from "next/image";
import AdidasLogo from "../../../../assets/images/popularBrand/adidas-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const AdidasKidsView = ({ adidasKids }: { adidasKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.adidasKids__title}>
        <Image src={AdidasLogo} alt="Adidas Logo" width={300} height={300} className={style.adidasKids__title__image} priority />
        <h1 className={style.adidasKids__title__h1}>Adidas For Kids</h1>
      </div>
      <div className={style.adidasKids}>
        <div className={style.adidasKids__grid}>
          {adidasKids?.length > 0 ? (
            <>
              {adidasKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/adidas/${product.id}`} product={product} key={product.id} />
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

export default AdidasKidsView;
