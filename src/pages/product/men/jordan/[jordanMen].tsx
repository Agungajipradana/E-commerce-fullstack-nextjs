import { ProductsProps } from "@/types";
import DetailProductJordanMenView from "@/views/Product/Men/JordanMen/DetailProductJordanMen";

const DetailProductJordanMenPage = ({ jordanMen }: { jordanMen: ProductsProps }) => {
  return (
    <>
      <DetailProductJordanMenView jordanMen={jordanMen} />
    </>
  );
};

export default DetailProductJordanMenPage;

export async function getServerSideProps({ params }: { params: { jordanMen: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/men/jordan/jordanMen/${params.jordanMen}`);
  const response = await res.json();

  return {
    props: {
      jordanMen: response.data,
    },
  };
}
