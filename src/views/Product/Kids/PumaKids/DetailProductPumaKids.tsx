import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductPumaKidsView = ({ pumaKids }: { pumaKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={pumaKids} />
    </>
  );
};

export default DetailProductPumaKidsView;
