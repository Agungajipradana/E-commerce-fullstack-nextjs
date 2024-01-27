import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductJordanKidsView = ({ jordanKids }: { jordanKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={jordanKids} />
    </>
  );
};

export default DetailProductJordanKidsView;
