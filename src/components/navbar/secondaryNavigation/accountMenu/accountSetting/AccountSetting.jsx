import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdOpenInNew } from "react-icons/md";
import { TbTransform } from "react-icons/tb";

const AccountSetting = () => {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <div className="flex items-center gap-2 px-3">
        <span>
          <MdOutlineEdit className="text-3xl text-gray-300" />
        </span>
        <p className="hover:underline text-sm">Manage Profile</p>
      </div>

      <div className="flex items-center gap-2 px-3">
        <span>
          <MdOpenInNew className="text-3xl text-gray-300" />
        </span>
        <p className="hover:underline text-sm">Edit Profile</p>
      </div>
      <div className="flex items-center gap-2 px-3">
        <span>
          <TbTransform className="text-3xl text-gray-300" />
        </span>
        <p className="hover:underline text-sm">Transfer Profile</p>
      </div>
      <div className="flex items-center gap-2 px-3">
        <span>
          <CiUser className="text-3xl text-gray-300" />
        </span>
        <p className="hover:underline text-sm">Account</p>
      </div>
      <div className="flex items-center gap-2 px-3">
        <span>
          <IoHelpCircleOutline className="text-3xl text-gray-300" />
        </span>
        <p className="hover:underline text-sm">Help Center</p>
      </div>
    </div>
  );
};

export default AccountSetting;
