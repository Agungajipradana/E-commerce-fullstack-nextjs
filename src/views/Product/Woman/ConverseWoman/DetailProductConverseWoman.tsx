import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductConverseWomanView = ({ converseWoman }: { converseWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={converseWoman} />
    </>
  );
};

export default DetailProductConverseWomanView;
