import { fetcher } from "@/lib/swr/fetcher";
import AdidasMenView from "@/views/Product/Men/AdidasMen";
import useSWR from "swr";

const AdidasMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/adidas", fetcher);
  return (
    <>
      <AdidasMenView adidasMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default AdidasMenPage;
