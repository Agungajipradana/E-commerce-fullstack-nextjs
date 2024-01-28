import { ProductsProps } from "@/types";

import DetailProductOnitsukaKidsView from "@/views/Product/Kids/OnitsukaKids/DetailProductOnitsukaKids";
import { useRouter } from "next/router";

const DetailProductOnitsukaKidsPage = ({ onitsukaKids }: { onitsukaKids: ProductsProps }) => {
  const { query } = useRouter();

  return (
    <>
      <DetailProductOnitsukaKidsView onitsukaKids={onitsukaKids} />
    </>
  );
};

export default DetailProductOnitsukaKidsPage;

export async function getServerSideProps({ params }: { params: { onitsukaKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/onitsuka/onitsukaKids/${params.onitsukaKids}`);
  const response = await res.json();

  return {
    props: {
      onitsukaKids: response.data,
    },
  };
}
