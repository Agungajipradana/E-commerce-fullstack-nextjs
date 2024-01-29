import { ProductsProps } from "@/types";
import style from "./ConverseKids.module.scss";
import Image from "next/image";
import ConverseImage from "../../../../assets/images/popularBrand/converse-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const ConverseKidsView = ({ converseKids }: { converseKids: ProductsProps[] }) => {
  return (
    <>
      <div className={style.converseKids__title}>
        <Image src={ConverseImage} alt="Converse Logo" width={300} height={300} className={style.converseKids__title__image} priority />
        <h1 className={style.converseKids__title__h1}>Converse For Kids</h1>
      </div>
      <div className={style.converseKids}>
        <div className={style.converseKids__grid}>
          {converseKids?.length > 0 ? (
            <>
              {converseKids.map((product: ProductsProps) => (
                <CardProduct href={`/product/kids/converse/${product.id}`} product={product} key={product.id} />
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

export default ConverseKidsView;
