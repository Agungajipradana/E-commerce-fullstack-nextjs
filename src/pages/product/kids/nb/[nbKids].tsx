import { ProductsProps } from "@/types";
import DetailProductNbKidsView from "@/views/Product/Kids/NbKids/DetailProductNbKids";

const DetailProductNbKidsPage = ({ nbKids }: { nbKids: ProductsProps }) => {
  return (
    <>
      <DetailProductNbKidsView nbKids={nbKids} />
    </>
  );
};

export default DetailProductNbKidsPage;

export async function getServerSideProps({ params }: { params: { nbKids: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/kids/nb/nbKids/${params.nbKids}`);
  const response = await res.json();

  return {
    props: {
      nbKids: response.data,
    },
  };
}
