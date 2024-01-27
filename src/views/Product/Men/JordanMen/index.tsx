import { ProductsProps } from "@/types";
import style from "./JordanMen.module.scss";
import Image from "next/image";
import JordanImage from "../../../../assets/images/popularBrand/jordan-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const JordanMenView = ({ jordanMen }: { jordanMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.jordanMen__title}>
        <Image src={JordanImage} alt="Jordan Logo" width={300} height={300} className={style.jordanMen__title__image} priority />
        <h1 className={style.jordanMen__title__h1}>Jordan For Men</h1>
      </div>
      <div className={style.jordanMen}>
        <div className={style.jordanMen__grid}>
          {jordanMen?.length > 0 ? (
            <>
              {jordanMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/jordan/${product.id}`} product={product} key={product.id} />
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

export default JordanMenView;
