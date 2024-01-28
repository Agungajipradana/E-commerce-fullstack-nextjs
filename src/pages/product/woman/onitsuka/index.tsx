import { fetcher } from "@/lib/swr/fetcher";
import OnitsukaWomanView from "@/views/Product/Woman/OnitsukaWoman";
import useSWR from "swr";

const OnitsukaWomanPage = () => {
  const { data, error, isLoading } = useSWR("/api/woman/onitsuka", fetcher);
  return (
    <>
      <OnitsukaWomanView onitsukaWoman={isLoading ? [] : data?.data} />
    </>
  );
};

export default OnitsukaWomanPage;
