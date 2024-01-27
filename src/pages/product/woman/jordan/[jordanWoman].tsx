import { ProductsProps } from "@/types";
import DetailProductJordanWomanView from "@/views/Product/Woman/JordanWoman/DetailProductJordanWoman";

const DetailProductJordanWomanPage = ({ jordanWoman }: { jordanWoman: ProductsProps }) => {
  return (
    <>
      <DetailProductJordanWomanView jordanWoman={jordanWoman} />
    </>
  );
};

export default DetailProductJordanWomanPage;

export async function getServerSideProps({ params }: { params: { jordanWoman: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/woman/jordan/jordanWoman/${params.jordanWoman}`);
  const response = await res.json();

  return {
    props: {
      jordanWoman: response.data,
    },
  };
}
