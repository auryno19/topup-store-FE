import Banner from "./banner";
import SearchForm from "./searchForm";
import ListMenu from "./listMenu";
import ListCard from "./listCard";

export default function Home() {
  return (
    <div className="py-6 px-10">
      <Banner />
      <SearchForm />
      <ListMenu />
      <ListCard />
    </div>
  );
}
