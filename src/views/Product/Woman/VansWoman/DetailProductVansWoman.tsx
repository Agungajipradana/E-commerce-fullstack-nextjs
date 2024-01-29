import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductVansWomanView = ({ vansWoman }: { vansWoman: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={vansWoman} />
    </>
  );
};

export default DetailProductVansWomanView;
