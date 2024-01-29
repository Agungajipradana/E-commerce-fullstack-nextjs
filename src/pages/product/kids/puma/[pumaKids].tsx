import { ProductsProps } from "@/types";
import DetailProductPumaKidsView from "@/views/Product/Kids/PumaKids/DetailProductPumaKids";

const DetailProductPumaKidsPage = ({ pumaKids }: { pumaKids: ProductsProps }) => {
  return (
    <>
      <DetailProductPumaKidsView pumaKids={pumaKids} />
    </>
  );
};

export default DetailProductPumaKidsPage;

export async function getServerSideProps({ params }: { params: { pumaKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/puma/pumaKids/${params.pumaKids}`);
  const response = await res.json();

  return {
    props: {
      pumaKids: response.data,
    },
  };
}
