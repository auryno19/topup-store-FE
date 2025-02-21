import Image from "next/image";
import ListIMenu from "./listIMenu";
const Sidebar = () => {
  return (
    <div className="bg-sky-50 w-[18%] h-[96vh] opacity-90 rounded-lg shadow-lg py-4 px-3">
      <div className="relative w-full h-6 mt-2">
        <Image
          src="/next.svg"
          layout="fill"
          objectFit="contain"
          alt="Fufa Store Logo"
          className="w-32 h-8"
        />
      </div>
      <div className="flex w-full justify-center">
        <hr className=" w-[80%] items-center my-3 border-slate-600 opacity-75" />
      </div>
      <ListIMenu />
    </div>
  );
};

export default Sidebar;
