import { ProductsProps } from "@/types";
import style from "./PumaMen.module.scss";
import Image from "next/image";
import PumaImage from "../../../../assets/images/popularBrand/puma-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const PumaMenView = ({ pumaMen }: { pumaMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.pumaMen__title}>
        <Image src={PumaImage} alt="Puma Logo" width={300} height={300} className={style.pumaMen__title__image} priority />
        <h1 className={style.pumaMen__title__h1}>Puma For Men</h1>
      </div>
      <div className={style.pumaMen}>
        <div className={style.pumaMen__grid}>
          {pumaMen?.length > 0 ? (
            <>
              {pumaMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/puma/${product.id}`} product={product} key={product.id} />
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

export default PumaMenView;
