import { fetcher } from "@/lib/swr/fetcher";
import JordanMenView from "@/views/Product/Men/JordanMen";
import useSWR from "swr";

const JordanMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/jordan", fetcher);
  return (
    <>
      <JordanMenView jordanMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default JordanMenPage;
