import { fetcher } from "@/lib/swr/fetcher";
import VansKidsView from "@/views/Product/Kids/VansKids";
import useSWR from "swr";

const VansKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/vans", fetcher);
  return (
    <>
      <VansKidsView vansKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default VansKidsPage;
