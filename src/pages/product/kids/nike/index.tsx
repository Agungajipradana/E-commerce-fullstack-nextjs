import { fetcher } from "@/lib/swr/fetcher";
import NikeKidsView from "@/views/Product/Kids/NikeKids";
import useSWR from "swr";

const NikeKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/nike", fetcher);
  return (
    <>
      <NikeKidsView nikeKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default NikeKidsPage;
