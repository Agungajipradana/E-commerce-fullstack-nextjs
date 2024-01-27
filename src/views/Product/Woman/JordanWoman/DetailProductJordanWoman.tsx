import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductJordanWomanView = ({ jordanWoman }: { jordanWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={jordanWoman} />
    </>
  );
};

export default DetailProductJordanWomanView;
