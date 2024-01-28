import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductOnitsukaMenView = ({ onitsukaMen }: { onitsukaMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={onitsukaMen} />
    </>
  );
};

export default DetailProductOnitsukaMenView;
