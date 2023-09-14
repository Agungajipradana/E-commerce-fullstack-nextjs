import { fetcher } from "@/lib/swr/fetcher";
import { ProductsProps } from "@/types";
import DetailProduct from "@/views/DetailProduct";
import DetailProductNikeMenView from "@/views/Product/Men/NikeMan/DetailProductNikeMen";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductNikeMenPage = ({ product }: { product: ProductsProps }) => {
  const { query } = useRouter();

  return (
    <>
      <DetailProductNikeMenView product={product} />
    </>
  );
};

export default DetailProductNikeMenPage;

export async function getServerSideProps({ params }: { params: { product: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/nike/nike-men?id=${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
