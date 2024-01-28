import { ProductsProps } from "@/types";
import style from "./OnitsukaMen.module.scss";
import Image from "next/image";
import OnitsukaImage from "../../../../assets/images/popularBrand/onitsuka-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const OnitsukaMenView = ({ onitsukaMen }: { onitsukaMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.onitsukaMen__title}>
        <Image src={OnitsukaImage} alt="Onitsuka Logo" width={300} height={300} className={style.onitsukaMen__title__image} priority />
        <h1 className={style.onitsukaMen__title__h1}>Onitsuka For Men</h1>
      </div>
      <div className={style.onitsukaMen}>
        <div className={style.onitsukaMen__grid}>
          {onitsukaMen?.length > 0 ? (
            <>
              {onitsukaMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/onitsuka/${product.id}`} product={product} key={product.id} />
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

export default OnitsukaMenView;
