import { ProductsProps } from "@/types";
import DetailProductVansKidsView from "@/views/Product/Kids/VansKids/DetailProductVansKids";

const DetailProductVansKidsPage = ({ vansKids }: { vansKids: ProductsProps }) => {
  return (
    <>
      <DetailProductVansKidsView vansKids={vansKids} />
    </>
  );
};

export default DetailProductVansKidsPage;

export async function getServerSideProps({ params }: { params: { vansKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/vans/vansKids/${params.vansKids}`);
  const response = await res.json();

  return {
    props: {
      vansKids: response.data,
    },
  };
}
