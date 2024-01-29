import { ProductsProps } from "@/types";
import DetailProductConverseKidsView from "@/views/Product/Kids/ConverseKids/DetailProductConverseKids";

const DetailProductConverseKidsPage = ({ converseKids }: { converseKids: ProductsProps }) => {
  return (
    <>
      <DetailProductConverseKidsView converseKids={converseKids} />
    </>
  );
};

export default DetailProductConverseKidsPage;

export async function getServerSideProps({ params }: { params: { converseKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/converse/converseKids/${params.converseKids}`);
  const response = await res.json();

  return {
    props: {
      converseKids: response.data,
    },
  };
}
