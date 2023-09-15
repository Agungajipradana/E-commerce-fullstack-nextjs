import { fetcher } from "@/lib/swr/fetcher";
import NikeManView from "@/views/Product/Men/NikeMan";
import useSWR from "swr";

const NikeMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/nike", fetcher);
  return (
    <>
      <NikeManView nikeMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default NikeMenPage;
