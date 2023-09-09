import { ProductsProps } from "@/types";
import ProductView from "@/views/Product";

const ProductPage = (props: { products: ProductsProps[] }) => {
  const { products } = props;
  return (
    <>
      <div>
        <ProductView products={products} />
      </div>
    </>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
