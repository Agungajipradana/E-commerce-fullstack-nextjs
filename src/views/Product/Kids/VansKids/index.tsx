import { ProductsProps } from "@/types";
import style from "./VansKids.module.scss";
import Image from "next/image";
import VansImage from "../../../../assets/images/popularBrand/vans-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const VansKidsView = ({ vansKids }: { vansKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.vansKids__title}>
        <Image src={VansImage} alt="Vans Logo" width={300} height={300} className={style.vansKids__title__image} priority />
        <h1 className={style.vansKids__title__h1}>Vans For Kids</h1>
      </div>
      <div className={style.vansKids}>
        <div className={style.vansKids__grid}>
          {vansKids?.length > 0 ? (
            <>
              {vansKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/vans/${product.id}`} product={product} key={product.id} />
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

export default VansKidsView;
