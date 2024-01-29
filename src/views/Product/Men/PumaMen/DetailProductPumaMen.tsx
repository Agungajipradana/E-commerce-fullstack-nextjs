import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductPumaMenView = ({ pumaMen }: { pumaMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={pumaMen} />
    </>
  );
};

export default DetailProductPumaMenView;
