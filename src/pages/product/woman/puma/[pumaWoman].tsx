import { ProductsProps } from "@/types";
import DetailProductPumaWomanView from "@/views/Product/Woman/PumaWoman/DetailProductPumaWoman";

const DetailProductPumaWomanPage = ({ pumaWoman }: { pumaWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductPumaWomanView pumaWoman={pumaWoman} />
    </>
  );
};

export default DetailProductPumaWomanPage;

export async function getServerSideProps({ params }: { params: { pumaWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/puma/pumaWoman/${params.pumaWoman}`);
  const response = await res.json();

  return {
    props: {
      pumaWoman: response.data,
    },
  };
}
