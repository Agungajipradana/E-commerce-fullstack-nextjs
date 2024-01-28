import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductNbKidsView = ({ nbKids }: { nbKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={nbKids} />
    </>
  );
};

export default DetailProductNbKidsView;
