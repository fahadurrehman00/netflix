import React from "react";
import NavbarItem from "../NavbarItem";

const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="absolute bg-black top-8 left-0 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          <NavbarItem label="Home" />
          <NavbarItem label="TV Shows" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
