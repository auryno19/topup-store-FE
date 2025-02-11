import React from "react";

interface MenuItemsProps {
  name: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ name }) => {
  return (
    <li className="relative group cursor-pointer">
      <p className="group-hover:text-white transition-all duration-200 ease-in-out lg:text-base text-xs">
        {name}
      </p>
      <hr className="absolute left-1/2 -translate-x-1/2 w-[125%] mt-2 border-transparent border-[1px] group-hover:border-white transition-all duration-200 ease-in-out" />
    </li>
  );
};

export default MenuItems;
