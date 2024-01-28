import { ProductsProps } from "@/types";
import style from "./NbMen.module.scss";
import Image from "next/image";
import NbImage from "../../../../assets/images/popularBrand/nb-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const NbMenView = ({ nbMen }: { nbMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.nbMen__title}>
        <Image src={NbImage} alt="New Balance Logo" width={300} height={300} className={style.nbMen__title__image} priority />
        <h1 className={style.nbMen__title__h1}>New Balance For Men</h1>
      </div>
      <div className={style.nbMen}>
        <div className={style.nbMen__grid}>
          {nbMen?.length > 0 ? (
            <>
              {nbMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/nb/${product.id}`} product={product} key={product.id} />
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

export default NbMenView;
