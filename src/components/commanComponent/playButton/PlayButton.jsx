import React from "react";
import { FaPlay } from "react-icons/fa";

const PlayButton = ({ title }) => {
  return (
    <button className="bg-white text-black rounded-md py-1 md:py-3 px-2 md:px-8 w-auto text-lg hover:opacity-80 md:text-3xl font-medium lg:text-[22px] flex flex-row items-center hover:bg-opacity-90 transition">
      <FaPlay className="text-lg md:text-3xl mr-3" /> {title}
    </button>
  );
};

export default PlayButton;
