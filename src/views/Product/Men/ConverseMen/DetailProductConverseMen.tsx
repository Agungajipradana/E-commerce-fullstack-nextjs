import { ProductsProps } from "@/types";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductConverseMenView = ({ converseMen }: { converseMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={converseMen} />
    </>
  );
};

export default DetailProductConverseMenView;
