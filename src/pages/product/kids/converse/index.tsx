import { fetcher } from "@/lib/swr/fetcher";
import ConverseKidsView from "@/views/Product/Kids/ConverseKids";
import useSWR from "swr";

const ConverseKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/converse", fetcher);
  return (
    <>
      <ConverseKidsView converseKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default ConverseKidsPage;
