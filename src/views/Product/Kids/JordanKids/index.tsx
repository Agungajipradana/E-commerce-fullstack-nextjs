import { ProductsProps } from "@/types";
import style from "./JordanKids.module.scss";
import Image from "next/image";
import JordanImage from "../../../../assets/images/popularBrand/jordan-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const JordanKidsView = ({ jordanKids }: { jordanKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.jordanKids__title}>
        <Image src={JordanImage} alt="Jordan Logo" width={300} height={300} className={style.jordanKids__title__image} priority />
        <h1 className={style.jordanKids__title__h1}>Jordan For Kids</h1>
      </div>
      <div className={style.jordanKids}>
        <div className={style.jordanKids__grid}>
          {jordanKids?.length > 0 ? (
            <>
              {jordanKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/jordan/${product.id}`} product={product} key={product.id} />
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

export default JordanKidsView;
