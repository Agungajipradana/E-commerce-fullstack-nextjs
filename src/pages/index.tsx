import EssentialsView from "@/views/Essentials";
import PopularBrandView from "@/views/PopularBrand";
import HeroPage from "@/views/Product/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeroPage />
      <EssentialsView />
      <PopularBrandView />
    </>
  );
}
