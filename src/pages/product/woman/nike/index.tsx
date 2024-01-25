import { fetcher } from "@/lib/swr/fetcher";
import NikeWomanView from "@/views/Product/Woman/NikeWoman";
import useSWR from "swr";

const NikeWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/nike", fetcher);
  return (
    <>
      <NikeWomanView nikeWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default NikeWomanPage;
