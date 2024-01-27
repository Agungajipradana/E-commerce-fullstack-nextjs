import { fetcher } from "@/lib/swr/fetcher";
import JordanWomanView from "@/views/Product/Woman/JordanWoman";
import useSWR from "swr";

const JordanWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/jordan", fetcher);
  return (
    <>
      <JordanWomanView jordanWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default JordanWomanPage;
