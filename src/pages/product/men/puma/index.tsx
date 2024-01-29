import { fetcher } from "@/lib/swr/fetcher";
import PumaMenView from "@/views/Product/Men/PumaMen";
import useSWR from "swr";

const PumaMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/puma", fetcher);
  return (
    <>
      <PumaMenView pumaMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default PumaMenPage;
