import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductNikeKidsView = ({ nikeKids }: { nikeKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={nikeKids} />
    </>
  );
};

export default DetailProductNikeKidsView;
