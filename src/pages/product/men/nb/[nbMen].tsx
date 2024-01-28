import { ProductsProps } from "@/types";
import DetailProductNbMenView from "@/views/Product/Men/NbMen/DetailProductNbMen";

const DetailProductNbMenPage = ({ nbMen }: { nbMen: ProductsProps }) => {
  return (
    <>
      <DetailProductNbMenView nbMen={nbMen} />
    </>
  );
};

export default DetailProductNbMenPage;

export async function getServerSideProps({ params }: { params: { nbMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/nb/nbMen/${params.nbMen}`);
  const response = await res.json();

  return {
    props: {
      nbMen: response.data,
    },
  };
}
