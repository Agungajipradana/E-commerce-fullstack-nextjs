import { fetcher } from "@/lib/swr/fetcher";
import VansMenView from "@/views/Product/Men/VansMen";
import useSWR from "swr";

const VansMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/vans", fetcher);
  return (
    <>
      <VansMenView vansMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default VansMenPage;
