import { ProductsProps } from "@/types";
import DetailProductNikeMenView from "@/views/Product/Men/NikeMen/DetailProductNikeMen";
import { useRouter } from "next/router";

const DetailProductNikeMenPage = ({ nikeMen }: { nikeMen: ProductsProps }) => {
  const { query } = useRouter();

  return (
    <>
      <DetailProductNikeMenView nikeMen={nikeMen} />
    </>
  );
};

export default DetailProductNikeMenPage;

export async function getServerSideProps({ params }: { params: { nikeMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/nike/nikeMen/${params.nikeMen}`);
  const response = await res.json();

  return {
    props: {
      nikeMen: response.data,
    },
  };
}
