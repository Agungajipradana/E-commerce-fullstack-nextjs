import { fetcher } from "@/lib/swr/fetcher";
import JordanKidsView from "@/views/Product/Kids/JordanKids";
import useSWR from "swr";

const JordanKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/jordan", fetcher);
  return (
    <>
      <JordanKidsView jordanKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default JordanKidsPage;
