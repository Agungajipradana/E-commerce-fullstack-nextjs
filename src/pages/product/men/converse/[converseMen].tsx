import { ProductsProps } from "@/types";
import DetailProductConverseMenView from "@/views/Product/Men/ConverseMen/DetailProductConverseMen";

const DetailProductConverseMenPage = ({ converseMen }: { converseMen: ProductsProps }) => {
  return (
    <>
      <DetailProductConverseMenView converseMen={converseMen} />
    </>
  );
};

export default DetailProductConverseMenPage;

export async function getServerSideProps({ params }: { params: { converseMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/converse/converseMen/${params.converseMen}`);
  const response = await res.json();

  return {
    props: {
      converseMen: response.data,
    },
  };
}
