import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductAdidasKidsView = ({ adidasKids }: { adidasKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={adidasKids} />
    </>
  );
};

export default DetailProductAdidasKidsView;
