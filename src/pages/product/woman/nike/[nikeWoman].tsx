import { ProductsProps } from "@/types";
import DetailProductNikeWomanView from "@/views/Product/Woman/NikeWoman/DetailProductNikeWoman";

const DetailProductNikeWomanPage = ({ nikeWoman }: { nikeWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductNikeWomanView nikeWoman={nikeWoman} />
    </>
  );
};

export default DetailProductNikeWomanPage;

export async function getServerSideProps({ params }: { params: { nikeWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/nike/nikeWoman/${params.nikeWoman}`);
  const response = await res.json();

  return {
    props: {
      nikeWoman: response.data,
    },
  };
}
