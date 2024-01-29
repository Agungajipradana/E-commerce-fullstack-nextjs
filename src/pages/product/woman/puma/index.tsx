import { fetcher } from "@/lib/swr/fetcher";
import PumaWomanView from "@/views/Product/Woman/PumaWoman";
import useSWR from "swr";

const PumaWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/puma", fetcher);
  return (
    <>
      <PumaWomanView pumaWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default PumaWomanPage;
