import { fetcher } from "@/lib/swr/fetcher";
import { ProductsProps } from "@/types";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductsProps }) => {
  const { query } = useRouter();

  // Client-side
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <>
      {/* Client-side */}
      <div>{/* <DetailProduct product={isLoading ? {} : data.data} /> */}</div>
      {/* Server-side & Static-side */}
      <DetailProduct product={product} />
    </>
  );
};

export default DetailProductPage;

// export async function getServerSideProps({ params }: { params: { product: string } }) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: ProductsProps) => ({
    params: {
      product: product.id,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { product: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
