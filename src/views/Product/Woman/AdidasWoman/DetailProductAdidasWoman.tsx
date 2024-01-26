import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductAdidasWomanView = ({ adidasWoman }: { adidasWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={adidasWoman} />
    </>
  );
};

export default DetailProductAdidasWomanView;
