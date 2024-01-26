import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductAdidasMenView = ({ adidasMen }: { adidasMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={adidasMen} />
    </>
  );
};

export default DetailProductAdidasMenView;
