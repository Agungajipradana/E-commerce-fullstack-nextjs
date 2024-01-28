import { fetcher } from "@/lib/swr/fetcher";
import OnitsukaMenView from "@/views/Product/Men/OnitsukaMen";
import useSWR from "swr";

const OnitsukaMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/onitsuka", fetcher);
  return (
    <>
      <OnitsukaMenView onitsukaMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default OnitsukaMenPage;
