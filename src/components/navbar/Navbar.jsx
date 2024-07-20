import React, { useState, useCallback, useEffect } from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./mobileMenu/MobileMenu";
import SecondaryNavigation from "./secondaryNavigation/SecondaryNavigation";
import { TiArrowSortedDown } from "react-icons/ti";

const TOP_OFFSET = 66;
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const handleItemClick = (label) => {
    setActiveItem(label);
  };
  return (
    <nav className="w-full z-40 fixed">
      <div
        className={`px-4 md:px-14 py-3 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}>
        <a href="/">
          <img
            className="h-5 lg:h-8"
            src="/images/netflixLogo.png"
            alt="Logo"
          />
        </a>
        <div className="flex-row ml-8 gap-5 hidden lg:flex text-sm">
          <a href="/" onClick={() => handleItemClick("Home")}>
            <NavbarItem label="Home" active={activeItem === "Home"} />
          </a>
          <NavbarItem
            label="TV Shows"
            onClick={() => handleItemClick("TV Shows")}
            active={activeItem === "TV Shows"}
          />
          <NavbarItem
            label="Movies"
            onClick={() => handleItemClick("Movies")}
            active={activeItem === "Movies"}
          />
          <NavbarItem
            label="New & Popular"
            onClick={() => handleItemClick("New & Popular")}
            active={activeItem === "New & Popular"}
          />
          <NavbarItem
            label="My List"
            onClick={() => handleItemClick("My List")}
            active={activeItem === "My List"}
          />
          <NavbarItem
            label="Browse by Languages"
            onClick={() => handleItemClick("Browse by Languages")}
            active={activeItem === "Browse by Languages"}
          />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <TiArrowSortedDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : ""
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <SecondaryNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
