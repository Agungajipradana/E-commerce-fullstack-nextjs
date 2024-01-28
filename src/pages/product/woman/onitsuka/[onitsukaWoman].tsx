import { ProductsProps } from "@/types";
import DetailProductOnitsukaWomanView from "@/views/Product/Woman/OnitsukaWoman/DetailProductOnitsukaWoman";

const DetailProductOnitsukaWomanPage = ({ onitsukaWoman }: { onitsukaWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductOnitsukaWomanView onitsukaWoman={onitsukaWoman} />
    </>
  );
};

export default DetailProductOnitsukaWomanPage;

export async function getServerSideProps({ params }: { params: { onitsukaWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/onitsuka/onitsukaWoman/${params.onitsukaWoman}`);
  const response = await res.json();

  return {
    props: {
      onitsukaWoman: response.data,
    },
  };
}
