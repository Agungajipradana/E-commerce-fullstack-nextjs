import { ProductsProps } from "@/types";
import style from "./OnitsukaKids.module.scss";
import Image from "next/image";
import OnitsukaImage from "../../../../assets/images/popularBrand/onitsuka-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const OnitsukaKidsView = ({ onitsukaKids }: { onitsukaKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.onitsukaKids__title}>
        <Image src={OnitsukaImage} alt="Onitsuka Logo" width={300} height={300} className={style.onitsukaKids__title__image} priority />
        <h1 className={style.onitsukaKids__title__h1}>Onitsuka For Kids</h1>
      </div>
      <div className={style.onitsukaKids}>
        <div className={style.onitsukaKids__grid}>
          {onitsukaKids?.length > 0 ? (
            <>
              {onitsukaKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/onitsuka/${product.id}`} product={product} key={product.id} />
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

export default OnitsukaKidsView;
