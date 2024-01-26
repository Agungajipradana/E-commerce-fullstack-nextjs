import { ProductsProps } from "@/types";
import DetailProductAdidasWomanView from "@/views/Product/Woman/AdidasWoman/DetailProductAdidasWoman";

const DetailProductAdidasWomanPage = ({ adidasWoman }: { adidasWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductAdidasWomanView adidasWoman={adidasWoman} />
    </>
  );
};

export default DetailProductAdidasWomanPage;

export async function getServerSideProps({ params }: { params: { adidasWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/adidas/adidasWoman/${params.adidasWoman}`);
  const response = await res.json();

  return {
    props: {
      adidasWoman: response.data,
    },
  };
}
