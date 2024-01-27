import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductJordanMenView = ({ jordanMen }: { jordanMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={jordanMen} />
    </>
  );
};

export default DetailProductJordanMenView;
