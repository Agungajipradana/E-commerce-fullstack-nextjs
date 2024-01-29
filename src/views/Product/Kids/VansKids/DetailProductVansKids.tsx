import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductVansKidsView = ({ vansKids }: { vansKids: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={vansKids} />
    </>
  );
};

export default DetailProductVansKidsView;
