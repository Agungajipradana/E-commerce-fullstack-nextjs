import { ProductsProps } from "@/types";
import DetailProductVansMenView from "@/views/Product/Men/VansMen/DetailProductVansMen";

const DetailProductVansMenPage = ({ vansMen }: { vansMen: ProductsProps }) => {
  return (
    <>
      <DetailProductVansMenView vansMen={vansMen} />
    </>
  );
};

export default DetailProductVansMenPage;

export async function getServerSideProps({ params }: { params: { vansMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/vans/vansMen/${params.vansMen}`);
  const response = await res.json();

  return {
    props: {
      vansMen: response.data,
    },
  };
}
