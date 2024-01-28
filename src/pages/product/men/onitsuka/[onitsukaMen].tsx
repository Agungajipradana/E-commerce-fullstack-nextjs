import { ProductsProps } from "@/types";
import DetailProductOnitsukaMenView from "@/views/Product/Men/OnitsukaMen/DetailProductOnitsukaMen";

const DetailProductOnitsukaMenPage = ({ onitsukaMen }: { onitsukaMen: ProductsProps }) => {
  return (
    <>
      <DetailProductOnitsukaMenView onitsukaMen={onitsukaMen} />
    </>
  );
};

export default DetailProductOnitsukaMenPage;

export async function getServerSideProps({ params }: { params: { onitsukaMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/onitsuka/onitsukaMen/${params.onitsukaMen}`);
  const response = await res.json();

  return {
    props: {
      onitsukaMen: response.data,
    },
  };
}
