import { fetcher } from "@/lib/swr/fetcher";
import ConverseMenView from "@/views/Product/Men/ConverseMen";
import useSWR from "swr";

const ConverseMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/converse", fetcher);
  return (
    <>
      <ConverseMenView converseMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default ConverseMenPage;
