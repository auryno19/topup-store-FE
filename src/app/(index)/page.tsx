// app/page.tsx

// import Banner from "./banner";
import SearchForm from "./searchForm";
import ListMenu from "./listMenu";
import ListCard from "./listCard";
import Carousel from "@/components/carousel";
// import { useEffect } from "react";
// import UserFetcher from "@/components/userFetcher";

const Home = async () => {
  // const username = await UserFetcher();
  // console.log("User data halo:", username?.sub);
  const banner = [
    "/banner.jpeg",
    "/title-item.png",
    "/banner.jpeg",
    "/title-item.png",
  ];
  return (
    <div className="py-6 px-10">
      {/* <Banner /> */}
      <div className="w-[60%] m-auto">
        <Carousel slides={banner} />
      </div>
      <SearchForm />
      <ListMenu />
      <ListCard />
    </div>
  );
};

export default Home;
