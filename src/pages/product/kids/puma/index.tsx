import { fetcher } from "@/lib/swr/fetcher";
import PumaKidsView from "@/views/Product/Kids/PumaKids";
import useSWR from "swr";

const PumaKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/puma", fetcher);
  return (
    <>
      <PumaKidsView pumaKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default PumaKidsPage;
