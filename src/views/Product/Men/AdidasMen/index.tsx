import { ProductsProps } from "@/types";
import style from "./AdidasMen.module.scss";
import Image from "next/image";
import AdidasImage from "../../../../assets/images/popularBrand/adidas-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const AdidasMenView = ({ adidasMen }: { adidasMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.adidasMen__title}>
        <Image src={AdidasImage} alt="Adidas Logo" width={300} height={300} className={style.adidasMen__title__image} priority />
        <h1 className={style.adidasMen__title__h1}>Adidas For Men</h1>
      </div>
      <div className={style.adidasMen}>
        <div className={style.adidasMen__grid}>
          {adidasMen?.length > 0 ? (
            <>
              {adidasMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/adidas/${product.id}`} product={product} key={product.id} />
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

export default AdidasMenView;
