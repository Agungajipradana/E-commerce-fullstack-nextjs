import { fetcher } from "@/lib/swr/fetcher";
import AdidasWomanView from "@/views/Product/Woman/AdidasWoman";
import useSWR from "swr";

const AdidasWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/adidas", fetcher);
  return (
    <>
      <AdidasWomanView adidasWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default AdidasWomanPage;
