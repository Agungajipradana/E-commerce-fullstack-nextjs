import { fetcher } from "@/lib/swr/fetcher";
import NbMenView from "@/views/Product/Men/NbMen";
import useSWR from "swr";

const NbMenPage = () => {
  const { data, error, isLoading } = useSWR("/api/men/nb", fetcher);
  return (
    <>
      <NbMenView nbMen={isLoading ? [] : data?.data} />
    </>
  );
};

export default NbMenPage;
