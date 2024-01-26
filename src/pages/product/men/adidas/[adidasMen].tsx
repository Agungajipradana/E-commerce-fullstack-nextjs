import { ProductsProps } from "@/types";
import DetailProductAdidasMenView from "@/views/Product/Men/AdidasMen/DetailProductAdidasMen";
import { useRouter } from "next/router";

const DetailProductAdidasMenPage = ({ adidasMen }: { adidasMen: ProductsProps }) => {
  const { query } = useRouter();

  return (
    <>
      <DetailProductAdidasMenView adidasMen={adidasMen} />
    </>
  );
};

export default DetailProductAdidasMenPage;

export async function getServerSideProps({ params }: { params: { adidasMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/adidas/adidasMen/${params.adidasMen}`);
  const response = await res.json();

  return {
    props: {
      adidasMen: response.data,
    },
  };
}
