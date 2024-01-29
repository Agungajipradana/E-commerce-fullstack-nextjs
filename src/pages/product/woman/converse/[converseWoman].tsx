import { ProductsProps } from "@/types";
import DetailProductConverseMenView from "@/views/Product/Men/ConverseMen/DetailProductConverseMen";

const DetailProductConverseWomanPage = ({ converseWoman }: { converseWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductConverseMenView converseMen={converseWoman} />
    </>
  );
};

export default DetailProductConverseWomanPage;

export async function getServerSideProps({ params }: { params: { converseWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/converse/converseWoman/${params.converseWoman}`);
  const response = await res.json();

  return {
    props: {
      converseWoman: response.data,
    },
  };
}
