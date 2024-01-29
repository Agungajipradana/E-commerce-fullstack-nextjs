import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductPumaWomanView = ({ pumaWoman }: { pumaWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={pumaWoman} />
    </>
  );
};

export default DetailProductPumaWomanView;
