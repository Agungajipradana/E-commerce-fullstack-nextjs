import { ProductsProps } from "@/types";
import style from "./ConverseMen.module.scss";
import Image from "next/image";
import ConverseImage from "../../../../assets/images/popularBrand/converse-logo.svg";
import CardProduct from "@/components/Fragments/Card/CardProduct/CardProduct";
import CardProductSkeleton from "@/components/Fragments/Card/CardProductSkeleton/CardProductSkeleton";

const ConverseMenView = ({ converseMen }: { converseMen: ProductsProps[] }) => {
  return (
    <>
      <div className={style.converseMen__title}>
        <Image src={ConverseImage} alt="Converse Logo" width={300} height={300} className={style.converseMen__title__image} priority />
        <h1 className={style.converseMen__title__h1}>Converse For Men</h1>
      </div>
      <div className={style.converseMen}>
        <div className={style.converseMen__grid}>
          {converseMen?.length > 0 ? (
            <>
              {converseMen.map((product: ProductsProps) => (
                <CardProduct href={`/product/men/converse/${product.id}`} product={product} key={product.id} />
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

export default ConverseMenView;
