import { ProductsProps } from "@/types";
import style from "./NbKids.module.scss";
import Image from "next/image";
import NbImage from "../../../../assets/images/popularBrand/nb-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const NbKidsView = ({ nbKids }: { nbKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.nbKids__title}>
        <Image src={NbImage} alt="New Balance Logo" width={300} height={300} className={style.nbKids__title__image} priority />
        <h1 className={style.nbKids__title__h1}>New Balance For Kids</h1>
      </div>
      <div className={style.nbKids}>
        <div className={style.nbKids__grid}>
          {nbKids?.length > 0 ? (
            <>
              {nbKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/nb/${product.id}`} product={product} key={product.id} />
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

export default NbKidsView;
