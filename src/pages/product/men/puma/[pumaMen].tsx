import { ProductsProps } from "@/types";
import DetailProductPumaMenView from "@/views/Product/Men/PumaMen/DetailProductPumaMen";

const DetailProductPumaMenPage = ({ pumaMen }: { pumaMen: ProductsProps }) => {
  return (
    <>
      <DetailProductPumaMenView pumaMen={pumaMen} />
    </>
  );
};

export default DetailProductPumaMenPage;

export async function getServerSideProps({ params }: { params: { pumaMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/puma/pumaMen/${params.pumaMen}`);
  const response = await res.json();

  return {
    props: {
      pumaMen: response.data,
    },
  };
}
