import { fetcher } from "@/lib/swr/fetcher";
import OnitsukaKidsView from "@/views/Product/Kids/OnitsukaKids";
import useSWR from "swr";

const OnitsukaKidsPage = () => {
  const { data, error, isLoading } = useSWR("/api/kids/onitsuka", fetcher);
  return (
    <>
      <OnitsukaKidsView onitsukaKids={isLoading ? [] : data?.data} />
    </>
  );
};

export default OnitsukaKidsPage;
