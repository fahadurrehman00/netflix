import React from "react";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const BrowseProfile = ({ profile }) => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate(`/netflix`);
  };
  return (
    <div className="text-center flex flex-col items-center justify-center gap-4 border-gray-300 rounded-md p-4 group">
      <div
        onClick={handleProfileClick}
        className="flex flex-col gap-2 items-center group-hover:border-white">
        <img
          className="w-48 rounded-md border-[3px] border-gray-500 group-hover:border-white cursor-pointer"
          src={profile.image}
          alt=""
        />
        <h4 className="text-2xl text-zinc-500 group-hover:text-white cursor-pointer">
          {profile.name}
        </h4>
      </div>
      <div>
        <CiLock className="text-xl" />
      </div>
    </div>
  );
};

export default BrowseProfile;
