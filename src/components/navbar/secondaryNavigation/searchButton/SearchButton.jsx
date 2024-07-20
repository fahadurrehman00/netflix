import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const containerRef = useRef(null);
  const handleSearchClick = () => {
    setIsSearchOpen(true);
    searchInputRef.current.focus();
  };

  const handleClickOutside = useCallback((event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <div
      ref={containerRef}
      className={`flex items-center border cursor-pointer ${
        isSearchOpen ? "border-gray-400 bg-black px-2" : "border-transparent"
      } transition-all duration-500 ease-in-out `}>
      <IoSearchOutline className="text-2xl" onClick={handleSearchClick} />
      <input
        ref={searchInputRef}
        type="text"
        className={`transition-all duration-500 ease-in-out p-2 bg-black text-white focus:outline-none ${
          isSearchOpen ? "w-64 opacity-100 visible" : "w-0 opacity-0 invisible"
        }`}
        placeholder="Titles, people, genres"
        onBlur={() => {
          if (searchInputRef.current.value === "") {
            setIsSearchOpen(false);
          }
        }}
      />
    </div>
  );
};
export default SearchButton;
