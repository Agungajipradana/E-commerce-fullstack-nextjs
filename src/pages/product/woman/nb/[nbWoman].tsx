import { ProductsProps } from "@/types";
import DetailProductNbWomanView from "@/views/Product/Woman/NbWoman/DetailProductNbWoman";

const DetailProductNbWomanPage = ({ nbWoman }: { nbWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductNbWomanView nbWoman={nbWoman} />
    </>
  );
};

export default DetailProductNbWomanPage;

export async function getServerSideProps({ params }: { params: { nbWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/nb/nbWoman/${params.nbWoman}`);
  const response = await res.json();

  return {
    props: {
      nbWoman: response.data,
    },
  };
}
