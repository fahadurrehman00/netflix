import React from "react";
import { CiLock } from "react-icons/ci";

const UserProfile = ({ user }) => {
  return (
    <div className="px-3 group/item flex flex-row gap-3 items-center w-11/12 justify-between">
      <div className="flex items-center gap-3">
        <img src={user.userImage} alt="Profile" className="rounded-md w-8" />
        <p className="text-white text-sm hover:underline">{user.userName}</p>
      </div>
      <span className="ml-auto">
        <CiLock />
      </span>
    </div>
  );
};

export default UserProfile;
