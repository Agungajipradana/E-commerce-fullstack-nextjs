import { ProductsProps } from "@/types";
import DetailProductNikeKidsView from "@/views/Product/Kids/NikeKids/DetailProductNikeKids";
import { useRouter } from "next/router";

const DetailProductNikeKidsPage = ({ nikeKids }: { nikeKids: ProductsProps }) => {
  const { query } = useRouter();

  return (
    <>
      <DetailProductNikeKidsView nikeKids={nikeKids} />
    </>
  );
};

export default DetailProductNikeKidsPage;

export async function getServerSideProps({ params }: { params: { nikeKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/nike/nikeKids/${params.nikeKids}`);
  const response = await res.json();

  return {
    props: {
      nikeKids: response.data,
    },
  };
}
