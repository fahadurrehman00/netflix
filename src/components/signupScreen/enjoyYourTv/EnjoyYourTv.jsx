import React from "react";
import Tv from "./tv/Tv";

const EnjoyYourTv = () => {
  return (
    <div className="flex items-center text-center flex-col justify-center bg-black mt-2 py-8 px-6 md:flex-row md:text-left">
      <div className="md:w-1/2">
        <h2 className="text-3xl sm:text-5xl font-black">Enjoy on your TV</h2>
        <h4 className="text-base sm:text-2xl font-normal mt-4">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h4>
      </div>
      <Tv />
    </div>
  );
};

export default EnjoyYourTv;
