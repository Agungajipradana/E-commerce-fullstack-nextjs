import { ProductsProps } from "@/types";
import style from "./PumaKids.module.scss";
import Image from "next/image";
import PumaImage from "../../../../assets/images/popularBrand/puma-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const PumaKidsView = ({ pumaKids }: { pumaKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.pumaKids__title}>
        <Image src={PumaImage} alt="Puma Logo" width={300} height={300} className={style.pumaKids__title__image} priority />
        <h1 className={style.pumaKids__title__h1}>Puma For Kids</h1>
      </div>
      <div className={style.pumaKids}>
        <div className={style.pumaKids__grid}>
          {pumaKids?.length > 0 ? (
            <>
              {pumaKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/puma/${product.id}`} product={product} key={product.id} />
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

export default PumaKidsView;
