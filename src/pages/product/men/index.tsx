import { fetcher } from "@/lib/swr/fetcher";
import MenView from "@/views/Product/Men";
import useSWR from "swr";

const MenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/nike-man", fetcher);
  return (
    <>
      <MenView nikeMan={isLoading ? [] : data?.data} />
    </>
  );
};

export default MenPage;
