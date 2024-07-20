import React from "react";

const NavbarItem = ({ label, active, onClick }) => {
  return (
    <div
      className={`text-white cursor-pointer hover:text-gray-300 transition ${
        active ? "font-semibold" : ""
      }`}
      onClick={onClick}>
      {label}
    </div>
  );
};

export default NavbarItem;
