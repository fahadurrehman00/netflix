import React, { useCallback, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import AccountMenu from "./accountMenu/AccountMenu";
import SearchButton from "./searchButton/SearchButton";
import NotificationButton from "./notificationButton/NotificationButton";

const SecondaryNavigation = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  });

  return (
    <div className="flex ml-auto items-center gap-5">
      <SearchButton />
      <NotificationButton />
      <div
        onClick={toggleAccountMenu}
        className="flex flex-grow items-center gap-2 cursor-pointer relative">
        <div className="w-8 h-8 lg:h-10 overflow-hidden flex items-center">
          <img className=" rounded-sm" src="/images/profile.png" alt="Profile" />
        </div>
        <TiArrowSortedDown
          className={`text-white transition ${
            showAccountMenu ? "rotate-180" : ""
          }`}
        />
        <AccountMenu visible={showAccountMenu} />
      </div>
    </div>
  );
};

export default SecondaryNavigation;
