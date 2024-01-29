import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductVansMenView = ({ vansMen }: { vansMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={vansMen} />
    </>
  );
};

export default DetailProductVansMenView;
