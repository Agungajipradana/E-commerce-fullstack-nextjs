import { ProductsProps } from "@/types";
import DetailProductJordanKidsView from "@/views/Product/Kids/JordanKids/DetailProductJordanKids";

const DetailProductJordanKidsPage = ({ jordanKids }: { jordanKids: ProductsProps }) => {
  return (
    <>
      <DetailProductJordanKidsView jordanKids={jordanKids} />
    </>
  );
};

export default DetailProductJordanKidsPage;

export async function getServerSideProps({ params }: { params: { jordanKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/jordan/jordanKids/${params.jordanKids}`);
  const response = await res.json();

  return {
    props: {
      jordanKids: response.data,
    },
  };
}
