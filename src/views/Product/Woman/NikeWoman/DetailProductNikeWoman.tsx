import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductNikeWomanView = ({ nikeWoman }: { nikeWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={nikeWoman} />
    </>
  );
};

export default DetailProductNikeWomanView;
