import MenuItems from "./menuItems";

const ListMenu: React.FC = () => {
  return (
    <div className="w-full">
      <ul className="flex space-x-5 text-gray-400 px-1.5">
        <MenuItems name={"GAME"} />
        <MenuItems name={"TOP-UP VIA LOGIN"} />
        <MenuItems name={"TOP-UP VIA ID"} />
        <MenuItems name={"JOKI GAME"} />
      </ul>
      <hr className="border-gray-600 border-[1px] mt-2" />
    </div>
  );
};

export default ListMenu;
