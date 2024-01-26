import { ProductsProps } from "@/types";
import DetailProductAdidasKidsView from "@/views/Product/Kids/AdidasKids/DetailProductAdidasKids";
import { useRouter } from "next/router";

const DetailProductAdidasKidsPage = ({ adidasKids }: { adidasKids: ProductsProps }) => {
  return (
    <>
      <DetailProductAdidasKidsView adidasKids={adidasKids} />
    </>
  );
};

export default DetailProductAdidasKidsPage;

export async function getServerSideProps({ params }: { params: { adidasKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/adidas/adidasKids/${params.adidasKids}`);
  const response = await res.json();

  return {
    props: {
      adidasKids: response.data,
    },
  };
}
