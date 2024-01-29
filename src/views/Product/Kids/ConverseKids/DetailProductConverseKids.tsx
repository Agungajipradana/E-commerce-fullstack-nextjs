import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductConverseKidsView = ({ converseKids }: { converseKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={converseKids} />
    </>
  );
};

export default DetailProductConverseKidsView;
