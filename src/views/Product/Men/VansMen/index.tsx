import { ProductsProps } from "@/types";
import style from "./VansMen.module.scss";
import Image from "next/image";
import VansImage from "../../../../assets/images/popularBrand/vans-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const VansMenView = ({ vansMen }: { vansMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.vansMen__title}>
        <Image src={VansImage} alt="Vans Logo" width={300} height={300} className={style.vansMen__title__image} priority />
        <h1 className={style.vansMen__title__h1}>Vans For Men</h1>
      </div>
      <div className={style.vansMen}>
        <div className={style.vansMen__grid}>
          {vansMen?.length > 0 ? (
            <>
              {vansMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/vans/${product.id}`} product={product} key={product.id} />
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

export default VansMenView;
