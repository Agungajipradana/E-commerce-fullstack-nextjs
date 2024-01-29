import { fetcher } from "@/lib/swr/fetcher";
import ConverseWomanView from "@/views/Product/Woman/ConverseWoman";
import useSWR from "swr";

const ConverseWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/converse", fetcher);
  return (
    <>
      <ConverseWomanView converseWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default ConverseWomanPage;
