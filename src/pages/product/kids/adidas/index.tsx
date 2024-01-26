import { fetcher } from "@/lib/swr/fetcher";
import AdidasKidsView from "@/views/Product/Kids/AdidasKids";
import useSWR from "swr";

const AdidasKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/adidas", fetcher);
  return (
    <>
      <AdidasKidsView adidasKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default AdidasKidsPage;
