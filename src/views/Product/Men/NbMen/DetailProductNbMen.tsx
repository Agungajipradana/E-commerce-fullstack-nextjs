import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductNbMenView = ({ nbMen }: { nbMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={nbMen} />
    </>
  );
};

export default DetailProductNbMenView;
