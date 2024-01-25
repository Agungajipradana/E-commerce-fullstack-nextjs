import { ProductsProps } from "@/types";
import styles from "./DetailProductNikeMen.module.scss";
import CardProductDetail from "@/components/Fragments/Card/CardProductDetail/CardProductDetail";

const DetailProductNikeMenView = ({ nikeMen }: { nikeMen: ProductsProps }) => {
  return (
    <>
      <CardProductDetail detailProduct={nikeMen} />
    </>
  );
};

export default DetailProductNikeMenView;
