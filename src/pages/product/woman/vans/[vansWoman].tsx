import { ProductsProps } from "@/types";
import DetailProductVansWomanView from "@/views/Product/Woman/VansWoman/DetailProductVansWoman";

const DetailProductVansWomanPage = ({ vansWoman }: { vansWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductVansWomanView vansWoman={vansWoman} />
    </>
  );
};

export default DetailProductVansWomanPage;

export async function getServerSideProps({ params }: { params: { vansWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/vans/vansWoman/${params.vansWoman}`);
  const response = await res.json();

  return {
    props: {
      vansWoman: response.data,
    },
  };
}
