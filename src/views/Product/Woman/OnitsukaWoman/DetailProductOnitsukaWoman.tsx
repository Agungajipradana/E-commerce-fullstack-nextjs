import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductOnitsukaWomanView = ({ onitsukaWoman }: { onitsukaWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={onitsukaWoman} />
    </>
  );
};

export default DetailProductOnitsukaWomanView;
