import { fetcher } from "@/lib/swr/fetcher";
import VansWomanView from "@/views/Product/Woman/VansWoman";
import useSWR from "swr";

const VansWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/vans", fetcher);
  return (
    <>
      <VansWomanView vansWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default VansWomanPage;
