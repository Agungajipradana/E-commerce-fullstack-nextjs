import { fetcher } from "@/lib/swr/fetcher";
import NbKidsView from "@/views/Product/Kids/NbKids";
import useSWR from "swr";

const NbKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/nb", fetcher);
  return (
    <>
      <NbKidsView nbKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default NbKidsPage;
