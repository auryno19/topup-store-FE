// app/page.tsx

// import Banner from "./banner";
import SearchForm from "./searchForm";
import ListMenu from "./listMenu";
import ListCard from "./listCard";
import HandleCarousel from "./handleCarousel";

// import { useEffect } from "react";
// import UserFetcher from "@/components/userFetcher";

const Home = async () => {
  // const username = await UserFetcher();
  // console.log("User data halo:", username?.sub);

  return (
    <div className="py-6 px-10">
      {/* <Banner /> */}
      <HandleCarousel />
      <SearchForm />
      <ListMenu />
      <ListCard />
    </div>
  );
};

export default Home;
