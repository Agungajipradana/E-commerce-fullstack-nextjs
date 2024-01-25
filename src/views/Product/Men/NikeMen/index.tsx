import { ProductsProps } from "@/types";
import style from "./NikeMen.module.scss";
import Image from "next/image";
import NikeImage from "../../../../assets/images/popularBrand/nike-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const NikeManView = ({ nikeMen }: { nikeMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.nikeMen__title}>
        <Image src={NikeImage} alt="Nike Logo" width={300} height={300} className={style.nikeMen__title__image} />
        <h1 className={style.nikeMen__title__h1}>Nike For Man</h1>
      </div>
      <div className={style.nikeMen}>
        <div className={style.nikeMen__grid}>
          {nikeMen?.length > 0 ? (
            <>
              {nikeMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/nike/${product.id}`} product={product} key={product.id} />
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

export default NikeManView;
