import { fetcher } from "@/lib/swr/fetcher";
import NbWomanView from "@/views/Product/Woman/NbWoman";
import useSWR from "swr";

const NbWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/nb", fetcher);
  return (
    <>
      <NbWomanView nbWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default NbWomanPage;
