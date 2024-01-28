import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductNbWomanView = ({ nbWoman }: { nbWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={nbWoman} />
    </>
  );
};

export default DetailProductNbWomanView;
