import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductOnitsukaKidsView = ({ onitsukaKids }: { onitsukaKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={onitsukaKids} />
    </>
  );
};

export default DetailProductOnitsukaKidsView;
