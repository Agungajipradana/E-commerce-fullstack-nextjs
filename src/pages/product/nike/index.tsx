import NikeBrandViews from "@/views/PopularBrand/Nike";
import { fetcher } from "@/lib/swr/fetcher";
import useSWR from "swr";

const NikePage = () => {
  const { data, error, isLoading } = useSWR("/api/men/nike", fetcher);
  return (
    <>
      <div>
        <NikeBrandViews nikeMen={isLoading ? [] : data?.data} />
      </div>
    </>
  );
};

export default NikePage;
