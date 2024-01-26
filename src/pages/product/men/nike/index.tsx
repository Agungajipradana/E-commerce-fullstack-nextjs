import { fetcher } from "@/lib/swr/fetcher";
import NikeMenView from "@/views/Product/Men/NikeMen";
import useSWR from "swr";

const NikeMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/nike", fetcher);
  return (
    <>
      <NikeMenView nikeMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default NikeMenPage;
